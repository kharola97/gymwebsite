import React from 'react'
import playStore from "../../assets/play_store.png"
import appStore from "../../assets/app_store.png"
import dumbell from "../../assets/dumbell.jpg"
const dubmbellStyle = {
    backgroundImage : `url(${dumbell})`,
    backgroundPosition : "center",
    backgroundRepeat : "no-repeat",
    backgroundSize : "cover",
    height : "100%",
    width : "100%"
}

const Banner = () => {
  return (
    <div>
        <div className="container text-white mt-10">
            <div style={dubmbellStyle} className='sm:min-h-[400px] sm:flex sm:justify-end sm:items-center rounded-xl'>
              <div>
                <div className=' space-y-6 max-w-xl mx-auto '>
                    <h1 className='text-2xl text-center sm:text-4xl font-semibold'>Download the app</h1>
                    <p className='text-center sm:px-20'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis distinctio dolor, ipsam totam eius amet, odit, sed fuga ullam quis atque ducimus impedit at exercitationem.</p>
                    <div className='flex justify-center items-center gap-4'>
                        <a href="">
                            <img src={appStore} className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]' alt="" />
                        </a>
                        <a href="">
                            <img src={playStore} className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]' alt="" />
                        </a>
                    </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Banner