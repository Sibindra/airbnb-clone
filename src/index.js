import React from "react";
import ReactDOM from "react-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import "./styles/index.css"
import CardSection from "./components/Cardsection";

function Index(){
    return(
        <>
        <Navbar/>
        <Hero/>
        <CardSection/>
        </>
    )
};

ReactDOM.render(<Index/>, document.getElementById("root"));