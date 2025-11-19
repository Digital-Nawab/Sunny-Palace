import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import DefaultMeta from './components/layout/DefaultMeta';
import { Home } from './components/homeComponent/Home'
import { AboutPage } from './pages/AboutPage';
import { Founder } from './pages/Founder';
import { Wedding } from './Services/Wedding';
import { Reception } from './Services/Reception';
import { LaunchParties } from './Services/LaunchParties';
import { CorporateEvents } from './Services/CorporateEvents';
import { BirthdayParties } from './Services/BirthdayParties';
import { Renewing } from './Services/Renewing';
import { Engagement } from './Services/Engagement';
import { ContactUs } from './pages/ContactUs';
import { Gallery } from './pages/Gallery';
function App() {


  return (
    <>
      <HelmetProvider>
        <DefaultMeta />
        <Router>
          <Routes>
            <Route path='/'
              element={
                <>
                  <DefaultMeta
                    title="Best Marriage Lawn in Lucknow | Top Venues for Weddings & Events"
                    description="Discover the finest marriage lawns in Lucknow for your special day. Explore top venues offering beautiful settings, exceptional service, and perfect facilities for memorable weddings and events."
                    canonical="https://www.sunnypalace.in"
                  />
                  <Home />
                </>
              } />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/about' 
              element={
                <>
                  <DefaultMeta
                    title="About Us - Sunny Palace | Best Wedding and Event Venue in Lucknow"
                    description="Discover Sunny Palace, the best marriage lawn and banquet hall in Lucknow. As the top wedding venue and destination in Lucknow, we offer exquisite settings for weddings, engagement ceremonies, birthday celebrations, and launch parties. Located in Gomti Nagar and on Shaheed Path, Sunny Palace is your premier choice for memorable events in Lucknow."
                    canonical="https://www.sunnypalace.in/about"
                  />
                  <AboutPage />
                </>
              } />
            <Route path='/founder-satnam-kaur' 
              element={
                <>
                  <DefaultMeta
                    title="Best Marriage Lawn in Lucknow | Top Venues for Weddings & Events"
                    description="Discover the finest marriage lawns in Lucknow for your special day. Explore top venues offering beautiful settings, exceptional service, and perfect facilities for memorable weddings and events."
                    canonical="https://www.sunnypalace.in/founder-satnam-kaur"
                  />
                  <Founder />
                </>
              } />
            <Route path='/wedding'
              element={
                <>
                  <DefaultMeta
                    title="Best Wedding Lawn in Lucknow | Best Wedding Venue in Lucknow"
                    description=" Discover the best wedding lawn in Lucknow for your big day. Explore top locations offering stunning outdoor settings, exceptional services, and unforgettable experiences. Make your wedding day memorable with the perfect lawn venue."
                  />
                  <Wedding />
                </>
              } />
            <Route path='/reception'
              element={
                <>
                  <DefaultMeta
                    title="Wedding Reception at Sunny Palace | Best Wedding Venues in Lucknow"
                    description="Sunny Palace is one of the most beautiful wedding venues in Lucknow. Enjoy a memorable experience for you and your guests. Call Sunny Palace today to book your reception."
                  />
                  <Reception />
                </>

              } />
            <Route path='/corporate-meeting'
              element={
                <>
                  <DefaultMeta
                    title="Sunny Palace is the Best Place for Corporate Meetings"
                    description="Sunny Palace is the best place to hold corporate meetings in Lucknow. Enjoy modern facilities, good service, and a nice place for business meetings. Find out why Sunny Palace is the perfect place for your next business meeting."
                  />
                  <CorporateEvents />
                </>
              } />
            <Route path='/launch-parties'
              element={
                <>
                  <DefaultMeta
                    title="Here are the best places to have a launch party in Lucknow."
                    description="Find the perfect place to host your next launch event and make a memorable impression. Explore top suggestions for the best launch party venues and locations in Lucknow."
                  />
                  <LaunchParties />
                </>
              } />
            <Route path='/birthdays-parties'
              element={
                <>
                  <DefaultMeta
                    title="Discover the Best Places for Birthday Parties in Lucknow"
                    description="Sunny Palace is one of the best places for birthday parties in Lucknow. Make great memories at our great place for birthday parties in Lucknow."
                  />
                  <BirthdayParties />
                </>
              } />
            <Route path='/renewing-your-vows' 
              element={
                <>
                  <DefaultMeta
                    title="Renew Your Vows at the Best Wedding Place in Lucknow"
                    description="Celebrate the renewal of your vows at Sunny Palace, the best wedding place in Lucknow. Experience elegant settings, exceptional service, and a memorable atmosphere for your special vow renewal ceremony. Discover why Sunny Palace is the perfect choice for your romantic celebration."
                  />
                  <Renewing />
                </>
              } />
            <Route path='/engagement'
              element={
                <>
                  <DefaultMeta
                    title="Celebrate Your Engagement at the Best Place for Engagement in Lucknow"
                    description="Celebrate your engagement at Sunny Palace, the best place in Lucknow. Enjoy elegant settings, outstanding service, and a memorable celebration for your special day. Discover why Sunny Palace is the top choice for engagement ceremonies in Lucknow."
                  />
                  <Engagement />
                </>
              } />
            <Route path='/contact-us' element={<ContactUs />} />
          </Routes>
        </Router>
      </HelmetProvider>
    </>
  )
}

export default App
