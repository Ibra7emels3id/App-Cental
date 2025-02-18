import Image from 'next/image';
import React from 'react';

const Features = () => {
    return (
        <div className="bg-background_box">
            <div className='flex flex-col py-10 w-[95%] sm:w-[85%] lg:w-[95%] 2xl:w-[85%] m-auto'>
                <div className="flex flex-col items-center justify-center md:w-[60%] m-auto my-10 gap-3">
                    <h3 className='text-4xl font-extrabold '>Cental <span className='text-color_red'>Features</span></h3>
                    <p className='text-center text-zinc-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi accusantium at cum harum, excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam quia distinctio,</p>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
                    <div className="flex flex-col">
                        <div
                            className="animate-fade-up visible"
                            style={{ animationDelay: "0.1s" }}
                        >
                            <div className="flex items-center p-4  ">
                                <div className="relative flex items-center justify-center w-[120px] h-[50px] rounded-full bg-red-500">
                                    <div className="absolute inset-0 w-full h-full rounded-full bg-red-500 opacity-50 animate-wave-expand"></div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 576 512"
                                        fill="currentColor"
                                        className="w-8 h-8 text-background_dark relative"
                                    >
                                        <path d="M552 64h-88V56c0-13.3-10.7-24-24-24H136c-13.3 0-24 10.7-24 24v8H24C10.7 64 0 74.7 0 88v56c0 66.5 50.1 121.3 114.7 127.2C132.9 318.7 164.3 343 200 350.8V416h-24c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h224c13.3 0 24-10.7 24-24v-16c0-13.3-10.7-24-24-24h-24v-65.2c35.7-7.8 67.1-32.1 85.3-79.6C525.9 265.3 576 210.5 576 144V88c0-13.3-10.7-24-24-24zM48 144v-32h64v97.9C79.8 202.2 48 175.6 48 144zm384 0v-32h64v32c0 31.6-31.8 58.2-64 65.9V144z" />
                                    </svg>
                                </div>
                                <div className="ml-4">
                                    <h5 className="text-lg font-semibold mb-2">First Class Services</h5>
                                    <p className="text-gray-600">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, in
                                        illum aperiam ullam magni eligendi?
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="animate-fade-up visible "
                            style={{ animationDelay: "0.1s" }}
                        >
                            <div className="flex items-center p-4 ">
                                <div className="relative flex items-center justify-center w-[120px] h-[50px] rounded-full bg-red-500">
                                    <div className="absolute inset-0 w-full h-full rounded-full bg-red-500 opacity-50 animate-wave-expand"></div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 576 512"
                                        fill="currentColor"
                                        className="w-8 h-8 text-background_dark relative"
                                    >
                                        <path d="M552 64h-88V56c0-13.3-10.7-24-24-24H136c-13.3 0-24 10.7-24 24v8H24C10.7 64 0 74.7 0 88v56c0 66.5 50.1 121.3 114.7 127.2C132.9 318.7 164.3 343 200 350.8V416h-24c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h224c13.3 0 24-10.7 24-24v-16c0-13.3-10.7-24-24-24h-24v-65.2c35.7-7.8 67.1-32.1 85.3-79.6C525.9 265.3 576 210.5 576 144V88c0-13.3-10.7-24-24-24zM48 144v-32h64v97.9C79.8 202.2 48 175.6 48 144zm384 0v-32h64v32c0 31.6-31.8 58.2-64 65.9V144z" />
                                    </svg>
                                </div>
                                <div className="ml-4">
                                    <h5 className="text-lg font-semibold mb-2">First Class Services</h5>
                                    <p className="text-gray-600">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, in
                                        illum aperiam ullam magni eligendi?
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="img p-3 z-50">
                        <Image
                            width={300}
                            height={200}
                            src="/image/features-img.png"
                            alt="First Class Services"
                            className="object-cover w-full h-full rounded-xl  "
                        />
                    </div>
                    <div className="flex flex-col">
                        <div
                            className="animate-fade-up visible "
                            style={{ animationDelay: "0.1s" }}
                        >
                            <div className="flex items-center p-4 ">
                                <div className="ml-4">
                                    <h5 className="text-lg font-semibold mb-2">First Class Services</h5>
                                    <p className="text-gray-600">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, in
                                        illum aperiam ullam magni eligendi?
                                    </p>
                                </div>
                                <div className="relative flex items-center justify-center w-[120px] h-[50px] rounded-full bg-red-500">
                                    <div className="absolute inset-0 w-full h-full rounded-full bg-red-500 opacity-50 animate-wave-expand"></div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 576 512"
                                        fill="currentColor"
                                        className="w-8 h-8 text-background_dark relative"
                                    >
                                        <path d="M552 64h-88V56c0-13.3-10.7-24-24-24H136c-13.3 0-24 10.7-24 24v8H24C10.7 64 0 74.7 0 88v56c0 66.5 50.1 121.3 114.7 127.2C132.9 318.7 164.3 343 200 350.8V416h-24c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h224c13.3 0 24-10.7 24-24v-16c0-13.3-10.7-24-24-24h-24v-65.2c35.7-7.8 67.1-32.1 85.3-79.6C525.9 265.3 576 210.5 576 144V88c0-13.3-10.7-24-24-24zM48 144v-32h64v97.9C79.8 202.2 48 175.6 48 144zm384 0v-32h64v32c0 31.6-31.8 58.2-64 65.9V144z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div
                            className="animate-fade-up visible "
                            style={{ animationDelay: "0.1s" }}
                        >
                            <div className="flex items-center p-4 ">
                                <div className="ml-4">
                                    <h5 className="text-lg font-semibold mb-2">First Class Services</h5>
                                    <p className="text-gray-600">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, in
                                        illum aperiam ullam magni eligendi?
                                    </p>
                                </div>
                                <div className="relative flex items-center justify-center w-[120px] h-[50px] rounded-full bg-red-500">
                                    <div className="absolute inset-0 w-full h-full rounded-full bg-red-500 opacity-50 animate-wave-expand"></div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 576 512"
                                        fill="currentColor"
                                        className="w-8 h-8 text-background_dark relative"
                                    >
                                        <path d="M552 64h-88V56c0-13.3-10.7-24-24-24H136c-13.3 0-24 10.7-24 24v8H24C10.7 64 0 74.7 0 88v56c0 66.5 50.1 121.3 114.7 127.2C132.9 318.7 164.3 343 200 350.8V416h-24c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h224c13.3 0 24-10.7 24-24v-16c0-13.3-10.7-24-24-24h-24v-65.2c35.7-7.8 67.1-32.1 85.3-79.6C525.9 265.3 576 210.5 576 144V88c0-13.3-10.7-24-24-24zM48 144v-32h64v97.9C79.8 202.2 48 175.6 48 144zm384 0v-32h64v32c0 31.6-31.8 58.2-64 65.9V144z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Features;
