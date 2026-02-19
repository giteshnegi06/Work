import React from 'react'
import ContactForm from "./ContactForm";

export default function ContactUs() {
  return (
    <div className='h-250 bg-black z-50 text-white p-30 items-center'>
        <div className=' flex flex-col lg:flex-row bg-white/10 rounded-[65px] shadow-2xl shadow-white/40 justify-around'>
          <div className='bg-amber-400 h-150 '>
            <h1 className='text-6xl font-cormorant text-blue-400'>About <span className='text-red-500'>US</span></h1>
            <p></p>
        </div>
        <div className=' '>
            <ContactForm/>
        </div>
        </div>
    </div>
  )
}
