'use client'
import { useAuth } from '@/app/context/context';
import React from 'react';

const TableOrder = () => {
    const { order } = useAuth();

    if (order.length > 0) {
        return (
            <div className="flex flex-col max-lg:overflow-auto max-lg:scroll-hidden">
                <div className="box flex justify-between items-center shadow mt-5 bg-[#eee] p-4 rounded min-w-[600px] max-lgoverflow-scroll">
                    <div className="flex flex-col gap-3 min-w-[200px]">
                        <h4 className='font-bold  text-background_light'>Name Car</h4>
                    </div>
                    <div className="flex flex-col gap-3 w-[200px]">
                        <h4 className='text-background_light font-semibold'>In City</h4>
                    </div>
                    <div className="flex flex-col gap-3 w-[200px]">
                        <h4 className='text-background_light font-semibold'>Date / Time</h4>
                    </div>
                    <div className="flex flex-col gap-3 w-[200px]">
                        <h4 className='text-background_light font-semibold'>Date / Time</h4>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h4><span>Payment</span></h4>
                    </div>
                </div>
                {order.map((it) => {
                    return (
                        <div className="box flex justify-between items-center shadow mt-5 bg-[#eee] p-4 rounded min-w-[600px]">
                            <div className="flex flex-col gap-3 min-w-[200px]">
                                <h4 className='font-bold  text-background_light'>{it.nameCar}</h4>
                                <p>Status:<span className="w-[100px] ml-2 px-3 text-center py-1 text-sm bg-yellow-200 text-yellow-800 rounded-xl">{it.status}</span></p>
                            </div>
                            <div className="flex flex-col gap-3 w-[200px]">
                                <h4 className='text-background_light font-semibold'>{it.In_city}</h4>
                                <span className="text-gray-600 font-medium">{it.off_city}</span>
                            </div>
                            <div className="flex flex-col gap-3 w-[200px]">
                                <h4 className='text-background_light font-semibold'>{it.date_on}</h4>
                                <p><span className="text-gray-600 font-medium">{it.time_on}</span></p>
                            </div>
                            <div className="flex flex-col gap-3 w-[200px]">
                                <h4 className='text-background_light font-semibold'>{it.date_off}</h4>
                                <p><span className="text-gray-600 font-medium">{it.time_off}</span></p>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h4><span>Payment</span></h4>
                                <p>
                                    {it.status_payment === 'Confirmed' ? <span className="bg-green-300 text-green-800 px-3 py-1 rounded">Paid</span> : <span className="bg-red-300 text-red-700 px-3 py-1 rounded">Pending</span>}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    } else{
        return <h2 className='text-center text-xl font-semibold text-background_light'>No Order Yet</h2>;
    }


}

export default TableOrder;
