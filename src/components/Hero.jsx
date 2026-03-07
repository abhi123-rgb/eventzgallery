import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';

const Hero = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

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
                    <span className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-purple-300 text-sm font-medium mb-8 tracking-wide">
                        <Sparkles className="w-4 h-4 text-purple-400" />
                        Creating Unforgettable Moments
                    </span>
                </motion.div>

                <motion.h1
                    variants={ itemVariants }
                    className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1] max-w-4xl"
                >
                    Elevate Your Events <br className="hidden sm:block" />
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 via-purple-400 to-pink-500 animate-pulse-slow">
                        Beyond Expectations
                    </span>
                </motion.h1>

                <motion.p
                    variants={ itemVariants }
                    className="text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
                >
                    From intimate gatherings to grand celebrations, we transform your vision into extraordinary experiences that leave lasting impressions.
                </motion.p>

                <motion.div
                    variants={ itemVariants }
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 sm:w-auto"
                >
                    <button
                        onClick={ () => scrollToSection('contact') }
                        className="group relative flex items-center justify-center gap-2 px-8 py-3.5 bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-full font-medium transition-all shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-103 active:scale-95 overflow-hidden sm:w-auto"
                    >
                        <span className="relative z-10">Start Planning</span>
                        <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <button
                        onClick={ () => scrollToSection('services') }
                        className="px-8 py-3.5 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full font-medium backdrop-blur-xl transition-all hover:scale-103 active:scale-95 sm:w-auto"
                    >
                        Explore Services
                    </button>
                </motion.div>
            </motion.div>

            {/* Hero Bottom Decor */ }
            <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-[#0a0a0b] to-transparent z-20 pointer-events-none" />

        </section>
    );
};

export default Hero;
