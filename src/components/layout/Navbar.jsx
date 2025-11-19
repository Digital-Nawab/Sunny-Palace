import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css';
function Navbar() {
    const location = useLocation();
    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    return (
        <>
            <header id="masthead" className="header ttm-header-style-01">
                <div className="ttm-header-wrap">
                    <div
                        id="ttm-stickable-header-w"
                        className="ttm-stickable-header-w clearfix"
                    >

                        <div className="ttm-topbar-wrapper ttm-bgcolor-darkgrey ttm-textcolor-white clearfix">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="ttm-topbar-content">
                                            <ul className="top-contact text-left">
                                                <li>
                                                    <i className="fa fa-map-marker ttm-textcolor-skincolor" />
                                                    Opposite Lulu Mall, Service Lane, Shaheed Path, Lucknow.
                                                </li>
                                                <li>
                                                    <i className="fa fa-envelope-o ttm-textcolor-skincolor" />
                                                    <a href="mailto:info@sunnypalace.in">info@sunnypalace.in</a>
                                                </li>
                                            </ul>
                                            <div className="topbar-right text-right">
                                                <div className="ttm-social-links-wrapper list-inline">
                                                    <ul className="social-icons">
                                                        <li>
                                                            <a
                                                                href="https://www.facebook.com/Aroyaldestinationforgrandoccasion?mibextid=LQQJ4d"
                                                                className=" tooltip-bottom" target='_blank' data-tooltip="Facebook"
                                                            >
                                                                <i className="fab fa-facebook" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                href="https://www.instagram.com/sunny.palace/?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"
                                                                className=" tooltip-bottom" data-tooltip="facebook"
                                                            >
                                                                <i className="fab fa-instagram" />
                                                            </a>
                                                        </li>

                                                    </ul>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div id="site-header-menu" className="site-header-menu">
                        <div className="site-header-menu-inner ttm-stickable-header visible-title">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">

                                        <div id="site-navigation" className="site-navigation">
                                            <div className="site-branding">

                                                <a
                                                    className="home-link"
                                                    href="/"
                                                    title="Barber"
                                                    rel="home"
                                                >
                                                    <img
                                                        id="logo-img"
                                                        className="img-center lazyloaded"
                                                        src="/assets/img/logo.png"
                                                        alt="logo"
                                                    />
                                                    <img
                                                        className="logo-shape"
                                                        src="/assets/img/logo-shape.png"
                                                        alt="logo-shape"
                                                    />
                                                </a>

                                            </div>
                                            <div className="ttm-menu-toggle">
                                                <input type="checkbox" id="menu-toggle-form" />
                                                <label
                                                    For="menu-toggle-form"
                                                    className="ttm-menu-toggle-block"
                                                >
                                                    <span className="toggle-block toggle-blocks-1" />
                                                    <span className="toggle-block toggle-blocks-2" />
                                                    <span className="toggle-block toggle-blocks-3" />
                                                </label>
                                            </div>
                                            <nav id="menu" className="menu">
                                                <ul className="dropdown">
                                                    <li className={isActive('/')}>
                                                        <Link to="/">Home</Link>
                                                    </li>
                                                    <li className={`has-submenu ${location.pathname.includes('/about') ? 'active' : ''}`}>
                                                        <Link to="/">About Us</Link>
                                                        <ul className="sub-menu">
                                                            <li className={isActive('/about')}>
                                                                <Link to="/about">About</Link>
                                                            </li>
                                                            <li className={isActive('/founder-satnam-kaur')}>
                                                                <Link to="/founder-satnam-kaur">Founder Satnam Kaur</Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="logo-after-this has-submenu">
                                                        <Link to="#">services</Link>
                                                        <ul className="sub-menu">
                                                            <li className={isActive('/wedding')}>
                                                                <Link to="/wedding">Wedding </Link>
                                                            </li>
                                                            <li className={isActive('/reception')}>
                                                                <Link to="/reception">Reception </Link>
                                                            </li>
                                                            <li className={isActive('/launch-parties')}>
                                                                <Link to="/launch-parties">Launch Parties</Link>
                                                            </li>
                                                            <li className={isActive('/corporate-meeting')}>
                                                                <Link to="/corporate-meeting">Corporate Meeting</Link>
                                                            </li>
                                                            <li className={isActive('/birthdays-parties')}>
                                                                <Link to="/birthdays-parties">Birthdays Parties</Link>
                                                            </li>
                                                            <li className={isActive('/renewing-your-vows')}>
                                                                <Link to="/renewing-your-vows">Renewing your vows</Link>
                                                            </li>
                                                            <li className={isActive('/engagement')}>
                                                                <Link to="/engagement">Engagement</Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className={isActive('/gallery')}>
                                                        <Link to="/gallery">Gallery</Link>
                                                    </li>
                                                    <li className={isActive('/contact-us')}>
                                                        <Link to="/contact-us">CONTACT US</Link>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar;