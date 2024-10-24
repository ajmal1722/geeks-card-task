import React from 'react'

const Card = ({ card }) => {

    return (
        <div className='p-4 shadow-lg'>
            <div>
                <img 
                    src="https://plus.unsplash.com/premium_photo-1697730314165-2cd71dc3a6a4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bXVubmFyfGVufDB8fDB8fHww" alt="" 
                    className='rounded-lg'
                />
            </div>
            <div>
                <h1 className='font-bold text-lg my-3 mr-24'>
                    { card?.name }
                </h1>
                <p className='text-xs my-2'>
                    Pickup: sample pickup
                </p>
                <div className='flex justify-between'>
                    <div className=''>
                        <p className=' text-xs mt-1'>
                            Starts at
                        </p>
                        <div className='flex gap-3 mx-2 mb-1'>
                            <h2 className='text-gray-400 mt-1 text-sm'>
                                ₹ 32,577
                            </h2>
                            <h1 className='font-bold text-xl'>
                                ₹25,800
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
