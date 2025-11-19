import React, {useEffect} from 'react'
import Layout from '../components/layout/Layout'
import { ServiceNav } from './ServiceNav';

export const LaunchParties = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Layout>
                <section id="wedding">
                    <div className="container">
                        <div className="main-heading">
                            <h1>Launch Parties</h1>
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
                                            src="assets/img/service/launch-parties.webp"
                                            alt="Service Image"
                                            style={{ width: "100%" }}
                                        />
                                    </div>
                                    <div className="page-content">
                                        <h2 className="h3 page-title">Sunny Palace: Where We Make Your Launch Party Special</h2>
                                        <p>
                                            Launching something new, like a product or business, is a big deal, and we want to help you celebrate it in a big way. At Sunny Palace, we're experts at creating memorable launch parties that get people excited about what you're offering.
                                        </p>
                                        <h2 className="h3 page-title">The Sunny Palace Launch Party Experience: Where Success Begins with Fun</h2>
                                        <p>Why pick Sunny Palace for your launch party? Because we know that the first impression is super important, and we're here to make your event unforgettable. We have a team of friendly experts who are great at making your vision a reality.</p>
                                        <h2 className="h3 page-title">Creating Your Perfect Launch Party</h2>

                                        <h5>1. Choosing the Right Place</h5>
                                        <p>Where you have your launch party is important. Sunny Palace has lots of cool places for you to pick from. Whether you like a modern space or a fancy ballroom, we'll help you choose the best spot and make it look just the way you want.</p>
                                        <h5>2. Planning and Help</h5>
                                        <p>Having a successful launch party takes planning. Our team will work closely with you to make a plan for your event. We'll take care of all the details, so you can focus on what's important.</p>
                                        <h5>3. Technology:</h5>
                                        <p>We know that technology is a big part of today's events. Our venues have the latest tech gadgets, like big screens and fast internet, to make sure your presentations and demos go smoothly.</p>
                                        <h5>4. Delicious Food</h5>
                                        <p>We want your guests to enjoy tasty food. Our chefs will create a menu with yummy dishes that everyone will love. And, of course, we'll make a beautiful cake for your party.</p>
                                        <h5>5. Decorations</h5>
                                        <p>We'll decorate your party space to match your brand and what you're launching. Our team will make sure everything looks great, including your branding and decorations.</p>
                                        <h5>6. Fun and Activities</h5>
                                        <p>We want everyone to have a great time at your launch party. We can plan fun activities and entertainment that go along with your brand and message.</p>
                                        <h5>7. Pictures and Videos</h5>
                                        <p>You'll want to remember your special launch day. Our photographers and videographers will capture all the important moments so you can share them and look back on them later.</p>
                                        <h5>8. Networking and Engagement</h5>
                                        <p>We'll create spaces where your guests can meet and talk. This is a great way for people to connect and learn more about your launch.</p>
                                        <h5>9. After the Launch</h5>
                                        <p>We'll help you keep the excitement going after your launch party. We can assist with follow-up communications, feedback collection, and other things to keep your momentum strong.</p>
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
