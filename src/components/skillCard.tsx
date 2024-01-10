import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Skill({ skillName, skillLogo, color, skillLogoWidth }) {
    return (
        <div className="skill flex flex-col items-center rounded-md h-36 py-4"
        >
            <div className="skill__bg"
                style={{ backgroundImage: `linear-gradient(45deg, #fff, ${color})` }}
            ></div>
            {
                skillLogo.img ?
                    <img style={{ borderRadius: 10, width: skillLogoWidth }} src={skillLogo.logo} alt={skillName} />
                    :
                    <FontAwesomeIcon icon={skillLogo} className="w-32" color={color} />

            }
            <span className='font-bold mt-auto text-center' style={{ color: color }}>{skillName}</span>
        </div>
    )
}
