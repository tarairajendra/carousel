import React, { useState } from "react";
import './Style.sass'
import Slide from "./Slide";

const numberOfSlides = [0, 1, 2, 3]

const Slider = () => {
    const [current, setCurrent] = useState(1)
    const wrapperTransform = {
        'transform': `translateX(-${current * (100 / numberOfSlides.length)}%)`
    }
    return (
        <div className='slider'>
            <div className='slider__wrapper' style={wrapperTransform}>
                {
                    numberOfSlides.map((item) =>
                        <Slide
                            key={item}
                            index={item}
                            current={current}
                            onClick={setCurrent}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default Slider
