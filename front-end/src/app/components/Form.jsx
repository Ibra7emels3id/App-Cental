'use client'
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React, { useState } from 'react';
import { useAuth } from '../context/context';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const Form = () => {
    const [formData, setFormData] = useState({});
    const { data: user, status } = useSession();
    const { category, getAllOrder } = useAuth()
    const Router = useRouter();


    // console.log(category);


    // Handle Change events
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    // Handle Submit Date To Server
    const HandelSubmitData = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_SERVER}/api/order`, {
                ...formData,
                userId: user?.user?.id,
            });
            if (res.status === 201) {
                toast.success(res.data.message);
                getAllOrder()
                Router.push('/order')
            }
        } catch (error) {
            console.error(error);
        }
    }


    return (
        <div className='bg-background_light w-[600px] p-5'>
            <h3 className='text-center text-white font-bold text-2xl 2lg:text-3xl capitalize mb-5 mt-4'>CONTINUE CAR RESERVATION</h3>
            <div className="form">
                <form onSubmit={HandelSubmitData} className='flex flex-col gap-4'>
                    <div className='form-group'>
                        <select onChange={handleChange} className='w-full h-10 border-none focus:border-none outline-none focus:outline-none rounded px-2' name="nameCar" id="nameCar">
                            <option hidden>Select Your Car type</option>
                            {category?.map((it) => {
                                return <option key={it._id} value={it.name}>{it.name}</option>
                            })}
                        </select>
                    </div>
                    <div className='form-group'>
                        <select onChange={handleChange} name="In_city" id="city" className='w-full h-10 border-none focus:border-none outline-none focus:outline-none rounded px-2'>
                            <option hidden>Select In Your City</option>
                            <option value="Cairo">Cairo</option>
                            <option value="Alexandria">Alexandria</option>
                            <option value="Giza">Giza</option>
                            <option value="Port-Said">Port Said</option>
                            <option value="Suez">Suez</option>
                            <option value="Luxor">Luxor</option>
                            <option value="El-Mansura">El Mansura</option>
                            <option value="El-Mahalla">El-Mahalla</option>
                            <option value="Tanta">Tanta</option>
                            <option value="Asyut">Asyut</option>
                            <option value="Ismailia">Ismailia</option>
                            <option value="Fayyum">Fayyum</option>
                            <option value="Zagazig">Zagazig</option>
                            <option value="Aswan">Aswan</option>
                            <option value="Damietta">Damietta</option>
                        </select>
                    </div>
                    <div className='form-group'>
                        <Link href={'/'} className='text-white'>Need a different drop-off location?</Link>
                    </div>
                    <div className='form-group'>
                        <select onChange={handleChange} name="off_city" id="city" className='w-full h-10 border-none focus:border-none outline-none focus:outline-none rounded px-2'>
                            <option hidden>Select In Your City</option>
                            <option value="Cairo">Cairo</option>
                            <option value="Alexandria">Alexandria</option>
                            <option value="Giza">Giza</option>
                            <option value="Port-Said">Port Said</option>
                            <option value="Suez">Suez</option>
                            <option value="Luxor">Luxor</option>
                            <option value="El-Mansura">El Mansura</option>
                            <option value="El-Mahalla">El-Mahalla</option>
                            <option value="Tanta">Tanta</option>
                            <option value="Asyut">Asyut</option>
                            <option value="Ismailia">Ismailia</option>
                            <option value="Fayyum">Fayyum</option>
                            <option value="Zagazig">Zagazig</option>
                            <option value="Aswan">Aswan</option>
                            <option value="Damietta">Damietta</option>
                        </select>
                    </div>
                    <div className='form-group flex gap-2'>
                        <input onChange={handleChange} className='w-full h-10 px-2 border-none focus:border-none outline-none focus:outline-none rounded' type='date' name='date_on' id='date_on' required />
                        <select onChange={handleChange} className='w-full h-10 px-2 border-none focus:border-none outline-none focus:outline-none rounded' name='time_on' aria-label="Default select example" required>
                            <option hidden >select time 12:00AM</option>
                            <option value="12:00AM">12:00AM</option>
                            <option value="1:00AM">1:00AM</option>
                            <option value="2:00AM">2:00AM</option>
                            <option value="3:00AM">3:00AM</option>
                            <option value="4:00AM">4:00AM</option>
                            <option value="5:00AM">5:00AM</option>
                            <option value="6:00AM">6:00AM</option>
                            <option value="7:00AM">7:00AM</option>
                            <option value="8:00AM">8:00AM</option>
                            <option value="9:00AM">9:00AM</option>
                            <option value="10:00AM">10:00AM</option>
                            <option value="11:00AM">11:00AM</option>
                            <option value="12:00PM">12:00PM</option>
                            <option value="1:00PM">1:00PM</option>
                            <option value="2:00PM">2:00PM</option>
                            <option value="3:00PM">3:00PM</option>
                            <option value="4:00PM">4:00PM</option>
                            <option value="5:00PM">5:00PM</option>
                            <option value="6:00PM">6:00PM</option>
                            <option value="7:00PM">7:00PM</option>
                            <option value="8:00PM">8:00PM</option>
                            <option value="9:00PM">9:00PM</option>
                            <option value="10:00PM">10:00PM</option>
                            <option value="11:00PM">11:00PM</option>
                        </select>
                    </div>
                    <div className='form-group flex gap-2'>
                        <input onChange={handleChange} className='w-full h-10 px-2 border-none focus:border-none outline-none focus:outline-none rounded' name='date_off' type='date' id='date_off' required />
                        <select onChange={handleChange} className='w-full h-10 px-2 border-none focus:border-none outline-none focus:outline-none rounded' name='time_off' aria-label="Default select example">
                            <option hidden >select time 12:00PM</option>
                            <option value="12:00AM">12:00AM</option>
                            <option value="1:00AM">1:00AM</option>
                            <option value="2:00AM">2:00AM</option>
                            <option value="3:00AM">3:00AM</option>
                            <option value="4:00AM">4:00AM</option>
                            <option value="5:00AM">5:00AM</option>
                            <option value="6:00AM">6:00AM</option>
                            <option value="7:00AM">7:00AM</option>
                            <option value="8:00AM">8:00AM</option>
                            <option value="9:00AM">9:00AM</option>
                            <option value="10:00AM">10:00AM</option>
                            <option value="11:00AM">11:00AM</option>
                            <option value="12:00PM">12:00PM</option>
                            <option value="1:00PM">1:00PM</option>
                            <option value="2:00PM">2:00PM</option>
                            <option value="3:00PM">3:00PM</option>
                            <option value="4:00PM">4:00PM</option>
                            <option value="5:00PM">5:00PM</option>
                            <option value="6:00PM">6:00PM</option>
                            <option value="7:00PM">7:00PM</option>
                            <option value="8:00PM">8:00PM</option>
                            <option value="9:00PM">9:00PM</option>
                            <option value="10:00PM">10:00PM</option>
                            <option value="11:00PM">11:00PM</option>
                        </select>
                    </div>
                    <div className='form-group my-3'>
                        {user ?
                            <div className='flex items-center gsp-3 max-md:flex-col'>
                                <button type='submit' className='w-full flex items-center justify-center gap-3 h-10 px-2 border-none focus:border-none outline-none focus:outline-none rounded bg-color_red hover:bg-red-700 text-white font-semibold text-md capitalize' >Book Now Check Out <svg viewBox="0 -9 58 58" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-7'>
                                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                    <g id="SVGRepo_iconCarrier">
                                        {" "}
                                        <rect
                                            x="0.5"
                                            y="0.5"
                                            width={57}
                                            height={39}
                                            rx="3.5"
                                            fill="white"
                                            stroke="#F3F3F3"
                                        />{" "}
                                        <path
                                            d="M25.7516 27.4332H21.8901L24.3054 13.4325H28.1667L25.7516 27.4332Z"
                                            fill="#15195A"
                                        />{" "}
                                        <path
                                            d="M39.7499 13.7748C38.9882 13.4915 37.7802 13.1787 36.2865 13.1787C32.4731 13.1787 29.7878 15.0851 29.7713 17.8106C29.7396 19.8215 31.6939 20.9384 33.1556 21.6089C34.6495 22.2941 35.1574 22.7413 35.1574 23.352C35.1422 24.29 33.9502 24.7223 32.8384 24.7223C31.2967 24.7223 30.4707 24.4994 29.2153 23.9776L28.7069 23.7539L28.1665 26.8967C29.0722 27.2835 30.7408 27.6268 32.4731 27.6419C36.5249 27.6419 39.1627 25.765 39.1939 22.8605C39.2093 21.2667 38.1774 20.0454 35.9526 19.0475C34.602 18.4069 33.7749 17.9749 33.7749 17.3195C33.7908 16.7236 34.4745 16.1133 35.9991 16.1133C37.2544 16.0834 38.1768 16.3663 38.8755 16.6494L39.2247 16.7981L39.7499 13.7748V13.7748V13.7748Z"
                                            fill="#15195A"
                                        />{" "}
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M46.6618 13.4325H49.6486L52.7639 27.433H49.1885C49.1885 27.433 48.8386 25.8244 48.7278 25.3328H43.7699C43.6266 25.705 42.9595 27.433 42.9595 27.433H38.9078L44.6435 14.5941C45.0409 13.6855 45.7407 13.4325 46.6618 13.4325ZM46.4238 18.556C46.4238 18.556 45.2001 21.6689 44.8821 22.4732H48.0918C47.933 21.7733 47.2017 18.4219 47.2017 18.4219L46.9319 17.2156C46.8182 17.5262 46.6539 17.9533 46.543 18.2414C46.4679 18.4366 46.4173 18.568 46.4238 18.556Z"
                                            fill="#15195A"
                                        />{" "}
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M5.1589 13.4325H11.3716C12.2138 13.462 12.8971 13.7152 13.1194 14.6094L14.4696 21.0422C14.4697 21.0426 14.4699 21.043 14.47 21.0434L14.8832 22.9796L18.6649 13.4325H22.7481L16.6785 27.4184H12.5951L9.15337 15.253C7.96587 14.6021 6.6106 14.0786 5.09534 13.7154L5.1589 13.4325Z"
                                            fill="#15195A"
                                        />{" "}
                                    </g>
                                </svg>
                                </button> <span className='mx-1 text-white font-bold'>Or</span> <button type='submit' className='w-full h-10 px-2 border-none focus:border-none outline-none focus:outline-none rounded bg-color_red hover:bg-red-700 text-white font-semibold text-md capitalize' >Manual booking and payment</button>
                            </div>
                            : <Link href={'/sign-in'} className='w-full h-10 px-2 border-none focus:border-none outline-none focus:outline-none rounded bg-color_red hover:bg-red-700 text-white font-semibold text-xl flex items-center justify-center'>Sign In First</Link>}
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Form;
