import React from 'react'
import Whatsaap from './Whatsaap';
import ContactForm from './ContactForm';
import Main from './Main';
import ScrollIndicator from './ScrollIndicator';
import PageSEO from './PageSEO';
import { PAGES, SITE } from '../lib/seo';
const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${SITE.url}/contact#webpage`,
  "url": PAGES.contact.canonical,
  "name": PAGES.contact.title,
  "description": PAGES.contact.description,
  "isPartOf": { "@id": `${SITE.url}/#website` },
  "about": { "@id": `${SITE.url}/#organization` }
};

export default function Contact() {
    return (
        <>
            <PageSEO
              title={PAGES.contact.title}
              description={PAGES.contact.description}
              canonical={PAGES.contact.canonical}
              ogImage={PAGES.contact.ogImage}
              structuredData={contactSchema}
            />
            <Whatsaap />
            <div className="bg-black h-fit top-0 flex justify-center items-center">
                <section className=" relative flex flex-col justify-center items-center md:mx-5 2xl:px-8 h-fit">
                    <img src="https://res.cloudinary.com/dbtlo70e5/image/upload/q_auto/f_auto/v1772900613/0P0A9756.JPG_im87u7.jpg" alt=""
                        className=" h-90  md:h-150 lg:h-180 2xl:h-215 w-screen md:m-5 lg:m-6 2xl:m-8 object-cover" />
                    <div className="absolute inset-0 bg-black/60 2xl:m-8 "></div>
                    <div className=" absolute flex flex-col bottom-5 md:bottom-10 lg:bottom-10 text-balance text-center items-center lg:w-150 2xl:w-180 text-white">
                        <h3 className="text-red-600 font-cormorant lowercase md:text-2xl text-center tracking-wide">
                            LET’S DISCUSS HOW WE CAN
                        </h3>
                        <h1 className='text-white text-xl md:text-4xl lg:text-5xl xl:text-6xl font-cormorant uppercase text-balance text-center w-79 md:w-100 lg:w-full'>
                            Make your wedding day memorable
                        </h1>
                        <p className='font-cormorant text-xs md:text-lg'>For wedding & events, please fill the contact form below.</p>
                        <p className='font-cormorant text-xs md:text-lg'>For all other inquiries, please email us directly at mahakstudio2000@gmail.com</p>
                        <ScrollIndicator />
                    </div>
                </section>

            </div>
            <div className="bg-[#060010] flex justify-center items-center text-white p-20">
                <ContactForm />
            </div>
            <div className=''>
                <Main />
            </div>
        </>
    )
}
