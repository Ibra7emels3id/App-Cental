'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import PeopleIcon from '@mui/icons-material/People';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import { Rating } from '@mui/material';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import SettingsIcon from '@mui/icons-material/Settings';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import AddRoadIcon from '@mui/icons-material/AddRoad';
import { Pagination, Autoplay } from 'swiper/modules';
import { useAuth } from '../context/context';


const Cars = () => {
    const { products } = useAuth()


    return (
        <div className='py-10'>
            <div className="title text-center w-11/12 md:w-7/12 m-auto">
                <h2 className='text-4xl lg:text-6xl  font-bold'>Vehicle <span className='text-color_red '>Categories</span></h2>
                <p className='text-zinc-500 text-md mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi accusantium at cum harum, excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam quia distinctio,</p>
            </div>
            <Swiper
                slidesPerView={3}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                breakpoints={{
                    140: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    500: {
                        slidesPerView: 1,
                        spaceBetween: 100,
                    },
                    900: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1280: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper mt-10 w-[98%] sm:w-[90%]  xl:w-[93%] mx-auto px-2"
            >
                {products.map((it) => {
                    return (
                        <SwiperSlide key={it._id} className='border p-5 rounded-lg cursor-pointer hover:border-red-500'>
                            <div className="flex flex-col gap-2 hover:shadow-lg hover:shadow-red-500 transition-all ease-in-out">
                                <div className="img bg-[#eee] flex items-center justify-center rounded-t-lg py-2">
                                    <Image
                                        src={it.image}
                                        width={350}
                                        height={200}
                                        alt={it.title}
                                        className="object-cover max-h-[200px]"
                                    />
                                </div>
                                <div className="flex flex-col bg-[#eee] rounded-b-lg p-3">
                                    <div className="text text-center mt-3">
                                        <h4 className='text-2xl font-semibold text-zinc-700'>{it.title}</h4>
                                        <Rating className='my-2' name="size-medium" defaultValue={it?.rating} readOnly />
                                    </div>
                                    <div className="text-center my-3">
                                        <p className='bg-white text-color_red w-[250px] m-auto rounded-full text-2xl py-2 '>${it.daily_price}/Day</p>
                                    </div>
                                    <div className="details flex items-center justify-center gap-4 my-4">
                                        <div className="flex flex-col gap-2">
                                            <div className="flex">
                                                <PeopleIcon />
                                                <span className="mx-2">|</span>
                                                <span className='text-zinc-600 font-semibold'>{it.seat} Seat</span>
                                            </div>
                                            <div className="flex">
                                                <DirectionsCarIcon />
                                                <span className="mx-2">|</span>
                                                <span className='text-zinc-600 font-semibold'>{it.model}</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <div className="flex">
                                                <DirectionsCarIcon />
                                                <span className="mx-2">|</span>
                                                <span className='text-zinc-600 font-semibold'>{it.motion_transfer}</span>
                                            </div>
                                            <div className="flex">
                                                <SettingsIcon />
                                                <span className="mx-2">|</span>
                                                <span className='text-zinc-600 font-semibold'>{it.type}</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <div className="flex">
                                                <LocalGasStationIcon />
                                                <span className="mx-2">|</span>
                                                <span className='text-zinc-600 font-semibold capitalize'>{it.fuel}</span>
                                            </div>
                                            <div className="flex">
                                                <AddRoadIcon />
                                                <span className="mx-2">|</span>
                                                <span className='text-zinc-600 font-semibold'>{it.distance_traveled}k</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-center my-3">
                                        <button className='bg-color_red text-white text-center py-2 px-4 rounded-lg w-full font-semibold text-xl'>Book Now</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
                {/* <SwiperSlide className='border p-5 rounded-lg cursor-pointer'>
                    <div className="flex flex-col gap-2 hover:shadow-lg hover:shadow-red-500 transition-all ease-in-out">
                        <div className="img bg-[#eee] flex items-center justify-center rounded-t-lg">
                            <Image
                                src={'/image/car-1.png'}
                                width={350}
                                height={200}
                                alt="Car 1"
                                className="object-cover"
                            />
                        </div>
                        <div className="flex flex-col bg-[#eee] rounded-b-lg p-3">
                            <div className="text text-center mt-3">
                                <h4 className='text-2xl font-semibold text-zinc-700'>Hyundai Kona Electric</h4>
                                <Rating className='my-2' name="size-medium" defaultValue={3} readOnly />
                            </div>
                            <div className="text-center my-3">
                                <p className='bg-white text-color_red w-[250px] m-auto rounded-full text-2xl py-2 '>$187:00/Day</p>
                            </div>
                            <div className="details flex items-center justify-center gap-4 my-4">
                                <div className="flex flex-col gap-2">
                                    <div className="flex">
                                        <PeopleIcon />
                                        <span className="mx-2">|</span>
                                        <span className='text-zinc-600 font-semibold'>4 Seat</span>
                                    </div>
                                    <div className="flex">
                                        <DirectionsCarIcon />
                                        <span className="mx-2">|</span>
                                        <span className='text-zinc-600 font-semibold'>2015</span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex">
                                        <DirectionsCarIcon />
                                        <span className="mx-2">|</span>
                                        <span className='text-zinc-600 font-semibold'>AT/MT</span>
                                    </div>
                                    <div className="flex">
                                        <SettingsIcon />
                                        <span className="mx-2">|</span>
                                        <span className='text-zinc-600 font-semibold'>Auto</span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex">
                                        <LocalGasStationIcon />
                                        <span className="mx-2">|</span>
                                        <span className='text-zinc-600 font-semibold'>Petrol</span>
                                    </div>
                                    <div className="flex">
                                        <AddRoadIcon />
                                        <span className="mx-2">|</span>
                                        <span className='text-zinc-600 font-semibold'>27k</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center my-3">
                                <button className='bg-color_red text-white text-center py-2 px-4 rounded-lg w-full font-semibold text-xl'>Book Now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='border p-5 rounded-lg cursor-pointer'>
                    <div className="flex flex-col gap-2 hover:shadow-lg hover:shadow-red-500 transition-all ease-in-out">
                        <div className="img bg-[#eee] flex items-center justify-center rounded-t-lg">
                            <Image
                                src={'/image/car-1.png'}
                                width={350}
                                height={200}
                                alt="Car 1"
                                className="object-cover"
                            />
                        </div>
                        <div className="flex flex-col bg-[#eee] rounded-b-lg p-3">
                            <div className="text text-center mt-3">
                                <h4 className='text-2xl font-semibold text-zinc-700'>Hyundai Kona Electric</h4>
                                <Rating className='my-2' name="size-medium" defaultValue={3} readOnly />
                            </div>
                            <div className="text-center my-3">
                                <p className='bg-white text-color_red w-[250px] m-auto rounded-full text-2xl py-2 '>$187:00/Day</p>
                            </div>
                            <div className="details flex items-center justify-center gap-4 my-4">
                                <div className="flex flex-col gap-2">
                                    <div className="flex">
                                        <PeopleIcon />
                                        <span className="mx-2">|</span>
                                        <span className='text-zinc-600 font-semibold'>4 Seat</span>
                                    </div>
                                    <div className="flex">
                                        <DirectionsCarIcon />
                                        <span className="mx-2">|</span>
                                        <span className='text-zinc-600 font-semibold'>2015</span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex">
                                        <DirectionsCarIcon />
                                        <span className="mx-2">|</span>
                                        <span className='text-zinc-600 font-semibold'>AT/MT</span>
                                    </div>
                                    <div className="flex">
                                        <SettingsIcon />
                                        <span className="mx-2">|</span>
                                        <span className='text-zinc-600 font-semibold'>Auto</span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex">
                                        <LocalGasStationIcon />
                                        <span className="mx-2">|</span>
                                        <span className='text-zinc-600 font-semibold'>Petrol</span>
                                    </div>
                                    <div className="flex">
                                        <AddRoadIcon />
                                        <span className="mx-2">|</span>
                                        <span className='text-zinc-600 font-semibold'>27k</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center my-3">
                                <button className='bg-color_red text-white text-center py-2 px-4 rounded-lg w-full font-semibold text-xl'>Book Now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='border p-5 rounded-lg cursor-pointer'>
                    <div className="flex flex-col gap-2 hover:shadow-lg hover:shadow-red-500 transition-all ease-in-out">
                        <div className="img bg-[#eee] flex items-center justify-center rounded-t-lg">
                            <Image
                                src={'/image/car-1.png'}
                                width={350}
                                height={200}
                                alt="Car 1"
                                className="object-cover"
                            />
                        </div>
                        <div className="flex flex-col bg-[#eee] rounded-b-lg p-3">
                            <div className="text text-center mt-3">
                                <h4 className='text-2xl font-semibold text-zinc-700'>Hyundai Kona Electric</h4>
                                <Rating className='my-2' name="size-medium" defaultValue={3} readOnly />
                            </div>
                            <div className="text-center my-3">
                                <p className='bg-white text-color_red w-[250px] m-auto rounded-full text-2xl py-2 '>$187:00/Day</p>
                            </div>
                            <div className="details flex items-center justify-center gap-4 my-4">
                                <div className="flex flex-col gap-2">
                                    <div className="flex">
                                        <PeopleIcon />
                                        <span className="mx-2">|</span>
                                        <span className='text-zinc-600 font-semibold'>4 Seat</span>
                                    </div>
                                    <div className="flex">
                                        <DirectionsCarIcon />
                                        <span className="mx-2">|</span>
                                        <span className='text-zinc-600 font-semibold'>2015</span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex">
                                        <DirectionsCarIcon />
                                        <span className="mx-2">|</span>
                                        <span className='text-zinc-600 font-semibold'>AT/MT</span>
                                    </div>
                                    <div className="flex">
                                        <SettingsIcon />
                                        <span className="mx-2">|</span>
                                        <span className='text-zinc-600 font-semibold'>Auto</span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex">
                                        <LocalGasStationIcon />
                                        <span className="mx-2">|</span>
                                        <span className='text-zinc-600 font-semibold'>Petrol</span>
                                    </div>
                                    <div className="flex">
                                        <AddRoadIcon />
                                        <span className="mx-2">|</span>
                                        <span className='text-zinc-600 font-semibold'>27k</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center my-3">
                                <button className='bg-color_red text-white text-center py-2 px-4 rounded-lg w-full font-semibold text-xl'>Book Now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='border p-5 rounded-lg cursor-pointer'>
                    <div className="flex flex-col gap-2 hover:shadow-lg hover:shadow-red-500 transition-all ease-in-out">
                        <div className="img bg-[#eee] flex items-center justify-center rounded-t-lg">
                            <Image
                                src={'/image/car-1.png'}
                                width={350}
                                height={200}
                                alt="Car 1"
                                className="object-cover"
                            />
                        </div>
                        <div className="flex flex-col bg-[#eee] rounded-b-lg p-3">
                            <div className="text text-center mt-3">
                                <h4 className='text-2xl font-semibold text-zinc-700'>Hyundai Kona Electric</h4>
                                <Rating className='my-2' name="size-medium" defaultValue={3} readOnly />
                            </div>
                            <div className="text-center my-3">
                                <p className='bg-white text-color_red w-[250px] m-auto rounded-full text-2xl py-2 '>$187:00/Day</p>
                            </div>
                            <div className="details flex items-center justify-center gap-4 my-4">
                                <div className="flex flex-col gap-2">
                                    <div className="flex">
                                        <PeopleIcon />
                                        <span className="mx-2">|</span>
                                        <span className='text-zinc-600 font-semibold'>4 Seat</span>
                                    </div>
                                    <div className="flex">
                                        <DirectionsCarIcon />
                                        <span className="mx-2">|</span>
                                        <span className='text-zinc-600 font-semibold'>2015</span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex">
                                        <DirectionsCarIcon />
                                        <span className="mx-2">|</span>
                                        <span className='text-zinc-600 font-semibold'>AT/MT</span>
                                    </div>
                                    <div className="flex">
                                        <SettingsIcon />
                                        <span className="mx-2">|</span>
                                        <span className='text-zinc-600 font-semibold'>Auto</span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex">
                                        <LocalGasStationIcon />
                                        <span className="mx-2">|</span>
                                        <span className='text-zinc-600 font-semibold'>Petrol</span>
                                    </div>
                                    <div className="flex">
                                        <AddRoadIcon />
                                        <span className="mx-2">|</span>
                                        <span className='text-zinc-600 font-semibold'>27k</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center my-3">
                                <button className='bg-color_red text-white text-center py-2 px-4 rounded-lg w-full font-semibold text-xl'>Book Now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='border p-5 rounded-lg cursor-pointer'>
                    <div className="flex flex-col gap-2 hover:shadow-lg hover:shadow-red-500 transition-all ease-in-out">
                        <div className="img bg-[#eee] flex items-center justify-center rounded-t-lg">
                            <Image
                                src={'/image/car-1.png'}
                                width={350}
                                height={200}
                                alt="Car 1"
                                className="object-cover"
                            />
                        </div>
                        <div className="flex flex-col bg-[#eee] rounded-b-lg p-3">
                            <div className="text text-center mt-3">
                                <h4 className='text-2xl font-semibold text-zinc-700'>Hyundai Kona Electric</h4>
                                <Rating className='my-2' name="size-medium" defaultValue={3} readOnly />
                            </div>
                            <div className="text-center my-3">
                                <p className='bg-white text-color_red w-[250px] m-auto rounded-full text-2xl py-2 '>$187:00/Day</p>
                            </div>
                            <div className="details flex items-center justify-center gap-4 my-4">
                                <div className="flex flex-col gap-2">
                                    <div className="flex">
                                        <PeopleIcon />
                                        <span className="mx-2">|</span>
                                        <span className='text-zinc-600 font-semibold'>4 Seat</span>
                                    </div>
                                    <div className="flex">
                                        <DirectionsCarIcon />
                                        <span className="mx-2">|</span>
                                        <span className='text-zinc-600 font-semibold'>2015</span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex">
                                        <DirectionsCarIcon />
                                        <span className="mx-2">|</span>
                                        <span className='text-zinc-600 font-semibold'>AT/MT</span>
                                    </div>
                                    <div className="flex">
                                        <SettingsIcon />
                                        <span className="mx-2">|</span>
                                        <span className='text-zinc-600 font-semibold'>Auto</span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex">
                                        <LocalGasStationIcon />
                                        <span className="mx-2">|</span>
                                        <span className='text-zinc-600 font-semibold'>Petrol</span>
                                    </div>
                                    <div className="flex">
                                        <AddRoadIcon />
                                        <span className="mx-2">|</span>
                                        <span className='text-zinc-600 font-semibold'>27k</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center my-3">
                                <button className='bg-color_red text-white text-center py-2 px-4 rounded-lg w-full font-semibold text-xl'>Book Now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='border p-5 rounded-lg cursor-pointer'>
                    <div className="flex flex-col gap-2 hover:shadow-lg hover:shadow-red-500 transition-all ease-in-out">
                        <div className="img bg-[#eee] flex items-center justify-center rounded-t-lg">
                            <Image
                                src={'/image/car-1.png'}
                                width={350}
                                height={200}
                                alt="Car 1"
                                className="object-cover"
                            />
                        </div>
                        <div className="flex flex-col bg-[#eee] rounded-b-lg p-3">
                            <div className="text text-center mt-3">
                                <h4 className='text-2xl font-semibold text-zinc-700'>Hyundai Kona Electric</h4>
                                <Rating className='my-2' name="size-medium" defaultValue={3} readOnly />
                            </div>
                            <div className="text-center my-3">
                                <p className='bg-white text-color_red w-[250px] m-auto rounded-full text-2xl py-2 '>$187:00/Day</p>
                            </div>
                            <div className="details flex items-center justify-center gap-4 my-4">
                                <div className="flex flex-col gap-2">
                                    <div className="flex">
                                        <PeopleIcon />
                                        <span className="mx-2">|</span>
                                        <span className='text-zinc-600 font-semibold'>4 Seat</span>
                                    </div>
                                    <div className="flex">
                                        <DirectionsCarIcon />
                                        <span className="mx-2">|</span>
                                        <span className='text-zinc-600 font-semibold'>2015</span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex">
                                        <DirectionsCarIcon />
                                        <span className="mx-2">|</span>
                                        <span className='text-zinc-600 font-semibold'>AT/MT</span>
                                    </div>
                                    <div className="flex">
                                        <SettingsIcon />
                                        <span className="mx-2">|</span>
                                        <span className='text-zinc-600 font-semibold'>Auto</span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex">
                                        <LocalGasStationIcon />
                                        <span className="mx-2">|</span>
                                        <span className='text-zinc-600 font-semibold'>Petrol</span>
                                    </div>
                                    <div className="flex">
                                        <AddRoadIcon />
                                        <span className="mx-2">|</span>
                                        <span className='text-zinc-600 font-semibold'>27k</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center my-3">
                                <button className='bg-color_red text-white text-center py-2 px-4 rounded-lg w-full font-semibold text-xl'>Book Now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='border p-5 rounded-lg cursor-pointer'>
                    <div className="flex flex-col gap-2 hover:shadow-lg hover:shadow-red-500 transition-all ease-in-out">
                        <div className="img bg-[#eee] flex items-center justify-center rounded-t-lg">
                            <Image
                                src={'/image/car-1.png'}
                                width={350}
                                height={200}
                                alt="Car 1"
                                className="object-cover"
                            />
                        </div>
                        <div className="flex flex-col bg-[#eee] rounded-b-lg p-3">
                            <div className="text text-center mt-3">
                                <h4 className='text-2xl font-semibold text-zinc-700'>Hyundai Kona Electric</h4>
                                <Rating className='my-2' name="size-medium" defaultValue={3} readOnly />
                            </div>
                            <div className="text-center my-3">
                                <p className='bg-white text-color_red w-[250px] m-auto rounded-full text-2xl py-2 '>$187:00/Day</p>
                            </div>
                            <div className="details flex items-center justify-center gap-4 my-4">
                                <div className="flex flex-col gap-2">
                                    <div className="flex">
                                        <PeopleIcon />
                                        <span className="mx-2">|</span>
                                        <span className='text-zinc-600 font-semibold'>4 Seat</span>
                                    </div>
                                    <div className="flex">
                                        <DirectionsCarIcon />
                                        <span className="mx-2">|</span>
                                        <span className='text-zinc-600 font-semibold'>2015</span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex">
                                        <DirectionsCarIcon />
                                        <span className="mx-2">|</span>
                                        <span className='text-zinc-600 font-semibold'>AT/MT</span>
                                    </div>
                                    <div className="flex">
                                        <SettingsIcon />
                                        <span className="mx-2">|</span>
                                        <span className='text-zinc-600 font-semibold'>Auto</span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex">
                                        <LocalGasStationIcon />
                                        <span className="mx-2">|</span>
                                        <span className='text-zinc-600 font-semibold'>Petrol</span>
                                    </div>
                                    <div className="flex">
                                        <AddRoadIcon />
                                        <span className="mx-2">|</span>
                                        <span className='text-zinc-600 font-semibold'>27k</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center my-3">
                                <button className='bg-color_red text-white text-center py-2 px-4 rounded-lg w-full font-semibold text-xl'>Book Now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide> */}
            </Swiper>
        </div>
    );
}

export default Cars;
