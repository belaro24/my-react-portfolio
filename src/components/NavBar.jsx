import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { ImProfile } from 'react-icons/im'

const NavBar = () => {

    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: "home",
        },
        {
            id: 2,
            link: "about",
        },
        {
            id: 3,
            link: "experience",
        },
        {
            id: 4,
            link: "contact",
        },
    ];
    const Social = [
        {
            id: 1,
            child: (
                <> <FaLinkedin size={30} /> </>
            ),
            href: 'https://linkedin.com',
            style: 'rounded-md'
        },
        {
            id: 2,
            child: (
                <> <FaGithub size={30} /> </>
            ),
            href: 'https://github.com/belaro24',
            style: 'rounded-md'
        },
        {
            id: 3,
            child: (
                <> <HiOutlineMail size={30} /> </>
            ),
            href: 'mailto: rojo.belaro24@gmail.com',
            style: 'rounded-md'
        },
        {
            id: 4,
            child: (
                <> <ImProfile size={30} /> </>
            ),
            href: '/resume.pdf',
            style: 'rounded-md',
            download: true,
        },
    ];

    return (
        <div className='flex justify-between items-center w-full h-20 text-white bg-black fixed px-4'>
            <div>
                <h1 className='text-5xl ml-2 font-signature'>iRoj</h1>
            </div>
            <ul className="hidden md:flex">
                {links.map(({ id, link }) => (
                    <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
                        <Link to={link} smooth duration={500}>{link}</Link>
                    </li>
                ))}
            </ul>
            <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (
                <div className='flex justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to bg-gray-800 text-gray-500'>
                <ul className='flex flex-col items-center '>
                    {links.map(({ id, link }) => (
                        <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>
                            <Link
                                onClick={() => setNav(!nav)}
                                to={link}
                                smooth duration={500}>
                                {link}
                            </Link>
                        </li>
                    ))}
                    
                </ul>
                <ul className='flex flex-row absolute'>
                {Social.map(({ id, child, href, style, download }) => (
                    <li key={id} className={' flex flex-row items-center w-full h-16 my-2 px-4 mt-96 pt-20 text-md ' +
                     " " + style}  >
                        <a href={href} className='items-center w-full text-gray-300'
                            download={download}
                            target='_blank'
                            rel="noreferrer"
                        >
                            {child}
                        </a>
                    </li>
                 ))}
                </ul>
                </div>
                
            )}


        </div>
    );
};

export default NavBar;