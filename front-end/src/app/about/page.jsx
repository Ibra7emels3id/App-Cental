import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../components/About';
import StatsSection from '../components/StatsSection';
import Features from '../components/Features';
import CentalProcess from '../components/CentalProcess';
import Team from '../components/Team';
import Contact from '../components/Contact';

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
                    <h2 className="text-white text-3xl md:text-6xl font-bold">About Us</h2>
                    <p className="text-white text-lg">
                        Home <span className='text-zinc-500 font-bold'>/</span> About
                    </p>
                </div>
            </div>
            <About />
            <StatsSection />
            <Features />
            <CentalProcess />
            <Team />
            <Contact />
            <Footer />
        </>
    );
}

export default Page;
