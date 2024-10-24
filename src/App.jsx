import { useState } from 'react';
import Card from './components/Card';
import './App.css'

function App() {
  const data = [{
    name: 'Munnar Thekkady Alleppey and Kovalam Tour',
  },{
    name: 'Munnar Thekkady Alleppey and Kovalam Tour',
  },{
    name: 'Munnar Thekkady Alleppey and Kovalam Tour',
  },]

  return (
    <>
      <div className='flex gap-5 md:px-20'>
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
