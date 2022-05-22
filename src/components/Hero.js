import React from "react";
import "../styles/Hero.css";

export default function Hero() {
    return (
        <div id="Hero">
            <div id="image-container">
                <img
                    src={require("../images/hero.png")}
                    alt="image not found"
                    id="image"
                />
            </div>

            <div id="text">
                <h2>Online Experiences</h2>
                <p id="textp">
                    Join unique interactive activities led by one-of-a-kind
                    hosts—all without leaving home.
                </p>
            </div>
        </div>
    );
}
