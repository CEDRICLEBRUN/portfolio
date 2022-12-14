import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full min-h-screen bg-[#f7f3ea]'>
      <div className='flex flex-col justify-center items-center w-full h-full text-[#011933]'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#011933]'>
              About
            </p>
          </div>
          <div>
          </div>
        </div>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div>
            <p>

            </p>
          </div>
          <div>
            <p>
              I'm a new developper.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
