import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import {
    User,
    Code2,
    Terminal,
    Cpu,
    Globe,
    Database,
    Layers,
    Sparkles,
    Calendar,
    Briefcase,
    ArrowUpRight,
    Target,
    Zap
} from "lucide-react"
import {
    BrandGithub,
    BrandLinkedin,
    BrandMedium,
    BrandTelegram,
    FileDescription,
    Mail
} from "tabler-icons-react"
import { Link } from "react-router"
import { scrollToTop } from "../lib/utils"

const fadeInUp = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
}

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
}

const linksArray = [
    {
        name: "GitHub",
        icon: BrandGithub,
        color: "hover:border-white hover:bg-white hover:text-black",
        link: "https://github.com/Gaurv03"
    },
    {
        name: "LinkedIn",
        icon: BrandLinkedin,
        color: "hover:border-blue-600 hover:bg-blue-600 hover:text-white",
        link: "https://www.linkedin.com/in/gaurav-upadhyay-dev03/"
    },
    {
        name: "Telegram",
        icon: BrandTelegram,
        color: "hover:border-purple-600 hover:bg-purple-600 hover:text-white",
        link: "https://t.me/Gaurv_03"
    },
    {
        name: "Resume",
        icon: FileDescription,
        color: "hover:border-emerald-600 hover:bg-emerald-600 hover:text-white",
        link: "/resume.pdf"
    },
    {
        name: "Email",
        icon: Mail,
        color: "hover:border-red-600 hover:bg-red-600 hover:text-white",
        link: "mailto:[gauravupadhyay786.gu@gmail.com]"
    },
    {
        name: "Medium",
        icon: BrandMedium,
        color: "hover:border-indigo-600 hover:bg-indigo-600 hover:text-white",
        link: "https://medium.com/@gauravupadhyay786.gu"
    },
]

export const About = () => {
    const skills = [
        {
            name: "Frontend Architecture",
            icons: [Code2, Globe],
            items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
            color: "from-blue-500/10 to-blue-600/10"
        },
        {
            name: "Backend systems",
            icons: [Database, Terminal],
            items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"],
            color: "from-purple-500/10 to-purple-600/10"
        },
        {
            name: "Cloud & Reliability",
            icons: [Cpu, Layers],
            items: ["Git", "Docker", "Vite", "AWS", "Vercel", "GitHub Actions"],
            color: "from-emerald-500/10 to-emerald-600/10"
        }
    ]

    const stats = [
        { label: "Engineering XP", value: "2.5y+", icon: Calendar },
        { label: "Built Solutions", value: "15+", icon: Briefcase },
        { label: "Global Reach", value: "Remote", icon: Globe },
    ]

    return (
        <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="md:space-y-20 space-y-12"
        >
            {/* Hero Section - Bold & Immersive */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                <motion.div
                    variants={fadeInUp}
                    className="lg:col-span-5 flex justify-center lg:justify-start"
                >
                    <div className="relative">
                        {/* Interactive Background Glow */}
                        <div className="absolute -inset-8 bg-linear-to-tr from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl opacity-50 animate-pulse" />

                        <div className="relative group">
                            <motion.div
                                whileHover={{ scale: 1.05, rotate: -2 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="relative z-10"
                            >
                                <Avatar className="w-72 h-72 md:w-80 md:h-80 border-2 border-white/10 shadow-2xl overflow-hidden rounded-[3rem]">
                                    <AvatarImage src="/user-image.jpg" className="object-cover" />
                                    <AvatarFallback className="bg-muted text-muted-foreground"><User size={80} /></AvatarFallback>
                                </Avatar>

                                {/* Status Chip */}
                                <div className="absolute -bottom-4 -right-4 bg-background border border-border px-4 py-2 rounded-2xl shadow-xl flex items-center gap-2">
                                    <span className="relative flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                                    </span>
                                    <span className="text-[10px] font-black uppercase tracking-widest">Active Now</span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    variants={fadeInUp}
                    className="lg:col-span-7 space-y-8 text-center lg:text-left"
                >
                    <div className="space-y-4">
                        <motion.div
                            variants={fadeInUp}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-[10px] font-black uppercase tracking-[0.3em] text-purple-600 dark:text-purple-400 backdrop-blur-sm"
                        >
                            <User size={12} fill="currentColor" /> Software Engineer
                        </motion.div>

                        <h1 className="md:text-5xl text-3xl font-black tracking-tighter text-foreground">
                            I'm <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 via-purple-500 to-indigo-600">Gaurav.</span>
                        </h1>
                        <h2 className="md:text-3xl text-xl font-bold tracking-tight text-muted-foreground/80">
                            Translating complex logic <br className="hidden md:block" />
                            into <span className="text-foreground">Human-Centric</span> experiences.
                        </h2>
                    </div>

                    <p className="md:text-lg text-base leading-relaxed text-muted-foreground font-medium max-w-2xl mx-auto lg:mx-0">
                        Based in India 🇮🇳, I specialize in crafting high-performance full-stack architectures.
                        My focus is on speed, scalability, and that elusive 'premium feel' that sets
                        great software apart.
                    </p>

                    <div className="flex flex-wrap gap-6 justify-center lg:justify-start pt-4">
                        {stats.map((stat, i) => (
                            <div key={i} className="group flex flex-col items-center lg:items-start">
                                <span className="text-[10px] items-center gap-1.5 font-bold uppercase tracking-widest text-muted-foreground flex mb-1">
                                    {stat.label}
                                </span>
                                <div className="flex items-center gap-2">
                                    <stat.icon size={18} className="text-blue-500" />
                                    <span className="text-2xl font-black tracking-tighter">{stat.value}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Content Deck */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:pt-12">
                {/* Philosophical Bio */}
                <motion.div variants={fadeInUp} className="lg:col-span-12">
                    <Card className="border-none bg-linear-to-br from-card to-card/50 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl border border-white/5">
                        <CardContent className="p-5 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8">
                                <div className="space-y-4">
                                    <h3 className="text-3xl font-black tracking-tight flex items-center gap-4">
                                        <div className="h-8 w-1 bg-blue-500 rounded-full" />
                                        The Philosophy
                                    </h3>
                                    <p className="text-lg text-muted-foreground font-medium leading-relaxed italic">
                                        "Code is not just a set of instructions for machines; it's a medium to craft seamless digital realities."
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="p-4 rounded-2xl bg-muted/30 border border-border space-y-2">
                                        <Target size={20} className="text-blue-500" />
                                        <h4 className="text-xs font-black uppercase tracking-widest">Precision</h4>
                                        <p className="text-[10px] text-muted-foreground font-medium">Pixel-perfect implementation of complex designs.</p>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-muted/30 border border-border space-y-2">
                                        <Zap size={20} className="text-purple-500" />
                                        <h4 className="text-xs font-black uppercase tracking-widest">Velocity</h4>
                                        <p className="text-[10px] text-muted-foreground font-medium">Fast iterations without compromising reliability.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-6 text-muted-foreground font-medium leading-relaxed">
                                <p>
                                    I bridge the gap between design vision and technical feasibility. Over the past 2.5 years,
                                    I've evolved from a curious learner to a detail-obsessed engineer who understands
                                    that the best software is often what the user doesn't notice—the speed, the flow,
                                    and the intuitive logic.
                                </p>
                                <p>
                                    Whether it's architecting a stock analytics engine or an AI-driven interface,
                                    my goal is always the same: Build something that feels as good as it works.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>

                {/* Tech Stack - Dash Style */}
                <motion.div variants={fadeInUp} className="lg:col-span-12 md:space-y-8 space-y-4 md:pt-12">
                    <div className="flex flex-col md:flex-row md:items-center justify-between md:gap-4">
                        <h3 className="md:text-4xl text-2xl font-black tracking-tighter flex items-center gap-4">
                            Technical Dominance
                            <Sparkles className="text-blue-500" />
                        </h3>
                        <p className="text-muted-foreground font-bold text-sm tracking-widest uppercase">Expertise Mapping</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 gap-4">
                        {skills.map((category, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -10 }}
                                className="group"
                            >
                                <Card className="h-full border-border bg-card/40 backdrop-blur-md rounded-2xl overflow-hidden transition-all duration-500 group-hover:border-blue-500/30 group-hover:shadow-[0_0_40px_-15px_rgba(59,130,246,0.3)]">
                                    <CardContent className="md:p-8 p-4 space-y-6">
                                        <div className="flex items-center justify-between">
                                            <div className="flex -space-x-2">
                                                {category.icons.map((Icon, i) => (
                                                    <div key={i} className="p-2 rounded-full bg-background border border-border text-blue-500">
                                                        <Icon size={16} />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <h4 className="text-xl font-black tracking-tight">{category.name}</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {category.items.map((item, i) => (
                                                    <span key={i} className="px-3 py-1 text-[10px] font-black uppercase tracking-wider bg-muted/50 border border-border/50 rounded-lg text-muted-foreground group-hover:text-foreground transition-colors">
                                                        {item}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </CardContent>
                                    <div className={`absolute bottom-0 left-0 h-1 w-full bg-linear-to-r ${category.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Social Signal Section */}
            <motion.div variants={fadeInUp} className="space-y-5">
                <div className="text-center space-y-4">
                    <h3 className="text-2xl md:text-4xl font-black tracking-tighter">Digital Nexus</h3>
                    <p className="text-muted-foreground font-medium md:text-lg text-base">Cross-platform connectivity for collaborative ventures.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 px-6">
                    {linksArray.map((link, i) => (
                        <motion.a
                            key={i}
                            href={link.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -8, scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`flex flex-col items-center justify-center gap-3 p-8 rounded-[2.5rem] bg-card border border-border backdrop-blur-md transition-all duration-300 ${link.color} shadow-lg`}
                        >
                            <link.icon size={28} />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em]">{link.name}</span>
                        </motion.a>
                    ))}
                </div>
            </motion.div>

            {/* Final Catchphrase */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className=" text-center"
            >
                <Link to="/projects" onClick={scrollToTop} className="group inline-flex items-center gap-4 md:text-4xl text-2xl font-black tracking-tighter hover:text-blue-500 transition-colors">
                    Explore my work
                    <div className="p-2 rounded-full bg-blue-500 text-white group-hover:translate-x-4 transition-transform shadow-2xl shadow-blue-500/20">
                        <ArrowUpRight size={30} />
                    </div>
                </Link>
            </motion.div>
        </motion.div>
    )
}


