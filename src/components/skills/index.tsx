import Skill from "@/components/skills/skill-card";
import { skills } from '@/data';
import "./skills.scss";

export default function Skills() {
    return (
        <section id="skills" className="skills relative">
            <div className="container flex flex-col lg:w-9/12 justify-center items-center">
                <h2 className="styled-heading styled-border text-2xl font-bold mt-4">Skills</h2>
                <div className="skills__list flex flex-wrap justify-center gap-6 mt-6">
                    {
                        skills.map(skill => (
                            <Skill
                                skillName={skill.skillName}
                                color={skill.color}
                                skillLogo={skill.skillLogo}
                                skillLogoWidth={skill.skillLogoWidth}
                            />
                        ))
                    }
                </div>
            </div>

        </section>
    )
}
