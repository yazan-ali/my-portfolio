"use client"
import { useState } from 'react';
import ProjectCard from './projectCard';
import { projects } from "@/data";
import move from "lodash-move";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import '@/styles/projects.scss';

export default function Projects() {

    const CARD_OFFSET = 40;
    const SCALE_FACTOR = 0.06;
    const { ref, inView } = useInView({
        threshold: 0.2,
        rootMargin: "200px"
    });

    const projectsCards = projects.map((project, idx) => {
        return <ProjectCard key={idx} data={project} />
    });

    const [cards, setCards] = useState(projectsCards);
    const moveToEnd = from => {
        setCards(move(cards, from, cards.length - 1));
    };

    return (
        <section id="projects" className="projects mt-8">
            <div className="container flex flex-col justify-center items-center gap-6 lg:w-4/5">
                <h2 className='styled-heading styled-border text-2xl font-bold mt-4'>My Works</h2>
                <div className="projects__stacked-cards relative w-full mt-24">
                    {
                        cards.map((card, idx) => {
                            const canDrag = idx === 0;
                            return <motion.div
                                ref={ref}
                                className="absolute"
                                style={{ height: canDrag ? "auto" : "500px" }}
                                animate={{
                                    top: inView ? idx * -CARD_OFFSET : 0,
                                    scale: inView ? 1 - idx * SCALE_FACTOR : 1,
                                    zIndex: inView ? projects.length - idx : 0,
                                    transition: {
                                        type: "spring", duration: 0.7, bounce: 0
                                    },
                                }}
                                drag={canDrag ? "y" : false}
                                dragConstraints={{
                                    top: 0,
                                    bottom: 0
                                }}
                                onDragEnd={() => moveToEnd(idx)}
                            >
                                {card}
                            </motion.div>
                        }
                        )}
                </div>
            </div>
        </section>
    );
}