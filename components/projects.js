/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Projects = () => {
    return (
        <div>
            <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
                    <h2 className="text-orange-500 text-4xl lg:text-4xl font-bold text-center mb-8 md:mb-12 tracking-wider">Projects</h2>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                        <div>
                            <a href="#" className="group h-96 flex items-end bg-gray-100 rounded-lg overflow-hidden shadow-lg relative p-4">
                                <img src="/images/drone.jpg" loading="lazy" alt="Photo by Austin Wade" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />

                                <div className="w-full flex flex-col bg-white text-center rounded-lg relative p-4">
                                    <span className="text-gray-800 text-lg lg:text-xl font-bold">Drone</span>
                                </div>
                            </a>
                        </div>
                        <div>
                            <a href="#" className="group h-96 flex items-end bg-gray-100 rounded-lg overflow-hidden shadow-lg relative p-4">
                                <img src="/images/robo.png" loading="lazy" alt="Photo by engin akyurt" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />

                                <div className="w-full flex flex-col bg-white text-center rounded-lg relative p-4">
                                    <span className="text-gray-800 text-lg lg:text-xl font-bold">Robo</span>
                                </div>
                            </a>
                        </div>
                        <div>
                            <a href="#" className="group h-96 flex items-end bg-gray-100 rounded-lg overflow-hidden shadow-lg relative p-4">
                                <img src="/images/line-follwing.jpg" loading="lazy" alt="Photo by Austin Wade" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />

                                <div className="w-full flex flex-col bg-white text-center rounded-lg relative p-4">
                                    <span className="text-gray-800 text-lg lg:text-xl font-bold">Line-Following Robo</span>
                                </div>
                            </a>
                        </div>
                        <div>
                            <a href="#" className="group h-96 flex items-end bg-gray-100 rounded-lg overflow-hidden shadow-lg relative p-4">
                                <img src="/images/main.png" loading="lazy" alt="Photo by Austin Wade" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />

                                <div className="w-full flex flex-col bg-white text-center rounded-lg relative p-4">
                                    <span className="text-gray-800 text-lg lg:text-xl font-bold">Hand Crane</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects