import "@/styles/contacts.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faSquarePhone, faFile } from '@fortawesome/free-solid-svg-icons';

export default function Contacts() {
    const contactData = [
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
    return (
        <aside className="contacts fixed translate-y-2/4 bottom-1/2">
            <ul className="contacts__list px-3 py-6">
                <li>
                    {contactData.map(contact => (
                        <a href="#" className="flex items-center w-28 mt-3">
                            <FontAwesomeIcon icon={contact.icon} className="w-6" color={contact.color} />
                            <span className="font-medium ml-3">{contact.contactType}</span>
                        </a>
                    ))}
                </li>
            </ul>
        </aside>
    )
}
