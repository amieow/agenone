import { Testimonial } from '@/app/asset/data'
import Image from 'next/image'
import React from 'react'

export default function Testimoni() {
    return (
        <section id='Testimonial' className="max-h-[800px] overflow-y-hidden flex justify-around ">
            <div className="overflow-y-scroll flex flex-col gap-5 w-fit no-scrollbar">
                <div className="relative">
                    <div className='sticky bg-blue-300 w-full h-4 bottom-0 blur-xl'></div>
                </div>
                {[...Testimonial, ...Testimonial.slice().reverse()].slice().reverse().map((item,index) => {
                    return (
                        <div className="w-[327px] bg-gray-100 p-6 mx-auto group hover:bg-gradient-to-br hover:from-teal-600 hover:to-green-500 hover:transition-all duration-300 rounded-xl lg:w-[408px] min-[1440px]:w-[578px] min-[1440px]:p-6" key={index}>
                            <p className="text-gray-500 group-hover:text-white">{item.text}</p>
                            <div className="flex mt-4">
                                <Image className="object-fill rounded-[50%]" alt={`profile ${item.profile.name}`} src={item.profile.imageUrl} width={56} height={56}/>
                                <div className="ml-3 md:ml-4 lg:ml-5 min-[1440px]:ml-6">
                                    <p className="font-bold group-hover:text-white">{item.profile.name}</p>
                                    <p className="text-gray-500 group-hover:text-white">{item.profile.status}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
                <div className="relative">
                    <div className='sticky bg-blue-300 w-full h-4 bottom-0 blur-xl'></div>
                </div>
            </div>
            <div className="hidden md:flex overflow-y-scroll flex-col gap-5 w-fit no-scrollbar ">
                <div className="relative">
                    <div className='sticky bg-blue-300 w-full h-4 bottom-0 blur-xl'></div>
                </div>
                {[...Testimonial, ...Testimonial.slice().reverse()].slice().reverse().map((item,index) => {
                    return (
                        <div className="w-[327px] bg-gray-100 p-6 mx-auto group hover:bg-gradient-to-br hover:from-teal-600 hover:to-green-500 hover:transition-all duration-300 rounded-xl lg:w-[408px] min-[1440px]:w-[578px] min-[1440px]:p-6" key={index}>
                            <p className="text-gray-500 group-hover:text-white">{item.text}</p>
                            <div className="flex mt-4">
                                <Image className="object-fill rounded-[50%]" alt={`profile ${item.profile.name}`} src={item.profile.imageUrl} width={56} height={56}/>
                                <div className="ml-3 md:ml-4 lg:ml-5 min-[1440px]:ml-6">
                                    <p className="font-bold group-hover:text-white">{item.profile.name}</p>
                                    <p className="text-gray-500 group-hover:text-white">{item.profile.status}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
                <div className="relative">
                    <div className='sticky bg-blue-300 w-full h-4 bottom-0 blur-xl'></div>
                </div>
            </div>
            
        </section>
    )
}
