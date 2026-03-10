import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, User, Smartphone } from 'lucide-react';
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
            value: "Sambhrama apartment, purdal road, gadikoppa, Shivamogga"
        }
    ];

    const socialLinks = [
        { icon: <FaWhatsapp className="w-5 h-5" />, href: "#" },
        { icon: <FaInstagram className="w-5 h-5" />, href: "#" },
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
    ]

    return (
        <div className="bg-neutral-950 text-white py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex flex-col items-center">
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
                        <span className="inline-block py-1 px-4 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-indigo-200 text-xs font-semibold mb-6 tracking-wider uppercase">
                            Get In Touch
                        </span>

                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                            Let's Plan Your <br className="hidden sm:block" />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 via-purple-400 to-pink-500">
                                Perfect Event
                            </span>
                        </h1>

                        <p className="text-gray-400 text-base md:text-lg max-w-lg mx-auto font-light mt-4">
                            Ready to start planning? Fill out the form below and our team will get back to you within 24 hours.
                        </p>
                    </div>
                </motion.header>

                <motion.div
                    initial={ { opacity: 0, y: 30 } }
                    whileInView={ { opacity: 1, y: 0 } }
                    viewport={ { once: true, margin: "-100px" } }
                    transition={ { duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1.0] } }
                    className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden max-w-5xl m-auto grid grid-cols-1 lg:grid-cols-12"
                >
                    {/* Left: Contact Form (8 columns on LG) */ }
                    <div className="lg:col-span-8 p-6 md:p-8 relative">
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
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                                            placeholder="contact@eventzgallery.com"
                                            className="w-full bg-white/10 border border-white/10 focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 rounded-lg py-3 pl-12 pr-4 outline-none transition-all duration-300 placeholder:text-neutral-500"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <label htmlFor="phone" className="text-sm font-medium text-neutral-400 ml-1">Phone</label>
                                    <div className="relative group">
                                        <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500 group-focus-within:text-blue-400 transition-colors" />
                                        <input
                                            id="phone"
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
                                                <option value={ event.value } className='bg-neutral-900' >{ event.label }</option>
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
                                        placeholder="Tell us about your event..."
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
                                        {/* <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> */ }
                                    </>
                                ) }
                            </button>
                        </form>
                    </div>

                    {/* Right: Contact Info (4 columns on LG) */ }
                    <div className="lg:col-span-4 bg-linear-to-br from-blue-600/20 to-indigo-600/20 p-5 md:p-6 border-l border-white/10 flex flex-col justify-between">
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-lg font-semibold mb-5">Contact Information</h3>
                                <div className="space-y-4">
                                    { contactInfo.map((info, index) => (
                                        <div key={ index } className="flex items-center gap-3 group">
                                            <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform shrink-0">
                                                { React.cloneElement(info.icon, { className: "w-4 h-4" }) }
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-400">{ info.label }</p>
                                                <p className="text-sm font-medium">{ info.value }</p>
                                            </div>
                                        </div>
                                    )) }
                                </div>
                            </div>

                            <div>
                                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Follow Us</h4>
                                <div className="flex gap-3">
                                    { socialLinks.map((social, index) => (
                                        <a
                                            key={ index }
                                            href={ social.href }
                                            className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:bg-blue-500 hover:text-white transition-all duration-300 shrink-0"
                                        >
                                            { React.cloneElement(social.icon, { className: "w-4 h-4" }) }
                                        </a>
                                    )) }
                                </div>
                            </div>
                        </div>

                        {/* Map Section */ }
                        <div className="mt-8 rounded-xl overflow-hidden border border-white/10 bg-white/5 h-48 sm:h-56 lg:h-48 relative group">
                            <iframe
                                src="https://maps.google.com/maps?q=Sambhrama%20apartment,%20purdal%20road,%20gadikoppa,%20Shivamogga&t=&z=17&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={ { border: 0, filter: "invert(90%) hue-rotate(180deg)", touchAction: "pan-x pan-y" } }
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                                title="Location Map"
                            ></iframe>

                            {/* Directions Overlay Button */ }
                            <a
                                href="https://www.google.com/maps/dir//Sambhrama+apartment,+purdal+road,+gadikoppa,+Shivamogga"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute bottom-3 right-3 bg-blue-600/90 hover:bg-blue-500 backdrop-blur-md text-white text-xs font-medium py-1.5 px-3 rounded-lg shadow-lg flex items-center gap-2 transition-all transform hover:scale-105 pointer-events-auto"
                            >
                                <MapPin className="w-3 h-3" />
                                Get Directions
                            </a>
                            <div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-white/10" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;