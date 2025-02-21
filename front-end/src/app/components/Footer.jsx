import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-background_dark  py-12 px-8 font-sans tracking-wide">
            <div className="max-w-7xl m-auto grid  max-sm:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-5 lg:gap-14 max-lg:gap-8">
                <div className="lg:col-span-2 max-w-md">
                    <h4 className="text-3xl font-bold mb-6 text-white">About Us</h4>
                    <p className="text-gray-600 text-[15px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida,
                        mi eu pulvinar cursus, sem elit interdum mauris.
                    </p>
                    <div className="bg-white flex px-4 py-3 rounded-md text-left mt-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 192.904 192.904"
                            width="16px"
                            className="fill-gray-500 mr-3"
                        >
                            <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
                        </svg>
                        <input
                            type="email"
                            placeholder="Search..."
                            className="w-full outline-none bg-white text-gray-600 text-[15px]"
                        />
                    </div>
                </div>
                <div>
                    <h4 className="text-lg font-bold mb-6 text-white">Services</h4>
                    <ul className="space-y-4">
                        <li>
                            <a
                                href="javascript:void(0)"
                                className="text-gray-600 hover:text-blue-600 text-[15px]"
                            >
                                Web Development
                            </a>
                        </li>
                        <li>
                            <a
                                href="javascript:void(0)"
                                className="text-gray-600 hover:text-blue-600 text-[15px]"
                            >
                                Mobile App Development
                            </a>
                        </li>
                        <li>
                            <a
                                href="javascript:void(0)"
                                className="text-gray-600 hover:text-blue-600 text-[15px]"
                            >
                                UI/UX Design
                            </a>
                        </li>
                        <li>
                            <a
                                href="javascript:void(0)"
                                className="text-gray-600 hover:text-blue-600 text-[15px]"
                            >
                                Digital Marketing
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-bold mb-6 text-white">Resources</h4>
                    <ul className="space-y-4">
                        <li>
                            <a
                                href="javascript:void(0)"
                                className="text-gray-600 hover:text-blue-600 text-[15px]"
                            >
                                Webinars
                            </a>
                        </li>
                        <li>
                            <a
                                href="javascript:void(0)"
                                className="text-gray-600 hover:text-blue-600 text-[15px]"
                            >
                                Ebooks
                            </a>
                        </li>
                        <li>
                            <a
                                href="javascript:void(0)"
                                className="text-gray-600 hover:text-blue-600 text-[15px]"
                            >
                                Templates
                            </a>
                        </li>
                        <li>
                            <a
                                href="javascript:void(0)"
                                className="text-gray-600 hover:text-blue-600 text-[15px]"
                            >
                                Tutorials
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-bold mb-6 text-white">About Us</h4>
                    <ul className="space-y-4">
                        <li>
                            <a
                                href="javascript:void(0)"
                                className="text-gray-600 hover:text-blue-600 text-[15px]"
                            >
                                Our Story
                            </a>
                        </li>
                        <li>
                            <a
                                href="javascript:void(0)"
                                className="text-gray-600 hover:text-blue-600 text-[15px]"
                            >
                                Mission and Values
                            </a>
                        </li>
                        <li>
                            <a
                                href="javascript:void(0)"
                                className="text-gray-600 hover:text-blue-600 text-[15px]"
                            >
                                Team
                            </a>
                        </li>
                        <li>
                            <a
                                href="javascript:void(0)"
                                className="text-gray-600 hover:text-blue-600 text-[15px]"
                            >
                                Testimonials
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="lg:flex lg:item-center  w-full mt-7 border-t-2 max-w-7xl m-auto">
                <ul className="flex flex-wrap gap-4 mt-10">
                    <li>
                        <a
                            href="javascript:void(0)"
                            className="text-gray-300 hover:text-white text-sm hover:underline"
                        >
                            Terms of Service
                        </a>
                    </li>
                    <li>
                        <a
                            href="javascript:void(0)"
                            className="text-gray-300 hover:text-white text-sm hover:underline"
                        >
                            Privacy Policy
                        </a>
                    </li>
                    <li>
                        <a
                            href="javascript:void(0)"
                            className="text-gray-300 hover:text-white text-sm hover:underline"
                        >
                            Security
                        </a>
                    </li>
                </ul>
                <p className="text-sm text-gray-300 ml-auto max-lg:mt-6 mt-10">
                    © ReadymadeUI. All rights reserved.
                </p>
            </div>
        </footer>

    );
}

export default Footer;
