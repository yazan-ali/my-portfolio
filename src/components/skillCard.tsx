"use client";
import Image from 'next/image';
import { motion, Variants } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Skill({ skillName, skillLogo, color, skillLogoWidth }) {

    const { ref, inView } = useInView();
    const itemVariants: Variants = {
        inView: {
            y: "0",
            opacity: 1,
            transition: {
                type: "spring", duration: 3, bounce: 0.4
            },
        },
        outView: {
            y: "-50%",
            opacity: 0,
        }
    };

    return (
        <motion.div className="skill flex flex-col items-center rounded-md h-36 py-4"
            animate={inView ? "inView" : "outView"}
            initial={{ y: "-50%", opacity: 0 }}
            ref={ref}
            variants={itemVariants}
        >
            <div className="skill__bg"
                style={{ backgroundImage: `linear-gradient(45deg, #fff, ${color})` }}
            ></div>
            {
                skillLogo.img ?
                    <Image style={{ borderRadius: 10, width: skillLogoWidth }} width={skillLogoWidth} height={skillLogoWidth} src={skillLogo.logo} alt={skillName} />
                    :
                    <FontAwesomeIcon icon={skillLogo} className="w-32" color={color} />

            }
            <span className='font-bold mt-auto text-center' style={{ color: color }}>{skillName}</span>
        </motion.div>
    )
}
