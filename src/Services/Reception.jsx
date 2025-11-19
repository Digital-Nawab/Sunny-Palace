import React, { useEffect } from 'react'
import Layout from '../components/layout/Layout';
import { ServiceNav } from './ServiceNav';
export const Reception = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
        <Layout>
            <section id="virtualEvent">
                <div className="container">
                    <div className="main-heading">
                        <h1>Reception</h1>
                    </div>
                </div>
                {/*/.container*/}
            </section>

            <section className="space-top space-extra-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-8 col-lg-8">
                            <div className="page-single">
                                <div className="page-img">
                                    <img
                                        src="assets/img/service/reception.webp"
                                        alt="Service Image"
                                        style={{ width: "100%" }}
                                    />
                                </div>
                                <div className="page-content">
                                    <h2 className="h3 page-title">Sunny Palace: Where Great Parties Happen </h2>
                                    <p>
                                        At Sunny Palace, we know how to make parties amazing, whether it's for a big celebration, a work event, or any special occasion. We'll help you throw a fun and fantastic party that everyone will enjoy.
                                    </p>

                                    <h2 className="h3 page-title">The Sunny Palace Party Experience: Where the Fun Begins</h2>
                                    <p>
                                        Why choose Sunny Palace for your party? Because we're really good at making parties awesome. We have a team of friendly people who are experts at creating fun and exciting parties.
                                    </p>
                                    <h2 className="h3 page-title">Making Your Perfect Party</h2>
                                    <h5>1. Choosing the Right Place</h5>
                                    <p>
                                        Where you have your party matters. Sunny Palace has lots of cool places for you to pick from. Whether you like being inside or outside, we'll help you find the perfect spot and make it look great.
                                    </p>
                                    <h5>2. Planning and Help</h5>
                                    <p>Having a great party takes planning. Our team will help you plan your party so that everything goes smoothly. We'll take care of all the details, so you can relax and have a good time.</p>
                                    <h5>3. Delicious Food</h5>
                                    <p>We want your guests to enjoy yummy food. Our chefs will make a menu with tasty dishes that everyone will love. And don't forget the amazing cake!</p>
                                    <h5>4. Pretty Decorations</h5>
                                    <p>We'll make your party place look fantastic. Our team will decorate everything, from the tables to the walls. Your party will look awesome.</p>
                                    <h5>5. Entertainment and Fun</h5>
                                    <p>We want everyone to have a blast at your party. We can arrange for music, games, and fun things to do so that everyone has a great time.</p>
                                    <h5>6. Pictures and Videos</h5>
                                    <p>You'll want to remember your fantastic party. Our photographers and videographers will take pictures and videos so you can look back on all the fun moments.</p>
                                    <h5>7. Comfortable Rooms</h5>
                                    <p>Before and during your party, you can use our comfy rooms. They're perfect for relaxing and getting ready for your big event.</p>
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

    );
}
