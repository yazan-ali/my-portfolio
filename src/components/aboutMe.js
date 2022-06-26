import React, { useEffect } from 'react';
import './styles/css/aboutMe.css';
import { motion } from "framer-motion";

function AboutMe() {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [])

    return (
        <motion.div
            className="aboutMe-root"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="aboutMe">
                <div className="intro">
                    <p>{`${"<html>"}`}</p>
                    <p>{`${"<body>"}`}</p>
                    <p style={{ paddingTop: 12 }}>{`${"<about-me>"}`}</p>
                    <p className="info">Hey, My Name is Yazan Abuali.</p>
                    <p className="info">I'm a full stack web developer with a passion for
                        learning new technologies and developing modern web applications,
                        I'm also interested in machine learning and game development.
                    </p>
                    <p style={{ paddingBottom: 12 }}>{`${"</about-me>"}`}</p>
                    <p>{`${"<my-motivation>"}`}</p>
                    <p className="info">
                        The idea of learning how to build something I used daily like web applications and games
                        and knowing how it works is what keeps me motivated to learn more and more.
                    </p>
                    <p style={{ paddingBottom: 12 }}>{`${"</my-motivation>"}`}</p>
                    <p>{`${"</body>"}`}</p>
                    <p>{`${"</html>"}`}</p>
                </div>
                <img src="https://res.cloudinary.com/pic-gallary/image/upload/v1648060458/my-portofolio/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971_zbvny4_w8si7x.png" />
            </div>
        </ motion.div>
    );
}

export default AboutMe;