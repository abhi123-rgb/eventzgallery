import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, ShieldCheck, Heart } from 'lucide-react';

const AboutUs = () => {
    const stats = [
        { id: 1, label: 'Years Experience', value: '10+', icon: Award },
        { id: 2, label: 'Successful Events', value: '500+', icon: Users },
        { id: 3, label: 'Happy Clients', value: '100%', icon: Heart },
        { id: 4, label: 'Quality Guarantee', value: 'Certified', icon: ShieldCheck },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1.0],
            },
        },
    };

    return (
        <section className="relative py-20 px-6 lg:px-8 overflow-hidden bg-[#0a0a0b]">
            {/* Background Decorations */ }
            <div className="absolute top-1/2 left-0 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl z-0" />
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl z-0" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */ }
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={ { once: true, margin: "-100px" } }
                        variants={ containerVariants }
                    >
                        <motion.span
                            className="inline-block py-1 px-4 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-indigo-400 text-xs font-semibold mb-6 tracking-wider uppercase"
                            variants={ itemVariants }
                        >
                            Our Story
                        </motion.span>

                        <motion.h2
                            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
                            variants={ itemVariants }
                        >
                            Crafting Memories That <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 via-purple-400 to-pink-500">Last A Lifetime</span>
                        </motion.h2>

                        <motion.p
                            className="text-gray-400 text-base md:text-lg mb-8 leading-relaxed font-light"
                            variants={ itemVariants }
                        >
                            At EventzGallery, we believe that every event is a unique canvas. Founded with a passion for excellence, we have grown into a premier event management firm dedicated to transforming visions into breathtaking realities.
                        </motion.p>

                        <motion.p
                            className="text-gray-400 text-base md:text-lg mb-10 leading-relaxed font-light"
                            variants={ itemVariants }
                        >
                            Whether it's a grand wedding, a corporate gala, or an intimate private gathering, our team handles every detail with precision and creativity. We don't just plan events; we curate experiences that linger in the hearts of your guests.
                        </motion.p>

                        {/* Stats Grid */ }
                        <motion.div
                            className="grid grid-cols-2 md:grid-cols-4 gap-6"
                            variants={ containerVariants }
                        >
                            { stats.map((stat) => (
                                <motion.div
                                    key={ stat.id }
                                    variants={ itemVariants }
                                    className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center hover:border-white/20 transition-colors"
                                >
                                    <div className="flex justify-center mb-2">
                                        <stat.icon className="w-5 h-5 text-indigo-400" />
                                    </div>
                                    <div className="text-xl font-bold text-white mb-1">{ stat.value }</div>
                                    <div className="text-xs text-gray-500 uppercase tracking-wide">{ stat.label }</div>
                                </motion.div>
                            )) }
                        </motion.div>
                    </motion.div>

                    {/* Image/Visual Component */ }
                    <motion.div
                        className="relative max-w-md mx-auto lg:ml-auto lg:mr-0"
                        initial={ { opacity: 0, scale: 0.9 } }
                        whileInView={ { opacity: 1, scale: 1 } }
                        viewport={ { once: true, margin: "-100px" } }
                        transition={ { duration: 0.8 } }
                    >
                        <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=1000&fit=crop"
                                alt="Event Management Team"
                                className="w-full h-full object-cover opacity-90"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0b] via-transparent to-transparent opacity-60" />
                        </div>

                        {/* Floating Card */ }
                        <motion.div
                            className="absolute -bottom-6 -left-6 md:-left-12 p-6 rounded-2xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl max-w-xs hidden sm:block"
                            initial={ { x: -20, opacity: 0 } }
                            whileInView={ { x: 0, opacity: 1 } }
                            viewport={ { once: true } }
                            transition={ { delay: 0.5, duration: 0.6 } }
                        >
                            <p className="text-white text-sm font-medium italic mb-2">
                                "Our mission is to bring your imagination to life with elegance and perfection."
                            </p>
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-xs font-bold text-white">EG</div>
                                <div>
                                    <p className="text-white text-xs font-semibold">EventzGallery Team</p>
                                    <p className="text-gray-400 text-[10px]">Founded 2014</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
