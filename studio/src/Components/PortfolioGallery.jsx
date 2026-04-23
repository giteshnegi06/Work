import React, { useState, useEffect, useCallback } from "react";
import BlurText from "./BlurText";

/* ------------------ CLOUDINARY CONFIG ------------------ */
const cloudName = "dbtlo70e5";

const imageNames = [
    "172A9261_vmopnq.jpg", 
    "172A9301_zlqrby.jpg", 
    "172A9227_sagq9k.jpg",
    "172A9274_a88job.jpg",
    "172A9205_sf850w.jpg",
    "172A9329_nmltnl.jpg",
    "172A9324_hksfiv.jpg",
    "172A9849_vkhfmh.jpg",
    "172A8205_frz2hg.jpg",
    "172A7756_uugqtw.jpg",
    "172A7578_doz8eu.jpg",
    "172A8626_kwvzzf.jpg",
    "172A8631_hnzxpt.jpg",
    "172A8592_mqkoec.jpg",
    "172A7553_sd339e.jpg",
    "172A7590_t9jsnx.jpg",
    "042A2224.JPG_pem0z1.jpg",
    "042A2280.JPG_tquj5i.jpg",
    "042A2307.JPG_y3yfkc.jpg",
    "042A2178.JPG_ihyroq.jpg",
    "042A2376.JPG_czp0qj.jpg",
    "042A1741.JPG_z9lcwm.jpg",
    "042A1727.JPG_y1xhmb.jpg",
    "042A1748.JPG_ocbj7o.jpg",
    "042A8282_vwwngv.jpg",
    "pre_7_kliahc.jpg",
    "pre-5_rsgghr.jpg",
    "042A8538_ehgkup.jpg",
    "042A8260_hegkat.jpg",
    "pre_10_ao8tll.jpg",
    "042A8445_peauo7.jpg",
    "042A8226_sdm9bc.jpg",
    "042A8181_ta7tq9.jpg",
    "11_eir9zu.jpg",
    "17_gi8qit.jpg",
    "16_z1gqdg.jpg",
    "042A4507_copy_yo28bv.jpg",
    "10_h7qbjs.jpg",
    "5_uzcz0s.jpg",
    "042A4218_copy_npe6ob.jpg",
    "7_anirmt.jpg",
    "3D9A0138_y79eo3.jpg",
    "042A2090_o6wj98.jpg",
    "042A2339_feywww.jpg",
    "042A1254_g9dibs.jpg",
    "3D9A0003_icmmqd.jpg",
    "042A2363_dfmkjq.jpg",
    "042A1310_n5mxjd.jpg",
    "042A2347_evgfjq.jpg",
    "3D9A0018_gtajn0.jpg",
    "042A2183_w0j8oh.jpg",
    "042A2192_rwnzkk.jpg",
    "042A2070_ulshyq.jpg",
    "042A2386_spu5xt.jpg",
];

/* ------------------ GENERATE IMAGE URLS ------------------ */
const images = imageNames.map((name, index) => {
    return {
        id: index + 1,
        url: `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto/${name}`,
        thumbnail: `https://res.cloudinary.com/${cloudName}/image/upload/w_400,f_auto,q_auto/${name}`,
    };
});

/* ------------------ COMPONENT ------------------ */
const PortfolioGallery = () => {
    const [currentIndex, setCurrentIndex] = useState(null);
    const [error, setError] = useState(null);

    const selectedImage =
        currentIndex !== null ? images[currentIndex] : null;

    /* ------------------ MODAL CONTROLS ------------------ */
    const openModal = (index) => {
        setCurrentIndex(index);
        setError(null);
        document.body.style.overflow = "hidden";
    };

    const closeModal = useCallback(() => {
        setCurrentIndex(null);
        document.body.style.overflow = "auto";
    }, []);

    const nextImage = useCallback(() => {
        setCurrentIndex((prev) =>
            prev === null ? null : (prev + 1) % images.length
        );
    }, []);

    const prevImage = useCallback(() => {
        setCurrentIndex((prev) =>
            prev === null
                ? null
                : (prev - 1 + images.length) % images.length
        );
    }, []);

    /* ------------------ KEYBOARD SUPPORT ------------------ */
    useEffect(() => {
        const handleKey = (e) => {
            if (currentIndex === null) return;

            if (e.key === "ArrowRight") nextImage();
            if (e.key === "ArrowLeft") prevImage();
            if (e.key === "Escape") closeModal();
        };

        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [currentIndex, nextImage, prevImage, closeModal]);

    /* ------------------ CLEANUP ------------------ */
    useEffect(() => {
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <div className="min-h-screen bg-[#060010] px-4 py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* HEADER */}
                <div className="text-center mb-14 flex flex-col items-center">

                    <h1 className="text-white w-60 md:w-90 lg:w-110 xl:w-130 text-5xl xl:text-8xl text-wrap leading-tight font-italianno">
                        <BlurText
                            text="Our Gallery"
                            delay={100}
                            animateBy="words"
                            direction="top"
                            className=" flex justify-center"
                        />
                    </h1>
                </div>

                {/* ERROR MESSAGE */}
                {error && (
                    <div className="bg-red-100 text-red-700 p-3 rounded mb-6 text-center">
                        {error}
                    </div>
                )}

                {/* GALLERY GRID (Smaller Images) */}
                <div className="columns-3 md:columns-4 lg:columns-6 lg:row-auto gap-3 space-y-3">
                    {images.map((img, index) => (
                        <div
                            key={img.id}
                            onClick={() => openModal(index)}
                            className="break-inside-avoid cursor-pointer overflow-hidden rounded-lg"
                        >
                            <img
                                src={img.thumbnail}
                                alt={`Gallery ${img.id}`}
                                className="w-full max-h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                                loading="lazy"
                                onError={(e) => {
                                    e.target.src =
                                        "https://via.placeholder.com/400x300?text=Image+Not+Found";
                                    setError(
                                        `Image ${img.id} failed to load. Check Public ID.`
                                    );
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* MODAL */}
            {selectedImage && (
                <div
                    onClick={closeModal}
                    className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50"
                >
                    {/* CLOSE BUTTON */}
                    <button
                        onClick={closeModal}
                        className="absolute top-6 right-6 text-white text-3xl"
                    >
                        ✕
                    </button>

                    {/* PREVIOUS */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            prevImage();
                        }}
                        className="absolute left-6 text-white text-4xl hidden md:block"
                    >
                        ‹
                    </button>

                    {/* NEXT */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            nextImage();
                        }}
                        className="absolute right-6 text-white text-4xl hidden md:block"
                    >
                        ›
                    </button>

                    {/* FULL IMAGE */}
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="max-w-5xl max-h-[90vh] p-4"
                    >
                        <img
                            src={selectedImage.url}
                            alt="Full View"
                            className="max-h-[85vh] object-contain rounded-xl"
                        />
                        <div className="text-center text-white mt-4 opacity-70">
                            {currentIndex + 1} / {images.length}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PortfolioGallery;