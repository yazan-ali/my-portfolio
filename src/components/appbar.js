import React, { useContext } from 'react';
import './styles/css/appbar.css';
import { ActiveContext } from "./sidebarActiveContext";

function Appbar() {

    const { isActive, toggleActive } = useContext(ActiveContext);

    return (
        <div className={`appbar ${isActive && "active"}`}>
            <label className="myName">Yazan Abuali</label>
            <input onChange={toggleActive} id="nav-icon" type="checkbox" />
            <label htmlFor="nav-icon">
                <i className="fas fa-bars"></i>
            </label>
        </div>)
}

export default Appbar;