import React from 'react';
// import {PDFtoIMG} from 'react-pdf-to-image';

import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
    Image
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const PortfolioSlides = (props) => {
    
    let slides = Array.from(props.slides);
    let path = props.path
    return (
        <>
            <CarouselProvider
                naturalSlideWidth={1280}
                naturalSlideHeight={720}
                totalSlides={slides.length}
            >
                <Slider>
                    {slides.map((slide, index) => (
                        <Slide key={index} index={index}>
                            <Image src={path + slide} />
                        </Slide>
                    ))}
                </Slider>
                <ButtonBack className="button">
                    <span className="button-icon fa fa-arrow-left"></span>
                    <span className="button-text">Previous Slide</span>
                </ButtonBack>
                <ButtonNext className="button">
                    <span className="button-text">Next Slide</span>
                    <span className="button-icon fa fa-arrow-right"></span>
                </ButtonNext>
            </CarouselProvider>
        </>
    );
};

export default PortfolioSlides;
