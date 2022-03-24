import React, { useEffect } from 'react';
import ProjectCard from './projectCard';
import './styles/css/projectsCards.css';
import { projectsData } from './portfolioData';
import { motion } from 'framer-motion'

function ProjectsList() {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [])

    return (
        <motion.div
            className="projects-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h2>My Works</h2>
            <hr />
            {
                projectsData.map((p, idx) => (
                    <ProjectCard key={idx} data={p} />
                ))
            }
        </motion.div>
    );
}

export default ProjectsList;