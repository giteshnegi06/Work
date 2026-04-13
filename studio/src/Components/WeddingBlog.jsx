// WeddingBlog.js
import React from 'react';
import { useParams } from "react-router-dom";
import { weddingData } from './WeddingData';
import PageSEO from './PageSEO';
import { weddingPageSEO, SITE } from '../lib/seo';

export default function WeddingBlog() {
    const { slug } = useParams();

    const couple = weddingData.find(item => item.slug === slug);

    if (!couple) {
        return <div className="text-white text-center py-20">Couple not found</div>;
    }

    const seo = weddingPageSEO(couple);

    const weddingSchema = {
      "@context": "https://schema.org",
      "@type": "ImageGallery",
      "@id": `${seo.canonical}#gallery`,
      "name": seo.title,
      "description": seo.description,
      "url": seo.canonical,
      "image": couple.image.map((src, i) => ({
        "@type": "ImageObject",
        "contentUrl": src.trim(),
        "name": `${couple.title} Wedding Photo ${i + 1} by Mahak Studio`,
        "author": { "@id": `${SITE.url}/#organization` }
      }))
    };

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE.url },
        { "@type": "ListItem", "position": 2, "name": "Portfolio", "item": `${SITE.url}/portfolio` },
        { "@type": "ListItem", "position": 3, "name": couple.title, "item": seo.canonical },
      ]
    };

    return (
        <>
            <PageSEO
              title={seo.title}
              description={seo.description}
              canonical={seo.canonical}
              ogImage={seo.ogImage}
              structuredData={[weddingSchema, breadcrumbSchema]}
            />
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
                                src={img.trim()}
                                alt={`${couple.title} wedding photo ${index + 1} by Mahak Studio`}
                                loading={index < 4 ? "eager" : "lazy"}
                                decoding="async"
                                className="xl:h-250 object-cover rounded-xl"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}