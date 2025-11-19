import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout'
import './ContactUs.css';

export const ContactUs = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    const [website_name, setWebsite] = useState('');
    const [send_mail, setMail] = useState('');
    const [bcc, setBcc] = useState('');
    const [username, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact_number, setContact] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Define the data you want to send
        const data = {
            website_name: "SunnyPlace",
            send_email: "satyalaravel2023@gmail.com",
            bcc: "satyalaravel2023@gmail.com",
            username,
            email,
            contact_number,
            subject,
            message,
        };

        console.log(data);

        // Make an HTTP POST request to the Laravel API endpoint
        fetch('https://admin.digitalnawab.com/api/gobal_email', {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                // You can handle success and error cases as needed
            })
            .catch((error) => {
                console.error(error);
            });
    };
    return (
        <>
            <Layout>
                <section id="virtualEvent">
                    <div className="container">
                        <div className="main-heading">
                            <h2>Contact Us</h2>
                        </div>
                    </div>
                </section>
                <section className="contact-section">
                    <div className="container">
                        <div className='row'>
                            <div className='col-md-12 text-center mb-4'>
                                <h2>Contact Us</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5">
                                <div className="content">
                                    {/* Info-1 */}
                                    <div className="info">
                                        <i className="fa fa-phone" />
                                        <h4 className="d-inline-block">
                                            PHONE :
                                            <br />
                                            <span>+91-8874273997</span>
                                        </h4>
                                    </div>
                                    {/* Info-2 */}
                                    <div className="info">
                                        <i className="fa fa-envelope" />
                                        <h4 className="d-inline-block">
                                            EMAIL :
                                            <br />
                                            <span>info@sunnypalace.in</span>
                                        </h4>
                                    </div>
                                    {/* Info-3 */}
                                    <div className="info">
                                        <i className="fa fa-map-marker" />
                                        <h4 className="d-inline-block">
                                            ADDRESS :
                                            <span> Opposite Lulu Mall, Service Lane, Shaheed Path, Lucknow.</span>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <form className="contact-form" onSubmit={handleSubmit}>
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">Name</label>
                                                <input type="text" name="usename" value={username} onChange={(e) => setName(e.target.value)} required className="form-control" placeholder="Name" />
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputPassword1">Email</label>
                                                <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Enter Email" />
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">Contact Number</label>
                                                <input type="text" name="contact_number" value={contact_number} onChange={(e) => setContact(e.target.value)} className="form-control" placeholder="Contact Number" />
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputPassword1">Subject</label>
                                                <input type="text" name="subject" value={subject} onChange={(e) => setSubject(e.target.value)} className="form-control" placeholder="Subject" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="exampleFormControlTextarea1">Your message (optional)</label>
                                                <textarea className="form-control" name="message" onChange={(e) => setMessage(e.target.value)} rows={2} placeholder="Message" value={message} />
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary">
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className='contact-fluid'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14246.876046595904!2d80.990241!3d26.7852254!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be58dc2f369df%3A0x9b79dcda36db3fe!2sSunny%20Palace%20Lucknow!5e0!3m2!1sen!2sin!4v1682795224931!5m2!1sen!2sin"
                                    width={"100%"}
                                    height={450}
                                    style={{ border: 0, pointerEvents: "none" }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}
