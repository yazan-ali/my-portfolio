import React from 'react';
import { Link } from "react-router-dom";

function MainNav({ activeTab, onLinkClick }) {

    return (
        <nav className="nav-links">
            <Link onClick={() => onLinkClick("/")} to="/" className="logo">
                <i className="fas fa-laptop-code"></i>
                <span>Yazan Ali</span>
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
            <a onClick={onLinkClick}
                href="https://drive.google.com/file/d/1ClkllclLso1c0wQtQ3BST9u-oaR4NecC/view?usp=sharing"
                target="_blank"
            >
                <i className="fas fa-file"></i>
                <span>My Resume</span>
            </a>
        </nav>
    )
}

export default MainNav;