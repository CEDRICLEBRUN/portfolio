 import React from 'react'

 const Contact = () => {
   return (
     <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      <form action="https://getform.io/f/15b6242a-e261-4dda-abb6-34789b1c2e11" method='POST' className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl text-gray-300 font-bold inline border-b-4 border-gray-300'>
            Contact
          </p>
          <p className='text-gray-300 py-4'>
            Please submit the form below or contact me directly by email : lebruncedric44@gmail.com
          </p>
        </div>
        <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-[#ccd6f6]' type="text" placeholder='Email' name='email'/>
        <textarea className='bg-[#ccd6f6] p-2' placeholder='Message' name="message" rows="10"></textarea>
        <button className='text-white border-2 px-4 py-3 my-8 mx-auto hover:text-gray-700 hover:bg-white hover:duration-500'>Let's collaborate</button>
      </form>
     </div>
   )
 }

 export default Contact
