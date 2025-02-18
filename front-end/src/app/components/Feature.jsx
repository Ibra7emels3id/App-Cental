import React from 'react';

const Feature = () => {
    return (
        <div className=' py-16 bg-[#eee] px-0.5'>
            <div className="max-w-7xl mx-auto font-[sans-serif] ">
                <div className="text-center mb-16 md:w-9/12 m-auto ">
                    <h2 className="text-gray-800 sm:text-4xl text-2xl font-extrabold text-center mb-3">
                        Cental <span className='text-color_red'>Services</span>
                    </h2>
                    <p className='text-sm text-zinc-500'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi accusantium at cum harum, excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam quia distinctio,
                    </p>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
                    <div className="flex flex-col items-center justify-center text-center bg-white p-5 rounded-2xl ">
                        <div className="flex items-center justify-center bg-color_red w-[100px] h-[100px] rounded-full">
                            <svg viewBox="0 0 24 24" className='w-16' fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                <g id="SVGRepo_iconCarrier">
                                    {" "}
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M17.3545 22.2323C15.3344 21.7262 11.1989 20.2993 7.44976 16.5502C3.70065 12.8011 2.2738 8.66559 1.76767 6.6455C1.47681 5.48459 2.00058 4.36434 2.88869 3.72997L5.21694 2.06693C6.57922 1.09388 8.47432 1.42407 9.42724 2.80051L10.893 4.91776C11.5152 5.8165 11.3006 7.0483 10.4111 7.68365L9.24234 8.51849C9.41923 9.1951 9.96939 10.5846 11.6924 12.3076C13.4154 14.0306 14.8049 14.5807 15.4815 14.7576L16.3163 13.5888C16.9517 12.6994 18.1835 12.4847 19.0822 13.1069L21.1995 14.5727C22.5759 15.5257 22.9061 17.4207 21.933 18.783L20.27 21.1113C19.6356 21.9994 18.5154 22.5232 17.3545 22.2323ZM8.86397 15.136C12.2734 18.5454 16.0358 19.8401 17.8405 20.2923C18.1043 20.3583 18.4232 20.2558 18.6425 19.9488L20.3056 17.6205C20.6299 17.1665 20.5199 16.5348 20.061 16.2171L17.9438 14.7513L17.0479 16.0056C16.6818 16.5182 16.0047 16.9202 15.2163 16.7501C14.2323 16.5378 12.4133 15.8569 10.2782 13.7218C8.1431 11.5867 7.46219 9.7677 7.24987 8.7837C7.07977 7.9953 7.48181 7.31821 7.99439 6.95208L9.24864 6.05618L7.78285 3.93893C7.46521 3.48011 6.83351 3.37005 6.37942 3.6944L4.05117 5.35744C3.74413 5.57675 3.64162 5.89565 3.70771 6.15943C4.15989 7.96418 5.45459 11.7266 8.86397 15.136Z"
                                        fill="#ffff"
                                    />{" "}
                                </g>
                            </svg>
                        </div>
                        <h3 className="text-gray-800 text-2xl font-semibold my-3">
                        Phone Reservation
                        </h3>
                        <p className="text-gray-600 text-sm">
                            Tailor our product to suit your needs Tailor our product to suit your
                            needs.
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center bg-white p-5 rounded-2xl text-center">
                        <div className="flex items-center justify-center bg-color_red w-[100px] h-[100px] rounded-full">
                            <svg
                                viewBox="0 -4 20 20"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                fill="#000000"
                                className='w-16'
                            >
                                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                <g id="SVGRepo_iconCarrier">
                                    {" "}
                                    <title>money_round [#ffffff]</title> <desc>Created with Sketch.</desc>{" "}
                                    <defs> </defs>{" "}
                                    <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                        {" "}
                                        <g
                                            id="Dribbble-Light-Preview"
                                            transform="translate(-380.000000, -2923.000000)"
                                            fill="#ffffff"
                                        >
                                            {" "}
                                            <g id="icons" transform="translate(56.000000, 160.000000)">
                                                {" "}
                                                <path
                                                    d="M332,2769 C332,2767.895 332.895,2767 334,2767 C335.105,2767 336,2767.895 336,2769 C336,2770.105 335.105,2771 334,2771 C332.895,2771 332,2770.105 332,2769 L332,2769 Z M340.343,2765 C341.972,2765 342,2765.384 342,2766.657 L340.343,2765 Z M340.343,2773 L342,2771.343 C342,2772.97 341.62,2773 340.343,2773 L340.343,2773 Z M326,2771.343 L327.657,2773 C326.03,2773 326,2772.62 326,2771.343 L326,2771.343 Z M327.657,2765 L326,2766.657 C326,2765.028 326.384,2765 327.657,2765 L327.657,2765 Z M337.515,2765 L341.515,2769 L337.515,2773 L330.485,2773 L326.485,2769 L330.485,2765 L337.515,2765 Z M342,2763 L326,2763 C324.895,2763 324,2763.895 324,2765 L324,2773 C324,2774.105 324.895,2775 326,2775 L342,2775 C343.105,2775 344,2774.105 344,2773 L344,2765 C344,2763.895 343.105,2763 342,2763 L342,2763 Z"
                                                    id="money_round-[#ffffff]"
                                                >
                                                    {" "}
                                                </path>{" "}
                                            </g>{" "}
                                        </g>{" "}
                                    </g>{" "}
                                </g>
                            </svg>
                        </div>
                        <h3 className="text-gray-800 text-2xl  font-bold my-3">Special Rates</h3>
                        <p className="text-gray-600 text-sm">
                            Your data is protected by the latest security measures.
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center bg-white p-5 rounded-2xl">
                        <div className="flex items-center justify-center bg-color_red rounded-full w-[100px] h-[100px]">
                            <svg
                                className='w-16'
                                version="1.1"
                                id="_x32_"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 512 512"
                                xmlSpace="preserve"
                                fill="#000000"
                            >
                                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                <g id="SVGRepo_iconCarrier">
                                    {" "}
                                    <style
                                        type="text/css"
                                        dangerouslySetInnerHTML={{ __html: " .st0{fill:#ffffff;} " }}
                                    />{" "}
                                    <g>
                                        {" "}
                                        <polygon
                                            className="st0"
                                            points="412.061,152.986 373.039,152.986 447.993,359.014 512,359.014 "
                                        />{" "}
                                        <polygon
                                            className="st0"
                                            points="99.939,152.986 0,359.014 64.006,359.014 138.961,152.986 "
                                        />{" "}
                                        <path
                                            className="st0"
                                            d="M265.767,152.986l0.367,12.226H245.86l0.373-12.226h-77.996l-56.201,206.027h127.943l0.911-29.861h30.222 l0.906,29.861h128.019l-56.231-206.027H265.767z M245.15,188.742h21.7l0.823,27.121h-23.346L245.15,188.742z M242.238,284.627 l1.13-37.223h25.263l1.13,37.223H242.238z"
                                        />{" "}
                                    </g>{" "}
                                </g>
                            </svg>

                        </div>
                        <h3 className="text-gray-800 text-2xl font-semibold my-3">One Way Rental</h3>
                        <p className="text-gray-600 text-sm">
                            Tailor our product to suit your needs 24/7 customer support for all your
                            inquiries.
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center bg-white p-5 rounded-2xl">
                        <div className="flex items-center justify-center bg-color_red rounded-full w-[100px] h-[100px] ">
                            <svg
                                fill="#ffffff"
                                className="w-16"
                                viewBox="0 0 256 256"
                                id="Layer_1"
                                version="1.1"
                                xmlSpace="preserve"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                stroke="#ffffff"
                            >
                                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                <g id="SVGRepo_iconCarrier">
                                    {" "}
                                    <g>
                                        {" "}
                                        <path d="M244.3,89.9c-8.2-44.8-57.1-75.4-98.9-81.4c-3.3-0.5-6.7-0.8-10.3-0.9c-4.7-0.3-9.4-0.3-13.9,0c-3.8,0.1-7.2,0.4-10.5,0.9 c-41.8,6-90.7,36.6-98.9,81.4l-1.1,6l6.1-0.3c24.5-1.2,48.4,4.5,65.6,15.5l2,1.3l2.3-0.8c12.4-4.6,27.2-5.8,34.9-6.2l1.7-0.1 c0.6,0,6.9,0,7.8-0.1l3.5,0.1c9.4,0.4,23.1,1.8,34.8,6.2l2.3,0.8l2-1.3c17.2-11,41.2-16.6,65.6-15.5l6.1,0.3L244.3,89.9z M232.8,85.7c-23.3,0-45.1,5.5-62.3,15.9c-12.4-4.2-26-5.5-35.5-6l-3.5-0.1c-1.2,0-8.1,0-8.6,0l-1.8,0.1c-9.5,0.4-23.2,1.8-35.5,6 c-17.2-10.3-39-15.9-62.3-15.9c-0.2,0-0.4,0-0.5,0C33.1,48.7,75.5,23.4,112,18.2c2.9-0.4,6-0.7,9.6-0.8c4.2-0.3,8.5-0.3,12.9,0 c3.4,0.1,6.5,0.4,9.4,0.8c36.6,5.3,78.9,30.5,89.4,67.6C233.2,85.7,233,85.7,232.8,85.7z" />{" "}
                                        <path d="M129.6,177.5c-13.1-4.6-21.2-8-22.4-17.4c-0.9-6.8,4.2-14,11.4-16.2c7.5-2.2,17.6-1.3,27.1,2.5c2.5,1,5.3-0.2,6.3-2.7 c1-2.5-0.2-5.3-2.7-6.3c-5.5-2.2-11.2-3.6-16.7-4.1v-9.6c0-2.7-2.2-4.9-4.9-4.9s-4.9,2.2-4.9,4.9v9.6c-2.4,0.3-4.8,0.7-7,1.3 c-11.8,3.5-19.8,15.3-18.3,26.8c2.1,15.9,16.3,20.9,28.9,25.3c6.9,2.4,13.3,4.7,17.2,8.4c3.5,3.3,5.3,7.5,5.3,11.9 c0,4.3-2,8.5-5.5,11.6c-3.9,3.5-9.2,5.5-16,6c-5.1,0.3-11-0.3-18.2-1.6c-1.7-0.3-3.6-0.7-5.2-1.2c-2.6-0.8-5.3,0.7-6.1,3.3 c-0.8,2.6,0.7,5.3,3.3,6.1c2.1,0.6,4.3,1.1,6.2,1.4c5.8,1.1,10.7,1.6,15.3,1.8v9.4c0,2.7,2.2,4.9,4.9,4.9s4.9-2.2,4.9-4.9v-10 c7-1.2,12.8-3.7,17.4-7.9c5.6-5,8.7-11.6,8.8-18.8c0.1-7.2-2.9-13.9-8.3-19C145,182.9,137.2,180.2,129.6,177.5z" />{" "}
                                    </g>{" "}
                                </g>
                            </svg>
                        </div>
                        <h3 className="text-gray-800 text-2xl font-semibold my-3">Life Insurance</h3>
                        <p className="text-gray-600 text-sm">
                            Experience blazing-fast performance with our product.
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center bg-white p-5 rounded-2xl">
                        <div className="flex items-center justify-center bg-color_red w-[100px] h-[100px] rounded-full">
                            <svg
                                viewBox="0 0 24 24"
                                id="company-small-24px"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#ffffff"
                                stroke="#ffffff"
                                className='w-16'
                            >
                                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                <g id="SVGRepo_iconCarrier">
                                    {" "}
                                    <path
                                        id="company-small-24px-2"
                                        data-name="company-small-24px"
                                        d="M16,4H2A2.006,2.006,0,0,0,0,6V24H18V6A2.006,2.006,0,0,0,16,4ZM8,22V18h2v4Zm8,0H12V17a.945.945,0,0,0-1-1H7a.945.945,0,0,0-1,1v5H2V6H16ZM8,10H6V8H8Zm4,0H10V8h2ZM8,14H6V12H8Zm4,0H10V12h2Z"
                                        transform="translate(3 -2)"
                                    />{" "}
                                    <rect
                                        id="Retângulo_222"
                                        data-name="Retângulo 222"
                                        width={24}
                                        height={24}
                                        fill="none"
                                        opacity={0}
                                    />{" "}
                                </g>
                            </svg>

                        </div>
                        <h3 className="text-gray-800 text-2xl font-semibold my-3">City to City</h3>
                        <p className="text-gray-600 text-sm">
                            Tailor our product to suit your needs Expand your reach with our global
                            network.
                        </p>
                    </div>
                    <div className=" flex flex-col items-center justify-center text-center bg-white p-5 rounded-2xl">
                        <div className="flex items-center justify-center bg-color_red rounded-full w-[100px] h-[100px] ">
                            <svg viewBox="0 0 24 24" className='w-16' fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                <g id="SVGRepo_iconCarrier">
                                    {" "}
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M5.27097 8.214C6.02074 6.312 6.92262 5 8.96427 5H14.4369C16.4766 5 17.3795 6.312 18.1302 8.214L18.88 10.249C19.4387 10.2559 19.9519 10.5661 20.2284 11.064C20.3911 11.3476 20.4763 11.6709 20.4751 12V14.624C20.4824 15.2367 20.1808 15.8098 19.6776 16.14C19.4382 16.2929 19.162 16.3739 18.88 16.374H4.52022C4.23827 16.3739 3.96199 16.2929 3.72267 16.14C3.21939 15.8098 2.91786 15.2367 2.92512 14.624V12C2.92406 11.6713 3.00927 11.3483 3.17179 11.065C3.44833 10.5671 3.96155 10.2569 4.52022 10.25L5.27097 8.214Z"
                                        stroke="#ffffff"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />{" "}
                                    <path
                                        d="M6.86629 16.375C6.86629 15.9608 6.53051 15.625 6.11629 15.625C5.70208 15.625 5.36629 15.9608 5.36629 16.375H6.86629ZM6.11629 17.688H5.36629C5.36629 17.6958 5.36641 17.7036 5.36666 17.7114L6.11629 17.688ZM4.91899 19L4.89219 19.7495C4.90986 19.7502 4.92754 19.7502 4.9452 19.7496L4.91899 19ZM3.72267 17.687L4.47228 17.711C4.47254 17.703 4.47267 17.695 4.47267 17.687L3.72267 17.687ZM4.47267 16.14C4.47267 15.7258 4.13688 15.39 3.72267 15.39C3.30845 15.39 2.97267 15.7258 2.97267 16.14H4.47267ZM4.52022 9.49902C4.106 9.49902 3.77022 9.83481 3.77022 10.249C3.77022 10.6632 4.106 10.999 4.52022 10.999V9.49902ZM18.88 10.999C19.2942 10.999 19.63 10.6632 19.63 10.249C19.63 9.83481 19.2942 9.49902 18.88 9.49902V10.999ZM18.0349 16.374C18.0349 15.9598 17.6991 15.624 17.2849 15.624C16.8707 15.624 16.5349 15.9598 16.5349 16.374H18.0349ZM17.2849 17.687L18.0335 17.7336C18.0344 17.7181 18.0349 17.7026 18.0349 17.687H17.2849ZM17.8602 18.8173L18.2561 18.1803L18.2561 18.1803L17.8602 18.8173ZM19.1033 18.8173L18.7074 18.1803L18.7074 18.1803L19.1033 18.8173ZM19.6785 17.687H18.9285C18.9285 17.7026 18.929 17.7181 18.93 17.7336L19.6785 17.687ZM20.4285 16.14C20.4285 15.7258 20.0928 15.39 19.6785 15.39C19.2643 15.39 18.9285 15.7258 18.9285 16.14H20.4285ZM5.85012 12.75C5.4359 12.75 5.10012 13.0858 5.10012 13.5C5.10012 13.9142 5.4359 14.25 5.85012 14.25V12.75ZM6.82512 14.25C7.23933 14.25 7.57512 13.9142 7.57512 13.5C7.57512 13.0858 7.23933 12.75 6.82512 12.75V14.25ZM16.5751 12.75C16.1609 12.75 15.8251 13.0858 15.8251 13.5C15.8251 13.9142 16.1609 14.25 16.5751 14.25V12.75ZM17.5501 14.25C17.9643 14.25 18.3001 13.9142 18.3001 13.5C18.3001 13.0858 17.9643 12.75 17.5501 12.75V14.25ZM5.36629 16.375V17.688H6.86629V16.375H5.36629ZM5.36666 17.7114C5.37622 18.0175 5.14582 18.2416 4.89278 18.2505L4.9452 19.7496C6.05927 19.7106 6.90017 18.7608 6.86593 17.6646L5.36666 17.7114ZM4.94579 18.2505C4.69273 18.2415 4.46248 18.0171 4.47228 17.711L2.97305 17.663C2.93793 18.7592 3.77813 19.7097 4.89219 19.7495L4.94579 18.2505ZM4.47267 17.687V16.14H2.97267V17.687H4.47267ZM4.52022 10.999H18.88V9.49902H4.52022V10.999ZM16.5349 16.374V17.687H18.0349V16.374H16.5349ZM16.5364 17.6404C16.4912 18.3667 16.8425 19.0678 17.4642 19.4543L18.2561 18.1803C18.1138 18.0919 18.0217 17.9219 18.0335 17.7336L16.5364 17.6404ZM17.4642 19.4543C18.0887 19.8424 18.8747 19.8424 19.4992 19.4543L18.7074 18.1803C18.5678 18.2671 18.3957 18.2671 18.2561 18.1803L17.4642 19.4543ZM19.4992 19.4543C20.121 19.0678 20.4723 18.3667 20.4271 17.6404L18.93 17.7336C18.9417 17.9219 18.8497 18.0919 18.7074 18.1803L19.4992 19.4543ZM20.4285 17.687V16.14H18.9285V17.687H20.4285ZM5.85012 14.25H6.82512V12.75H5.85012V14.25ZM16.5751 14.25H17.5501V12.75H16.5751V14.25Z"
                                        fill="#ffffff"
                                    />{" "}
                                </g>
                            </svg>

                        </div>
                        <h3 className="text-gray-800 text-2xl font-semibold my-3">
                            Free Rides
                        </h3>
                        <p className="text-gray-600 text-sm">
                            Tailor our product to suit your needs Seamless communication for your
                            team.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Feature;
