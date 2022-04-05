import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthContext = React.createContext();
export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const navigate = useNavigate();

    const signUp = async (email, password) => {
        const user = await createUserWithEmailAndPassword(auth, email, password)
            .then((createdUser) => {
                setCurrentUser(createdUser.user);
                sessionStorage.setItem(
                    "Auth Token",
                    createdUser._tokenResponse.refreshToken
                );
                navigate("/home");
            })
            .catch((error) => {
                if (error.code === "auth/email-already-in-use") {
                    toast.error("Email Already in Use");
                } else {
                    console.log(error.message);
                }
            });
    };

    const signIn = async (email, password) => {
        const user = await signInWithEmailAndPassword(auth, email, password)
            .then((createdUser) => {
                setCurrentUser(createdUser.user); 

                sessionStorage.setItem(
                    "authToken",
                    createdUser._tokenResponse.refreshToken
                );
                sessionStorage.setItem("email", createdUser.user.email);
                sessionStorage.setItem("id", createdUser.user.uid);
                navigate("/home");
            })
            .catch((error) => {
                if (error.code === "auth/wrong-password") {
                    toast.error("Please check the Password");
                } else if (error.code === "auth/user-not-found") {
                    toast.error("Please check the Email");
                } else {
                    toast.error(error.message);
                }
            }); 
    };

    function signOutNow() {
        signOut(auth);
        sessionStorage.clear();
        navigate("/signup");
    }
    console.log(sessionStorage);
    const value = {
        currentUser,
        signUp,
        signIn,
        signOutNow,
    };
    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
}
