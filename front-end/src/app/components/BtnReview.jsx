'use client'
import React, { useState } from 'react';
import DialogReview from './DialogReview';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

const BtnReview = () => {
    const [showDialog, setShowDialog] = useState(false);
    const { data: user, status } = useSession();
    
    const HandleShowDialog = () => {
        setShowDialog(!showDialog);
    }


    return (
        <>
            {user ? <button onClick={HandleShowDialog} className='text-center flex justify-center my-10 m-auto bg-background_light text-white w-[150px]  px-3 py-2 rounded-2xl'>
                Add Review
            </button> : <Link href={'/sign-in'} className='text-center flex justify-center my-10 m-auto bg-background_light text-white w-[150px]  px-3 py-2 rounded-2xl'>
                Login First
            </Link>}
            <DialogReview showDialog={showDialog} HandleShowDialog={HandleShowDialog} />
        </>
    );
}

export default BtnReview;
