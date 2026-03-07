// WeddingBlog.js
import React from 'react';
import { useParams } from "react-router-dom";
import { weddingData } from './WeddingData';

export default function WeddingBlog() {
    const { slug } = useParams();


    const couple = weddingData.find(item => item.slug === slug);


    if (!couple) {
        return <div className="text-white text-center py-20">Couple not found</div>;
    }

    return (
        <>
            <div className="bg-[#060010] flex justify-center py-5 md:py-20">
                <div className="flex flex-col items-center">
                    <div className='max-w-6xl px-4 mt-20 space-y-5'>
                        <h1 className='text-white text-4xl md:text-7xl font-dancing text-center'>{couple.title}</h1>

                        <div className='text-white/80 font-indie-flower text-balance tracking-wide leading-8 text-center text-sm md:text-xl'>
                            {Array.isArray(couple.story) ? (
                                couple.story.map((text, index) => (
                                    <p key={index} className="mb-4">{text}</p>
                                ))
                            ) : (
                                <p>{couple.story}</p>
                            )}
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-5 justify-center mt-15 max-w-8xl px-4">
                        {couple.image.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={couple.title}
                                className="xl:h-250 object-cover rounded-xl"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}