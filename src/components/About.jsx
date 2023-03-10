import React from 'react'

const About = () => {
    return (
        <div name="about" className=' w-full h-screen bg-gradient-to-b from-[#304352] via-[#304352] to-[#D7D2CC] text-gray-100'>
            <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className=' pb-8'>
                    <p className=' text-4xl font-bold inline border-b-4 border-gray-500'>
                        About
                    </p>
                </div>
                <p className=' text-xl mt-10 indent-5 text-justify'>An ACT Graduate, looking for a job in a good and reputable company to put the knowledge and skills I have learned through experience and training provided by our institution into practice, to develop new abilities that will aid me in my future career, and to be efficient about the position I am applying for.
                </p>
            </div>

        </div>
    )
}

export default About