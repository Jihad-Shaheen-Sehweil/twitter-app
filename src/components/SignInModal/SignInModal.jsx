import "./SignInModal.css";
import React, { useState, useRef } from "react";
import { BsTwitter } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";
import Modal from "react-modal";
import { useAuth } from "../contexts/AuthContext";

Modal.setAppElement("#root");

const styles = {
    overlay: {
        backgroundColor: "#242d34",
    },
    content: {
        backgroundColor: "black",
        color: "white",
        width: "536px",
        height: "520px",
        borderRadius: "1rem",
        border: "hidden",
        margin: "0 auto",
    },
};

function SignInModal() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const emailRef = useRef();
    const passwordRef = useRef();
    const { signIn, currentUser } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    function handleOpen() {
        setModalIsOpen(true);
    }

    function handleClose() {
        setModalIsOpen(false);
    }

    function handleSubmit(e) {
        e.preventDefault();

        try {
            setError("");
            setLoading(true);
            signIn(emailRef.current.value, passwordRef.current.value);
        } catch {
            setError("Failed to Login");
            setLoading(false);
        }
    }

    return (
        <>
            <h3 className="modal_sign_in_text">Already have an account?</h3>
            <button className="modal_SignInopenButton" onClick={handleOpen}>
                Sign In
            </button>

            <Modal isOpen={modalIsOpen} style={styles}>
                <section className="modal">
                    <div className="modal_top">
                        <IoCloseOutline
                            className="modal_exit"
                            onClick={handleClose}
                        />
                        <BsTwitter className="modal_icon" />
                    </div>

                    <h2 className="modal_text">Sign In</h2>
                    {/* error message */}
                    {error && error}
                    <form className="modal_input">
                        <input
                            type="text"
                            placeholder="Email"
                            className="modal_input_area"
                            ref={emailRef}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="modal_input_area"
                            ref={passwordRef}
                            required
                        />
                        <button
                            onClick={handleSubmit}
                            type="submit"
                            className={
                                loading
                                    ? "modal_signInBTN_X"
                                    : "modal_signInBTN"
                            }
                            disabled={loading}
                        >
                            Sign In
                        </button>
                    </form>
                </section>
            </Modal>
        </>
    );
}

export default SignInModal;
