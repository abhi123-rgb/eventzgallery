import React from 'react';
import { motion } from 'framer-motion';
import Catering from "../assets/images/catering.jpg";
import weddingPhoto from "../assets/images/wedding_photo.jpg";
import eventPlanning from "../assets/images/event_planning.jpg";
import weddingPlanning from "../assets/images/wedding_planning.jpg";
import decoration from "../assets/images/decoration.jpg";
import destinationWedding from "../assets/images/destinations.webp";
import corporateImage from "../assets/images/corporate_image.jpeg";
import { FaCalendarDays, FaHeart, FaLeaf, FaFilm, FaCamera, FaUtensils, FaGlobe, FaWandMagic, FaBriefcase } from 'react-icons/fa6';

const WhatWeDo = () => {
    const services = [
        {
            id: 1,
            title: 'Event Planning',
            description: 'Comprehensive event management from concept to execution. We handle every detail to ensure your event runs seamlessly.',
            image: eventPlanning,
            icon: FaCalendarDays,
            color: 'from-blue-500 to-blue-600'
        },
        {
            id: 2,
            title: 'Wedding Planning',
            description: 'Create your dream wedding with our expert planning team. We specialize in turning your vision into a magical reality.',
            image: weddingPlanning,
            icon: FaHeart,
            color: 'from-pink-500 to-rose-600'
        },
        {
            id: 3,
            title: 'Decoration',
            description: 'Stunning decor designs that transform venues into breathtaking spaces. Our creative team brings elegance and style to every setup.',
            image: decoration,
            icon: FaLeaf,
            color: 'from-emerald-500 to-teal-600'
        },
        {
            id: 4,
            title: 'Production',
            description: 'Professional event production with state-of-the-art equipment and technical expertise. We create immersive experiences.',
            image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=400&fit=crop',
            icon: FaFilm,
            color: 'from-purple-500 to-indigo-600'
        },
        {
            id: 5,
            title: 'Photography & Videography',
            description: 'Capture every precious moment with our award-winning photographers and videographers using latest technology.',
            image: weddingPhoto,
            icon: FaCamera,
            color: 'from-orange-500 to-amber-600'
        },
        {
            id: 6,
            title: 'Catering',
            description: 'Exquisite culinary experiences with professionally trained chefs. Customized menus to delight every palate.',
            image: Catering,
            icon: FaUtensils,
            color: 'from-red-500 to-orange-600'
        },
        {
            id: 7,
            title: 'Destination Weddings',
            description: 'Say "I do" anywhere in the world. We specialize in exotic destination weddings with flawless execution.',
            image: destinationWedding,
            icon: FaGlobe,
            color: 'from-cyan-500 to-blue-600'
        },
        {
            id: 8,
            title: 'Special Effects',
            description: 'Stunning visual effects and pyrotechnics to elevate your event. Create unforgettable moments with cutting-edge technology.',
            image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=500&h=400&fit=crop',
            icon: FaWandMagic,
            color: 'from-violet-500 to-purple-600'
        },
        {
            id: 9,
            title: 'Corporate Events',
            description: 'Professional corporate gatherings that impress. From conferences to product launches, we deliver excellence.',
            image: corporateImage,
            icon: FaBriefcase,
            color: 'from-slate-500 to-gray-600'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1.0]
            },
        },
    };

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
        <section className="relative py-14 px-6 lg:px-8 overflow-hidden bg-[#0a0a0b]">
            {/* Background Elements */ }
            <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl -z-0" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-0" />

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
                        Our Expertise
                    </motion.span>

                    <motion.h2
                        className="text-2xl md:text-3xl lg:text-5xl font-black text-white mb-6 tracking-tight"
                        variants={ titleVariants }
                    >
                        What We <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 via-purple-400 to-pink-500">Do</span>
                    </motion.h2>

                    <motion.p
                        className="text-base text-gray-300 max-w-2xl mx-auto leading-relaxed font-light"
                        variants={ titleVariants }
                    >
                        We offer comprehensive event services designed to bring your vision to life. From intimate gatherings to grand celebrations, our expert team delivers excellence in every detail.
                    </motion.p>
                </motion.div>

                {/* Services Grid */ }
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={ containerVariants }
                    initial="hidden"
                    whileInView="visible"
                    viewport={ { once: true, margin: "-100px" } }
                >
                    { services.map((service) => {
                        const IconComponent = service.icon;
                        return (
                            <motion.div
                                key={ service.id }
                                variants={ cardVariants }
                                whileHover={ { y: -5, transition: { duration: 0.3 } } }
                                className="group relative"
                            >
                                <div className="relative h-full rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10">
                                    {/* Image Container */ }
                                    <div className="relative h-48 overflow-hidden bg-linear-to-br from-gray-700 to-gray-900">
                                        <img
                                            src={ service.image }
                                            alt={ service.title }
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0b] via-transparent to-transparent" />

                                        {/* Icon Badge */ }
                                        {/* <div className={ `absolute top-4 right-4 w-14 h-14 rounded-full bg-linear-to-br ${service.color} flex items-center justify-center text-white/90 shadow-lg backdrop-blur-sm` }>
                                            <IconComponent className="text-2xl" />
                                        </div> */}
                                    </div>

                                    {/* Content Container */ }
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-indigo-400 group-hover:to-pink-500 transition-all duration-300">
                                            { service.title }
                                        </h3>

                                        <p className="text-sm text-gray-300 leading-relaxed font-light mb-4 min-h-20">
                                            { service.description }
                                        </p>

                                        {/* Hover Action */ }
                                        {/* <div className="flex items-center text-indigo-400 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            Learn More
                                            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div> */}
                                    </div>

                                    {/* Gradient Border Effect */ }
                                    <div className="absolute inset-0 rounded-2xl bg-linear-to-tr from-indigo-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-indigo-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 pointer-events-none transition-all duration-300" />
                                </div>
                            </motion.div>
                        );
                    }) }
                </motion.div>
            </div>
        </section>
    );
};

export default WhatWeDo;
