import React, { useContext } from 'react'
import AboutMe from './aboutMe';
import SkillsAndTools from "./skillsAndTools"
import ProjectsList from './projectsList';
import EmailForm from './emailForm';
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import { ActiveContext } from './sidebarActiveContext';

function MainContent() {

    const { isActive } = useContext(ActiveContext)
    const location = useLocation();

    return (
        <div className={`main ${isActive && "active"}`}>
            <AnimatePresence exitBeforeEnter>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<AboutMe />} />
                    <Route path="/skills-and-tools" element={<SkillsAndTools />} />
                    <Route path="/my-works" element={<ProjectsList />} />
                    <Route path="/contact-me" element={<EmailForm />} />
                </Routes>
            </AnimatePresence>
        </div>
    )
}

export default MainContent;