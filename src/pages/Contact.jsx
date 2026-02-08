import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, User, Smartphone } from 'lucide-react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
    };

    const contactInfo = [
        {
            icon: <Phone className="w-5 h-5" />,
            label: "Phone",
            value: "+91 98765 43210"
        },
        {
            icon: <Mail className="w-5 h-5" />,
            label: "Email",
            value: "hello@eventzgallery.com"
        },
        {
            icon: <MapPin className="w-5 h-5" />,
            label: "Office",
            value: "123 Event Street, Mumbai"
        }
    ];

    const socialLinks = [
        { icon: <FaWhatsapp className="w-5 h-5" />, href: "#" },
        { icon: <FaInstagram className="w-5 h-5" />, href: "#" },
        { icon: <FaXTwitter className="w-5 h-5" />, href: "#" }
    ];

    return (
        <div className="bg-(--primary-dark) text-(--text-dark) py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex flex-col items-center">
            {/* Background Decorations */ }
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-blob"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
            </div>

            <div className="max-w-6xl w-full relative z-10">
                <header className="text-center mb-8">
                    <motion.div
                        initial={ { opacity: 0, y: 20 } }
                        animate={ { opacity: 1, y: 0 } }
                        transition={ { duration: 0.6 } }
                    >
                        <h1 className="text-3xl md:text-4xl font-semibold mb-2 bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Get in Touch
                        </h1>
                        <p className="text-gray-400 text-base mx-2">
                            We'd love to hear from you. Let's start something great.
                        </p>
                    </motion.div>
                </header>

                <motion.div
                    initial={ { opacity: 0, y: 30 } }
                    animate={ { opacity: 1, y: 0 } }
                    transition={ { duration: 0.8, delay: 0.2 } }
                    className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden max-w-5xl m-auto grid grid-cols-1 lg:grid-cols-5"
                >
                    {/* Left: Contact Form (3 columns on LG) */ }
                    <div className="lg:col-span-3 p-6 md:p-8 relative">
                        { submitted && (
                            <motion.div
                                initial={ { opacity: 0 } }
                                animate={ { opacity: 1 } }
                                className="absolute inset-0 z-20 flex items-center justify-center bg-(--primary-dark)/90 backdrop-blur-md"
                            >
                                <div className="text-center p-6">
                                    <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Send className="w-8 h-8" />
                                    </div>
                                    <h2 className="text-2xl font-bold mb-2">Message Sent!</h2>
                                    <p className="text-gray-400">We'll get back to you shortly.</p>
                                </div>
                            </motion.div>
                        ) }

                        <form onSubmit={ handleSubmit } className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <label className="text-sm font-medium text-gray-400 ml-1">Name</label>
                                    <div className="relative group">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-blue-400 transition-colors" />
                                        <input
                                            required
                                            type="text"
                                            name="name"
                                            value={ formData.name }
                                            onChange={ handleChange }
                                            placeholder="Your name"
                                            className="w-full bg-white/10 border border-white/10 focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 rounded-lg py-3 pl-12 pr-4 outline-none transition-all duration-300 placeholder:text-gray-500"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <label className="text-sm font-medium text-gray-400 ml-1">Email</label>
                                    <div className="relative group">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-blue-400 transition-colors" />
                                        <input
                                            required
                                            type="email"
                                            name="email"
                                            value={ formData.email }
                                            onChange={ handleChange }
                                            placeholder="hello@example.com"
                                            className="w-full bg-white/10 border border-white/10 focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 rounded-lg py-3 pl-12 pr-4 outline-none transition-all duration-300 placeholder:text-gray-500"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <label className="text-sm font-medium text-gray-400 ml-1">Phone</label>
                                <div className="relative group">
                                    <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-blue-400 transition-colors" />
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={ formData.phone }
                                        onChange={ handleChange }
                                        placeholder="+91 00000 00000"
                                        className="w-full bg-white/10 border border-white/10 focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 rounded-lg py-3 pl-12 pr-4 outline-none transition-all duration-300 placeholder:text-gray-500"
                                    />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <label className="text-sm font-medium text-gray-400 ml-1">Message</label>
                                <div className="relative group">
                                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-500 group-focus-within:text-blue-400 transition-colors" />
                                    <textarea
                                        required
                                        name="message"
                                        value={ formData.message }
                                        onChange={ handleChange }
                                        rows="4"
                                        placeholder="Tell us about your event..."
                                        className="w-full bg-white/10 border border-white/10 focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 rounded-lg py-3 pl-12 pr-4 outline-none transition-all duration-300 placeholder:text-gray-500 resize-none"
                                    ></textarea>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={ isSubmitting }
                                className="w-full bg-linear-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium py-3 rounded-lg transition-all duration-300 shadow-lg shadow-blue-500/25 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed group"
                            >
                                { isSubmitting ? (
                                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                ) : (
                                    <>
                                        <span>Send Message</span>
                                        {/* <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> */ }
                                    </>
                                ) }
                            </button>
                        </form>
                    </div>

                    {/* Right: Contact Info (2 columns on LG) */ }
                    <div className="lg:col-span-2 bg-linear-to-br from-blue-600/20 to-indigo-600/20 p-6 md:p-8 border-l border-white/10 flex flex-col justify-between">
                        <div className="space-y-10">
                            <div>
                                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                                <div className="space-y-6">
                                    { contactInfo.map((info, index) => (
                                        <div key={ index } className="flex items-center gap-4 group">
                                            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                                                { info.icon }
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-400">{ info.label }</p>
                                                <p className="font-medium">{ info.value }</p>
                                            </div>
                                        </div>
                                    )) }
                                </div>
                            </div>

                            <div>
                                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">Follow Us</h4>
                                <div className="flex gap-4">
                                    { socialLinks.map((social, index) => (
                                        <a
                                            key={ index }
                                            href={ social.href }
                                            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:bg-blue-500 hover:text-white transition-all duration-300"
                                        >
                                            { social.icon }
                                        </a>
                                    )) }
                                </div>
                            </div>
                        </div>

                        {/* <div className="mt-12 p-6 rounded-xl bg-white/5 border border-white/10">
                            <p className="text-sm text-gray-400 italic">
                                "Create memories that last a lifetime. Reach out and let's make it happen."
                            </p>
                        </div> */}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;