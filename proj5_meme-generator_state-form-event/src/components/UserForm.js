import React from "react";

export default function UserForm() {
    return (
        <div className="form">
            <form className="form">
                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="First name" />
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Last name" />
                    </div>
                </div>
            </form>
            {/* <div className="form--button">
                <input type="button" value="Generate Meme He He He"></input>
            </div> */}
        </div>
    )
};