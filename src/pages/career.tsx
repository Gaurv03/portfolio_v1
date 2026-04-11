import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import {
  Calendar,
  MapPin,
  // ChevronRight,
  Code2,
  Terminal,
  // Sparkles,
  BaggageClaim,
  ArrowUpRight,
} from 'lucide-react';

const fadeInUp = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const Career = () => {
  const experiences = [
    {
      company: 'GTS Infosoft LLC',
      role: 'Software Engineer',
      period: 'July 2025 - Present',
      location: 'Jodhpur, RJ',
      description:
        'Led the development and maintenance of scalable frontend applications using React.js, TypeScript, and modern UI frameworks, ensuring high performance and maintainability.',
      achievements: [
        'Designed and owned reusable, component-based UI systems with ShadCN, MUI, and Tailwind CSS, improving UI consistency and accelerating feature delivery.',
        'Led frontend-backend integration with RESTful APIs, ensuring reliable data flow, predictable state handling, and smooth user interactions.',
        'Optimized frontend performance and infrastructure costs by implementing debouncing, caching, pagination, memoization, and reducing unnecessary API calls and re-renders.',
        'Introduced and implemented a CI/CD pipeline, automating build and deployment workflows to improve release reliability, reduce manual effort, and shorten deployment cycles.',
        'Improved deployment security and operational efficiency by centralizing environment variables and secrets using secure cloud-based key management, reducing credential exposure and configuration errors.',
        'Refactored and modernized existing codebases, improving code quality, readability, and long-term scalability while lowering maintenance overhead.',
      ],
      tech: [
        'Next.js',
        'React.js',
        'TypeScript',
        'Node.js',
        'Express',
        'MongoDB',
        'PostgreSQL',
        'Tailwind CSS',
        'ShadCN',
        'MUI',
        'CI/CD',
      ],
      color: 'blue',
      icon: Code2,
    },
    {
      company: 'AIAB Ventures Pvt Ltd',
      role: 'Software Engineer',
      period: 'March 2023 - March 2025',
      location: 'Mumbai, MH',
      description:
        'Led development and scaling of full-stack applications using React.js, Node.js, and MongoDB to support multiple client-facing products.',
      achievements: [
        'Designed and optimized RESTful APIs for multi-database architectures, enhancing backend performance, scalability, and data reliability.',
        'Built responsive, data-driven dashboards using React.js and Vue.js, boosting UI responsiveness and user engagement.',
        'Refactored legacy modules to reduce technical debt, improve performance, and streamline future development.',
        'Owned and delivered critical features end-to-end, accelerating release cycles while maintaining high code quality.',
      ],
      tech: [
        'React.js',
        'Node.js',
        'Express',
        'MongoDB',
        'Vue.js',
        'REST APIs',
      ],
      color: 'purple',
      icon: Terminal,
    },
  ];

  return (
    <div className="md:space-y-20 space-y-12">
      {/* Header Section */}
      <div className="flex flex-col items-center text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-black uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-400 backdrop-blur-sm"
        >
          <BaggageClaim size={14} fill="currentColor" /> Professional Journey
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-black tracking-tighter leading-[0.8]"
        >
          Career <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-linear-to-br from-blue-500 via-purple-500 to-pink-500">
            Timeline.
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center md:gap-6 gap-3"
        >
          <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-card/40 backdrop-blur-md border border-border shadow-sm">
            <span className="md:text-3xl text-xl font-black text-blue-500 tracking-tighter">
              2.5+
            </span>
            <span className="text-[10px] uppercase font-black text-muted-foreground leading-none text-left tracking-widest">
              Years of
              <br />
              Experience
            </span>
          </div>
          <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-card/40 backdrop-blur-md border border-border shadow-sm">
            <span className="md:text-3xl text-xl font-black text-purple-500 tracking-tighter">
              3+
            </span>
            <span className="text-[10px] uppercase font-black text-muted-foreground leading-none text-left tracking-widest">
              Built
              <br />
              Solutions
            </span>
          </div>
        </motion.div>
      </div>

      {/* Timeline Section */}
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="relative md:space-y-12 space-y-6"
      >
        {/* Vertical Line */}
        <div className="absolute left-[21px] top-4 bottom-4 w-px bg-linear-to-b from-blue-500 via-purple-500 to-transparent hidden md:block" />

        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            variants={fadeInUp}
            className="relative pl-0 md:pl-16 group"
          >
            {/* Timeline Point */}
            <div className="absolute left-0 top-6 w-11 h-11 rounded-full bg-background border-2 border-border items-center justify-center z-10 hidden md:flex group-hover:border-primary transition-colors duration-500">
              <exp.icon size={20} className={`text-${exp.color}-500`} />
            </div>

            <Card className="border-border bg-card/50 backdrop-blur-md overflow-hidden hover:bg-card transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 rounded-2xl p-0">
              <CardContent className="p-4 md:p-6">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between md:gap-6 gap-3 md:mb-8 mb-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-primary font-black md:text-2xl text-lg uppercase tracking-tighter italic">
                      {exp.company}
                      <ArrowUpRight
                        size={18}
                        className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                    <h3 className="md:text-xl text-base font-bold text-foreground flex items-center gap-2">
                      {exp.role}
                      <span className="hidden md:inline w-8 h-px bg-border" />
                    </h3>
                  </div>
                  <div className="flex flex-col items-start lg:items-end gap-2">
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-muted border border-border text-xs font-bold text-foreground shadow-xs">
                      <Calendar size={12} /> {exp.period}
                    </div>
                    <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground">
                      <MapPin size={12} /> {exp.location}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                  <div className="lg:col-span-7 space-y-6">
                    <p className="text-muted-foreground leading-relaxed font-medium md:text-lg text-base">
                      {exp.description}
                    </p>
                    <ul className="space-y-4">
                      {exp.achievements.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-4 group/item"
                        >
                          <div className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0 group-hover/item:scale-150 transition-transform" />
                          <span className="md:text-base text-sm font-semibold text-foreground/80 group-hover/item:text-foreground transition-colors leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:col-span-5">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-4">
                      Core Technology Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 text-xs font-bold bg-muted/40 border border-border rounded-xl text-foreground/70 hover:text-foreground hover:bg-muted transition-all"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Skill Connect Button */}
      {/* <motion.div
                variants={fadeInUp}
                className="md:mt-20 text-center"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
                <button className="inline-flex items-center gap-2 md:px-8 px-4 md:py-4 py-2 rounded-2xl bg-foreground text-background font-black transition-all hover:scale-105 active:scale-95 shadow-xl">
                    View Project Contributions <ChevronRight size={20} />
                </button>
            </motion.div> */}
    </div>
  );
};

export default Career;
