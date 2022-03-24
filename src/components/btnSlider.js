import React from 'react';
import './styles/css/imageSlider.css';


function BtnSlider({ dirction, moveSlide }) {
    return (
        <button onClick={moveSlide} className={dirction === "next" ? "btn-slide next" : "btn-slide prev"}>
            <i className={`fas fa-${dirction === "next" ? "arrow-right" : "arrow-left"}`}></i >
        </button>
    );
}

export default BtnSlider;