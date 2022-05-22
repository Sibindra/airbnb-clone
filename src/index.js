import React from "react";
import ReactDOM from "react-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import "./styles/index.css"

function Index(){
    return(
        <>
        <Navbar/>
        <Hero/>
        </>
    )
};

ReactDOM.render(<Index/>, document.getElementById("root"));