import React from 'react';
import { motion } from 'framer-motion';
import { Wine, MicVocal, Music, Speaker, PartyPopper } from 'lucide-react'

const AnimatedBackground = ({ opacity = 0.5, speed = 1 }) => {
    // Existing color blobs (kept as subtle underlay)
    const blobs = [
        {
            color: "#4f46e5", // Indigo
            size: "65vmax",
            initial: { left: "-15%", top: "-15%" },
            animate: {
                x: ["0%", "25%", "-10%", "0%"],
                y: ["0%", "20%", "15%", "0%"],
                rotate: [0, 45, -45, 0],
            }
        },
        {
            color: "#9333ea", // Purple
            size: "55vmax",
            initial: { right: "-10%", top: "15%" },
            animate: {
                x: ["0%", "-30%", "15%", "0%"],
                y: ["0%", "25%", "-15%", "0%"],
                rotate: [0, -60, 30, 0],
            }
        },
        {
            color: "#ec4899", // Pink
            size: "60vmax",
            initial: { left: "15%", bottom: "-20%" },
            animate: {
                x: ["0%", "20%", "-25%", "0%"],
                y: ["0%", "-25%", "15%", "0%"],
                rotate: [0, 90, -30, 0],
            }
        },
    ];

    // Event-related floating icons (wine glass, gift, music note, microphone)
    const floatingShapes = [
        {
            key: 'wine',
            Icon: Wine,
            width: 100,
            height: 100,
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
            width: 110,
            height: 90,
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
            width: 80,
            height: 120,
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
            width: 100,
            height: 100,
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
            width: 90,
            height: 90,
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
                <div className="absolute inset-0 bg-[#0a0a0b]" />

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

                {/* Animated Blobs Container */ }
                <div className="absolute inset-0 overflow-hidden" style={ { opacity } }>
                    { blobs.map((blob, index) => (
                        <motion.div
                            key={ `blob-${index}` }
                            initial={ blob.initial }
                            animate={ blob.animate }
                            transition={ {
                                duration: 25 / speed,
                                repeat: Infinity,
                                ease: "easeInOut",
                            } }
                            className="absolute rounded-full blur-[100px] opacity-60"
                            style={ {
                                ...blob.initial,
                                backgroundColor: blob.color,
                                width: blob.size,
                                height: blob.size,
                                mixBlendMode: 'screen'
                            } }
                        />
                    )) }
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
                <div className="absolute inset-0 bg-linear-to-b from-[#0a0a0b]/10 via-transparent to-[#0a0a0b]" />
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
                    className={ `absolute pointer-events-none flex items-center justify-center` }
                    style={ {
                        ...shape.initial,
                        width: shape.width,
                        height: shape.height,
                        zIndex: shape.zIndex,
                        transformOrigin: 'center',
                        willChange: 'transform, opacity'
                    } }
                >
                    {/* Render lucide icon component for consistency */ }
                    { shape.Icon && React.createElement(shape.Icon, { size: Math.round(Math.min(shape.width, shape.height) * 0.6), color: shape.color, strokeWidth: '1.2px' }) }
                </motion.div>
            )) }
        </div>
    );
};

export default AnimatedBackground;
