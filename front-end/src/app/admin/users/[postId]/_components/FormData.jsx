'use client'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React from 'react';
import { toast } from 'react-toastify';

const FormData = ({ id }) => {
    const [data, setData] = React.useState(null);
    const [loading , setLoading] = React.useState(false);
    const router = useRouter()

    // Handle Change event
    const HandleChange = (event) => {
        setData({...data, [event.target.name]: event.target.value });
    }

    // Handle form submission
    const HandleUpdateData = async (event) => {
        event.preventDefault();
        try {
            setLoading(true);
            const response = await axios.put(`/api/editUser/${id}` , data);
            console.log(response.data);
            if(response.status === 200) {
                toast.success(response.data.message);
                router.push('/admin/users')
                setLoading(false);
            }
        } catch (error) {
            setError(error.message);
            toast.error(error.message);
            setLoading(false);
        } finally{
            setLoading(false);
        }
    }


    // Fetch form data from API using the provided ID
    const fetchFormData = async () => {
        try {
            const response = await axios.get(`/api/viewUser/${id}`);
            setData(response.data);
        } catch (error) {
            setError(error.message);
        }
    }

    React.useEffect(() => {
        fetchFormData();
    }, [id]);


    return (
        <div>
            {data && (
                <form className='flex flex-col gap-3'>
                    <input className='h-10 px-2 border-none outline-none bg-white w-full' onChange={HandleChange} value={data.name} type="text" name="name" id="name" placeholder='Enter Name' />
                    <input className='h-10 px-2 border-none outline-none bg-white w-full' onChange={HandleChange} value={data.email} type="email" name="email" id="email" placeholder='Enter Email' />
                    <input className='h-10 px-2 border-none outline-none bg-white w-full' onChange={HandleChange} value={data.role} type="role" name="role" id="role" placeholder='Enter Role' />
                    {
                        loading? (
                            <button className='py-2 px-4 border-none bg-blue-500 text-white hover:bg-blue-700 w-full' disabled>Updating...</button>
                        ) : (
                            <button className='py-2 px-4 border-none bg-blue-500 text-white hover:bg-blue-700 w-full' onClick={HandleUpdateData} type='submit'>Update</button>
                        )
                    }
                </form>
            )}
        </div>
    );
}

export default FormData;
