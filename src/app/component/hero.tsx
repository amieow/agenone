

import ClientComponent from "./ClientComponent"
import Header from "./header"

const Hero = () => {
    return (

        <section className="bg-[#0C111F] h-screen min-h-full">
            <ClientComponent>
                <Header />
            </ClientComponent>
            
            <div className="bg-white bg-opacity-10 p-2 w-[262px] mx-auto rounded-[100px] mt-2 mb-2">
                <p className="text-white text-center tracking-[1px] text-[10px] font-['Inter'] font-medium leading-[18px]">NUMBER ONE CREATIVE DIGITAL AGENCY </p>
            </div>
            <div className=" px-6">
                <p className="font-bold text-5xl tracking-[-0.02em] text-center leading-[44px] text-white"><span className="bg-gradient-to-l from-teal-600 to-green-500 text-transparent bg-clip-text">Smart Choices</span> For Your Business Growth </p>
                <p className="text-center text-[#B6B8BC] mt-[14px]">We&apos;re a team of experienced designers, developers, and marketers, passionate about delivering exceptional digital solutions.</p>
                <div className="flex bg-gradient-to-l from-teal-600 to-green-500 p-4 w-fit mx-auto mt-10 rounded-[100px]">
                    <p className="text-white mr-2">Contact Us </p>
                    <svg className="m-auto" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 9.00021H12.67L7.79 13.8802C7.4 14.2702 7.4 14.9102 7.79 15.3002C8.18 15.6902 8.81 15.6902 9.2 15.3002L15.79 8.71021C16.18 8.32021 16.18 7.69022 15.79 7.30022L9.21 0.700215C8.82 0.310215 8.19 0.310215 7.8 0.700215C7.41 1.09021 7.41 1.72022 7.8 2.11022L12.67 7.00022H1.5C0.95 7.00022 0.5 7.45021 0.5 8.00022C0.5 8.55021 0.95 9.00021 1.5 9.00021Z" fill="white" />
                    </svg>
                </div>
            </div>

        </section>

    )
}

export default Hero