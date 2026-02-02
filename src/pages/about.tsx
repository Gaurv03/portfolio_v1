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
    MapPin
} from "lucide-react"
import {
    BrandGithub,
    BrandLinkedin,
    BrandMedium,
    BrandTelegram,
    FileDescription,
    Mail
} from "tabler-icons-react"

const fadeInUp = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5 }
}

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
}

export const About = () => {
    const skills = [
        { name: "Frontend", icons: [Code2, Globe], items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
        { name: "Backend", icons: [Database, Terminal], items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"] },
        { name: "Tools & DevOps", icons: [Cpu, Layers], items: ["Git", "Docker", "Vite", "AWS", "Vercel", "Jenkins", "GitHub Actions"] }
    ]

    const stats = [
        { label: "Experience", value: "2.5+ Years", icon: Calendar },
        { label: "Projects", value: "15+ Completed", icon: Briefcase },
        { label: "Location", value: "India", icon: MapPin },
    ]

    return (
        <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="max-w-6xl mx-auto space-y-12 pb-20"
        >
            {/* Hero Section */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <motion.div
                    variants={fadeInUp}
                    className="lg:col-span-4 flex justify-center lg:justify-start"
                >
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-linear-to-r from-purple-600 to-blue-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                        <Avatar className="w-64 h-64 border-4 border-border shadow-2xl relative">
                            <AvatarImage src="/user-image.jpg" className="object-cover" />
                            <AvatarFallback className="bg-muted"><User size={64} /></AvatarFallback>
                        </Avatar>
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.5, type: "spring" }}
                            className="absolute bottom-4 right-4 bg-primary text-primary-foreground p-3 rounded-2xl shadow-xl"
                        >
                            <Sparkles size={24} />
                        </motion.div>
                    </div>
                </motion.div>

                <motion.div
                    variants={fadeInUp}
                    className="lg:col-span-8 space-y-6 text-center lg:text-left"
                >
                    <div className="space-y-2">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                            Gaurav <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-blue-500">Upadhyay</span>
                        </h1>
                        <h2 className="text-xl md:text-2xl font-medium text-muted-foreground">
                            Full-Stack Software Engineer & UI Specialist
                        </h2>
                    </div>

                    <p className="text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                        Passionate Full-Stack Engineer with over 2.5 years of experience building polished,
                        performance-driven web applications. I bridge the gap between complex backend logic
                        and elegant frontend experiences. Based in India 🇮🇳
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                        {stats.map((stat, i) => (
                            <div key={i} className="flex items-center gap-2 px-4 py-2 bg-muted/30 border border-border rounded-full backdrop-blur-sm">
                                <stat.icon size={18} className="text-purple-400" />
                                <span className="text-sm font-semibold">{stat.value}</span>
                                <span className="text-sm text-muted-foreground">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Side: Bio & Story */}
                <motion.div variants={fadeInUp} className="lg:col-span-7 space-y-6">
                    <Card className="h-full border-border bg-card/50 backdrop-blur-md overflow-hidden relative shadow-xl">
                        <div className="absolute top-0 left-0 w-2 h-full bg-linear-to-b from-purple-500 to-blue-500" />
                        <CardContent className="p-8 space-y-6">
                            <h3 className="text-2xl font-bold flex items-center gap-2">
                                <User className="text-purple-400" /> About Me
                            </h3>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>
                                    I’m a developer who thrives at the intersection of design and engineering. My journey over the past 2.5 years has been focused on creating seamless user journeys using modern tech stacks. I specialize in turning architectural puzzles into clean, maintainable code.
                                </p>
                                <p>
                                    Recently, I’ve been crafting a sophisticated resume builder that leverages intricate animations and precise CSS to deliver a premium user experience. I’m also architecting a stock trade analysis platform, where I focus on translating complex data into intuitive, high-performance dashboards.
                                </p>
                                <p>
                                    My approach is simple: build fast, stay efficient, and never compromise on the user experience. Whether it's optimizing a React render cycle or designing a scalable API, I'm all about delivery-focused engineering.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>

                {/* Right Side: Skills */}
                <motion.div variants={fadeInUp} className="lg:col-span-5 space-y-6">
                    <h3 className="text-2xl font-bold flex items-center gap-2 px-2">
                        <Terminal className="text-blue-400" /> Tech Stack
                    </h3>
                    <div className="grid gap-4">
                        {skills.map((category, idx) => (
                            <Card key={idx} className="border-border bg-card/50 backdrop-blur-md hover:bg-muted/40 transition-colors shadow-sm">
                                <CardContent className="p-5">
                                    <div className="flex items-center justify-between mb-3">
                                        <h4 className="font-bold flex items-center gap-2">
                                            {category.name}
                                        </h4>
                                        <div className="flex gap-1">
                                            {category.icons.map((Icon, i) => <Icon key={i} size={16} className="text-muted-foreground" />)}
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {category.items.map((item, i) => (
                                            <span key={i} className="px-3 py-1 text-xs font-medium bg-muted/40 rounded-md border border-border">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Social Links */}
            <motion.div variants={fadeInUp} className="space-y-8 text-center pt-8">
                <h3 className="text-2xl font-bold">Connect With Me</h3>
                <div className="flex flex-wrap justify-center gap-4">
                    {[
                        { name: "GitHub", icon: BrandGithub, color: "hover:text-foreground hover:bg-foreground/5" },
                        { name: "LinkedIn", icon: BrandLinkedin, color: "hover:text-blue-600 hover:bg-blue-600/5" },
                        { name: "Telegram", icon: BrandTelegram, color: "hover:text-sky-500 hover:bg-sky-500/5" },
                        { name: "Resume", icon: FileDescription, color: "hover:text-emerald-500 hover:bg-emerald-500/5" },
                        { name: "Email", icon: Mail, color: "hover:text-red-500 hover:bg-red-500/5" },
                        { name: "Medium", icon: BrandMedium, color: "hover:text-foreground hover:bg-foreground/5" },
                    ].map((link, i) => (
                        <motion.a
                            key={i}
                            href="#"
                            whileHover={{ y: -5, scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`flex items-center gap-3 px-6 py-3 bg-muted/30 border border-border rounded-2xl backdrop-blur-md transition-all ${link.color} group shadow-sm`}
                        >
                            <link.icon className="group-hover:scale-110 transition-transform" />
                            <span className="font-semibold">{link.name}</span>
                        </motion.a>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    )
}

