'use client'
import { AddProduct } from '@/app/api/products/products';
import { useAuth } from '@/app/context/context';
import React, { useCallback, useState } from 'react';
import Dialog from './Dialog';
import { useRouter } from 'next/navigation';

const Form = () => {
    const [formData, setFormData] = useState({});
    const [showDialog, setShowDialog] = useState(false)
    const [loading, setLoading] = useState(false);
    const { getAllProducts, category } = useAuth()
    const Router = useRouter()

    // Handle Show Dialog
    const HandleShowDialog = useCallback(() => showDialog ? setShowDialog(false) : setShowDialog(true), [showDialog]);

    // Handle Change events
    const HandleChangeData = useCallback((e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }, [formData])

    // Handle Form Submission   
    const handleSubmitData = useCallback(async (e) => {
        e.preventDefault();
        setLoading(true);
        AddProduct(formData)
            .then(response => {
                getAllProducts()
                Router.push('/admin/car-list')
                setFormData({
                    title: '',
                    daily_price: '',
                    image: null,
                    description: '',
                    category: '',
                    quantity: 0,
                    status: 'active',
                    stock: '',
                    location: '',
                    modell: '',
                    distance_traveled: '',
                    type: '',
                    fuel: '',
                    rating: '',
                });
            })
            .finally(() => {
                setLoading(false);
            });
    }, [formData])


    return (
        <div className="flex flex-col bg-white w-full p-5 mb-5">
            <div className="title">
                <h1 className="text-3xl font-semibold text-gray-800 text-center">Add To Car</h1>
            </div>
            <form className='mt-4'>
                <input onChange={(e) => {
                    setFormData({ ...formData, image: e.target.files[0] })
                }} name='image' type="file" className="w-full text-gray-500 font-medium text-base bg-gray-100 file:cursor-pointer cursor-pointer file:border-0 file:py-2.5 file:px-4 file:mr-4 file:bg-gray-800 file:hover:bg-gray-700 file:text-white rounded" />
                <div className=" flex items-center justify-center gap-3 mt-4">
                    <select onChange={HandleChangeData} name="title" id="" className="w-full text-gray-500 font-medium text-base bg-gray-100 rounded-md px-4 py-2.5">
                        <option hidden>Select Category</option>
                        {category.map((it) => {
                            return (
                                <option key={it._id} value={it.name}>{it.name}</option>
                            )
                        })}
                    </select>
                    <button onClick={HandleShowDialog} type="button" className='w-[150px] bg-color_red text-white rounded-xl py-2.5'>Add Title</button>
                </div>
                <input onChange={HandleChangeData} value={formData.daily_price} name='daily_price' type="number" className="w-full text-gray-500 font-medium text-base bg-gray-100 rounded-md px-4 py-2.5 mt-4" placeholder="Daily Price" />
                <input onChange={HandleChangeData} value={formData.rating} name='rating' type="number" className="w-full text-gray-500 font-medium text-base bg-gray-100 rounded-md px-4 py-2.5 mt-4" placeholder="Enter Rating" />
                <input onChange={HandleChangeData} value={formData.quantity} name='quantity' type="number" className="w-full text-gray-500 font-medium text-base bg-gray-100 rounded-md px-4 py-2.5 mt-4" placeholder="Quantity" />
                <input onChange={HandleChangeData} value={formData.description} name='description' type="text" className="w-full text-gray-500 font-medium text-base bg-gray-100 rounded-md px-4 py-2.5 mt-4" placeholder="Description" />
                <input onChange={HandleChangeData} value={formData.category} name='category' type="text" className="w-full text-gray-500 font-medium text-base bg-gray-100 rounded-md px-4 py-2.5 mt-4" placeholder="Category" />
                <input onChange={HandleChangeData} value={formData.motion_transfer} name='motion_transfer' type="text" className="w-full text-gray-500 font-medium text-base bg-gray-100 rounded-md px-4 py-2.5 mt-4" placeholder="Enter Motion Transfer AT / MT" />
                <input onChange={HandleChangeData} value={formData.seat} name='seat' type="text" className="w-full text-gray-500 font-medium text-base bg-gray-100 rounded-md px-4 py-2.5 mt-4" placeholder="Enter Seat" />
                <input onChange={HandleChangeData} value={formData.type} name='type' type="type" className="w-full text-gray-500 font-medium text-base bg-gray-100 rounded-md px-4 py-2.5 mt-4" placeholder="Enter type Car Auto / Manual" />
                <input onChange={HandleChangeData} value={formData.fuel} name='fuel' type="text" className="w-full text-gray-500 font-medium text-base bg-gray-100 rounded-md px-4 py-2.5 mt-4" placeholder="Enter fuel" />
                <input onChange={HandleChangeData} value={formData.model} name='model' type="text" className="w-full text-gray-500 font-medium text-base bg-gray-100 rounded-md px-4 py-2.5 mt-4" placeholder="Enter model 2030" />
                <input onChange={HandleChangeData} value={formData.distance_traveled} name='distance_traveled' type="number" className="w-full text-gray-500 font-medium text-base bg-gray-100 rounded-md px-4 py-2.5 mt-4" placeholder="Enter Distance traveled K" />
                {
                    loading ? (
                        <p disabled className="w-full text-white font-medium text-base bg-blue-600 rounded-md px-4 py-2.5 mt-4 text-center">Adding Product...</p>
                    ) : (
                        <button onClick={handleSubmitData} type="submit" className="w-full text-white font-medium text-base bg-blue-600 rounded-md px-4 py-2.5 mt-4">Add Product</button>
                    )
                }
            </form>
            <Dialog showDialog={showDialog} HandleShowDialog={HandleShowDialog} />
        </div>
    );
}

export default React.memo(Form);
