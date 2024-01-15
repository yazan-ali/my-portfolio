import Image from 'next/image';
import '@/styles/experience.scss';

export default function ExperienceCard(props) {
    const { position, company, companyLogo, startDate, endDate, description, leftSide, isLast } = props;
    return (
        <>
            <div className='experience-card flex flex-col md:items-center justify-center relative -mt-1'>
                <div className="experience-card__company-logo">
                    <Image className="experience-card__company-logo-img p-2" width="100" height="100" src={companyLogo} alt={company} loading='lazy' />
                </div>
                <div className={`experience-card__details md:w-1/2 absolute mt-24 ml-16 md:ml-0
                ${!leftSide ? "md:-right-4 md:pl-8" : "md:-left-4 md:text-right md:pr-8"}`
                }>
                    <h3 className="text-xl font-bold">{position}</h3>
                    <span className="block font-semibold">{company}</span>
                    <div className="italic font-medium">
                        <span>{startDate}</span>
                        <span> - {endDate ? endDate : "present"}</span>
                    </div>
                    <p className="font-medium">{description}</p>
                </div>
                <div className="experience-card__progress-bar ml-10 md:ml-0 -mt-1"></div>
                {isLast && <div className='experience-card__inprogress -mt-1'></div>}
            </div>
        </>
    )
}
