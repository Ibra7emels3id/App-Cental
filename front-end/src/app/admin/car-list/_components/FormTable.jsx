'use client'
import { useAuth } from '@/app/context/context';
import Link from 'next/link';
import React, { useCallback, useState } from 'react';
import Dialog from './Dialog';
import Image from 'next/image';
import { Rating } from '@mui/material';


const FormTable = () => {
    const { products } = useAuth()
    const [productId, setProductId] = useState('')
    const [showDialog, setShowDialog] = useState(false)
    // console.log(products);

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



    return (
        <div className="font-sans overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100 whitespace-nowrap">
                    <tr>
                        <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                            image
                        </th>
                        <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                            Title
                        </th>
                        <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                            Description
                        </th>
                        <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                            model
                        </th>
                        <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                            daily price
                        </th>
                        <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                            rating
                        </th>
                        <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                            status
                        </th>
                        <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 whitespace-nowrap">
                    {products.map((it) => (
                        <tr key={it._id}>
                            <td className="px-4 py-4 text-sm text-gray-800">
                                <Link href={`/product/${it._id}`}>
                                    <Image src={it.image} alt={it.title} width={70} height={70} />
                                </Link>
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-800">{it.title}</td>
                            <td className="px-4 py-4 text-sm text-gray-800">{it.description.slice(0, 30)}...</td>
                            <td className="px-4 py-4 text-sm text-gray-800">{it.model}</td>
                            <td className="px-4 py-4 text-sm text-gray-800">{it.daily_price}$</td>
                            <td className="p-4">
                                <Rating className='my-2' name="size-medium" defaultValue={it.rating} readOnly />
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-800">{it.status}</td>
                            <td className="px-4 py-4 text-sm text-gray-800">
                                <button className="text-blue-600 mr-4">
                                    <Link href={`/admin/car-list/edit/${it._id}`}>Edit</Link>
                                </button>
                                <button onClick={()=>{
                                    HandleShowDialog(it._id)
                                }} className="text-red-600">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Dialog showDialog={showDialog} HandleShowDialog={HandleShowDialog} productId={productId} />
        </div>
    );
}

export default React.memo(FormTable);
