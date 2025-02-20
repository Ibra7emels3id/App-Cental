import Image from 'next/image';
import React from 'react';

const About = () => {
    return (
        <div className="font-sans max-w-7xl max-md:max-w-md mx-auto px-1">
            <div className="grid md:grid-cols-2 items-center md:gap-8 gap-6">
                <div className="max-md:order-1 max-md:text-center">
                    <p className="text-4xl font-bold text-block mb-2">
                        Cental <span className="text-color_red"> About</span>
                    </p>
                    <p className="mt-4 text-base text-gray-600 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi accusantium at cum harum, excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam quia distinctio,
                    </p>
                    <div className="mt-8 flex w-full gap-3 items-center justify-center">
                        <div className="bg-background_box  border transition-al font-semibold text-center  w-full px-2 py-4">
                            <Image
                                width={70}
                                height={70}
                                src="/image/about-icon-1.png"
                                className=" mx-auto"
                                alt="instagram-logo"
                            />
                            <h4 className='text-2xl font-semibold my-3'>Our Vision</h4>
                            <p className='text-sm text-zinc-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="bg-background_box  border transition-al font-semibold text-center  w-full px-2 py-4">
                            <Image
                                width={70}
                                height={70}
                                src="/image/about-icon-2.png"
                                className=" mx-auto"
                                alt="instagram-logo"
                            />
                            <h4 className='text-2xl font-semibold my-3'>Our Mision</h4>
                            <p className='text-sm text-zinc-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <p className="mt-4 text-base text-gray-600 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi accusantium at cum harum, excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam quia distinctio,
                    </p>
                    <div className="mt-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
                            <img
                                src="https://readymadeui.com/google-logo.svg"
                                className="w-28 mx-auto"
                                alt="google-logo"
                            />
                            <img
                                src="https://readymadeui.com/facebook-logo.svg"
                                className="w-28 mx-auto"
                                alt="facebook-logo"
                            />
                            <img
                                src="https://readymadeui.com/linkedin-logo.svg"
                                className="w-28 mx-auto"
                                alt="linkedin-logo"
                            />
                            <img
                                src="https://readymadeui.com/pinterest-logo.svg"
                                className="w-28 mx-auto"
                                alt="pinterest-logo"
                            />
                        </div>
                    </div>
                </div>
                <div className="lg:h-[650px] md:h-[550px] flex items-center relative max-md:before:hidden before:absolute before:bg-color_red before:h-full before:w-3/4 before:right-0 before:z-0">
                    <Image
                        width={1200}
                        height={600}
                        src="https://readymadeui.com/photo.webp"
                        className="rounded-md lg:w-3/4 md:w-11/12  relative"
                        alt="Dining Experience"
                    />
                </div>
            </div>
        </div>

    );
}

export default About;
