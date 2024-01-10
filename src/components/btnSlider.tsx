import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import '@/styles/imageSlider.scss';

function BtnSlider({ dirction, moveSlide }) {
    let icon = dirction === "next" ? faArrowRight : faArrowLeft;
    return (
        <button onClick={moveSlide} className={dirction === "next" ? "btn-slide next" : "btn-slide prev"}>
            <FontAwesomeIcon icon={icon} />
        </button>
    );
}

export default BtnSlider;