'use client'
import { useAuth } from '@/app/context/context';
import Link from 'next/link';
import React, { useCallback, useState } from 'react';
import Dialog from './Dialog';
import Image from 'next/image';
import { Rating } from '@mui/material';
import axios from 'axios';


const FormTable = () => {
    const { orders, getAllOrders } = useAuth()
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


    // Handle Update Status 
    const handleUpdateOrderStatus = async (id, status) => {
        try {
            const res = await axios.put(`${process.env.NEXT_PUBLIC_SERVER}/api/order/status/${id}`, { status })
            getAllOrders()
            console.log(res.statusText);
            handleShowMenu(id)
        } catch (error) {
            console.error('Error updating order status:', error);
        }
    };


    if (orders.length > 0) {
        return (
            <div className="font-sans overflow-x-auto ">
                <div className="flex justify-end">
                    <Link href={'/admin/car-list/add-car'} className=' text-center py-3 mb-2 text-white rounded'>
                        <svg viewBox="0 0 24 24" className='w-12 mr-4 m-auto hover:file:bg-red-700' fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                            <g id="SVGRepo_iconCarrier">
                                {" "}
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.75 9C12.75 8.58579 12.4142 8.25 12 8.25C11.5858 8.25 11.25 8.58579 11.25 9L11.25 11.25H9C8.58579 11.25 8.25 11.5858 8.25 12C8.25 12.4142 8.58579 12.75 9 12.75H11.25V15C11.25 15.4142 11.5858 15.75 12 15.75C12.4142 15.75 12.75 15.4142 12.75 15L12.75 12.75H15C15.4142 12.75 15.75 12.4142 15.75 12C15.75 11.5858 15.4142 11.25 15 11.25H12.75V9Z"
                                    fill="#ba2121"
                                />{" "}
                            </g>
                        </svg>
                    </Link>
                </div>
                <table className="min-w-full bg-white">
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
                                Payment
                            </th>
                            <th className="p-4 text-left text-sm font-medium text-white">
                                In City / off City
                            </th>
                            <th className="p-4 text-left text-sm font-medium text-white">
                                Date / time
                            </th>
                            <th className="p-4 text-left text-sm font-medium text-white">
                                Date / time
                            </th>
                            <th className="p-4 text-left text-sm font-medium text-white">Status</th>
                            <th className="p-4 text-left text-sm font-medium text-white">
                                Action
                            </th>
                            <th className="p-4 text-left text-sm font-medium text-white">Edit</th>
                            <th className="p-4 text-left text-sm font-medium text-white">Delete</th>
                        </tr>
                    </thead>
                    <tbody className="whitespace-nowrap">
                        {
                            orders.map((product, index) => {
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
                                        <td className="p-4 text-sm text-black">{product.nameCar}</td>
                                        <td className="p-4 text-sm text-black">
                                            {product.status_payment}
                                        </td>
                                        <td className="p-4 text-sm text-black">
                                            {product.In_city} <br />
                                            {product.off_city}
                                        </td>
                                        <td className="p-4 text-sm text-black">
                                            {product.date_on} <br />
                                            {product.time_on}
                                        </td>
                                        <td className="p-4 text-sm text-black">
                                            {product.date_off} <br />
                                            {product.time_off}
                                        </td>
                                        <td className="p-4 text-sm text-black">
                                            {
                                                product.status === "Pending" && <span className='bg-orange-200 text-orange-600 px-2 py-1 rounded min-w-[50px] block text-center'>{product.status}</span> ||
                                                product.status === "Out for delivery" && <span className='bg-teal-200 text-teal-600 px-2 py-1 rounded min-w-[50px] block text-center'>{product.status}</span> ||
                                                product.status === "At work" && <span className='bg-red-200 text-red-600 px-2 py-1 rounded min-w-[50px] block text-center'>{product.status}</span> ||
                                                product.status === "finish" && <span className='bg-green-200 text-green-600 px-2 py-1 rounded min-w-[50px] block text-center'>{product.status}</span>
                                            }
                                        </td>
                                        <td className="p-4 text-sm text-black">
                                            <div className=" font-[sans-serif] w-max mx-auto">
                                                <button
                                                    onClick={() => {
                                                        handleShowMenu(product._id)
                                                    }}
                                                    type="button"
                                                    id="dropdownToggle"
                                                    className="py-2.5 text-gray-800 text-sm outline-none"
                                                >
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        transform="rotate(90)"
                                                        className='w-8'
                                                    >
                                                        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                                        <g id="SVGRepo_iconCarrier">
                                                            {" "}
                                                            <path
                                                                d="M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12Z"
                                                                fill="#1C274C"
                                                            />{" "}
                                                            <path
                                                                d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"
                                                                fill="#1C274C"
                                                            />{" "}
                                                            <path
                                                                d="M21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z"
                                                                fill="#1C274C"
                                                            />{" "}
                                                        </g>
                                                    </svg>
                                                </button>
                                                <ul
                                                    id="dropdownMenu"
                                                    className={`${showMenu === product._id ? 'visible' : 'hidden'} absolute shadow-[0_8px_19px_-7px_rgba(6,81,237,0.2)] bg-white py-2 z-[1000] divide-y max-h-96 overflow-auto`}
                                                >
                                                    {product.status === 'Pending' && <>
                                                        <li onClick={() => {
                                                            handleUpdateOrderStatus(product._id, 'Out for delivery')
                                                        }} className="py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer">
                                                            Out for delivery
                                                        </li>
                                                        <li onClick={() => {
                                                            handleUpdateOrderStatus(product._id, 'At work')
                                                        }} className="py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer">
                                                            At work
                                                        </li>
                                                        <li onClick={() => {
                                                            handleUpdateOrderStatus(product._id, 'finish')
                                                        }} className="py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer">
                                                            Finish
                                                        </li>
                                                    </>}
                                                    {product.status === 'Out for delivery' && <>
                                                        <li onClick={() => {
                                                            handleUpdateOrderStatus(product._id, 'Pending')
                                                        }} className="py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer">
                                                            Pending
                                                        </li>
                                                        <li onClick={() => {
                                                            handleUpdateOrderStatus(product._id, 'At work')
                                                        }} className="py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer">
                                                            At work
                                                        </li>
                                                        <li onClick={() => {
                                                            handleUpdateOrderStatus(product._id, 'finish')
                                                        }} className="py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer">
                                                            Finish
                                                        </li>
                                                    </>}
                                                    {product.status === 'At work' && <>
                                                        <li onClick={() => {
                                                            handleUpdateOrderStatus(product._id, 'Pending')
                                                        }} className="py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer">
                                                            Pending
                                                        </li>
                                                        <li onClick={() => {
                                                            handleUpdateOrderStatus(product._id, 'Out for delivery')
                                                        }} className="py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer">
                                                            Out for delivery
                                                        </li>
                                                        <li onClick={() => {
                                                            handleUpdateOrderStatus(product._id, 'finish')
                                                        }} className="py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer">
                                                            Finish
                                                        </li>
                                                    </>}
                                                    {product.status === 'finish' && <>
                                                        <li onClick={() => {
                                                            handleUpdateOrderStatus(product._id, 'Pending')
                                                        }} className="py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer">
                                                            Pending
                                                        </li>
                                                        <li onClick={() => {
                                                            handleUpdateOrderStatus(product._id, 'Out for delivery')
                                                        }} className="py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer">
                                                            Out for delivery
                                                        </li>
                                                        <li onClick={() => {
                                                            handleUpdateOrderStatus(product._id, 'At work')
                                                        }} className="py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer">
                                                            At work
                                                        </li>
                                                    </>}
                                                </ul>
                                            </div>

                                        </td>
                                        <td className="py-4 text-left text-sm font-medium text-white"><Link href={`/admin/orders/edit/${product._id}`} className='flex justify-center text-start bg-yellow-500 w-[100px] m-auto py-3 rounded hover:bg-yellow-700'>Edit</Link></td>
                                        <td className="p-4 text-left text-sm font-medium text-white"><button onClick={() => {
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
