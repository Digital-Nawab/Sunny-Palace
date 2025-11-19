import React, { useEffect } from 'react'
import Layout from '../layout/Layout'
import { HomeSlider } from './HomeSlider'
import { About } from './About';

export const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Layout>
        <HomeSlider />
        <About />
      </Layout>
    </>
  )
}
