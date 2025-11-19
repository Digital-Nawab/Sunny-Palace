import React, { useEffect } from 'react'
import Layout from '../components/layout/Layout'
import { ServiceNav } from './ServiceNav';

export const Renewing = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Layout>
                <section id="virtualEvent">
                    <div className="container">
                        <div className="main-heading">
                            <h1>Renewing your vows</h1>
                        </div>
                    </div>
                </section>

                <section className="space-top space-extra-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-8 col-lg-8">
                                <div className="page-single">
                                    <div className="page-img">
                                        <img
                                            src="assets/img/service/vows.webp"
                                            alt="Service Image"
                                            style={{ width: "100%" }}
                                        />
                                    </div>
                                    <div className="page-content">
                                        <h2 className="h3 page-title">Sunny Palace: Making Your Love Stronger - Renewing Your Vows</h2>
                                        <p>
                                            Love is a journey, and sometimes, it's nice to take a special pause to celebrate the love you have for each other. Renewing your vows is like saying "I love you" all over again. At Sunny Palace, we know how important this moment is, and we're here to make it wonderful for you.
                                        </p>
                                        <h2 className="h3 page-title">The Sunny Palace Vow Renewal Experience: Where Love Gets Stronger</h2>
                                        <p>Why choose Sunny Palace for your vow renewal? Because we believe your love story deserves to be celebrated in a special way. We're really good at creating moments of love and happiness, and we have a friendly team to make your vow renewal perfect.</p>
                                        <h2 className="h3 page-title">Creating Your Perfect Vow Renewal</h2>
                                        <h5>1. Choosing a Lovely Place</h5>
                                        <p>Where you have your vow renewal is important. Sunny Palace has many beautiful places for you to pick from. Whether you like gardens or elegant rooms, we'll help you find the perfect spot and make it look just the way you want.</p>
                                        <h5>2. Planning and Help</h5>
                                        <p>
                                            A vow renewal should be stress-free and happy. Our team will work closely with you to make a plan that's just right. From organizing everything to making sure your day goes smoothly, we'll take care of everything so you can focus on your love.
                                        </p>
                                        <h5>3. Making the Place Beautiful</h5>

                                        <p>We'll decorate your vow renewal venue to make it look like a dream. Our team will make sure everything looks perfect, from the flowers to the decorations. Your ceremony will be filled with love and beauty.</p>

                                        <h5>4. Pictures and Videos</h5>
                                        <p>Capture the love and joy of your vow renewal with our professional photographers and videographers. They'll take pictures and videos so you can remember this special moment forever.</p>
                                        <h5>5. Celebration and Toast</h5>
                                        <p>After the vow renewal, celebrate your love with a party just for you. We can create a special menu that's delicious and make a beautiful cake that's just as tasty as it is pretty.</p>
                                        <h5>6. Comfort for Your Guests</h5>
                                        <p>If your friends and family are coming to your vow renewal, we can help with where they'll stay and how they'll get here to make sure they're comfortable and happy.</p>
                                        <h5>7. Special Memories</h5>
                                        <p>Your journey with Sunny Palace doesn't end with the vow renewal. We can help with things like thank-you cards and keepsakes to help you remember this special day.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-lg-4">
                                <ServiceNav/>
                                <aside className="sidebar-area">
                                    <div className="widget widget_banner">
                                        <h4 className="widget_title">Book Now</h4>
                                        <div className="widget-banner">
                                            <form
                                                action="https://angfuzsoft.com/html/souler/demo/mail.php"
                                                method="POST"
                                                className="rsvp-form"
                                            >
                                                <div className="row">
                                                    <div className="form-group col-sm-12">
                                                        <input
                                                            type="text"
                                                            className="form-control style2"
                                                            name="name"
                                                            id="name"
                                                            placeholder="Your Name"
                                                        />
                                                    </div>
                                                    <div className="form-group col-sm-12">
                                                        <input
                                                            type="email"
                                                            className="form-control style2"
                                                            name="email"
                                                            id="email"
                                                            placeholder="Your Email"
                                                        />
                                                    </div>

                                                    <div className="form-group col-sm-12">
                                                        <input
                                                            type="number"
                                                            className="form-control style2"
                                                            name="guest"
                                                            id="guest"
                                                            placeholder="Phone Number"
                                                        />
                                                    </div>



                                                    <div className="form-btn col-12">
                                                        <button className="btnAbout style2">SEND</button>
                                                    </div>
                                                </div>
                                                <p className="form-messages mb-0 mt-3" />
                                            </form>

                                        </div>
                                        <div className="shape1">
                                            <img src="assets/img/flower_shape_1.png" alt="flower" />
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}
