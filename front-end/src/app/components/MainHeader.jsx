import React from 'react';
import Form from './Form';

const MainHeader = () => {
    return (
        <nav className='bg-Light relative rounded flex' style={{
            backgroundImage: 'url(image/carousel-1.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: `calc(100vh - 130px)`,
        }}>
            <div className="h-full w-[85%] m-auto relative">
                <div className="flex justify-around pt-12 gap-2">
                    <Form />
                    <div className=" flex-col items-start justify-start gap-3 hidden lg:flex">
                        <h2 className='text-6xl font-bold text-white'>Get 15% off your rental <br /> Plan your trip now</h2>
                        <p className='text-white text-lg font-semibold'>Treat yourself in USA</p>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default MainHeader;
