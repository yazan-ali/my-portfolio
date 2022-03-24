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
                    <Route path="/yazan-ali.com" element={<AboutMe />} />
                    <Route path="/yazan-ali.com/skills-and-tools" element={<SkillsAndTools />} />
                    <Route path="/yazan-ali.com/my-works" element={<ProjectsList />} />
                    <Route path="/yazan-ali.com/send-email" element={<EmailForm />} />
                </Routes>
            </AnimatePresence>
        </div>
    )
}

export default MainContent;