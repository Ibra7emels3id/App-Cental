import { useAuth } from '@/app/context/context';
import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Dialog = ({ showDialog, HandleShowDialog }) => {
    const [name, setName] = useState('');
    const { getAllCategory } = useAuth()

    // Handle Add Name Car Server
    const HandleAddToName = async () => {
        try {
            if (!name) {
                alert('Please enter a category name');
            }
            const data = await axios.post(`${process.env.NEXT_PUBLIC_SERVER}/api/category`, { name })
            toast.success(data.data.message)
            HandleShowDialog();
            getAllCategory();
            setName('');
        } catch (error) {
            console.error(error);
        }
    }


    return (
        <div className={`${showDialog ? 'flex' : 'hidden'} fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]`}>
            <div className="w-full max-w-lg bg-white shadow-lg rounded-md p-8 relative">
                <svg
                    onClick={HandleShowDialog}
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3.5 cursor-pointer shrink-0 fill-gray-800 hover:fill-red-500 float-right"
                    viewBox="0 0 320.591 320.591"
                >
                    <path
                        d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                        data-original="#000000"
                    />
                    <path
                        d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                        data-original="#000000"
                    />
                </svg>
                <div className="my-8 text-center">
                    <h4 className="text-2xl text-gray-800 font-bold">
                        Add Name The Car
                    </h4>
                    <input
                        type="text"
                        placeholder="Enter Name The Car"
                        name='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="px-4 py-2.5 mt-6 bg-[#f0f1f2] text-gray-800 w-full text-sm focus:bg-transparent outline-blue-600 rounded-md"
                    />
                </div>
                <button
                    onClick={HandleAddToName}
                    type="submit"
                    className="px-5 py-2.5 w-full rounded-md text-white text-sm outline-none bg-blue-600 hover:bg-blue-700"
                >
                    Add Title
                </button>
            </div>
        </div>

    );
}

export default React.memo(Dialog);
