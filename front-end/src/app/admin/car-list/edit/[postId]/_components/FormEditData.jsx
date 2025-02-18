'use client'
import { EditProduct } from '@/app/api/products/products';
import { useAuth } from '@/app/context/context';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useCallback, useState } from 'react';

const FormEditData = ({ ID }) => {
    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(false);
    const [ImageUrl, setImageUrl] = useState(null);
    const { getAllProducts } = useAuth()
    const Router = useRouter()

    // Handle Change events
    const HandleChangeData = useCallback((e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }, [formData])

    // Handle Form Submission   
    const handleSubmitData = useCallback(async (id) => {
        // setLoading(true);
        EditProduct(id, formData).then((res)=>{
            setLoading(false);
            getAllProducts();
            return Router.push('/admin/car-list');
        })
    }, [formData])

    // Handle Get Product ID
    const GetProductId = async () => {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER}/api/product/${ID}`);
            setFormData(res.data.product);
        } catch (error) {
            console.error(error);
        }
    }

    // fetch Product
    React.useEffect(() => {
        GetProductId();
    }, [ID]);


    return (
        <div className="flex flex-col bg-white w-full p-5 mb-5">
            <div className="title">
                <h1 className="text-3xl font-semibold text-gray-800 text-center">Edit To Car</h1>
            </div>
            <form className='mt-4'>
                <input onChange={(e) => {
                    setFormData({ ...formData, image: e.target.files[0] })
                    setImageUrl(e.target.files[0]);
                }} name='image' type="file" className="w-full text-gray-500 font-medium text-base bg-gray-100 file:cursor-pointer cursor-pointer file:border-0 file:py-2.5 file:px-4 file:mr-4 file:bg-gray-800 file:hover:bg-gray-700 file:text-white rounded" />
                <div className="flex flex-wrap justify-center gap-4">
                    {ImageUrl ? <Image
                        src={URL.createObjectURL(ImageUrl)}
                        alt={formData.title}
                        width={300}
                        height={300}
                        className="border my-5"
                    /> : <Image
                        src={formData.image}
                        alt={formData.title}
                        width={300}
                        height={300}
                        className="border my-5"
                    />}
                </div>
                <input onChange={HandleChangeData} value={formData.title} name='title' type="text" className="w-full text-gray-500 font-medium text-base bg-gray-100 rounded-md px-4 py-2.5 mt-4" placeholder="Product Name" />
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
                <input onChange={HandleChangeData} value={formData.distance_traveled} name='distance_traveled' type="number" className="w-full text-gray-500 font-medium text-base bg-gray-100 rounded-md px-4 py-2.5 mt-4 " placeholder="Enter Distance traveled K" />
                {
                    loading ? (
                        <p disabled className="w-full text-white font-medium text-base bg-blue-600 rounded-md px-4 py-2.5 mt-4 text-center">Adding Product...</p>
                    ) : (
                        <button onClick={(e) => {
                            e.preventDefault();
                            handleSubmitData(formData._id)
                        }} type="submit" className="w-full text-white font-medium text-base bg-blue-600 rounded-md px-4 py-2.5 mt-4">Edit Product</button>
                    )
                }
            </form>
        </div>
    );
}

export default React.memo(FormEditData);
