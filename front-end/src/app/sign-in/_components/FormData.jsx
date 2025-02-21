'use client'
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { signIn, getSession } from 'next-auth/react';

const FormData = () => {
    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(false);
    const Router = useRouter()

    // Handle Change events
    const HandleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle Submit Data To server
    const HandleSubmitData = async (e) => {
        e.preventDefault();
        // setLoading(true);
        const res = await signIn("credentials", {
            email: formData.email,
            password: formData.password,
            redirect: false,
        });
        if (res.ok) {
            toast.success('login successfully')
            setLoading(false);
            const {user} = await getSession();
            if (user?.role === 'admin') {
                Router.push('/admin');
            }else{
                Router.push('/');
            }
        } else {
            toast.error('Failed to login')
            setLoading(false);
        }
        setLoading(false);
    };


    return (
        <form onSubmit={HandleSubmitData} className="md:col-span-2 w-full py-6 px-6 sm:px-16 max-md:max-w-xl mx-auto">
            <div className="mb-6">
                <h3 className="text-gray-800 text-xl font-bold">Create an account</h3>
            </div>
            <div className="space-y-6">
                <div>
                    <label className="text-gray-600 text-sm mb-2 block">Email Id</label>
                    <div className="relative flex items-center">
                        <input
                            onChange={HandleChange}
                            value={formData.email}
                            name="email"
                            type="email"
                            required
                            className="text-gray-800 bg-white border border-gray-300 w-full text-sm pl-4 pr-8 py-2.5 rounded-md outline-blue-500"
                            placeholder="Enter email"
                        />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#bbb"
                            stroke="#bbb"
                            className="w-4 h-4 absolute right-4"
                            viewBox="0 0 682.667 682.667"
                        >
                            <defs>
                                <clipPath id="a" clipPathUnits="userSpaceOnUse">
                                    <path d="M0 512h512V0H0Z" data-original="#000000" />
                                </clipPath>
                            </defs>
                            <g
                                clipPath="url(#a)"
                                transform="matrix(1.33 0 0 -1.33 0 682.667)"
                            >
                                <path
                                    fill="none"
                                    strokeMiterlimit={10}
                                    strokeWidth={40}
                                    d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                                    data-original="#000000"
                                />
                                <path
                                    d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                                    data-original="#000000"
                                />
                            </g>
                        </svg>
                    </div>
                </div>
                <div>
                    <label className="text-gray-600 text-sm mb-2 block">Password</label>
                    <div className="relative flex items-center">
                        <input
                            onChange={HandleChange}
                            value={formData.password}
                            name="password"
                            type="password"
                            required
                            className="text-gray-800 bg-white border border-gray-300 w-full text-sm pl-4 pr-8 py-2.5 rounded-md outline-blue-500"
                            placeholder="Enter password"
                        />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#bbb"
                            stroke="#bbb"
                            className="w-4 h-4 absolute right-4 cursor-pointer"
                            viewBox="0 0 128 128"
                        >
                            <path
                                d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                                data-original="#000000"
                            />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="mt-8">
                {
                    loading ? (
                        <p className="flex items-center justify-center w-full py-3 text-lg text-white bg-color_red rounded-md hover:bg-red-700 disabled:opacity-50">
                            Loading...
                        </p>
                    ) : (
                        <button type="submit" className="flex items-center justify-center w-full py-3 text-lg text-white bg-color_red rounded-md hover:bg-red-700">
                            Sign In
                        </button>
                    )
                }
            </div>
            <p className="text-gray-600 text-sm mt-6 text-center">
                Create an Account?{" "}
                <Link
                    href="sign-up"
                    className="text-blue-600 font-semibold hover:underline ml-1"
                >
                    sign-up
                </Link>
            </p>
        </form>
    );
}

export default FormData;
