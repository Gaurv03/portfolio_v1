import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
    Layout,
    Server,
    ExternalLink,
    Rocket,
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
        title: "Alphatopia – Trading Analysis Platform",
        description:
            "A data-intensive stock market analytics dashboard for visualizing large trading datasets using charts, filters, and insights, optimized for high performance and smooth rendering.",
        category: "Fullstack",
        tech: ["React", "Node.js", "JavaScript", "Charts", "Caching", "Memoization"],
        image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
        github: "#",
        demo: "#",
    },
    {
        id: 2,
        title: "Amora Dashboard – Analytics Platform",
        description:
            "An admin analytics dashboard to monitor user activity, engagement metrics, and reports with clean UI, real-time updates, and scalable state management.",
        category: "Frontend",
        tech: ["React", "Tailwind CSS", "Firebase", "JavaScript"],
        image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
        github: "#",
        demo: "#",
    },
    {
        id: 3,
        title: "HRX Brand Platform",
        description:
            "A production-grade frontend and backend contribution for a major Indian brand, focused on improving UI responsiveness and reducing page load times.",
        category: "Fullstack",
        tech: ["React", "Node.js", "JavaScript", "Performance Optimization"],
        image:
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
        github: "#",
        demo: "#",
    },
    {
        id: 4,
        title: "NHRDN – Member Management System",
        description:
            "A large-scale member management platform with secure data handling, role-based access control, and performance-focused architecture.",
        category: "Fullstack",
        tech: ["React", "Node.js", "MongoDB", "RBAC", "REST APIs"],
        image:
            "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop",
        github: "#",
        demo: "#",
    },
    {
        id: 5,
        title: "CaregiverSaathi – Support Platform",
        description:
            "A caregiver support platform focused on accessibility, intuitive user experience, and streamlined admin workflows for users and administrators.",
        category: "Frontend",
        tech: ["React", "JavaScript", "Accessibility", "UI/UX"],
        image:
            "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop",
        github: "#",
        demo: "#",
    },
];

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
        <Card className="h-full bg-card/20 border-border/50 backdrop-blur-xl overflow-hidden hover:border-blue-500/30 transition-all duration-500 rounded-[2rem] py-0">
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

