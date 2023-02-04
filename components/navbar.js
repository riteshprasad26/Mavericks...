import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className='top-0 sticky bg-white z-10'>
            <div className="px-5 md:px-10 border-2 border-gray-200 flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <Image src="/mavericks-logo.png" className='h-11' width={75} height={20} alt="" />
                    <span className="ml-3 text-xl">Mavericks</span>
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                    <Link href={'/'} className="mx-1 md:mx-4 hover:text-gray-900">Home</Link>
                    <a className="mx-1 md:mx-4 hover:text-gray-900">Gallery</a>
                    <a className="mx-1 md:mx-4 hover:text-gray-900">Project</a>
                    <a className="mx-1 md:mx-4 hover:text-gray-900">Team</a>
                    <Link href={'/about'} className="mx-1 md:mx-4 hover:text-gray-900">About</Link>
                    <Link href={'/faq'} className="mx-1 md:mx-4 hover:text-gray-900">FAQ?</Link>
                </nav>

                {/* <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Contact Us
                </button> */}

            </div>
        </div>
    )
}

export default Navbar