"use client"
import React, { FormEvent, useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import '@/styles/emailForm.scss';

function EmailForm() {

    const form = React.createRef<HTMLFormElement>();

    const [alert, setAlert] = useState({ success: false, message: "" });

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (form.current) {
            emailjs.sendForm("service_45he3qp", 'template_9qwhpjr', form.current, 'user_auNJsV3PDr7FaeOTFIm72')
                .then((result) => {
                    setAlert({
                        success: true,
                        message: "The email was sent successfully"
                    });
                    form.current && (form.current as HTMLFormElement).reset();
                }, (error) => {
                    console.log(error)
                    setAlert({
                        success: false,
                        message: "An error occurred while sending the email"
                    })
                });
        }
    };

    return (
        <section id="contact-me" className="email-form relative min-h-screen mt-8">
            <div className="container lg:w-4/5">
                <h2 className='styled-heading styled-border text-2xl font-bold pt-4'>Contact Me</h2>
                <form ref={form} onSubmit={sendEmail} className='email-form__form rounded-lg mt-8 mx-auto p-3 md:p-8'>
                    <p className='text-lg text-center'>
                        I am interested in front-end and full-stack web development opportunities,
                        if you are offering such opportunities, don't hesitate to contact me using the form below.
                    </p>
                    <div className='flex flex-col gap-4 mt-4'>
                        <div className="flex flex-col md:flex-row gap-4">
                            <input type="text" name="name" placeholder="Name" required className="email-form__input flex-1" />
                            <input type="email" name="email" placeholder="Email" required className="email-form__input flex-1" />
                        </div>
                        <input type="text" name="subject" placeholder="Subject" className="email-form__input" required />
                        <textarea name="message" rows={6} placeholder="Message" className="email-form__input" required />
                        {alert && <p style={{ color: alert.success ? "green" : "red" }}>{alert.message}</p>}
                        <button className='email-form__btn p-4 font-bold' type="submit">Send</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default EmailForm;