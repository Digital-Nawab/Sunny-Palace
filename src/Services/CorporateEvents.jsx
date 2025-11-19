import React, { useEffect } from 'react'
import Layout from '../components/layout/Layout'
import { ServiceNav } from './ServiceNav';

export const CorporateEvents = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Layout>
                <section id="virtualEvent">
                    <div className="container">
                        <div className="main-heading">
                            <h1>Corporate  Meeting</h1>
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
                                            src="assets/img/service/coporate-meetings.webp"
                                            alt="Service Image"
                                            style={{ width: "100%" }}
                                        />
                                    </div>
                                    <div className="page-content">
                                        <h2 className="h3 page-title">Sunny Palace: Making Your Business Meetings Better</h2>
                                        <p>
                                            In the world of business, meetings are important. It's where people come together to talk, plan, and make important decisions. At Sunny Palace, we understand how crucial these meetings are, whether they're big conferences or small team gatherings. We're here to make your meetings successful and enjoyable.
                                        </p>
                                        <h2 className="h3 page-title">The Sunny Palace Corporate Meeting Experience: Where Success Meets Comfort</h2>
                                        <p>
                                            Why choose Sunny Palace for your business meeting? Because we believe that where you meet is important. We're committed to making your meetings go smoothly. With our experienced team and great facilities, we offer complete meeting services that make your work easier.
                                        </p>
                                        <h2 className="h3 page-title">Creating Your Perfect Meeting</h2>
                                        <h5>1. Choosing the Right Place</h5>
                                        <p>Where you meet matters. Sunny Palace has different places to choose from. Whether you want a formal meeting room, a big conference hall, or a relaxing outdoor space, we help you pick the best spot and set it up the way you like.</p>
                                        <h5>2. Planning and Help</h5>
                                        <p>Good meetings need planning. Our team will work closely with you to create a meeting plan. We'll take care of the details, like working with other companies and making sure everything runs smoothly.</p>
                                        <h5>3. Technology</h5>
                                        <p>We know that technology is important for modern meetings. Our venues have the latest tech gadgets, like big screens and fast internet, to make sure your presentations and discussions go well.</p>

                                        <h5>4. Good Food</h5>
                                        <p>We want your guests to enjoy delicious food. Our chefs will make a menu with tasty dishes that everyone will like. From breakfast to lunch, every meal shows our commitment to great food.</p>
                                        <h5>5. Making the Place Look Nice</h5>
                                        <p>We'll decorate your meeting place to match your company's style and the goals of your meeting. Our design team makes sure everything looks great, from the tables to the branding.</p>
                                        <h5>6. Break and Relax Areas</h5>
                                        <p>Meetings can be tiring, so we provide comfortable areas where you can take breaks and relax. Whether it's a cozy lounge or a place to brainstorm ideas, we create a nice atmosphere.</p>
                                        <h5>7. Extra Help</h5>
                                        <p>Our team is always ready to assist with any last-minute changes or needs during your meeting. We make sure everything goes well, from technology to helping your guests.</p>
                                        <h5>8. After the Meeting</h5>
                                        <p>Our support doesn't stop when your meeting ends. We can help with tasks like gathering information, sending follow-up messages, and collecting feedback, so you can continue to build on the success of your meeting.</p>
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
