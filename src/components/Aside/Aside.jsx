import React from "react";
import "./Aside.css";
import { AiOutlineSearch } from "react-icons/ai";

function Aside() {
    return (
        <section className="aside">
            <div className="aside__search">
                <AiOutlineSearch className="aside__search__icon" />
                <input type="text" placeholder="Search Twitter" className="aside__search__input" />
            </div>
        </section>
    );
}

export default Aside;
