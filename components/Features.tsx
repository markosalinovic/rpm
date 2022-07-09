import React from 'react'

export default function Features() {
    return (
        <div className='bg-[#1e1e31]'>

            <section className="pb-20 pt-1">
                <div className="container max-w-6xl mx-auto">
                    <div className="grid grid-cols-4 gap-8 mt-4 px-4 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0">

                        <div className="relative flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-[#f7f4e9] rounded-xl">
                            <div className="p-3 text-white bg-[#e40c2b] rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 " viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M14 3v4a1 1 0 0 0 1 1h4"></path><path d="M5 8v-3a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-5"></path><circle cx="6" cy="14" r="3"></circle><path d="M4.5 17l-1.5 5l3 -1.5l3 1.5l-1.5 -5"></path></svg>
                            </div>
                            <h4 className="text-2xl font-bold text-[#1e1e31] uppercase">Friendly</h4>
                            <p className="text-lg text-center text-[#1e1e31]">Starting a brand ne'w season 4 with F1 2022 on the PS platform RPM roars into life again created by a very friendly group of enthusiastic sim racers who are all ready to welcome drivers of all abilities to our RPM Esports F1 Racing League.</p><br></br>
                        </div>

                        <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-[#f7f4e9]  sm:rounded-xl">
                            <div className="p-3 text-white bg-[#eba63f] rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 " viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M18 8a3 3 0 0 1 0 6"></path><path d="M10 8v11a1 1 0 0 1 -1 1h-1a1 1 0 0 1 -1 -1v-5"></path><path d="M12 8h0l4.524 -3.77a0.9 .9 0 0 1 1.476 .692v12.156a0.9 .9 0 0 1 -1.476 .692l-4.524 -3.77h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h8"></path></svg>
                            </div>
                            <h4 className="text-2xl font-bold text-[#1e1e31] uppercase">Competitive</h4>
                            <p className="text-lg text-center text-[#1e1e31]">Don't mistake friendly for uncompetitive.

                                The RPM league hosts 3 highly competitive race tiers for drivers of all abilities.

                                All tiers are super competitive, clean racing and provide all RPM members with a great racing experience whatever their ability and pace.</p>
                        </div>

                        <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-[#f7f4e9]  sm:rounded-xl">
                            <div className="p-3 text-white bg-[#3cbcc3] rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 " viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3"></polyline><line x1="12" y1="12" x2="20" y2="7.5"></line><line x1="12" y1="12" x2="12" y2="21"></line><line x1="12" y1="12" x2="4" y2="7.5"></line><line x1="16" y1="5.25" x2="8" y2="9.75"></line></svg>
                            </div>
                            <h4 className="text-2xl font-bold text-[#1e1e31] uppercase">Great Racing Community</h4>
                            <p className="text-lg text-center text-[#1e1e31]">Our aim at RPM is to create a really high spirited community of like minded F1 sim racers where we mix competitive racing with having loads of fun for all our drivers and team.

                                If you want to enjoy your league racing and make an awesome group fo friends then check out our Discord Server.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
