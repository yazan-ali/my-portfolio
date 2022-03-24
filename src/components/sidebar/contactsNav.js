import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ActiveContext } from '../sidebarActiveContext';

function ContactsNav() {

    const { isActive, toggleActive } = useContext(ActiveContext);

    const onLinkClick = () => {
        if (isActive) {
            toggleActive()
        }
    }

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
            <Link onClick={onLinkClick} to="/send-email">
                <i className="fas fa-envelope"></i>
                <span>Email</span>
            </Link>
            <a href="tel: +962781976253">
                <i class="fa-solid fa-square-phone"></i>
                <span>Phon</span>
            </a>
        </div>
    )
}


export default ContactsNav;