import React, { useEffect } from 'react'
import Layout from '../components/layout/Layout'
export const AboutPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Layout>
                <section id="virtualEvent">
                    <div className="container">
                        <div className="main-heading">
                            <h2>About Us</h2>
                        </div>
                    </div>
                    {/*/.container*/}
                </section>
                <section id="about">
                    <div className="container">
                        <div className="row ">
                            <div className="col-xs-7 col-lg-7">
                                <div
                                    className="welcome-data animate-plus animated bounceInLeft"
                                    data-animations="bounceInLeft"
                                    data-animation-when-visible="true"
                                    data-animation-reset-offscreen="false"
                                    data-animation-delay="0.6s"
                                    data-animation-group="_0"
                                    style={{ animationDelay: "0.6s" }}
                                >
                                    <h1>Welcome to Sunny Palace for your Special Occasion or Events</h1>

                                    <h2 className="page-title">Sunny Palace: The Royal Wedding Destination</h2>

                                    <p style={{ lineHeight: "35px" }}>
                                      Established in 2010, Sunny Palace is the best wedding destination in Lucknow, blending luxury with heritage. Spread across 50,000 square feet, this majestic property features 10 AC rooms and a 3,000 square feet banquet hall, making it the best banquet hall in Lucknow for any special event.
                                    </p>
                                    <h2 className="page-title" style={{fontSize:'20px'}}>Best Wedding Venue in Lucknow</h2>
                                    <p>
                                        Sunny Palace boasts stunning Roman architecture, offering the best wedding venue in Lucknow. With its palatial views and serene garden spaces, it’s the perfect location for your dream wedding.
                                    </p>
                                    <h2 className="page-title" style={{fontSize:'20px'}}>Perfect for Every Occasion</h2>
                                    <p>
                                       Whether you're planning a grand wedding, an engagement ceremony, or a birthday party celebration, Sunny Palace is among the best wedding lawns in Gomti Nagar and on Shaheed Path. It’s also one of the best venues for launch parties in Lucknow.
                                    </p>
                                    <h3 className="page-title">Convenient Location for All Celebrations</h3>
                                    <p>
                                        Located just 15 minutes from the airport and near the famous Lulu Mall and Palasio Mall, Sunny Palace is your top choice for the best marriage lawn in Lucknow.
                                    </p>
                                </div>
                            </div>
                            <div className="col-xs-5 col-lg-5">
                                <div className="invitation-box">
                                    <div className="inner text-center">
                                        <img src="assets/img/about-palace.webp" alt="" style={{ width: "100%" }} />
                                    </div>
                                </div>
                            </div>
                            {/*/.col*/}
                        </div>
                        {/*/.row*/}
                    </div>
                    {/*/.container*/}
                </section>
            </Layout>
        </>
    )
}
