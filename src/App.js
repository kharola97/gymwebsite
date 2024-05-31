import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/AboutUs/About'
import Contact from './components/Contact/Contact'
import Pricing from './components/pricing/Pricing'
import Banner from './components/Banner/Banner'
import Testimonial from './components/Testimonial/Testimonial'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <div className=' bg-white dark:bg-black dark:text-white text-black' >
      <Navbar/>
      <Hero/>
      <About/>
      <Contact/>
      <Pricing/>
      <Banner/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default App