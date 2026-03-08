import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import logo from '../assets/eventzgallery_logo.png'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    const navLinks = [
        { name: 'Home', sectionId: 'home' },
        { name: 'About Us', sectionId: 'aboutus' },
        { name: 'Services', sectionId: 'services' },
        { name: 'Contact', sectionId: 'contact' },
        { name: 'FAQ', sectionId: 'faq' },
    ]

    const socialLinks = [
        { name: 'WhatsApp', icon: <FaWhatsapp />, url: 'https://wa.me/917676417117', color: 'hover:text-green-500' },
        { name: 'Instagram', icon: <FaInstagram />, url: '#', color: 'hover:text-pink-500' },
        { name: 'X / Twitter', icon: <FaXTwitter />, url: '#', color: 'hover:text-neutral-400' },
    ]

    const services = ['Wedding Planning', 'Event Planning', 'Corporate Events', 'Photography', 'Decoration'];

    const scrollToSection = (sectionId) => {
        if (sectionId === 'top') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <footer className="relative pt-16 pb-8 overflow-hidden bg-neutral-950">
            {/* Dynamic Background */ }
            {/* <AnimatedBackground opacity={ 0.3 } speed={ 0.5 } /> */ }

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
                    {/* Brand & Contact Section */ }
                    <div className="md:col-span-12 lg:col-span-6 space-y-8">
                        <div>
                            <Link to="/home" className="flex items-center gap-4 mb-4 group">
                                <img src={ logo } alt="EventzGallery Logo" className="w-12 h-12 rounded-full object-cover border border-white/20 group-hover:scale-105 transition-transform" />
                                <div className="flex flex-col">
                                    <span className="text-xl font-bold text-white tracking-wide leading-tight">
                                        EventzGallery
                                    </span>
                                    <span className="text-xs text-neutral-400 font-normal">Your movement, our magic</span>
                                </div>
                            </Link>

                            <p className="text-neutral-400 leading-relaxed text-sm max-w-md font-light">
                                Creating unforgettable moments and exceptional experiences for over 2 years. Let us bring your vision to life with our expertise and passion for perfection.
                            </p>
                        </div>

                        {/* Contact Info */ }
                        <ul className="space-y-4">
                            <li className="flex items-center gap-4 text-neutral-400 text-sm font-light">
                                <svg viewBox="0 0 24 24" fill="none" className="w-[1.15rem] h-[1.15rem] text-neutral-400 shrink-0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                                <span>+91 7676417117</span>
                            </li>
                            <li className="flex items-center gap-4 text-neutral-400 text-sm font-light">
                                <svg viewBox="0 0 24 24" fill="none" className="w-[1.15rem] h-[1.15rem] text-neutral-400 shrink-0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                                <span>hello@eventzgallery.com</span>
                            </li>
                            <li className="flex items-start gap-4 text-neutral-400 text-sm font-light">
                                <svg viewBox="0 0 24 24" fill="none" className="w-[1.15rem] h-[1.15rem] text-neutral-400 shrink-0 mt-0.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                                <span className="max-w-[250px]">Sambhrama apartment, purdal road, gadikoppa, Shivamogga</span>
                            </li>
                        </ul>
                    </div>

                    {/* Services Section */ }
                    <div className="md:col-span-6 lg:col-span-3 lg:pl-6">
                        <h4 className="text-white font-medium mb-7 tracking-wide">Services</h4>
                        <ul className="space-y-4">
                            { services.map((service) => (
                                <li key={ service }>
                                    <button
                                        onClick={ () => scrollToSection('services') }
                                        className="text-neutral-400 hover:text-neutral-300 active:scale-95 transition-all text-sm font-light flex items-center gap-2 group cursor-pointer"
                                    >
                                        { service }
                                    </button>
                                </li>
                            )) }
                        </ul>
                    </div>

                    {/* Quick Links Section */ }
                    <div className="md:col-span-6 lg:col-span-3 lg:pl-6">
                        <h4 className="text-white font-medium mb-7 tracking-wide">Quick Links</h4>
                        <ul className="space-y-4">
                            { navLinks.map((link) => (
                                <li key={ link.name }>
                                    <button
                                        onClick={ () => scrollToSection(link.sectionId) }
                                        className="text-neutral-400 hover:text-neutral-300 active:scale-95 transition-all text-sm font-light flex items-center gap-2 group cursor-pointer"
                                    >
                                        { link.name }
                                    </button>
                                </li>
                            )) }
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */ }
                <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/40 text-xs">
                        © { currentYear } EventzGallery. All rights reserved.
                    </p>
                    <div className="flex gap-8">
                        { socialLinks.map((social, index) => (
                            <motion.a
                                key={ index }
                                href={ social.url }
                                aria-label={ social.name }
                                whileHover={ { y: -3 } }
                                whileTap={ { scale: 0.95 } }
                                className={ `w-12 h-12 min-w-[48px] min-h-[48px] rounded-full bg-white/5 flex items-center justify-center text-white/70 border border-white/10 transition-colors ${social.color}` }
                            >
                                { social.icon }
                            </motion.a>
                        )) }
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer