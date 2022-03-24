import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


function Tool({ toolName, toolLogo, duration, delay, color, animationDiriction, toolLogoWidth }) {

    const animation = useAnimation();
    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView) {
            animation.start({
                scaleY: 1,
                transition: {
                    duration: 0.5,
                    delay: delay
                }
            });
        }
        if (!inView) {
            animation.start({ scaleY: 0 })
        }
    }, [inView, duration, animationDiriction, animation])

    return (
        <motion.div ref={ref} className="tool" animate={animation}>
            {
                toolLogo.img ?
                    <img style={{ borderRadius: 10, width: toolLogoWidth }} src={toolLogo.logo} alt={toolName} />
                    :
                    <i style={{ color: color }} className={toolLogo}></i>
            }
            <p style={{ color: color }}>{toolName}</p>
        </motion.div>
    );
}

export default Tool;