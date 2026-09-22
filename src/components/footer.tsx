import { motion } from "framer-motion"
import {
    ChevronUp,
    ExternalLink,
    Phone,
    Mail,
    Cloud,
    Terminal,
    Cpu,
    Radio,
    Shield,
    Activity,
    Layers
} from "lucide-react"

import { BrandGithub, BrandInstagram, BrandLinkedin, BrandMedium, BrandTwitter } from "tabler-icons-react"

import { scrollToTop } from "../lib/utils"

export const Footer = () => {
    const navLinks = [
        { name: "About", path: "about" },
        { name: "Career", path: "career" },
        { name: "Projects", path: "projects" },
        { name: "Contact", path: "contact" },
    ]

    const socialLinks = [
        {
            icon: BrandLinkedin,
            href: "https://www.linkedin.com/in/gaurav-upadhyay-dev03/",
            label: "LinkedIn",
            hoverColor: "group-hover:text-blue-400 group-hover:border-blue-500/40"
        },
        {
            icon: BrandGithub,
            href: "https://github.com/Gaurv03",
            label: "GitHub",
            hoverColor: "group-hover:text-white group-hover:border-white/40"
        },
        {
            icon: BrandMedium,
            href: "https://medium.com/@gauravupadhyay786.gu",
            label: "Medium",
            hoverColor: "group-hover:text-amber-400 group-hover:border-amber-500/40"
        },
        {
            icon: BrandTwitter,
            href: "https://x.com/GaurvUpadhyay",
            label: "Twitter",
            hoverColor: "group-hover:text-sky-400 group-hover:border-sky-500/40"
        },
        {
            icon: BrandInstagram,
            href: "https://instagram.com/_.gaurv._",
            label: "Instagram",
            hoverColor: "group-hover:text-pink-400 group-hover:border-pink-500/40"
        },
    ]

    // Infinite SaaS Telemetry Marquee items
    const marqueeItems = [
        { label: "AWS CLOUD INFRASTRUCTURE", icon: Cloud, color: "text-amber-400" },
        { label: "TERRAFORM IaC", icon: Layers, color: "text-purple-400" },
        { label: "KUBERNETES & HELM", icon: Cpu, color: "text-blue-400" },
        { label: "DOCKER MULTI-STAGE", icon: Terminal, color: "text-cyan-400" },
        { label: "JENKINS & GITHUB ACTIONS", icon: Shield, color: "text-emerald-400" },
        { label: "PROMETHEUS & GRAFANA", icon: Activity, color: "text-orange-400" },
        { label: "200K+ DAILY S3 IMAGES", icon: Radio, color: "text-amber-400" },
        { label: "99.9% UPTIME RELIABILITY", icon: Activity, color: "text-emerald-400" },
    ]

    return (
        <footer className="relative mt-24 border-t border-border/50 bg-card/25 backdrop-blur-2xl overflow-hidden">
            {/* SaaS Glowing Aurora / Horizon Line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-cyan-500/50 to-transparent z-10" />

            {/* Animated Laser Light Beam Sweeping Across the Horizon */}
            <motion.div
                animate={{
                    x: ["-100%", "200%"],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatDelay: 1,
                }}
                className="absolute top-0 left-0 w-1/3 h-0.5 bg-linear-to-r from-transparent  via-cyan-400 to-transparent blur-xs z-10 pointer-events-none"
            />

            {/* Ambient Radial Cloud Flare */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-36 bg-linear-to-b from-cyan-500/15 via-amber-500/10 to-transparent blur-3xl pointer-events-none" />

            {/* SaaS Infinite Scrolling Telemetry Ribbon */}
            <div className="border-b border-border/40 py-3 bg-background/40 backdrop-blur-md overflow-hidden relative select-none">
                <div className="absolute left-0 top-0 bottom-0 w-16 bg-linear-to-r from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-16 bg-linear-to-l from-background to-transparent z-10 pointer-events-none" />

                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 35,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="flex items-center gap-8 whitespace-nowrap will-change-transform"
                >
                    {/* Double the list for seamless continuous loop */}
                    {[...marqueeItems, ...marqueeItems].map((item, idx) => (
                        <div
                            key={idx}
                            className="inline-flex items-center gap-2 text-[10px]  font-mono font-bold tracking-widest text-muted-foreground uppercase opacity-80 hover:opacity-100 transition-opacity"
                        >
                            <item.icon size={12} className={item.color} />
                            <span>{item.label}</span>
                            <span className="text-border mx-2">•</span>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Giant Background Typography Watermark */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none z-0 overflow-hidden">
                <span className="text-[12vw] font-black uppercase tracking-tighter text-foreground/2 dark:text-foreground/3 block leading-none font-mono">
                    GAURAV.CLOUD
                </span>
            </div>

            {/* Back to Top Button with SaaS Radar Pulse */}
            <div className="absolute top-10 right-8 md:right-16 z-20">
                <div className="relative">
                    {/* Radar Pulse Rings */}
                    <span className="absolute -inset-1 rounded-full bg-cyan-400/20 animate-ping opacity-75 pointer-events-none" />
                    <span className="absolute -inset-2 rounded-full bg-amber-400/10 blur-xs pointer-events-none" />

                    <motion.button
                        onClick={scrollToTop}
                        whileHover={{ scale: 1.1, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative flex items-center justify-center size-11 rounded-full bg-background/80 border border-border/80 shadow-xl text-foreground hover:text-amber-400 hover:border-amber-400/50 backdrop-blur-xl transition-all group cursor-pointer"
                        aria-label="Back to top"
                    >
                        <ChevronUp size={20} className="group-hover:-translate-y-0.5 transition-transform" />
                    </motion.button>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-6 pt-14 pb-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 mb-14">
                    {/* Branding & Mission */}
                    <div className="md:col-span-5 space-y-6">
                        <div className="flex items-center gap-3">
                            <motion.div
                                whileHover={{ scale: 1.08, rotate: 4 }}
                                whileTap={{ scale: 0.95 }}
                                className="relative flex items-center justify-center"
                            >
                                <div className="absolute inset-0 bg-linear-to-r from-amber-500 via-cyan-500 to-blue-500 rounded-xl blur-md opacity-30 group-hover:opacity-60 transition-opacity" />
                                <img src="/logo.png" alt="Logo" className="size-11 md:size-11 relative z-10" />
                            </motion.div>
                            <div>
                                <span className="text-2xl font-black tracking-tighter gap-0 block">
                                    GAURAV<span className="text-amber-400">.</span>CLOUD
                                </span>
                                <span className="text-[10px]  font-mono uppercase tracking-widest text-muted-foreground block">
                                    Platform & Cloud Engineering
                                </span>
                            </div>
                        </div>

                        <p className="text-muted-foreground text-sm font-medium leading-relaxed max-w-sm">
                            Software Engineer & Cloud / DevOps Engineer with 3.5+ years of experience.
                            Building resilient cloud infrastructure, automated CI/CD pipelines, and high-performance applications.
                        </p>

                        <div className="flex flex-col gap-2 text-xs font-semibold text-muted-foreground">
                            <a href="mailto:gauravupadhyay786.gu@gmail.com" className="hover:text-primary transition-colors flex items-center gap-2">
                                <Mail size={13} className="text-amber-400" /> gauravupadhyay786.gu@gmail.com
                            </a>
                            <a href="tel:+919660178191" className="hover:text-primary transition-colors flex items-center gap-2">
                                <Phone size={13} className="text-cyan-400" /> (+91) 9660-178191
                            </a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="md:col-span-3 space-y-5">
                        <h4 className="text-[10px]  font-mono font-bold uppercase tracking-[0.25em] text-muted-foreground">
                            Navigation
                        </h4>
                        <ul className="space-y-3">
                            {navLinks.map((link) => (
                                <li key={link.path}>
                                    <a
                                        href={`#${link.path}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            document.getElementById(link.path)?.scrollIntoView({ behavior: "smooth" });
                                        }}
                                        className="text-xs font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground flex items-center gap-2 transition-all group hover:translate-x-1"
                                    >
                                        <span className="size-1 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connectivity & Socials */}
                    <div className="md:col-span-4 space-y-5">
                        <h4 className="text-[10px]  font-mono font-bold uppercase tracking-[0.25em] text-muted-foreground">
                            Connect & Collaborate
                        </h4>

                        <div className="flex flex-wrap gap-2">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -3, scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`p-3 rounded-2xl bg-card/40 border border-border/60 hover:bg-muted/50 transition-all group shadow-sm ${social.hoverColor}`}
                                    aria-label={social.label}
                                    title={social.label}
                                >
                                    <social.icon size={18} className="text-muted-foreground group-hover:text-inherit transition-colors" />
                                </motion.a>
                            ))}
                        </div>

                        <div className="pt-2">
                            <a
                                href="/gaurav_upadhyay_resume.pdf"
                                download
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 hover:bg-amber-500 hover:text-background text-xs font-bold transition-all shadow-sm group"
                            >
                                <span>Download Resume (PDF)</span>
                                <ExternalLink size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Meta & SaaS Status Bar */}
                <div className="pt-6 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-muted-foreground font-medium text-center md:text-left">
                        © {new Date().getFullYear()} Gaurav Upadhyay • Software Engineer | Cloud & DevOps Engineer
                    </p>

                    {/* SaaS Health Pill */}
                    <div className="flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-background/60 border border-border/80 shadow-xs backdrop-blur-md">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="text-[10px]  font-mono font-bold text-foreground/80 uppercase tracking-wider">
                            AWS Cloud Systems Operational • 99.9% Uptime
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
