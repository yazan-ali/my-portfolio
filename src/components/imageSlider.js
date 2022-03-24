import React, { useState } from 'react';
import './styles/css/imageSlider.css';
import BtnSlider from './btnSlider';

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

    const moveDot = (idx) => {
        setSlideIndex(idx);
    }

    return (
        <div className="container-slider">
            {
                imgs.map((img, idx) => (
                    <div key={idx} className={slideIndex === idx + 1 ? "slide active-anim" : "slide"} >
                        <img src={img} alt={`img${idx}`} />
                    </div>
                ))
            }
            <BtnSlider moveSlide={nextSlide} dirction="next" />
            <BtnSlider moveSlide={backSlide} dirction="back" />

            <div className="container-dots">
                {Array.from({ length: imgs.length }).map((item, idx) => (
                    <div key={idx} className={slideIndex === idx + 1 ? "dot active" : "dot"}
                        onClick={() => moveDot(idx + 1)}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default ImageSlider;