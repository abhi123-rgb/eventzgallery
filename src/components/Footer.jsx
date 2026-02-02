import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import logo from '../assets/eventzgallery_logo.jpeg'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    const navLinks = [
        { name: 'Home', path: '/home' },
        { name: 'Our Work', path: '/ourwork' },
        { name: 'Services', path: '/services' },
        { name: 'About Us', path: '/aboutus' },
        { name: 'Contact', path: '/contact' },
    ]

    const socialLinks = [
        { icon: <FaWhatsapp />, url: '#', color: 'hover:text-green-500' },
        { icon: <FaInstagram />, url: '#', color: 'hover:text-pink-500' },
        { icon: <FaXTwitter />, url: '#', color: 'hover:text-white-400' },
    ]

    const services = ['Wedding Planning', 'Event Planning', 'Corporate Events', 'Photography', 'Decoration'];

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative pt-16 pb-8 overflow-hidden">
            {/* Dynamic Background */ }
            {/* <AnimatedBackground opacity={ 0.3 } speed={ 0.5 } /> */ }

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Section */ }
                    <div className="space-y-6">
                        <Link to="/home" className="flex items-center gap-3">
                            <img src={ logo } alt="EventzGallery" className="w-12 h-12 rounded-full object-cover border border-white/20" />
                            <span className="text-xl font-bold bg-linear-to-r from-white to-white/60 bg-clip-text text-transparent">
                                EventzGallery
                            </span>
                        </Link>
                        <p className="text-white/50 leading-relaxed text-sm">
                            Your moments, our magic
                        </p>
                    </div>

                    {/* Quick Links */ }
                    <div>
                        <h4 className="text-white font-semibold mt-3 mb-5">Quick Links</h4>
                        <ul className="space-y-4">
                            { navLinks.map((link) => (
                                <li key={ link.path }>
                                    <Link
                                        to={ link.path }
                                        onClick={ handleScrollToTop }
                                        className="text-white/50 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                                    >
                                        { link.name }
                                    </Link>
                                </li>
                            )) }
                        </ul>
                    </div>

                    {/* Services Section (Mock) */ }
                    <div>
                        <h4 className="text-white font-semibold mt-3 mb-5">Our Services</h4>
                        <ul className="space-y-4">
                            { services.map((service) => (
                                <li key={ service }>
                                    <span className="text-white/50 hover:text-white cursor-pointer transition-colors text-sm flex items-center gap-2 group">
                                        { service }
                                    </span>
                                </li>
                            )) }
                        </ul>
                    </div>

                    {/* Contact Info */ }
                    <div>
                        <h4 className="text-white font-semibold mt-3 mb-5">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-white/50 text-sm">
                                <FaMapMarkerAlt className="mt-1 text-white/70" />
                                <span>123 Event Avenue, Celebration City,<br />ST 12345</span>
                            </li>
                            <li className="flex items-center gap-3 text-white/50 text-sm">
                                <FaPhoneAlt className="text-white/70" />
                                <span>+91 76764 17117</span>
                            </li>
                            <li className="flex items-center gap-3 text-white/50 text-sm">
                                <FaEnvelope className="text-white/70" />
                                <span>hello@eventzgallery.com</span>
                            </li>
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
                                whileHover={ { y: -3 } }
                                className={ `w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 border border-white/10 transition-colors ${social.color}` }
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