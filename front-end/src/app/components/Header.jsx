import { getServerSession } from 'next-auth';
import Link from 'next/link';
import React, { memo } from 'react';
import { authOptions } from '../api/auth/[...nextauth]/route';
import Account from './Account';
import BtnListSidebar from './btnListSidebar';


const Header = async () => {
    const session = await getServerSession(authOptions);

    return (
        <header className="bg-white  font-[sans-serif] tracking-wide relative z-50">
            <div className=" hidden px-20 lg:flex bg-background_light gap-4 py-2 h-[50px] relative">
                <div
                    id="collapseMenu"
                    className="flex items-center justify-between w-full"
                >
                    <ul className="lg:flex lg:justify-center gap-x-8 max-lg:space-y-3 max-lg:fixe">
                        <li className="max-lg:border-b border-pink-200 max-lg:py-3">
                            <Link
                                href="/location"
                                className="flex items-center justify-center hover:text-pink-500 text-gray-500 text-[15px]"
                            >
                                <svg viewBox="0 0 24 24" className='w-6' fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                    <g id="SVGRepo_iconCarrier">
                                        {" "}
                                        <path
                                            d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
                                            stroke="#ea001e"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />{" "}
                                        <path
                                            d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z"
                                            stroke="#ea001e"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />{" "}
                                    </g>
                                </svg>

                                Find A Location
                            </Link>
                        </li>
                        <li className="max-lg:border-b border-pink-200 max-lg:py-3">
                            <Link
                                href="/call"
                                className="hover:text-pink-500 text-gray-500 text-[15px] flex items-center justify-center"
                            >
                                <svg viewBox="0 0 24 24" className='w-6' fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                    <g id="SVGRepo_iconCarrier">
                                        {" "}
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M17.3545 22.2323C15.3344 21.7262 11.1989 20.2993 7.44976 16.5502C3.70065 12.8011 2.2738 8.66559 1.76767 6.6455C1.47681 5.48459 2.00058 4.36434 2.88869 3.72997L5.21694 2.06693C6.57922 1.09388 8.47432 1.42407 9.42724 2.80051L10.893 4.91776C11.5152 5.8165 11.3006 7.0483 10.4111 7.68365L9.24234 8.51849C9.41923 9.1951 9.96939 10.5846 11.6924 12.3076C13.4154 14.0306 14.8049 14.5807 15.4815 14.7576L16.3163 13.5888C16.9517 12.6994 18.1835 12.4847 19.0822 13.1069L21.1995 14.5727C22.5759 15.5257 22.9061 17.4207 21.933 18.783L20.27 21.1113C19.6356 21.9994 18.5154 22.5232 17.3545 22.2323ZM8.86397 15.136C12.2734 18.5454 16.0358 19.8401 17.8405 20.2923C18.1043 20.3583 18.4232 20.2558 18.6425 19.9488L20.3056 17.6205C20.6299 17.1665 20.5199 16.5348 20.061 16.2171L17.9438 14.7513L17.0479 16.0056C16.6818 16.5182 16.0047 16.9202 15.2163 16.7501C14.2323 16.5378 12.4133 15.8569 10.2782 13.7218C8.1431 11.5867 7.46219 9.7677 7.24987 8.7837C7.07977 7.9953 7.48181 7.31821 7.99439 6.95208L9.24864 6.05618L7.78285 3.93893C7.46521 3.48011 6.83351 3.37005 6.37942 3.6944L4.05117 5.35744C3.74413 5.57675 3.64162 5.89565 3.70771 6.15943C4.15989 7.96418 5.45459 11.7266 8.86397 15.136Z"
                                            fill="#ea001e"
                                        />{" "}
                                    </g>
                                </svg>

                                +01234567890
                            </Link>
                        </li>
                        <li className="max-lg:border-b border-pink-200 max-lg:py-3">
                            <Link
                                href='mailto:admin@gmail.com'
                                className="hover:text-pink-500 text-gray-500 text-[15px]  flex items-center justify-center"
                            >
                                <svg viewBox="0 0 24 24" className='w-6' fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                    <g id="SVGRepo_iconCarrier">
                                        {" "}
                                        <path
                                            d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7"
                                            stroke="#ea001e"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />{" "}
                                        <rect
                                            x={3}
                                            y={5}
                                            width={18}
                                            height={14}
                                            rx={2}
                                            stroke="#ea001e"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                        />{" "}
                                    </g>
                                </svg>
                                admin@gmail.com
                            </Link>
                        </li>
                    </ul>
                    <div className="icons flex items-center justify-center gap-3">
                        <Link href={'/'} className='bg-white w-10 h-10 rounded-full flex items-center justify-center '>
                            <svg
                                className='w-6'
                                viewBox="-5 0 20 20"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                fill="#000000"
                            >
                                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                <g id="SVGRepo_iconCarrier">
                                    {" "}
                                    <title>facebook [#176]</title> <desc>Created with Sketch.</desc>{" "}
                                    <defs> </defs>{" "}
                                    <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                        {" "}
                                        <g
                                            id="Dribbble-Light-Preview"
                                            transform="translate(-385.000000, -7399.000000)"
                                            fill="#ea001e"
                                        >
                                            {" "}
                                            <g id="icons" transform="translate(56.000000, 160.000000)">
                                                {" "}
                                                <path
                                                    d="M335.821282,7259 L335.821282,7250 L338.553693,7250 L339,7246 L335.821282,7246 L335.821282,7244.052 C335.821282,7243.022 335.847593,7242 337.286884,7242 L338.744689,7242 L338.744689,7239.14 C338.744689,7239.097 337.492497,7239 336.225687,7239 C333.580004,7239 331.923407,7240.657 331.923407,7243.7 L331.923407,7246 L329,7246 L329,7250 L331.923407,7250 L331.923407,7259 L335.821282,7259 Z"
                                                    id="facebook-[#176]"
                                                >
                                                    {" "}
                                                </path>{" "}
                                            </g>{" "}
                                        </g>{" "}
                                    </g>{" "}
                                </g>
                            </svg>
                        </Link>
                        <Link href={'/'} className='bg-white w-10 h-10 rounded-full flex items-center justify-center '>
                            <svg
                                className='w-6'
                                viewBox="0 -2 20 20"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                fill="#000000"
                            >
                                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                <g id="SVGRepo_iconCarrier">
                                    {" "}
                                    <title>twitter [#154]</title> <desc>Created with Sketch.</desc>{" "}
                                    <defs> </defs>{" "}
                                    <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                        {" "}
                                        <g
                                            id="Dribbble-Light-Preview"
                                            transform="translate(-60.000000, -7521.000000)"
                                            fill="#ea001e"
                                        >
                                            {" "}
                                            <g id="icons" transform="translate(56.000000, 160.000000)">
                                                {" "}
                                                <path
                                                    d="M10.29,7377 C17.837,7377 21.965,7370.84365 21.965,7365.50546 C21.965,7365.33021 21.965,7365.15595 21.953,7364.98267 C22.756,7364.41163 23.449,7363.70276 24,7362.8915 C23.252,7363.21837 22.457,7363.433 21.644,7363.52751 C22.5,7363.02244 23.141,7362.2289 23.448,7361.2926 C22.642,7361.76321 21.761,7362.095 20.842,7362.27321 C19.288,7360.64674 16.689,7360.56798 15.036,7362.09796 C13.971,7363.08447 13.518,7364.55538 13.849,7365.95835 C10.55,7365.79492 7.476,7364.261 5.392,7361.73762 C4.303,7363.58363 4.86,7365.94457 6.663,7367.12996 C6.01,7367.11125 5.371,7366.93797 4.8,7366.62489 L4.8,7366.67608 C4.801,7368.5989 6.178,7370.2549 8.092,7370.63591 C7.488,7370.79836 6.854,7370.82199 6.24,7370.70483 C6.777,7372.35099 8.318,7373.47829 10.073,7373.51078 C8.62,7374.63513 6.825,7375.24554 4.977,7375.24358 C4.651,7375.24259 4.325,7375.22388 4,7375.18549 C5.877,7376.37088 8.06,7377 10.29,7376.99705"
                                                    id="twitter-[#154]"
                                                >
                                                    {" "}
                                                </path>{" "}
                                            </g>{" "}
                                        </g>{" "}
                                    </g>{" "}
                                </g>
                            </svg>
                        </Link>
                        <Link href={'/'} className='bg-white w-10 h-10 rounded-full flex items-center justify-center '>
                            <svg viewBox="0 0 24 24" className='w-6' fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                <g id="SVGRepo_iconCarrier">
                                    {" "}
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                                        fill="#ea001e"
                                    />{" "}
                                    <path
                                        d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
                                        fill="#ea001e"
                                    />{" "}
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
                                        fill="#ea001e"
                                    />{" "}
                                </g>
                            </svg>
                        </Link>
                        <Link href={'/'} className='bg-white w-10 h-10 rounded-full flex items-center justify-center '>
                            <svg
                                fill="#ea001e"
                                version="1.1"
                                className='w-6'
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 512 512"
                                xmlSpace="preserve"
                                stroke="#ea001e"
                            >
                                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                <g id="SVGRepo_iconCarrier">
                                    {" "}
                                    <g id="7935ec95c421cee6d86eb22ecd125aef">
                                        {" "}
                                        <path
                                            style={{ display: "inline", fillRule: "evenodd", clipRule: "evenodd" }}
                                            d="M116.504,500.219V170.654H6.975v329.564H116.504 L116.504,500.219z M61.751,125.674c38.183,0,61.968-25.328,61.968-56.953c-0.722-32.328-23.785-56.941-61.252-56.941 C24.994,11.781,0.5,36.394,0.5,68.722c0,31.625,23.772,56.953,60.53,56.953H61.751L61.751,125.674z M177.124,500.219 c0,0,1.437-298.643,0-329.564H286.67v47.794h-0.727c14.404-22.49,40.354-55.533,99.44-55.533 c72.085,0,126.116,47.103,126.116,148.333v188.971H401.971V323.912c0-44.301-15.848-74.531-55.497-74.531 c-30.254,0-48.284,20.38-56.202,40.08c-2.897,7.012-3.602,16.861-3.602,26.711v184.047H177.124L177.124,500.219z"
                                        >
                                            {" "}
                                        </path>{" "}
                                    </g>{" "}
                                </g>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
            <section className="flex flex-wrap items-center gap-4 relative py-2 px-4 sm:px-20 min-h-[80px]">
                <Link href="/" className="">
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
                <ul className="flex space-x-8 lg:absolute lg:top-2/4 lg:left-2/4 lg:-translate-x-1/2 lg:-translate-y-1/2 max-lg:hidden">
                    <li>
                        <Link
                            href="/"
                            className="hover:text-pink-500 text-gray-800 text-[15px]"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/about"
                            className="hover:text-pink-500 text-gray-800 text-[15px]"
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/service"
                            className="hover:text-pink-500 text-gray-800 text-[15px]"
                        >
                            Service
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/blog"
                            className="hover:text-pink-500 text-gray-800 text-[15px]"
                        >
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/contact"
                            className="hover:text-pink-500 text-gray-800 text-[15px]"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
                <div className="hidden lg:flex  items-center ml-auto">
                    {session ?
                        <Account /> :
                        <Link href={'/sign-in'} className="px-4 py-2 text-[15px] rounded-full capitalize text-white bg-color_red hover:bg-red-700 border outline-none">
                            get started
                        </Link>
                    }
                </div>
                <div className="flex ml-auto lg:hidden">
                    <BtnListSidebar />
                </div>
            </section>
        </header>
    );
}

export default memo(Header);
