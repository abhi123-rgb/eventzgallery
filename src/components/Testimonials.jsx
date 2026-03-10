import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "Sarah Johnson",
            role: "Wedding Client",
            comment: "EventzGallery made our dream wedding a reality! The attention to detail was incredible, and the team was so supportive throughout the entire process. Highly recommended!",
            rating: 5
        },
        {
            id: 2,
            name: "Michael Chen",
            role: "Corporate Event",
            comment: "Professional, efficient, and creative. They transformed our annual gala into a spectacular evening that everyone is still talking about. The best event planners in town.",
            rating: 5
        },
        {
            id: 3,
            name: "Emily Rodriguez",
            role: "Birthday Party",
            comment: "I couldn't be happier with how my 30th birthday turned out. The decoration was stunning and exactly what I wanted. Thank you for making my day so special!",
            rating: 5
        },
        {
            id: 4,
            name: "David Smith",
            role: "Anniversary Celebration",
            comment: "Exceptional service! They handled everything perfectly, allowing us to enjoy our anniversary without any stress. The food and ambiance were perfect.",
            rating: 4
        },
        {
            id: 5,
            name: "Jessica Williams",
            role: "Product Launch",
            comment: "A fantastic team to work with. They understood our brand vision and executed a flawless product launch event. Looking forward to our next collaboration.",
            rating: 5
        },
        {
            id: 6,
            name: "Robert Brown",
            role: "Charity Ball",
            comment: "Organized, reliable, and truly talented. The event flowed smoothly, and the decor was breathtaking. A huge thank you to the entire EventzGallery staff.",
            rating: 5
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [itemsPerView, setItemsPerView] = useState(2);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1024) {
                setItemsPerView(1);
            } else {
                setItemsPerView(2);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const maxIndex = testimonials.length - itemsPerView;

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, [maxIndex]);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    }, [maxIndex]);

    useEffect(() => {
        let interval;
        if (isAutoPlaying) {
            interval = setInterval(nextSlide, 5000);
        }
        return () => clearInterval(interval);
    }, [isAutoPlaying, nextSlide]);

    const titleVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1.0]
            },
        },
    };

    return (
        <section className="relative py-24 px-6 lg:px-8 overflow-hidden bg-neutral-950">
            {/* Ambient Background Elements */ }
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] z-0 -translate-y-1/2 -translate-x-1/2" />
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] z-0 -translate-y-1/2 translate-x-1/2" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */ }
                <motion.div
                    className="text-center mb-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={ { once: true, margin: "-100px" } }
                    variants={ titleVariants }
                >
                    <span className="inline-block py-1.5 px-4 rounded-full bg-white/5 backdrop-blur-3xl border border-white/10 text-indigo-300 text-xs font-semibold mb-4 tracking-widest uppercase">
                        Testimonials
                    </span>

                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight">
                        What Our <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 via-purple-400 to-pink-500">Clients Say</span>
                    </h2>

                    <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
                        Discover the experiences of those who have trusted us to bring their most important celebrations to life.
                    </p>
                </motion.div>

                {/* Carousel Container */ }
                <div
                    className="relative group"
                    onMouseEnter={ () => setIsAutoPlaying(false) }
                    onMouseLeave={ () => setIsAutoPlaying(true) }
                >
                    {/* Navigation Buttons - Hidden on Mobile, Hover on Desktop */ }
                    <div className="hidden md:block">
                        <button
                            onClick={ prevSlide }
                            className="absolute -left-4 lg:-left-12 top-1/2 -translate-y-1/2 z-20 p-4 rounded-2xl bg-white/5 backdrop-blur-3xl border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/10 hover:scale-110 active:scale-95 shadow-2xl"
                            aria-label="Previous Testimonial"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={ nextSlide }
                            className="absolute -right-4 lg:-right-12 top-1/2 -translate-y-1/2 z-20 p-4 rounded-2xl bg-white/5 backdrop-blur-3xl border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/10 hover:scale-110 active:scale-95 shadow-2xl"
                            aria-label="Next Testimonial"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Viewport */ }
                    <div className="overflow-hidden px-0 -mx-4">
                        <motion.div
                            className="flex"
                            animate={ {
                                x: `-${currentIndex * (100 / itemsPerView)}%`
                            } }
                            transition={ {
                                type: "spring",
                                stiffness: 300,
                                damping: 30,
                                mass: 0.8
                            } }
                        >
                            { testimonials.map((testimonial) => (
                                <div
                                    key={ testimonial.id }
                                    className={ `w-full ${itemsPerView === 2 ? 'md:w-1/2' : ''} shrink-0 px-4 mb-4` }
                                >
                                    <div className="h-full p-6 rounded-2xl bg-white/5 backdrop-blur-3xl border border-white/10 hover:border-white/20 transition-all duration-500 relative group/card flex flex-col justify-between overflow-hidden shadow-2xl">
                                        {/* Decorative Gradient Glow */ }
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-bl from-indigo-500/10 to-transparent blur-2xl group-hover/card:scale-150 transition-transform duration-700" />

                                        <div className="relative z-10">
                                            <div className="flex justify-between items-center mb-6">
                                                <div className="p-2 rounded-2xl text-indigo-400">
                                                    <Quote className="w-8 h-8" />
                                                </div>
                                                <div className="flex gap-1 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                                                    { [...Array(5)].map((_, i) => (
                                                        <Star
                                                            key={ i }
                                                            className={ `w-4 h-4 ${i < testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-600'}` }
                                                        />
                                                    )) }
                                                </div>
                                            </div>

                                            <blockquote className="text-neutral-200 text-lg leading-relaxed font-medium italic mb-6">
                                                "{ testimonial.comment }"
                                            </blockquote>
                                        </div>

                                        <div className="relative z-10 flex items-center gap-5 mt-auto pt-4 border-t border-white/5">
                                            <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 p-px">
                                                <div className="w-full h-full rounded-2xl bg-neutral-900 flex items-center justify-center text-white font-bold text-2xl uppercase">
                                                    { testimonial.name.charAt(0) }
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="text-white font-semibold text-xl tracking-wide">{ testimonial.name }</h4>
                                                {/* <p className="text-indigo-300/60 text-sm font-medium tracking-wider uppercase">{ testimonial.role }</p> */ }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )) }
                        </motion.div>
                    </div>

                    {/* Indicators - Enhanced */ }
                    <div className="flex justify-center mt-12 gap-3">
                        { Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                            <button
                                key={ idx }
                                onClick={ () => setCurrentIndex(idx) }
                                className={ `h-1.5 rounded-full transition-all duration-500 ${idx === currentIndex
                                    ? 'w-10 bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.5)]'
                                    : 'w-3 bg-white/10 hover:bg-white/30'
                                    }` }
                                aria-label={ `Go to slide ${idx + 1}` }
                            />
                        )) }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
