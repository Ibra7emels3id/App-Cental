'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState('hidden');

    // Handle Check Nav Bar
    const HandleCheckNavbar = () => {
        if (showNavbar === 'flex') {
            setShowNavbar('hidden');
        } else {
            setShowNavbar('flex');
        }
    };


    return (
        <>
            <nav id="sidebar" className={`lg:min-w-[250px] w-ma max-lg:${showNavbar}  z-[10000]`}>
                <div
                    id="sidebar-collapse-menu"
                    className=" bg-white shadow-lg h-screen fixed top-0 left-0 overflow-auto z-[99] min-w-[250px] max-lg: transition-all duration-500"
                >
                    <div className="pt-8 pb-2 px-6 sticky top-0 bg-white min-h-[80px] z-[100]">
                        <Link href="/admin" className="">
                            <h1 className='flex items-center justify-center text-color_red font-bold text-3xl'>
                                <svg viewBox="0 0 24 24" className='w-12' fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                    <g id="SVGRepo_iconCarrier">
                                        {" "}
                                        <path
                                            d="M3 8L5.72187 10.2682C5.90158 10.418 6.12811 10.5 6.36205 10.5H17.6379C17.8719 10.5 18.0984 10.418 18.2781 10.2682L21 8M6.5 14H6.51M17.5 14H17.51M8.16065 4.5H15.8394C16.5571 4.5 17.2198 4.88457 17.5758 5.50772L20.473 10.5777C20.8183 11.1821 21 11.8661 21 12.5623V18.5C21 19.0523 20.5523 19.5 20 19.5H19C18.4477 19.5 18 19.0523 18 18.5V17.5H6V18.5C6 19.0523 5.55228 19.5 5 19.5H4C3.44772 19.5 3 19.0523 3 18.5V12.5623C3 11.8661 3.18166 11.1821 3.52703 10.5777L6.42416 5.50772C6.78024 4.88457 7.44293 4.5 8.16065 4.5ZM7 14C7 14.2761 6.77614 14.5 6.5 14.5C6.22386 14.5 6 14.2761 6 14C6 13.7239 6.22386 13.5 6.5 13.5C6.77614 13.5 7 13.7239 7 14ZM18 14C18 14.2761 17.7761 14.5 17.5 14.5C17.2239 14.5 17 14.2761 17 14C17 13.7239 17.2239 13.5 17.5 13.5C17.7761 13.5 18 13.7239 18 14Z"
                                            stroke="#ea001e"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />{" "}
                                    </g>
                                </svg>
                                Cental
                            </h1>
                        </Link>
                    </div>
                    <div className="py-6 px-6">
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/admin"
                                    className="menu-item text-green-700 text-sm flex items-center cursor-pointer bg-[#d9f3ea] hover:bg-[#d9f3ea] rounded-md px-3 py-3 transition-all duration-300"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        className="w-[18px] h-[18px] mr-4"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M19.56 23.253H4.44a4.051 4.051 0 0 1-4.05-4.05v-9.115c0-1.317.648-2.56 1.728-3.315l7.56-5.292a4.062 4.062 0 0 1 4.644 0l7.56 5.292a4.056 4.056 0 0 1 1.728 3.315v9.115a4.051 4.051 0 0 1-4.05 4.05zM12 2.366a2.45 2.45 0 0 0-1.393.443l-7.56 5.292a2.433 2.433 0 0 0-1.037 1.987v9.115c0 1.34 1.09 2.43 2.43 2.43h15.12c1.34 0 2.43-1.09 2.43-2.43v-9.115c0-.788-.389-1.533-1.037-1.987l-7.56-5.292A2.438 2.438 0 0 0 12 2.377z"
                                            data-original="#000000"
                                        />
                                        <path
                                            d="M16.32 23.253H7.68a.816.816 0 0 1-.81-.81v-5.4c0-2.83 2.3-5.13 5.13-5.13s5.13 2.3 5.13 5.13v5.4c0 .443-.367.81-.81.81zm-7.83-1.62h7.02v-4.59c0-1.933-1.577-3.51-3.51-3.51s-3.51 1.577-3.51 3.51z"
                                            data-original="#000000"
                                        />
                                    </svg>
                                    <span>Dashboard</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/admin/car-list"
                                    className="menu-item text-gray-800 text-sm flex items-center cursor-pointer hover:bg-[#d9f3ea] rounded-md px-3 py-3 transition-all duration-300"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        className="w-[18px] h-[18px] mr-4"
                                        viewBox="0 0 60.123 60.123"
                                    >
                                        <path
                                            d="M57.124 51.893H16.92a3 3 0 1 1 0-6h40.203a3 3 0 0 1 .001 6zm0-18.831H16.92a3 3 0 1 1 0-6h40.203a3 3 0 0 1 .001 6zm0-18.831H16.92a3 3 0 1 1 0-6h40.203a3 3 0 0 1 .001 6z"
                                            data-original="#000000"
                                        />
                                        <circle
                                            cx="4.029"
                                            cy="11.463"
                                            r="4.029"
                                            data-original="#000000"
                                        />
                                        <circle
                                            cx="4.029"
                                            cy="30.062"
                                            r="4.029"
                                            data-original="#000000"
                                        />
                                        <circle
                                            cx="4.029"
                                            cy="48.661"
                                            r="4.029"
                                            data-original="#000000"
                                        />
                                    </svg>
                                    <span>Car List</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/admin/orders"
                                    className="menu-item text-gray-800 text-sm flex items-center cursor-pointer hover:bg-[#d9f3ea] rounded-md px-3 py-3 transition-all duration-300"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        className="w-[18px] h-[18px] mr-4"
                                        viewBox="0 0 64 64"
                                    >
                                        <path
                                            d="M16.4 29.594a2.08 2.08 0 0 1 2.08-2.08h31.2a2.08 2.08 0 1 1 0 4.16h-31.2a2.08 2.08 0 0 1-2.08-2.08zm0 12.48a2.08 2.08 0 0 1 2.08-2.08h12.48a2.08 2.08 0 1 1 0 4.16H18.48a2.08 2.08 0 0 1-2.08-2.08z"
                                            data-original="#000000"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            d="M.8 18.154c0-8.041 6.519-14.56 14.56-14.56v-1.04a2.08 2.08 0 1 1 4.16 0v1.04h10.4v-1.04a2.08 2.08 0 1 1 4.16 0v1.04h10.4v-1.04a2.08 2.08 0 1 1 4.16 0v1.04c8.041 0 14.56 6.519 14.56 14.56v30.16c0 8.041-6.519 14.56-14.56 14.56H15.36C7.319 62.874.8 56.355.8 48.314zm33.28-10.4h10.4v1.04a2.08 2.08 0 1 0 4.16 0v-1.04c5.744 0 10.4 4.656 10.4 10.4v30.16c0 5.744-4.656 10.4-10.4 10.4H15.36c-5.744 0-10.4-4.656-10.4-10.4v-30.16c0-5.744 4.656-10.4 10.4-10.4v1.04a2.08 2.08 0 1 0 4.16 0v-1.04h10.4v1.04a2.08 2.08 0 1 0 4.16 0z"
                                            clipRule="evenodd"
                                            data-original="#000000"
                                        />
                                    </svg>
                                    <span>Order Detail</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/admin/review"
                                    className="menu-item text-gray-800 text-sm flex items-center cursor-pointer hover:bg-[#d9f3ea] rounded-md px-3 py-3 transition-all duration-300"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        className="w-[18px] h-[18px] mr-4"
                                        viewBox="0 0 682.667 682.667"
                                    >
                                        <defs>
                                            <clipPath id="a" clipPathUnits="userSpaceOnUse">
                                                <path d="M0 512h512V0H0Z" data-original="#000000" />
                                            </clipPath>
                                        </defs>
                                        <g
                                            fill="none"
                                            stroke="#000"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeMiterlimit={10}
                                            strokeWidth={30}
                                            clipPath="url(#a)"
                                            transform="matrix(1.33333 0 0 -1.33333 0 682.667)"
                                        >
                                            <path
                                                d="M368 170.3V45c0-16.57-13.43-30-30-30H45c-16.57 0-30 13.43-30 30v422c0 16.571 13.43 30 30 30h293c16.57 0 30-13.429 30-30V261.26"
                                                data-original="#000000"
                                            />
                                            <path
                                                d="m287.253 180.508 159.099 159.099c5.858 5.858 15.355 5.858 21.213 0l25.042-25.041c5.858-5.859 5.858-15.356 0-21.214L332.508 135.253l-84.853-39.599ZM411.703 304.958l45.255-45.255M80 400h224M80 320h176M80 240h128"
                                                data-original="#000000"
                                            />
                                        </g>
                                    </svg>
                                    <span>Reviews</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/admin/users"
                                    className="menu-item text-gray-800 text-sm flex items-center cursor-pointer hover:bg-[#d9f3ea] rounded-md px-3 py-3 transition-all duration-300"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-[18px] h-[18px] mr-4"
                                        viewBox="0 0 512 512">
                                        <path
                                            d="M437.02 74.98C388.668 26.63 324.379 0 256 0S123.332 26.629 74.98 74.98C26.63 123.332 0 187.621 0 256s26.629 132.668 74.98 181.02C123.332 485.37 187.621 512 256 512s132.668-26.629 181.02-74.98C485.37 388.668 512 324.379 512 256s-26.629-132.668-74.98-181.02zM111.105 429.297c8.454-72.735 70.989-128.89 144.895-128.89 38.96 0 75.598 15.179 103.156 42.734 23.281 23.285 37.965 53.687 41.742 86.152C361.641 462.172 311.094 482 256 482s-105.637-19.824-144.895-52.703zM256 269.507c-42.871 0-77.754-34.882-77.754-77.753C178.246 148.879 213.13 114 256 114s77.754 34.879 77.754 77.754c0 42.871-34.883 77.754-77.754 77.754zm170.719 134.427a175.9 175.9 0 0 0-46.352-82.004c-18.437-18.438-40.25-32.27-64.039-40.938 28.598-19.394 47.426-52.16 47.426-89.238C363.754 132.34 315.414 84 256 84s-107.754 48.34-107.754 107.754c0 37.098 18.844 69.875 47.465 89.266-21.887 7.976-42.14 20.308-59.566 36.542-25.235 23.5-42.758 53.465-50.883 86.348C50.852 364.242 30 312.512 30 256 30 131.383 131.383 30 256 30s226 101.383 226 226c0 56.523-20.86 108.266-55.281 147.934zm0 0"
                                            data-original="#000000" />
                                    </svg>
                                    <span>User</span>
                                </Link>
                            </li>
                            {/* <li>
                                <a
                                    href="javascript:void(0)"
                                    className="menu-item text-gray-800 text-sm flex items-center cursor-pointer hover:bg-[#d9f3ea] rounded-md px-3 py-3 transition-all duration-300"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        className="w-[18px] h-[18px] mr-4"
                                        viewBox="0 0 507.246 507.246"
                                    >
                                        <path
                                            d="M457.262 89.821c-2.734-35.285-32.298-63.165-68.271-63.165H68.5c-37.771 0-68.5 30.729-68.5 68.5V412.09c0 37.771 30.729 68.5 68.5 68.5h370.247c37.771 0 68.5-30.729 68.5-68.5V155.757c-.001-31.354-21.184-57.836-49.985-65.936zM68.5 58.656h320.492c17.414 0 32.008 12.261 35.629 28.602H68.5c-13.411 0-25.924 3.889-36.5 10.577v-2.679c0-20.126 16.374-36.5 36.5-36.5zM438.746 448.59H68.5c-20.126 0-36.5-16.374-36.5-36.5V155.757c0-20.126 16.374-36.5 36.5-36.5h370.247c20.126 0 36.5 16.374 36.5 36.5v55.838H373.221c-40.43 0-73.322 32.893-73.322 73.323s32.893 73.323 73.322 73.323h102.025v53.849c0 20.126-16.374 36.5-36.5 36.5zm36.5-122.349H373.221c-22.785 0-41.322-18.537-41.322-41.323s18.537-41.323 41.322-41.323h102.025z"
                                            data-original="#000000"
                                        />
                                        <circle
                                            cx="379.16"
                                            cy="286.132"
                                            r="16.658"
                                            data-original="#000000"
                                        />
                                    </svg>
                                    <span>Wallet</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="javascript:void(0)"
                                    className="menu-item text-gray-800 text-sm flex items-center cursor-pointer hover:bg-[#d9f3ea] rounded-md px-3 py-3 transition-all duration-300"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        className="w-[18px] h-[18px] mr-4"
                                        viewBox="0 0 214.27 214.27"
                                    >
                                        <path
                                            d="M196.926 55.171c-.11-5.785-.215-11.25-.215-16.537a7.5 7.5 0 0 0-7.5-7.5c-32.075 0-56.496-9.218-76.852-29.01a7.498 7.498 0 0 0-10.457 0c-20.354 19.792-44.771 29.01-76.844 29.01a7.5 7.5 0 0 0-7.5 7.5c0 5.288-.104 10.755-.215 16.541-1.028 53.836-2.436 127.567 87.331 158.682a7.495 7.495 0 0 0 4.912 0c89.774-31.116 88.368-104.849 87.34-158.686zm-89.795 143.641c-76.987-27.967-75.823-89.232-74.79-143.351.062-3.248.122-6.396.164-9.482 30.04-1.268 54.062-10.371 74.626-28.285 20.566 17.914 44.592 27.018 74.634 28.285.042 3.085.102 6.231.164 9.477 1.032 54.121 2.195 115.388-74.798 143.356z"
                                            data-original="#000000"
                                        />
                                        <path
                                            d="m132.958 81.082-36.199 36.197-15.447-15.447a7.501 7.501 0 0 0-10.606 10.607l20.75 20.75a7.477 7.477 0 0 0 5.303 2.196 7.477 7.477 0 0 0 5.303-2.196l41.501-41.5a7.498 7.498 0 0 0 .001-10.606 7.5 7.5 0 0 0-10.606-.001z"
                                            data-original="#000000"
                                        />
                                    </svg>
                                    <span>Security</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="javascript:void(0)"
                                    className="menu-item text-gray-800 text-sm flex items-center cursor-pointer hover:bg-[#d9f3ea] rounded-md px-3 py-3 transition-all duration-300"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        className="w-[18px] h-[18px] mr-4"
                                        viewBox="0 0 64 64"
                                    >
                                        <path
                                            d="M61.4 29.9h-6.542a9.377 9.377 0 0 0-18.28 0H2.6a2.1 2.1 0 0 0 0 4.2h33.978a9.377 9.377 0 0 0 18.28 0H61.4a2.1 2.1 0 0 0 0-4.2Zm-15.687 7.287A5.187 5.187 0 1 1 50.9 32a5.187 5.187 0 0 1-5.187 5.187ZM2.6 13.1h5.691a9.377 9.377 0 0 0 18.28 0H61.4a2.1 2.1 0 0 0 0-4.2H26.571a9.377 9.377 0 0 0-18.28 0H2.6a2.1 2.1 0 0 0 0 4.2Zm14.837-7.287A5.187 5.187 0 0 1 22.613 11a5.187 5.187 0 0 1-10.364 0 5.187 5.187 0 0 1 5.187-5.187ZM61.4 50.9H35.895a9.377 9.377 0 0 0-18.28 0H2.6a2.1 2.1 0 0 0 0 4.2h15.015a9.377 9.377 0 0 0 18.28 0H61.4a2.1 2.1 0 0 0 0-4.2Zm-34.65 7.287A5.187 5.187 0 1 1 31.937 53a5.187 5.187 0 0 1-5.187 5.187Z"
                                            data-name="Layer 47"
                                            data-original="#000000"
                                        />
                                    </svg>
                                    <span>Preferences</span>
                                </a>
                            </li> */}

                        </ul>
                        {/* <div className="mt-8">
                            <div className="bg-[#00b074] p-4 rounded-md shadow-md max-w-[196px]">
                                <p className="text-white text-sm leading-relaxed">
                                    Organize your menus using the action button below!
                                </p>
                                <button
                                    type="button"
                                    className="py-2 px-4 bg-white hover:bg-gray-100 text-gray-800 text-sm border-none outline-none rounded-md mt-4"
                                >
                                    Add Menu
                                </button>
                            </div>
                        </div> */}
                    </div>
                </div>
            </nav>
            <button
                onClick={HandleCheckNavbar}
                className="lg:hidden w-8 h-8 z-[100] fixed top-[36px] left-[10px] cursor-pointer bg-[#007bff] flex items-center justify-center rounded-full outline-none transition-all duration-500"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#fff"
                    className="w-3 h-3"
                    viewBox="0 0 55.752 55.752"
                >
                    <path
                        d="M43.006 23.916a5.36 5.36 0 0 0-.912-.727L20.485 1.581a5.4 5.4 0 0 0-7.637 7.638l18.611 18.609-18.705 18.707a5.398 5.398 0 1 0 7.634 7.635l21.706-21.703a5.35 5.35 0 0 0 .912-.727 5.373 5.373 0 0 0 1.574-3.912 5.363 5.363 0 0 0-1.574-3.912z"
                        data-original="#000000"
                    />
                </svg>
            </button>
        </>
    );
}

export default Navbar;
