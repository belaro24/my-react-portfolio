import React from 'react';
import Man from '../assets/Man.jpg';
import {FiArrowRightCircle} from 'react-icons/fi'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className=' flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                    I'm a Software Engineer
                </h2>
                <p className=' text-gray-500 py-4 max-w-md'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda asperiores beatae velit sunt fuga dolores saepe adipisci labore. Facilis fugit laborum ducimus quidem corporis autem iure optio, dolorem placeat consectetur.</p>
                <div>
                    <Link to='experience' smooth duration={500} className=' group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                        Portfolio
                        <span className=' group-hover:rotate-90 duration-300'>
                        <FiArrowRightCircle size={15} className='ml-1 mt-0.5'/>
                        </span>
                    </Link>
                </div>
            </div>
            <div>
                <img src={Man} alt="profile" className=' rounded-2xl mx-auto w-2/3 md:w-2/3' />
            </div>
        </div>
    </div>
  )
}

export default Home;