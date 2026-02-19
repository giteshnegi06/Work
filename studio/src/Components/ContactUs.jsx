import React from 'react'
import ContactForm from "./ContactForm";

export default function ContactUs() {
  return (
    <div className='h-250 bg-black z-50 text-white flex justify-between p-30 bottom-0'>
        <div className='bg-amber-400 h-150'>
            <h1 className='text-6xl font-cormorant text-blue-400'>About <span className='text-red-500'>US</span></h1>
            <p></p>
        </div>
        <div className=' '>
            <ContactForm/>
        </div>
    </div>
  )
}
