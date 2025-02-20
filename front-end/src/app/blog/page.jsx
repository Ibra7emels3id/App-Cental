import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StatsSection from '../components/StatsSection';
import Contact from '../components/Contact';
import BLog from '../components/BLog';

const Page = () => {
    return (
        <>
            <Header />
            <div style={{
                backgroundImage: 'url(/image/fact-bg.jpg)',
                backgroundSize: 'cover',
                height: '60vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }} className="flex flex-col relative  bg-Process">
                <div className="flex flex-col items-center justify-center z-50 gap-5">
                    <h2 className="text-white text-3xl md:text-6xl font-bold">Our Blog & News</h2>
                    <p className="text-white text-lg">
                        Home <span className='text-zinc-500 font-bold'>/</span> Blog & News
                    </p>
                </div>
            </div>
            <BLog />
            <StatsSection />
            <Contact />
            <Footer />
        </>
    );
}

export default Page;
