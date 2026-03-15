import React from 'react';
import { motion } from 'framer-motion';
import Catering from "../assets/images/catering.webp";
import weddingPhoto from "../assets/images/wedding_photo.webp";
import eventPlanning from "../assets/images/event_planning.webp";
import weddingPlanning from "../assets/images/wedding_planning.webp";
import decoration from "../assets/images/decoration.webp";
import destinationWedding from "../assets/images/destinations.webp";
import corporateImage from "../assets/images/corporate_image.webp";
import birthdayCelebration from "../assets/images/birthday_celebration.webp";
import planningDesigning from "../assets/images/planning_designing.webp";
import { FaCalendarDays, FaHeart, FaLeaf, FaFilm, FaCamera, FaUtensils, FaGlobe, FaWandMagic, FaBriefcase, FaGift, FaPenRuler } from 'react-icons/fa6';

const ImageWithPlaceholder = ({ src, alt, icon: Icon }) => {
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [hasError, setHasError] = React.useState(false);

    return (
        <>
            {/* Loading Skeleton */ }
            { !isLoaded && !hasError && (
                <div className="absolute inset-0 flex items-center justify-center bg-white/5">
                    <div className="w-8 h-8 rounded-full border-2 border-indigo-500/30 border-t-indigo-500 animate-spin" />
                </div>
            ) }

            {/* Error State / Fallback */ }
            { hasError && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/5 text-gray-500">
                    { Icon && <Icon className="text-4xl mb-3 opacity-40 group-hover:scale-110 transition-transform duration-500 group-hover:text-indigo-400" /> }
                    <span className="text-[10px] font-semibold tracking-widest uppercase opacity-50">Preview Unavailable</span>
                </div>
            ) }

            { !hasError && (
                <picture className={ `absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${isLoaded ? 'opacity-80 group-hover:opacity-100 group-hover:scale-110' : 'opacity-0 scale-105'
                    }` }>
                    <source srcSet={ src.replace('.webp', '.webp') } type="image/webp" />
                    <img
                        src={ src.replace('.webp', '.jpg') }
                        alt={ alt }
                        className="w-full h-full object-cover"
                        loading="lazy"
                        onLoad={ () => setIsLoaded(true) }
                        onError={ () => {
                            // If jpg also fails, show error
                            setHasError(true);
                        } }
                    />
                </picture>
            ) }
        </>
    );
};

const WhatWeDo = () => {
    const services = [
        {
            id: 1,
            title: 'Event Planning',
            description: 'Comprehensive event management from concept to execution. We handle every detail to ensure your event runs seamlessly.',
            image: eventPlanning,
            icon: FaCalendarDays,
            features: ['Theme Creation', 'Venue Selection', 'Timeline Management', 'Vendor Coordination'],
            color: 'from-blue-500 to-blue-600'
        },
        {
            id: 2,
            title: 'Wedding Planning',
            description: 'Create your dream wedding with our expert planning team. We specialize in turning your vision into a magical reality.',
            image: weddingPlanning,
            icon: FaHeart,
            features: ['Bridal Consultation', 'Decor & Design', 'Catering Management', 'Day-of Coordination'],
            color: 'from-pink-500 to-rose-600'
        },
        {
            id: 3,
            title: 'Decoration',
            description: 'Stunning decor designs that transform venues into breathtaking spaces. Our creative team brings elegance and style to every setup.',
            image: decoration,
            icon: FaLeaf,
            features: ['Floral Arrangements', 'Lighting Design', 'Stage Setup', 'Table Settings'],
            color: 'from-emerald-500 to-teal-600'
        },
        {
            id: 4,
            title: 'Production',
            description: 'Professional event production with state-of-the-art equipment and technical expertise. We create immersive experiences.',
            image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=400&fit=crop',
            icon: FaFilm,
            features: ['Stage Production', 'Sound & Lighting', 'AV Equipment', 'Technical Support'],
            color: 'from-purple-500 to-indigo-600'
        },
        {
            id: 5,
            title: 'Photography & Videography',
            description: 'Capture every precious moment with our award-winning photographers and videographers using latest technology.',
            image: weddingPhoto,
            icon: FaCamera,
            features: ['Candid Photography', 'Cinematic Videos', 'Pre-wedding Shoots', 'Drone Coverage'],
            color: 'from-orange-500 to-amber-600'
        },
        {
            id: 6,
            title: 'Catering',
            description: 'Exquisite culinary experiences with professionally trained chefs. Customized menus to delight every palate.',
            image: Catering,
            icon: FaUtensils,
            features: ['Custom Menus', 'Live Counters', 'Bar Services', 'Dessert Stations'],
            color: 'from-red-500 to-orange-600'
        },
        {
            id: 7,
            title: 'Destination Weddings',
            description: 'Say "I do" anywhere in the world. We specialize in exotic destination weddings with flawless execution.',
            image: destinationWedding,
            icon: FaGlobe,
            features: ['Travel Arrangements', 'Resort Booking', 'Local Coordination', 'Guest Management'],
            color: 'from-cyan-500 to-blue-600'
        },
        {
            id: 8,
            title: 'Special Effects',
            description: 'Stunning visual effects and pyrotechnics to elevate your event. Create unforgettable moments with cutting-edge technology.',
            image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=500&h=400&fit=crop',
            icon: FaWandMagic,
            features: ['Pyrotechnics', 'Fog Machines', 'Laser Shows', 'Cold Fireworks'],
            color: 'from-violet-500 to-purple-600'
        },
        {
            id: 9,
            title: 'Corporate Events',
            description: 'Professional corporate gatherings that impress. From conferences to product launches, we deliver excellence.',
            image: corporateImage,
            icon: FaBriefcase,
            features: ['Conference Planning', 'Team Building', 'Product Launches', 'Trade Shows'],
            color: 'from-slate-500 to-gray-600'
        },
        {
            id: 10,
            title: 'Birthday Celebrations',
            description: 'Make birthdays unforgettable with personalized themes, engaging activities, and spectacular setups for all ages.',
            image: birthdayCelebration,
            icon: FaGift,
            features: ['Theme Decorations', 'Entertainment', 'Cake & Catering', 'Return Gifts'],
            color: 'from-fuchsia-500 to-pink-600'
        },
        {
            id: 11,
            title: 'Planning & Designing',
            description: 'Creative event conceptualization and meticulous planning to craft unique, tailor-made experiences.',
            image: planningDesigning,
            icon: FaPenRuler,
            features: ['Concept Development', 'Budget Management', '3D Layouts', 'Vendor Sourcing'],
            color: 'from-teal-500 to-cyan-600'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            },
        },
    };

    const cardVariants = {
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
        <section className="relative py-14 px-6 lg:px-8 overflow-hidden bg-neutral-950">
            {/* Background Elements */ }
            <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl z-0" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl z-0" />

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
                        className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight"
                        variants={ titleVariants }
                    >
                        What We <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 via-purple-400 to-pink-500">Do</span>
                    </motion.h2>

                    <motion.p
                        className="text-gray-300 max-w-2xl mx-auto leading-relaxed font-light"
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
                                className="group relative h-full"
                            >
                                <div className="relative h-full rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 flex flex-col">
                                    {/* Image Container */ }
                                    <div className="relative h-56 shrink-0 overflow-hidden rounded-t-2xl bg-neutral-900/50">
                                        <ImageWithPlaceholder src={ service.image } alt={ service.title } icon={ IconComponent } />
                                        <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none" />
                                    </div>

                                    {/* Absolute icon relative to the outer card */ }
                                    <div className="absolute top-56 left-6 -translate-y-1/2 w-14 h-14 bg-gray-900 rounded-xl shadow-lg flex items-center justify-center z-10 text-purple-400 border border-white/10 group-hover:border-purple-500/30 transition-colors duration-300">
                                        <IconComponent className="text-2xl" />
                                    </div>

                                    {/* Content Container */ }
                                    <div className="px-6 pb-6 pt-10 grow flex flex-col text-left z-10">
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-indigo-400 group-hover:to-pink-500 transition-all duration-300">
                                            { service.title }
                                        </h3>

                                        <p className="text-sm text-gray-300 leading-relaxed font-light">
                                            { service.description }
                                        </p>
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
