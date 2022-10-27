import React from 'react'

import logo from "../coin.png"

const Header = () => {
  return (
    <div className='flex flex-row justify-between w-11/12 lg:w-7/12 items-center mb-5 px-7 lg:px-16 pb-3 text-white'>
      <div className='inline-flex justify-start items-center'>
        <img src={logo} alt="logo" className='mr-3 w-7 h-7'/>
        <a href='/'><h2 className='text-3xl hover:text-secondary cursor-pointer'>noteJ</h2></a>
      </div>
      {/* <button><i class="fa-regular fa-moon fa-lg hover:text-secondary"></i></button> */}
    </div>
  )
}

export default Header