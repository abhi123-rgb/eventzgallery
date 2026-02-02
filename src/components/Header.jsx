import { useState } from 'react'
import { Menu } from 'lucide-react'
import Sidebar from './Sidebar'
import { Link, useLocation } from 'react-router-dom'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import logo from '../assets/eventzgallery_logo.jpeg'
import { useMediaQuery } from 'react-responsive'

const Header = () => {
    const { scrollY } = useScroll()
    const [hidden, setHidden] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const location = useLocation()
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

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
        <>
            <motion.header
                initial={ { y: -100, opacity: 0 } }
                animate={ hidden ? "hidden" : "visible" }
                variants={ {
                    visible: { y: 0, opacity: 1 },
                    hidden: { y: -100, opacity: 0 },
                } }
                transition={ { duration: 0.6, ease: [0.23, 1, 0.32, 1] } }
                className="fixed top-4 left-0 right-0 z-50 flex justify-center md:px-4 pointer-events-none"
            >
                <motion.div
                    className='pointer-events-auto flex items-center justify-between gap-x-16 py-1 px-2 mx-2 md:mx-0 rounded-full bg-white/1 border border-white/20 backdrop-blur-lg shadow-lg relative overflow-hidden w-full md:max-w-[750px]'
                >
                    {/* Glossy Reflection Overlay */ }
                    <div className="absolute inset-0 bg-linear-to-tr from-white/1 to-transparent pointer-none" />

                    <Link to="/home" className='flex items-center group relative z-10'>
                        <div className="relative flex items-center gap-x-2">
                            <img
                                src={ logo }
                                alt="logo"
                                className='w-9 h-9 rounded-full object-cover border border-white/20 group-hover:scale-105 transition-transform duration-300 shadow-sm'
                            />
                            <p className='text-white md:text-sm font-semibold'>EventzGallery</p>
                        </div>
                    </Link>

                    { isMobile ? (
                        <div className='flex items-center gap-x-2 relative z-10'>
                            <button
                                className='flex items-center gap-x-2 relative z-10 cursor-pointer p-2 rounded-full hover:bg-white/10 transition-colors'
                                onClick={ () => setIsSidebarOpen(!isSidebarOpen) }
                            >
                                <Menu size={ 22 } color="white" />
                            </button>
                        </div>
                    ) : (
                        <nav className='flex items-center gap-x-2 relative z-10'>
                            { navLinks.map((link) => {
                                const isActive = location.pathname === link.path
                                return (
                                    <Link
                                        key={ link.path }
                                        to={ link.path }
                                        className={ `relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${isActive
                                            ? 'text-white'
                                            : 'text-white/90 hover:text-white hover:bg-white/10'
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
                    ) }
                </motion.div>
            </motion.header>

            <Sidebar isOpen={ isSidebarOpen } setIsOpen={ setIsSidebarOpen } />
        </>
    )
}

export default Header