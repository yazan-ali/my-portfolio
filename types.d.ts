type ExperienceProps = {
    position: string,
    company: string,
    companyLogo: string,
    startDate: string,
    endDate?: string,
    description: string,
    leftSide: boolean,
    isLast: boolean,
}

type BtnSliderProps = {
    direction: string,
    moveSlide: () => void
}

type projectProps = {
    data: {
        projectName: string,
        developmentStack: developmentStack[],
        projectsDiscription: string,
        projectImgs: string[],
        backgroundColor: string,
        liveSiteLink?: string,
        projectCodeLink?: string,
    }
}

type developmentStack = {
    name: string,
    bg?: string,
}

type skillProps = {
    skillName: string,
    skillLogo: {
        img: boolean,
        logo: string
    } | IconProp,
    color: string,
    skillLogoWidth: number | undefined,
}