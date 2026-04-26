import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
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
  Target,
  Zap,
} from 'lucide-react';
import {
  BrandGithub,
  BrandLinkedin,
  BrandMedium,
  BrandTelegram,
  FileDescription,
  Mail,
} from 'tabler-icons-react';

const fadeInUp = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const linksArray = [
  {
    name: 'GitHub',
    icon: BrandGithub,
    color: 'hover:border-white hover:bg-white hover:text-black',
    link: 'https://github.com/Gaurv03',
  },
  {
    name: 'LinkedIn',
    icon: BrandLinkedin,
    color: 'hover:border-blue-600 hover:bg-blue-600 hover:text-white',
    link: 'https://www.linkedin.com/in/gaurav-upadhyay-dev03/',
  },
  {
    name: 'Telegram',
    icon: BrandTelegram,
    color: 'hover:border-purple-600 hover:bg-purple-600 hover:text-white',
    link: 'https://t.me/Gaurv_03',
  },
  {
    name: 'Resume',
    icon: FileDescription,
    color: 'hover:border-emerald-600 hover:bg-emerald-600 hover:text-white',
    link: '/gaurav_upadhyay_resume.pdf',
  },
  {
    name: 'Email',
    icon: Mail,
    color: 'hover:border-red-600 hover:bg-red-600 hover:text-white',
    link: 'mailto:[gauravupadhyay786.gu@gmail.com]',
  },
  {
    name: 'Medium',
    icon: BrandMedium,
    color: 'hover:border-indigo-600 hover:bg-indigo-600 hover:text-white',
    link: 'https://medium.com/@gauravupadhyay786.gu',
  },
];

export const About = () => {
  const skills = [
    {
      name: 'Frontend Architecture',
      icons: [Code2, Globe],
      items: [
        'React',
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'Framer Motion',
      ],
      color: 'from-blue-500/10 to-blue-600/10',
    },
    {
      name: 'Backend systems',
      icons: [Database, Terminal],
      items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs'],
      color: 'from-purple-500/10 to-purple-600/10',
    },
    {
      name: 'Cloud & Reliability',
      icons: [Cpu, Layers],
      items: ['Git', 'Docker', 'Vite', 'AWS', 'Vercel', 'GitHub Actions'],
      color: 'from-emerald-500/10 to-emerald-600/10',
    },
  ];

  const stats = [
    { label: 'Engineering XP', value: '3y+', icon: Calendar },
    { label: 'Built Solutions', value: '15+', icon: Briefcase },
    { label: 'Global Reach', value: 'Remote', icon: Globe },
  ];

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={staggerContainer}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 pb-12">
        {/* Hero Card */}
        <motion.div
          variants={fadeInUp}
          className="md:col-span-12 lg:col-span-8"
        >
          <Card className="h-full border-white/5 bg-card/40 backdrop-blur-xl rounded-[2.5rem] overflow-hidden relative group shadow-2xl">
            <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 via-purple-500/5 to-transparent opacity-50 pointer-events-none" />
            <CardContent className="p-8 md:p-12 relative z-10 flex flex-col justify-center h-full space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-[10px] font-black uppercase tracking-[0.3em] text-purple-600 dark:text-purple-400 backdrop-blur-sm w-fit">
                  <User size={12} fill="currentColor" /> Software Engineer
                </div>
                <h1 className="md:text-6xl text-4xl font-black tracking-tighter text-foreground">
                  I'm{' '}
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 via-purple-500 to-indigo-600">
                    Gaurav.
                  </span>
                </h1>
                <h2 className="md:text-3xl text-xl font-bold tracking-tight text-muted-foreground/80">
                  Translating complex logic <br className="hidden md:block" />
                  into <span className="text-foreground">
                    Human-Centric
                  </span>{' '}
                  experiences.
                </h2>
              </div>
              <p className="md:text-lg text-base leading-relaxed text-muted-foreground font-medium max-w-2xl">
                Based in India 🇮🇳, I specialize in crafting high-performance
                full-stack architectures. My focus is on speed, scalability, and
                that elusive 'premium feel' that sets great software apart.
              </p>
              <div className="flex flex-wrap gap-8 pt-4">
                {stats.map((stat, i) => (
                  <div key={i} className="flex flex-col items-start">
                    <span className="text-[10px] items-center gap-1.5 font-bold uppercase tracking-widest text-muted-foreground flex mb-1">
                      {stat.label}
                    </span>
                    <div className="flex items-center gap-2">
                      <stat.icon size={20} className="text-blue-500" />
                      <span className="text-2xl font-black tracking-tighter">
                        {stat.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* System Core Card (The Abstract Tech Component) */}
        <motion.div
          variants={fadeInUp}
          className="md:col-span-12 lg:col-span-4"
        >
          <Card className="h-full border-white/5 bg-card/20 backdrop-blur-2xl rounded-[2.5rem] overflow-hidden flex flex-col items-center justify-center relative group min-h-[400px] shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-blue-500/10 to-purple-500/10 opacity-50 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl group-hover:bg-blue-500/30 transition-colors duration-700 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl group-hover:bg-purple-500/30 transition-colors duration-700 mix-blend-screen pointer-events-none" />

            <div className="relative z-10 grid grid-cols-2 gap-5 p-8">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="p-6 rounded-3xl bg-blue-500/10 border border-blue-500/20 backdrop-blur-md shadow-2xl flex items-center justify-center"
              >
                <Code2 size={40} className="text-blue-500" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5,
                }}
                className="p-6 rounded-3xl bg-purple-500/10 border border-purple-500/20 backdrop-blur-md shadow-2xl translate-y-8 flex items-center justify-center"
              >
                <Terminal size={40} className="text-purple-500" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
                className="p-6 rounded-3xl bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-md shadow-2xl -translate-y-8 flex items-center justify-center"
              >
                <Cpu size={40} className="text-emerald-500" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1.5,
                }}
                className="p-6 rounded-3xl bg-pink-500/10 border border-pink-500/20 backdrop-blur-md shadow-2xl flex items-center justify-center"
              >
                <Globe size={40} className="text-pink-500" />
              </motion.div>
            </div>

            {/* Status Chip */}
            <div className="absolute bottom-8 bg-background/80 backdrop-blur-xl border border-white/10 px-5 py-2.5 rounded-full shadow-2xl flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-widest text-foreground">
                System Active
              </span>
            </div>
          </Card>
        </motion.div>

        {/* The Philosophy */}
        <motion.div variants={fadeInUp} className="md:col-span-12">
          <Card className="border-white/5 bg-linear-to-br from-card/60 to-card/20 backdrop-blur-xl rounded-[2.5rem] overflow-hidden shadow-2xl">
            <CardContent className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
              <div className="absolute -left-20 -top-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="space-y-8 relative z-10">
                <div className="space-y-4">
                  <h3 className="text-3xl font-black tracking-tight flex items-center gap-4">
                    <div className="h-8 w-1.5 bg-linear-to-b from-blue-500 to-purple-500 rounded-full" />
                    The Philosophy
                  </h3>
                  <p className="text-xl text-muted-foreground font-medium leading-relaxed italic">
                    "Code is not just a set of instructions for machines; it's a
                    medium to craft seamless digital realities."
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-5 rounded-3xl bg-background/40 border border-white/5 space-y-3 shadow-lg backdrop-blur-sm">
                    <Target size={24} className="text-blue-500" />
                    <h4 className="text-sm font-black uppercase tracking-widest text-foreground">
                      Precision
                    </h4>
                    <p className="text-xs text-muted-foreground font-medium leading-relaxed">
                      Pixel-perfect implementation of complex designs.
                    </p>
                  </div>
                  <div className="p-5 rounded-3xl bg-background/40 border border-white/5 space-y-3 shadow-lg backdrop-blur-sm">
                    <Zap size={24} className="text-purple-500" />
                    <h4 className="text-sm font-black uppercase tracking-widest text-foreground">
                      Velocity
                    </h4>
                    <p className="text-xs text-muted-foreground font-medium leading-relaxed">
                      Fast iterations without compromising reliability.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6 text-muted-foreground font-medium leading-relaxed text-lg relative z-10">
                <p>
                  I bridge the gap between design vision and technical
                  feasibility. Over the past 2.5 years, I've evolved from a
                  curious learner to a detail-obsessed engineer who understands
                  that the best software is often what the user doesn't
                  notice—the speed, the flow, and the intuitive logic.
                </p>
                <p>
                  Whether it's architecting a stock analytics engine or an
                  AI-driven interface, my goal is always the same: Build
                  something that feels as good as it works.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Technical Dominance Section */}
        <motion.div
          variants={fadeInUp}
          className="md:col-span-12 space-y-6 pt-4"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 px-2">
            <h3 className="md:text-4xl text-3xl font-black tracking-tighter flex items-center gap-4">
              Technical Dominance
              <Sparkles className="text-blue-500" />
            </h3>
            <p className="text-muted-foreground font-bold text-sm tracking-widest uppercase">
              Expertise Mapping
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((category, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -8 }}
                className="group h-full"
              >
                <Card className="h-full border-white/5 bg-card/40 backdrop-blur-xl rounded-[2rem] overflow-hidden transition-all duration-500 hover:border-blue-500/30 hover:shadow-[0_0_40px_-15px_rgba(59,130,246,0.2)] relative">
                  <div className="absolute inset-0 bg-linear-to-br from-white/2 to-transparent pointer-events-none" />
                  <CardContent className="p-8 space-y-8 relative z-10">
                    <div className="flex items-center justify-between">
                      <div className="flex -space-x-3">
                        {category.icons.map((Icon, i) => (
                          <div
                            key={i}
                            className="p-3 rounded-full bg-background border border-white/10 text-blue-500 shadow-xl relative z-10"
                            style={{ zIndex: category.icons.length - i }}
                          >
                            <Icon size={20} />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-2xl font-black tracking-tight text-foreground">
                        {category.name}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {category.items.map((item, i) => (
                          <span
                            key={i}
                            className="px-3 py-1.5 text-xs font-black uppercase tracking-wider bg-background/50 border border-white/5 rounded-xl text-muted-foreground group-hover:text-foreground transition-colors shadow-sm"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                  <div
                    className={`absolute bottom-0 left-0 h-1.5 w-full bg-linear-to-r ${category.color} opacity-0 group-hover:opacity-100 transition-opacity`}
                  />
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Social Links Bento */}
        <motion.div
          variants={fadeInUp}
          className="md:col-span-12 space-y-6 pt-4"
        >
          <div className="text-center md:text-left px-2 space-y-2">
            <h3 className="text-3xl md:text-4xl font-black tracking-tighter">
              Digital Nexus
            </h3>
            <p className="text-muted-foreground font-medium md:text-lg text-base">
              Cross-platform connectivity for collaborative ventures.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {linksArray.map((link, i) => (
              <motion.a
                key={i}
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex flex-col items-center justify-center gap-4 p-8 rounded-[2rem] bg-card/40 border border-white/5 backdrop-blur-xl transition-all duration-300 ${link.color} shadow-xl group`}
              >
                <div className="p-4 rounded-2xl bg-background/50 border border-white/5 group-hover:bg-transparent group-hover:border-transparent transition-all duration-300 shadow-inner">
                  <link.icon size={32} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-center">
                  {link.name}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
