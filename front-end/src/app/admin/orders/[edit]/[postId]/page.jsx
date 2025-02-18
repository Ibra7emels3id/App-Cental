import Header from '@/app/admin/_components/Header';
import Navbar from '@/app/admin/_components/Navbar';
import React from 'react';
import FormEditOrder from './_components/FormEditOrder';

const Page = ({params}) => {
    const {postId} = params;
    return (
        <div className="relative bg-[#f7f6f9] h-full min-h-screen font-[sans-serif]">
            <div className="flex items-start">
                <Navbar />
                <section className="main-content w-full px-8">
                    <Header />
                    {/*  */}
                    <div className="my-10 px-2">
                        <div className="">
                            <FormEditOrder id={postId} />
                            <div></div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Page;
