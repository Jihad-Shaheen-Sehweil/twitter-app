import "./SignUpModal.css";
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

function SignUpModal() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const emaiRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signUp, currentUser } = useAuth();
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
            signUp(emaiRef.current.value, passwordRef.current.value);
        } catch {
            setError("Failed to create an account");
            setLoading(false);
        }
    }
    return (
        <>
            <button className="modal_openButton" onClick={handleOpen}>
                Sign up with email
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

                    <h2 className="modal_text">Create your account</h2>
                    {/* error message */}
                    {error && error}
                    <form className="modal_input">
                        <input
                            type="text"
                            placeholder="Email"
                            className="modal_input_area"
                            ref={emaiRef}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="modal_input_area"
                            ref={passwordRef}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="modal_input_area"
                            ref={passwordConfirmRef}
                            required
                        />
                        <button
                            onClick={handleSubmit}
                            type="submit"
                            className={
                                loading
                                    ? "modal_signUpBTN_X"
                                    : "modal_signUpBTN"
                            }
                            disabled={loading}
                        >
                            Sign Up
                        </button>
                    </form>
                </section>
            </Modal>
        </>
    );
}

export default SignUpModal;
