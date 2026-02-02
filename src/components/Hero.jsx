import React from 'react';
import { motion } from 'framer-motion';
import AnimatedBackground from './AnimatedBackground';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.0,
                ease: [0.25, 0.1, 0.25, 1.0] // Cubic bezier for smooth, premium feel
            },
        },
    };

    return (
        <section className="relative min-h-[calc(100vh+2rem)] flex items-center justify-center overflow-hidden">
            {/* Dynamic Background */ }
            <AnimatedBackground opacity={ 0.6 } speed={ 1 } />

            <motion.div
                className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center justify-center"
                variants={ containerVariants }
                initial="hidden"
                animate="visible"
            >
                <motion.div variants={ itemVariants }>
                    <span className="inline-block py-1 px-4 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-indigo-200 text-xs font-semibold mb-5 tracking-wider uppercase">
                        Excellence in Every Detail
                    </span>
                </motion.div>

                <motion.h1
                    variants={ itemVariants }
                    className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-[1.1] max-w-3xl"
                >
                    Crafting <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 via-purple-400 to-pink-500 animate-pulse-slow">Unforgettable</span> <br />
                    <span className="relative">
                        Moments, One Event at a Time.
                    </span>
                    <div className="-bottom-1 w-full h-1 bg-linear-to-r my-2 from-transparent via-indigo-500 to-transparent opacity-50" />
                </motion.h1>

                <motion.p
                    variants={ itemVariants }
                    className="text-sm md:text-base text-gray-300 max-w-xl mx-auto mb-10 leading-relaxed font-light"
                >
                    Transforming your vision into reality with precision planning and creative brilliance. From grand weddings to corporate galas.
                </motion.p>

                <motion.div
                    variants={ itemVariants }
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    {/* <button className="group relative px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold transition-all shadow-2xl shadow-indigo-500/40 hover:bg-indigo-500 hover:scale-105 active:scale-95 overflow-hidden">
                        <span className="relative z-10">Start Planning Now</span>
                        <div className="absolute inset-0 bg-linear-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    </button> */}

                    <button className="px-4 py-2 text-sm bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-lg font-medium backdrop-blur-xl transition-all hover:scale-105 active:scale-95">
                        Explore Gallery
                    </button>
                </motion.div>
            </motion.div>

            {/* Hero Bottom Decor */ }
            <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-[#0a0a0b] to-transparent z-20 pointer-events-none" />

            {/* Decorative Floating Blobs */ }
            <div className="absolute top-1/4 left-10 w-2 h-2 rounded-full bg-indigo-500 blur-sm animate-ping opacity-50" />
            <div className="absolute bottom-1/3 right-10 w-3 h-3 rounded-full bg-pink-500 blur-sm animate-bounce opacity-50" />
        </section>
    );
};

export default Hero;
