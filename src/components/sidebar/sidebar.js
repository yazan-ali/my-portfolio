import React, { useContext } from 'react';
import '../styles/css/sidebar.css';
import MainNav from './mainNav';
import ContactsNav from './contactsNav';
import { Link } from 'react-router-dom';
import { ActiveContext } from '../sidebarActiveContext';

function Sidebar() {

    const { isActive, toggleActive } = useContext(ActiveContext)


    return (
        <aside className={`sidebar ${isActive && "active"}`}>
            <input onChange={toggleActive} id="nav-icon" type="checkbox" />
            <label htmlFor="nav-icon">
                {
                    isActive ?
                        <i style={{ transform: "translateX(65px)" }} className="fas fa-arrow-circle-left"></i>
                        :
                        <i className="fas fa-bars"></i>
                }
            </label>
            <hr size="1" />
            <MainNav />
            <ContactsNav />
        </aside>
    )
}

export default Sidebar;