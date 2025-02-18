import React from 'react';

const Contact = () => {
    return (
        <div style={{
            backgroundImage: 'url(/image/banner-1.jpg)',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: '600px',
            display: 'flex',
        }} className="font-[sans-serif] relative bg-contact md:w-[87%] m-auto my-5 rounded-3xl">
            <div className="relative overflow-hidden flex items-end justify-end w-full">
                <div className="w-full mx-auto py-16 px-4 sm:px-6 lg:py-32 lg:px-8 flex items-end justify-end">
                    <div className="relative z-10 flex flex-col items-end justify-end">
                        <p className='text-color_red text-4xl font-medium space-x-3'>Rent Your Car</p>
                        <h1 className="text-4xl tracking-tight leading-10 my-3 font-bold text-white sm:text-5xl sm:leading-none lg:text-7xl">
                            Interested in Renting?
                        </h1>
                        <p className="max-w-md text-lg text-gray-100 sm:text-xl mt-4 md:mt-6 md:max-w-3xl">
                            Elevate your culinary experience with our exclusive premium services.
                        </p>
                        <div className="mt-12 flex max-sm:flex-col sm:justify-center lg:justify-start gap-4">
                            <div className="rounded-md shadow">
                                <button className="w-full flex items-center justify-center px-8 py-3 text-base tracking-wide rounded-md text-white bg-background_light hover:bg-red-500 hover:text-white transition duration-150 ease-in-out">
                                    WatchApp
                                </button>
                            </div>
                            <div>
                                <button className="w-full flex items-center justify-center px-8 py-3 text-base tracking-wide rounded-md text-white bg-color_red hover:bg-background_light transition duration-150 ease-in-out">
                                    Contact Us
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Contact;
