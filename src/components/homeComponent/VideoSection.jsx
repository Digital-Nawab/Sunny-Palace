import React from 'react'
import { Accordion } from 'react-bootstrap';
import './VideoSection.css'
export const VideoSection = () => {
    return (
        <>
            <section className="counter-section">
                <div className="container">
                    <div className="row">
                        <div className='col-md-7 col-sm-7'>
                            <video controls width="100%" height="350">
                                <source src="assets/img/video.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div className='col-md-5 col-sm-5'>
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Amenities</Accordion.Header>
                                    <Accordion.Body>
                                        <h6> 10 Ac rooms with glorious garden view</h6>
                                        <h6> Banquet for 250 guests</h6>
                                        <h6> Ample parking space</h6>
                                        <h6> Special kitchen</h6>
                                        <h6> In-house catering</h6>
                                        <h6> Located opposite to famous lulu mall</h6>
                                        <h6> Close to the domestic airport</h6>
                                        <h6> Concierge and multilingual staff</h6>
                                        <h6> Gazebo for dining & shoots</h6>
                                        <h6> Water bodies</h6>
                                        <h6> Bridal & theme services on request</h6>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Our policies</Accordion.Header>
                                    <Accordion.Body>
                                        <h6> Check-in time 1 pm</h6>
                                        <h6> Check-out time 9am</h6>
                                        <h6> Early check-in and late check-out on request</h6>
                                        <h6> Early check-in & late check-out are subject to availability. </h6>
                                        <h6> We accept online payment</h6>
                                        <h6> Outside services not allowed</h6>
                                        <h6> Pets not allowed</h6>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
