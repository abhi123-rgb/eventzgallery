import React from 'react';
import { motion } from 'framer-motion';
import { Wine, MicVocal, Music, Speaker, PartyPopper } from 'lucide-react'

const AnimatedBackground = ({ opacity = 0.5, speed = 1 }) => {
    // Event-related floating icons (wine glass, gift, music note, microphone)
    const floatingShapes = [
        {
            key: 'wine',
            Icon: Wine,
            containerClass: 'w-16 h-16 md:w-[100px] md:h-[100px]',
            initial: { left: '8%', top: '18%', opacity: 0 },
            animate: {
                y: [-18, 18, -18],
                x: [-8, 8, -8],
                opacity: [0.5, 0.9, 0.5],
                rotate: [0, 15, -8, 0]
            },
            duration: 16,
            zIndex: 10,
            color: 'rgba(255,255,255,0.9)'
        },
        {
            key: 'Speaker',
            Icon: Speaker,
            containerClass: 'w-20 h-16 md:w-[110px] md:h-[90px]',
            initial: { right: '14%', top: '12%', opacity: 0 },
            animate: {
                y: [16, -16, 16],
                x: [10, -10, 10],
                opacity: [0.45, 0.85, 0.45],
                rotate: [0, -10, 6, 0]
            },
            duration: 20,
            zIndex: 8,
            color: 'rgba(255,240,230,0.95)'
        },
        {
            key: 'music',
            Icon: Music,
            containerClass: 'w-14 h-20 md:w-[80px] md:h-[120px]',
            initial: { left: '45%', top: '20%', opacity: 0 },
            animate: {
                y: [-22, 22, -22],
                x: [-6, 6, -6],
                opacity: [0.55, 0.95, 0.55],
                rotate: [0, 20, -12, 0]
            },
            duration: 14,
            zIndex: 12,
            color: 'rgba(200,240,255,0.95)'
        },
        {
            key: 'mic',
            Icon: MicVocal,
            containerClass: 'w-16 h-16 md:w-[100px] md:h-[100px]',
            initial: { right: '6%', bottom: '10%', opacity: 0 },
            animate: {
                y: [-12, 12, -12],
                x: [-12, 12, -12],
                opacity: [0.5, 0.85, 0.5],
                rotate: [0, -6, 6, 0]
            },
            duration: 18,
            zIndex: 12,
            color: 'rgba(255,230,250,0.95)'
        },
        {
            key: 'PartyPopper',
            Icon: PartyPopper,
            containerClass: 'w-14 h-14 md:w-[90px] md:h-[90px]',
            initial: { left: '16%', bottom: '18%', opacity: 0 },
            animate: {
                y: [-12, 12, -12],
                x: [-12, 12, -12],
                opacity: [0.5, 0.85, 0.5],
                rotate: [0, 10, -6, 0]
            },
            duration: 18,
            zIndex: 12,
            color: 'rgba(255,230,250,0.95)'
        }
    ];

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Base Background Layer (z-0) */ }
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-neutral-950" />

                {/* Hero Pattern - Grid with Mask */ }
                <div
                    className="absolute inset-0 opacity-[0.2]"
                    style={ {
                        backgroundImage: `
                            linear-gradient(to right, #4f46e5 1px, transparent 1px),
                            linear-gradient(to bottom, #4f46e5 1px, transparent 1px)
                        `,
                        backgroundSize: '40px 40px',
                        maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)',
                        WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
                    } }
                />

                {/* Static Minimalistic Gradient Background */ }
                <div className="absolute inset-0 overflow-hidden" style={ { opacity } }>
                    <div className="absolute top-[-20%] left-[-10%] w-125 sm:w-150 md:w-200 h-125 sm:h-150 md:h-200 rounded-full bg-purple-700/50 blur-[100px] md:blur-[120px] mix-blend-screen" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-100 sm:w-125 md:w-175 h-100 sm:h-125 md:h-175 rounded-full bg-indigo-600/40 blur-[100px] md:blur-[120px] mix-blend-screen" />
                    <div className="absolute top-[20%] left-[30%] w-75 sm:w-100 md:w-150 h-75 sm:h-100 md:h-150 rounded-full bg-pink-600/50 blur-[100px] md:blur-[120px] mix-blend-screen" />
                </div>

                {/* Noise Texture Overlay */ }
                <div
                    className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
                    style={ {
                        backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")',
                        backgroundRepeat: 'repeat'
                    } }
                />

                {/* Gradient Fog / Vignette */ }
                <div className="absolute inset-0 bg-linear-to-b from-neutral-950/10 via-transparent to-neutral-950" />
            </div>

            {/* Floating Event Icons (Layered) */ }
            { floatingShapes.map((shape) => (
                <motion.div
                    key={ `shape-${shape.key}` }
                    initial={ shape.initial }
                    animate={ shape.animate }
                    transition={ {
                        duration: shape.duration / speed,
                        repeat: Infinity,
                        ease: 'easeInOut'
                    } }
                    className={ `absolute pointer-events-none flex items-center justify-center ${shape.containerClass}` }
                    style={ {
                        ...shape.initial,
                        zIndex: shape.zIndex,
                        transformOrigin: 'center',
                        willChange: 'transform, opacity'
                    } }
                >
                    {/* Render lucide icon component for consistency */ }
                    { shape.Icon && React.createElement(shape.Icon, { size: '60%', color: shape.color, strokeWidth: '1.2px' }) }
                </motion.div>
            )) }
        </div>
    );
};

export default AnimatedBackground;
