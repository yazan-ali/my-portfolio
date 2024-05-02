import EmailForm from './email-form';
import './contact-me.scss';

function ContactMe() {
    return (
        <section id="contact-me" className="email-form relativ my-8">
            <div className="container lg:w-4/5">
                <h2 className='styled-heading styled-border text-2xl font-bold pt-4'>Contact Me</h2>
                <EmailForm />
            </div>
        </section>
    )
}

export default ContactMe