import React from 'react';
import "./contacts.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { contacts } from "@/data";
export default function Contacts() {
    return (
        <aside className="contacts fixed translate-y-2/4 bottom-1/2">
            <ul className="contacts__list px-3 py-6">
                <li>
                    {
                        React.Children.toArray(contacts.map(contact => (
                            <a href={contact.link} className="flex items-center w-28 mt-3" target="_blank">
                                <FontAwesomeIcon icon={contact.icon} className="contacts__item text-3xl w-8" color={contact.color} />
                                <span className="font-medium ml-4">{contact.contactType}</span>
                            </a>
                        )))}
                </li>
            </ul>
        </aside>
    )
}
