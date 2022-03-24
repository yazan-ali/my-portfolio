import React from 'react';
import Skill from './skill';
import './styles/css/skills.css';
import { useInView } from 'react-intersection-observer';
import { skillsData } from './portfolioData';

function Skills() {

    const { ref, inView } = useInView();

    return (
        <div className="skills-root">
            <h2>Skills</h2>
            <hr />
            <div ref={ref} className="skills-container">
                {
                    skillsData.map(skill => (
                        <Skill
                            skillName={skill.skillName}
                            color={skill.color}
                            skillLogo={skill.skillLogo}
                            duration={skill.duration}
                            inView={inView}
                            animationDiriction={skill.animationDiriction}
                            skillLogoWidth={skill.skillLogoWidth}
                            delay={skill.delay}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default Skills;