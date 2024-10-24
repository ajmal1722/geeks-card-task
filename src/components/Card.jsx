import React from 'react'

const Card = ({ card }) => {
    
    return (
        <div className='p-3 shadow-lg'>
            <div>
                <img 
                    src="https://plus.unsplash.com/premium_photo-1697730314165-2cd71dc3a6a4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bXVubmFyfGVufDB8fDB8fHww" alt="" 
                />
            </div>
            <div>
                <h1>
                    { card?.name }
                </h1>
                <p>
                    Pickup: sample pickup
                </p>
                <div>
                    <div>
                        <p>
                            Starts at
                        </p>
                        <h2>
                            ₹ 32,577
                        </h2>
                        <h1>
                            ₹25,800
                        </h1>
                        <p>
                            *Excluding all taxes
                        </p>
                    </div>
                    <button>
                        View Details
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card
