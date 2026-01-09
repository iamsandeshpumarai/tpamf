import React from 'react'
import imageLogo from '../assets/images/logo.png'
import headerPicture from '../assets/images/header-right-img.jpg'
import './Header.css'
const Header = () => {
    return (
        <>
        <header className='w-full h-[16vh] flex flex-row justify-evenly items-center px-4'>
            
            {/* 1. Logo */}
            <div className='md:flex-shrink-0 md:block hidden'>
                <img src={imageLogo} className='w-28 h-auto' alt="Logo" />
            </div>

            {/* 2. Headline - Added whitespace-nowrap to prevent text jumping to next line */}
            <div className='headline text-center mx-4 gap-2 flex flex-col '>
                <h4 className='text-[#0B0C26] font-semibold sm:text-2xl text-lg'>टंकप्रसाद आचार्य स्मृति प्रतिष्ठान</h4>
                <h2 className='text-[#273A83] font-semibold md:text-xl lg:text-3xl text-lg '>Tanka Prasad Acharya Memorial Foundation</h2>
            </div>

            {/* 3. Picture */}
            <div className='md:flex-shrink-0 md:block hidden'>
                <img src={headerPicture} className='w-20 h-auto' alt="Header Right" />
            </div>
        </header>
<div className='bg-[#F1F1F1] hidden  w-[70%] h-[1px] lg:block mx-auto'></div>
        </>
    )
}

export default Header