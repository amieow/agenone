import { useEffect, useState } from "react"

export default function Warning() {
    const [show, setShow] = useState(false);

    useEffect(() => {
    const timer = setTimeout(() => {
        setShow(true);
    }, 4000);

    return () => {
        clearTimeout(timer);
    }
    }, []);

    return (
        <div className={` bg-black bg-opacity-75 ${show ? 'w-screen h-screen fixed z-[70]' : 'hidden'}`}>
            <div className="bg-white flex flex-col rounded-lg w-80 h-60 m-auto mt-80">
                <div className="relative flex">
                    <div className="absolute w-28 h-28 bg-teal-600 opacity-25 rounded-full"></div>
                    <div className="absolute w-28 h-28 bg-blue-600 opacity-25 rounded-full top-24 left-32"></div>
                </div>
                    <div className="flex justify-between px-4 rounded-t-lg bg-blue-200 p-1 z-10">
                        <p className="uppercase text-red-600 font-bold font-['inter]">warning</p>
                        <button onClick={() => setShow(false)} className=" font-medium transition-all hover:scale-110 hover:text-blue-400 hover:rotate-90">X</button>
                    </div>
                    <p className="px-4 z-10">We would like to inform you that <strong className="text-red-500 selection:bg-yellow-300">this website is not for real products</strong>. It is just a project to <strong className=" text-green-500 selection:bg-lime-200">gain experience.</strong></p>
                    <div className="h-full flex p-1 justify-between">
                        <a href="https://github.com/amieow/agenone" className="mt-auto p-2 bg-blue-400 rounded-lg flex justify-between items-center gap-2 transition-all hover:shadow-lg hover:scale-110  hover:bg-blue-500"><i className="fa-brands fa-github"></i>Source Code</a>
                        <button onClick={() => setShow(false)} className="mt-auto bg-green-300 p-2 px-5 rounded-lg hover:bg-green-400 transition-all">Confirm</button>
                    </div>
            </div>
            <div className="flex">
                <p className="text-gray-200 mx-auto transition-all">Project by <a href="https://github.com/amieow" className=" text-blue-200 border-b-[1px] cursor-pointer hover:text-blue-400 hover:border-blue-400">Amieow</a></p>
            </div>
        </div>
    )
}
