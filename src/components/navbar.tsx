import { NavLink } from "react-router"
import { ModeToggle } from "./mode-toggle"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Code2 } from "lucide-react"

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navLinks = [
        { name: "About", path: "/" },
        { name: "Career", path: "/career" },
        { name: "Projects", path: "/projects" },
        { name: "Contact", path: "/contact" },
    ]

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "circOut" }}
                className={`flex items-center gap-2 px-3 py-2 rounded-full border transition-all duration-300 ${scrolled
                    ? "bg-background/80 backdrop-blur-xl border-border shadow-[0_8px_32px_rgba(0,0,0,0.1)]"
                    : "bg-card/40 backdrop-blur-md border-border"
                    }`}
            >
                {/* Logo Section */}
                <NavLink to="/" className="flex items-center px-3 py-1 mr-4">
                    <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        className="relative flex items-center justify-center"
                    >
                        <div className="absolute inset-0 bg-linear-to-r from-purple-500 to-blue-500 rounded-lg blur-md opacity-20 group-hover:opacity-40 transition-opacity" />
                        <div className="relative bg-primary p-1.5 rounded-lg border border-border">
                            <Code2 size={22} className="text-primary-foreground" />
                        </div>
                    </motion.div>
                </NavLink>

                {/* Navigation Links */}
                <div className="flex items-center gap-1">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) => `
                                relative px-4 py-1.5 text-sm font-medium transition-colors
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

                <div className="w-px h-6 bg-border mx-2" />

                {/* Right Actions */}
                <div className="flex items-center px-1">
                    <ModeToggle />
                </div>
            </motion.nav>
        </header>
    )
}

