import Skill from "@/components/skillCard";
import {
    faHtml5,
    faCss3Alt,
    faSass,
    faJsSquare,
    faBootstrap,
    faReact,
    faNodeJs,

} from '@fortawesome/free-brands-svg-icons';
import "@/styles/skills.scss";

const skillsData = [
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
        skillLogo: { img: true, logo: "https://res.cloudinary.com/pic-gallary/image/upload/v1624984410/my-portofolio/material-ui-logo_q2t1nq.png" },
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
    }, {
        skillName: "Next JS",
        color: "gray",
        skillLogo: { img: true, logo: "https://res.cloudinary.com/pic-gallary/image/upload/v1653733553/my-portofolio/nextjs-boilerplate-logo_sjtf99.png" },
        duration: 1.5,
        animationDiriction: "left",
        skillLogoWidth: 100,
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

export default function Skills() {
    return (
        <section id="skills" className="skills relative min-h-screen">
            <div className="container flex flex-col lg:w-9/12 justify-center items-center">
                <h2 className="text-2xl font-semibold mt-8 md:mt-8">Skills</h2>
                <div className="skills__list flex flex-wrap justify-center gap-6 mt-6">
                    {
                        skillsData.map(skill => (
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
