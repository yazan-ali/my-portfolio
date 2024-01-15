import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import "@/styles/navbar.scss";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="container md:flex justify-between items-center md:h-16 px-0 md:px-4">
                <input id="nav-toggle" type="checkbox" className="nav-toggle hidden" />
                <div className="nav-toggle__wrapper flex justify-between p-4 md:p-0">
                    <a href="#about-me" className="text-xl font-semibold">Yazan Abuali</a>
                    <label htmlFor="nav-toggle" className="nav-toggle__btn block md:hidden w-6">
                        <FontAwesomeIcon className='nav-toggle__bars' icon={faBars} />
                        <FontAwesomeIcon className="nav-toggle__cross hidden " icon={faXmark} />
                    </label>
                </div>
                <ul className="nav md:flex px-4 md:px-0">
                    <li className="py-2 md:py-0 md:px-3">
                        <a href="#about-me">About Me</a>
                    </li>
                    <li className="py-2 md:py-0 md:px-3">
                        <a href="#skills">Skills</a>
                    </li>
                    <li className="py-2 md:py-0 md:px-3">
                        <a href="#projects">Projects</a>
                    </li>
                    <li className="py-2 md:py-0 md:px-3">
                        <a href="#experience">Experience</a>
                    </li>
                    <li className="py-2 md:py-0 md:px-3">
                        <a href="#contact-me">Contact Me</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
