import React, { useEffect } from 'react';
import Skills from './skills';
import Tools from './tools';
import { motion } from "framer-motion";

function SkillsAndTools() {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [])

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Skills />
            <Tools />
        </motion.div>
    )
}

export default SkillsAndTools;