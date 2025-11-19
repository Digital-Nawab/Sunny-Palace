import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { isMobile } from "react-device-detect";
import { MobileNavbar } from './MobileNavbar';

function Layout({ children }) {
    return (
        <>
           {
            isMobile ?(<MobileNavbar/>):(<Navbar/>)
           }
           {children}
            <Footer />
        </>
    )
}

export default Layout