import React from 'react'

export default function Header(): JSX.Element {
    return (
        <header>
            <nav className="flex p-6 justify-between">
                <div className="flex text-white">
                    <svg width="37" height="24" viewBox="0 0 37 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_209_48)">
                            <path fillRule="evenodd" clipRule="evenodd" d="M19.3796 4.75027C19.945 3.80139 19.5079 3.03217 18.4034 3.03217H14.6387C13.5341 3.03217 12.1803 3.80139 11.6149 4.75027L1.16793 22.2821C0.602513 23.231 1.03958 24.0002 2.14415 24.0002H11.5559C12.6605 24.0002 14.0143 23.231 14.5797 22.2821L18.0444 16.4677C18.6098 15.5188 18.1728 14.7496 17.0682 14.7496H15.4211C14.3166 14.7496 13.8795 13.9804 14.4449 13.0315L19.3796 4.75027Z" fill="url(#paint0_linear_209_48)" />
                            <rect width="12" height="14.8235" rx="1" transform="matrix(1 0 -0.511893 0.859049 24.3271 0.000244141)" fill="url(#paint1_linear_209_48)" />
                            <rect width="9.17647" height="9.17647" rx="1" transform="matrix(1 0 -0.511893 0.859049 21.3027 14.5535)" fill="#F5921E" />
                        </g>
                        <defs>
                            <linearGradient id="paint0_linear_209_48" x1="13.5559" y1="24.0002" x2="3.06805" y2="16.6048" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#00796D" />
                                <stop offset="1" stopColor="#38C682" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_209_48" x1="12" y1="14.8235" x2="-1.78614" y2="12.9172" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#00796D" />
                                <stop offset="1" stopColor="#38C682" />
                            </linearGradient>
                            <clipPath id="clip0_209_48">
                                <rect width="36.7059" height="24" fill="white" transform="translate(0 0.000244141)" />
                            </clipPath>
                        </defs>
                    </svg>
                    <p className="font-['Inter'] font-bold italic text-xl leading-6">Agenone</p>
                </div>
                <div className="flex justify-around p-2 ring-2 ring-white w-8 h-8 rounded-lg flex-col">
                    <div className="bg-white w-full h-1 m-auto rounded-sm"></div>
                    <div className="bg-white w-full h-1 m-auto rounded-sm"></div>
                </div>
            </nav>
        </header>
    )
}
