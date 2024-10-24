import { useState } from 'react';
import Card from './components/Card';
import './App.css'

function App() {
  const data = [{
    name: 'Munnar Thekkady Alleppey and Kovalam Tour',
    date: '6 Days | 5 Nights',
    image: 'https://plus.unsplash.com/premium_photo-1697730314165-2cd71dc3a6a4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bXVubmFyfGVufDB8fDB8fHww',
    price: '32,579',
    discountPrice: '25,800',
    pickup: 'Cochin Airport / Railway Station',
    
  },{
    name: 'Discavar Kashmir & Ladak',
    date: '4 Days | 3 Nights',
    image: '',
    price: '32,579',
    discountPrice: '25,800',
    pickup: 'Sringar Airport',
  },{
    name: 'Munnar Thekkady Alleppey and Cherri Tour',
    date: '3 Days | 2 Nights',
    image: '',
    price: '32,577',
    discountPrice: '25,800',
    pickup: 'Cochin Airport',
  },]

  return (
    <>
      <div className='flex gap-5 md:px-20 mt-20'>
        {
          data.map(card => {
            return (
              <Card key={data.name} card={card} />
            )
          })
        }
      </div>
    </>
  )
}

export default App
