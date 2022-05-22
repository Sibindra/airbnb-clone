import React from "react";
import "../styles/Cardsection.css";

function Card(prop) {
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
export default function CardSection() {
    return (
        <div id="Cardsection">
            <Card
                img={require("../images/katie-zaferes.png")}
                rating="5.0 (6) USA"
                name="Life Lessions With Katie Zaferes"
                rate="$136"
            />

            <Card
                img={require("../images/wedding-photography.png")}
                rating="5.0 (30) USA"
                name="Learn Wedding Photography"
                rate="$125"
            />

            <Card
                img={require("../images/bike.jpg")}
                rating="Group Mountain Bike"
                name="4.8 (2) USA"
                rate="$50"
            />

            <Card
                img={require("../images/garden.jpg")}
                rating="Learn Gardening"
                name="3.2 (4) Jamaica"
                rate="$70"
            />

            <Card
                img={require("../images/cooking.jpg")}
                rating="Cooking Skill Development"
                name="4,0 (4) Italy"
                rate="$50"
            />
        </div>
    );
}
