import React from 'react'
import BannerImage from "../../assets/herobg.jpg"

const bgStyle = {
    backgroundImage : `url(${BannerImage})`,
    backgroundPosition : "center",
    backgroundRepeat : "no-repeat",
    backgroundSize : "cover",
    height : "100%",
    width : "100%"
}

const Hero = () => {
  return (
    <div style={bgStyle} className=' bg-white dark:text-white dark:bg-black duration-200'>
        <div className='bg-white/65 dark:bg-black/65 duration-200'>
            <div className='container min-h-[420px] flex items-center'> 
              <div className='w-full md:w-[550px] mx-auto text-center space-y-5'>
                 <p className='text-primary text-2xl'>Start your fitness jounery with us </p>
                 <h1 className='text-5xl md:text-7xl font-bold'> Your fitness journey begins </h1>
                 <p> "The body achieves what the mind believes." </p>
                 <button className='primary-btn'>Get started</button>
              </div>
           
           </div>
        </div>
    </div>
  )
}

export default Hero