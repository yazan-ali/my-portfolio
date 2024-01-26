"use client"
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faSquarePhone, faFile } from '@fortawesome/free-solid-svg-icons';
import { contacts } from "@/data";
import "./navbar.scss";

export default function Navbar() {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const handlNavbarOpen = () => {
        setIsNavbarOpen(prev => !prev);
    }

    return (
        <nav className={`navbar flex justify-center ${isNavbarOpen ? "open" : ""}`}>
            <div className="container md:flex justify-between items-center md:h-16 px-0 md:px-4 mx-0">
                <div className="nav-toggle__wrapper flex justify-between p-4 md:p-0">
                    <a href="#about-me" className="text-xl font-semibold">Yazan Abuali</a>
                    <div className="block md:hidden">
                        {isNavbarOpen ? <FontAwesomeIcon className="nav-toggle__cross text-2xl" icon={faXmark} onClick={handlNavbarOpen} />
                            :
                            <FontAwesomeIcon className='nav-toggle__bars text-2xl' icon={faBars} onClick={handlNavbarOpen} />
                        }
                    </div>
                </div>
                <ul className="nav md:flex overflow-hidden px-4 md:px-0">
                    <li className="py-2 md:py-0 md:px-3">
                        <a href="#about-me" onClick={handlNavbarOpen}>About Me</a>
                    </li>
                    <li className="py-2 md:py-0 md:px-3">
                        <a href="#skills" onClick={handlNavbarOpen}>Skills</a>
                    </li>
                    <li className="py-2 md:py-0 md:px-3">
                        <a href="#projects" onClick={handlNavbarOpen}>Projects</a>
                    </li>
                    <li className="py-2 md:py-0 md:px-3">
                        <a href="#experience" onClick={handlNavbarOpen}>Experience</a>
                    </li>
                    <li className="py-2 md:py-0 md:px-3">
                        <a href="#contact-me" onClick={handlNavbarOpen}>Contact Me</a>
                    </li>
                    <ul className="nav__footer flex justify-between md:hidden absolute bottom-4">
                        {
                            React.Children.toArray(contacts.map(contact => (
                                <a href={contact.link} target="_blank">
                                    <FontAwesomeIcon className='text-2xl' icon={contact.icon} />
                                </a>
                            )))}
                    </ul>
                </ul>
            </div>
        </nav>
    )
}
