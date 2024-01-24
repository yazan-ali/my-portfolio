"use client"
import React, { FormEvent, useState } from 'react';
import emailjs from 'emailjs-com';
import { motion, Variants } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import './contact-me.scss';

function EmailForm() {

    const { ref, inView } = useInView();
    const formVariants: Variants = {
        inView: {
            y: "0",
            opacity: 1,
            transition: {
                type: "spring", duration: 1.2, bounce: 0.3
            },
        },
        outView: {
            y: "100%",
            opacity: 0,
        }
    };

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
        <div className='overflow-hidden' ref={ref}>
            <motion.div
                animate={inView ? "inView" : "outView"}
                variants={formVariants}
            >
                <form ref={form} onSubmit={sendEmail} className='email-form__form rounded-lg overflow-hidden relative mt-8 mx-auto p-3 md:p-8'>
                    <div className='email-form__bg absolute rounded-lg top-0 left-0 -z-10' />
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
                        {alert?.message && <p style={{ color: alert.success ? "#fff" : "red" }}>{alert.message}</p>}
                        <button className='email-form__btn p-4 font-bold' type="submit">Send</button>
                    </div>
                </form>
            </motion.div>
        </div>
    )
}

export default EmailForm;