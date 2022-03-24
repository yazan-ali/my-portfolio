import React, { useContext } from 'react';
import './styles/css/main.css'
import Sidebar from './sidebar/sidebar';
import MainContent from './mainContent';
import Appbar from './appbar';
import { ActiveContext } from './sidebarActiveContext';

function Portfolio() {

    const { isActive } = useContext(ActiveContext);

    return (
        <div className="portfolio">
            <Appbar />
            <div className={`portfolio-container ${isActive && "active"}`}>
                <Sidebar />
                <MainContent />
            </div>
        </div>
    )
}

export default Portfolio;