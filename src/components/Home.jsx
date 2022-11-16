import React from 'react'
import {HiArrowNarrowRight} from "react-icons/hi"

const Home = () => {
  return (
    <div className='w-full h-screen bg-[#0a192f]'>
      <div className='max-w-[1000px] h-full mx-auto px-8 flex flex-col justify-center'>
        <p className='text-gray-400'>Hi, I'm</p>
        <h1 className='text-4xl text-gray-200'>Cédric LE BRUN</h1>
        <h2 className='text-gray-400'>I'm a Full stack developer.</h2>
        <div>
          <button className='text-gray-100 px-4 py-2 my-2 flex items-center border-2 border-[#0a192f] hover:border-white'>
            View work <HiArrowNarrowRight className='ml-3' />
          </button>
        </div>

      </div>

    </div>
  )
}

export default Home
