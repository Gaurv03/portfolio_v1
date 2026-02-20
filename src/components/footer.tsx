import { motion } from "framer-motion"
import {
    ChevronUp,
    Code2,
    ExternalLink
} from "lucide-react"
import { NavLink } from "react-router"
import { BrandGithub, BrandInstagram, BrandLinkedin, BrandTwitter } from "tabler-icons-react"

import { scrollToTop } from "../lib/utils"

export const Footer = () => {

    const navLinks = [
        { name: "About", path: "/" },
        { name: "Career", path: "/career" },
        { name: "Projects", path: "/projects" },
        { name: "Contact", path: "/contact" },
    ]

    const socialLinks = [
        {
            icon: BrandLinkedin,
            href: "https://www.linkedin.com/in/gaurav-upadhyay-dev03/",
            label: "LinkedIn"
        },
        {
            icon: BrandGithub,
            href: "https://github.com/Gaurv03",
            label: "GitHub"
        },
        {
            icon: BrandTwitter,
            href: "https://x.com/GaurvUpadhyay",
            label: "Twitter"
        },
        {
            icon: BrandInstagram,
            href: "https://instagram.com/_.gaurv._",
            label: "Instagram"
        },
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
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 mb-16">
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
                        <p className="text-muted-foreground text-sm md:text-base font-medium leading-relaxed max-w-sm">
                            Building pixel-perfect user experiences and scalable full-stack architectures.
                            Focused on performance, accessibility, and modern aesthetics.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-3 space-y-6">
                        <h4 className="text-[11px] font-black uppercase tracking-widest text-primary/70">Navigation</h4>
                        <ul className="space-y-3 md:space-y-4">
                            {navLinks.map((link) => (
                                <li key={link.path}>
                                    <NavLink
                                        to={link.path}
                                        onClick={scrollToTop}
                                        className="text-[11px] font-black uppercase tracking-widest text-muted-foreground hover:text-foreground flex items-center gap-2 transition-colors group"
                                    >
                                        <ChevronUp size={12} className="rotate-90 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                        {link.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Socials & Contact */}
                    <div className="md:col-span-4 space-y-6">
                        <h4 className="text-[11px] font-black uppercase tracking-widest text-primary/70">Social Connectivity</h4>
                        <div className="flex flex-wrap gap-3">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -4, scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="p-3 rounded-2xl bg-muted/50 border border-border hover:bg-muted transition-colors group"
                                    aria-label={social.label}
                                >
                                    <social.icon size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
                                </motion.a>
                            ))}
                        </div>
                        <div className="pt-2">
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
                    <p className="text-xs md:text-sm text-muted-foreground font-medium text-center md:text-left">
                        © {new Date().getFullYear()} Gaurav Upadhyay. Built with React & Framer Motion.
                    </p>
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-wider">Available for new projects</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
