import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, User, Smartphone, CheckCircle, Clock, ShieldCheck, Star } from 'lucide-react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        eventDate: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError('');

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    eventType: formData.eventType,
                    eventDate: formData.eventDate,
                    message: formData.message,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            setSubmitted(true);
            setFormData({ name: '', email: '', phone: '', eventType: '', eventDate: '', message: '' });
            setTimeout(() => setSubmitted(false), 5000);
        } catch (error) {
            console.error('Failed to send email:', error);
            setSubmitError('Failed to send message. Please try again later or contact us directly.');
            setTimeout(() => setSubmitError(''), 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        {
            icon: <Phone className="w-5 h-5" />,
            label: "Phone",
            value: "+91 7676417117"
        },
        {
            icon: <Mail className="w-5 h-5" />,
            label: "Email",
            value: "contact@eventzgallery.com"
        },
        {
            icon: <MapPin className="w-5 h-5" />,
            label: "Office",
            value: "Sambhrama apartment, purdal road, gadikoppa, Shivamogga, Karnataka 577201"
        }
    ];

    const socialLinks = [
        { icon: <FaWhatsapp className="w-5 h-5" />, href: "https://wa.me/917676417117" },
        { icon: <FaInstagram className="w-5 h-5" />, href: "https://www.instagram.com/eventzgallery/" },
        { icon: <FaXTwitter className="w-5 h-5" />, href: "#" }
    ];

    const eventTypes = [
        { label: 'Event Planning', value: 'Event Planning' },
        { label: 'Destination Wedding', value: 'Destination Wedding' },
        { label: 'Birthday', value: 'Birthday' },
        { label: 'Photography & Videography', value: 'Photography & Videography' },
        { label: 'Corporate Events', value: 'Corporate Events' },
        { label: 'Decoration', value: 'Decoration' },
        { label: 'Wedding Planning', value: 'Wedding Planning' },
        { label: 'Catering', value: 'Catering' },
        { label: 'Other', value: 'Other' },
    ];

    const steps = [
        {
            icon: <MessageSquare className="w-6 h-6 text-indigo-400" />,
            title: "1. Initial Inquiry",
            description: "Fill out the form with your event details. We'll get back to you within 24 hours."
        },
        {
            icon: <Clock className="w-6 h-6 text-purple-400" />,
            title: "2. Free Consultation",
            description: "We'll schedule a personal meeting to understand your vision and budget."
        },
        {
            icon: <ShieldCheck className="w-6 h-6 text-pink-400" />,
            title: "3. Customized Proposal",
            description: "Receive a detailed plan and transparent pricing tailored to your requirements."
        },
        {
            icon: <CheckCircle className="w-6 h-6 text-green-400" />,
            title: "4. Flawless Execution",
            description: "Our professional team brings your dream event to life with meticulous attention to detail."
        }
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact Eventz Gallery",
        "description": "Contact Shivamogga's best event planners for wedding planning, corporate events, and more.",
        "publisher": {
            "@type": "Organization",
            "name": "Eventz Gallery",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.eventzgallery.in/src/assets/eventzgallery_logo.webp"
            }
        },
        "mainEntity": {
            "@type": "ContactPoint",
            "telephone": "+91-7676417117",
            "contactType": "customer service",
            "areaServed": "IN",
            "availableLanguage": "en"
        }
    };

    return (
        <div id="contact" className="bg-neutral-950 text-white py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex flex-col items-center">
            {/* JSON-LD for Rich Results */ }
            <script type="application/ld+json">
                { JSON.stringify(jsonLd) }
            </script>

            {/* Background Decorations */ }
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-blob"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
            </div>

            <div className="max-w-6xl w-full relative z-10">
                <motion.header
                    className="text-center mb-12"
                    initial={ { opacity: 0, y: 30 } }
                    whileInView={ { opacity: 1, y: 0 } }
                    viewport={ { once: true, margin: "-100px" } }
                    transition={ { duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] } }
                >
                    <div className="flex flex-col items-center justify-center space-y-1">
                        <span className="inline-block py-1 px-4 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-indigo-200 text-xs font-semibold mb-4 tracking-wider uppercase">
                            Get In Touch
                        </span>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                            Let's Plan Your <br className="block" />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 via-purple-400 to-pink-500">
                                Perfect Event
                            </span>
                        </h1>

                        <p className="text-gray-400 max-w-lg mx-auto font-light mt-4">
                            Ready to transform your vision into reality? Fill out the form below and Shivamogga's premier event team will reach out to you.
                        </p>
                    </div>
                </motion.header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-24">
                    <motion.div
                        initial={ { opacity: 0, x: -30 } }
                        whileInView={ { opacity: 1, x: 0 } }
                        viewport={ { once: true } }
                        transition={ { duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] } }
                        className="lg:col-span-8 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden relative h-full flex flex-col"
                    >
                        <div className="p-6 md:p-8 relative flex-1">
                            { submitted && (
                                <motion.div
                                    initial={ { opacity: 0 } }
                                    animate={ { opacity: 1 } }
                                    className="absolute inset-0 z-20 flex items-center justify-center bg-neutral-900/90 backdrop-blur-md"
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

                            { submitError && (
                                <div className="mb-4 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center">
                                    { submitError }
                                </div>
                            ) }

                            <form onSubmit={ handleSubmit } className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                                    <div className="space-y-4">
                                        <label htmlFor="name" className="text-sm font-medium text-neutral-400 ml-1">Name</label>
                                        <div className="relative group">
                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500 group-focus-within:text-blue-400 transition-colors" />
                                            <input
                                                id="name"
                                                required
                                                type="text"
                                                name="name"
                                                value={ formData.name }
                                                onChange={ handleChange }
                                                placeholder="Your name"
                                                className="w-full bg-white/10 border border-white/10 focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 rounded-lg py-3 pl-12 pr-4 outline-none transition-all duration-300 placeholder:text-neutral-500"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <label htmlFor="email" className="text-sm font-medium text-neutral-400 ml-1">Email</label>
                                        <div className="relative group">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500 group-focus-within:text-blue-400 transition-colors" />
                                            <input
                                                id="email"
                                                required
                                                type="email"
                                                name="email"
                                                value={ formData.email }
                                                onChange={ handleChange }
                                                placeholder="your@email.com"
                                                className="w-full bg-white/10 border border-white/10 focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 rounded-lg py-3 pl-12 pr-4 outline-none transition-all duration-300 placeholder:text-neutral-500"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                                    <div className="space-y-4">
                                        <label htmlFor="phone" className="text-sm font-medium text-neutral-400 ml-1">Phone</label>
                                        <div className="relative group">
                                            <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500 group-focus-within:text-blue-400 transition-colors" />
                                            <input
                                                id="phone"
                                                required
                                                type="tel"
                                                name="phone"
                                                value={ formData.phone }
                                                onChange={ handleChange }
                                                placeholder="+91 76764 17117"
                                                className="w-full bg-white/10 border border-white/10 focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 rounded-lg py-3 pl-12 pr-4 outline-none transition-all duration-300 placeholder:text-neutral-500"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <label htmlFor="eventType" className="text-sm font-medium text-neutral-400 ml-1">Event Type</label>
                                        <div className="relative group">
                                            <select
                                                id="eventType"
                                                name="eventType"
                                                value={ formData.eventType }
                                                onChange={ handleChange }
                                                className="w-full bg-white/10 border border-white/10 focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 rounded-lg py-3 px-4 outline-none transition-all duration-300 appearance-none text-neutral-300"
                                            >
                                                <option value="" className="bg-neutral-900">Select Event Type</option>
                                                { eventTypes.map((event) => (
                                                    <option key={ event.value } value={ event.value } className='bg-neutral-900' >{ event.label }</option>
                                                )) }
                                            </select>
                                            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-neutral-500 group-focus-within:text-blue-400">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <label htmlFor="eventDate" className="text-sm font-medium text-neutral-400 ml-1">Event Date</label>
                                    <div className="relative group">
                                        <input
                                            id="eventDate"
                                            type="date"
                                            name="eventDate"
                                            value={ formData.eventDate }
                                            onChange={ handleChange }
                                            className="w-full bg-white/10 border border-white/10 focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 rounded-lg py-3 px-4 outline-none transition-all duration-300 text-neutral-300 [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert-[0.6] min-h-[50px] cursor-pointer"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <label htmlFor="message" className="text-sm font-medium text-neutral-400 ml-1">Message</label>
                                    <div className="relative group">
                                        <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-neutral-500 group-focus-within:text-blue-400 transition-colors" />
                                        <textarea
                                            id="message"
                                            required
                                            name="message"
                                            value={ formData.message }
                                            onChange={ handleChange }
                                            rows="4"
                                            placeholder="Tell us about your event expectations..."
                                            className="w-full bg-white/10 border border-white/10 focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 rounded-lg py-3 pl-12 pr-4 outline-none transition-all duration-300 placeholder:text-neutral-500 resize-none"
                                        ></textarea>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={ isSubmitting }
                                    className="w-full bg-linear-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 active:scale-[0.98] text-white font-medium py-3 rounded-lg transition-all duration-300 shadow-lg shadow-blue-500/25 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed group"
                                >
                                    { isSubmitting ? (
                                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    ) : (
                                        <>
                                            <span>Send Message</span>
                                        </>
                                    ) }
                                </button>
                            </form>
                        </div>
                    </motion.div>

                    <motion.aside
                        initial={ { opacity: 0, x: 30 } }
                        whileInView={ { opacity: 1, x: 0 } }
                        viewport={ { once: true } }
                        transition={ { duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] } }
                        className="lg:col-span-4 space-y-8 flex flex-col h-full"
                    >
                        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 md:p-8">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                Contact Details
                            </h3>
                            <div className="space-y-6">
                                { contactInfo.map((info, index) => (
                                    <div key={ index } className="flex items-start gap-4 group">
                                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shrink-0">
                                            { React.cloneElement(info.icon, { className: "w-5 h-5" }) }
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-400 mb-0.5">{ info.label }</p>
                                            <p className="text-sm font-medium leading-relaxed">{ info.value }</p>
                                        </div>
                                    </div>
                                )) }
                            </div>

                            <div className="mt-8 pt-8 border-t border-white/10">
                                <p className="text-xs text-gray-400 uppercase tracking-widest mb-4">Connect With Us</p>
                                <div className="flex gap-4">
                                    { socialLinks.map((social, index) => (
                                        <a
                                            key={ index }
                                            href={ social.href }
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:bg-indigo-600 hover:text-white transition-all duration-300"
                                        >
                                            { React.cloneElement(social.icon, { className: "w-5 h-5" }) }
                                        </a>
                                    )) }
                                </div>
                            </div>
                        </div>

                        <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 flex-1 min-h-[256px] relative group shadow-2xl">
                            <iframe
                                src="https://maps.google.com/maps?q=Sambhrama%20apartment,%20purdal%20road,%20gadikoppa,%20Shivamogga&t=&z=17&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={ { border: 0, filter: "invert(90%) hue-rotate(180deg)", touchAction: "pan-x pan-y" } }
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                                title="Eventz Gallery Office Location"
                            ></iframe>
                            <a
                                href="https://www.google.com/maps/dir//Sambhrama+apartment,+purdal+road,+gadikoppa,+Shivamogga"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute bottom-4 right-4 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold py-2 px-4 rounded-lg shadow-xl flex items-center gap-2 transition-all transform hover:scale-105"
                            >
                                <MapPin className="w-3 h-3" />
                                Get Directions
                            </a>
                        </div>
                    </motion.aside>
                </div>

                {/* Internal Linking & Unique Content Section */ }
                <motion.section
                    initial={ { opacity: 0, y: 30 } }
                    whileInView={ { opacity: 1, y: 0 } }
                    viewport={ { once: true } }
                    transition={ { duration: 0.8 } }
                    className="mt-12 bg-linear-to-br from-indigo-900/20 to-purple-900/20 rounded-3xl p-8 md:p-12 border border-white/10"
                >
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                            Our Event Planning <span className="text-indigo-400">Process</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            { steps.map((step, index) => (
                                <div key={ index } className="flex gap-4">
                                    <div className="shrink-0 mt-1">
                                        <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                                            { step.icon }
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-2 text-white">{ step.title }</h3>
                                        <p className="text-sm text-gray-400 leading-relaxed">{ step.description }</p>
                                    </div>
                                </div>
                            )) }
                        </div>
                    </div>
                </motion.section>
            </div>
        </div>
    );
};

export default Contact;