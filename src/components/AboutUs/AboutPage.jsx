import React from 'react'
import Banner3 from "../../assets/banner3.jpg"


const AboutPage = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center mt-24 dark:text-white">
            <div> 
                <img src={Banner3} alt='' className='sm:scale-125 max-h-[280px] drop-shadow-md mx-auto'/>
            </div>
            <div className='space-y-4'>
                {/* heading section */}
                <div className='flex items-center gap-4'>
                    <div className='text-primary text-7xl'>
                        <h1 className='font-bold'>03</h1>

                    </div>
                    <div>
                        <p className='text-primary'>Global fitness</p>
                        <h1 className='text-2xl sm:text-4xl font-bold'>Contact us</h1>
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
  )
}

export default AboutPage
