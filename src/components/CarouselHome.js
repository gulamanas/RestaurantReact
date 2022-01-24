import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import './CarouselHome.css'

function CarouselHome() {
    return (
        <div>
            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                interval={3000}
                showStatus={false}
                showThumbs={false}
            >
                <div >
                    <img className='carousel_img' src="/images/burger.jpg" />
                    <p className="legend">Burger</p>
                </div>
                <div>
                    <img className='carousel_img' src="/images/pizza.jpg" />
                    <p className="legend">Pizza</p>
                </div>
                <div>
                    <img className='carousel_img' src="/images/noodles.jpg" />
                    <p className="legend">Noodles</p>
                </div>
            </Carousel >
        </div>
    );
}

export default CarouselHome;
