'use client'
import { Rating } from '@mui/material';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import React, { useEffect } from 'react';
import { toast } from 'react-toastify';

const DialogReview = ({ showDialog, HandleShowDialog }) => {
    const [formDate, setFormDate] = React.useState([]);
    const { data: user, status } = useSession();

    // Handle Send Date Review
    const handleSendDateReview = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_SERVER}/api/reviews`, formDate);
            if (res.status === 201) {
                toast.success(res.data.message);
                setFormDate({
                    name: "",
                    message: "",
                    rating: '0',
                });
                HandleShowDialog();
            }
        } catch (error) {
            console.error(error);
            toast.error(error.response.data.message);
            HandleShowDialog();
        }
    }

    // use Effect Date
    useEffect(() => {
        if (status === "authenticated") {
            setFormDate({
                ...formDate,
                userId: user?.user?.id,
                email: user?.user?.email,
                name: user?.user?.name,
                date: new Date().toISOString(),
            });
        }
    }, [status]);

    // Handle Show Scroll
    useEffect(() => {
        if (showDialog) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
        return () => document.body.classList.remove("overflow-hidden");
    }, [showDialog]);


    return (
        <div className={`fixed inset-0 flex justify-center items-center bg-black/50 transition-all duration-500 z-50 ${showDialog ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
            <div className={` ${showDialog ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none"} bg-white p-6 rounded-md shadow-lg max-w-lg w-full transition-transform duration-500`}>
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
                        Add Review
                    </h4>
                    <p className="text-sm text-gray-500 mt-2">
                        Add a review about our project and the services we provide
                    </p>
                    <p className='text-start w-full my-2 p-2 capitalize border text-gray-600'>{user?.user?.name}</p>
                    <p className='text-start w-full my-2 p-2 capitalize border text-gray-600'>{user?.user?.email}</p>
                    <textarea onChange={(e) => {
                        setFormDate({ ...formDate, message: e.target.value })
                    }} className='w-full border outline-none p-1 h-32' name="message" id="message" value={formDate.message} placeholder='Write your review here...'>
                    </textarea>
                    <Rating onChange={(e) => {
                        setFormDate({ ...formDate, rating: e.target.value })
                    }} className='my-2' name="size-medium" defaultValue={formDate.rating} />
                </div>
                <button
                    onClick={handleSendDateReview}
                    type="submit"
                    className="px-5 py-2.5 w-full rounded-md text-white text-sm outline-none bg-red-600 hover:bg-red-700"
                >
                    Confirm Review
                </button>
            </div>
        </div>

    );
}

export default DialogReview;
