import React from "react";
import "./Profile.css";
import { BsThreeDots } from "react-icons/bs";

function Profile({ img, profileName, username }) {
    return (
        <section className="profile">
            <img src={img} className="profile__img" alt="profileImage" />
            <div className="profile__nameTags">
                <p className="profile__nameTags_1">{profileName}</p>
                <p className="profile__nameTags_2">@{username}</p>
            </div>
            <BsThreeDots className="profile__threeDots" />
        </section>
    );
}

export default Profile;
