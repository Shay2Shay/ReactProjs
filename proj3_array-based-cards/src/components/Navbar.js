import React from "react";
import logo from '../assets/Airbnb_logo.png'

function Navbar () {
    return (
        <nav>
            <img src={logo} alt="Airbnb Logo" className="nav--logo"></img>
        </nav>
    )
}

export default Navbar;