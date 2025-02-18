import React from 'react';

const CentalProcess = () => {
    return (
        <div style={{
            backgroundImage: 'url(/image/fact-bg.jpg)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
        }} className="bg-[#F7F7F7] font-[sans-serif] relative bg-Process">
            <div className="max-w-7xl mx-auto py-16 px-4 z-[1000] relative">
                <h2 className="text-white text-4xl md:text-6xl gap-3 font-extrabold text-center flex items-center justify-center">
                    Cental<p className='text-color_red '>Process</p>
                </h2>
                <p className='text-center my-10 text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi accusantium at cum harum, excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam quia distinctio,</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-lg:max-w-md mx-auto">
                    <div className=" relative  min-h-[200px]">
                        <div className="p-8 bg-background_light rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                            <h3 className="text-white text-2xl font-semibold mb-3">
                                Come In Contact
                            </h3>
                            <p className="text-gray-100 text-sm leading-relaxed">
                                Tailor our product to suit your needs Tailor our product to suit
                                your needs.
                            </p>
                            <p className=' absolute bottom-3 right-12 border border-white bg-background_light w-16 h-16 z-50 flex items-center justify-center text-white  rounded-full text-2xl'>
                                01.
                            </p>
                        </div>
                    </div>
                    <div className=" relative min-h-[200px]">
                        <div className="p-8 bg-background_light rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                            <h3 className="text-white text-2xl font-semibold mb-3">Choose A Car</h3>
                            <p className="text-gray-100 text-sm leading-relaxed">
                                Your data is protected by the latest security measures.
                            </p>
                            <p className=' absolute bottom-3 right-12 border border-white bg-background_light w-16 h-16 z-50 flex items-center justify-center text-white  rounded-full text-2xl'>
                                02.
                            </p>
                        </div>
                    </div>
                    <div className=" relative min-h-[200px]">
                        <div className="p-8 bg-background_light rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                            <h3 className="text-white text-2xl font-semibold mb-3">
                                Enjoy Driving
                            </h3>
                            <p className="text-gray-100 text-sm leading-relaxed">
                                Experience blazing-fast performance with our product.
                            </p>
                            <p className=' absolute bottom-3 right-12 border border-white bg-background_light w-16 h-16 z-50 flex items-center justify-center text-white  rounded-full text-2xl'>
                                03.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default CentalProcess;
