import { motion } from "framer-motion"
import {
    ChevronUp,
    Code2,
    Github,
    Linkedin,
    Twitter,
    Mail,
    ExternalLink
} from "lucide-react"
import { NavLink } from "react-router"

export const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    const navLinks = [
        { name: "About", path: "/" },
        { name: "Career", path: "/career" },
        { name: "Projects", path: "/projects" },
        { name: "Contact", path: "/contact" },
    ]

    const socialLinks = [
        { icon: Github, href: "#", label: "GitHub" },
        { icon: Linkedin, href: "#", label: "LinkedIn" },
        { icon: Twitter, href: "#", label: "Twitter" },
        { icon: Mail, href: "mailto:gauravupadhyay786.gu@gmail.com", label: "Email" },
    ]

    return (
        <footer className="relative mt-20 border-t border-border bg-card/30 backdrop-blur-xl">
            {/* Back to Top Button */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <motion.button
                    onClick={scrollToTop}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-background border border-border shadow-lg text-primary hover:text-blue-500 transition-colors group"
                    aria-label="Back to top"
                >
                    <ChevronUp size={24} className="group-hover:animate-bounce" />
                </motion.button>
            </div>

            <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
                    {/* Branding & Bio */}
                    <div className="md:col-span-5 space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="relative bg-primary p-2 rounded-xl border border-border group">
                                <Code2 size={24} className="text-primary-foreground group-hover:rotate-12 transition-transform" />
                            </div>
                            <span className="text-2xl font-black tracking-tighter">
                                GAURAV<span className="text-blue-500">.</span>DEV
                            </span>
                        </div>
                        <p className="text-muted-foreground font-medium leading-relaxed max-w-sm">
                            Building pixel-perfect user experiences and scalable full-stack architectures.
                            Focused on performance, accessibility, and modern aesthetics.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-3 space-y-6">
                        <h4 className="text-xs font-black uppercase tracking-widest text-primary/70">Navigation</h4>
                        <ul className="space-y-4">
                            {navLinks.map((link) => (
                                <li key={link.path}>
                                    <NavLink
                                        to={link.path}
                                        className="text-muted-foreground hover:text-foreground font-semibold flex items-center gap-2 transition-colors group"
                                    >
                                        <ChevronUp size={14} className="rotate-90 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                        {link.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Socials & Contact */}
                    <div className="md:col-span-4 space-y-6">
                        <h4 className="text-xs font-black uppercase tracking-widest text-primary/70">Social Connectivity</h4>
                        <div className="flex flex-wrap gap-3">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    whileHover={{ y: -4, scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="p-3 rounded-2xl bg-muted/50 border border-border hover:bg-muted transition-colors group"
                                    aria-label={social.label}
                                >
                                    <social.icon size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
                                </motion.a>
                            ))}
                        </div>
                        <div className="pt-4">
                            <a
                                href="mailto:gauravupadhyay786.gu@gmail.com"
                                className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-primary transition-colors"
                            >
                                gauravupadhyay786.gu@gmail.com <ExternalLink size={14} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-muted-foreground font-medium text-center md:text-left">
                        © {new Date().getFullYear()} Gaurav Upadhyay. Built with React & Framer Motion.
                    </p>
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Available for new projects</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
