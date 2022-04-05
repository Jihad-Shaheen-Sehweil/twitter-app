import React, { useState } from "react";
import "./Nav.css";
import NavOption from "../NavOption/NavOption";
import { BiHomeCircle, BiEnvelope } from "react-icons/bi";
import { FiHash } from "react-icons/fi";
import { GiFeather } from "react-icons/gi";
import { VscBell, VscTwitter } from "react-icons/vsc";
import { BsBookmark } from "react-icons/bs";
import { IoNewspaperOutline, IoPersonOutline } from "react-icons/io5";
import { CgMoreO } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Profile from "../Profile/Profile";

function Nav() {
    const navigate = useNavigate();
    const { signOutNow } = useAuth();

    function twitterIconHome() {
        navigate("/home");
    }
    return (
        <nav className="Nav">
            <div className="Nav__log" onClick={twitterIconHome}>
                <VscTwitter className="Nav__log_icon" />
            </div>

            <NavOption optionName="Home" Icon={BiHomeCircle} />
            <NavOption optionName="Explore" Icon={FiHash} />
            <NavOption optionName="Notifications" Icon={VscBell} />
            <NavOption optionName="Messages" Icon={BiEnvelope} />
            <NavOption optionName="Bookmarks" Icon={BsBookmark} />
            <NavOption optionName="Lists" Icon={IoNewspaperOutline} />
            <NavOption optionName="Profile" Icon={IoPersonOutline} />
            <NavOption optionName="More" Icon={CgMoreO} />

            <button className="Nav__Tweet_Button">
                <p className="Nav__Tweet_Button__text">Tweet</p>
                <GiFeather className="Nav__Tweet_Button__featherButton" />
            </button>
            {/* create modal for logout */}
            <div onClick={signOutNow}>
                <Profile
                    img={"/profile.jpg"}
                    profileName={"Jihad Shaheen"}
                    username={"jihadShaheen1"}
                    onClick={signOutNow}
                />
            </div>
        </nav>
    );
}

export default Nav;
