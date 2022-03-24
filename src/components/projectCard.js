import React, { useEffect } from 'react';
import './styles/css/projectsCards.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import DevelopmentStackItem from './developmentStackItem';
import ImageSlider from './imageSlider';


function ProjectCard({ data: { projectName, developmentStack, projectsDiscription, projectImgs, direction, backgroundColor, liveSiteLink, projectCodeLink } }) {

    const { ref, inView } = useInView();
    const animation = useAnimation();

    useEffect(() => {
        if (inView) {
            animation.start({
                x: 0,
                transition: {
                    type: "spring", duration: 1.5, bounce: 0
                },
            });
        }
        if (!inView) {
            animation.start({ x: direction === "left" ? '-40vw' : "40vw" })
        }
    }, [inView, animation, direction])

    return (
        <motion.div
            ref={ref}
            animate={animation}
            initial={{ x: direction === "left" ? '-40vw' : "40vw" }}
            className="projectCard-root"
            style={{
                background: backgroundColor[0],
                background: backgroundColor[1],
                background: backgroundColor[2],
                overflow: inView && "visible"
            }}
        >
            <div className="projectCard-container">
                <div className="project-img-slider">
                    <ImageSlider imgs={projectImgs} />
                </div>
                <div className="project-info">
                    <h2>{projectName}</h2>
                    <h3>
                        {projectsDiscription}
                    </h3>
                    <hr />
                    <div style={{ width: "100%", marginTop: 20, display: "flex", flexWrap: "wrap" }}>
                        {
                            developmentStack.map((ds, idx) => (
                                <DevelopmentStackItem key={idx} name={ds.name} inView={inView} delay={idx + 1} />
                            ))
                        }
                    </div>
                    <div className="btns">
                        {liveSiteLink && <a rel="noreferrer" href={liveSiteLink} target="_blank">Live Site</a>}
                        <a style={{ marginLeft: !liveSiteLink && 0 }} rel="noreferrer" href={projectCodeLink} target="_blank">View Code</a>
                    </div>
                </div>
            </div>
        </motion.div >
    );
}

export default ProjectCard;