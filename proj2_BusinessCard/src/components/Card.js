import React from "react";

function Card() {
    // let stl = {"width": "18rem;"} as React.CSSProperties;
    return (
        <div className="card bg-dark wh1825 text-white">
            <img src="http://www.actors-pictures.com/pictures/benedict-cumberbatch-1.jpg" className="card-img-top" alt="Human Face" />
            <div className="card-body text-center">
                <h5 className="card-title">Benedict Cumberbatch<br /><h6 className="text-secondary">Actor, USA</h6></h5>
                <div className="m-2">
                    <button type="button" class="btn btn-secondary mx-2">Email</button>
                    <button type="button" class="btn btn-primary mx-2">LinkedIn</button>
                </div>
            </div>
            <div className="card-body">
                <h5 className="card-title">About</h5>
                <p className="card-text"><font> Famous for Dr. Strange movie and Sherlock Homes series. Renound in industry and humble.</font></p>
            </div>
            <div className="card-body">
                <h5 className="card-title">Interests</h5>
                <p className="card-text"><font> Serious acting, Commertials and Sponserships.</font></p>
            </div>

            <div className="card-body mx-2">
                <a href="#" className="card-link">Profile</a>
                {/* <a href="#" className="card-link">Another link</a> */}
            </div>
        </div>
    )
}

export default Card;