import React from "react";
import "./NavOption.css";

function NavOption({ optionName, Icon }) {
    return (
        <main className="NavOption">
            <Icon className="NavOption__icon" />
            <h2 className="NavOption__name">{optionName}</h2>
        </main>
    );
}

export default NavOption;
