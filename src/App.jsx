import { useState } from 'react';
import Card from './components/Card';
import './App.css'

function App() {
  const data = [{
    name: 'Munnar Thekkady Alleppey and Kovalam Tour',
    date: '6 Days | 5 Nights',
    image: 'https://plus.unsplash.com/premium_photo-1697730314165-2cd71dc3a6a4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bXVubmFyfGVufDB8fDB8fHww',
    price: '32,579',
    discountPrice: '20,000',
    pickup: 'Cochin Airport / Railway Station',
    
  },{
    name: 'Discavar Kashmir & Ladak',
    date: '4 Days | 3 Nights',
    image: 'https://thumbs.dreamstime.com/z/zanskar-blue-river-where-leh-ladak-india-95570243.jpg',
    price: '32,579',
    discountPrice: '30,000',
    pickup: 'Sringar Airport',
  },{
    name: 'Munnar Thekkady Alleppey and Cherri Tour',
    date: '3 Days | 2 Nights',
    image: 'https://luxeglamp.com/wp-content/uploads/2023/02/luxeglamp-Projects-Munnar.jpg',
    price: '32,577',
    discountPrice: '45,000',
    pickup: 'Cochin Airport',
  },]

  const [rangeValue, setRangeValue] = useState(100);
  const [movies, setMovies] = useState(data)

  const handleChange = (e) => {
    setRangeValue(e.target.value);
    console.log(e.target.value);

    const sortedMovies = data.filter(item => {
      return parseInt(item.discountPrice) <= rangeValue
    })
    // console.log(sortedMovies)
    setMovies(sortedMovies)
  }

  return (
    <>
      <div className='mt-10 flex justify-end mx-20'>
        <input 
          type="range"
          value={rangeValue}
          onChange={handleChange}
        />
        <button>
          {rangeValue}
        </button>
      </div>
      <div className='flex gap-5 md:px-20 mt-10'>
        {
          movies.map(card => {
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
