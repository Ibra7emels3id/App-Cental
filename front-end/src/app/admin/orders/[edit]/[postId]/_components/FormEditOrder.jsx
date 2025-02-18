'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const FormEditOrder = ({id}) => {
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    

    // HAndle change Events
    const HandleChangeData = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    // Handle Submit
    const handleSubmitData = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const res = await axios.put(`${process.env.NEXT_PUBLIC_SERVER}/api/order/edit/${id}`, formData);
            toast.success(res.data.message);
        } catch (error) {
            setErrors(error.response.data.errors);
            setLoading(false);
        } finally {
            setLoading(false);
        }
    };

    // Get Order Id
    const getOrder = async () => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER}/api/order/view/${id}`);
            setFormData(response.data);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    // use Effect
    useEffect(() => {
        getOrder();
    }, []);


    return (
        <>
            <div className="form">
                <form className='mt-4'>
                    <input onChange={HandleChangeData} value={formData?.nameCar} name='nameCar' type="text" className="w-full text-gray-500 font-medium text-base bg-gray-100 rounded-md px-4 py-2.5 mt-4" placeholder="Enter Name Car" />
                    <input onChange={HandleChangeData} value={formData?.In_city} name='In_city' type="text" className="w-full text-gray-500 font-medium text-base bg-gray-100 rounded-md px-4 py-2.5 mt-4" placeholder="Enter In City" />
                    <input onChange={HandleChangeData} value={formData?.off_city} name='off_city' type="text" className="w-full text-gray-500 font-medium text-base bg-gray-100 rounded-md px-4 py-2.5 mt-4" placeholder="Enter Off City" />
                    <input onChange={HandleChangeData} value={formData?.date_on} name='date_on' type="date" className="w-full text-gray-500 font-medium text-base bg-gray-100 rounded-md px-4 py-2.5 mt-4" placeholder="Enter In Date" />
                    <input onChange={HandleChangeData} value={formData?.date_off} name='date_off' type="date" className="w-full text-gray-500 font-medium text-base bg-gray-100 rounded-md px-4 py-2.5 mt-4" placeholder="Enter Off Date" />
                    <input onChange={HandleChangeData} value={formData?.time_on?.slice(0, 6) || ''} name='time_on' type="text" className="w-full text-gray-500 font-medium text-base bg-gray-100 rounded-md px-4 py-2.5 mt-4" placeholder="Enter In Time" />
                    <input onChange={HandleChangeData} value={formData?.time_off?.slice(0, 6) || ''} name='time_off' type="text" className="w-full text-gray-500 font-medium text-base bg-gray-100 rounded-md px-4 py-2.5 mt-4" placeholder="Enter Off Time" />
                    {
                        loading ? (
                            <p disabled className="w-full text-white font-medium text-base bg-blue-600 rounded-md px-4 py-2.5 mt-4 text-center">Adding Product...</p>
                        ) : (
                            <button onClick={handleSubmitData} type="submit" className="w-full text-white font-medium text-base bg-blue-600 rounded-md px-4 py-2.5 mt-4">Update Order</button>
                        )
                    }
                </form>
            </div>
        </>
    );
}

export default FormEditOrder;
