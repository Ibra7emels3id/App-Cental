import React from 'react';
import Form from './Form';
import TextMainHeader from './TextMainHeader';

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
                    <TextMainHeader />
                </div>
            </div>
        </nav>
    );
}

export default MainHeader;
