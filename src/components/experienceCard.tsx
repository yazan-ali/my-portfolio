"use client";
import Image from 'next/image';
import { motion, Variants } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import '@/styles/experience.scss';

export default function ExperienceCard(props) {
    const { position, company, companyLogo, startDate, endDate, description, leftSide, isLast } = props;
    const { ref, inView } = useInView();
    const detailsVariants: Variants = {
        inView: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring", duration: 1.5, bounce: 0
            },
        },
        outView: {
            x: leftSide ? '-100%' : "100%",
            opacity: 0,
        }
    };

    const progressBarVariants: Variants = {
        inView: {
            height: "300px",
            transition: {
                type: "spring", duration: 1.5, bounce: 0
            },
        },
        outView: {
            height: 0
        }
    };

    return (
        <div className='experience-card flex flex-col md:items-center justify-center relative -mt-1'
        >
            <div className="experience-card__company-logo">
                <Image className="experience-card__company-logo-img p-2" width="100" height="100" src={companyLogo} alt={company} loading='lazy' />
            </div>
            <motion.div
                className={`experience-card__details md:w-1/2 absolute mt-24 ml-16 md:ml-0
                ${!leftSide ? "md:-right-4 md:pl-8" : "md:-left-4 md:text-right md:pr-8"}`}
                animate={inView ? "inView" : "outView"}
                initial={{ x: leftSide ? '-100%' : "100%", opacity: 0, }}
                ref={ref}
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
            <motion.div className="experience-card__progress-bar ml-10 md:ml-0 -mt-1"
            // initial={{ height: 0 }}
            // animate={inView ? "inView" : "outView"}
            // variants={progressBarVariants}
            >

            </motion.div>
            {isLast && <div className='experience-card__inprogress -mt-1'></div>}
        </div>
    )
}
