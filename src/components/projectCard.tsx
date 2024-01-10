import DevelopmentStackItem from '@/components/developmentStackItem';
import ImageSlider from '@/components/imageSlider';
import '@/styles/projects.scss';


function ProjectCard({ data: { projectName, developmentStack, projectsDiscription, projectImgs, backgroundColor, liveSiteLink, projectCodeLink } }) {
    return (
        <div className="project-card md:flex items-center w-full gap-8 p-6"
            style={{
                backgroundImage: `linear-gradient(to bottom, ${backgroundColor}, #fff)`,
                boxShadow: `-2px 2px 10px ${backgroundColor}80`
            }}
        >
            <div className="project-card__img-slider md:w-1/2">
                <ImageSlider imgs={projectImgs} />
            </div>
            <div className="project-card__info md:w-1/2">
                <p style={{ fontSize: 25 }}>{projectName}</p>
                <p>
                    {projectsDiscription}
                </p>
                <div className='flex w-full flex-wrap mt-5'>
                    {
                        developmentStack.map((ds, idx) => (
                            <DevelopmentStackItem key={idx} name={ds.name} bg={backgroundColor} />
                        ))
                    }
                </div>
                <div className="project-card__links mt-3"
                    style={{ borderColor: backgroundColor }}
                >
                    {liveSiteLink &&
                        <a
                            style={{
                                background: backgroundColor,
                            }}
                            rel="noreferrer" href={liveSiteLink} target="_blank">Live Site
                        </a>
                    }
                    <a
                        style={{
                            background: backgroundColor,
                        }}
                        rel="noreferrer" href={projectCodeLink} target="_blank">View Code</a>
                </div>
            </div>
        </div >
    );
}

export default ProjectCard;