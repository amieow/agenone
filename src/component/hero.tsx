"use client";

import dynamic from "next/dynamic";
const Header = dynamic(() => import("./header"));
import ServerComponent from "./serverComponent";
const Hero = () => {
    return (
        <section
            id="hero"
            className="bg-[#0C111F] h-screen min-h-full scroll-smooth"
        >
            <Header />
            <svg
                className="absolute z-0 min-[1440px]:hidden"
                width="100%"
                height="100%"
                viewBox="0 0 375 706"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect
                    opacity="0.05"
                    x="-34.8665"
                    y="243.131"
                    width="110.793"
                    height="111.412"
                    fill="white"
                />
                <rect
                    opacity="0.05"
                    x="299.06"
                    y="354.853"
                    width="110.793"
                    height="111.412"
                    fill="white"
                />
                <rect
                    opacity="0.05"
                    x="299.06"
                    y="577.058"
                    width="110.793"
                    height="111.412"
                    fill="white"
                />
                <rect
                    opacity="0.05"
                    x="76.236"
                    y="689.089"
                    width="110.793"
                    height="111.412"
                    fill="white"
                />
                <path
                    d="M-257.697 0.500732L-257.697 708.586M-146.4 0.500732L-146.4 708.586M-35.1036 0.500732L-35.1036 708.586M76.1931 0.500732L76.1931 708.586M187.49 0.500732L187.49 708.586M298.787 0.500732L298.787 708.586M410.083 0.500732L410.083 708.586M521.38 0.500732L521.38 708.586M632.677 0.500732L632.677 708.586M-258 688.788H632.374M-258 577.388L632.374 577.388M-258 465.988L632.374 465.988M-258 354.588L632.374 354.588M-258 243.188L632.374 243.189M-258 131.789L632.374 131.789M-258 20.3888L632.374 20.3889"
                    stroke="url(#paint0_linear_171_1274)"
                    strokeOpacity="0.3"
                    strokeWidth="0.819729"
                />
                <defs>
                    <linearGradient
                        id="paint0_linear_171_1274"
                        x1="120.801"
                        y1="768.006"
                        x2="26.7195"
                        y2="37.3286"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="white" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>
            <svg
                className="hidden min-[1440px]:mx-auto absolute min-[1440px]:block"
                width="100%"
                height="1120"
                viewBox="0 0 1440 1120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect
                    opacity="0.05"
                    x="1"
                    y="548.001"
                    width="179"
                    height="180"
                    fill="white"
                />
                <rect
                    opacity="0.05"
                    x="360.5"
                    y="368.001"
                    width="179"
                    height="180"
                    fill="white"
                />
                <rect
                    opacity="0.05"
                    x="1259.5"
                    y="368.001"
                    width="179"
                    height="180"
                    fill="white"
                />
                <rect
                    opacity="0.05"
                    x="900"
                    y="548.501"
                    width="179"
                    height="180"
                    fill="white"
                />
                <rect
                    opacity="0.05"
                    x="900"
                    y="907.501"
                    width="179"
                    height="180"
                    fill="white"
                />
                <rect
                    opacity="0.05"
                    x="540"
                    y="1088.5"
                    width="179"
                    height="180"
                    fill="white"
                />
                <path
                    d="M0.489289 -23.9992L0.489239 1120M180.303 -23.9992L180.303 1120M360.117 -23.9992L360.117 1120M539.931 -23.9992L539.931 1120M719.745 -23.9992L719.745 1120M899.558 -23.9992L899.558 1120M1079.37 -23.9992L1079.37 1120M1259.19 -23.9992L1259.19 1120M1439 -23.9992L1439 1120M0 1088.01H1438.51M0 908.034L1438.51 908.034M0 728.054L1438.51 728.054M0 548.073L1438.51 548.074M0 368.093L1438.51 368.093M0 188.113L1438.51 188.113M0 8.13249L1438.51 8.13255"
                    stroke="url(#paint0_linear_171_938)"
                    strokeOpacity="0.3"
                />
                <defs>
                    <linearGradient
                        id="paint0_linear_171_938"
                        x1="612"
                        y1="1216"
                        x2="460"
                        y2="35.5009"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="white" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>

            <ServerComponent>
                <div className="bg-white z-10 bg-opacity-10 p-2 w-[262px] mx-auto rounded-[100px] mt-2 mb-2 transition-all 975:w-fit 975:px-4 975:py-3">
                    <p className="text-white text-center tracking-[1px] text-[10px] font-['Inter'] font-medium leading-[18px] 975:text-sm">
                        NUMBER ONE CREATIVE DIGITAL AGENCY
                    </p>
                </div>
                <div className="flex flex-col h-[302px] mx-auto px-6 max-w-[877px] 975:h-[356px]">
                    <div className="z-10">
                        <p className="font-bold text-center text-4xl 425:text-5xl tracking-[-0.02em] w-fit  mx-auto leading-[44px] bg-gradient-to-l from-teal-600 to-green-500 text-transparent bg-clip-text 975:text-[72px] 975:pb-5">
                            Smart Choices
                        </p>
                        <p className="font-bold  text-4xl 425:text-5xl tracking-[-0.02em] text-center leading-[44px] text-white 975:text-[72px] 975:pb-5">
                            For Your Business Growth
                        </p>
                        <p className="text-center  text-sm text-[#B6B8BC] mt-[14px] 975:mx-auto 975:text-xl">
                            We&apos;re a team of experienced designers,
                            developers, and marketers, passionate about
                            delivering exceptional digital solutions.
                        </p>
                    </div>
                    <div className="flex z-10 bg-gradient-to-l from-teal-600 to-green-500 p-4 w-fit mx-auto mt-auto rounded-[100px] duration-150 transition-all md:hover:shadow-[0_0_30px_10px] cursor-pointer md:hover:shadow-cyan-500/50 md:hover:translate-x-2 ">
                        <p className="text-white mr-2 text-lg ">Contact Us </p>
                        <i className="fa-solid fa-arrow-right fa-md transition-all my-auto text-white"></i>
                    </div>
                </div>
                

            </ServerComponent>
            <div className="absolute bottom-[-56px]">
                <div className="bg-gradient-to-b from-white to-gray-900 w-[97vw] h-14 blur-3xl  opacity-50"></div>
            </div>
        </section>
    );
};

export default dynamic(() => Promise.resolve(Hero), { ssr: false });
