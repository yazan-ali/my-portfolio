"use client"
import Image from 'next/image';
import { motion } from "framer-motion";
import "./about-me.scss";

export default function AboutMe() {
    return (
        <section id="about-me" className="about-me relative text-center md:text-start mt-4">
            <div
                className="container flex flex-col-reverse md:flex-row justify-center lg:w-4/5 items-center gap-11 h-full overflow-hidden pt-4">
                <motion.div className="flex-1"
                    animate={{
                        x: 0,
                        opacity: 1,
                        transition: {
                            type: "spring", duration: 2, delay: 1.5
                        }
                    }}
                    initial={{ x: 300, opacity: 0 }}
                >
                    <h1 className="styled-heading text-3xl font-bold">Hi, I'm Yazan</h1>
                    <p className="text-lg">
                        I am a software engineer with a passion for creating innovative and efficient websites.
                        My commitment to delivering high-quality solutions is fueled by a genuine enthusiasm for
                        staying at the forefront of web development trends.
                        Let's build the future together through code.
                    </p>
                    <a href="#skills" className="btn btn-primary mt-3">Know More</a>
                </motion.div>
                <motion.div
                    animate={{
                        scale: 1,
                        opacity: 1,
                        rotate: 0,
                        transition: {
                            type: "spring", duration: 3, bounce: 0.4,
                        }
                    }}
                    initial={{ scale: 0.5, opacity: 0, rotate: 320 }}
                    className="flex-1"
                >
                    <Image src="/images/example-12.svg" className='w-full h-full' width="300" height="300" alt="Developer illustration" role="presentation" loading='eager' />
                </motion.div>
            </div>
        </section>
    )
}
