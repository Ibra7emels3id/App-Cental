import React from 'react';
import Header from '../components/Header';
import TableOrder from './_components/TableOrder';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

const Page = async () => {
    const session = await getServerSession(authOptions);

    // Check User
    if (!session) return redirect('/');


    return (
        <>
            <Header />
            <div className="flex flex-col w-11/12 m-auto mt-10 ">
                <h2 className='text-4xl font-bold text-start'>Order.</h2>
                <TableOrder />
            </div>
        </>
    );
}

export default Page;
