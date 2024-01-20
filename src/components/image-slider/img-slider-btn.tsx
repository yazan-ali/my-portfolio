import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './image-slider.scss';

function BtnSlider(props: BtnSliderProps) {
    const { direction, moveSlide } = props;
    let icon = direction === "next" ? faArrowRight : faArrowLeft;
    return (
        <button onClick={moveSlide} className={direction === "next" ? "btn-slide next" : "btn-slide prev"}>
            <FontAwesomeIcon icon={icon} />
        </button>
    );
}

export default BtnSlider;