import React from 'react'
import Logo from "../../assets/logo2.jpg"
import { BiPhoneCall } from 'react-icons/bi'
import { FaInstagram, FaFacebook, FaLinkedin, FaMobileAlt } from 'react-icons/fa'

export const NavLinks = [
    {
        id:1,
        name:"SERVICES",
        link:"/services"
    },
    {
        id:2,
        name:"ABOUT",
        link:"/about"
    },
    {
        id:3,
        name:"JOIN",
        link:"/join"
    },
]
const Footer = () => {
  return (
    <>
    <nav className='shadow-md w-full dark:bg-dark bg-gray-200 py-10'>
    <div className='container'>
        <div className='flex items-center justify-between '>
        <div className='flex items-center gap-2'>
            <img src={Logo} alt='' className='w-16 sm:w-24 m-2'/>
          <div className='flex items-center gap-4'>
            <a href="">
                <FaInstagram className='text-3xl hover:text-primary duration-300'/>
            </a>
            <a href="">
                <FaFacebook className='text-3xl hover:text-primary duration-300'/>
            </a>
            <a href="">
                <FaLinkedin className='text-3xl hover:text-primary duration-300'/>
            </a>
          </div>
         </div>
            <div className='flex items-center gap-2 group'> <BiPhoneCall className='text-3xl sm:block hidden text-primary animate-pulse group-hover:scale-105 duration-200'/>
             <span className='sm:block hidden'> +91-7888888888</span>
            </div>
           
            <div className='hidden md:block'>
              <ul className='flex items-center gap-8'>
              {NavLinks.map(({id, name, link})=>(
                <li key={id}>
                    <a href={link} className='inline-block text-lg font-semibold hover:text-primary duration-200'>{name}</a>
                </li>
              ))}
      
              </ul>
            </div>
         
            </div>
      </div>
    </nav>
    </>
  )
}

export default Footer