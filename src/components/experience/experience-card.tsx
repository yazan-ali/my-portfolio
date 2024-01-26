"use client";
import { useRef } from 'react';
import Image from 'next/image';
import { motion, Variants } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import './experience.scss';

export default function ExperienceCard(props: ExperienceProps) {
    const { position, company, companyLogo, startDate, endDate, description, leftSide, isLast } = props;
    const { ref, inView } = useInView();
    const cardRef = useRef(null);
    const height = (cardRef.current as any)?.clientHeight;
    const detailsVariants: Variants = {
        inView: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring", duration: 1.5, bounce: 0,
                delay: 0.3
            },
        },
        outView: {
            x: leftSide ? '-100%' : "100%",
            opacity: 0,
        }
    };

    const logoVariants: Variants = {
        inView: {
            transform: "translateY(100%)",
            transition: {
                type: "spring", duration: 1.5, bounce: 0
            },
        },
        outView: {
            transform: "translateY(0)",
        }
    };

    const progressBarVariants: Variants = {
        inView: {
            transform: "translateY(100%)",
            transition: {
                type: "spring", duration: 1.5, bounce: 0,
                delay: 0.6
            },
        },
        outView: {
            transform: "translateY(0)",
        }
    };

    return (
        <div className='experience-card flex flex-col md:items-center justify-center relative -mt-1'
        >
            <div className="experience-card__company-logo">
                <Image className="experience-card__company-logo-img p-2" width="100" height="100" src={companyLogo} alt={company} loading='lazy' />
                <motion.div className="experience-card__company-logo-overlay"
                    animate={inView ? "inView" : "outView"}
                    variants={logoVariants}
                ></motion.div>
            </div>
            <div className="absolute -z-40 h-full" ref={ref}></div>
            <motion.div
                className={`experience-card__details md:w-1/2 absolute mt-24 ml-16 md:ml-0
                ${!leftSide ? "md:-right-4 md:pl-8" : "md:-left-4 md:text-right md:pr-8"}`}
                animate={inView ? "inView" : "outView"}
                ref={cardRef}
                variants={detailsVariants}
            >
                <h3 className="text-xl font-bold">{position}</h3>
                <span className="block font-semibold">{company}</span>
                <div className="italic font-medium">
                    <span>{startDate}</span>
                    <span> - {endDate ? endDate : "present"}</span>
                </div>
                <p className="font-medium">{description}</p>
            </motion.div>
            <div className="experience-card__progress-bar ml-11 md:ml-0" style={{ height: height + 60 }}>
                <motion.div className="experience-card__progress-bar-overlay"
                    animate={inView ? "inView" : "outView"}
                    variants={progressBarVariants}
                ></motion.div>
            </div>
            {isLast && <div className='experience-card__inprogress -mt-1'></div>}
        </div>
    )
}
