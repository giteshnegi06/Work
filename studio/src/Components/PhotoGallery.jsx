import React, { useState, useEffect, useCallback } from "react";
import BlurText from "./BlurText";

/* ------------------ CLOUDINARY CONFIG ------------------ */
const cloudName = "dbtlo70e5";

const imageNames = [
    "042A6396.JPG_ni6dnk.jpg",
    "DSC02614.jpg_dpmdj0.jpg",
    "042A6082_ih0wyi.jpg",
    "56_mkldqe.jpg",
    "042A9046_a3pdyt.jpg",
    "042A2347_evgfjq.jpg",
    "DSC02532.jpg_yjethv.jpg",
    "IMG_4060.JPG_jndi6o.jpg",
    "3D9A0324_arxn2g.jpg",
    "3D9A0093_phaviv.jpg",
    "042A0241.JPG_zktvxq.jpg",
    "105_kbzww6.jpg",
    "51_utmwz2.jpg",
    "042A2183_knbaks.jpg",
    "0N6A4745_bi7g3p.jpg",
    "0P0A9997_esk4mr.jpg",
    "042A9087_en3vz0.jpg",
    "042A5978.JPG_stjhfb.jpg",
    "042A6543_zeagor.jpg",
    "042A6080_omnzdk.jpg",
    "042A9054_wydkrl.jpg",
    "54_bhl4ja.jpg",
    "12_mrbgsm.jpg",
    "33_bazbg0.jpg",
    "042A6027.JPG_msaffp.jpg",
    "103_bauhru.jpg",
    "042A6431.JPG_xrqt5p.jpg",
    "57_ucfjbv.jpg",
    "6.jpg_ohjnkh.jpg",
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