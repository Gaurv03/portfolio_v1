import React from 'react';
import { Navbar } from './navbar';
import { Footer } from './footer';
import { motion, AnimatePresence } from 'framer-motion';
import { GridBackground } from './ui/grid-background';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <div className="relative min-h-screen flex flex-col overflow-x-hidden selection:bg-primary/30">
                {/* Background Grid with Moving Signal Lines */}
                <GridBackground />



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

