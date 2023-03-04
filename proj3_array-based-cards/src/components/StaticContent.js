import React from "react";
import image_main from "../assets/photoGrid1.png";

function StaticContent() {
    return (
        <div className="main">
            <div id="img--container">
                <img src={image_main} className="img--class" alt="Yo Yo"></img>
            </div>
            <div className="text--main">
                <h1 className="header--main">Online Experiences</h1>
                <p className="para--main">Join Unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
            </div>
        </div>
    )
}

export default StaticContent;