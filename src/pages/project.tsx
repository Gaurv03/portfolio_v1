import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
    Layout,
    Server,
    ExternalLink,
    ChevronRight,
    Rocket,
    Terminal,
    Eye
} from "lucide-react"
import {
    BrandGithub
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
    }
]

const fadeInUp = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
}

const ProjectCard = ({ project, index }: { project: Project, index: number }) => (
    <motion.div
        layout
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ delay: index * 0.05, duration: 0.4 }}
        className="group relative"
    >
        <Card className="h-full bg-card/20 border-border/50 backdrop-blur-xl overflow-hidden hover:border-blue-500/30 transition-all duration-500 rounded-[2rem]">
            {/* Image Preview with sophisticated overlay */}
            <div className="relative aspect-16/10 overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Advanced Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent opacity-80" />

                <div className="absolute top-4 left-4 flex gap-2">
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[9px] font-black uppercase tracking-tighter text-white">
                        {project.category === "Fullstack" ? <Server size={10} /> : <Layout size={10} />}
                        {project.category}
                    </div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-4">
                        <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            href={project.demo}
                            className="p-3 rounded-full bg-white text-black shadow-xl"
                        >
                            <Eye size={20} />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            href={project.github}
                            className="p-3 rounded-full bg-black text-white border border-white/20 shadow-xl"
                        >
                            <BrandGithub size={20} />
                        </motion.a>
                    </div>
                </div>
            </div>

            <CardContent className="p-8 flex flex-col h-[calc(100%-aspect-16/10)]">
                <div className="space-y-3 grow">
                    <h3 className="text-2xl font-black tracking-tighter group-hover:text-blue-400 transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-base text-muted-foreground font-medium leading-relaxed line-clamp-2">
                        {project.description}
                    </p>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 pt-2">
                        {project.tech.slice(0, 4).map((t, idx) => (
                            <span key={idx} className="px-2.5 py-1 text-[10px] font-black uppercase bg-muted/50 border border-border/50 rounded-lg text-muted-foreground">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border/50 flex items-center justify-between">
                    <button className="text-[10px] items-center gap-2 font-black uppercase tracking-[0.2em] text-blue-500 hover:text-blue-400 transition-all flex group/btn">
                        Explore Case Study
                        <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                    <Terminal size={14} className="text-muted-foreground/30" />
                </div>
            </CardContent>

            {/* Subtle Gradient Glow */}
            <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        </Card>
    </motion.div>
)

const Projects = () => {
    const [filter, setFilter] = useState<"All" | "Fullstack" | "Frontend">("All")

    const filteredProjects = projects.filter(p =>
        filter === "All" ? true : p.category === filter
    )

    return (
        <div className="space-y-24 pb-12">
            {/* Header Section */}
            <div className="flex flex-col items-center text-center space-y-8 px-6">
                <motion.div
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                    className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-[10px] font-black uppercase tracking-[0.3em] text-orange-600 dark:text-orange-400 backdrop-blur-sm"
                >
                    <Rocket size={12} fill="currentColor" /> Selected Works
                </motion.div>

                <motion.h1
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                    className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.8] mb-4"
                >
                    Proof of <br />
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 via-emerald-500 to-indigo-600">
                        Capability.
                    </span>
                </motion.h1>

                <motion.p
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                    className="text-muted-foreground text-xl max-w-2xl font-medium leading-relaxed"
                >
                    A curated selection of engineering feats, where code meets creativity to solve
                    complex human problems at scale.
                </motion.p>
            </div>

            {/* Advanced Filter Tabs */}
            <div className="flex justify-center mb-16 px-6">
                <div className="flex p-1.5 bg-card/50 backdrop-blur-2xl rounded-3xl border border-border/50 shadow-2xl">
                    {["All", "Fullstack", "Frontend"].map((f) => (
                        <button
                            key={f}
                            onClick={() => setFilter(f as any)}
                            className={`relative px-8 py-3 text-xs font-black uppercase tracking-widest transition-all rounded-2xl ${filter === f ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                                }`}
                        >
                            <span className="relative z-10">{f}</span>
                            {filter === f && (
                                <motion.div
                                    layoutId="filter-active"
                                    className="absolute inset-0 bg-background border border-border shadow-lg"
                                    style={{ borderRadius: '1rem' }}
                                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                />
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Dynamic Grid Layout */}
            <div className="px-6">
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, idx) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                index={idx}
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Bottom CTA */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-32 text-center"
            >
                <a
                    href="/contact"
                    className="group inline-flex items-center gap-4 text-3xl md:text-5xl font-black tracking-tighter hover:text-blue-500 transition-colors"
                >
                    Have a vision?
                    <div className="p-4 rounded-full bg-blue-500 text-white group-hover:translate-x-4 transition-transform">
                        <ExternalLink size={32} />
                    </div>
                </a>
            </motion.div>
        </div>
    )
}

export default Projects

