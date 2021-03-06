import React, { useState } from 'react'
import { VideoData } from './VideoData'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import ImgInfoPopover from './ImgInfoModal'
import './slider.css'

const VideoSlider = ({ slides }) => {
    const [currentImage, setCurrentImage] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrentImage(currentImage === length - 1 ? 0 : currentImage + 1);
    }

    const prevSlide = () => {
        setCurrentImage(currentImage === 0 ? length - 1 : currentImage - 1)
    }


    if(!Array.isArray(slides) || slides.length <= 0) {
        return null
    }

    return (
        <section className="slider">
            <div>
                <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
            </div>
            <div>
                <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
            </div>
            {VideoData.map((slide, index) => {
                return (
                    <div className={index === currentImage ? "slide active" : "slide"} key={index}>
                        {index === currentImage && (<video src={slide.image} autoPlay loop muted controls className="art-image" />)}
                        <div className='imgButtWrap'>
                            {index === currentImage && (<ImgInfoPopover info={slide} />)}
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export default VideoSlider
