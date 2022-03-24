import React, { useEffect } from 'react';
import './styles/css/projectsCards.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function DevelopmentStackItem({ name, delay }) {

    const animation = useAnimation();
    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView) {
            animation.start({
                opacity: 1,
                rotate: 360,
                transition: {
                    type: "spring", duration: 0.4,
                    delay: delay / 4
                }
            });
        }
        if (!inView) {
            animation.start({
                opacity: 0,
                rotate: 0,
            })
        }
    }, [inView, animation])

    return (
        <motion.span ref={ref} initial={{ opacity: inView ? 1 : 0 }} animate={animation} className="developmentStackName">{name}</motion.span>
    );
}

export default DevelopmentStackItem;