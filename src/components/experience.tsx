import React from "react";
import ExperienceCard from "@/components/experienceCard";
import { experiences } from '@/data';
import '@/styles/experience.scss';

export default function Experience() {
    return (
        <section id="experience" className="experience relative overflow-x-hidden mt-8">
            <div className="container overflow-hidden lg:w-4/5">
                <h2 className='styled-heading styled-border text-2xl font-bold pt-4'>Professional Experience</h2>
                {
                    React.Children.toArray(experiences.map((experience, idx) =>
                        <ExperienceCard
                            position={experience.position}
                            company={experience.company}
                            companyLogo={experience.companyLogo}
                            startDate={experience.startDate}
                            endDate={experience.endDate}
                            description={experience.description}
                            leftSide={(idx + 1) % 2 === 0}
                            isLast={idx + 1 === experiences.length}
                        />
                    ))
                }
            </div>
        </section>
    )
}
