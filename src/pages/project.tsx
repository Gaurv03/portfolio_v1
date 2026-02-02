import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
    Layout,
    Server,
    ChevronRight,
    Rocket
} from "lucide-react"
import {
    BrandGithub,
    Link as LinkIcon
} from "tabler-icons-react"

interface Project {
    id: number
    title: string
    description: string
    category: "Fullstack" | "Frontend"
    tech: string[]
    image: string
    github?: string
    demo?: string
}

const projects: Project[] = [
    {
        id: 1,
        title: "AI Resume Architect",
        description: "A high-performance resume builder featuring real-time collaborative editing, PDF export, and AI-powered content suggestions.",
        category: "Fullstack",
        tech: ["React", "Node.js", "PostgreSQL", "Framer Motion", "Tailwind"],
        image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=800&auto=format&fit=crop",
        github: "#",
        demo: "#"
    },
    {
        id: 2,
        title: "QuantTrade Analytics",
        description: "Real-time stock analysis dashboard with complex data visualizations, technical indicators, and automated trade logging.",
        category: "Fullstack",
        tech: ["Next.js", "Express", "MongoDB", "Recharts", "TypeScript"],
        image: "https://images.unsplash.com/photo-1611974717483-9b0577ae5293?q=80&w=800&auto=format&fit=crop",
        github: "#",
        demo: "#"
    },
    {
        id: 3,
        title: "Nexus E-Commerce",
        description: "A premium shopping experience with optimistic UI updates, multi-step checkout, and dynamic product filtering.",
        category: "Frontend",
        tech: ["React", "Redux Toolkit", "Stripe API", "Tailwind CSS"],
        image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=800&auto=format&fit=crop",
        github: "#",
        demo: "#"
    },
    {
        id: 4,
        title: "DevStream Social",
        description: "Social platform for developers featuring live code sharing, markdown support, and real-time nested commenting.",
        category: "Fullstack",
        tech: ["Next.js", "Socket.io", "Prisma", "AWS S3", "Docker"],
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
        github: "#",
        demo: "#"
    },
    {
        id: 5,
        title: "Motion UX System",
        description: "A comprehensive design system library focused on micro-interactions and smooth layout transitions.",
        category: "Frontend",
        tech: ["React", "TypeScript", "Framer Motion", "Storybook"],
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
        github: "#",
        demo: "#"
    },
    {
        id: 6,
        title: "TaskFlow Pro",
        description: "Enterprise project management tool with Kanban boards, Gantt charts, and automated team notifications.",
        category: "Fullstack",
        tech: ["Node.js", "React", "Sequelize", "Jenkins", "PostgreSQL"],
        image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?q=80&w=800&auto=format&fit=crop",
        github: "#",
        demo: "#"
    },
    {
        id: 7,
        title: "CryptoVoyage UI",
        description: "A dark-themed crypto portfolio tracker with real-time price feeds and interactive candle charts.",
        category: "Frontend",
        tech: ["React", "Vite", "Tailwind CSS", "CoinGecko API"],
        image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=800&auto=format&fit=crop",
        github: "#",
        demo: "#"
    },
    {
        id: 8,
        title: "Zenith SaaS Landing",
        description: "High-conversion landing page with horizontal scroll parallax, 3D elements, and optimized LCP metrics.",
        category: "Frontend",
        tech: ["Next.js", "Three.js", "Tailwind CSS", "GSAP"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
        github: "#",
        demo: "#"
    }
]

const Projects = () => {
    const [filter, setFilter] = useState<"All" | "Fullstack" | "Frontend">("All")

    const filteredProjects = projects.filter(p =>
        filter === "All" ? true : p.category === filter
    )

    return (
        <div className="max-w-7xl mx-auto pb-20 px-4 md:px-8">
            {/* Header Section */}
            <div className="text-center space-y-4 mb-16 mt-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted/50 border border-border text-sm font-medium text-purple-600 dark:text-purple-400"
                >
                    <Rocket size={14} /> 2.5+ Years of Building
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-6xl font-bold tracking-tight"
                >
                    My <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-blue-500 text-shadow-glow">Creative Portfolio</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-muted-foreground text-lg max-w-2xl mx-auto"
                >
                    A curated collection of my work, ranging from complex full-stack architectures
                    to pixel-perfect frontend experiences.
                </motion.p>
            </div>

            {/* Filter Tabs */}
            <div className="flex justify-center mb-12">
                <div className="flex bg-muted/50 p-1 rounded-2xl border border-border backdrop-blur-md">
                    {["All", "Fullstack", "Frontend"].map((f) => (
                        <button
                            key={f}
                            onClick={() => setFilter(f as any)}
                            className={`relative px-6 py-2 text-sm font-semibold transition-colors rounded-xl ${filter === f ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                                }`}
                        >
                            <span className="relative z-10">{f}</span>
                            {filter === f && (
                                <motion.div
                                    layoutId="filter-pill"
                                    className="absolute inset-0 bg-background/80 rounded-xl border border-border shadow-sm"
                                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                />
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Projects Grid */}
            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Card className="group relative h-full bg-card/50 border-border backdrop-blur-sm overflow-hidden hover:border-primary/20 transition-all duration-300 shadow-sm hover:shadow-xl">
                                {/* Category Badge */}
                                <div className="absolute top-4 left-4 z-10">
                                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-background/80 backdrop-blur-md border border-border text-[10px] font-bold uppercase tracking-wider text-foreground">
                                        {project.category === "Fullstack" ? <Server size={10} /> : <Layout size={10} />}
                                        {project.category}
                                    </div>
                                </div>

                                {/* Image Preview */}
                                <div className="aspect-video relative overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                                </div>

                                <CardContent className="p-6 space-y-4">
                                    <h3 className="text-xl font-bold group-hover:text-purple-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack Chips */}
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {project.tech.map((t, idx) => (
                                            <span key={idx} className="px-2 py-0.5 text-[10px] font-medium bg-muted border border-border rounded-md text-foreground/80">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Footer / Links */}
                                    <div className="flex items-center justify-between pt-6 mt-auto">
                                        <div className="flex gap-4">
                                            <a href={project.github} className="text-muted-foreground hover:text-white transition-colors">
                                                <BrandGithub size={20} />
                                            </a>
                                            <a href={project.demo} className="text-muted-foreground hover:text-white transition-colors">
                                                <LinkIcon size={20} />
                                            </a>
                                        </div>
                                        <button className="flex items-center gap-1 text-xs font-bold text-purple-400 hover:text-purple-300 transition-colors">
                                            VIEW DETAILS <ChevronRight size={14} />
                                        </button>
                                    </div>
                                </CardContent>

                                {/* Hover Border Glow */}
                                <div className="absolute -inset-px bg-linear-to-r from-purple-500 to-blue-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity -z-10 blur-sm" />
                            </Card>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    )
}

export default Projects
