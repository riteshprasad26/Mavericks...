/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Gallery = () => {
    return (
        <div>
            <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
                    <h2 className="text-orange-500 text-4xl lg:text-4xl font-bold text-center mb-4 md:mb-8 xl:mb-12 tracking-widest">Gallery</h2>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 xl:gap-8 mb-4 md:mb-8">
                        <a href="#" className="group h-48 md:h-80 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative">
                            <img src="/gallery/m1.jpeg" loading="lazy" alt="Photo by Minh Pham" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />

                            <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

                            <span className="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">Team Meet Up</span>
                        </a>
                        <a href="#" className="group h-48 md:h-80 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative">
                            <img src="/gallery/m2.png" loading="lazy" alt="Photo by Magicle" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />

                            <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

                            <span className="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">Invention</span>
                        </a>
                        <a href="#" className="group h-48 md:h-80 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative">
                            <img src="/gallery/m3.png" loading="lazy" alt="Photo by Martin Sanchez" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />

                            <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

                            <span className="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">Testing</span>
                        </a>
                        <a href="#" className="group h-48 md:h-80 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative">
                            <img src="/gallery/m4.png" loading="lazy" alt="Photo by Lorenzo Herrera" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />

                            <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

                            <span className="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">Learning</span>
                        </a>
                    </div>

                    <div className="flex justify-between items-start sm:items-center gap-8">
                        <p className="max-w-screen-sm text-gray-500 text-sm lg:text-base">Explore more photos of us in the Gallery Section.</p>

                        <a href="#" className="inline-block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 border text-gray-500 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3">More</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery