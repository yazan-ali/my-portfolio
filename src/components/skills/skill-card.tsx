"use client";
import Image from 'next/image';
import { motion, Variants } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export default function Skill(props: skillProps) {

    const { skillName, skillLogo, color, skillLogoWidth } = props;
    const { ref, inView } = useInView();

    const itemVariants: Variants = {
        inView: {
            x: "0",
            opacity: 1,
            transition: {
                type: "spring", duration: 3, bounce: 0.4,
            }
        },
        outView: {
            x: "-100%",
            opacity: 0,
        }
    };

    return (
        <motion.div className="skill flex flex-col items-center rounded-md h-36 py-4"
            animate={inView ? "inView" : "outView"}
            initial={{ x: "-100%", opacity: 0 }}
            ref={ref}
            variants={itemVariants}
        >
            <div className="skill__bg"
                style={{ backgroundImage: `linear-gradient(45deg, #fff, ${color})` }}
            ></div>
            {
                typeof skillLogo === "object" && 'img' in skillLogo ?
                    <Image
                        style={{ borderRadius: 10, width: skillLogoWidth }}
                        width={skillLogoWidth} height={skillLogoWidth}
                        src={skillLogo.logo} alt={skillName}
                    />
                    :
                    <FontAwesomeIcon icon={skillLogo as IconProp} className="text-8xl" color={color} />

            }
            <span className='font-bold mt-auto text-center' style={{ color: color }}>{skillName}</span>
        </motion.div>
    )
}
