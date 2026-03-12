import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
    useEffect(() => {
        // SEO: Update page title and description
        document.title = "404 - Page Not Found | EventzGallery";
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Return to EventzGallery to plan your next event.");
        }

        return () => {
            // Restore original title if needed, or leave it for Home to manage
            document.title = "EventzGallery | Your Movement, Our Magic";
        };
    }, []);

    return (
        <main className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center px-4 relative overflow-hidden">
            {/* Background Decorative Gradients */ }
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 bg-neutral-950">
                <div className="absolute top-[10%] left-[15%] w-72 h-72 bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-amber-600/10 rounded-full blur-[150px]"></div>
            </div>

            <div className="max-w-xl w-full text-center space-y-8 z-10">
                {/* Visual 404 Element */ }
                <motion.div
                    initial={ { opacity: 0, y: 30 } }
                    animate={ { opacity: 1, y: 0 } }
                    transition={ { duration: 0.8, ease: "easeOut" } }
                    className="relative"
                >
                    <h1 className="text-9xl md:text-[12rem] font-bold text-transparent bg-clip-text bg-linear-to-b from-neutral-200 to-neutral-700 select-none">
                        404
                    </h1>
                </motion.div>

                <motion.div
                    initial={ { opacity: 0 } }
                    animate={ { opacity: 1 } }
                    transition={ { delay: 0.6, duration: 0.8 } }
                    className="space-y-4"
                >
                    <h2 className="text-3xl md:text-4xl font-semibold text-neutral-100">
                        Oops! Nothing found here.
                    </h2>
                    <p className="text-neutral-400 text-lg md:text-xl max-w-md mx-auto">
                        The page you're searching for seems to have vanished into thin air. Let's get you back on track.
                    </p>
                </motion.div>

                {/* Navigation Actions */ }
                <motion.div
                    initial={ { opacity: 0, y: 20 } }
                    animate={ { opacity: 1, y: 0 } }
                    transition={ { delay: 0.8, duration: 0.6 } }
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
                >
                    <Link
                        to="/"
                        className="group relative flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-blue-900/40 hover:scale-105 active:scale-95"
                    >
                        <Home className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
                        <span>Back to Home</span>
                    </Link>
                </motion.div>
            </div>

            {/* Subtle SEO-friendly breadcrumb or links */ }
            <motion.div
                initial={ { opacity: 0 } }
                animate={ { opacity: 0.5 } }
                transition={ { delay: 1.2, duration: 1 } }
                className="absolute bottom-8 text-neutral-600 text-sm font-light select-none"
            >
                EVENTZGALLERY | PREMIER EVENT PLANNERS
            </motion.div>
        </main>
    );
};

export default NotFound;
