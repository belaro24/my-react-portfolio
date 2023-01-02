import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import mysql from "../assets/MySql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import php from "../assets/PHP.png";

const Experience = () => {
    const techs = [
        {
            id: 1,
            src: html,
            title: "HTML",
            style: "shadow-orange-500",
            acro: "HyperText Markup Language",
            means: "is the standard markup language for documents designed to be displayed in a web browser.",
        },
        {
            id: 2,
            src: css,
            title: "CSS",
            style: "shadow-blue-500",
            acro: "Cascading Style Sheets",
            means: "is a style sheet language used for describing the presentation of a document written in a markup language.",
        },
        {
            id: 3,
            src: javascript,
            title: "JavaScript",
            style: "shadow-yellow-500",
            acro: "JavaScript",
            means: "is a source code is processed by the client's web browser rather than on the web server.",
        },
        {
            id: 4,
            src: reactImage,
            title: "React",
            style: "shadow-blue-600",
            acro: "ReactJS",
            means: "is a JavaScript library for building user interfaces.",
        },
        {
            id: 5,
            src: tailwind,
            title: "Tailwind",
            style: "shadow-sky-400",
            acro: "TailwindCSS",
            means: "is basically a Utility first CSS framework for building rapid custom UI.",
        },
        {
            id: 6,
            src: nextjs,
            title: "Next JS",
            style: "shadow-white",
            acro: "Next.JS",
            means: " is a react based framework. It has powers to Develop beautiful Web application for different platform like Windows, Linux and mac.",
        },
        {
            id: 7,
            src: mysql,
            title: "MySql",
            style: "shadow-blue-400",
            acro: "My Structured Query Language",
            means: "is an open source relational database management system.",
        },
        {
            id: 8,
            src: github,
            title: "GitHub",
            style: "shadow-gray-400",
            acro: "GitHub",
            means: "is a website and cloud-based service that helps developers store and manage their code.",
        },
        {
            id: 8,
            src: php,
            title: "PHP",
            style: "shadow-gray-400",
            acro: "Hypertext Preprocessor",
            means: "It is a general-purpose programming language used to design a website or web application.",
        },
    ];

    return (
        <div
            name="experience"
            className="bg-gradient-to-b from-black to-gray-800 w-full h-full"
        >
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white perspective">
                <div>
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
                        Experience
                    </p>
                    <p className="py-6">These are the programming language I've worked with</p>
                </div>

                <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 ">
                    {techs.map(({ id, src, title, style, acro, means }) => (
                        <div
                            key={id}
                            className={`shadow-md py-12 rounded-lg preserve-3d hover:my-rotate-y-180 duration-1000  ${style}`}
                        >
                            <div className="  backface-hidden w-full h-full">
                            <img src={src} alt="" className="w-20 mx-auto" />
                            <p className="mt-4">{title}</p>
                            </div>
                            <div className=" absolute backface-hidden w-full h-full my-rotate-y-180 top-0 ">
                                <div className=" text-center flex flex-col items-center  h-full  ">
                                    <h1 className="mt-10 font-medium">{acro} </h1>
                                    <p className=" mt-7 font-extralight">{means}</p>
                                </div>
                            </div>
                            
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;