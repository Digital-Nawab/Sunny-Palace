import React, { useEffect, useState } from 'react';
import './Testimonial.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export const Testimonial = () => {
    const testimonials = [
        {
            id: 1,
            name: 'Mukesh Kumar',
            image: 'assets/img/testimonial/Mukesh.jpeg',
            description: 'If anyone looking for a destination wedding or a heritage architecture for which we go out for destination wedding this is the place for you. Awesome architecture. Beautiful palace.'
        },
        {
            id: 2,
            name: 'Ajeet Kumar',
            image: 'assets/img/testimonial/Ajeet.jpeg',
            description: 'Awesome place for wedding and pre-wedding shoot large space for banquet, rooms and all the facilities are awesome. Special thanks to Satnaam Kaur and Pradeep Sharma for all the management.'
        },
        {
            id: 3,
            name: 'Dr. Satveer Singh',
            image: 'assets/img/testimonial/Satveer-Singh.jpeg',
            description: 'We came to select a place to Celebrate our Son\'s 2nd Birthday. We got recommendations for Sunny Palace. But to my surprise, it\'s a dream wedding destination. Satnam Mam and Inder Sir explain the scene to tiny details and they have maintained their Property to 7-star grades.'
        },
        {
            id: 4,
            name: 'Inder Bindra',
            image: 'assets/img/testimonial/Inder-Bindra.jpeg',
            description: 'Best wedding venue for residents of Gomti Nagar, Gomti Nagar extension, Sushant Golf City, and Neelmatha etc. 15 years plus experience in wedding and catering services.'
        }
    ];
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <section className="service-sec" id="testimonial-section" style={{ backgroundImage: `url('assets/img/testimonial.jpg')` }}>
                <div className="container">
                    <div className="title-area text-center"><span className="sub-title"><img src="assets/img/title_left.svg" alt="shape" />Our Clients<img src="assets/img/title_right.svg" alt="shape" /></span><h2 className="sec-title">Testimonial</h2></div>
                    <Slider {...settings}>
                        {testimonials.map((item, index) => (
                            <div className="story-box background-image" key={index} style={{ margin: '10px' }}>
                                <div className="box-title story-box_title avatar">
                                    <img key={index} src={item.image} alt="testimonial" />
                                </div>
                                <span className="story-box_date">{item.name}</span>
                                <p className="story-box_text" dangerouslySetInnerHTML={{ __html: item.description }}>

                                </p>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section >
        </>
    )
}
