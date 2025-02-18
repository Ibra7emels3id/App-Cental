import React from 'react';
import Header from '../components/Header';
import FormData from './_components/FormData';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';


const Page = async () => {
    const session = await getServerSession(authOptions);

    // check User
    if (session) {
        return redirect('/');
    }

    return (
        <>
            <Header />
            <div className="font-[sans-serif] bg-white max-w-4xl flex items-center mx-auto md:h-[80vh] p-4">
                <div className="grid md:grid-cols-3 items-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.5)] rounded-xl overflow-hidden">
                    <div className="max-md:order-1 flex flex-col justify-center md:space-y-16 space-y-8 max-md:mt-16 min-h-full bg-gradient-to-r from-background_dark to-background_light lg:px-8 px-4 py-4">
                        <div>
                            <h4 className="text-white text-lg">Create Your Account</h4>
                            <p className="text-[13px] text-gray-300 mt-3 leading-relaxed">
                                Welcome to our registration page! Get started by creating your
                                account.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-white text-lg">Simple &amp; Secure Registration</h4>
                            <p className="text-[13px] text-gray-300 mt-3 leading-relaxed">
                                Our registration process is designed to be straightforward and secure.
                                We prioritize your privacy and data security.
                            </p>
                        </div>
                    </div>
                    <FormData />
                </div>
            </div>
        </>
    );
}

export default Page;
