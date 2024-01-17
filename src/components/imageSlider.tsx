'use client';
import { useState } from 'react';
import Image from 'next/image';
import BtnSlider from './btnSlider';
import '@/styles/imageSlider.scss';

function ImageSlider({ imgs }) {

    const [slideIndex, setSlideIndex] = useState(1);

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
                        <Image src={img} alt={`img${idx}`} width="300" height="300" loading='lazy' />
                    </div>
                ))
            }
            <BtnSlider moveSlide={nextSlide} dirction="next" />
            <BtnSlider moveSlide={backSlide} dirction="back" />

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