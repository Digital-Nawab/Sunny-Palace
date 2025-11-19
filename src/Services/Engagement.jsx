import React, { useEffect } from 'react'
import Layout from '../components/layout/Layout'
import { ServiceNav } from './ServiceNav';

export const Engagement = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Layout>
                <section id="wedding">
                    <div className="container">
                        <div className="main-heading">
                            <h1>Engagement</h1>
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
                                            src="assets/img/service/engagement.webp"
                                            alt="Service Image"
                                            style={{ width: "100%" }}
                                        />
                                    </div>
                                    <div className="page-content">
                                        <h2 className="h3 page-title">Sunny Palace: Celebrate Your Engagement in Style </h2>
                                        <p>
                                            Your engagement is a beautiful moment, filled with love and promises for the future. At Sunny Palace, we want to make this time even more special for you. Our cozy venue and friendly team are here to help you celebrate your engagement in style and comfort.
                                        </p>
                                        <h2 className="h3 page-title">The Sunny Palace Engagement Experience: Where Love Shines Bright</h2>
                                        <p>Why choose Sunny Palace for your engagement celebration? Because we believe that every love story deserves to be celebrated in a special way. We have a warm and welcoming team ready to make your engagement day unforgettable.</p>
                                        <h3 className="h3 page-title">Creating Your Perfect Engagement Celebration</h3>

                                        <h5>1. Choosing the Right Place</h5>
                                        <p>
                                            Where you celebrate your engagement matters. Sunny Palace has a lovely venue that's just right for this special occasion. Whether you want an intimate gathering or a small party, we'll help you pick the perfect spot.
                                        </p>
                                        <h5>2. Planning and Assistance</h5>
                                        <p>Planning your engagement celebration should be fun and easy. Our team will work closely with you to plan every detail. We'll take care of everything, so you can relax and enjoy your special day.</p>

                                        <h5>3. Delicious Food</h5>
                                        <p>Good food makes every celebration better. Our chefs will create a menu with tasty dishes that you and your guests will love. From appetizers to a special engagement cake, we'll make sure it's all delicious.</p>

                                        <h5>4. Beautiful Decorations</h5>
                                        <p>We'll decorate your engagement venue to make it look fantastic. Our team will make sure everything looks just the way you want it, so your celebration is as beautiful as your love story.</p>
                                        <h5>5. Entertainment and Fun</h5>
                                        <p>We want you and your guests to have a great time. We can arrange for music, games, or anything else you'd like to make your celebration even more fun and memorable.</p>
                                        <h5>6. Pictures and Memories</h5>
                                        <p>Your engagement day is something you'll want to remember forever. Our photographers will capture all the special moments, so you can look back and cherish them.</p>
                                        <h5>7. Comfortable Spaces</h5>
                                        <p>Before and during your celebration, you can use our comfy spaces to relax and get ready. They're perfect for taking pictures and preparing for your big day.</p>
                                        <h5>8. Helping Your Guests</h5>
                                        <p>If your family and friends are coming from far away, we can help with where they'll stay and how they'll get here, so they can join in the celebration.</p>
                                        <h5>9. Planning for the Future</h5>
                                        <p>Your journey with Sunny Palace doesn't end with your engagement celebration. We can help you start planning your wedding or any other events you might want to celebrate in the future.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-lg-4 sidebar-right">
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
