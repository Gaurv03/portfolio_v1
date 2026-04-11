import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Layout, Server, ExternalLink, Rocket } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  category: 'Fullstack' | 'Frontend';
  image: string;
  demo?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Alphatopia – Trading Analysis Platform',
    description:
      'Built an interactive stock market analytics dashboard using React.js and Node.js to visualize large volumes of trading and market data through charts, filters, and insights. Enhanced data interpretation with AI-assisted processing and analysis, optimized chart rendering using memoization and caching, and maintained smooth performance with heavy datasets.',
    category: 'Frontend',
    image: '/alphatopia.png',
    demo: 'https://alphatopia.net/',
  },
  {
    id: 2,
    title: 'Amora Dashboard – Analytics Platform',
    description:
      'Built an admin analytics dashboard to monitor user activity, engagement metrics, and reports using React.js, Tailwind CSS, and Firebase. Used AI tools to accelerate feature development, refactor components, and enhance UI logic while maintaining clean state management and responsive design.',
    category: 'Frontend',
    image: '/amora.png',
    demo: 'https://www.findamora.com/',
  },
  {
    id: 3,
    title: 'HRX Brand Platform',
    description:
      'Contributed to frontend and backend development for HRX, improving UI responsiveness and optimizing page load performance by ~25%. Used AI-assisted debugging and optimization to identify performance bottlenecks and refactor components for improved scalability and maintainability.',
    category: 'Fullstack',
    image: '/hrx.png',
    demo: 'https://www.hrxbrand.com/home',
  },
  {
    id: 4,
    title: 'NHRDN Platform – Member Management System',
    description:
      'Built a large-scale member management platform with secure data handling, role-based access control, and performance optimizations. Used AI tools for code analysis and refactoring to improve code quality, reduce edge-case bugs, and accelerate development cycles.',
    category: 'Fullstack',
    image: '/nhrdn.png',
    demo: 'https://www.nationalhrd.org/home',
  },
  {
    id: 5,
    title: 'CaregiverSaathi – Support Platform',
    description:
      'Developed and maintained a caregiver support platform with a focus on accessibility, intuitive UI design, and streamlined admin workflows. Leveraged AI-driven tools to enhance UX flows, validate edge cases, and improve component reusability throughout the application.',
    category: 'Fullstack',
    image: '/caregiver.png',
    demo: 'https://www.caregiversaathi.co.in/home',
  },
  {
    id: 6,
    title: 'Courselo – Learning Platform',
    description:
      'Built a comprehensive learning platform using Next.js for the web and a dedicated desktop application using React and Electron. Developed the complete frontend and backend architecture from scratch, leveraging Firebase for seamless data synchronization, authentication, and a robust backend infrastructure.',
    category: 'Fullstack',
    image: '/courselo.png',
    demo: 'https://courselo.co/',
  },
  {
    id: 7,
    title: 'SBI Youth for India',
    description:
      'A web platform for the SBI Youth for India fellowship program built using Vue.js. The platform is designed to provide a seamless user experience for prospective applicants and alumni, featuring responsive design, interactive elements, and optimized performance.',
    category: 'Fullstack',
    image: '/sbi.png',
    demo: 'https://youthforindia.org/',
  },
  {
    id: 8,
    title: 'Borders and Threads',
    description:
      'A modern e-commerce platform built to seamlessly showcase products and drive conversions. Focused on delivering a premium shopping experience with intuitive navigation, engaging visual presentation, and highly optimized frontend performance.',
    category: 'Fullstack',
    image: '/bnt.png',
    demo: 'https://bordersnthreads.com/',
  },
];

const fadeInUp = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.95 }}
    transition={{ delay: index * 0.05, duration: 0.4 }}
    className="group relative"
  >
    <a
      href={project.demo}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full cursor-pointer"
    >
      <Card className="h-full bg-card/20 border-border/50 backdrop-blur-xl overflow-hidden hover:border-blue-500/30 transition-all duration-500 rounded-2xl py-0">
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
              {project.category === 'Fullstack' ? (
                <Server size={10} />
              ) : (
                <Layout size={10} />
              )}
              {project.category}
            </div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="p-4 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white shadow-xl flex items-center gap-2">
              <ExternalLink size={20} />
              <span className="text-sm font-bold tracking-wider uppercase">
                View Project
              </span>
            </div>
          </div>
        </div>

        <CardContent className="p-5 md:p-8 flex flex-col h-[calc(100%-aspect-16/10)]">
          <div className="space-y-3 grow">
            <h3 className="text-xl md:text-2xl font-black tracking-tighter group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-sm md:text-base text-muted-foreground font-medium leading-relaxed line-clamp-5">
              {project.description}
            </p>
          </div>
        </CardContent>

        {/* Subtle Gradient Glow */}
        <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      </Card>
    </a>
  </motion.div>
);

const Projects = () => {
  const [filter, setFilter] = useState<'All' | 'Fullstack' | 'Frontend'>('All');

  const filteredProjects = projects.filter((p) =>
    filter === 'All' ? true : p.category === filter,
  );

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex flex-col items-center text-center md:space-y-8 space-y-4 md:px-6 px-3">
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
          className="text-3xl md:text-5xl font-black tracking-tighter leading-[0.8] mb-4"
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
          className="text-muted-foreground md:text-xl text-lg max-w-2xl font-medium leading-relaxed"
        >
          A curated selection of engineering feats, where code meets creativity
          to solve complex human problems at scale.
        </motion.p>
      </div>

      {/* Advanced Filter Tabs */}
      <div className="flex justify-center md:mb-16 mb-10 px-4 md:px-6">
        <div className="flex p-1 bg-card/50 backdrop-blur-2xl rounded-2xl border border-border/50 shadow-2xl overflow-x-auto no-scrollbar max-w-full">
          {['All', 'Fullstack', 'Frontend'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f as any)}
              className={`relative px-5 md:px-8 py-2 md:py-3 text-[11px] md:text-xs font-black uppercase tracking-widest transition-all rounded-xl whitespace-nowrap ${
                filter === f
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <span className="relative z-10">{f}</span>
              {filter === f && (
                <motion.div
                  layoutId="filter-active"
                  className="absolute inset-0 bg-background border border-border shadow-lg"
                  style={{ borderRadius: '0.75rem' }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Dynamic Grid Layout */}
      <div className="px-0 sm:px-6">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Bottom CTA */}
      {/* <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="md:mt-20 mt-10 text-center"
            >
                <a
                    href="#contact"
                    onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="group inline-flex items-center gap-4 text-2xl md:text-5xl font-black tracking-tighter hover:text-blue-500 transition-colors"
                >
                    Have a vision?
                    <div className="md:p-4 p-2 rounded-full bg-blue-500 text-white group-hover:translate-x-4 transition-transform">
                        <ExternalLink className="size-6 md:size-8" />
                    </div>
                </a>
            </motion.div> */}
    </div>
  );
};

export default Projects;
