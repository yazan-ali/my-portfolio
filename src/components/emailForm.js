import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

function EmailForm() {

    const form = useRef();

    const [alert, setAlert] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_45he3qp", 'template_9qwhpjr', form.current, 'user_auNJsV3PDr7FaeOTFIm72')
            .then((result) => {
                setAlert({
                    success: true,
                    message: "The email was sent successfully"
                })
                form.current.reset()
            }, (error) => {
                setAlert({
                    success: false,
                    message: "An error occurred while sending the email"
                })
            });
    };

    return (
        <motion.div
            className="email-form"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h2>Contact Me</h2>
            <form ref={form} onSubmit={sendEmail}>
                <p>
                    I am interested in front-end and full-stack web development opportunities,
                    if you are offering such opportunities, don't hesitate to contact me using the form below.
                </p>
                <div className="form-group">
                    <input type="text" name="name" placeholder="Name" required className="inline-input" />
                    <input type="email" name="email" placeholder="Email" required className="inline-input" />
                </div>
                <input type="text" name="subject" placeholder="Subject" required />
                <textarea name="message" rows={10} placeholder="Message" required />
                {alert && <p style={{ color: alert.success ? "green" : "red" }}>{alert.message}</p>}
                <button type="submit">Send</button>
            </form>
        </motion.div>
    )
}

export default EmailForm;