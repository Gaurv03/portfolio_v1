import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import {
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
  Cloud,
  Activity,
  GraduationCap,
  Server,
  Shield,
  Phone,
  Radio,
  CheckCircle2,
  Check,
} from 'lucide-react';
import {
  BrandGithub,
  BrandLinkedin,
  BrandMedium,
  BrandTelegram,
  FileDescription,
  Mail,
} from 'tabler-icons-react';
import { BorderBeam } from '@/components/ui/border-beam';

const fadeInUp = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
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
    name: 'Medium',
    icon: BrandMedium,
    color: 'hover:border-indigo-600 hover:bg-indigo-600 hover:text-white',
    link: 'https://medium.com/@gauravupadhyay786.gu',
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
    link: '/gaurav_upadhyay_resume_devops.pdf',
  },
  {
    name: 'Email',
    icon: Mail,
    color: 'hover:border-red-600 hover:bg-red-600 hover:text-white',
    link: 'mailto:gauravupadhyay786.gu@gmail.com',
  },
];

export const About = () => {
  // Skill categories matching resume exactly
  const skillCategories = [
    {
      name: 'Cloud & AWS',
      icons: [Cloud, Server],
      color: 'from-amber-500/20 to-orange-600/20',
      accent: 'border-amber-500/30 text-amber-400',
      items: [
        'AWS',
        'EC2',
        'VPC',
        'S3',
        'RDS',
        'IAM',
        'ECR',
        'ECS',
        'Lambda',
        'CloudWatch',
        'Route 53',
        'CloudFormation',
        'CloudFront',
        'ELB',
      ],
    },
    {
      name: 'DevOps & CI/CD',
      icons: [Terminal, Activity],
      color: 'from-cyan-500/20 to-blue-600/20',
      accent: 'border-cyan-500/30 text-cyan-400',
      items: [
        'Jenkins',
        'GitHub Actions',
        'CI/CD Pipelines',
        'Docker',
        'Docker Compose',
        'Git',
        'GitHub',
      ],
    },
    {
      name: 'IaC & Orchestration',
      icons: [Layers, Cpu],
      color: 'from-purple-500/20 to-indigo-600/20',
      accent: 'border-purple-500/30 text-purple-400',
      items: [
        'Terraform',
        'CloudFormation',
        'Kubernetes',
        'Helm',
        'Amazon EKS',
      ],
    },
    {
      name: 'Monitoring & Observability',
      icons: [Activity, Radio],
      color: 'from-emerald-500/20 to-teal-600/20',
      accent: 'border-emerald-500/30 text-emerald-400',
      items: [
        'Amazon CloudWatch',
        'Prometheus',
        'Grafana',
        'Metric Alerts',
        'Cluster Logs',
      ],
    },
    {
      name: 'Networking & Servers',
      icons: [Shield, Globe],
      color: 'from-blue-500/20 to-indigo-600/20',
      accent: 'border-blue-500/30 text-blue-400',
      items: [
        'Linux',
        'Nginx',
        'SSH',
        'VPC Subnets',
        'Security Groups',
        'NACL',
        'Bastion Hosts',
        'DNS',
      ],
    },
    {
      name: 'Programming & Scripting',
      icons: [Terminal, Code2],
      color: 'from-yellow-500/20 to-amber-600/20',
      accent: 'border-yellow-500/30 text-yellow-400',
      items: [
        'JavaScript',
        'TypeScript',
        'Python',
        'Node.js',
        'Bash',
      ],
    },
    {
      name: 'Backend & Databases',
      icons: [Database, Server],
      color: 'from-red-500/20 to-purple-600/20',
      accent: 'border-red-500/30 text-red-400',
      items: [
        'Express.js',
        'REST APIs',
        'PostgreSQL',
        'MongoDB',
        'Redis',
      ],
    },
    {
      name: 'Frontend Engineering',
      icons: [Code2, Globe],
      color: 'from-sky-500/20 to-blue-600/20',
      accent: 'border-sky-500/30 text-sky-400',
      items: [
        'React.js',
        'Next.js',
        'Tailwind CSS',
        'ShadCN',
        'Framer Motion',
      ],
    },
    {
      name: 'Architecture & Systems',
      icons: [Layers, Shield],
      color: 'from-violet-500/20 to-fuchsia-600/20',
      accent: 'border-violet-500/30 text-violet-400',
      items: [
        'Three-Tier Architecture',
        'Microservices',
        'Containerized Applications',
        'Cloud Deployment',
        'Environment Management',
      ],
    },
  ];

  const stats = [
    { label: 'Engineering XP', value: '3.5y+', icon: Calendar },
    { label: 'Daily Detection Workload', value: '200K+', icon: Cloud },
    { label: 'Built Solutions', value: '15+', icon: Briefcase },
    { label: 'Location', value: 'Jodhpur, RJ', icon: Globe },
  ];

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={staggerContainer}
      className="space-y-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 pb-4">
        {/* Hero Card */}
        <motion.div
          variants={fadeInUp}
          className="md:col-span-12 lg:col-span-8"
        >
          <Card className="h-full border-border/60 bg-card/40 backdrop-blur-xl rounded-[2.5rem] overflow-hidden relative group shadow-2xl">
            <div className="absolute inset-0 bg-linear-to-br from-amber-500/10 via-cyan-500/5 to-transparent opacity-60 pointer-events-none" />
            <CardContent className="p-8 md:p-12 relative z-10 flex flex-col justify-center h-full space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-[10px]  font-black uppercase tracking-[0.25em] text-amber-500 dark:text-amber-400 backdrop-blur-sm w-fit">
                  <Cloud size={12} fill="currentColor" /> Software Engineer | Cloud & DevOps Engineer
                </div>
                <h1 className="md:text-6xl text-4xl font-black tracking-tighter text-foreground leading-[1.05]">
                  I'm{' '}
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 via-cyan-400 to-blue-500">
                    Gaurav Upadhyay.
                  </span>
                </h1>
                <h2 className="md:text-2xl text-lg font-bold tracking-tight text-muted-foreground">
                  Architecting <span className="text-foreground">Resilient Cloud Infrastructure</span> &{' '}
                  <span className="text-foreground">High-Performance Applications</span>.
                </h2>
              </div>

              {/* Resume Objective Text */}
              <p className="md:text-base text-sm leading-relaxed text-muted-foreground font-medium max-w-2xl">
                Software Engineer with <strong>3.5+ years of experience</strong> building and deploying
                scalable web applications, with hands-on experience in <strong>AWS, Docker, CI/CD,
                  Linux, infrastructure automation</strong>, and cloud-native deployment practices.
                Experienced in designing automated build and deployment pipelines, containerizing
                applications, managing cloud infrastructure, securing configuration and secrets, and
                improving deployment reliability. Strong software engineering foundation across{' '}
                <strong>Node.js, React, TypeScript, and REST APIs</strong>.
              </p>

              {/* Quick Contact Chips */}
              <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-semibold text-muted-foreground">
                <a
                  href="mailto:gauravupadhyay786.gu@gmail.com"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted/50 border border-border hover:text-foreground transition-colors"
                >
                  <Mail size={13} className="text-amber-400" /> gauravupadhyay786.gu@gmail.com
                </a>
                <a
                  href="tel:+919660178191"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted/50 border border-border hover:text-foreground transition-colors"
                >
                  <Phone size={13} className="text-cyan-400" /> (+91) 9660-178191
                </a>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted/50 border border-border text-muted-foreground">
                  <Globe size={13} className="text-emerald-400" /> Jodhpur, Rajasthan, India
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-border/40">
                {stats.map((stat, i) => (
                  <div key={i} className="flex flex-col items-start">
                    <span className="text-[10px]  items-center gap-1 font-bold uppercase tracking-wider text-muted-foreground flex mb-1">
                      {stat.label}
                    </span>
                    <div className="flex items-center gap-2">
                      <stat.icon size={18} className="text-primary" />
                      <span className="text-xl font-black tracking-tight">
                        {stat.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* DevOps Mission Control & Cloud Telemetry Console */}
        <motion.div
          variants={fadeInUp}
          className="md:col-span-12 lg:col-span-4"
        >
          <Card className="h-full border-border/60 bg-card/30 backdrop-blur-2xl rounded-[2.5rem] overflow-hidden flex flex-col justify-between relative group min-h-100 shadow-2xl p-6 sm:p-7 border">
            {/* SaaS Border Beam for ultra-modern edge glow */}
            <BorderBeam size={140} duration={8} colorFrom="#FF9900" colorTo="#38BDF8" borderWidth={1.5} />

            {/* Background Atmosphere */}
            <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-amber-500/5 via-cyan-500/5 to-transparent pointer-events-none" />
            <div className="absolute inset-0 cloud-grid opacity-30 pointer-events-none" />
            <div className="absolute top-1/2 right-0 w-44 h-44 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-5">
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between border-b border-border/50 pb-3">
                <div className="flex items-center gap-1.5">
                  <div className="size-2.5 rounded-full bg-rose-500/90 shadow-xs" />
                  <div className="size-2.5 rounded-full bg-amber-500/90 shadow-xs" />
                  <div className="size-2.5 rounded-full bg-emerald-500/90 shadow-xs" />
                  <span className="text-xs font-mono font-bold text-muted-foreground ml-2">
                    cloud-core.sh
                  </span>
                </div>

                <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono font-bold text-emerald-400">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                  </span>
                  us-east-1 // MULTI-AZ
                </div>
              </div>

              {/* Architecture Topology Flow */}
              <div className="p-3 rounded-2xl bg-background/60 border border-border/60 backdrop-blur-md space-y-2.5">
                <div className="flex items-center justify-between text-[10px]  font-mono text-muted-foreground uppercase">
                  <span>Architecture Topology</span>
                  <span className="text-amber-400 font-bold">AWS + Terraform</span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div className="p-2 rounded-xl bg-muted/40 border border-border/50 text-center space-y-1">
                    <Cloud size={14} className="text-amber-400 mx-auto" />
                    <div className="text-[10px] font-mono font-bold text-foreground">VPC Ingress</div>
                    <div className="text-[8px] text-muted-foreground">Bastion & NAT</div>
                  </div>

                  <div className="p-2 rounded-xl bg-cyan-500/5 border border-cyan-500/20 text-center space-y-1">
                    <Cpu size={14} className="text-cyan-400 mx-auto" />
                    <div className="text-[10px] font-mono font-bold text-foreground">EKS Cluster</div>
                    <div className="text-[8px] text-emerald-400">48 Pods OK</div>
                  </div>

                  <div className="p-2 rounded-xl bg-purple-500/5 border border-purple-500/20 text-center space-y-1">
                    <Database size={14} className="text-purple-400 mx-auto" />
                    <div className="text-[10px] font-mono font-bold text-foreground">Data Layer</div>
                    <div className="text-[8px] text-amber-400">200K+ S3/RDS</div>
                  </div>
                </div>
              </div>

              {/* Live DevOps Command Logs */}
              <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-border/60 font-mono text-xs space-y-2 text-slate-300">
                <div className="flex items-center gap-1.5 text-slate-400 text-xs ">
                  <Terminal size={12} className="text-amber-400" />
                  <span>orchestrator-daemon ~ log</span>
                </div>

                <div className="space-y-1.5 text-xs  leading-tight pt-1">
                  <div className="text-slate-300 flex items-center gap-1">
                    <span className="text-amber-400">$</span> terraform apply <span className="text-emerald-400 font-bold">--auto-approve</span>
                  </div>
                  <div className="text-emerald-400/90 pl-3 flex items-center gap-0.5">
                    <Check size={12} className="text-emerald-400" /> 18 resources in sync • 0 to destroy
                  </div>

                  <div className="text-slate-300 flex items-center gap-1 pt-1">
                    <span className="text-cyan-400">$</span> kubectl get pods <span className="text-primary">-n prod</span>
                  </div>
                  <div className="text-cyan-300/90 pl-3 flex items-center gap-1">
                    <Check size={12} className="text-emerald-400" /> 48/48 Running • HPA autoscaling active
                  </div>

                  <div className="text-slate-300 flex items-center gap-1 pt-1">
                    <span className="text-purple-400">$</span> s3-ingestion --stats
                  </div>
                  <div className="text-amber-300/90 pl-3 flex items-center gap-1">
                    <CheckCircle2 size={12} className="text-emerald-400" />
                    <span>200K+ camera images stored/day</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Telemetry Health Bar */}
            <div className="relative z-10 pt-4 mt-2 border-t border-border/40 grid grid-cols-3 gap-2 text-center">
              <div className="space-y-0.5">
                <span className="text-[8px] font-mono uppercase text-muted-foreground block">Uptime</span>
                <span className="text-xs font-mono font-black text-emerald-400 block">99.99%</span>
              </div>
              <div className="space-y-0.5 border-x border-border/40">
                <span className="text-[8px] font-mono uppercase text-muted-foreground block">Latency</span>
                <span className="text-xs font-mono font-black text-cyan-400 block">18ms</span>
              </div>
              <div className="space-y-0.5">
                <span className="text-[8px] font-mono uppercase text-muted-foreground block">Pipeline</span>
                <span className="text-xs font-mono font-black text-amber-400 block">100% Pass</span>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* The Philosophy & Core Approach */}
        <motion.div variants={fadeInUp} className="md:col-span-12">
          <Card className="border-border/60 bg-linear-to-br from-card/60 to-card/20 backdrop-blur-xl rounded-[2.5rem] overflow-hidden shadow-2xl">
            <CardContent className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative">
              <div className="absolute -left-20 -top-20 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="space-y-6 relative z-10">
                <div className="space-y-3">
                  <h3 className="text-2xl md:text-3xl font-black tracking-tight flex items-center gap-3">
                    <div className="h-7 w-1.5 bg-linear-to-b from-amber-400 via-cyan-400 to-blue-500 rounded-full" />
                    Engineering Philosophy
                  </h3>
                  <p className="text-lg text-muted-foreground font-medium leading-relaxed italic">
                    "Reliability is not an afterthought—it is designed into the infrastructure and proven through automation."
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-background/40 border border-border/60 space-y-2 shadow-sm backdrop-blur-sm">
                    <Target size={22} className="text-amber-400" />
                    <h4 className="text-xs font-black uppercase tracking-wider text-foreground">
                      Infrastructure as Code
                    </h4>
                    <p className="text-xs text-muted-foreground font-medium leading-relaxed">
                      Repeatable, audit-ready cloud deployments using Terraform and modular architecture.
                    </p>
                  </div>
                  <div className="p-5 rounded-2xl bg-background/40 border border-border/60 space-y-2 shadow-sm backdrop-blur-sm">
                    <Zap size={22} className="text-cyan-400" />
                    <h4 className="text-xs font-black uppercase tracking-wider text-foreground">
                      Automated Velocity
                    </h4>
                    <p className="text-xs text-muted-foreground font-medium leading-relaxed">
                      Zero-friction continuous integration, multi-stage Docker builds, and automated tests.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-muted-foreground font-medium leading-relaxed text-base relative z-10">
                <p>
                  I bridge the critical gap between full-stack application development and platform
                  infrastructure. Over the past 3.5+ years, my work has spanned architecting
                  high-volume image processing workloads (surpassing 200K+ daily detection images on
                  AWS S3) to building reactive, microservice-driven web interfaces.
                </p>
                <p>
                  Whether provisioning isolated three-tier environments on AWS with Terraform,
                  orchestrating containerized workloads on Kubernetes & Amazon EKS, or optimizing
                  database performance and CI/CD throughput, my objective is always the same:
                  build scalable systems that are secure, resilient, and performant.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Technical Dominance Section (All 10 Resume Categories) */}
        <motion.div
          variants={fadeInUp}
          className="md:col-span-12 space-y-6 pt-4"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 px-2">
            <div>
              <h3 className="md:text-4xl text-3xl font-black tracking-tighter flex items-center gap-3">
                Technical Mastery
                <Sparkles className="text-amber-400 size-6" />
              </h3>
              <p className="text-muted-foreground text-sm font-medium">
                Comprehensive toolchain and skill matrix aligned with production experience.
              </p>
            </div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary">
              10 Specialized Competencies
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                className="group h-full"
              >
                <Card className="h-full border-border/60 bg-card/40 backdrop-blur-xl rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/40 hover:shadow-lg relative p-0">
                  <div className="absolute inset-0 bg-linear-to-br from-white/2 to-transparent pointer-events-none" />
                  <CardContent className="p-6 space-y-5 relative z-10 flex flex-col justify-between h-full">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex -space-x-2">
                          {category.icons.map((Icon, i) => (
                            <div
                              key={i}
                              className="p-2.5 rounded-full bg-background border border-border text-primary shadow-md relative"
                              style={{ zIndex: category.icons.length - i }}
                            >
                              <Icon size={16} />
                            </div>
                          ))}
                        </div>
                        <span className={`text-xs  font-mono font-black uppercase px-2 py-0.5 rounded border ${category.accent}`}>
                          Verified
                        </span>
                      </div>

                      <h4 className="text-lg font-black tracking-tight text-foreground">
                        {category.name}
                      </h4>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {category.items.map((item, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-background/60 border border-border/50 text-muted-foreground group-hover:text-foreground transition-colors"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <div
                    className={`absolute bottom-0 left-0 h-1 w-full bg-linear-to-r ${category.color} opacity-60 group-hover:opacity-100 transition-opacity`}
                  />
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education & Certifications Section (from Resume) */}
        <motion.div
          variants={fadeInUp}
          className="md:col-span-12 space-y-6 pt-4"
        >
          <div className="px-2">
            <h3 className="text-3xl md:text-4xl font-black tracking-tighter">
              Education & Certifications
            </h3>
            <p className="text-muted-foreground font-medium text-sm">
              Academic credentials and industry qualifications.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {/* Education Bento */}
            <Card className="border-border/60 bg-card/40 backdrop-blur-xl rounded-3xl p-6 gap-0 shadow-xl">
              <div className="flex items-center gap-3 border-b border-border/40 pb-4">
                <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-black tracking-tight">Formal Education</h4>
                  <p className="text-xs text-muted-foreground">Computer Science degrees</p>
                </div>
              </div>

              <div className="space-y-5">
                {/* Masters */}
                <div className="space-y-1.5 p-4 rounded-2xl bg-background/40 border border-border/50">
                  <div className="flex justify-between items-start">
                    <h5 className="font-black text-base text-foreground">
                      Masters in Computer Science
                    </h5>
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
                      74%
                    </span>
                  </div>
                  <p className="text-xs font-medium text-muted-foreground">
                    Lachoo Memorial College, Jodhpur, Rajasthan
                  </p>
                  <div className="text-xs font-mono text-muted-foreground/80 flex items-center gap-1 pt-1">
                    <Calendar size={12} /> Aug 2021 – Aug 2023
                  </div>
                </div>

                {/* Bachelors */}
                <div className="space-y-1.5 p-4 rounded-2xl bg-background/40 border border-border/50">
                  <div className="flex justify-between items-start">
                    <h5 className="font-black text-base text-foreground">
                      Bachelor in Computer Science
                    </h5>
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
                      75%
                    </span>
                  </div>
                  <p className="text-xs font-medium text-muted-foreground">
                    Lachoo Memorial College, Jodhpur, Rajasthan
                  </p>
                  <div className="text-xs font-mono text-muted-foreground/80 flex items-center gap-1 pt-1">
                    <Calendar size={12} /> Jun 2018 – Jun 2021
                  </div>
                </div>
              </div>
            </Card>


          </div>
        </motion.div>

        {/* Social Links Bento */}
        <motion.div
          variants={fadeInUp}
          className="md:col-span-12 space-y-6 pt-4"
        >
          <div className="text-center md:text-left px-2 space-y-1">
            <h3 className="text-3xl md:text-4xl font-black tracking-tighter">
              Digital Nexus & Connectivity
            </h3>
            <p className="text-muted-foreground font-medium text-sm">
              Direct access channels for collaboration, hiring, and technical inquiries.
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
                className={`flex flex-col items-center justify-center gap-3 p-6 rounded-[2rem] bg-card/40 border border-border/60 backdrop-blur-xl transition-all duration-300 ${link.color} shadow-lg group`}
              >
                <div className="p-3.5 rounded-2xl bg-background/60 border border-border/40 group-hover:bg-transparent group-hover:border-transparent transition-all duration-300 shadow-inner">
                  <link.icon size={28} />
                </div>
                <span className="text-[10px]  font-black uppercase tracking-[0.2em] text-center">
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
