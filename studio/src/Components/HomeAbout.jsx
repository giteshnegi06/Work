import { motion } from "framer-motion";
import { Camera, Film, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function HomeAbout() {
    return (
        <>
            <main>
                {/* Hero Segment */}
                <section className="relative h-[60vh] flex items-center justify-center overflow-hidden pt-20" id="hero">
                    <div className="absolute inset-0 z-0 overflow-hidden">
                        <motion.img
                            initial={{ scale: 1.2, opacity: 0 }}
                            animate={{ scale: 1, opacity: 0.4 }}
                            transition={{ duration: 2 }}
                            src="https://res.cloudinary.com/dbtlo70e5/image/upload/q_auto/f_auto/v1776093329/042A0260.JPG_ltmyai.jpg"
                            className="w-full h-full object-cover grayscale"
                            referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-linear -to-t from-[#050505] via-[#050505]/60 to-[#050505]" />
                    </div>
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-5xl md:text-8xl font-serif text-white text-center relative z-10"
                        id="hero-title"
                    >
                        A Legacy in Frames
                    </motion.h1>
                </section>

                {/* The Story Section */}
                <section className="relative py-24 md:py-40 px-6 max-w-7xl mx-auto" id="our-journey-section">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                        {/* Left: Year/Timeline Anchor */}
                        <div className="lg:col-span-3 lg:sticky lg:top-32" id="story-sidebar">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="space-y-4"
                            >
                                <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50" id="established-label">Since 2000</div>
                                <h2 className="text-4xl md:text-5xl font-serif italic text-white" id="journey-title">Our Story</h2>
                                <div className="h-px w-20 bg-white/20" />
                            </motion.div>
                        </div>

                        {/* Right: Narrative Content */}
                        <div className="lg:col-span-9 space-y-24" id="story-content">

                            {/* Introduction */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="max-w-3xl"
                                id="story-intro"
                            >
                                <p className="text-xl md:text-2xl leading-relaxed font-light text-white/80" id="intro-p">
                                    "It started with a single roll of film and a vision that wouldn't quit. Thirty years ago,
                                    I remember walking into a small rented corner in Haryana, clutching a vintage mechanical camera
                                    like it was the most precious thing in the world."
                                </p>
                            </motion.div>

                            {/* The Struggle Phase */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="flex flex-col md:flex-row gap-12 items-center"
                                id="struggle-phase"
                            >
                                <div className="flex-1 space-y-6">
                                    <div className="flex items-center gap-3 text-white/40" id="old-tech-icon">
                                        <Film size={20} />
                                        <span className="text-[10px] uppercase tracking-widest font-bold">The Grainy Era</span>
                                    </div>
                                    <h3 className="text-3xl font-serif mb-4" id="struggle-title">The Weight of Grain</h3>
                                    <p className="text-white/60 leading-loose" id="struggle-p">
                                        In those early days, every frame was a gamble. We operated on razor-thin margins.
                                        I recall a season where we faced devastating losses—a batch of damaged film rolls that meant
                                        retaking shots on my own expense just to keep a promise. We were artisans fighting for space
                                        in a market that didn't yet understand 'cinema'. The move to digital wasn't a choice; it was survival.
                                        I felt like the ground was shifting beneath us.
                                    </p>
                                </div>
                                <div className="w-full md:w-1/3 aspect-3/4 group relative overflow-hidden rounded-2xl border border-white/10" id="vintage-image-wrapper">
                                    <img
                                        src="https://images.unsplash.com/photo-1495707902641-75cac588d2e9?q=80&w=2670&auto=format&fit=crop"
                                        alt="Vintage Camera"
                                        className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 grayscale"
                                        referrerPolicy="no-referrer"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent flex items-end p-6">
                                        <span className="text-[10px] uppercase tracking-widest opacity-50" id="vintage-label">Circa 2000</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* The Pivot / New Tech */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="flex flex-col md:flex-row-reverse gap-12 items-center"
                                id="pivot-phase"
                            >
                                <div className="flex-1 space-y-6">
                                    <div className="flex items-center gap-3 text-white/40" id="new-tech-icon">
                                        <Sparkles size={20} />
                                        <span className="text-[10px] uppercase tracking-widest font-bold">The Digital Renaissance</span>
                                    </div>
                                    <h3 className="text-3xl font-serif mb-4" id="pivot-title">Trading Shadows for Pixels</h3>
                                    <p className="text-white/60 leading-loose" id="pivot-p">
                                        We didn't just adapt to the new tech; we obsessed over it. We traded the darkroom's chemicals
                                        for 4K resolution and high-speed cinema sensors. It was terrifying to see our old ways become obsolete,
                                        but then something changed. We realized that while the tools evolved, our 'eye' was sharper than ever.
                                        The losses of the past became the lessons that built our current resilience.
                                    </p>
                                </div>
                                <div className="w-full md:w-1/3 aspect-3/4 group relative overflow-hidden rounded-2xl border border-white/10" id="modern-image-wrapper">
                                    <img
                                        src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2670&auto=format&fit=crop"
                                        alt="Modern Cinema Camera"
                                        className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
                                        referrerPolicy="no-referrer"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent flex items-end p-6">
                                        <span className="text-[10px] uppercase tracking-widest opacity-50" id="modern-label">4K Cinematic Mastery</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Conclusion / Success */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="max-w-2xl py-12 border-t border-white/10"
                                id="story-conclusion"
                            >
                                <h3 className="text-4xl font-serif mb-8" id="conclusion-title">Today, We Paint with Light</h3>
                                <p className="text-white/80 leading-relaxed text-lg italic mb-10" id="conclusion-p">
                                    "From those first grainy photos in 2000 to becoming the most sought-after wedding studio in
                                    Karnal and beyond—our journey has been one of relentless passion. We faced the silence of losses
                                    to earn the applause of our clients today. This isn't just a business for us; it's a thirty-year
                                    romance with the perfect frame."
                                </p>
                                <Link to="/portfolio">
                                    <button className="flex items-center gap-4 px-8 py-4 text-white border border-white/20 rounded-full hover:bg-white hover:text-black transition-all group">
                                        <span className="uppercase text-xs tracking-widest font-bold">Explore Our Work</span>
                                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </Link>
                            </motion.div>

                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
