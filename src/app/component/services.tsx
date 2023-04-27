
export default function Service(): JSX.Element {
    
    const Visible = (index: number) => {
        document.getElementById(`more-info-${index}`)?.classList.toggle("hidden");
    }
    return (
        <section className="my-14 h-screen min-h-full mx-6 ">
            <div className="  mb-9">
                <h3 className="font-bold text-5xl tracking-[-0.02em] text-center leading-[44px] text-black">The Services We Offer <span className="bg-gradient-to-l from-teal-600 to-green-500 text-transparent bg-clip-text">For You</span></h3>
            </div>
            <div className=" flex flex-col gap-4">
                <div className="bg-[#F8F8F8] p-6 rounded-xl">
                    <div className="flex">
                        <p className="text-xl font-bold p-1 mr-2">1</p>
                        <p className="text-xl font-bold my-auto">UI/UX Design</p>
                        <div className="ml-auto my-auto cursor-pointer">
                            <svg onClick={() => Visible(1)} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 8.99997H12.17L7.29 13.88C6.9 14.27 6.9 14.91 7.29 15.3C7.68 15.69 8.31 15.69 8.7 15.3L15.29 8.70997C15.68 8.31997 15.68 7.68997 15.29 7.29997L8.71 0.699971C8.32 0.309971 7.69 0.309971 7.3 0.699971C6.91 1.08997 6.91 1.71997 7.3 2.10997L12.17 6.99997H1C0.45 6.99997 0 7.44997 0 7.99997C0 8.54997 0.45 8.99997 1 8.99997Z" fill="#3D414C" />
                            </svg>
                        </div>
                    </div>
                    <div id="more-info-1" className="ml-7 hidden transition-all">
                        <p className="max-w-[700px] mr-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sit autem voluptatum inventore voluptate. Aut libero veniam rerum officia rem nihil asperiores voluptas. Rem nostrum quasi iusto sint tenetur. Quidem.</p>
                        <div className="h-[150px] flex bg-slate-400">
                            <strong className="m-auto">Image</strong>
                        </div>
                    </div>
                </div>
                <div className="bg-[#F8F8F8] p-6 rounded-xl">
                    <div className="flex">
                        <p className="text-xl font-bold p-1 mr-2">1</p>
                        <p className="text-xl font-bold my-auto">UI/UX Design</p>
                    
                            <svg onClick={() => Visible(2)} className="ml-auto my-auto " width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 8.99997H12.17L7.29 13.88C6.9 14.27 6.9 14.91 7.29 15.3C7.68 15.69 8.31 15.69 8.7 15.3L15.29 8.70997C15.68 8.31997 15.68 7.68997 15.29 7.29997L8.71 0.699971C8.32 0.309971 7.69 0.309971 7.3 0.699971C6.91 1.08997 6.91 1.71997 7.3 2.10997L12.17 6.99997H1C0.45 6.99997 0 7.44997 0 7.99997C0 8.54997 0.45 8.99997 1 8.99997Z" fill="#3D414C" />
                            </svg>
                        

                    </div>
                    <div id="more-info-2" className="ml-7 hidden">
                        <p className="max-w-[700px] mr-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sit autem voluptatum inventore voluptate. Aut libero veniam rerum officia rem nihil asperiores voluptas. Rem nostrum quasi iusto sint tenetur. Quidem.</p>
                        <div className="h-[150px] flex bg-slate-400">
                            <strong className="m-auto">Image</strong>
                        </div>
                    </div>
                </div>
                <div className="bg-[#F8F8F8] p-6 rounded-xl">
                    <div className="flex">
                        <p className="text-xl font-bold p-1 mr-2">1</p>
                        <p className="text-xl font-bold my-auto">UI/UX Design</p>
                    
                            <svg onClick={() => Visible(3)} className="ml-auto my-auto " width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 8.99997H12.17L7.29 13.88C6.9 14.27 6.9 14.91 7.29 15.3C7.68 15.69 8.31 15.69 8.7 15.3L15.29 8.70997C15.68 8.31997 15.68 7.68997 15.29 7.29997L8.71 0.699971C8.32 0.309971 7.69 0.309971 7.3 0.699971C6.91 1.08997 6.91 1.71997 7.3 2.10997L12.17 6.99997H1C0.45 6.99997 0 7.44997 0 7.99997C0 8.54997 0.45 8.99997 1 8.99997Z" fill="#3D414C" />
                            </svg>
                        

                    </div>
                    <div id="more-info-3" className="ml-7 hidden">
                        <p className="max-w-[700px] mr-auto"></p>
                        <div className="h-[150px] flex bg-slate-400">
                            <strong className="m-auto">Image</strong>
                        </div>
                    </div>
                </div>
                <div className="bg-[#F8F8F8] p-6 rounded-xl">
                    <div className="flex">
                        <p className="text-xl font-bold p-1 mr-2">1</p>
                        <p className="text-xl font-bold my-auto">UI/UX Design</p>
                    
                            <svg onClick={() => Visible(4)} className="ml-auto my-auto " width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 8.99997H12.17L7.29 13.88C6.9 14.27 6.9 14.91 7.29 15.3C7.68 15.69 8.31 15.69 8.7 15.3L15.29 8.70997C15.68 8.31997 15.68 7.68997 15.29 7.29997L8.71 0.699971C8.32 0.309971 7.69 0.309971 7.3 0.699971C6.91 1.08997 6.91 1.71997 7.3 2.10997L12.17 6.99997H1C0.45 6.99997 0 7.44997 0 7.99997C0 8.54997 0.45 8.99997 1 8.99997Z" fill="#3D414C" />
                            </svg>
                        
                    </div>
                    <div id="more-info-4" className="ml-7 hidden">
                        <p className="max-w-[700px] mr-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sit autem voluptatum inventore voluptate. Aut libero veniam rerum officia rem nihil asperiores voluptas. Rem nostrum quasi iusto sint tenetur. Quidem.</p>
                        <div className="h-[150px] flex bg-slate-400">
                            <strong className="m-auto">Image</strong>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


