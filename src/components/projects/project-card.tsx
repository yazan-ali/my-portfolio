import DevelopmentStackItem from '@/components/projects/development-stack-item';
import ImageSlider from '@/components/image-slider';
import './projects.scss';

function ProjectCard(props: projectProps) {
    const { projectName, developmentStack, projectsDiscription, projectImgs, backgroundColor, liveSiteLink, projectCodeLink } = props.data;

    return (
        <div className="project-card md:flex items-center h-full w-full overflow-hidden gap-8 p-6"
            style={{
                backgroundImage: `linear-gradient(to bottom, ${backgroundColor}, #fff)`,
                boxShadow: `-2px 2px 10px ${backgroundColor}80`
            }}
        >
            <div className="project-card__img-slider md:w-1/2">
                <ImageSlider imgs={projectImgs} />
            </div>
            <div className="project-card__info h-full md:w-1/2">
                <p className='text-2xl mt-4'>{projectName}</p>
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
                    {projectCodeLink &&
                        <a
                            style={{
                                background: backgroundColor,
                            }}
                            rel="noreferrer" href={projectCodeLink} target="_blank">View Code</a>
                    }
                </div>
            </div>
        </div >
    );
}

export default ProjectCard;