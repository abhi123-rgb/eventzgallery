import { useState, useEffect } from 'react'
import { Menu } from 'lucide-react'
import Sidebar from './Sidebar'
import { motion } from 'framer-motion'
import logo from '../assets/eventzgallery_logo.png'
import { useMediaQuery } from 'react-responsive'

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
            setActiveSection(sectionId)
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'aboutus', 'services', 'contact', 'faq']
            let currentSection = 'home'

            for (const sectionId of sections) {
                const section = document.getElementById(sectionId)
                if (section) {
                    const rect = section.getBoundingClientRect()
                    if (rect.top <= 100) {
                        currentSection = sectionId
                    }
                }
            }

            setActiveSection(currentSection)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { name: 'Home', sectionId: 'home' },
        { name: 'About Us', sectionId: 'aboutus' },
        { name: 'Services', sectionId: 'services' },
        { name: 'Contact', sectionId: 'contact' },
        { name: 'FAQ', sectionId: 'faq' },
    ]

    return (
        <>
            <motion.header
                initial={ { y: -100, opacity: 0 } }
                animate={ { y: 0, opacity: 1 } }
                transition={ { duration: 0.6, ease: [0.23, 1, 0.32, 1] } }
                className="fixed top-4 left-0 right-0 z-50 flex justify-center md:px-4 pointer-events-none"
            >
                <motion.div
                    className='pointer-events-auto flex items-center justify-between gap-x-16 py-1 px-2 mx-2 md:mx-0 rounded-full bg-white/1 border border-white/20 backdrop-blur-lg shadow-lg relative overflow-hidden w-full md:max-w-[750px]'
                >
                    {/* Glossy Reflection Overlay */ }
                    <div className="absolute inset-0 bg-linear-to-tr from-white/1 to-transparent pointer-none" />

                    <button onClick={ () => scrollToSection('home') } className='flex items-center group relative z-10 cursor-pointer bg-transparent border-0'>
                        <div className="relative flex items-center gap-x-2">
                            <img
                                src={ logo }
                                alt="logo"
                                className='w-9 h-9 rounded-full object-cover border border-white/20 group-hover:scale-105 transition-transform duration-300 shadow-sm'
                            />
                            <p className='text-white md:text-sm font-semibold'>EventzGallery</p>
                        </div>
                    </button>

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
                                const isActive = activeSection === link.sectionId
                                return (
                                    <button
                                        key={ link.sectionId }
                                        onClick={ () => scrollToSection(link.sectionId) }
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
                                    </button>
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