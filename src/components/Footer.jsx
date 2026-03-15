import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import logo from '../assets/eventzgallery_logo.webp'

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
        <footer className="relative pt-20 pb-10 overflow-hidden bg-neutral-950 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={ { opacity: 0, y: 30 } }
                    whileInView={ { opacity: 1, y: 0 } }
                    viewport={ { once: true, margin: "-100px" } }
                    transition={ { duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] } }
                    className="flex flex-col lg:flex-row justify-between gap-16 mb-8"
                >
                    {/* Brand & Left Section */ }
                    <div className="flex flex-col max-w-sm">
                        <Link to="/" className="flex items-center gap-3 mb-6 group">
                            <picture className="w-10 h-10 rounded-lg overflow-hidden border border-white/10 group-hover:border-white/20 transition-colors block">
                                <source srcSet={ logo } type="image/webp" />
                                <img
                                    src={ logo.replace('.webp', '.png') }
                                    alt="EventzGallery Logo"
                                    className="w-full h-full object-cover"
                                />
                            </picture>
                            <div className="flex flex-col">
                                <span className="text-2xl font-bold text-white tracking-tight">
                                    EventzGallery
                                </span>
                                <span className="text-xs text-neutral-400 font-normal">Your movement, our magic</span>
                            </div>
                        </Link>

                        <p className="text-neutral-500 leading-relaxed text-sm font-light mb-8">
                            Creating unforgettable moments and exceptional experiences for over 2 years. Let us bring your vision to life with our expertise and passion for perfection.
                        </p>

                        {/* Social Icons - Monochrome Style */ }
                        <div className="flex gap-6 mb-8">
                            { socialLinks.map((social, index) => (
                                <motion.a
                                    key={ index }
                                    href={ social.url }
                                    aria-label={ social.name }
                                    whileHover={ { scale: 1.1, color: "#fff" } }
                                    className="text-neutral-500 text-xl transition-colors duration-300"
                                >
                                    { social.icon }
                                </motion.a>
                            )) }
                        </div>

                        {/* Contact Info - Minimalist Style */ }
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-neutral-500 text-sm font-light hover:text-white transition-colors duration-300">
                                <FaPhoneAlt className="text-xs" />
                                <span>+91 7676417117</span>
                            </li>
                            <li className="flex items-center gap-3 text-neutral-500 text-sm font-light hover:text-white transition-colors duration-300">
                                <FaEnvelope className="text-xs" />
                                <span>contact@eventzgallery.com</span>
                            </li>
                            <li className="flex items-start gap-3 text-neutral-500 text-sm font-light hover:text-white transition-colors duration-300">
                                <FaMapMarkerAlt className="text-xs mt-1 shrink-0" />
                                <span className="max-w-[280px]">Sambhrama apartment, purdal road, gadikoppa, Shivamogga</span>
                            </li>
                        </ul>
                    </div>

                    {/* Links - Right Section */ }
                    <div className="flex flex-wrap gap-x-16 gap-y-10 lg:gap-x-24">
                        {/* Services Column */ }
                        <div>
                            <h4 className="text-white text-xs font-bold mb-7 tracking-[0.2em] uppercase">Product</h4>
                            <ul className="space-y-4">
                                { services.map((service) => (
                                    <li key={ service }>
                                        <button
                                            onClick={ () => scrollToSection('services') }
                                            className="text-neutral-500 hover:text-white hover:underline underline-offset-8 decoration-neutral-500 transition-all text-[15px] font-light cursor-pointer"
                                        >
                                            { service }
                                        </button>
                                    </li>
                                )) }
                            </ul>
                        </div>

                        {/* Company Column */ }
                        <div>
                            <h4 className="text-white text-xs font-bold mb-7 tracking-[0.2em] uppercase">Company</h4>
                            <ul className="space-y-4">
                                { navLinks.filter(link => link.sectionId !== 'services').map((link) => (
                                    <li key={ link.name }>
                                        <button
                                            onClick={ () => scrollToSection(link.sectionId) }
                                            className="text-neutral-500 hover:text-white hover:underline underline-offset-8 decoration-neutral-500 transition-all text-[15px] font-light cursor-pointer"
                                        >
                                            { link.name }
                                        </button>
                                    </li>
                                )) }
                                <li>
                                    <button
                                        onClick={ () => scrollToSection('contact') }
                                        className="text-neutral-500 hover:text-white hover:underline underline-offset-8 decoration-neutral-500 transition-all text-[15px] font-light cursor-pointer"
                                    >
                                        Contact
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </motion.div>

                {/* Bottom Bar */ }
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-neutral-600 text-sm font-light">
                        © { currentYear } EventzGallery. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer