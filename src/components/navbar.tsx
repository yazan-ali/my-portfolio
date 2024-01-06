import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import "@/styles/navbar.scss";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="container md:flex justify-between items-center md:h-16 px-0 md:px-4">
                <div className="flex justify-between p-4 md:p-0">
                    <a href="#about-me" className="text-xl font-semibold">Yazan Abuali</a>
                    <label htmlFor="nav-toggle" className="block md:hidden w-6">
                        <FontAwesomeIcon icon={faBars} />
                    </label>
                </div>
                <input id="nav-toggle" type="checkbox" className="nav__toggle hidden" />
                <ul className="nav md:flex px-4 md:px-0">
                    <li className="py-2 md:py-0 md:px-3">
                        <a href="#">Home</a>
                    </li>
                    <li className="py-2 md:py-0 md:px-3">
                        <a href="#">Skills</a>
                    </li>
                    <li className="py-2 md:py-0 md:px-3">
                        <a href="#">Experience</a>
                    </li>
                    <li className="py-2 md:py-0 md:px-3">
                        <a href="#">Projects</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
