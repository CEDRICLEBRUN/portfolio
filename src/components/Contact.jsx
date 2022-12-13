 import React from 'react'

 const Contact = () => {
   return (
     <div name='contact' className='w-full min-h-screen bg-[#f7f3ea] flex justify-center items-center text-[#011933]'>
      <form action="https://getform.io/f/15b6242a-e261-4dda-abb6-34789b1c2e11" method='POST' className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#011933]'>
            Contact
          </p>
          <p className='py-4'>
            Please submit the form below or contact me directly by email : lebruncedric44@gmail.com
          </p>
        </div>
        <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-[#ccd6f6]' type="text" placeholder='Email' name='email'/>
        <textarea className='bg-[#ccd6f6] p-2' placeholder='Message' name="message" rows="5"></textarea>
        <button className='border-2 border-[#011933] px-4 py-3 my-8 mx-auto hover:text-[#f7f3ea] hover:bg-[#011933] hover:duration-500'>Let's collaborate</button>
      </form>
     </div>
   )
 }

 export default Contact
