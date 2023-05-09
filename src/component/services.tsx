import { About } from "@/app/asset/data";
import dynamic from "next/dynamic";
import { useState } from "react";

const Service = () : JSX.Element => {
    const [openItemIndex, setOpenItemIndex] = useState(0);

    const toggleItem = (index : number) => {
        setOpenItemIndex(index === openItemIndex ? -1 : index);
        let addIndex = setInterval(() => {
            let doc = document.getElementById(`i-${index}`)?.classList.toggle('z-10');
            console.log(doc)
        },1000)
        clearInterval(addIndex)
        
    }

    return (
        <section id="service" className="my-14 h-full mx-6 max-h-[900px] md:max-h-full md:mx-0 z-0 focus-visible:bg-black">
            
            <div className="mb-9">
                <h3 className="font-bold text-5xl z-[70] tracking-[-0.02em] text-center leading-[44px] text-black">The Services We Offer <span className="bg-gradient-to-l from-teal-600 to-green-500 text-transparent bg-clip-text">For You</span></h3>
            </div>
            <div className=" flex flex-col gap-4 md:gap-5 lg:gap-6">
                {About.map((item, index) => {
                    const isOpen = index === openItemIndex;
                    return (
                        <div key={index}  className="bg-[#F8F8F8] flex p-6 rounded-xl transition-all h-fit md:px-9 md:py-10 md:mx-14 lg:py-14 lg:px-16 md:cursor-pointer lg:w-[1024px] max-w-5xl lg:mx-auto">
                            <div onClick={() => toggleItem(index)} className="w-12">
                                <p className={`text-xl text-center font-bold  mb-auto transition-all duration-300 ${isOpen ? 'bg-gradient-to-l from-teal-600 to-green-500 text-transparent bg-clip-text' : ''} md:text-2xl lg:text-3xl`}>{index + 1}</p>
                            </div>
                            <div className="flex flex-col w-full relative h-fit">
                                <div onClick={() => toggleItem(index)} className="flex transition-all z-20">
                                    <p className={`text-xl font-bold my-auto transition-all duration-300 ${isOpen ? 'bg-gradient-to-l from-teal-600 to-green-500 text-transparent bg-clip-text' : ''} md:text-xl lg:text-2xl`}>{item.title}</p>
                                    <button aria-label="" className="ml-auto my-auto transition-all" onClick={() => toggleItem(index)}>
                                        <i className={`fa-solid fa-arrow-right transition-all transform ${isOpen ? 'rotate-90 bg-gradient-to-l from-teal-600 to-green-500 text-transparent bg-clip-text' : ''} md:text-2xl lg:text-3xl`}></i>
                                    </button>
                                </div>
                                <div className={`relative transition-all duration-700 flex  h-1 w-full cursor-default ${isOpen ? ' h-64 md:h-56 min-h-full' : ' delay-200'}`}>
                                    <div id={`i-${index}`} className={`${isOpen ? ' opacity-100 delay-75 translate-y-0 duration-500 z-0' : ' delay-200 md:delay-500 opacity-0 -translate-y-14 '} w-full h-full transition-all flex flex-col absolute`}>
                                        <p>{item.description}</p>
                                        <div className=" bg-slate-400 w-full h-full max-[350px]:min-h-[60px] text-center rounded-lg flex">
                                            <p className="m-auto">Image {index + 1}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default dynamic (() => Promise.resolve(Service),{ssr : false})