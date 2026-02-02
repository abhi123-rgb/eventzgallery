import React from 'react';
import { motion } from 'framer-motion';

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

    // New floating geometric shapes
    const floatingShapes = [
        // Background Shapes (z-0)
        {
            type: "circle",
            width: 100,
            height: 100,
            initial: { left: "10%", top: "15%", opacity: 0 },
            animate: {
                y: [-20, 20, -20],
                x: [-10, 10, -10],
                opacity: [0.5, 0.8, 0.5],
                rotate: [0, 360],
            },
            duration: 15,
            zIndex: 0
        },
        {
            type: "square",
            width: 80,
            height: 80,
            initial: { right: "15%", top: "10%", opacity: 0 },
            animate: {
                y: [20, -20, 20],
                x: [10, -10, 10],
                opacity: [0.5, 0.7, 0.5],
                rotate: [0, -180],
            },
            duration: 18,
            zIndex: 0
        },
        // Foreground Shapes (z-20 floating over content)
        {
            type: "circle",
            width: 60,
            height: 60,
            initial: { right: "20%", bottom: "30%", opacity: 0 },
            animate: {
                y: [15, -15, 15],
                x: [15, -15, 15],
                opacity: [0.6, 0.9, 0.6],
            },
            duration: 12,
            zIndex: 20
        },
        {
            type: "square",
            width: 50,
            height: 50,
            initial: { left: "45%", top: "25%", opacity: 0 },
            animate: {
                y: [-25, 25, -25],
                x: [-10, 10, -10],
                opacity: [0.6, 0.9, 0.6],
                rotate: [0, 90],
            },
            duration: 22,
            zIndex: 20
        },
        {
            type: "square",
            width: 90,
            height: 90,
            initial: { right: "5%", bottom: "5%", opacity: 0 },
            animate: {
                y: [-20, 20, -20],
                x: [-20, 20, -20],
                opacity: [0.4, 0.7, 0.4],
                rotate: [0, 180],
            },
            duration: 28,
            zIndex: 0
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

            {/* Floating Geometric Shapes (Layered) */ }
            { floatingShapes.map((shape, index) => (
                <motion.div
                    key={ `shape-${index}` }
                    initial={ shape.initial }
                    animate={ shape.animate }
                    transition={ {
                        duration: shape.duration / speed,
                        repeat: Infinity,
                        ease: "easeInOut",
                    } }
                    className={ `absolute border border-white/20 backdrop-blur-lg shadow-lg pointer-events-none ${shape.type === 'circle' ? 'rounded-full' :
                        shape.type === 'square' ? 'rounded-2xl' :
                            shape.type === 'rectangle' ? 'rounded-lg' : ''
                        }` }
                    style={ {
                        ...shape.initial,
                        width: shape.width,
                        height: shape.height,
                        zIndex: shape.zIndex,
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 50%, rgba(147,51,234,0.1) 100%)',
                        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37), inset 0 1px 1px rgba(255,255,255,0.2)',
                        backdropFilter: 'blur(10px) saturate(180%)',
                        WebkitBackdropFilter: 'blur(10px) saturate(180%)',
                        border: '1px solid rgba(255,255,255,0.25)'
                    } }
                />
            )) }
        </div>
    );
};

export default AnimatedBackground;
