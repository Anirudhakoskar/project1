import React from "react";
import { useState } from "react";
import './LandingPage.css'

function Landing({onNavigate}){
    return(
        <div style={{ padding: "20px", }}>
            <h1>Welcome to Our Application</h1>
            <nav style={{display:"flex",gap:"15px",marginBottom:"20px"}}> 
            <button className="btn-LandingPage" onClick={() => onNavigate("home")}>Home</button>
            <button className="btn-LandingPage" onClick={() => onNavigate("about")}>About</button>
            <button className="btn-LandingPage" onClick={() => onNavigate("contact")}>Contact</button>
            <button className="btn-LandingPage" onClick={() => onNavigate("login")}>login</button>
            <button className="btn-LandingPage" onClick={() => onNavigate("register")}>Register</button>
            </nav>

            <p>Welcome to the landing page of the website</p>
            </div>
    )
}
export default Landing;