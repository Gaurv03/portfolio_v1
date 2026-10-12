import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import {
  Code2,
  Terminal,
  Cpu,
  Database,
  Layers,
  Cloud,
  Activity,
  GraduationCap,
  Mail,
  CheckCircle2,
  Check,
  Award,
  ArrowRight,
  Download,
} from 'lucide-react';
import {
  BrandGithub,
  BrandLinkedin,
  BrandMedium,
  BrandTelegram,
  FileDescription,
} from 'tabler-icons-react';

const fadeInUp = {
  initial: { y: 16, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const linksArray = [
  {
    name: 'GitHub',
    icon: BrandGithub,
    color: 'hover:border-zinc-400 hover:text-white',
    link: 'https://github.com/Gaurv03',
  },
  {
    name: 'LinkedIn',
    icon: BrandLinkedin,
    color: 'hover:border-blue-500 hover:text-blue-400',
    link: 'https://www.linkedin.com/in/gaurav-upadhyay-dev03/',
  },
  {
    name: 'Medium',
    icon: BrandMedium,
    color: 'hover:border-amber-500 hover:text-amber-400',
    link: 'https://medium.com/@gauravupadhyay786.gu',
  },
  {
    name: 'Telegram',
    icon: BrandTelegram,
    color: 'hover:border-sky-500 hover:text-sky-400',
    link: 'https://t.me/Gaurv_03',
  },
  {
    name: 'Resume',
    icon: FileDescription,
    color: 'hover:border-emerald-500 hover:text-emerald-400',
    link: '/gaurav_upadhyay_resume_devops.pdf',
  },
  {
    name: 'Email',
    icon: Mail,
    color: 'hover:border-rose-500 hover:text-rose-400',
    link: 'mailto:gauravupadhyay786.gu@gmail.com',
  },
];

export const About = () => {
  // 4 Core High-Impact Competency Pillars
  const technicalPillars = [
    {
      title: 'Cloud & Infrastructure',
      icon: Cloud,
      color: 'text-foreground/80',
      summary: 'Automating secure, scalable AWS environments with Terraform IaC and multi-AZ resilience.',
      skills: [
        'AWS',
        'Terraform',
        'VPC & Subnets',
        'EC2',
        'S3',
        'RDS Multi-AZ',
        'IAM & Policies',
        'Route 53',
        'Lambda',
        'NAT / Bastion',
      ],
    },
    {
      title: 'DevOps & Orchestration',
      icon: Layers,
      color: 'text-foreground/80',
      summary: 'Standardizing container workflows and zero-friction CI/CD pipelines from source to prod.',
      skills: [
        'Docker',
        'Docker Compose',
        'Kubernetes',
        'Amazon EKS',
        'Helm',
        'Jenkins',
        'GitHub Actions',
        'Multi-Stage Builds',
        'ECR / ECS',
        'Rolling Releases',
      ],
    },
    {
      title: 'Observability & Systems',
      icon: Activity,
      color: 'text-foreground/80',
      summary: 'Production monitoring, distributed cluster telemetry, and reliable Linux server operations.',
      skills: [
        'CloudWatch',
        'Prometheus',
        'Grafana',
        'Linux Administration',
        'Nginx',
        'SSH & Security Groups',
        'Metric Alerts',
        'Operational Logs',
      ],
    },
    {
      title: 'Backend & Full-Stack',
      icon: Code2,
      color: 'text-foreground/80',
      summary: 'Engineering robust REST APIs and high-volume data pipelines with modern web runtimes.',
      skills: [
        'Node.js',
        'Express.js',
        'TypeScript',
        'PostgreSQL',
        'MongoDB',
        'Redis',
        'React.js',
        'Next.js',
        'Tailwind CSS',
        'REST APIs',
      ],
    },
  ];

  const stats = [
    { label: 'Experience', value: '3.5+ Yrs', detail: 'Cloud & Web' },
    { label: 'Ingestion Volume', value: '200K+', detail: 'Daily Images (S3)' },
    { label: 'IaC & Container', value: 'Terraform', detail: '& EKS / Docker' },
    { label: 'Location', value: 'Jodhpur, IN', detail: 'Open to Remote' },
  ];

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={staggerContainer}
      className="space-y-12"
    >
      {/* Hero & Telemetry Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Hero Card */}
        <motion.div
          variants={fadeInUp}
          className="lg:col-span-7 flex flex-col"
        >
          <Card className="h-full border border-border bg-card/95 rounded-3xl p-6 sm:p-9 flex flex-col justify-between shadow-md relative overflow-hidden">
            <div className="space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted/60 border border-border text-xs font-medium text-foreground/85 w-fit">
                <span className="size-1.5 rounded-full bg-slate-400" />
                Software Engineer &bull; Cloud &amp; DevOps
              </div>

              {/* Title */}
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
                  Gaurav Upadhyay
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground font-normal leading-relaxed">
                  Building scalable cloud infrastructure and high-performance applications with automation, reliability, and precision.
                </p>
              </div>

              {/* Concise Bio */}
              <p className="text-sm text-muted-foreground/90 leading-relaxed font-normal">
                With over 3.5 years of experience across AWS, Docker, Kubernetes, and Terraform, I bridge application development and cloud platform engineering. From architecting high-volume camera ingestion systems to automating production CI/CD pipelines, my focus is delivering resilient, maintainable software.
              </p>

              {/* Call-to-actions */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href="#projects"
                  className="px-5 py-2.5 rounded-xl bg-foreground text-background text-xs font-semibold tracking-wide flex items-center gap-1.5 hover:opacity-90 transition-all cursor-pointer shadow-xs"
                >
                  View Projects
                  <ArrowRight size={14} />
                </a>

                <a
                  href="/gaurav_upadhyay_resume_devops.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-muted/50 border border-border text-foreground text-xs font-semibold flex items-center gap-1.5 hover:bg-muted transition-all cursor-pointer"
                >
                  <Download size={14} className="text-muted-foreground" />
                  Resume PDF
                </a>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 mt-6 border-t border-border/40">
              {stats.map((stat, i) => (
                <div key={i} className="space-y-0.5">
                  <div className="text-lg font-bold text-foreground tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-muted-foreground/70">
                    {stat.detail}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Cloud Architecture & Telemetry Console */}
        <motion.div
          variants={fadeInUp}
          className="lg:col-span-5 flex flex-col"
        >
          <Card className="h-full border border-border bg-card/95 rounded-3xl p-6 flex flex-col justify-between relative shadow-md overflow-hidden">
            <div className="space-y-5 relative z-10">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-border/50 pb-3">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="size-2 rounded-full bg-slate-500/70" />
                    <span className="size-2 rounded-full bg-slate-500/70" />
                    <span className="size-2 rounded-full bg-slate-500/70" />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground ml-1.5">
                    infra-telemetry.sh
                  </span>
                </div>

                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-muted/60 border border-border text-[10px] font-mono font-medium text-muted-foreground">
                  <span className="size-1.5 rounded-full bg-slate-400" />
                  us-east-1 // Multi-AZ
                </div>
              </div>

              {/* Topology Summary */}
              <div className="p-3 rounded-2xl bg-background/50 border border-border/60 space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                  <span>Architecture Topology</span>
                  <span className="text-amber-400 font-medium">AWS + Terraform</span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="p-2 rounded-xl bg-muted/40 border border-border/40">
                    <Cloud size={14} className="text-amber-400 mx-auto mb-1" />
                    <div className="font-semibold text-foreground text-[11px]">VPC Subnets</div>
                    <div className="text-[10px] text-muted-foreground">Bastion &amp; NAT</div>
                  </div>

                  <div className="p-2 rounded-xl bg-muted/40 border border-border/40">
                    <Cpu size={14} className="text-cyan-400 mx-auto mb-1" />
                    <div className="font-semibold text-foreground text-[11px]">EKS Pods</div>
                    <div className="text-[10px] text-emerald-400">Autoscaling</div>
                  </div>

                  <div className="p-2 rounded-xl bg-muted/40 border border-border/40">
                    <Database size={14} className="text-purple-400 mx-auto mb-1" />
                    <div className="font-semibold text-foreground text-[11px]">Data Layer</div>
                    <div className="text-[10px] text-amber-400">S3 + RDS</div>
                  </div>
                </div>
              </div>

              {/* Terminal Logs */}
              <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-border/50 font-mono text-xs space-y-1.5 text-slate-300">
                <div className="flex items-center gap-1.5 text-slate-400 text-[11px] pb-1 border-b border-white/5">
                  <Terminal size={12} className="text-cyan-400" />
                  <span>runtime execution trace</span>
                </div>

                <div className="text-[11px] leading-relaxed space-y-1 pt-1">
                  <div className="text-slate-300">
                    <span className="text-amber-400">$</span> terraform apply <span className="text-emerald-400">--auto-approve</span>
                  </div>
                  <div className="text-emerald-400/90 pl-3 flex items-center gap-1">
                    <Check size={11} /> 18 resources provisioned, 0 failed
                  </div>

                  <div className="text-slate-300 pt-0.5">
                    <span className="text-cyan-400">$</span> kubectl get pods <span className="text-primary">-n prod</span>
                  </div>
                  <div className="text-cyan-300/90 pl-3 flex items-center gap-1">
                    <CheckCircle2 size={11} /> 48/48 Healthy &bull; Rolling deployment OK
                  </div>

                  <div className="text-slate-300 pt-0.5">
                    <span className="text-purple-400">$</span> s3-ingestion --stats
                  </div>
                  <div className="text-amber-300/90 pl-3">
                    &gt; 200K+ camera images stored/day
                  </div>
                </div>
              </div>
            </div>

            {/* Telemetry bar */}
            <div className="pt-3 mt-3 border-t border-border/40 grid grid-cols-3 gap-2 text-center text-xs font-mono">
              <div>
                <span className="text-[10px] text-muted-foreground block">Uptime</span>
                <span className="font-semibold text-emerald-400">99.9%</span>
              </div>
              <div className="border-x border-border/40">
                <span className="text-[10px] text-muted-foreground block">CI/CD Pass</span>
                <span className="font-semibold text-cyan-400">100%</span>
              </div>
              <div>
                <span className="text-[10px] text-muted-foreground block">Platform</span>
                <span className="font-semibold text-amber-400">AWS / K8s</span>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Core Technical Competencies */}
      <motion.div variants={fadeInUp} className="space-y-6">
        <div className="space-y-1">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
            Technical Competencies
          </h2>
          <p className="text-sm text-muted-foreground">
            Key tools, platforms, and frameworks deployed in production environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {technicalPillars.map((pillar, idx) => (
            <Card
              key={idx}
              className="border border-border bg-card/95 rounded-2xl p-5 sm:p-6 transition-all duration-200 hover:border-slate-400/50 dark:hover:border-slate-400/40 group shadow-md flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-muted/60 border border-border/50 text-foreground/80">
                    <pillar.icon size={18} className={pillar.color} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground tracking-tight">
                      {pillar.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed">
                  {pillar.summary}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {pillar.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 text-xs rounded-lg bg-muted/40 border border-border/50 text-foreground/85 font-medium transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </motion.div>

      {/* Education & Credentials */}
      <motion.div variants={fadeInUp} className="space-y-5">
        <div className="space-y-1">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
            Education &amp; Credentials
          </h2>
          <p className="text-sm text-muted-foreground">
            Academic degrees in Computer Science and specialized certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card className="border border-border bg-card/95 rounded-2xl p-5 space-y-2 shadow-md">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-foreground/90 flex items-center gap-1.5">
                <GraduationCap size={15} /> Masters
              </span>
              <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-muted/60 border border-border text-foreground">
                74%
              </span>
            </div>
            <h4 className="text-sm font-semibold text-foreground">
              Masters in Computer Science
            </h4>
            <p className="text-xs text-muted-foreground">
              Lachoo Memorial College, Jodhpur (2021 – 2023)
            </p>
          </Card>

          <Card className="border border-border bg-card/95 rounded-2xl p-5 space-y-2 shadow-md">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-foreground/90 flex items-center gap-1.5">
                <GraduationCap size={15} /> Bachelors
              </span>
              <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-muted/60 border border-border text-foreground">
                75%
              </span>
            </div>
            <h4 className="text-sm font-semibold text-foreground">
              Bachelor in Computer Science
            </h4>
            <p className="text-xs text-muted-foreground">
              Lachoo Memorial College, Jodhpur (2018 – 2021)
            </p>
          </Card>

          <Card className="border border-border bg-card/95 rounded-2xl p-5 space-y-2 shadow-md">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                <Award size={15} /> Certifications
              </span>
              <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-muted/60 border border-border text-foreground">
                Udemy
              </span>
            </div>
            <h4 className="text-sm font-semibold text-foreground">
              DevOps &amp; Web Development
            </h4>
            <p className="text-xs text-muted-foreground">
              DevOps Certification Course &bull; Web-Dev Bootcamp
            </p>
          </Card>
        </div>
      </motion.div>

      {/* Social & Direct Contact Links */}
      <motion.div variants={fadeInUp} className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-lg font-bold tracking-tight text-foreground">
            Connect
          </h2>
          <span className="text-xs text-muted-foreground">
            gauravupadhyay786.gu@gmail.com &bull; (+91) 9660-178191
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {linksArray.map((link, i) => (
            <a
              key={i}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3.5 rounded-2xl bg-card/30 border border-border/60 backdrop-blur-md transition-all duration-200 ${link.color} hover:bg-muted/40 shadow-xs flex items-center justify-center gap-2 group cursor-pointer`}
            >
              <link.icon size={18} className="text-muted-foreground group-hover:text-inherit transition-colors" />
              <span className="text-xs font-medium text-foreground/90">
                {link.name}
              </span>
            </a>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
