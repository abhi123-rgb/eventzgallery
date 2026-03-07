import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Plus, Minus } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="border-b border-white/10 last:border-0">
            <button
                className="w-full py-4 flex items-center justify-between text-left focus:outline-none group"
                onClick={ onClick }
            >
                <span className={ `text-lg transition-colors duration-300 ${isOpen ? 'text-indigo-400 font-semibold' : 'text-white hover:text-indigo-300'}` }>
                    { question }
                </span>
                <span className={ `shrink-0 ml-4 p-2 rounded-full transition-all duration-300 ${isOpen ? 'bg-indigo-500/10 text-indigo-400 rotate-180' : 'bg-white/5 text-gray-500'}` }>
                    <ChevronDown className="w-5 h-5" />
                </span>
            </button>
            <AnimatePresence>
                { isOpen && (
                    <motion.div
                        initial={ { height: 0, opacity: 0 } }
                        animate={ { height: 'auto', opacity: 1 } }
                        exit={ { height: 0, opacity: 0 } }
                        transition={ { duration: 0.3, ease: 'easeInOut' } }
                        className="overflow-hidden"
                    >
                        <p className="pb-4 text-gray-400 leading-relaxed font-light">
                            { answer }
                        </p>
                    </motion.div>
                ) }
            </AnimatePresence>
        </div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "What types of events do you specialize in?",
            answer: "We specialize in a wide range of premium events including luxury weddings, corporate galas, product launches, private milestone celebrations, and international destination weddings. Our team is equipped to handle events of any scale with high attention to detail."
        },
        {
            question: "How early should I book your services?",
            answer: "For major events like weddings or large-scale corporate conferences, we recommend booking at least 6-12 months in advance. However, for smaller private parties or events with shorter lead times, we can often accommodate requests within 2-3 months."
        },
        {
            question: "Do you offer customizable packages or fixed pricing?",
            answer: "We believe every event is unique, which is why we offer fully customizable proposals tailored to your specific needs, vision, and budget. While we have starting packages for guidance, everything is flexible to ensure you get exactly what you need."
        },
        {
            question: "Can you handle destination weddings outside Mumbai?",
            answer: "Absolutely! We have extensive experience in managing destination weddings across India and abroad. We handle everything from venue scouting and guest travel logistics to local vendor coordination in the destination city."
        },
        {
            question: "Do you handle vendor management and coordination?",
            answer: "Yes, vendor management is one of our core services. We have a curated network of top-tier partners for catering, decor, lighting, entertainment, and more. We handle all contracts, communications, and on-site coordination so you can enjoy your event stress-free."
        },
        {
            question: "What is your typical payment and cancellation policy?",
            answer: "Our standard policy involves an initial booking deposit, followed by milestone payments leading up to the event date. Cancellation terms vary based on how close the cancellation is to the event date and the specific commitments made to third-party vendors."
        }
    ];

    return (
        <section className="relative py-20 px-6 lg:px-8 bg-neutral-950 overflow-hidden">
            {/* Background Decoration */ }
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/5 rounded-full blur-[120px] z-0" />

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <motion.span
                        initial={ { opacity: 0, y: 10 } }
                        whileInView={ { opacity: 1, y: 0 } }
                        viewport={ { once: true } }
                        className="inline-block py-1 px-4 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-indigo-400 text-xs font-semibold mb-6 tracking-wider uppercase"
                    >
                        Common Questions
                    </motion.span>
                    <motion.h2
                        initial={ { opacity: 0, y: 10 } }
                        whileInView={ { opacity: 1, y: 0 } }
                        viewport={ { once: true } }
                        className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-6"
                    >
                        Frequently Asked <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 via-purple-400 to-pink-500">Queries</span>
                    </motion.h2>
                    <motion.p
                        initial={ { opacity: 0, y: 10 } }
                        whileInView={ { opacity: 1, y: 0 } }
                        viewport={ { once: true } }
                        className="text-gray-400 max-w-2xl mx-auto font-light"
                    >
                        Everything you need to know about our event management process and services. Can't find what you're looking for? Feel free to reach out to us.
                    </motion.p>
                </div>

                <motion.div
                    initial={ { opacity: 0, scale: 0.95 } }
                    whileInView={ { opacity: 1, scale: 1 } }
                    viewport={ { once: true } }
                    className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8"
                >
                    { faqs.map((faq, index) => (
                        <FAQItem
                            key={ index }
                            question={ faq.question }
                            answer={ faq.answer }
                            isOpen={ openIndex === index }
                            onClick={ () => setOpenIndex(openIndex === index ? -1 : index) }
                        />
                    )) }
                </motion.div>

                <motion.div
                    initial={ { opacity: 0 } }
                    whileInView={ { opacity: 1 } }
                    viewport={ { once: true } }
                    className="mt-12 text-center"
                >
                    <p className="text-gray-500 text-sm mb-4">Still have more doubts?</p>
                    <button className="px-8 py-3 rounded-full bg-linear-to-r from-indigo-500 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-indigo-500/25 transition-all active:scale-95">
                        Ask Us Directly
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default FAQ;
