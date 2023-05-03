"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";

function Project() {
    const [showContent, setShowContent] = useState(0);
    const jenisProject = [
        {
            title: "UI/UX",
            content: [
                {
                    url: "https://media.discordapp.net/attachments/942221935562088459/1086621165432361021/image.png?width=1242&height=631",
                    alt: "",
                    title: "Title",
                    desc: "We are designed to help your business thrive in the online world.",
                },
                {
                    url: "https://media.discordapp.net/attachments/942221935562088459/1086717547203809301/image.png?width=1254&height=631",
                    alt: "",
                    title: "Title",
                    desc: "We are designed to help your business thrive in the online world.",
                },
            ],
        },
        {
            title: "Digital",
            content: [
                {
                    url: "https://media.discordapp.net/attachments/942221935562088459/1086717547203809301/image.png?width=1254&height=631",
                    alt: "",
                    title: "Title",
                    desc: "We are designed to help your business thrive in the online world.",
                },
            ],
        },
        {
            title: "SMM",
            content: [
                {
                    url: "https://media.discordapp.net/attachments/942221935562088459/1086717547203809301/image.png?width=1254&height=631",
                    alt: "",
                    title: "Title",
                    desc: "We are designed to help your business thrive in the online world.",
                },
                {
                    url: "https://media.discordapp.net/attachments/942221935562088459/1086621165432361021/image.png?width=1242&height=631",
                    alt: "",
                    title: "Title",
                    desc: "We are designed to help your business thrive in the online world.",
                },
                {
                    url: "https://media.discordapp.net/attachments/942221935562088459/1086718591900065872/image.png?width=1241&height=631",
                    alt: "",
                    title: "Title",
                    desc: "We are designed to help your business thrive in the online world.",
                },
            ],
        },
        {
            title: "Dev",
            content: [
                {
                    url: "https://media.discordapp.net/attachments/942221935562088459/1086621165432361021/image.png?width=1242&height=631",
                    alt: "",
                    title: "Title",
                    desc: "We are designed to help your business thrive in the online world.",
                },
                {
                    url: "https://media.discordapp.net/attachments/942221935562088459/1086717547203809301/image.png?width=1254&height=631",
                    alt: "",
                    title: "Title",
                    desc: "We are designed to help your business thrive in the online world.",
                },
                {
                    url: "https://media.discordapp.net/attachments/942221935562088459/1086718591900065872/image.png?width=1241&height=631",
                    alt: "",
                    title: "Title",
                    desc: "We are designed to help your business thrive in the online world.",
                },
                {
                    url: "https://media.discordapp.net/attachments/942221935562088459/1086717547203809301/image.png?width=1254&height=631",
                    alt: "",
                    title: "Title",
                    desc: "We are designed to help your business thrive in the online world.",
                },
            ],
        },
    ];
    return (
        <section id="project" className=" bg-gray-900 h-full min-h-screen pb-8">
            <svg
                className="absolute z-0 min-[1440px]:hidden rotate-180"
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
                className="hidden absolute rotate-180 min-[1440px]:block"
                width="100%"
                height="100%"
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
            <svg
                className="absolute rotate-180 z-0"
                width="100%"
                height="30%"
                viewBox="0 0 222 245"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    opacity="0.2"
                    d="M117.27 450.992C231.742 520.829 381.154 484.646 450.992 370.174C520.829 255.702 484.646 106.29 370.174 36.4521C255.702 -33.3855 106.29 2.79784 36.4522 117.27C-33.3854 231.742 2.79793 381.154 117.27 450.992ZM310.924 133.571C371.758 170.685 390.988 250.089 353.873 310.923C316.759 371.758 237.355 390.988 176.52 353.873C115.686 316.759 96.4563 237.355 133.571 176.52C170.685 115.685 250.089 96.4562 310.924 133.571Z"
                    fill="url(#paint0_linear_171_1385)"
                />
                <defs>
                    <linearGradient
                        id="paint0_linear_171_1385"
                        x1="577.027"
                        y1="459.631"
                        x2="-90.0001"
                        y2="75.4228"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="white" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>
            <div className="mx-6 flex flex-col z-10 ">
                <div className="text-white py-14 mx-auto  z-10 inline-block max-w-max">
                    <p className="font-bold w-fit text-center mx-auto text-4xl md:text-5xl lg:text-7xl">
                        Our Project Have Been{" "}
                        <span className="bg-gradient-to-l from-teal-600 to-green-500 text-transparent bg-clip-text">
                        Done
                        </span>
                    </p>
                    <p className="text-gray-200 max-w-[481px] text-center pt-4 text-sm px-3 md:max-w-[641px] lg:max-w-4xl md:text-lg lg:text-xl ">
                        Take a look at some of our recent projects and see how we've helped other businesses elevate their brand and drive business growth.
                    </p>
                </div>

                <div className="bg-white  flex w-fit mx-auto z-10 rounded-[100px] p-1 flex-wrap max-[350px]:justify-around ">
                    {jenisProject.map((item, index) => {
                        return (
                            <button
                                onClick={() => setShowContent(index)}
                                key={index}
                                className={`rounded-[100px] transition-all z-10 ${
                                    showContent == index &&
                                    "bg-gradient-to-l from-teal-600 to-green-500 text-white"
                                } p-2 px-6 w-fit md:w-[90px] lg:p-3 lg:w-[150px]`}
                            >
                                {item.title}
                            </button>
                        );
                    })}
                </div>
            </div>

            <div className="mx-4 mt-9 z-10 grid grid-cols-1 lg:grid-cols-2 gap-3">
                {jenisProject[showContent].content.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className={`bg-gray-800 z-10 text-white p-2 h-[412px] mx-auto max-w-[598px] rounded-2xl`}
                        >
                            <div className="z-10 peer cursor-pointer">
                                <Image
                                    className="w-full h-[300px] z-10 max-h-[579px] object-fill rounded-2xl mx-auto"
                                    src={item.url}
                                    alt={item.alt}
                                    width={200}
                                    height={200}
                                />
                            </div>

                            <p className="font-bold text-lg">{item.title}</p>
                            <p className="text-gray-200">{item.desc}</p>
                        </div>
                    );
                })}
            </div>
            
        </section>
    );
}

export default dynamic(() => Promise.resolve(Project), { ssr: false });
