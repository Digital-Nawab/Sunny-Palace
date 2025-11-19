import React, { useEffect, useState } from 'react';
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const HomeSlider = () => {

    const data = [
        {
          slider_image: '/assets/img/banner1.webp',
          alt_text: 'Slide 1'
        },
        {
          slider_image: '/assets/img/banner2.webp',
          alt_text: 'Slide 2'
        },
        {
          slider_image: '/assets/img/banner3.webp',
          alt_text: 'Slide 3'
        },
        {
            slider_image: '/assets/img/banner5.webp',
            alt_text: 'Slide 4'
          },
        // Add more slides as needed
      ];

    const sliderSettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        infinite: true,
    }

    return (
        <>
            <Slider {...sliderSettings}>
                {data.map((item, index) => (
                    <img key={index} src={item.slider_image} alt={item.alt_text} />
                ))}
            </Slider>
        </>
    )
}
