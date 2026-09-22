import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import {
  Calendar,
  MapPin,
  Terminal,
  ArrowUpRight,
  Cloud,
  Layers,
  Database,
  Briefcase,
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

export const Career = () => {
  const experiences = [
    {
      company: 'R and P Innovations',
      role: 'Software Engineer',
      period: 'July 2025 - Present',
      location: 'Jodhpur, RJ',
      description:
        'Architecting, automating, and deploying full-stack surveillance platforms and cloud-native services processing high-throughput camera feeds with AWS infrastructure as code and CI/CD pipelines.',
      achievements: [
        'Designed, developed, and deployed full-stack surveillance platforms processing large volumes of camera-generated vehicle detection data, with 200K+ detection images per day stored in Amazon S3 during high-volume weeks.',
        'Built and maintained backend services using Node.js, Express.js, and PostgreSQL, deployed as containerized workloads on managed cloud servers with separate application and database environments.',
        'Designed and managed AWS infrastructure using Terraform, applying Infrastructure as Code practices to provision and maintain repeatable cloud environments.',
        'Implemented and maintained CI/CD pipelines using Jenkins and GitHub Actions, automating application builds, Docker image creation, testing, and deployment workflows.',
        'Implemented application monitoring and troubleshooting using Amazon CloudWatch, working with logs and operational metrics to identify and resolve deployment and runtime issues.',
        'Worked with AWS services including EC2, S3, RDS, ECR, ECS, Lambda, CloudWatch, IAM, Route 53, CloudFormation, and VPC, supporting application deployment and cloud operations.',
        'Developed and maintained scalable frontend applications using React.js, Next.js, and TypeScript, giving the role a strong software-engineering foundation alongside cloud and platform responsibilities.',
      ],
      tech: [
        'AWS (EC2, S3, RDS, ECR, ECS, Lambda, VPC)',
        'Terraform',
        'Docker',
        'Jenkins',
        'GitHub Actions',
        'CloudWatch',
        'Node.js',
        'Express.js',
        'PostgreSQL',
        'React.js',
        'Next.js',
        'TypeScript',
      ],
      icon: Cloud,
      iconColor: 'text-amber-400',
      badgeBg: 'bg-amber-500/10 border-amber-500/30 text-amber-300',
    },
    {
      company: 'AIAB Ventures Pvt Ltd',
      role: 'Software Engineer',
      period: 'March 2023 - March 2025',
      location: 'Mumbai, MH',
      description:
        'Led end-to-end full-stack development and scaling of client-facing products, architecting multi-database RESTful APIs and building responsive data-driven dashboards.',
      achievements: [
        'Led development and scaling of full-stack applications using React.js, Node.js, and MongoDB to support multiple client-facing products.',
        'Designed and optimized RESTful APIs for multi-database architectures, enhancing backend performance, scalability, and data reliability.',
        'Built responsive, data-driven dashboards using React.js and Vue.js, boosting UI responsiveness and user engagement.',
        'Refactored legacy modules to reduce technical debt, improve performance, and streamline future development.',
      ],
      tech: [
        'React.js',
        'Node.js',
        'MongoDB',
        'Vue.js',
        'REST APIs',
        'Express.js',
        'TypeScript',
        'State Management',
      ],
      icon: Terminal,
      iconColor: 'text-cyan-400',
      badgeBg: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-300',
    },
  ];

  return (
    <div className="md:space-y-16 space-y-10">
      {/* Header Section */}
      <div className="flex flex-col items-center text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-[10px]  font-black uppercase tracking-[0.3em] text-cyan-500 dark:text-cyan-400 backdrop-blur-sm"
        >
          <Briefcase size={14} fill="currentColor" /> Professional Journey
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-black tracking-tighter leading-[0.9]"
        >
          Engineering <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-linear-to-br from-amber-400 via-cyan-400 to-blue-500">
            Trajectory.
          </span>
        </motion.h1>

        {/* Highlight Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center md:gap-6 gap-3"
        >
          <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-card/40 backdrop-blur-md border border-border shadow-sm">
            <span className="md:text-3xl text-xl font-black text-amber-400 tracking-tighter">
              3.5+
            </span>
            <span className="text-[10px]  uppercase font-black text-muted-foreground leading-tight text-left tracking-widest">
              Years of
              <br />
              Experience
            </span>
          </div>

          <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-card/40 backdrop-blur-md border border-border shadow-sm">
            <span className="md:text-3xl text-xl font-black text-cyan-400 tracking-tighter">
              200K+
            </span>
            <span className="text-[10px]  uppercase font-black text-muted-foreground leading-tight text-left tracking-widest">
              Daily Images
              <br />
              Processed (S3)
            </span>
          </div>

          <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-card/40 backdrop-blur-md border border-border shadow-sm">
            <span className="md:text-3xl text-xl font-black text-indigo-400 tracking-tighter">
              15+
            </span>
            <span className="text-[10px]  uppercase font-black text-muted-foreground leading-tight text-left tracking-widest">
              Production
              <br />
              Deployments
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
        <div className="absolute left-5.25 top-4 bottom-4 w-px bg-linear-to-b from-amber-400 via-cyan-400 to-transparent hidden md:block" />

        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            variants={fadeInUp}
            className="relative pl-0 md:pl-16 group"
          >
            {/* Timeline Point */}
            <div className="absolute left-0 top-6 w-11 h-11 rounded-full bg-background border-2 border-border items-center justify-center z-10 hidden md:flex group-hover:border-primary transition-colors duration-500 shadow-md">
              <exp.icon size={20} className={exp.iconColor} />
            </div>

            <Card className="border-border/60 bg-card/50 backdrop-blur-md overflow-hidden hover:bg-card/70 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 rounded-2xl p-0">
              <CardContent className="p-5 md:p-8">
                {/* Company Header */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between md:gap-6 gap-3 md:mb-6 mb-4 border-b border-border/40 pb-5">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-primary font-black md:text-2xl text-xl uppercase tracking-tight">
                      {exp.company}
                      <ArrowUpRight
                        size={18}
                        className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                    <h3 className="md:text-lg text-base font-bold text-foreground flex items-center gap-2">
                      {exp.role}
                      <span className="hidden md:inline w-8 h-px bg-border" />
                    </h3>
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5">
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-muted/60 border border-border text-xs font-bold text-foreground">
                      <Calendar size={12} className="text-primary" /> {exp.period}
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-muted/40 border border-border text-xs font-semibold text-muted-foreground">
                      <MapPin size={12} className="text-cyan-400" /> {exp.location}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Left Column: Description & Bullet points */}
                  <div className="lg:col-span-8 space-y-5">
                    <p className="text-muted-foreground leading-relaxed font-medium md:text-base text-sm">
                      {exp.description}
                    </p>

                    <div className="space-y-2">
                      <h4 className="text-xs font-black uppercase tracking-wider text-foreground flex items-center gap-2">
                        <Layers size={13} className="text-primary" /> Core Impact & Contributions:
                      </h4>
                      <ul className="space-y-3">
                        {exp.achievements.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 group/item"
                          >
                            <div className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0 group-hover/item:scale-150 transition-transform" />
                            <span className="md:text-sm text-xs font-medium text-foreground/85 group-hover/item:text-foreground transition-colors leading-relaxed">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column: Tech Stack */}
                  <div className="lg:col-span-4">
                    <div className="p-4 rounded-2xl bg-background/50 border border-border/60 space-y-3">
                      <h4 className="text-[10px]  font-black uppercase tracking-[0.2em] text-muted-foreground flex items-center gap-1.5">
                        <Database size={12} className="text-cyan-400" /> Technology & Tooling
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.tech.map((t, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 text-xs font-bold bg-muted/40 border border-border/50 rounded-lg text-foreground/80 hover:text-foreground hover:bg-muted transition-all"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Career;
