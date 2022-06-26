import React from 'react';
import { Link } from "react-router-dom";

function MainNav({ activeTab, onLinkClick }) {

    return (
        <nav className="nav-links">
            <Link onClick={() => onLinkClick("/")} to="/" className="logo">
                <i className="fas fa-laptop-code"></i>
                <span>Yazan Abuali</span>
            </Link>
            <Link onClick={() => onLinkClick("/")} to="/" className={`${activeTab === "/" && "active-tab"}`}>
                <i className="fa-solid fa-house"></i>
                <span>Home</span>
            </Link>
            <Link
                onClick={() => onLinkClick("skills_and_tools")}
                to="/skills-and-tools"
                className={`${activeTab === "skills_and_tools" && "active-tab"}`}
            >
                <i className="fas fa-code"></i>
                <span>Skills & Tools</span>
            </Link>
            <Link
                onClick={() => onLinkClick("my-works")}
                to="/my-works"
                className={`${activeTab === "my-works" && "active-tab"}`}
            >
                <i className="fas fa-briefcase"></i>
                <span>My Works</span>
            </Link>
            <Link
                onClick={() => onLinkClick("contact-me")}
                to="/contact-me"
                className={`${activeTab === "contact-me" && "active-tab"}`}
            >
                <i className="fas fa-envelope"></i>
                <span>Contact Me</span>
            </Link>
        </nav>
    )
}

export default MainNav;