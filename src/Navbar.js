import React from "react";
import './App.css'
import Logo from "./reactlogo.png"
export default function Navbar() {
    return (
        <nav>
            <img src={Logo} className="logo" />
            <h3 className="logoText">ReactFacts</h3>
            <h4 className="title">React Course - Project 1</h4>
        </nav>
    )
}