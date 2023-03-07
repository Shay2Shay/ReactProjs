import React from "react";
import laugh from "../assets/laugh.png";

function Navbar () {
    return (
        <nav>
            <img src={laugh} alt="Laugh Logo" className="nav--logo"></img>
            <h4 className="nav--title">Meme Generator</h4>
            <h6>React Proj 5</h6>
        </nav>
    )
}

export default Navbar;