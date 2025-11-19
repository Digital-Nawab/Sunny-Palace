import React, { useEffect } from 'react'
import './Founder.css';
import Layout from '../components/layout/Layout';

export const Founder = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Layout>
                <section id="virtualEvent">
                    <div className="container">
                        <div className="main-heading">
                            <h1>Founder Satnam Kaur</h1>
                        </div>
                    </div>
                    {/*/.container*/}
                </section>

                <section id="about">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xs-5 col-lg-5">
                                <div className="invitation-box">
                                    {/* <div className="left-vec"></div>
                        <div className="right-vec"></div> */}
                                    <div className="inner text-center">
                                        <img src="assets/img/satnam.webp" alt="" style={{ width: "100%" }} />
                                    </div>
                                </div>
                            </div>
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
                                    <h2 className="page-title">About Founder</h2>
                                    {/* <h3>Dreams specializes in Event Management</h3> */}
                                    <p style={{ lineHeight: "35px" }}>
                                        Satnam Kaur is a well-known entrepreneur in Lucknow, with a stellar reputation in hospitality management. Having completed her MBA from BBD Lucknow, Satnam brings 16 years of experience to the field. She comes from a prestigious background and is married to a well-established engineer and MBA. Satnam’s journey as an entrepreneur is filled with excitement, stress, and the thrill of multitasking. Starting her own business presented numerous challenges and responsibilities, but it was equally rewarding for her to overcome obstacles and watch her venture soar to new heights.
                                    </p>
                                    <p style={{ lineHeight: "35px" }}>
                                        Satnam Kaur expertly blends her vast knowledge of hospitality management, events, and design with her dynamic personality, ensuring every client’s dream is transformed into reality. Whether it’s organizing the best marriage lawn in Lucknow or arranging the best banquet hall in Lucknow, she selects elegant styles and aesthetic designs that create unforgettable spaces for her clients on their big day. Her expertise extends to finding the best wedding venue in Lucknow, curating the best wedding destination in Lucknow, and planning the most memorable events at the best wedding palace in Lucknow.

                                    </p>
                                </div>
                                {/*/.welcome data*/}
                            </div>
                            {/*/.col*/}

                            {/*/.col*/}
                        </div>
                        {/*/.row*/}
                    </div>
                    {/*/.container*/}

                </section>

                {/*portfolio-section_1*/}
                <section className="ttm-row portfolio-section_1 clearfix">
                    <div className="container">
                        {/*slick_slider*/}
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                {/*featured-imagebox-portfolio*/}
                                <div className="featured-imagebox featured-imagebox-portfolio box-shadow style6">
                                    <div className="ttm-box-view-content-inner">
                                        {/* featured-thumbnail */}
                                        <div className="featured-thumbnail">
                                            <img
                                                className="img-fluid"
                                                src="assets/img/sat1.jpg"
                                                alt="image" style={{ width: "100%" }}
                                            />
                                        </div>
                                        {/* featured-thumbnail end*/}
                                        <div className="ttm-media-link">
                                            <a href="event-details.html" className="ttm_link" tabIndex={0}>
                                                <i className="ti ti-plus" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="featured-content">
                                        <div className="featured-title">
                                            <h4>
                                                Sales Go Up & Down Service Stays  Forever Says Satnam kaur
                                            </h4>
                                            <p> Satnam Kaur who has Carved a niche for herself in the field of Hospitality management and Event designing has designied and managed number of events for her clients by giving personal touch to them. To Know more about her checkout the videos and Photos on Sunny Palace Instagram and facebook page.</p>
                                        </div>
                                    </div>
                                </div>
                                {/*featured-imagebox-portfolio end*/}
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                {/*featured-imagebox-portfolio*/}
                                <div className="featured-imagebox featured-imagebox-portfolio box-shadow style6">
                                    <div className="ttm-box-view-content-inner">
                                        {/*featured-thumbnail*/}
                                        <div className="featured-thumbnail">
                                            <img
                                                className="img-fluid"
                                                src="assets/img/sat5.jpg"
                                                alt="image" style={{ width: "100%" }}
                                            />
                                        </div>{" "}
                                        {/*featured-thumbnail end*/}
                                        <div className="ttm-media-link">
                                            <a href="event-details.html" className="ttm_link" tabIndex={0}>
                                                <i className="ti ti-plus" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="featured-content">
                                        <div className="featured-title">
                                            <h4> A women who deals with class not mass</h4>
                                            <p>Satnam Kaur Strikes the perfect balance between bringing in herself , and factoring in your brief. whilst transforming  a space at Sunny palace into Something that you  can truly Call your Oasis. she Carves out her innate sense of a quiet, elegant Style and charming yet Sophisticated & aesthetic, to blend it seamlessly into the space you and yours enjoy.</p>
                                        </div>
                                    </div>
                                </div>
                                {/*featured-imagebox-portfolio end*/}
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                {/*featured-imagebox-portfolio*/}
                                <div className="featured-imagebox featured-imagebox-portfolio box-shadow style6">
                                    <div className="ttm-box-view-content-inner">
                                        {/*featured-thumbnail*/}
                                        <div className="featured-thumbnail">
                                            <img
                                                className="img-fluid"
                                                src="assets/img/sat2.jpg" style={{ width: "100%" }}
                                                alt="image"
                                            />
                                        </div>
                                        {/*featured-thumbnail end*/}
                                        <div className="ttm-media-link">
                                            <a href="event-details.html" className="ttm_link" tabIndex={0}>
                                                <i className="ti ti-plus" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="featured-content">
                                        <div className="featured-title">
                                            <h4>Satnam Kaur Founder - SK Events & Designs </h4>
                                            <p>The hard work of 3.5 years  of Sunny Palace by Satnam Kaur has now nourishing and flourishing and has also lead to its  new venture SK events and designs.</p>
                                        </div>
                                    </div>
                                </div>
                                {/*featured-imagebox-portfolio end*/}
                            </div>
                        </div>
                    </div>
                </section>
                {/*portfolio-section_1 end*/}
            </Layout>
        </>
    )
}
