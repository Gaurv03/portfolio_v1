import React from 'react';
import { Navbar } from './navbar';
import { Footer } from './footer';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col max-w-360 overflow-x-hidden">
            {/* Navbar is common across all pages */}
            <Navbar />

            {/* Main content */}
            <main className="grow p-6 max-w-360 mt-35">
                {children}
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Layout;
