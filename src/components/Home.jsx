import React from 'react';
import {HiArrowNarrowRight} from "react-icons/hi";
import {Link} from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full min-h-screen bg-[#011933]'>
      <div className='max-w-[1000px] h-full mx-auto px-8 flex flex-col justify-center'>
        <p className='text-[#f7f3ea]'>Hi, I'm</p>
        <h1 className='text-4xl text-[#EE8A73] font-bolder'>Cédric LE BRUN</h1>
        <h2 className='text-[#f7f3ea]'>I'm a Full stack developer.</h2>
        <div>
          <Link to="work" smooth={true} duration={500} className='text-[#EE8A73] text-2xl group px-6 py-3 my-2 flex items-center border-2 border-[#0a192f]'>
            View Work <span className='text-lg group-hover:rotate-90 duration-500'><HiArrowNarrowRight className='ml-3' /></span>
          </Link>
        </div>

      </div>

    </div>
  )
}

export default Home
