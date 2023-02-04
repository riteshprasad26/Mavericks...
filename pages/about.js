/* eslint-disable @next/next/no-img-element */
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import Head from 'next/head'
import React from 'react'

const About = () => {
    return (
        <>
            <Head>
                <title>About | Mavericks Club - SLIET</title>
            </Head>
            <div>

                <Navbar />

                <div class="bg-white py-6 sm:py-8 lg:py-12 shadow-md">
                    <div class="max-w-screen-xl px-4 md:px-8 mx-auto">
                        <div class="grid md:grid-cols-2 gap-8 lg:gap-12">
                            <div>
                                <div class="h-64 md:h-auto bg-gray-100 overflow-hidden rounded-lg shadow-lg">
                                    <img src="/gallery/m1.jpeg" loading="lazy" alt="Photo by Martin Sanchez" class="w-full h-full object-cover object-center" />
                                </div>

                            </div>

                            <div class="md:pt-8">
                                <p class="text-orange-500 font-bold text-center md:text-left">Who we are</p>

                                <h1 class="text-black text-2xl sm:text-3xl font-bold text-center md:text-left mb-4 md:mb-6">Mavericks</h1>

                                <p class="text-black sm:text-lg mb-2 md:mb-4">
                                    SLIET, Mavericks Club was established in 2017 by Dhurv Patel (GEE/2015).<br />

                                    It provides an ideal platform for student of Mechanical, Mechatronics, Electronics, Computers, Electrical engineering background to hone their skills and showcase their talent in many interdisciplinary activities
                                </p>

                                <h2 class="text-gray-800 text-xl sm:text-2xl font-semibold text-center md:text-left mb-2 md:mb-4">About us</h2>

                                <p class="text-black sm:text-lg mb-6 md:mb-8">To promote creativity and to increase the technical now – how and productivity of all the students at the college. To promote hands -on and co-operative learning and also engages students in problem solving higher order thinking. To develop the spirit of entrepreneurship among the students of institute.</p>

                                <h2 class="text-gray-800 text-xl sm:text-2xl font-semibold text-center md:text-left mb-2 md:mb-4">Out Achievements</h2>

                                <p class="text-black sm:text-lg mb-6 md:mb-8">1. Won in Smart India Hackathon SIH in 2019 & 2020. <br />
                                    2. Two Team qualified for the zonal rounds of DRDOS Unmanned Vehicle Challenge. <br />
                                    3. Among the top teams in E-Yantra 2017, 2018, 2019 Competition organised by MOE in accordance with IIT Bombay. <br />
                                    4. Spreded golries at various technical fest, including IIT Bombay, IIT Kanpur, IIT Delhi, IIT Bhu, IIT Ropar, PEC, Thapar University and recevied cash prize at Guru Nanak Dev University , Amritsar Punjab. <br />
                                    5. In our team, we provide guidance for developing skills in various Coding Platforms, Development Board, Cricut Design Software, 3D Modelling Software, Hardware Implementation and the latest technologies. <br />
                                    6. We also encourge our team Memebers to develop various projects.</p>
                            </div>
                        </div>
                    </div>
                </div>


                <Footer />

            </div>
        </>
    )
}

export default About