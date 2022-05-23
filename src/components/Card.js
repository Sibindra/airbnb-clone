import React from "react";

export default function Card(prop) {
    return (
        <div id="card">
            <div id="card-image-container">
                <img src={prop.img} alt="img not found" id="card-image" />
            </div>

            <div id="card-info-container">
                <p id="rating">⭐{prop.rating}</p>

                <h3 id="name">{prop.name}</h3>

                <p id="rate">From {prop.rate}/ person</p>
            </div>
        </div>
    );
}
