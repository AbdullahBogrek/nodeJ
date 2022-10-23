import React from 'react'

const Searchbar = () => {
  return (
    <div className='mb-10'>
      <input className='searchbar px-6 py-3 w-[500px] bg-primary text-secondary hover:shadow-xl focus:outline-0 focus:shadow-xl' placeholder='Search...'></input>
    </div>
  )
}

export default Searchbar