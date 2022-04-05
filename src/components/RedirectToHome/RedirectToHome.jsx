import React from "react";
import { Navigate } from "react-router-dom";

function RedirectToHome() {
    return <Navigate to="/home" />;
}

export default RedirectToHome;
