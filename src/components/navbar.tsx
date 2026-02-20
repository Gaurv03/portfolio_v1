import { NavLink } from "react-router"
import { ModeToggle } from "./mode-toggle"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { scrollToTop } from "../lib/utils"
import { Menu, X, ArrowRight } from "lucide-react"

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // Close mobile menu on escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsOpen(false);
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    // Prevent scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const navLinks = [
        { name: "About", path: "/" },
        { name: "Career", path: "/career" },
        { name: "Projects", path: "/projects" },
        { name: "Contact", path: "/contact" },
    ]

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-0 md:p-6 pointer-events-none">
                <motion.nav
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "circOut" }}
                    className={`flex items-center justify-between md:justify-start w-full md:w-auto gap-1 md:gap-2 px-4 md:px-3 py-3 md:py-2 rounded-none md:rounded-full border-b md:border transition-all duration-500 pointer-events-auto ${scrolled || isOpen
                        ? "bg-background/80 backdrop-blur-xl border-border shadow-[0_8px_32px_rgba(0,0,0,0.1)]"
                        : "bg-card/40 backdrop-blur-md border-border"
                        }`}
                >
                    {/* Logo Section */}
                    <NavLink to="/" onClick={() => { scrollToTop(); setIsOpen(false); }} className="flex items-center px-1 md:px-2 py-1">
                        <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                            className="relative flex items-center justify-center"
                        >
                            <div className="absolute inset-0 bg-linear-to-r from-purple-500 to-blue-500 rounded-lg blur-md opacity-20 group-hover:opacity-40 transition-opacity" />
                            <img src="/logo.png" alt="Logo" className="size-8 md:size-9" />
                        </motion.div>
                    </NavLink>

                    {/* Navigation Links - Desktop */}
                    <div className="hidden md:flex items-center gap-0.5 md:gap-1">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                onClick={scrollToTop}
                                className={({ isActive }) => `
                                    relative px-3 md:px-5 py-2 text-[11px] md:text-xs font-black uppercase tracking-wide md:tracking-widest transition-all duration-300
                                    ${isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"}
                                `}
                            >
                                {({ isActive }) => (
                                    <>
                                        <span className="relative z-10">{link.name}</span>
                                        {isActive && (
                                            <motion.div
                                                layoutId="navbar-indicator"
                                                className="absolute inset-0 bg-muted rounded-full border border-border"
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 380,
                                                    damping: 30
                                                }}
                                            />
                                        )}
                                    </>
                                )}
                            </NavLink>
                        ))}
                    </div>

                    <div className="hidden md:block w-px h-6 bg-border mx-2" />

                    {/* Right Actions */}
                    <div className="flex items-center gap-1">
                        <ModeToggle />

                        {/* Hamburger Button - Mobile */}
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex md:hidden items-center justify-center size-10 rounded-full hover:bg-muted transition-colors text-foreground"
                            aria-label="Toggle menu"
                        >
                            <AnimatePresence mode="wait">
                                {isOpen ? (
                                    <motion.div
                                        key="close"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <X size={20} />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="menu"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Menu size={20} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    </div>
                </motion.nav>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 md:hidden bg-background/60 backdrop-blur-2xl flex flex-col pt-32 px-4"
                    >
                        <nav className="flex flex-col gap-4 px-4">
                            {navLinks.map((link, idx) => (
                                <motion.div
                                    key={link.path}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.1 + idx * 0.1 }}
                                >
                                    <NavLink
                                        to={link.path}
                                        onClick={() => {
                                            setIsOpen(false);
                                            scrollToTop();
                                        }}
                                        className={({ isActive }) => `
                                            group flex items-center justify-between py-4 border-b border-border/50
                                            ${isActive ? "text-primary italic" : "text-muted-foreground"}
                                        `}
                                    >
                                        <span className="text-3xl font-black uppercase tracking-tighter group-hover:translate-x-2 transition-transform duration-300">
                                            {link.name}
                                        </span>
                                        <ArrowRight size={24} className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300" />
                                    </NavLink>
                                </motion.div>
                            ))}
                        </nav>

                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="mt-auto mb-12 px-4 py-4 rounded-xl bg-primary/5 border border-primary/10"
                        >
                            <p className="text-sm font-bold text-muted-foreground uppercase mb-2">Available for projects</p>
                            <a href="mailto:gauravupadhyay786.gu@gmail.com" className="text-base font-medium hover:text-primary transition-colors">
                                gauravupadhyay786.gu@gmail.com
                            </a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

