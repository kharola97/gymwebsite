import React from 'react'

const cardData = [
    {
        name:"Gold Card",
        price:"₹499",
        link:"#",
        description:["Monthly access to fitness area.","Training sessions on demand.","Personal trainer on demand.","Live classes on demand"],
        duration:"4 Month",
        aosdelay:"0"
    },
    {
        name:"Flexible Card",
        price:"₹899",
        link:"#",
        description:["Monthly access to fitness area.","Training sessions on demand.","Personal trainer on demand.","Live classes on demand"],
        duration:"8 Month",
        aosdelay:"500"
    },
    {
        name:"platinum Card",
        price:"₹1299",
        link:"#",
        description:["Monthly access to fitness area.","Training sessions on demand.","Personal trainer on demand.","Live classes on demand"],
        duration:"12 Month",
        aosdelay:"800"
    }
]

const Pricing = () => {
  return (
    <div>
        <div className="container">
            <h1 className='text-3xl sm:text-5xl text-center text-primary font-bold'>Our pricing for staying fit</h1>

            {/*card section*/}
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4 ">
          {cardData.map((data, index)=>(
             <div key={index} className='space-y-3 text-center bg-gray-200 dark:bg-dark text-black dark:text-white p-4 sm:py- rounded-lg group shadow-xl hover:bg-primary/20 dark:hover:bg-primary/4 duration-200 '> 
                <h1 className='text-3xl font-bold'>{data.name}</h1>
                <h1 className='text-4xl font-semibold text-primary'>{data.price}</h1>
                {data.description.map((description)=>(
                    <p>{description}</p>
                ))}
                <p className='text-2xl font-semibold py-3'>Duratioin:{data.duration}</p>
                <button className='primary-btn'>Learn more</button>
             </div>
          ))}
             </div>
        </div>
    </div>
  )
}

export default Pricing