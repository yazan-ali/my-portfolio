import ProjectCard from './projectCard';
import { projects } from "@/data";
import '@/styles/projects.scss';

export default function Projects() {

    return (
        <section id="projects" className="projects mt-8">
            <div className="container flex flex-col justify-center items-center gap-6 lg:w-4/5">
                <h2 className='styled-heading styled-border text-2xl font-bold'>My Works</h2>
                {
                    projects.map((project, idx) => (
                        <ProjectCard key={idx} data={project} />
                    ))
                }
            </div>
        </section>
    );
}