import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../Nav/Nav";
import Aside from "../Aside/Aside"
import Feed from "../Feed/Feed"
import "./Home.css"

function Home() {
    const navigate = useNavigate();
    useEffect(() => {
        const authToken = sessionStorage.getItem("authToken");

        if (authToken) {
            navigate("/home");
        }

        if (!authToken) {
            navigate("/signup");
        }
    }, []);

 

    return (
        <section className="wrapper">
            <Nav />
            <Feed />
            <Aside />
            
        </section>
    );
}

export default Home;
