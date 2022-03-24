import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


function Skill({ skillName, skillLogo, duration, color, animationDiriction, skillLogoWidth }) {

    const animation = useAnimation();
    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView) {
            animation.start({
                x: 0,
                transition: {
                    type: "spring", duration: duration, bounce: 0.4
                },
            });
        }
        if (!inView) {
            animation.start({ x: animationDiriction === "left" ? '-25vw' : "25vw" })
        }
    }, [inView, duration, animationDiriction, animation])

    return (
        <motion.div ref={ref} className="skill" animate={animation} initial={{ x: animationDiriction === "left" ? '-25vw' : "25vw" }}>
            {
                skillLogo.img ?
                    <img style={{ borderRadius: 10, width: skillLogoWidth }} src={skillLogo.logo} alt={skillName} />
                    :
                    <i style={{ color: color }} className={skillLogo}></i>
            }
            <p style={{ color: color }}>{skillName}</p>
        </motion.div>
    );
}

export default Skill;