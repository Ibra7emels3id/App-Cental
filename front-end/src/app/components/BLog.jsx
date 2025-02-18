import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BLog = () => {
    return (
        <div className="p-4 font-[sans-serif] py-10">
            <div className="max-w-7xl max-lg:max-w-3xl max-sm:max-w-sm mx-auto">
                <div className="">
                    <h2 className="text-5xl font-extrabold text-gray-800 text-center leading-10">
                        Cental <span className='text-color_red '>Blog & News</span>
                    </h2>
                    <p className='text-center lg:w-9/12 m-auto my-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi accusantium at cum harum, excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam quia distinctio,</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-sm:gap-8">
                    <div className="bg-white rounded overflow-hidden relative">
                        <Image
                            src="/image/blog-1.jpg"
                            alt="Blog Post 1"
                            className="w-full h-64 object-cover"
                            width={200}
                            height={200}
                        />
                        <div className="p-6 bg-[#eee]">
                            <div className="flex justify-between items-center my-3">
                                <p className='flex items-center justify-center gap-2 text-gray-600'><svg viewBox="0 0 16 16" fill="none" className='w-5' xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                    <g id="SVGRepo_iconCarrier">
                                        {" "}
                                        <path
                                            d="M8 7C9.65685 7 11 5.65685 11 4C11 2.34315 9.65685 1 8 1C6.34315 1 5 2.34315 5 4C5 5.65685 6.34315 7 8 7Z"
                                            fill="#ff0000"
                                        />{" "}
                                        <path
                                            d="M14 12C14 10.3431 12.6569 9 11 9H5C3.34315 9 2 10.3431 2 12V15H14V12Z"
                                            fill="#ff0000"
                                        />{" "}
                                    </g>
                                </svg>
                                    Martin.C</p>
                                <span className=" text-sm text-gray-600 flex items-center justify-center gap-2">
                                    <svg
                                        className='w-5'
                                        version={1.0}
                                        id="Layer_1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        viewBox="0 0 64 64"
                                        enableBackground="new 0 0 64 64"
                                        xmlSpace="preserve"
                                        fill="#ff0000"
                                        stroke="#ff0000"
                                    >
                                        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                        <g id="SVGRepo_iconCarrier">
                                            {" "}
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                fill="#ff0040"
                                                d="M60,0H4C1.789,0,0,1.789,0,4v40c0,2.211,1.789,4,4,4h8v12 c0,1.617,0.973,3.078,2.469,3.695C14.965,63.902,15.484,64,16,64c1.039,0,2.062-0.406,2.828-1.172L33.656,48H60c2.211,0,4-1.789,4-4 V4C64,1.789,62.211,0,60,0z"
                                            />{" "}
                                        </g>
                                    </svg>
                                    6 Comments
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold cursor-pointer text-gray-800 mb-3 hover:text-color_red transition-all duration-300">
                                Rental Cars how to check driving fines?
                            </h3>
                            <p className="text-gray-500 text-sm">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore...
                            </p>
                            <p className="text-gray-800 text-[13px] font-semibold mt-4">
                                08 April 2024
                            </p>
                            <Link
                                href="/"
                                className="mt-4 absolute top-[220px] inline-block px-4 py-2 rounded-xl tracking-wider bg-color_red hover:bg-red-700 text-white text-[18px]"
                            >
                                30 Dec 2025
                            </Link>
                            <Link
                                href="/"
                                className="mt-4 inline-block py-2 rounded-xl tracking-wider text-color_red  text-[18px]"
                            >
                                Read More
                            </Link>
                        </div>
                    </div>
                    <div className="bg-white rounded overflow-hidden relative">
                        <Image
                            src="/image/blog-2.jpg"
                            alt="Blog Post 1"
                            className="w-full h-64 object-cover"
                            width={200}
                            height={200}
                        />
                        <div className="p-6 bg-[#eee]">
                            <div className="flex justify-between items-center my-3">
                                <p className='flex items-center justify-center gap-2 text-gray-600'><svg viewBox="0 0 16 16" fill="none" className='w-5' xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                    <g id="SVGRepo_iconCarrier">
                                        {" "}
                                        <path
                                            d="M8 7C9.65685 7 11 5.65685 11 4C11 2.34315 9.65685 1 8 1C6.34315 1 5 2.34315 5 4C5 5.65685 6.34315 7 8 7Z"
                                            fill="#ff0000"
                                        />{" "}
                                        <path
                                            d="M14 12C14 10.3431 12.6569 9 11 9H5C3.34315 9 2 10.3431 2 12V15H14V12Z"
                                            fill="#ff0000"
                                        />{" "}
                                    </g>
                                </svg>
                                    Martin.C</p>
                                <span className=" text-sm text-gray-600 flex items-center justify-center gap-2">
                                    <svg
                                        className='w-5'
                                        version={1.0}
                                        id="Layer_1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        viewBox="0 0 64 64"
                                        enableBackground="new 0 0 64 64"
                                        xmlSpace="preserve"
                                        fill="#ff0000"
                                        stroke="#ff0000"
                                    >
                                        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                        <g id="SVGRepo_iconCarrier">
                                            {" "}
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                fill="#ff0040"
                                                d="M60,0H4C1.789,0,0,1.789,0,4v40c0,2.211,1.789,4,4,4h8v12 c0,1.617,0.973,3.078,2.469,3.695C14.965,63.902,15.484,64,16,64c1.039,0,2.062-0.406,2.828-1.172L33.656,48H60c2.211,0,4-1.789,4-4 V4C64,1.789,62.211,0,60,0z"
                                            />{" "}
                                        </g>
                                    </svg>
                                    2 Comments
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold cursor-pointer text-gray-800 mb-3 hover:text-color_red transition-all duration-300">
                            Rental cost of sport and other cars?
                            </h3>
                            <p className="text-gray-500 text-sm">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore...
                            </p>
                            <p className="text-gray-800 text-[13px] font-semibold mt-4">
                                08 April 2024
                            </p>
                            <Link
                                href="/"
                                className="mt-4 absolute top-[220px] inline-block px-4 py-2 rounded-xl tracking-wider bg-color_red hover:bg-red-700 text-white text-[18px]"
                            >
                                25 Dec 2025
                            </Link>
                            <Link
                                href="/"
                                className="mt-4 inline-block py-2 rounded-xl tracking-wider text-color_red  text-[18px]"
                            >
                                Read More
                            </Link>
                        </div>
                    </div>
                    <div className="bg-white rounded overflow-hidden relative">
                        <Image
                            src="/image/blog-3.jpg"
                            alt="Blog Post 1"
                            className="w-full h-64 object-cover"
                            width={200}
                            height={200}
                        />
                        <div className="p-6 bg-[#eee]">
                            <div className="flex justify-between items-center my-3">
                                <p className='flex items-center justify-center gap-2 text-gray-600'><svg viewBox="0 0 16 16" fill="none" className='w-5' xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                    <g id="SVGRepo_iconCarrier">
                                        {" "}
                                        <path
                                            d="M8 7C9.65685 7 11 5.65685 11 4C11 2.34315 9.65685 1 8 1C6.34315 1 5 2.34315 5 4C5 5.65685 6.34315 7 8 7Z"
                                            fill="#ff0000"
                                        />{" "}
                                        <path
                                            d="M14 12C14 10.3431 12.6569 9 11 9H5C3.34315 9 2 10.3431 2 12V15H14V12Z"
                                            fill="#ff0000"
                                        />{" "}
                                    </g>
                                </svg>
                                    Martin.C</p>
                                <span className=" text-sm text-gray-600 flex items-center justify-center gap-2">
                                    <svg
                                        className='w-5'
                                        version={1.0}
                                        id="Layer_1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        viewBox="0 0 64 64"
                                        enableBackground="new 0 0 64 64"
                                        xmlSpace="preserve"
                                        fill="#ff0000"
                                        stroke="#ff0000"
                                    >
                                        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                        <g id="SVGRepo_iconCarrier">
                                            {" "}
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                fill="#ff0040"
                                                d="M60,0H4C1.789,0,0,1.789,0,4v40c0,2.211,1.789,4,4,4h8v12 c0,1.617,0.973,3.078,2.469,3.695C14.965,63.902,15.484,64,16,64c1.039,0,2.062-0.406,2.828-1.172L33.656,48H60c2.211,0,4-1.789,4-4 V4C64,1.789,62.211,0,60,0z"
                                            />{" "}
                                        </g>
                                    </svg>
                                    12 Comments
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold cursor-pointer text-gray-800 mb-3 hover:text-color_red transition-all duration-300">
                            Document required for car rental?
                            </h3>
                            <p className="text-gray-500 text-sm">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore...
                            </p>
                            <p className="text-gray-800 text-[13px] font-semibold mt-4">
                                08 April 2024
                            </p>
                            <Link
                                href="/"
                                className="mt-4 absolute top-[220px] inline-block px-4 py-2 rounded-xl tracking-wider bg-color_red hover:bg-red-700 text-white text-[18px]"
                            >
                                20 Dec 2025
                            </Link>
                            <Link
                                href="/"
                                className="mt-4 inline-block py-2 rounded-xl tracking-wider text-color_red  text-[18px]"
                            >
                                Read More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default BLog;
