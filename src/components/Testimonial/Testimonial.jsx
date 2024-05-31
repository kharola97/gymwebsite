import React from 'react'
import Slider from "react-slick";


const TestimonialData = [
    {
      id: 1,
      name: "Ankit",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: "https://picsum.photos/101/101",
    },
    {
      id: 2,
      name: "shantanu",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: "https://picsum.photos/102/102",
    },
    {
      id: 3,
      name: "Shivahul",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: "https://picsum.photos/104/104",
    },
    {
      id: 5,
      name: "lalit",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: "https://picsum.photos/103/103",
    },
  ];

const Testimonial = () => {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
          {
            breakpoint: 10000,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
  return (
    <div className='py-10 my-10 '>
         <div className="container">
            {/* header section */}
            <div>
                <h1 className='text-3xl text-center font-bold dark:text-primary'>
                    Testimonials
                </h1>
            </div>
             {/* slider section */}
         </div>
         <div>
            <Slider {...settings}>
        {TestimonialData.map((data)=>(
            <div className='text-center my-6' key={data.id}> 
            <div className='flex flex-col gap-4 shadow-md py-8 px-6  mx-4 rounded-xl dark:bg-dark bg-primary/10 relative'>
            <div className='mb-4'>
                <img src={data.img} className='rounded-full w-20 h-20 mx-auto' alt="" />
            </div>
            <div className='flex flex-col items-center gap-4'> 
                <div className='space-y-3'>
                <p className='text-2xl text-gray-600 dark:text-primary'>{data.name}</p>
                 <p className='text-xs font-bold text-black/80 dark:text-primary' >{data.text}</p>
                </div>
            </div>
            <p className='text-9xl font-serif text-primary/20 text-gray-600 absolute top-0 right-0'></p>
            </div>
            </div>
        ))}
            </Slider>
         </div>
    </div>
  )
}

export default Testimonial