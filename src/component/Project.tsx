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
                    url: "/project-1.png",
                    alt: "",
                    title: "Title",
                    desc: "We are designed to help your business thrive in the online world.",
                },
                {
                    url: "/project-2.png",
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
                    url: "/project-2.png",
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
                    url: "/project-2.png",
                    alt: "",
                    title: "Title",
                    desc: "We are designed to help your business thrive in the online world.",
                },
                {
                    url: "/project-1.png",
                    alt: "",
                    title: "Title",
                    desc: "We are designed to help your business thrive in the online world.",
                },
                {
                    url: "/project-2.png",
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
                    url: "/project-1.png",
                    alt: "",
                    title: "Title",
                    desc: "We are designed to help your business thrive in the online world.",
                },
                {
                    url: "/project-2.png",
                    alt: "",
                    title: "Title",
                    desc: "We are designed to help your business thrive in the online world.",
                },
                {
                    url: "/project-1.png",
                    alt: "",
                    title: "Title",
                    desc: "We are designed to help your business thrive in the online world.",
                },
                {
                    url: "/project-2.png",
                    alt: "",
                    title: "Title",
                    desc: "We are designed to help your business thrive in the online world.",
                },
            ],
        },
    ];
    return (
        <section id="project" className=" bg-gray-900 h-full min-h-screen">
            <div className="absolute w-full h-full -z-10">
                <svg className=" min-[1440px]:hidden" width="100%" height="80%" viewBox="0 0 375 623" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M-315.658 622.846L-315.658 2.86847e-06M-189.826 622.846L-189.826 2.86847e-06M-63.9949 622.846L-63.995 2.86847e-06M61.8364 622.846L61.8363 2.86847e-06M187.668 622.846L187.668 2.86847e-06M313.499 622.846L313.499 2.86847e-06M439.33 622.846L439.33 2.86847e-06M565.162 622.846L565.162 2.86847e-06M690.993 622.846L690.993 2.86847e-06M-316 17.4148H690.651M-316 115.404L690.651 115.404M-316 213.394L690.651 213.394M-316 311.384L690.651 311.383M-316 409.373L690.651 409.373M-316 507.363L690.651 507.363M-316 605.352L690.651 605.352" stroke="url(#paint0_linear_171_1386)" strokeOpacity="0.3"/>
<defs>
<linearGradient id="paint0_linear_171_1386" x1="112.269" y1="-52.2668" x2="47.4669" y2="594.615" gradientUnits="userSpaceOnUse">
<stop stopColor="white"/>
<stop offset="1" stopColor="white" stopOpacity="0"/>
</linearGradient>
</defs>
</svg>

                <svg
                    className="mx-auto hidden absolute top-0 min-[1440px]:block"
                    width="100%"
                    height="100%"
                    viewBox="0 0 1440 1144"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0.489629 1144L0.489579 0.000812242M180.428 1144L180.428 0.000812242M360.367 1144L360.367 0.000812242M540.306 1144L540.306 0.000812242M720.245 1144L720.245 0.000812242M900.184 1144L900.184 0.000812242M1080.12 1144L1080.12 0.000812242M1260.06 1144L1260.06 0.000812242M1440 1144L1440 0.000812242M0 31.9871H1439.51M0 211.967L1439.51 211.967M0 391.948L1439.51 391.948M0 571.928L1439.51 571.928M0 751.908L1439.51 751.908M0 931.889L1439.51 931.889M0 1111.87L1439.51 1111.87"
                        stroke="url(#paint0_linear_256_452)"
                        strokeOpacity="0.3"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_256_452"
                            x1="612.425"
                            y1="-95.9993"
                            x2="460.527"
                            y2="1084.53"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="white" />
                            <stop offset="1" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
                <svg
                    className="absolute bottom-0 right-0 z-0"
                    width="250"
                    height="245"
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
            </div>
            <div className="mx-6">
                <div className="text-white py-14">
                    <p className="font-bold text-center text-4xl  ">
                        Our Project Have Been{" "}
                        <span className="bg-gradient-to-l from-teal-600 to-green-500 text-transparent bg-clip-text">
                            Done
                        </span>
                    </p>
                    <p className=" text-gray-200 text-center pt-4 text-sm px-3">
                        Take a look at some of our recent projects and see how
                        we've helped other businesses elevate their brand and
                        drive business growth.
                    </p>
                </div>
                <div className="bg-white flex w-fit mx-auto  rounded-[100px] p-1 ">
                    {jenisProject.map((item, index) => {
                        return (
                            <button
                                onClick={() => setShowContent(index)}
                                key={index}
                                className={`rounded-[100px] transition-all ${showContent == index && "bg-gradient-to-l from-teal-600 to-green-500 text-white"} p-2 px-6 w-fit md:w-[90px] lg:p-3 lg:w-[150px]`}
                            >
                                {item.title}
                            </button>
                        );
                    })}
                </div>
            </div>
            <div className="z-10 mt-9 lg:px-20 lg:flex lg:flex-wrap ">
                {jenisProject[showContent].content.map((item, index) => {
                    const lastIndex =
                        jenisProject[showContent].content.length - 1;
                    return (
                        <div key={index}
                            className={`bg-gray-800  text-white p-2 h-[412px] mx-auto max-w-[598px] rounded-2xl ${
                                index != lastIndex && "mb-3"
                            }`}
                        >
                            <div className="z-10 peer cursor-pointer">
                                <Image
                                    className="w-full static h-[300px] z-10 max-h-[579px] object-fill rounded-2xl mx-auto"
                                    src={item.url}
                                    alt={item.alt}
                                    width={100}
                                    height={120}
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
