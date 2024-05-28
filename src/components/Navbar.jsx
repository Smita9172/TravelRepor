import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../components/CSS/Navbar.css";
import logo from "../photos/logo.jpg"

function Navbar() {
    const [state, setState] = useState(false);
    const handleClick = () => {
        setState(state ? false : true);
    }
    return (
        <>
            <nav className="NavbarItems">
                <div className="left">
                    <img src={logo}></img>
                    <h1 className="navbar-logo">JANAKK</h1>
                </div>
                <div className="menu-icons" onClick={handleClick}>
                    <i className={state ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={state ? "nav-menu active" : "nav-menu"}>
                    <li><Link to="/" className="nav-links"><i className="fa-solid fa-house-user"></i>Home</Link></li>
                    <li><Link to="/about" className="nav-links"><i className="fa-solid fa-circle-info"></i>About</Link></li>
                    <li><Link to="/service" className="nav-links"><i className="fa-solid fa-briefcase"></i>Service</Link></li>
                    <li><Link to="/contact" className="nav-links"><i className="fa-solid fa-address-book"></i>Contact</Link></li>
                    <button>Sign Up</button>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;