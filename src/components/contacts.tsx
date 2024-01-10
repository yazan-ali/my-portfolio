import "@/styles/contacts.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { contacts } from "@/data";
export default function Contacts() {
    return (
        <aside className="contacts fixed translate-y-2/4 bottom-1/2">
            <ul className="contacts__list px-3 py-6">
                <li>
                    {contacts.map(contact => (
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
