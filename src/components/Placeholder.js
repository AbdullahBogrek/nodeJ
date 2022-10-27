import React from 'react'

import placeholder from "../placeholder.png"

const Placeholder = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full p-0 m-0'>
        <img src={placeholder} alt="note placeholder" className="w-1/3 h-1/3"/>
        <h1 className='text-2xl text-center mt-5'>Hemen not ekleyerek başlayabilirsin.</h1>
    </div>
  )
}

export default Placeholder