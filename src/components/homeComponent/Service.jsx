import React from 'react'
import { Link } from 'react-router-dom';
export const Service = () => {
    const serviceData = [
        {
            id: 1,
            category_name: 'Wedding',
            service_image: 'assets/img/services/wedding.webp',
            description: 'At Sunny Palace, we take pride in offering a comprehensive suite of wedding services to ensure your special day is a flawless, unforgettable celebration. Our dedicated team and stunning venue provide the perfect canvas for your dream wedding.',
            link : 'wedding'
        },
        {
            id: 2,
            category_name: 'Reception',
            service_image: 'assets/img/services/reception.webp',
            description: "At Sunny Palace, we understand that your wedding reception is not just an event; it's a grand celebration of your love story. Our premium lawn is the perfect canvas for crafting an unforgettable reception experience.",
            link : 'reception'
        },
        {
            id: 3,
            category_name: 'Launch Parties',
            service_image: 'assets/img/services/launch-parties.webp',
            description: "Sunny Palace is not just a venue for weddings and receptions; it's also the ideal destination for hosting memorable launch parties that leave a lasting impression. Whether you're unveiling a new product, launching a brand, or celebrating a milestone achievement",
            link : 'launch-parties'
        },
        {
            id: 4,
            category_name: 'Corporate Meeting',
            service_image: 'assets/img/services/corporate-meeting.webp',
            description: 'Sunny Palace offers a unique and inspiring venue for corporate meetings, conferences, and business gatherings. Our premium lawn, surrounded by natural beauty, provides the ideal setting to foster creativity, productivity, and successful collaboration.',
            link : 'corporate-meeting'
        },
        {
           id: 5,
           category_name: 'Birthdays Parties',
           service_image: 'assets/img/services/birthday-parties.webp',
           description: 'Celebrate your special day in style at Sunny Palace, where the beauty of nature meets the joy of festivities. Our premium lawn provides a picturesque backdrop for unforgettable birthday parties, regardless of age or theme.',
           link : 'birthdays-parties'
        },

        {
           id: 6,
           category_name: 'Renewing your vows',
           service_image: 'assets/img/services/renewing-your-vows.webp',
           description: 'Sunny Palace invites you to renew your love and commitment in a beautiful, serene setting that perfectly complements the significance of this special moment. Our premium lawn provides the ideal backdrop for vow renewal ceremonies that are both heartfelt and memorable.',
           link : 'renewing-your-vows'
        },
        {
            id: 7,
            category_name: 'Engagement',
            service_image:'assets/img/services/engagement.jpg',
            description: "At Sunny Palace, we're here to make your engagement day wonderful. Our cozy venue and friendly team create a special atmosphere. Contact us to plan your joyful celebration of love and commitment.",
            link : 'engagement'
         }
    ];

    return (
        <>
            <section className="service-sec space mb-5" id="service-sec">
                <div className="container">
                    <div className="title-area text-center">
                        <span className="sub-title">
                            <img src="assets/img/title_left.svg" alt="shape" />
                            What We Do
                            <img src="assets/img/title_right.svg" alt="shape" />
                        </span>
                        <h2 className="sec-title">Our Best Services</h2>
                    </div>

                    <div className="row align-items-center gy-4">
                        <div className="col-md-6 col-xl-3 col-lg-3 p-2">
                            <p>
                                With spectacular views of the Roman Architecture at an unrivalled location, the Sunny Palace makes for a fantastic choice for weddings.
                            </p>
                            <p>
                                Be it our grand ballroom or wonderful alfresco venues, our team of planners work tirelessly to create magical days that are expertly tailored to each couple.
                            </p>
                        </div>
                        {serviceData.map((item, index) => (
                            <div className="col-md-6 col-xl-3 col-lg-3 p-2" key={index}>
                                <div className="service-box">
                                    <div className="service-box_inner">
                                        <div className="service-box_icon">
                                            <img src={item.service_image} className="service-image" alt={item.category_name} />
                                        </div>
                                        <h3 className="service-box_title">
                                            {item.category_name}
                                        </h3>
                                        <p className="service-box_text" dangerouslySetInnerHTML={{ __html: item.description }}></p>
                                        <Link to={item.link} className="line-btn">
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
