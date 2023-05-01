

export default function Achievement() {
    type achievementType = {
        jum : string,
        desc : string
    }
    const achievement : achievementType[] = [
        {
        jum : '10',
        desc : 'Years of Experiences'
        },
        {
        jum : '666',
        desc : 'Project Completed'
        },
        {
        jum : '555',
        desc : 'Satisfied Client'
        },
        {
        jum : '10',
        desc : 'Awards Achieved'
        },
    ]
    return (
        <div className="achievement gap-9 flex flex-col min-h-full px-6 py-14 md:h-fit md:p-[60px] lg:p-[80px] md:gap-16">
            <div className="">
                <p className="font-medium font-['inter'] text-2xl md:text-3xl lg:text-[44px] lg:leading-[52px]">We are passionate about helping businesses grow and succeed in the digital age. We take pride in our work and strive to exceed your expectations every time.</p>
            </div>
            <div className="flex bg-gradient-to-br to-teal-600 from-green-500 flex-col rounded-3xl p-6 pt-0 md:flex-row md:justify-between lg:justify-around ">
                {achievement.map((item,index) => {
                    return (
                        <div key={index} className="text-center pt-6">
                            <div>
                                <span className="font-bold text-white text-5xl ">{item.jum}+</span>
                                <p className=" text-gray-50 text-base font-normal pt-1">{item.desc}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
