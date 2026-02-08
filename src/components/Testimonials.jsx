import React, { useState, useEffect } from 'react';
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
    const [direction, setDirection] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(2);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 800) {
                setItemsPerPage(1);
            } else {
                setItemsPerPage(2);
            }
        };

        handleResize(); // Set initial value
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const maxIndex = testimonials.length - itemsPerPage;

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    };

    // Auto-advance
    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(timer);
    }, [currentIndex, maxIndex]);

    const titleVariants = {
        hidden: { opacity: 0, y: 20 },
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
        <section className="relative py-20 px-6 lg:px-8 overflow-hidden bg-[#0a0a0b]">
            {/* Background Elements */ }
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl z-0 -translate-y-1/2" />
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl z-0 -translate-y-1/2" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */ }
                <motion.div
                    className="text-center mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={ { once: true, margin: "-100px" } }
                    variants={ titleVariants }
                >
                    <motion.span
                        className="inline-block py-1 px-4 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-indigo-200 text-xs font-semibold mb-6 tracking-wider uppercase"
                        variants={ titleVariants }
                    >
                        Testimonials
                    </motion.span>

                    <motion.h2
                        className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-3 tracking-tight"
                        variants={ titleVariants }
                    >
                        What Our <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 via-purple-400 to-pink-500">Clients Say</span>
                    </motion.h2>
                </motion.div>

                {/* Carousel */ }
                <div className="relative max-w-6xl mx-auto">
                    {/* Buttons */ }
                    <button
                        onClick={ prevSlide }
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-20 p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-all duration-300 hover:scale-110 backdrop-blur-md"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={ nextSlide }
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-20 p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-all duration-300 hover:scale-110 backdrop-blur-md"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Viewport */ }
                    <div className="overflow-hidden">
                        <motion.div
                            className="flex gap-6 md:gap-8"
                            initial={ false }
                            animate={ {
                                x: `calc(-${currentIndex * (100 / itemsPerPage)}% - ${currentIndex * (1.5)}rem)` // Adjusting Gap logic roughly
                            } }
                        // Logic: 100% / itemsPerPage = 50%. So move 50% * currentIndex.
                        // But we also have gap. Flex gap is tricky with percentage translation.
                        // Better approach: Use a wrapper with grid or use percentage width for items.
                        >
                            {/* Alternative Approach for Gap handling in simple translation:
                                Calculate width of one item + gap.
                                It's easier if we assume fixed percentage width.
                             */}
                        </motion.div>

                        {/* 
                           Restarting the implementation logic for the track to be more robust.
                           We'll use a container that shifts. Each item will be 50% width minus half the gap.
                        */}
                        <div className="flex transition-transform duration-700 ease-in-out"
                            style={ { transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` } }>
                            { testimonials.map((testimonial) => (
                                <div
                                    key={ testimonial.id }
                                    className="w-full md:w-1/2 shrink-0 px-3 md:px-4" // Use padding for gap simulation
                                >
                                    <div className="h-full p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 relative group overflow-hidden">
                                        {/* Gradient Hover Effect */ }
                                        <div className="absolute inset-0 bg-linear-to-br from-indigo-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-indigo-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-500" />

                                        <div className="relative z-10">
                                            <div className="flex justify-between items-start mb-4">
                                                <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400">
                                                    <Quote className="w-6 h-6" />
                                                </div>
                                                {/* <div className="flex gap-1">
                                                    { [...Array(5)].map((_, i) => (
                                                        <Star
                                                            key={ i }
                                                            className={ `w-4 h-4 ${i < testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-600'}` }
                                                        />
                                                    )) }
                                                </div> */}
                                            </div>

                                            <blockquote className="text-gray-300  leading-relaxed mb-4 min-h-25">
                                                "{ testimonial.comment }"
                                            </blockquote>

                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-full bg-linear-to-br from-indigo-400 to-pink-500 flex items-center justify-center text-white font-bold text-xl">
                                                    { testimonial.name.charAt(0) }
                                                </div>
                                                <div>
                                                    <h4 className="text-white font-bold text-lg">{ testimonial.name }</h4>
                                                    {/* <p className="text-indigo-200/60 text-sm">{ testimonial.role }</p> */ }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )) }
                        </div>
                    </div>

                    {/* Indicators */ }
                    <div className="flex justify-center mt-12 gap-2">
                        { Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                            <button
                                key={ idx }
                                onClick={ () => setCurrentIndex(idx) }
                                className={ `h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-indigo-500' : 'w-2 bg-white/20 hover:bg-white/40'
                                    }` }
                            />
                        )) }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
