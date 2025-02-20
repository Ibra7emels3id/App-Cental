import React from 'react';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import FormData from './_components/FormData';
import Navbar from '../../_components/Navbar';
import Header from '../../_components/Header';

const Page = async ({params}) => {
    const {postId}= params 
    const session = await getServerSession(authOptions);

    // Check User
    if (!session) return redirect('/');


    return (
        <div className="relative bg-[#f7f6f9] h-full min-h-screen font-[sans-serif]">
            <div className="flex items-start">
                <Navbar />
                <section className="main-content w-full px-8">
                    <Header />
                    {/*  */}
                    <div className="my-10 px-2">
                        <div className="">
                            <FormData id={postId} />
                            <div></div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Page;
