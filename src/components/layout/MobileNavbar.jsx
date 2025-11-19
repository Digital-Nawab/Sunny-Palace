import React from 'react'
import { Link } from 'react-router-dom';

export const MobileNavbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link class="navbar-brand" to="/"><img
                    id="logo-img"
                    className="img-center lazyloaded"
                    src="/assets/img/logo.png"
                    alt="logo"
                    style={{ width: "40%" }}
                /></Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                About us
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <Link class="dropdown-item" to="/about">About</Link>
                                <Link class="dropdown-item" to="/founder-satnam-kaur">Founder Satnam Kaur</Link>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Services
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li>
                                    <Link to="/wedding" class="dropdown-item">Wedding </Link>
                                </li>
                                <li>
                                    <Link to="/reception" class="dropdown-item">Reception </Link>
                                </li>
                                <li>
                                    <Link to="/launch-parties" class="dropdown-item">Launch Parties</Link>
                                </li>
                                <li>
                                    <Link to="/corporate-meeting" class="dropdown-item">Corporate Meeting</Link>
                                </li>
                                <li>
                                    <Link to="/birthdays-parties" class="dropdown-item">Birthdays Parties</Link>
                                </li>
                                <li>
                                    <Link to="/renewing-your-vows" class="dropdown-item">Renewing your vows</Link>
                                </li>
                                <li>
                                    <Link to="/engagement" class="dropdown-item">Engagement</Link>
                                </li>
                            </div>
                        </li>
                        <li>
                            <Link to="/gallery" class="nav-link">Gallery</Link>
                        </li>

                        <li className="">
                            <Link to="/contact-us" class="nav-link">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
