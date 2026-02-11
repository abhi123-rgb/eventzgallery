import React, { useState } from 'react'
import Hero from '../components/Hero'
import WhatWeDo from '../components/WhatWeDo'
import Testimonials from '../components/Testimonials'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, MessageSquare, User, Smartphone } from 'lucide-react'
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import Contact from './Contact'
import AboutUs from '../components/AboutUs'
import FAQ from '../components/FAQ'

const Home = () => {
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
        <div className='min-h-screen bg-[#0a0a0b]'>
            {/* Home Section */ }
            <section id="home" className='min-h-screen'>
                <Hero />
            </section>

            {/* About Us Section */ }
            <section id="aboutus">
                <AboutUs />
            </section>

            {/* Services Section */ }
            <section id="services">
                <WhatWeDo />
            </section>

            {/* Contact Section */ }
            <section id="contact">
                <Contact />
            </section>

            <Testimonials />

            {/* FAQ Section */ }
            <section id="faq">
                <FAQ />
            </section>
        </div>
    )
}

export default Home