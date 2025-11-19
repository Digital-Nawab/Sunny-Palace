import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <footer
        className="footer-wrapper footer-layout1 background-image"
        style={{ backgroundImage: 'url("assets/img/footer_bg_1.webp")' }}
      >
        <div className="widget-area">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-6 col-xxl-3 col-xl-3">
                <div className="widget footer-widget">
                  <div className="as-widget-about">
                    <div className="about-logo">
                      <Link to="/">
                        <img src="assets/img/logo.png" style={{ width: "200px" }} alt="Souler" />
                      </Link>
                    </div>
                    <p className="about-text pt-2" style={{ lineHeight: "35px" }}>
                      We serve with passion
                    </p>
                    <div className="as-social">
                      <Link to="https://www.instagram.com/sunny.palace/?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr" target='_blank'>
                        <i className="fab fa-instagram" aria-hidden="true" />

                      </Link>
                      <Link to="https://www.facebook.com/Aroyaldestinationforgrandoccasion?mibextid=LQQJ4d" target='_blank'>
                        <i className="fab fa-facebook" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xxl-3 col-xl-3">
                <div className="widget widget_nav_menu footer-widget">
                  <h3 className="widget_title">Useful Link</h3>
                  <div className="menu-all-pages-container">
                    <ul className="menu">
                      <li>
                        <Link to="/about">About Us</Link>
                      </li>
                      <li>
                        <Link to="/founder-satnam-kaur">Founder Satnam Kaur</Link>
                      </li>
                      <li>
                        <Link to="/gallery">Our Gallery</Link>
                      </li>


                      <li>
                        <Link to="/contact-us">Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xxl-3 col-xl-3">
                <div className="widget widget_nav_menu footer-widget">
                  <h3 className="widget_title">Services</h3>
                  <div className="menu-all-pages-container">
                    <ul className="menu">
                      <li>
                        <Link to="/wedding">Wedding</Link>
                      </li>
                      <li>
                        <Link to="/reception">Reception</Link>
                      </li>
                      <li>
                        <Link to="/launch-parties">Launch Parties</Link>
                      </li>
                      <li>
                        <Link to="/corporate-meeting">Corporate Meeting</Link>
                      </li>
                      <li>
                        <Link to="/birthdays-parties">Birthdays Parties</Link>
                      </li>
                      <li>
                        <Link to="/renewing-your-vows">Renewing your vows</Link>
                      </li>
                      <li>
                        <Link to="/engagement">Engagement</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xxl-3 col-xl-3">
                <div className="widget footer-widget">
                  <h3 className="widget_title">Contact Now</h3>
                  <div className="as-widget-contact">
                    <div className="info-box">
                      <div className="info-box_icon">
                        <i className="fa fa-map-marker ttm-textcolor-skincolor" />
                      </div>
                      <p className="info-box_text pt-2">
                        Opposite Lulu Mall, Service Lane, Shaheed Path, Lucknow.
                      </p>
                    </div>
                    <div className="info-box">
                      <div className="info-box_icon">
                        <i className="fa fa-phone" />
                      </div>
                      <p className="info-box_text pt-2">
                        <Link to="tel:+918874273997" className="info-box_link">
                          +91-8874273997
                        </Link>

                      </p>
                    </div>
                    <div className="info-box">
                      <div className="info-box_icon">
                        <i className="fa fa-envelope" aria-hidden="true" />

                      </div>
                      <p className="info-box_text pt-2">
                        <Link to="mailto:info@sunnypalace.in" className="info-box_link">
                          info@sunnypalace.in
                        </Link>

                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div
          className="copyright-wrap background-image"
          style={{ backgroundImage: 'url("assets/img/copyright_bg.png")' }}
        >
          <div className="container">
            <p className="copyright-text text-center">
              Copyright © 2023.<i className="fa fa-copyright" aria-hidden="true" />  All right reserved.

              Made with ❤ by <Link to="https://www.digitalnawab.com/">Digital Nawab</Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer