import React, { useEffect } from 'react'
import Layout from '../components/layout/Layout'
import { ServiceNav } from './ServiceNav';

export const BirthdayParties = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Layout>
                <section id="virtualEvent">
                    <div className="container">
                        <div className="main-heading">
                            <h1>Birthdays Parties</h1>
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
                                            src="assets/img/service/birthday.webp"
                                            alt="Service Image"
                                            style={{ width: "100%" }}
                                        />
                                    </div>
                                    <div className="page-content">
                                        <h2 className="h3 page-title">Sunny Palace: Where Awesome Birthday Parties Happen</h2>
                                        <p>
                                            Birthdays are special days, and at Sunny Palace, we want to make them extra special! We know that celebrating your birthday with friends and family is important, and we're here to help you have a fantastic party that you'll always remember.
                                        </p>
                                        <h2 className="h3 page-title">The Sunny Palace Birthday Party Experience: Where Fun Begins</h2>
                                        <p>Why pick Sunny Palace for your birthday party? Because we love making birthdays amazing! We have a friendly team that's really good at creating fun and exciting parties.</p>
                                        <h2 className="h3 page-title">Creating Your Perfect Birthday Party</h2>
                                        <h5>1. Picking the Right Place</h5>
                                        <p>Where you have your birthday party is important. Sunny Palace has lots of cool places to choose from. Whether you like being inside or outside, we'll help you find the perfect spot and make it look great.</p>
                                        <h5>2. Planning and Help</h5>
                                        <p>Having a great birthday party takes planning. Our team will work closely with you to make a plan for your party. We'll take care of all the details, so you can focus on having fun.</p>
                                        <h5>3. Delicious Food</h5>
                                        <p>We want your guests to enjoy yummy food. Our chefs will create a menu with tasty dishes that everyone will love. And, of course, we'll make a birthday cake that's as delicious as it is pretty.</p>
                                        <h5>4. Pretty Decorations</h5>
                                        <p>We'll decorate your party space to make it look amazing. Our team will make sure everything looks great, from the tables to the decorations. Your party will look fantastic.</p>
                                        <h5>5. Entertainment and Fun</h5>
                                        <p>We want everyone to have a blast at your party. We can plan fun activities, games, and entertainment to keep everyone smiling and having a great time.</p>
                                        <h5>6. Pictures and Videos</h5>
                                        <p>You'll want to remember your special day. Our photographers and videographers will capture all the fun moments so you can look back and remember how much fun you had.</p>
                                        <h5>7. Comfortable Areas</h5>
                                        <p>Before and during your party, you can use our comfy areas to relax and get ready. They're perfect for taking pictures and for getting ready for your big celebration.</p>
                                        <h5>8. Helping Your Guests</h5>
                                        <p>If your friends and family are coming from far away, we can help with where they'll stay and how they'll get here so they can join in on your special day.</p>
                                        <h5>9. After the Party</h5>
                                        <p>Our help doesn't stop when the party is over. We can help you say thank you to your guests and do other things to make sure you have a wonderful memory of your birthday.</p>
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
