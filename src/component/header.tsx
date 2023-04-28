



export default function Header(): JSX.Element {
    return (
        <header>
            <nav className="flex p-6 justify-between">
                <div className="flex text-white">
                    <svg width="52" height="34" viewBox="0 0 52 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_102_918)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M27.8805 6.01339C28.4459 5.06451 28.0089 4.29529 26.9043 4.29529H19.9043C18.7997 4.29529 17.4459 5.06451 16.8805 6.01339L1.22751 32.282C0.662087 33.2308 1.09915 34.0001 2.20372 34.0001H17.2037C18.3083 34.0001 19.6621 33.2308 20.2275 32.282L25.989 22.6131C26.5545 21.6642 26.1174 20.895 25.0128 20.895H21.0128C19.9083 20.895 19.4712 20.1257 20.0366 19.1769L27.8805 6.01339Z" fill="url(#paint0_linear_102_918)" />
                            <rect width="17" height="21" rx="1" transform="matrix(1 0 -0.511893 0.859049 34.4639 0)" fill="url(#paint1_linear_102_918)" />
                            <rect width="13" height="13" rx="1" transform="matrix(1 0 -0.511893 0.859049 30.1783 20.6172)" fill="#F5921E" />
                        </g>
                        <defs>
                            <linearGradient id="paint0_linear_102_918" x1="19.2037" y1="34.0001" x2="4.34592" y2="23.5232" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#00796D" />
                                <stop offset="1" stop-color="#38C682" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_102_918" x1="17" y1="21" x2="-2.53037" y2="18.2994" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#00796D" />
                                <stop offset="1" stop-color="#38C682" />
                            </linearGradient>
                            <clipPath id="clip0_102_918">
                                <rect width="52" height="34" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <p className="font-['Inter'] font-bold italic text-xl leading-6">Agenone</p>
                </div>
                <div className="flex justify-around p-2 ring-2 ring-white w-8 h-8 rounded-lg flex-col hover:cursor-pointer">
                    <div className="bg-white w-full h-1 m-auto rounded-sm"></div>
                    <div className="bg-white w-full h-1 m-auto rounded-sm"></div>
                </div>
            </nav>
        </header>
    )
}
