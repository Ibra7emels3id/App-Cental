'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useAuth } from '../context/context';
import { Rating } from '@mui/material';


const CommentReview = () => {
    const { Reviews, getAllReviews } = useAuth()


    return (
        <Swiper
            slidesPerView={1}
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper  mx-auto px-2"
        >
            {Reviews.map((it) => {
                return (
                    <SwiperSlide key={it._id} className='cursor-pointer m-auto'>
                        <div className="max-w-xl mx-auto">
                            <div className="flex flex-col items-center text-center">
                                <img
                                    src="https://readymadeui.com/team-1.webp"
                                    className="w-28 h-28 rounded-full shadow-[0_2px_22px_-4px_rgba(93,96,127,0.6)] border-2 border-white"
                                />
                                <div className="mt-4">
                                    <h4 className="text-gray-800 text-base font-bold">{it.name}</h4>
                                    <p className="text-xs text-gray-500 mt-1">CEO, Company</p>
                                </div>
                            </div>
                            <div className="mt-6 text-center">
                                <p className="text-sm leading-relaxed text-gray-800">
                                    {it?.message}
                                </p>
                            </div>
                            <div className="flex justify-center space-x-1 mt-4">
                                <Rating value={it.rating} name="size-medium" readOnly  />
                            </div>
                        </div>
                    </SwiperSlide>
                )
            })}
            {/* <SwiperSlide className='cursor-pointer m-auto'>
                <div className="max-w-xl mx-auto">
                    <div className="flex flex-col items-center text-center">
                        <img
                            src="https://readymadeui.com/team-1.webp"
                            className="w-28 h-28 rounded-full shadow-[0_2px_22px_-4px_rgba(93,96,127,0.6)] border-2 border-white"
                        />
                        <div className="mt-4">
                            <h4 className="text-gray-800 text-base font-bold">John Doe</h4>
                            <p className="text-xs text-gray-500 mt-1">CEO, Company</p>
                        </div>
                    </div>
                    <div className="mt-6 text-center">
                        <p className="text-sm leading-relaxed text-gray-800">
                            The service was amazing. I never had to wait that long for my food.
                            The staff was friendly and attentive, and the delivery was
                            impressively prompt.
                        </p>
                    </div>
                    <div className="flex justify-center space-x-1 mt-4">
                        <svg
                            className="w-4 h-4 fill-blue-600"
                            viewBox="0 0 14 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                        </svg>
                        <svg
                            className="w-4 h-4 fill-blue-600"
                            viewBox="0 0 14 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                        </svg>
                        <svg
                            className="w-4 h-4 fill-blue-600"
                            viewBox="0 0 14 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                        </svg>
                        <svg
                            className="w-4 h-4 fill-[#CED5D8]"
                            viewBox="0 0 14 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                        </svg>
                        <svg
                            className="w-4 h-4 fill-[#CED5D8]"
                            viewBox="0 0 14 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                        </svg>
                    </div>
                </div>
            </SwiperSlide> */}
        </Swiper>
    );
}

export default CommentReview;
