import React from 'react'

function TopButtons({setQuery}) {

  const cities = [
    {
      id:1,
      title: 'Helsinki'
    },
    {
      id:2,
      title: 'Espoo'
    },
    {
      id:3,
      title: 'Tampere'
    },
    {
      id:4,
      title: 'Vantaa'
    },
    {
      id:5,
      title: 'Oulu'
    },
  ]

  return (
    <div className='flex items-center justify-around my-6'>
      {cities.map((city) => (
        <button 
          key={city.id} 
          className='text-white text-lg font-medium rounded-md px-3 hover:text-cyan-700 hover:bg-white'
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  )
}

export default TopButtons