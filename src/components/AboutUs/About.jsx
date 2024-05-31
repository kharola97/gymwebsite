import React from 'react'
import Banner from "../../assets/banner01.jpg"
import Banner2 from "../../assets/banner2.jpg"
import Banner3 from "../../assets/banner3.jpg"
import AboutPage from './AboutPage'
const About = () => {
  return (
    <div className='py-14 bg-slate-100 dark:bg-black duration-200'>
      <div className="container">

        <div className="grid grid-cols-1 b sm:grid-cols-2 gap-4 place-items-center my-4 dark:text-white">
            <div> 
                <img src={Banner} alt='' className='sm:scale-125 max-h-[200px]  drop-shadow-md mx-auto'/>
            </div>
            <div className='space-y-4'>
                {/* heading section */}
                <div className='flex items-center gap-4'>
                    <div className='text-primary text-7xl'>
                        <h1 className='font-bold'>01</h1>

                    </div>
                    <div>
                        <p className='text-primary'>Global fitness</p>
                        <h1 className='text-2xl sm:text-4xl font-bold'>About us</h1>
                    </div>
                    </div> 
                  {/*bottom section */}
                  <div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos saepe atque esse praesentium delectus vel illum possimus enim!
                        <br/>
                        <br/> A necessitatibus id accusantium sint laborum soluta quidem aperiam similique repellat eum?</p>
                  </div>
                  <button className='outline-btn'>Get Started</button>
                </div>
        </div>
        <div className=" py-16 grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center dark:text-white">
            
            <div className='space-y-4'>
                {/* heading section */}
                <div className='flex items-center gap-4'>
                    <div className='text-primary text-7xl'>
                        <h1 className='font-bold'>02</h1>

                    </div>
                    <div>
                        <p className='text-primary'>Global fitness</p>
                        <h1 className='text-2xl sm:text-4xl font-bold'>Our Services</h1>
                    </div>
                    </div> 
                  {/*bottom section */}
                  <div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos saepe atque esse praesentium delectus vel illum possimus enim!
                        <br/>
                        <br/> A necessitatibus id accusantium sint laborum soluta quidem aperiam similique repellat eum?</p>
                  </div>
                  <button className='outline-btn'>Get Started</button>
                </div>
                <div> 
                <img src={Banner2} alt='' className='sm:scale-125 max-h-[250px] max-w-[250px] drop-shadow-md mx-auto'/>
            </div>
        </div>
     <AboutPage/>
      </div>

    </div>
  )
}

export default About