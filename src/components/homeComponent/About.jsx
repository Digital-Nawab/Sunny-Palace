import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import { Service } from './Service';
import { Testimonial } from './Testimonial';
import { VideoSection } from './VideoSection';
import { Gallery } from './Gallery';

export const About = () => {

  const [website_name, setWebsite] = useState('');
  const [send_mail, setMail] = useState('');
  const [bcc, setBcc] = useState('');
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact_number, setContact] = useState('');
  const [service, setService] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
      e.preventDefault();

      // Define the data you want to send
      const data = {
      website_name:"SunnyPlace",
      send_email:"satyalaravel2023@gmail.com",
      bcc :"satyalaravel2023@gmail.com",
      username,
      email,
      contact_number,
      service,
      subject: "Home page",
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

      <section id="about">
        <div className="container">
          <div className="row align-items-center">
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
                <h1>Welcome to Sunny Palace</h1>
                {/* <h3>Dreams specializes in Event Management</h3> */}
                <p style={{ lineHeight: "35px" }}>
                  Sunny Palace is the Royal wedding destination built up in the year 2010.
                </p>
                <p style={{ lineHeight: "35px" }}> This palace is a magnificent piece
                  of  Lucknow's heritage. This beautiful Property is Spread over 50  thousand square feet area with 10 AC rooms and a Banquet of  3000 square feet perfect for your destination wedding.</p>
                <p style={{ lineHeight: "35px" }}> Sunny palace inspires with exotic views  of the Roman Architecture specially designed to elevate all your Special events. From spectacular Palatial views and garden Venues, to gourmet menus and serene spaces, expect only the best for your big day.</p>
                <Link to="/about" class="btnAbout">read more</Link>
              </div>
              {/*/.welcome data*/}
            </div>
            {/*/.col*/}
            <div className="col-xs-5 col-lg-5">


              <div className="invitation-box">
                {/* <div className="left-vec"></div>
                                <div className="right-vec"></div> */}
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

     <Service/>

      <section className="wpo-testimonials-section section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-4 col-12"
              style={{ paddingTop: 30, paddingBottom: 30 }}
            >
              <div className="wpo-testimonials-img">
                <img
                  src="/assets/img/satmanji.webp"
                  alt=""
                  style={{ height: "100%", objectFit: "cover" }}
                />
                <div className="wpo-testimonials-img-shape">
                  <img src="/assets/img/shape.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-7 offset-lg-1 col-12">
              <div className="wpo-testimonials-wrap">
                <h2>New Ventures</h2>
                <div className="wpo-testimonials-active owl-carousel owl-loaded owl-drag">
                  <div className="owl-stage-outer">
                    <div className="wpo-testimonials-item">
                      <h4 className='mb-4'>
                        SK Events & Designs, SK Fashions, SK Jewels
                      </h4>
                      <p>Satnam Kaur says It's not like
                        you can either do this or that. I believe that if you like something and feel that there's an opportunity that presents itself and a void you can fill, you can do a multitude of things. My family is extremely encouraging about the new venture. When you know what you're passionate about, you can make it your business. Because then business isn't business anymore, it's personal. And when business is personal, that's when it really flourishes.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="collaboration space" id="collaboration">
        <div className="container">
          <div className="title-area text-center">
            <span className="sub-title">
              <img src="assets/img/title_left.svg" alt="shape" />
              What We Do
              <img src="assets/img/title_right.svg" alt="shape" />
            </span>
            <h2 className="sec-title">Collaboration</h2>
          </div>
          <div className="row gy-4">
            <div className="col-md-6 col-xl-4 col-lg-4 p-2">
              <div className="collaboration-box">
                <div className="colla-box_inner">
                  <div className="colla-box_icon">
                    {/* <i className="fa-solid fa-rings-wedding" /> */}
                    <img src="assets/img/catering.jpg" alt="" style={{ width: "100%" }} />

                    {/* <i class="fa-solid fa-rings-wedding"></i> */}
                  </div>
                  <h3 className="colla-box_title">
                    Catering
                  </h3>
                  <p className="colla-box_text">
                    At Sunny Palace, we understand the importance of delectable cuisine on your special day. Our expert culinary team can curate a menu that tantalizes the taste buds of your guests. We offer a wide range of cuisines, ensuring that every guest's palate is satisfied. Our commitment to quality extends to every dish we serve.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4 col-lg-4 p-2">
              <div className="collaboration-box">
                <div className="colla-box_inner">
                  <div className="colla-box_icon">
                    <img src="assets/img/photography.jpg" alt="" style={{ width: "100%" }} />
                  </div>
                  <h3 className="colla-box_title">
                    Photography
                  </h3>
                  <p className="colla-box_text">
                    Capture the precious moments of your wedding day with our skilled photographers and videographers. We have a keen eye for detail and a knack for storytelling, ensuring that your wedding memories are preserved beautifully.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4 col-lg-4 p-2">
              <div className="collaboration-box">
                <div className="colla-box_inner">
                  <div className="colla-box_icon">
                    <img src="assets/img/dj.jpg" alt="" style={{ width: "100%" }} />
                  </div>
                  <h3 className="colla-box_title">
                    DJ & Entertainment
                  </h3>
                  <p className="colla-box_text">
                    From live bands and DJs to cultural performers, we can arrange a variety of entertainment options to keep your guests entertained throughout the event. Our sound and lighting systems are top-notch, ensuring a mesmerizing experience for everyone.
                  </p>

                </div>
              </div>
            </div>

            <div className="col-md-6 col-xl-4 col-lg-4 p-2">
              <div className="collaboration-box">
                <div className="colla-box_inner" >
                  <div className="colla-box_icon">
                    {/* <i className="fa-solid fa-rings-wedding" /> */}
                    <img src="assets/img/decoration.jpg" alt="" style={{ width: "100%" }} />

                    {/* <i class="fa-solid fa-rings-wedding"></i> */}
                  </div>
                  <h3 className="colla-box_title">
                    Venue Decoration
                  </h3>
                  <p className="colla-box_text text-justify">
                    Our skilled decorators work tirelessly to transform our serene lawn into your dream wedding setting. From floral arrangements to themed decor, we have the expertise to bring your vision to life. our decorators will craft an enchanting atmosphere that reflects your style.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4 col-lg-4 p-2">
              <div className="collaboration-box">
                <div className="colla-box_inner">
                  <div className="colla-box_icon">
                    <img src="assets/img/bridal.jpg" alt="" style={{ width: "100%" }} />
                  </div>
                  <h3 className="colla-box_title">
                    Bridal Services
                  </h3>
                  <p className="colla-box_text">
                    Sunny Palace takes care of the bride's every need. Our bridal suite is a haven of tranquility where you can prepare for your big day in style and comfort. We also offer professional makeup artists, hairstylists, and mehndi artists to ensure you look and feel your best.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4 col-lg-4 p-2">
              <div className="collaboration-box">
                <div className="colla-box_inner">
                  <div className="colla-box_icon">
                    <img src="assets/img/event.jpg" alt="" style={{ width: "100%" }} />
                  </div>
                  <h3 className="colla-box_title">
                    Event Designer Satnam Kaur
                  </h3>
                  <p className="colla-box_text">
                    Satnam Kaur, the founder of SK Events and Designs, excels in blending hospitality, event planning, and design. Her personalized touch and meticulous attention to detail transform clients' visions into memorable experiences, whether it's an intimate gathering or a grand celebration. Exceptional design and craftsmanship define her work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <VideoSection/>

      <Gallery/>

      <Testimonial/>

      <div className="bg-title overflow-hidden" id="contact-sec">
        <div className="container">
          <div className="contact-area">
            <div className="row flex-row-reverse">
              <div className="col-xl-7 ps-xxl-5">
                <div className="contact-img">
                  <img src="assets/img/touch.jpg" alt="contact" style={{ width: "100%", padding: "50px" }} />
                </div>
              </div>
              <div className="col-xl-5 col-lg-5 space">
                <h2 className="sec-title mb-4">Get In Touch</h2>
                <form onSubmit={handleSubmit}
                  className="rsvp-form"
                >
                  <div className="row">
                    <div className="form-group col-sm-6 col-md-6">
                      <label>Your Name</label>
                      <input
                        type="text"
                        value={username} onChange={(e) => setName(e.target.value)}
                        className="form-control style2"
                        name="name"
                        id="name"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="form-group col-sm-6 col-md-6">
                      <label>Email</label>
                      <input
                        type="email"
                        value={email} onChange={(e) => setEmail(e.target.value)}
                        className="form-control style2"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                      />
                    </div>

                    <div className="form-group col-sm-6 col-md-6">
                      <label>Contact Number</label>
                      <input
                        type="text"
                        value={contact_number} onChange={(e) => setContact(e.target.value)}
                        className="form-control style2"
                        name="contact_number"
                        placeholder="Contact Number"
                      />
                    </div>
                    <div className="form-group col-sm-6 col-md-6">
                      <label>Select Service</label>
                      <select className="form-control" name={service} onChange={(e) => setService(e.target.value)}>
                        <option value="Wedding" >Wedding </option>
                        <option value="Reception">Reception</option>
                        <option value="Launch Parties">Launch Parties</option>
                        <option value="Corporate Meeting">Corporate Meeting</option>
                        <option value="Birthdays Parties">Birthdays Parties</option>
                        <option value="Renewing your vows">Renewing your vows</option>
                      </select>
                    </div>
                    <div className="form-group col-sm-12 col-md-12">
                      <label>Your message (optional)</label>
                      <textarea className="form-control" name={message} rows={2} placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
                    </div>
                    <div className="form-btn col-12">
                      <button className="btnAbout style2">Submit</button>
                    </div>
                  </div>
                  <p className="form-messages mb-0 mt-3" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
