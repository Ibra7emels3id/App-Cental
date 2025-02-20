import React from 'react';
import Navbar from './_components/Navbar';
import Header from './_components/Header';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import Table from './_components/Table';

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
                        <Table />
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Page;
