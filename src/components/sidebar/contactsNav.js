import React from 'react';
import { Link } from 'react-router-dom';

function ContactsNav({ activeTab, onLinkClick }) {

    return (
        <div className="contacts-nav">
            <a rel="noreferrer" href="https://github.com/yazan-ali" target="_blank">
                <i className="fab fa-github-square"></i>
                <span>Github</span>
            </a>
            <a rel="noreferrer" href="https://www.linkedin.com/in/yazan-abuali-564a76177/" target="_blank">
                <i className="fab fa-linkedin"></i>
                <span>LinkedIn</span>
            </a>
            <a
                href="https://drive.google.com/file/d/1ClkllclLso1c0wQtQ3BST9u-oaR4NecC/view?usp=sharing"
                target="_blank"
            >
                <i className="fa-solid fa-file-lines"></i>
                <span>My Resume</span>
            </a>
            <a href="tel: +962781976253">
                <i class="fa-solid fa-square-phone"></i>
                <span>Phon</span>
            </a>
        </div>
    )
}


export default ContactsNav;