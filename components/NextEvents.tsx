import React from 'react'

export default function NextEvents() {
    return (
        <div className="bg-[#1e1e31]">
            <section>
                <section className="text-gray-600 body-font">
                    <div className="container px-5 pt-12 pb-2 mx-auto">
                        <div className="p-5 bg-white flex items-center mx-auto border-b  mb-10 border-gray-200 rounded-lg sm:flex-row flex-col">
                            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center flex-shrink-0">
                                <img
                                    src="/assets/country/canada.png" />
                            </div>
                            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                                <h1 className="text-black text-2xl title-font font-bold mb-2">Next Event</h1>
                                <p className="leading-relaxed text-base mb-2">Pre-season race 1</p>
                                <div className="md:flex font-bold text-gray-800">
                                    <div className="w-full md:w-1/2 flex space-x-3">
                                        <div className="w-1/2">
                                            <h2 className="text-gray-500">Track</h2>
                                            <p >Circuit Gilles-Villeneuve</p>
                                        </div>
                                        <div className="w-1/2">
                                            <h2 className="text-gray-500">Date</h2>
                                            <p>July 19</p>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/2 flex space-x-3">
                                        <div className="w-1/2">
                                            <h2 className="text-gray-500">Time</h2>
                                            <p>19:45</p>
                                        </div>
                                        <div className="w-1/2">
                                            <h2 className="text-gray-500">Format</h2>
                                            <p>18min/50%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    )
}
