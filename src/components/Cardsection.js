import React from "react";
import Card from "./Card";

import "../styles/Cardsection.css";

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
                name="4.0 (4) Italy"
                rate="$50"
            />

            <Card
                img={require("../images/piano.jpg")}
                rating="Piano Lessions"
                name="1.2 (1) France"
                rate="$120"
            />

            <Card
                img={require("../images/coding.jpg")}
                rating="Beginners Coding Skills"
                name="2.5 (3) Nepal"
                rate="$10"
            />
        </div>
    );
}
