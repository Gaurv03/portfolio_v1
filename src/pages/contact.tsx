import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import {
    Mail,
    MessageSquare,
    CheckCircle2,
    ArrowRight,
    Globe
} from "lucide-react"
import {
    BrandGithub,
    BrandLinkedin,
    BrandTelegram,
    BrandTwitter
} from "tabler-icons-react"
import { useState } from "react"

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

const Contact = () => {
    const [status, setStatus] = useState<"idle" | "success">("idle")
    const [focusedField, setFocusedField] = useState<string | null>(null)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setStatus("success")
        setTimeout(() => setStatus("idle"), 4000)
    }

    return (
        <div className="relative isolate min-h-[90vh] overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                        x: [0, 50, 0],
                        y: [0, -30, 0]
                    }}
                    transition={{ duration: 20, repeat: Infinity }}
                    className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, -45, 0],
                        x: [0, -50, 0],
                        y: [0, 50, 0]
                    }}
                    transition={{ duration: 15, repeat: Infinity }}
                    className="absolute top-[20%] -right-[5%] w-[35%] h-[35%] bg-blue-600/10 rounded-full blur-[100px]"
                />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-border to-transparent" />
            </div>

            <motion.div
                initial="initial"
                animate="animate"
                variants={staggerContainer}
                className="max-w-7xl mx-auto pb-24 pt-12 px-6 md:px-12"
            >
                {/* Hero Section */}
                <div className="flex flex-col items-center text-center space-y-6 mb-20">
                    <motion.div
                        variants={fadeInUp}
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-muted/50 border border-border text-xs font-bold uppercase tracking-[0.2em] text-blue-500 dark:text-blue-400 backdrop-blur-sm"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        Available for Projects
                    </motion.div>

                    <motion.h1
                        variants={fadeInUp}
                        className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1]"
                    >
                        Let's build something<br />
                        <span className="text-transparent bg-clip-text bg-linear-to-br from-blue-400 via-purple-500 to-pink-500 drop-shadow-sm">
                            extraordinary
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={fadeInUp}
                        className="text-muted-foreground text-xl max-w-2xl font-medium leading-relaxed"
                    >
                        I'm currently looking for new opportunities and collaborations.
                        Whether you have a question or just want to connect, my inbox is always open.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    {/* Contact Channels */}
                    <div className="lg:col-span-5 space-y-12">
                        <section className="space-y-8">
                            <motion.h3 variants={fadeInUp} className="text-sm font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-3">
                                <div className="h-px w-8 bg-border" /> Direct Channels
                            </motion.h3>

                            <div className="grid gap-6">
                                {[
                                    {
                                        icon: Mail,
                                        label: "Send an Email",
                                        value: "gauravupadhyay786.gu@gmail.com",
                                        color: "from-blue-500/20 to-blue-600/20",
                                        iconCol: "text-blue-400"
                                    },
                                    {
                                        icon: MessageSquare,
                                        label: "Telegram",
                                        value: "@gaurav_dev",
                                        color: "from-sky-500/20 to-sky-600/20",
                                        iconCol: "text-sky-400"
                                    },
                                    {
                                        icon: Globe,
                                        label: "Working Hours",
                                        value: "Mon — Fri, 9 AM - 6 PM IST",
                                        color: "from-purple-500/20 to-purple-600/20",
                                        iconCol: "text-purple-400"
                                    },
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        variants={fadeInUp}
                                        whileHover={{ x: 10 }}
                                        className="group relative flex items-center gap-6 p-6 rounded-3xl bg-card/50 border border-border backdrop-blur-md overflow-hidden transition-all hover:bg-muted"
                                    >
                                        <div className={`absolute inset-0 bg-linear-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
                                        <div className={`relative p-4 rounded-2xl bg-muted border border-border ${item.iconCol} group-hover:scale-110 transition-transform`}>
                                            <item.icon size={24} strokeWidth={1.5} />
                                        </div>
                                        <div className="relative">
                                            <p className="text-[10px] text-muted-foreground uppercase font-black tracking-widest mb-1">{item.label}</p>
                                            <p className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{item.value}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </section>

                        <section className="space-y-8">
                            <motion.h3 variants={fadeInUp} className="text-sm font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-3">
                                <div className="h-px w-8 bg-border" /> Connectivity
                            </motion.h3>

                            <div className="flex flex-wrap gap-4">
                                {[
                                    { icon: BrandGithub, color: "hover:bg-white hover:text-black", label: "GitHub" },
                                    { icon: BrandLinkedin, color: "hover:bg-blue-600 hover:text-white", label: "LinkedIn" },
                                    { icon: BrandTwitter, color: "hover:bg-sky-500 hover:text-white", label: "Twitter" },
                                    { icon: BrandTelegram, color: "hover:bg-purple-600 hover:text-white", label: "Telegram" },
                                ].map((Social, i) => (
                                    <motion.a
                                        key={i}
                                        href="#"
                                        variants={fadeInUp}
                                        whileHover={{ y: -8 }}
                                        whileTap={{ scale: 0.9 }}
                                        className={`flex items-center gap-3 px-6 py-4 rounded-2xl bg-card/50 border border-border backdrop-blur-md transition-all duration-300 ${Social.color} group`}
                                    >
                                        <Social.icon size={20} />
                                        <span className="text-sm font-bold opacity-0 group-hover:opacity-100 absolute group-hover:relative transition-all duration-300">
                                            {Social.label}
                                        </span>
                                    </motion.a>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Experimental Contact Form */}
                    <motion.div
                        variants={fadeInUp}
                        className="lg:col-span-7"
                    >
                        <Card className="relative border-border bg-card/60 backdrop-blur-2xl rounded-[2.5rem] overflow-hidden shadow-2xl">
                            {/* Accent Glow */}
                            <div className="absolute top-0 left-1/4 w-1/2 h-px bg-linear-to-r from-transparent via-blue-500 to-transparent opacity-50 transition-all duration-500 group-focus-within:opacity-100" />

                            <CardContent className="p-8 md:p-14 space-y-10">
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-black">Drop me a message</h2>
                                    <p className="text-muted-foreground font-medium">I usually reply within 24 hours.</p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="relative group">
                                            <label className={`absolute left-0 -top-6 text-[10px] font-black uppercase tracking-widest transition-all ${focusedField === 'name' ? 'text-blue-400' : 'text-muted-foreground'}`}>
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                onFocus={() => setFocusedField('name')}
                                                onBlur={() => setFocusedField(null)}
                                                className="w-full py-4 bg-transparent border-b border-border focus:border-blue-500 outline-none transition-all placeholder:text-muted-foreground/30 font-bold text-lg"
                                                placeholder="Who's calling?"
                                            />
                                        </div>
                                        <div className="relative group">
                                            <label className={`absolute left-0 -top-6 text-[10px] font-black uppercase tracking-widest transition-all ${focusedField === 'email' ? 'text-blue-400' : 'text-muted-foreground'}`}>
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                required
                                                onFocus={() => setFocusedField('email')}
                                                onBlur={() => setFocusedField(null)}
                                                className="w-full py-4 bg-transparent border-b border-border focus:border-blue-500 outline-none transition-all placeholder:text-muted-foreground/30 font-bold text-lg"
                                                placeholder="where@to.reply?"
                                            />
                                        </div>
                                    </div>

                                    <div className="relative group">
                                        <label className={`absolute left-0 -top-6 text-[10px] font-black uppercase tracking-widest transition-all ${focusedField === 'subject' ? 'text-blue-400' : 'text-muted-foreground'}`}>
                                            Project Type
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            onFocus={() => setFocusedField('subject')}
                                            onBlur={() => setFocusedField(null)}
                                            className="w-full py-4 bg-transparent border-b border-border focus:border-blue-500 outline-none transition-all placeholder:text-muted-foreground/30 font-bold text-lg"
                                            placeholder="What are we building?"
                                        />
                                    </div>

                                    <div className="relative group">
                                        <label className={`absolute left-0 -top-6 text-[10px] font-black uppercase tracking-widest transition-all ${focusedField === 'message' ? 'text-blue-400' : 'text-muted-foreground'}`}>
                                            The Brief
                                        </label>
                                        <textarea
                                            rows={4}
                                            required
                                            onFocus={() => setFocusedField('message')}
                                            onBlur={() => setFocusedField(null)}
                                            className="w-full py-4 bg-transparent border-b border-border focus:border-blue-500 outline-none transition-all placeholder:text-muted-foreground/30 font-bold text-lg resize-none"
                                            placeholder="Tell me your vision..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={status === "success"}
                                        className="group relative w-full h-16 overflow-hidden rounded-2xl bg-foreground text-background font-black text-lg transition-all active:scale-95 disabled:opacity-50"
                                    >
                                        <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity" />
                                        <div className="relative flex items-center justify-center gap-3">
                                            {status === "success" ? (
                                                <motion.div
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    className="flex items-center gap-3"
                                                >
                                                    <CheckCircle2 size={24} />
                                                    Sent Successfully
                                                </motion.div>
                                            ) : (
                                                <>
                                                    Start a Conversation
                                                    <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                                                </>
                                            )}
                                        </div>
                                    </button>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}

export default Contact
