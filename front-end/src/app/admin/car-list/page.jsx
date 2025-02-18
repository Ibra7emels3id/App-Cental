import React from 'react';
import Navbar from '../_components/Navbar';
import Header from '../_components/Header';
import FormTable from './_components/FormTable';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

const Page = async () => {
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
                            <FormTable />
                            <div></div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Page;
