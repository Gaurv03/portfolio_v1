import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import {
  Calendar,
  MapPin,
  Cloud,
  Layers,
  Briefcase,
  Terminal,
} from 'lucide-react';

const fadeInUp = {
  initial: { y: 16, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.12,
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
      type: 'Full-time',
      summary:
        'Architecting and deploying full-stack camera surveillance systems, cloud infrastructure as code, and automated CI/CD release pipelines.',
      achievements: [
        'Engineered cloud surveillance workloads processing 200K+ daily camera vehicle detection images stored in Amazon S3.',
        'Provisioned secure AWS environments using Terraform (IaC) with multi-AZ VPC subnets, security groups, and bastion access.',
        'Automated application testing, multi-stage Docker image builds, and deployment flows using Jenkins and GitHub Actions.',
        'Monitored application health, cluster metrics, and runtime alerts with Amazon CloudWatch.',
        'Developed full-stack microservices with Node.js, Express, PostgreSQL, React.js, and TypeScript.',
      ],
      tech: [
        'AWS (EC2, S3, RDS, ECR, ECS, Lambda, VPC)',
        'Terraform',
        'Docker',
        'Jenkins',
        'GitHub Actions',
        'CloudWatch',
        'Node.js',
        'PostgreSQL',
        'React.js',
        'TypeScript',
      ],
      icon: Cloud,
      iconColor: 'text-amber-400',
    },
    {
      company: 'AIAB Ventures Pvt Ltd',
      role: 'Software Engineer',
      period: 'March 2023 - March 2025',
      location: 'Mumbai, MH',
      type: 'Full-time',
      summary:
        'Led end-to-end full-stack development and scaling of client-facing products, building responsive dashboards and robust API architectures.',
      achievements: [
        'Developed and scaled production web applications using React.js, Node.js, and MongoDB across multiple client products.',
        'Designed high-throughput RESTful APIs for multi-database architectures, improving data reliability and backend response times.',
        'Built interactive, data-driven analytics dashboards in React.js and Vue.js with smooth state management.',
        'Refactored legacy modules to reduce technical debt and streamline release cycles.',
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
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted/60 border border-border text-xs font-medium text-foreground/80">
          <Briefcase size={13} />
          Experience &bull; 3.5+ Years
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
          Work Experience
        </h2>
        <p className="text-sm text-muted-foreground max-w-2xl">
          Track record in building, deploying, and maintaining production cloud infrastructure and full-stack software.
        </p>
      </div>

      {/* Timeline List */}
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="space-y-6"
      >
        {experiences.map((exp, idx) => (
          <motion.div key={idx} variants={fadeInUp}>
            <Card className="border border-border bg-card/95 rounded-2xl overflow-hidden hover:border-slate-400/50 dark:hover:border-slate-400/40 transition-all duration-200 shadow-md">
              <CardContent className="p-5 sm:p-7 space-y-5">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border/40 pb-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-muted/60 border border-border/40">
                        <exp.icon size={16} className={exp.iconColor} />
                      </div>
                      <h3 className="text-lg font-bold text-foreground tracking-tight">
                        {exp.company}
                      </h3>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-muted/60 border border-border text-muted-foreground font-medium">
                        {exp.type}
                      </span>
                    </div>
                    <div className="text-sm font-medium text-foreground/80 pl-8">
                      {exp.role}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-muted-foreground font-medium pl-8 sm:pl-0">
                    <span className="flex items-center gap-1">
                      <Calendar size={13} className="text-primary" />
                      {exp.period}
                    </span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1">
                      <MapPin size={13} className="text-cyan-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Body row */}
                <div className="space-y-4">
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {exp.summary}
                  </p>

                  {/* Bullet points */}
                  <div className="space-y-2">
                    <div className="text-xs font-semibold text-foreground/90 uppercase tracking-wider flex items-center gap-1.5">
                      <Layers size={13} className="text-primary" />
                      Key Responsibilities &amp; Impact
                    </div>
                    <ul className="space-y-1.5">
                      {exp.achievements.map((item, i) => (
                        <li
                          key={i}
                          className="text-xs sm:text-sm text-muted-foreground flex items-start gap-2 leading-relaxed"
                        >
                          <span className="text-primary mt-1.5 size-1.5 rounded-full bg-primary shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack tags */}
                  <div className="pt-2 border-t border-border/40 flex flex-wrap gap-1.5">
                    {exp.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 text-xs rounded-md bg-muted/50 border border-border/50 text-foreground/80 font-medium"
                      >
                        {t}
                      </span>
                    ))}
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
