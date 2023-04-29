'use client';

import { useState } from "react";
import ServerComponent from "./serverComponent";

export default function Header(): JSX.Element {
    const [open, setOpen] = useState(false);
    type menuType = {
        title : string
        link : string
    }
    const menu : menuType[] = [
    {
        title: "Home",
        link : "#hero"
    },
    {
        title : "Service",
        link : "#service"
    },
    {
        title : "Project",
        link : ""
    },
    {
        title : "About Us",
        link : ""
    }

    ]
    return (
        <header>
            <nav className="flex p-5 md:px-10 justify-between transition-all">
                <ServerComponent>
                    <div className="flex text-white md:my-auto">
                        <svg width="52" height="34" viewBox="0 0 52 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_102_918)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M27.8805 6.01339C28.4459 5.06451 28.0089 4.29529 26.9043 4.29529H19.9043C18.7997 4.29529 17.4459 5.06451 16.8805 6.01339L1.22751 32.282C0.662087 33.2308 1.09915 34.0001 2.20372 34.0001H17.2037C18.3083 34.0001 19.6621 33.2308 20.2275 32.282L25.989 22.6131C26.5545 21.6642 26.1174 20.895 25.0128 20.895H21.0128C19.9083 20.895 19.4712 20.1257 20.0366 19.1769L27.8805 6.01339Z" fill="url(#paint0_linear_102_918)" />
                                <rect width="17" height="21" rx="1" transform="matrix(1 0 -0.511893 0.859049 34.4639 0)" fill="url(#paint1_linear_102_918)" />
                                <rect width="13" height="13" rx="1" transform="matrix(1 0 -0.511893 0.859049 30.1783 20.6172)" fill="#F5921E" />
                            </g>
                            <defs>
                                <linearGradient id="paint0_linear_102_918" x1="19.2037" y1="34.0001" x2="4.34592" y2="23.5232" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#00796D" />
                                    <stop offset="1" stopColor="#38C682" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_102_918" x1="17" y1="21" x2="-2.53037" y2="18.2994" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#00796D" />
                                    <stop offset="1" stopColor="#38C682" />
                                </linearGradient>
                                <clipPath id="clip0_102_918">
                                    <rect width="52" height="34" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <p className="font-['Inter'] font-bold italic text-xl leading-6">Agenone</p>
                    </div>
                </ServerComponent>
                <ul className="flex justify-around mx-auto w-[502px] max-md:hidden">
                    {menu.map((item,index) => {
                        return (
                            <li key={index} className="h-fit my-auto">
                                <a  className="text-gray-300 relative h-fit my-auto hover:text-blue-400" href={item.link}>
                                    {item.title}
                                    <span className="absolute left-0 bottom-0 h-[2px] bg-blue-400 w-0 transition-all duration-300 origin-left "></span>
                                </a>
                            </li>
                        )
                    })}
                    
                </ul>
                <ServerComponent>
                    <a className=" text-white bg-gradient-to-l from-teal-600 to-green-500 text-transparent py-4 px-6 ring-white rounded-[100px] cursor-pointer max-975:hidden">
                        Contact Us
                    </a>
                </ServerComponent>
                <div onClick={() => setOpen(!open)} className="flex justify-around p-2 ring-2 ring-white w-8 h-8 rounded-lg flex-col hover:cursor-pointer hover:shadow-lg md:hidden">
                    <div className="bg-white w-full h-1 m-auto rounded-sm"></div>
                    <div className="bg-white w-full h-1 m-auto rounded-sm"></div>
                </div>
            </nav>
        </header>
    )
}
