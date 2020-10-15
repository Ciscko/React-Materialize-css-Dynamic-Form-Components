import React, { createRef, useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'

const CarouselContent = ({ items }) => {
    const carouselContentRef = createRef()
    useEffect(() => {
        M.Carousel.init(carouselContentRef.current, {
            fullWidth: true, indicators: true
        })
    }, [])
    return (
       
            <div className="carousel carousel-slider center" ref={carouselContentRef}>
                <div className="carousel-fixed-item center"></div>
                {
                    items.map((item, index) => {
                        return (
                            <div key={index} className={`carousel-item ${item.classes}`} href="#">
                                <h3>{item.header}</h3>
                                <p>{item.content}</p>
                                <p>{item.detail}</p>
                            </div>
                        )
                    })
                }
            </div>
    );
}
export default CarouselContent;