import './Carrousel.css'
import { useState } from 'react'
import chevronleft from '../../assets/chevronleft.png'
import chevronright from '../../assets/chevronright.png'

export default function Carrousel(props) {

    const [slide, setSlide] = useState(0)
    const length = props.slides.length

    const next = () => {
        setSlide(slide === length - 1 ? 0 : slide + 1);
    }

    const prev = () => {
        setSlide(slide === 0 ? length - 1 : slide - 1);
    }
    console.log(props)
    return (
        <div className='carrousel'>
            {props.slides.map((picture, index) => {
                return (
                    <div key={index} className={
                        index === slide
                            ? "slide carrousel__active-picture"
                            : "slide carrousel__inactive-picture"
                    }>{index === slide && (
                        <img src={picture} alt="" className="carrousel__picture" />
                    )}</div>
                )
            }
            )}
            {length > 1 ? (
                <>
                    <div className="carrousel__previous" onClick={prev}>
                        <img src={chevronleft} alt="" className="slider__previous-icon" />
                    </div>
                    <div className="carrousel__next" onClick={next}>
                        <img src={chevronright} alt="" className="slider__next-icon" />
                    </div>
                </>
            ) : null}
            <div className='carrousel__counter'>{slide +1 }/{length}</div>
        </div>
    )
}
