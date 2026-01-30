import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import logo from '../assets/eventzgallery_logo.jpeg'

const Header = () => {
    const { scrollY } = useScroll()
    const [hidden, setHidden] = useState(false)
    const location = useLocation()

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious()
        if (latest > previous && latest > 150) {
            setHidden(true)
        } else {
            setHidden(false)
        }
    })

    const navLinks = [
        { name: 'Home', path: '/home' },
        { name: 'Our Work', path: '/ourwork' },
        { name: 'Services', path: '/services' },
        { name: 'Contact', path: '/contact' },
        { name: 'About Us', path: '/aboutus' },
    ]

    return (
        <motion.header
            initial={ { y: -100, opacity: 0 } }
            animate={ hidden ? "hidden" : "visible" }
            variants={ {
                visible: { y: 0, opacity: 1 },
                hidden: { y: -100, opacity: 0 },
            } }
            transition={ { duration: 0.6, ease: [0.23, 1, 0.32, 1] } }
            className="fixed top-3 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
        >
            <motion.div
                className='pointer-events-auto flex items-center gap-x-12 p-1.5 rounded-full backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] ring-1 ring-white/10 relative overflow-hidden'
            >
                {/* Glossy Reflection Overlay */ }
                <div className="absolute inset-0 bg-linear-to-tr from-white/10 to-transparent pointer-none" />

                <Link to="/home" className='flex items-center group relative z-10'>
                    <div className="relative">
                        <img
                            src={ logo }
                            alt="logo"
                            className='w-9 h-9 rounded-full object-cover border border-white/20 group-hover:scale-105 transition-transform duration-300 shadow-sm'
                        />
                    </div>
                </Link>

                <nav className='flex items-center gap-x-2 relative z-10'>
                    { navLinks.map((link) => {
                        const isActive = location.pathname === link.path
                        return (
                            <Link
                                key={ link.path }
                                to={ link.path }
                                className={ `relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${isActive
                                    ? 'text-white'
                                    : 'text-white/70 hover:text-white hover:bg-white/5'
                                    }` }
                            >
                                { isActive && (
                                    <motion.span
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-full -z-10 shadow-sm"
                                        transition={ { type: "spring", bounce: 0.25, duration: 0.5 } }
                                    />
                                ) }
                                { link.name }
                            </Link>
                        )
                    }) }
                </nav>
            </motion.div>
        </motion.header>
    )
}

export default Header