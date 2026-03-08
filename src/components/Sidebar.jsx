import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Home, Briefcase, Settings, Phone, Info } from 'lucide-react'

const Sidebar = ({ isOpen, setIsOpen }) => {
    const [activeSection, setActiveSection] = useState('home')

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
            setActiveSection(sectionId)
        }
        setIsOpen(false)
    }

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'ourwork', 'services', 'contact', 'aboutus']
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
        { name: 'Home', sectionId: 'home', icon: Home },
        { name: 'Our Work', sectionId: 'ourwork', icon: Briefcase },
        { name: 'Services', sectionId: 'services', icon: Settings },
        { name: 'Contact', sectionId: 'contact', icon: Phone },
        { name: 'About Us', sectionId: 'aboutus', icon: Info },
    ]

    const sidebarVariants = {
        closed: {
            x: '100%',
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 30
            }
        },
        open: {
            x: 0,
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 30,
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    }

    // const itemVariants = {
    //     closed: { opacity: 0, x: 20 },
    //     open: { opacity: 1, x: 0 }
    // }

    return (
        <AnimatePresence>
            { isOpen && (
                <>
                    {/* Backdrop */ }
                    <motion.div
                        initial={ { opacity: 0 } }
                        animate={ { opacity: 1 } }
                        exit={ { opacity: 0 } }
                        onClick={ () => setIsOpen(false) }
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 md:hidden"
                    />

                    {/* Sidebar Body */ }
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={ sidebarVariants }
                        className="fixed top-0 right-0 h-full w-70 bg-white/10 backdrop-blur-xl border-l border-white/20 z-60 shadow-2xl md:hidden overflow-hidden"
                    >
                        {/* Glossy Reflection Overlay */ }
                        <div className="absolute inset-0 bg-linear-to-tr from-white/5 to-transparent pointer-events-none" />

                        <div className="relative z-10 p-6 flex flex-col h-full">
                            <div className="flex justify-between items-center mb-10">
                                <span className="text-xl font-bold text-white tracking-tight">Menu</span>
                                <button
                                    onClick={ () => setIsOpen(false) }
                                    className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white active:scale-95 transition-all"
                                    aria-label="Close menu"
                                >
                                    <X size={ 20 } />
                                </button>
                            </div>

                            <nav className="flex flex-col gap-y-2">
                                { navLinks.map((link) => {
                                    const isActive = activeSection === link.sectionId
                                    const Icon = link.icon
                                    return (
                                        <motion.div key={ link.sectionId }>
                                            <button
                                                onClick={ () => scrollToSection(link.sectionId) }
                                                className={ `group flex items-center gap-x-4 px-4 py-4 rounded-2xl active:scale-95 transition-all duration-300 w-full ${isActive
                                                    ? 'bg-white/15 text-white shadow-[0_0_20px_rgba(255,255,255,0.05)]'
                                                    : 'text-white/70 hover:text-white hover:bg-white/5'
                                                    }` }
                                            >
                                                <div className={ `p-2 rounded-xl transition-colors ${isActive ? 'bg-white/10' : 'bg-transparent group-hover:bg-white/10'}` }>
                                                    <Icon size={ 18 } />
                                                </div>
                                                <span className="font-medium">{ link.name }</span>
                                            </button>
                                        </motion.div>
                                    )
                                }) }
                            </nav>

                            <div className="mt-auto pt-6 border-t border-white/10">
                                <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                                    <p className="text-xs text-white/50 text-center uppercase tracking-widest font-semibold">
                                        Eventz Gallery © 2026
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            ) }
        </AnimatePresence>
    )
}

export default Sidebar