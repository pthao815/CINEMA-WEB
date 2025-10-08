
import React from 'react'
import Slider  from 'react-slick';
import { Image } from 'antd';
import { WrapperSlider } from './style';

const SliderComponent = ({arrImages}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true
    };
    return (
        // <Slider {...settings}>
        //     {arrImages.map((image) => {
        //         return (
        //             <Image src={image} alt="Slider" preview={false} width="100%" />
        //         )
        //     })}
        // </Slider>
    // )
    <WrapperSlider>
      <Slider {...settings}>
        {arrImages.map((image, index) => (
          <div key={index}>
            <Image
              src={image}
              alt={`Slider ${index}`}
              preview={false}
              width="100%"
            />
          </div>
        ))}
      </Slider>
    </WrapperSlider>
    );
};

export default SliderComponent