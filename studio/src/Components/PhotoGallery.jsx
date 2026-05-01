import React, { useState, useEffect, useCallback } from "react";
import BlurText from "./BlurText";

/* ------------------ CLOUDINARY CONFIG ------------------ */
const cloudName = "dbtlo70e5";

const imageNames = [
    "172A9373_ggkxjj.jpg",
    "172A9274_a88job.jpg",
    "172A9237_eenusp.jpg",
    "172A9329_nmltnl.jpg",
    "172A9326_fpp1oh.jpg",
    "172A9861_djthzr.jpg",
    "172A7578_doz8eu.jpg",
    "172A8626_kwvzzf.jpg",
    "172A8631_hnzxpt.jpg",
    "172A8592_mqkoec.jpg",
    "172A7553_sd339e.jpg",
    "172A7590_t9jsnx.jpg",
    "042A6272_afqdl9.jpg",
    "042A6229_ctxily.jpg",
    "042A6567_we6q1n.jpg",
    "042A6501_beafi5.jpg",
    "042A6715_kiwabe.jpg",
    "042A6724_j36s7u.jpg",
    "pre_6_ativl3.jpg",
    "042A8477-Recovered_m5iehm.jpg",
    "042A8481_p8oyon.jpg",
    "042A8260_hegkat.jpg",
    "pre_10_ao8tll.jpg",
    "042A8226_sdm9bc.jpg",
    "0B9A1080.jpg_phobhp.jpg",
    "0B9A1077.jpg_a3v1fz.jpg",
    "0B9A1219.jpg_l8ao3z.jpg",
    "0B9A1217.jpg_e9z9on.jpg",
    "0B9A1268.jpg_hdxuaz.jpg",
    "8.jpg_2_vlckpu.jpg",
    "3.jpg_3_k2aw0g.jpg",
    "5.jpg_2_qjxxiy.jpg",
    "7.jpg_1_dvsena.jpg",
    "6_1.jpg_yvjhmk.jpg",
    "4.jpg_2_j5gag0.jpg",

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
const PhotoGallery = () => {
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
                <div className="text-center mb-8 flex flex-col items-center">
                    <h3 className="text-[#0EA5D9] text-lg md:text-2xl mb-3 font-serif">
                        <BlurText
                            text="Specializing in"
                            delay={400}
                            animateBy="words"
                            direction="top"
                        />
                    </h3>

                    <h1 className="text-white w-60 md:w-90 lg:w-110 xl:w-130 text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-wrap leading-tight font-italianno">
                        <BlurText
                            text="South Asian, Fusion & Destination Weddings"
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

export default PhotoGallery;