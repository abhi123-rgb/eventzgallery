import React from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, Sparkles } from 'lucide-react';

const AboutUs = () => {
    const features = [
        { id: 1, title: 'Vision-Driven', description: 'We bring your unique vision to life with meticulous attention to detail and creative excellence.', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg> },
        { id: 2, title: 'Expert Team', description: 'Our passionate professionals have years of experience in creating memorable events.', icon: <Users className="w-5 h-5" /> },
        { id: 3, title: 'Full-Service Management', description: 'From concept to execution, we handle vendor coordination, logistics, and onsite management seamlessly.', icon: <Sparkles className="w-5 h-5" /> },
        { id: 4, title: 'Client-Focused', description: 'Your satisfaction is our priority. We go above and beyond to exceed expectations.', icon: <Heart className="w-5 h-5" /> }
    ];

    const leftBullets = ['Personalized Planning', 'Creative Design', 'Flawless Execution'];

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

                        {/* Bullets List */ }
                        <motion.ul
                            className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-4"
                            variants={ containerVariants }
                        >
                            { leftBullets.map((bullet, idx) => (
                                <motion.li
                                    key={ idx }
                                    variants={ itemVariants }
                                    className="flex items-center text-sm font-medium text-gray-400"
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-purple-600 mr-2 shrink-0"></span>
                                    { bullet }
                                </motion.li>
                            )) }
                        </motion.ul>
                    </motion.div>

                    {/* Features Grid (Right Side) */ }
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={ { once: true, margin: "-100px" } }
                        variants={ containerVariants }
                    >
                        { features.map((feature) => (
                            <motion.div
                                key={ feature.id }
                                variants={ itemVariants }
                                className="p-6 rounded-2xl bg-white/5 backdrop-blur-md flex flex-col items-start border border-white/10 shadow-sm hover:shadow-purple-500/10 hover:border-white/20 transition-all duration-300"
                            >
                                <div className="w-11 h-11 rounded-[0.85rem] bg-[#8A2BE2] flex items-center justify-center text-white shrink-0 shadow-lg shadow-purple-500/20 mb-5">
                                    { feature.icon }
                                </div>
                                <h3 className="text-white font-bold text-lg mb-2">
                                    { feature.title }
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed font-light">
                                    { feature.description }
                                </p>
                            </motion.div>
                        )) }
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
