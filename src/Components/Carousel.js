import React, { useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import planeImg from '../assets/images/plane.jpg'
import trainImg from '../assets/images/train.jpg'
import truckImg from '../assets/images/truck.jpg'
import Slider from 'react-slick/lib/slider';


var carouselContents = [
    {
        index: 1,
        imagePath: planeImg,
        title: 'Cargo Transport',
        description: 'Global turnkey logistics and transportation services via sea, land and air. We will protect you from risk and liability.'
    },

    {
        index: 2,
        imagePath: truckImg,
        title: 'Arround the world',
        description: 'Molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto. Ut wisi enim.'
    },

    {
        index: 3,
        imagePath: trainImg,
        title: 'Send it anywhere',
        description: 'Ut wisi enim. Molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto'
    },
]



function Carousel() {
    const [animate, setAnimate] = useState(false)

    const showParagraph = () => {
        setAnimate(true)
    }
    const hideParagraph = () => {

        setAnimate(false)
    }

    const sliderSettings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1500,
        afterChange: showParagraph,
        onInit: showParagraph,
        beforeChange: hideParagraph
    }

    return (
        <div className='my-slider'>
            <Slider {...sliderSettings}>
                {carouselContents.map((eachContent) => {
                    return <div key={eachContent.index}>
                        <img src={eachContent.imagePath} />
                        <div className='carousel-word'>
                            {animate && <h4 className='animate-h'>{eachContent.title}</h4>}
                            {animate && <p className='animate-p' >{eachContent.description}</p>}
                        </div>

                    </div>
                })}
            </Slider>
        </div>
    )
}

export default Carousel