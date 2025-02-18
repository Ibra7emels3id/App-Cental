'use client'
import { useAuth } from '@/app/context/context';
import Link from 'next/link';
import React, { useCallback, useState } from 'react';
import Dialog from './Dialog';
import Image from 'next/image';
import { Rating } from '@mui/material';
import axios from 'axios';


const FormTable = () => {
    const { Reviews, getAllReviews } = useAuth()
    const [productId, setProductId] = useState('')
    const [showDialog, setShowDialog] = useState(false)
    const [showMenu, setShowMenu] = useState(null)

    // Handle Show Dialog
    const HandleShowDialog = useCallback((id) => {
        if (showDialog) {
            setShowDialog(false)
            setProductId('')
        } else {
            setProductId(id)
            setShowDialog(true)
        }
    }, [showDialog])


    // Handle Show Menu
    const handleShowMenu = useCallback((id) => {
        setShowMenu(prevId => (prevId === id ? null : id));
    }, []);


    if (Reviews?.length > 0) {
        return (
            <div className="font-sans">
                <table className="min-w-full bg-white ">
                    <thead className="bg-gray-700 whitespace-nowrap">
                        <tr>
                            <th className="pl-4 w-8">
                                <input id="checkbox" type="checkbox" className="hidden peer" />
                                <label
                                    htmlFor="checkbox"
                                    className="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-blue-500 border border-gray-400 rounded overflow-hidden"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-full fill-white"
                                        viewBox="0 0 520 520"
                                    >
                                        <path
                                            d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                                            data-name="7-Check"
                                            data-original="#000000"
                                        />
                                    </svg>
                                </label>
                            </th>
                            <th className="p-4 text-left text-sm font-medium text-white">Name</th>
                            <th className="p-4 text-left text-sm font-medium text-white">
                                Email
                            </th>
                            <th className="p-4 text-left text-sm font-medium text-white ">
                                Message
                            </th>
                            <th className="p-4 text-left text-sm font-medium text-white">
                                Rating
                            </th>
                            <th className="p-4 text-left text-sm font-medium text-white">
                                Date / time
                            </th>
                            <th className="p-4 text-left text-sm font-medium text-white">Delete</th>
                        </tr>
                    </thead>
                    <tbody className="whitespace-nowrap">
                        {
                            Reviews.map((product, index) => {
                                return (
                                    <tr key={index} className="even:bg-blue-50">
                                        <td className="pl-4 w-8">
                                            <input id="checkbox1" type="checkbox" className="hidden peer" />
                                            <label
                                                htmlFor="checkbox1"
                                                className="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-blue-500 border border-gray-400 rounded overflow-hidden"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-full fill-white"
                                                    viewBox="0 0 520 520"
                                                >
                                                    <path
                                                        d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                                                        data-name="7-Check"
                                                        data-original="#000000"
                                                    />
                                                </svg>
                                            </label>
                                        </td>
                                        <td className="p-4 text-sm text-black">{product.name}</td>
                                        <td className="p-4 text-sm text-black">{product.email}</td>
                                        <td className="p-4 text-sm text-black ">
                                            {product.message.split(" ").slice(0, 3).join(" ")} . . .
                                        </td>
                                        <td className="p-4 text-sm text-black">
                                            {product.rating}
                                        </td>
                                        <td className="p-4 text-sm text-black text-cente">
                                            {product?.date?.split('T')[0]}<br />
                                            {new Date(product?.date).toLocaleTimeString()}
                                        </td>
                                        <td className="p- text-left text-sm font-medium text-white"><button onClick={() => {
                                            HandleShowDialog(product._id)
                                        }} className='bg-color_red w-[100px] py-3 rounded hover:bg-red-700'>Delete</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <Dialog showDialog={showDialog} HandleShowDialog={HandleShowDialog} productId={productId} />
            </div>
        );
    } else {
        return <h2>No orders found</h2>;
    }
}

export default React.memo(FormTable);
