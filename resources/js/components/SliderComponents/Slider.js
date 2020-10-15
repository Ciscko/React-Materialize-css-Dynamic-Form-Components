import React, { createRef, useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'

const Slider = ({ options, items }) => {
    const sliderRef = createRef()
    useEffect(() => {
        M.Slider.init(sliderRef.current, options)
    }, [])
    return (
            <div className="slider" ref={sliderRef}>
                <ul className="slides">
                    {
                        items.map((item, index) => {
                            return (
                                <li key={index}>
                                    <img src={item.img} />
                                    <div className={`caption ${item.classes}`}>
                                        <h3>{item.header}</h3>
                                        <h5 className="light grey-text text-lighten-5">{item.content}</h5>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
    );
}
export default Slider;