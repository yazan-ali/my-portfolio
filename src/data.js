import {
    faHtml5,
    faCss3Alt,
    faSass,
    faJsSquare,
    faBootstrap,
    faReact,
    faNodeJs,
    faGithub,
    faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import { faUniversalAccess, faSquarePhone, faFile } from '@fortawesome/free-solid-svg-icons';

const skills = [
    {
        skillName: "Html",
        color: "#e34c26",
        skillLogo: faHtml5,
        duration: 1.5,
        animationDiriction: "left",
    },
    {
        skillName: "CSS",
        color: "#264de4",
        skillLogo: faCss3Alt,
        duration: 1.5,
        animationDiriction: "left",
    },
    {
        skillName: "SASS",
        color: "#CD6799",
        skillLogo: faSass,
        duration: 1.5,
        animationDiriction: "right",
    },
    {
        skillName: "JavaScript",
        color: "#f0db4f",
        skillLogo: faJsSquare,
        duration: 1.5,
        animationDiriction: "right",
    },
    {
        skillName: "TypeScript",
        color: "#007acc",
        skillLogo: { img: true, logo: "https://res.cloudinary.com/pic-gallary/image/upload/v1661600442/my-portofolio/Typescript_logo_2020.svg_e6dpfv.png" },
        duration: 1.5,
        animationDiriction: "left",
        skillLogoWidth: 90,
    },
    {
        skillName: "Bootstrap",
        color: "#563d7c",
        skillLogo: faBootstrap,
        duration: 1.5,
        animationDiriction: "left",
    },
    {
        skillName: "React Js",
        color: "#00d8ff",
        skillLogo: faReact,
        duration: 1.5,
        animationDiriction: "right",
    },
    {
        skillName: "Material Ui",
        color: "#5A9DE1",
        skillLogo: { img: true, logo: "/images/material-ui.svg" },
        duration: 1.5,
        animationDiriction: "right",
        skillLogoWidth: 100,
    },
    {
        skillName: "Redux",
        color: "#764abc",
        skillLogo: { img: true, logo: "https://res.cloudinary.com/pic-gallary/image/upload/v1631885551/my-portofolio/redux_iv2eva.png" },
        duration: 1.5,
        animationDiriction: "left",
        skillLogoWidth: 100,
    },
    {
        skillName: "Next JS",
        color: "gray",
        skillLogo: { img: true, logo: "https://res.cloudinary.com/pic-gallary/image/upload/v1653733553/my-portofolio/nextjs-boilerplate-logo_sjtf99.png" },
        duration: 1.5,
        animationDiriction: "left",
        skillLogoWidth: 88,
    },
    {
        skillName: "Tailwind CSS",
        color: "#06b6d4",
        skillLogo: { img: true, logo: "/images/tailwind-css.svg" },
        duration: 1.5,
        animationDiriction: "left",
        skillLogoWidth: 90,
    },
    {
        skillName: "Jest",
        color: "#c63d14",
        skillLogo: { img: true, logo: "/images/jest.svg" },
        duration: 1.5,
        animationDiriction: "left",
        skillLogoWidth: 80,
    },
    {
        skillName: "Webpack",
        color: "#1c78c0",
        skillLogo: { img: true, logo: "/images/webpack.svg" },
        duration: 1.5,
        animationDiriction: "left",
        skillLogoWidth: 90,
    },
    {
        skillName: "Web Accessibility",
        color: "gray",
        skillLogo: faUniversalAccess,
        duration: 1.5,
        animationDiriction: "left",
    },
    {
        skillName: "Node Js",
        color: "#3c873a",
        skillLogo: faNodeJs,
        duration: 1.5,
        animationDiriction: "right",
    },
    {
        skillName: "Express Js",
        color: "gray",
        skillLogo: { img: true, logo: "https://res.cloudinary.com/pic-gallary/image/upload/v1625138003/my-portofolio/Expressjs_a26tcy.png" },
        animationDiriction: "right",
        duration: 1.5,
        skillLogoWidth: 140,
    },
    {
        skillName: "MonogDB",
        color: "#589636",
        skillLogo: { img: true, logo: "https://res.cloudinary.com/pic-gallary/image/upload/v1624984412/my-portofolio/MongoDB_logo_q8m91z.png" },
        duration: 1.5,
        animationDiriction: "left",
        skillLogoWidth: 140,
    },
    {
        skillName: "GraphQl",
        color: "#e535ab",
        skillLogo: { img: true, logo: "https://res.cloudinary.com/pic-gallary/image/upload/v1624984411/my-portofolio/gq_cfqxdh.png" },
        duration: 1.5,
        animationDiriction: "right",
        skillLogoWidth: 100,
    },
];

const contacts = [
    {
        contactType: "Github",
        icon: faGithub,
        color: "#292929",
    },
    {
        contactType: "Linkedin",
        icon: faLinkedin,
        color: "#0077b5",
    },
    {
        contactType: "CV",
        icon: faFile,
        color: "#00BFBB",
    },
    {
        contactType: "Phon",
        icon: faSquarePhone,
        color: "#025E1B",
    }
];

const studyMaterialDevelopmentStack = [
    {
        name: "HTML",
        color: "#e34c26",
    },
    {
        name: "CSS",
        color: "#264de4"
    },
    {
        name: "JavaScript",
        color: "#f0db4f"
    },
    {
        name: "React Js",
        color: "#00d8ff"
    },
    {
        name: "Apollo Client",
        color: "gray"
    },
    {
        name: "Material-UI",
        color: "#5A9DE1"
    },
    {
        name: "Node Js",
        color: "#3c873a"
    },
    {
        name: "Express Js",
        color: ""
    },
    {
        name: "GraphQl",
        color: "#e535ab"
    },
    {
        name: "MongoDB",
        color: "#589636"
    },
    {
        name: "JWT Authorization",
        color: ""
    },
];

const carsShowDevelopmentStack = [
    {
        name: "HTML",
        color: "#e34c26",
    },
    {
        name: "CSS",
        color: "#264de4"
    },
    {
        name: "JavaScript",
        color: "#f0db4f"
    },
    {
        name: "Bootstrap",
        color: "#563d7c"
    },
    {
        name: "Node Js",
        color: "#3c873a"
    },
    {
        name: "Express Js",
        color: ""
    },
    {
        name: "MongoDB",
        color: "#589636"
    },
];

const pizzaHouseDevelopmentStack = [
    {
        name: "HTML",
        color: "#e34c26",
    },
    {
        name: "SCSS",
        color: "#264de4"
    },
    {
        name: "JavaScript",
        color: "#f0db4f"
    },
    {
        name: "Next Js",
        color: "#00d8ff"
    },
    {
        name: "NextAuth",
        color: "#00d8ff"
    },
    {
        name: "MongoDB",
        color: "#589636"
    },
];

const promotionSystemDevelopmentStack = [
    {
        name: "HTML",
        color: "#e34c26",
    },
    {
        name: "CSS",
        color: "#264de4"
    },
    {
        name: "JavaScript",
        color: "#f0db4f"
    },
    {
        name: "React Js",
        color: "#00d8ff"
    },
    {
        name: "Redux",
        color: ""
    },
    {
        name: "Node Js",
        color: "#3c873a"
    },
    {
        name: "Express Js",
        color: ""
    },
    {
        name: "MongoDB",
        color: "#589636"
    },
    {
        name: "JWT Authorization",
        color: ""
    },
]

const projects = [
    {
        projectName: "My Graduation Project",
        developmentStack: promotionSystemDevelopmentStack,
        projectsDiscription: "A promotion system for teachers, in my univsity they didn't have an online promotion system so i develop this website to help teachers create and tracking thier promotion requset and for teachers who supervising the promotion process they alos can upload requierd files, aprrove or reject the promotion request or send the promotion request by email to supervisors from outside the university. this website developed using :",
        backgroundColor: "#5C5C5C",
        projectImgs: [
            "https://res.cloudinary.com/pic-gallary/image/upload/v1640883170/my-portofolio/Screenshot_277_kggxzd.png",
            "https://res.cloudinary.com/pic-gallary/image/upload/v1640883390/my-portofolio/%D9%A2%D9%A0%D9%A2%D9%A1%D9%A1%D9%A2%D9%A3%D9%A0_%D9%A1%D9%A8%D9%A5%D9%A5%D9%A2%D9%A7_bnhhkz.jpg",
            "https://res.cloudinary.com/pic-gallary/image/upload/v1642161636/my-portofolio/Screenshot_309_f8svfa.png"
        ],
        direction: "right",
        projectCodeLink: "https://github.com/yazan-ali/promotion-system-my-graduation-project"
    },
    {
        projectName: "Next Js App",
        developmentStack: pizzaHouseDevelopmentStack,
        projectsDiscription: "A full stack website developed using Next js it's a website for a restaurant the owner can add, update and delete meals and the user can shop and add items to the shopping cart this website developed using :",
        backgroundColor: "#D13A00",
        projectImgs: [
            "https://res.cloudinary.com/pic-gallary/image/upload/v1653730622/my-portofolio/28.05.2022_12.31.57_REC_t42xfk.png",
            "https://res.cloudinary.com/pic-gallary/image/upload/v1653730612/my-portofolio/28.05.2022_12.32.39_REC_rnola3.png",
            "https://res.cloudinary.com/pic-gallary/image/upload/v1653730612/my-portofolio/28.05.2022_12.33.23_REC_ydlsuw.png",
            "https://res.cloudinary.com/pic-gallary/image/upload/v1653730617/my-portofolio/28.05.2022_12.34.42_REC_kav1wt.png"
        ],
        direction: "left",
        liveSiteLink: "https://pizza-house.vercel.app",
        projectCodeLink: "https://github.com/yazan-ali/next-js-restaurant-app"
    },
    {
        projectName: "Study Material",
        developmentStack: studyMaterialDevelopmentStack,
        projectsDiscription: "A full stack website it's help student to find a lot of what they need for study they can create, solve quizizz, upload, download files or search by course name to find quizizz or files for specific course or search for specific student to see his/her profile also student can create posts to ask questions. this website developed using :",
        backgroundColor: "#4A156B",

        projectImgs: [
            "https://res.cloudinary.com/pic-gallary/image/upload/v1625051690/my-portofolio/std_img1_ldkcwe.jpg",
            "https://res.cloudinary.com/pic-gallary/image/upload/v1625051692/my-portofolio/std_img2_j8bkmr.jpg",
            "https://res.cloudinary.com/pic-gallary/image/upload/v1640880476/my-portofolio/%D9%A2%D9%A0%D9%A2%D9%A1%D9%A1%D9%A2%D9%A3%D9%A0_%D9%A1%D9%A8%D9%A0%D9%A5%D9%A2%D9%A6_jtvewu.jpg",
            "https://res.cloudinary.com/pic-gallary/image/upload/v1640880476/my-portofolio/%D9%A2%D9%A0%D9%A2%D9%A1%D9%A1%D9%A2%D9%A3%D9%A0_%D9%A1%D9%A8%D9%A0%D9%A5%D9%A1%D9%A0_q8c4em.jpg",
        ],
        direction: "left",
        liveSiteLink: "https://inspiring-babbage-e50db6.netlify.app/",
        projectCodeLink: "https://github.com/yazan-ali/study-material-client"
    },
    {
        projectName: "Cars Show",
        developmentStack: carsShowDevelopmentStack,
        projectsDiscription: "A full stack website developed using :",
        backgroundColor: "#02022C",

        projectImgs: [
            "https://res.cloudinary.com/pic-gallary/image/upload/v1625051706/my-portofolio/cars_img2_pjpkf4.png",
            "https://res.cloudinary.com/pic-gallary/image/upload/v1625051695/my-portofolio/cars_img1_csdfz2.png",
        ],
        direction: "right",
        liveSiteLink: "https://damp-lake-71862.herokuapp.com/",
        projectCodeLink: "https://github.com/yazan-ali/cars-show-project"
    },
];

export { skills, contacts, projects }