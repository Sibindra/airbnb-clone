import React from "react";
import ReactDOM from "react-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CardSection from "./components/Cardsection";

// css import
import "./styles/index.css"

function Index(){
    return(
        <>
        <Navbar/>
        <Hero/>
        {/* the cards are added on Cardsection through Card method */}
        <CardSection/>
        </>
    )
};

ReactDOM.render(<Index/>, document.getElementById("root"));