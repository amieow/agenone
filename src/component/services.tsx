import dynamic from "next/dynamic";
import { useState } from "react";


const Service = () : JSX.Element => {
    const [openItemIndex, setOpenItemIndex] = useState(0);

    const toggleItem = (index : number) => {
        setOpenItemIndex(index === openItemIndex ? -1 : index);
    }
    
    type about = {
        title: string,
        description: string
    };

    const About: about[] = [
        {
            title: "UI/UX Design",
            description: "Veniam elit sunt veniam reprehenderit mollit consectetur excepteur ullamco qui labore qui aute."
        },
        {
            title: "Digital Marketing",
            description: "Ullamco aliqua duis pariatur elit officia nisi anim fugiat sint eiusmod. Minim reprehenderit et in reprehenderit. Consectetur dolore deserunt mollit aute sunt velit ut consectetur. Culpa irure non dolore duis anim enim amet tempor."
        },
        {
            title: "Social Media Management",
            description: "Ad aute qui magna amet. Cillum cillum ea sint labore. Qui dolore enim elit laborum dolore fugiat id sint minim nulla ullamco elit minim. Est nisi cupidatat dolor ea exercitation anim irure voluptate ad aliquip aute."
        },
        {
            title: "Development",
            description: "Quis nisi do et ut est. Duis et minim cupidatat mollit reprehenderit ipsum officia. Culpa velit ullamco elit officia occaecat nulla duis in."
        }
    ]
    return (
        <section id="service" className="my-14 h-full min-h-screen mx-6 scroll-smooth md:mx-0">
            
            <div className="mb-9">
                <h3 className="font-bold text-5xl tracking-[-0.02em] text-center leading-[44px] text-black">The Services We Offer <span className="bg-gradient-to-l from-teal-600 to-green-500 text-transparent bg-clip-text">For You</span></h3>
            </div>
            <div className=" flex flex-col gap-4 md:gap-5 lg:gap-6">
                {About.map((item, index) => {
                    const isOpen = index === openItemIndex;
                    return (
                        <div key={index}  className="bg-[#F8F8F8] flex p-6 rounded-xl transition-all h-fit md:px-9 md:py-10 md:mx-14 lg:py-14 lg:px-16 md:cursor-pointer lg:w-[1024px] max-w-5xl lg:mx-auto">
                            <div onClick={() => toggleItem(index)} className="w-12">
                                <p className={`text-xl text-center font-bold  mb-auto transition-all duration-300 ${isOpen ? 'bg-gradient-to-l from-teal-600 to-green-500 text-transparent bg-clip-text' : ''} md:text-2xl lg:text-3xl`}>{index + 1}</p>
                            </div>
                            <div className="flex flex-col w-full">
                                <div onClick={() => toggleItem(index)} className="flex transition-all">
                                    <p className={`text-xl font-bold my-auto transition-all duration-300 ${isOpen ? 'bg-gradient-to-l from-teal-600 to-green-500 text-transparent bg-clip-text' : ''} md:text-xl lg:text-2xl`}>{item.title}</p>
                                    <button aria-label="" className="ml-auto my-auto transition-all" onClick={() => toggleItem(index)}>
                                        <i className={`fa-solid fa-arrow-right transition-all transform ${isOpen ? 'rotate-90 bg-gradient-to-l from-teal-600 to-green-500 text-transparent bg-clip-text' : ''} md:text-2xl lg:text-3xl`}></i>
                                    </button>
                                </div>
                                <div className={` ${isOpen ? '' : ' opacity-0 duration-200 hidden'} animate-[upToDown_1s_ease-in-out] duration-300 transition-all `}>
                                    <p className="max-w-[700px] mr-auto text-lg text-gray-600 cursor-text">{item.description}</p>
                                    <div className="h-[150px] flex bg-slate-400 mt-10 max-w-5xl">
                                        <strong className="m-auto">Image</strong>
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