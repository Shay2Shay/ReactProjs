import React from "react";

function Card({url, alt, name, info, rating, bestseller, id}) {
    return(
        <div className="card">
            {bestseller && <div className="bestseller">Besteller</div>}
            <img src={url} alt={alt ? alt : "Employee"} className="card--img" />
            <div className="card--text">
                <h3>{name ? name : "Name"}</h3>
                <p>{info ? info : "Info"}</p>
                <p><span className="card--bold">Rating</span> : {rating ? rating : "Not Available"}</p>
            </div>
        </div>
    )
}

export default Card;