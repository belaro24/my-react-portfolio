import React from 'react';
import Man from '../assets/Man.jpg';
import {FiArrowRightCircle} from 'react-icons/fi'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-[#D7D2CC] via-[#304352] to-[#304352]'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className=' flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white mt-20'>
                    I'm a Software Engineer
                </h2>
                <p className=' text-gray-200 py-4 max-w-md indent-5 text-justify'> I love programming and math, so problem 
solving and critical thinking are one of my skills. And I also love to work on web application using different technologies that I have an experience.</p>
                <div>
                    <Link to='experience' smooth duration={500} className=' group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                        Experience
                        <span className=' group-hover:rotate-90 duration-300'>
                        <FiArrowRightCircle size={15} className='ml-1 mt-0.5'/>
                        </span>
                    </Link>
                </div>
            </div>
            <div>
                <img src={Man} alt="profile" className=' rounded-2xl mx-auto w-2/3 md:w-2/3 ' />
            </div>
        </div>
    </div>
  )
}

export default Home;