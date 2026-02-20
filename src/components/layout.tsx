import React from 'react';
import { Navbar } from './navbar';
import { Footer } from './footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Meteors } from './ui/meteors';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>

            <div className="relative min-h-screen flex flex-col overflow-x-hidden selection:bg-primary/30">
                {/* Background Effects Container */}
                <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
                    {/* Base Background */}
                    <div className="absolute inset-0 bg-background" />

                    {/* Noise Texture Overlay */}
                    <div
                        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03] mix-blend-overlay"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                        }}
                    />

                    {/* Animated Gradient Blobs */}
                    <div className="absolute inset-0 filter blur-[100px] sm:blur-[150px] opacity-50">
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                x: [0, 100, 0],
                                y: [0, 50, 0],
                            }}
                            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] rounded-full bg-purple-500/20 dark:bg-purple-600/10"
                        />
                        <motion.div
                            animate={{
                                scale: [1.2, 1, 1.2],
                                x: [0, -80, 0],
                                y: [0, 100, 0],
                            }}
                            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-blue-500/20 dark:bg-blue-600/10"
                        />
                        <motion.div
                            animate={{
                                scale: [1, 1.3, 1],
                                x: [0, 60, 0],
                                y: [0, -100, 0],
                            }}
                            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-[10%] left-[10%] w-[55%] h-[55%] rounded-full bg-pink-500/20 dark:bg-pink-600/10"
                        />
                    </div>

                    {/* Falling Meteors Effect */}
                    <div className="absolute inset-0 z-0">
                        <Meteors
                            number={100}
                            maxDuration={30}
                        />
                    </div>
                </div>

                {/* Navbar */}
                <Navbar />

                {/* Main Content Area */}
                <AnimatePresence mode="wait">
                    <motion.main
                        key="main-content"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="grow w-full max-w-7xl mx-auto px-3 md:px-12 pt-28 md:pb-20"
                    >
                        {children}
                    </motion.main>
                </AnimatePresence>

                {/* Footer */}
                <Footer />
            </div>
        </>
    );
};

export default Layout;

