'use client';

import Header from "./header"
import ServerComponent from "./serverComponent";
const Hero = () => {
    return (
        <section id="hero" className="bg-[#0C111F] h-screen min-h-full scroll-smooth">
            <Header />
            <ServerComponent>
                <div className="bg-white bg-opacity-10 p-2 w-[262px] mx-auto rounded-[100px] mt-2 mb-2 transition-all 975:w-fit 975:px-4 975:py-3">
                    <p className="text-white text-center tracking-[1px] text-[10px] font-['Inter'] font-medium leading-[18px] 975:text-sm">NUMBER ONE CREATIVE DIGITAL AGENCY </p>
                </div>
                <div className=" mx-auto px-6 max-w-[877px] 975:h-[356px] ">
                    <p className="font-bold text-5xl tracking-[-0.02em] w-fit  mx-auto leading-[44px] bg-gradient-to-l from-teal-600 to-green-500 text-transparent bg-clip-text 975:text-[72px] 975:pb-5">Smart Choices</p>
                    <p className="font-bold text-5xl tracking-[-0.02em] text-center leading-[44px] text-white 975:text-[72px] 975:pb-5"> For Your Business Growth </p>
                    <p className="text-center text-[#B6B8BC] mt-[14px] 975:w-[693px] 975:mx-auto 975:text-xl">We&apos;re a team of experienced designers, developers, and marketers, passionate about delivering exceptional digital solutions.</p>
                    <div className="flex bg-gradient-to-l from-teal-600 to-green-500 p-4 w-fit m-auto rounded-[100px] duration-150 transition-all md:hover:shadow-[0_0_30px_10px] cursor-pointer md:hover:shadow-cyan-500/50 md:hover:translate-x-2 ">
                        <p className="text-white mr-2 text-lg">Contact Us </p>
                        <i className="fa-solid fa-arrow-right fa-md transition-all my-auto text-white"></i>
                    </div>
                </div>
            </ServerComponent>

        </section>
    )
}

export default Hero