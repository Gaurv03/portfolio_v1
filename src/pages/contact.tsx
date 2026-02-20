import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import {
    MessageSquare,
    CheckCircle2,
    ArrowRight,
    Sparkles,
    Zap,
    Send
} from "lucide-react"
import {
    BrandGithub,
    BrandLinkedin,
    BrandTwitter,
    BrandInstagram,
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
    const [_focusedField, setFocusedField] = useState<string | null>(null)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setStatus("success")
        setTimeout(() => setStatus("idle"), 4000)
    }

    return (
        <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="md:space-y-20 space-y-12 md:pb-12 pb-6 relative"
        >
            {/* Hero Section */}
            <div className="flex flex-col items-center text-center md:space-y-8 space-y-4 md:mb-24 mb-12 md:px-6">
                <motion.div
                    variants={fadeInUp}
                    className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-black uppercase tracking-[0.2em] text-blue-500 dark:text-blue-400 backdrop-blur-sm"
                >
                    <Zap size={12} fill="currentColor" />
                    Available for New Ventures
                </motion.div>

                <motion.h1
                    variants={fadeInUp}
                    className="text-3xl md:text-5xl font-black tracking-tighter leading-[0.9] text-foreground"
                >
                    Ready to make <br />
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 via-purple-500 to-pink-500">
                        magic happen?
                    </span>
                </motion.h1>

                <motion.p
                    variants={fadeInUp}
                    className="text-muted-foreground md:text-xl text-lg max-w-2xl font-medium leading-relaxed"
                >
                    Whether you're starting a new brand or need to scale your existing architecture,
                    I'm here to build the bridge between your vision and reality.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch md:px-6">
                {/* Left Column: Direct Action & Socials */}
                <div className="lg:col-span-5 flex flex-col justify-between md:space-y-12 space-y-6">
                    <div className="space-y-8">
                        <motion.div variants={fadeInUp} className="space-y-4">
                            <h3 className="text-sm font-black uppercase tracking-widest text-muted-foreground flex items-center gap-4">
                                <Sparkles size={16} className="text-blue-500" />
                                The Direct Route
                            </h3>
                            <p className="md:text-2xl text-xl font-bold leading-tight">
                                Skip the formalities and jump straight into my orbit.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 gap-4">
                            <motion.a
                                href="mailto:gauravupadhyay786.gu@gmail.com"
                                variants={fadeInUp}
                                whileHover={{ scale: 1.02, x: 10 }}
                                className="group flex items-center justify-between p-6 rounded-2xl bg-card border border-border hover:border-blue-500/50 hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.2)] transition-all"
                            >
                                <div className="flex items-center gap-5">
                                    <div className="p-4 rounded-2xl bg-blue-500/10 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                        <Send size={24} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-1">Email Me</p>
                                        <p className="text-lg font-bold">Start a thread</p>
                                    </div>
                                </div>
                                <ArrowRight size={20} className="text-muted-foreground group-hover:text-blue-500 transition-colors" />
                            </motion.a>

                            <motion.a
                                href="https://t.me/Gaurv_03"
                                target="_blank"
                                rel="noopener noreferrer"
                                variants={fadeInUp}
                                whileHover={{ scale: 1.02, x: 10 }}
                                className="group flex items-center justify-between p-6 rounded-2xl bg-card border border-border hover:border-purple-500/50 hover:shadow-[0_0_30px_-10px_rgba(168,85,247,0.2)] transition-all"
                            >
                                <div className="flex items-center gap-5">
                                    <div className="p-4 rounded-2xl bg-purple-500/10 text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                                        <MessageSquare size={24} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-1">Chat</p>
                                        <p className="text-lg font-bold">Telegram</p>
                                    </div>
                                </div>
                                <ArrowRight size={20} className="text-muted-foreground group-hover:text-purple-500 transition-colors" />
                            </motion.a>
                        </div>
                    </div>

                    <div className="space-y-6 md:pt-8 pt-4 border-t border-border">
                        <h4 className="text-[10px] md:text-left text-center font-black uppercase tracking-[0.3em] text-muted-foreground">Digital Presence</h4>
                        <div className="flex flex-wrap gap-3 md:justify-start justify-center">
                            {[
                                {
                                    icon: BrandLinkedin,
                                    href: "https://www.linkedin.com/in/gaurav-upadhyay-dev03/",
                                    color: "hover:bg-blue-600"
                                },
                                {
                                    icon: BrandGithub,
                                    href: "https://github.com/Gaurv03",
                                    color: "hover:bg-neutral-800"
                                },
                                {
                                    icon: BrandTwitter,
                                    href: "https://x.com/GaurvUpadhyay",
                                    color: "hover:bg-sky-500"
                                },
                                {
                                    icon: BrandInstagram,
                                    href: "https://instagram.com/_.gaurv._",
                                    color: "hover:bg-pink-600"
                                },
                            ].map((social, i) => (
                                <motion.a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variants={fadeInUp}
                                    whileHover={{ y: -5, scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className={`w-14 h-14 flex items-center justify-center rounded-2xl bg-card border border-border transition-all duration-300 ${social.color} hover:text-white group`}
                                >
                                    <social.icon size={22} className="group-hover:scale-110 transition-transform" />
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column: High-Impact Form */}
                <motion.div
                    variants={fadeInUp}
                    className="lg:col-span-7"
                >
                    <Card className="h-full border-none bg-linear-to-br from-card to-card/50 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/5 border border-white/5 p-0">
                        <CardContent className="p-6 md:p-10 space-y-12">
                            <div className="space-y-2">
                                <h2 className="text-2xl md:text-4xl font-black tracking-tight">Fuel the vision</h2>
                                <p className="text-muted-foreground font-medium md:text-lg text-base">Send over the briefing and let's get moving.</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <div className="relative">
                                        <input
                                            type="text"
                                            required
                                            onFocus={() => setFocusedField('name')}
                                            onBlur={() => setFocusedField(null)}
                                            className="w-full py-3 bg-transparent border-b-2 border-border focus:border-blue-500 outline-none transition-all placeholder:text-muted-foreground/40 font-bold md:text-xl text-base peer"
                                            placeholder=" "
                                        />
                                        <label className={`absolute left-0 top-3 text-muted-foreground/60 transition-all pointer-events-none peer-focus:-top-6 peer-not-placeholder-shown:-top-6 peer-focus:text-blue-500 peer-focus:text-sm peer-not-placeholder-shown:text-sm font-bold uppercase tracking-widest`}>
                                            Your Name
                                        </label>
                                    </div>
                                    <div className="relative">
                                        <input
                                            type="email"
                                            required
                                            onFocus={() => setFocusedField('email')}
                                            onBlur={() => setFocusedField(null)}
                                            className="w-full py-3 bg-transparent border-b-2 border-border focus:border-blue-500 outline-none transition-all placeholder:text-muted-foreground/40 font-bold md:text-xl text-base peer"
                                            placeholder=" "
                                        />
                                        <label className={`absolute left-0 top-3 text-muted-foreground/60 transition-all pointer-events-none peer-focus:-top-6 peer-not-placeholder-shown:-top-6 peer-focus:text-blue-500 peer-focus:text-sm peer-not-placeholder-shown:text-sm font-bold uppercase tracking-widest`}>
                                            Email Address
                                        </label>
                                    </div>
                                </div>

                                <div className="relative">
                                    <input
                                        type="text"
                                        required
                                        onFocus={() => setFocusedField('subject')}
                                        onBlur={() => setFocusedField(null)}
                                        className="w-full py-3 bg-transparent border-b-2 border-border focus:border-blue-500 outline-none transition-all placeholder:text-muted-foreground/40 font-bold md:text-xl text-base peer"
                                        placeholder=" "
                                    />
                                    <label className={`absolute left-0 top-3 text-muted-foreground/60 transition-all pointer-events-none peer-focus:-top-6 peer-not-placeholder-shown:-top-6 peer-focus:text-blue-500 peer-focus:text-sm peer-not-placeholder-shown:text-sm font-bold uppercase tracking-widest`}>
                                        Inquiry Subject
                                    </label>
                                </div>

                                <div className="relative">
                                    <input
                                        type="text"
                                        required
                                        onFocus={() => setFocusedField('message')}
                                        onBlur={() => setFocusedField(null)}
                                        className="w-full py-3 bg-transparent border-b-2 border-border focus:border-blue-500 outline-none transition-all placeholder:text-muted-foreground/40 font-bold md:text-xl text-base peer"
                                        placeholder=""
                                    />
                                    <label className={`absolute left-0 top-3 text-muted-foreground/60 transition-all pointer-events-none peer-focus:-top-6 peer-not-placeholder-shown:-top-6 peer-focus:text-blue-500 peer-focus:text-sm peer-not-placeholder-shown:text-sm font-bold uppercase tracking-widest`}>
                                        Project Briefing
                                    </label>
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={status === "success"}
                                    whileHover={{ scale: 1.01 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="group relative w-full md:h-16 h-12 overflow-hidden rounded-2xl bg-foreground text-background font-black md:text-xl text-base transition-all shadow-xl shadow-foreground/10"
                                >
                                    <div className="absolute inset-0 bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="relative flex items-center justify-center gap-4">
                                        {status === "success" ? (
                                            <motion.div
                                                initial={{ y: 20, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                className="flex items-center gap-3 text-white"
                                            >
                                                <CheckCircle2 size={28} />
                                                Dispatched
                                            </motion.div>
                                        ) : (
                                            <>
                                                <span className="group-hover:text-white transition-colors duration-300">Initiate Project</span>
                                                <ArrowRight size={24} className="group-hover:translate-x-3 group-hover:text-white transition-all duration-300" />
                                            </>
                                        )}
                                    </div>
                                </motion.button>
                            </form>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Contact

