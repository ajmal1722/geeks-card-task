import React from 'react';
import { RiFlightLandLine } from "react-icons/ri";
import { GiSandsOfTime } from "react-icons/gi";
import Like from './Like';

const Card = ({ card }) => {

    return (
        <div className='p-4 rounded-2xl shadow-lg hover:scale-105 w-4/12'>
            <div className='relative'>
                <img 
                    src={card.image} alt="" 
                    className='rounded-2xl object-fill'
                />
                <div className='bg-white rounded-t-xl absolute bottom-0 right-7 flex gap-2 items-center px-3'>
                    <GiSandsOfTime className='text-red-600' />
                    <h1 className='text-sm font-semibold p-1'>
                        {card.date}
                    </h1>
                </div>
                <Like />
            </div>
            <div>
                <h1 className='font-bold text-lg my-3 mr-24'>
                    { card?.name }
                </h1>
                <div className='flex gap-2 items-center'>
                    <RiFlightLandLine className='text-red-600' />
                    <p className='text-xs my-2'>
                        Pickup: {card.pickup}
                    </p>
                </div>
                <div className='flex justify-between'>
                    <div className=''>
                        <p className=' text-xs mt-1'>
                            Starts at
                        </p>
                        <div className='flex gap-3 mx-2 mb-1'>
                            <h2 className='text-gray-400 mt-1 text-sm'>
                                ₹ {card.price}
                            </h2>
                            <h1 className='font-bold text-xl'>
                                ₹ {card.discountPrice}
                            </h1>
                        </div>
                        <p className='text-gray-400 text-xs'>
                            *Excluding all taxes
                        </p>
                    </div>
                    <div className='flex items-center'>
                        <button className='bg-red-500 text-white p-3 px-5 font-semibold rounded-md'>
                            View Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
