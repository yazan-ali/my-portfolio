'use client';
import React, { useState, useEffect } from 'react';
import '@/styles/imageSlider.scss';
import BtnSlider from './btnSlider';

function ImageSlider({ imgs }) {

    const [slideIndex, setSlideIndex] = useState(1);

    // useEffect(() => {
    //     setInterval(() => {
    //         if (slideIndex === imgs.length) {
    //             setSlideIndex(1);
    //         } else {
    //             setSlideIndex(slideIndex + 1);
    //         }
    //     }, 1500)
    // }, [])

    const nextSlide = () => {
        if (slideIndex !== imgs.length) {
            setSlideIndex(slideIndex + 1);
        } else if (slideIndex === imgs.length) {
            setSlideIndex(1)
        }
    }

    const backSlide = () => {
        if (slideIndex > 1) {
            setSlideIndex(slideIndex - 1);
        } else if (slideIndex === 1) {
            setSlideIndex(imgs.length)
        }
    }

    const moveDot = (idx: number) => {
        setSlideIndex(idx);
    }

    return (
        <div className="slider">
            {
                imgs.map((img: string, idx: number) => (
                    <div key={idx} className={slideIndex === idx + 1 ? "slide active-anim" : "slide"} >
                        <img src={img} alt={`img${idx}`} />
                    </div>
                ))
            }
            {/* <BtnSlider moveSlide={nextSlide} dirction="next" />
            <BtnSlider moveSlide={backSlide} dirction="back" /> */}

            <div className="dots">
                {Array.from({ length: imgs.length }).map((_, idx) => (
                    <div key={idx} className={slideIndex === idx + 1 ? "dot active" : "dot"}
                        onClick={() => moveDot(idx + 1)}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default ImageSlider;