import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Layout,
  Server,
  Cloud,
  ExternalLink,
  GitBranch,
  ShieldCheck,
  Cpu,
  Activity,
  Layers,
  CheckCircle2,
  Database,
  Terminal,
} from 'lucide-react';
import { BrandGithub } from 'tabler-icons-react';

export interface Project {
  id: number;
  title: string;
  description: string;
  category: 'Fullstack' | 'Frontend' | 'DevOps & Cloud';
  image?: string;
  demo?: string;
  github?: string;
  tech?: string[];
  devopsType?: 'terraform' | 'cicd' | 'k8s' | 'image-pipeline';
}

export const projects: Project[] = [
  // --- DevOps & Cloud Projects (from Resume) ---
  {
    id: 101,
    title: 'Containerized Application CI/CD Platform',
    description:
      'Automated end-to-end multi-stage Docker builds, image verification, and continuous deployment to AWS ECR/ECS using Jenkins and GitHub Actions.',
    category: 'DevOps & Cloud',
    demo: 'https://github.com/Gaurv03',
    github: 'https://github.com/Gaurv03',
    devopsType: 'cicd',
    tech: ['Docker', 'Jenkins', 'GitHub Actions', 'AWS ECR', 'AWS ECS', 'Multi-Stage', 'CI/CD'],
  },
  {
    id: 102,
    title: 'Production-Style AWS Infrastructure with Terraform',
    description:
      'Provisioned an isolated, production-grade 3-tier AWS environment (VPC, public/private subnets, NAT, bastion, security groups, RDS) using Terraform IaC.',
    category: 'DevOps & Cloud',
    demo: 'https://github.com/Gaurv03',
    github: 'https://github.com/Gaurv03',
    devopsType: 'terraform',
    tech: ['Terraform', 'AWS VPC', 'Subnets', 'NAT Gateway', 'Bastion Host', 'RDS Multi-AZ', 'IaC'],
  },
  {
    id: 103,
    title: 'Amazon EKS Deployment & Observability Platform',
    description:
      'Deployed containerized applications on Amazon EKS with Helm charts, rolling deployments, HPA autoscaling, and full-stack observability with Prometheus & Grafana.',
    category: 'DevOps & Cloud',
    demo: 'https://github.com/Gaurv03',
    github: 'https://github.com/Gaurv03',
    devopsType: 'k8s',
    tech: ['Amazon EKS', 'Kubernetes', 'Helm', 'Prometheus', 'Grafana', 'HPA', 'Observability'],
  },
  // {
  //   id: 104,
  //   title: 'Cloud-Native Image Processing Platform',
  //   description:
  //     'Engineered a scalable cloud workload ingesting and storing 200K+ camera vehicle detection images daily using S3, Lambda, Node.js, and CloudWatch telemetry.',
  //   category: 'DevOps & Cloud',
  //   demo: 'https://github.com/Gaurv03',
  //   github: 'https://github.com/Gaurv03',
  //   devopsType: 'image-pipeline',
  //   tech: ['AWS S3', 'AWS Lambda', 'CloudWatch', 'Docker', 'Node.js', 'PostgreSQL', 'IAM'],
  // },

  // --- Featured Platform / AI Project ---
  {
    id: 12,
    title: 'SEEQ – AI-Powered Video Analytics & Surveillance',
    description:
      'Enterprise AI surveillance platform converting CCTV feeds into intelligent security systems with real-time ANPR, facial recognition, and live feeds.',
    category: 'Frontend',
    image: '/seeq.png',
    demo: 'https://seeq.co.in',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'AI Surveillance', 'ANPR', 'Live Feeds'],
  },

  // --- Web Applications & Full-Stack Projects ---
  {
    id: 1,
    title: 'Alphatopia – Trading Analysis Platform',
    description:
      'Interactive financial analytics dashboard visualizing large market datasets with AI insights, memoized chart rendering, and instant filtering.',
    category: 'Frontend',
    image: '/alphatopia.png',
    demo: 'https://alphatopia.net/',
    tech: ['React.js', 'Node.js', 'Data Visualization', 'Memoization', 'Analytics'],
  },
  {
    id: 10,
    title: 'ElastecTrade',
    description:
      'Modern financial trading interface for crypto and forex markets featuring real-time price feeds, interactive charts, and secure transaction flows.',
    category: 'Frontend',
    image: '/elastecTrade.png',
    demo: 'https://elastectrade.com/',
    tech: ['React.js', 'Tailwind CSS', 'Crypto/Forex', 'Real-time Feeds'],
  },
  {
    id: 11,
    title: 'IJOS - Indian Jewellery Online Store',
    description:
      'Comprehensive jewelry marketplace and sourcing portal with secure checkout, drop-shipping capabilities, and high-performance product discovery.',
    category: 'Fullstack',
    image: '/ijos.png',
    demo: 'https://indianjewelleryonlinestore.com/',
    tech: ['Fullstack', 'E-commerce', 'Payment Gateway', 'Catalog Search'],
  },
  {
    id: 3,
    title: 'HRX Brand Platform',
    description:
      'High-traffic lifestyle brand e-commerce portal optimized for rapid page loads (~25% speed improvement) and responsive frontend performance.',
    category: 'Fullstack',
    image: '/hrx.png',
    demo: 'https://www.hrxbrand.com/home',
    tech: ['React.js', 'Performance Optimization', 'Fullstack', 'Responsive UI'],
  },
  {
    id: 9,
    title: 'Emotion Unlocked',
    description:
      'Mental wellness web platform providing guided self-care programs, mood tracking, and AI-assisted personalized wellbeing insights.',
    category: 'Fullstack',
    image: '/eu.png',
    demo: 'https://emotion-unlocked-prod.web.app/',
    tech: ['Firebase', 'React.js', 'AI Insights', 'Self-Care Engine'],
  },
  {
    id: 6,
    title: 'Courselo – Learning Platform',
    description:
      'Multi-platform education portal featuring a Next.js web application and Electron desktop client with real-time sync and user authentication.',
    category: 'Fullstack',
    image: '/courselo.png',
    demo: 'https://courselo.co/',
    tech: ['Next.js', 'Electron', 'Firebase', 'Fullstack', 'Authentication'],
  },
  {
    id: 4,
    title: 'NHRDN Platform – Member Management',
    description:
      'Enterprise organizational portal with role-based access control (RBAC), secure member directories, and streamlined administrator dashboards.',
    category: 'Fullstack',
    image: '/nhrdn.png',
    demo: 'https://www.nationalhrd.org/home',
    tech: ['Node.js', 'React.js', 'RBAC', 'Enterprise Systems'],
  },
  {
    id: 5,
    title: 'CaregiverSaathi – Support Platform',
    description:
      'Caregiver support ecosystem with accessible user flows, curated support resources, and intuitive admin management workflows.',
    category: 'Fullstack',
    image: '/caregiver.png',
    demo: 'https://www.caregiversaathi.co.in/home',
    tech: ['React.js', 'UI/UX', 'Admin Workflow', 'Accessibility'],
  },
  {
    id: 8,
    title: 'Borders and Threads',
    description:
      'Contemporary apparel storefront built for seamless product discovery, visual catalog browsing, and conversion-focused shopping.',
    category: 'Fullstack',
    image: '/bnt.png',
    demo: 'https://bordersnthreads.com/',
    tech: ['E-commerce', 'React.js', 'Storefront', 'Product Catalog'],
  },
  {
    id: 2,
    title: 'Amora Dashboard – Analytics Platform',
    description:
      'Operations analytics portal tracking engagement metrics, user activity streams, and customizable report generation using React and Tailwind.',
    category: 'Frontend',
    image: '/amora.png',
    demo: 'https://www.findamora.com/',
    tech: ['React.js', 'Tailwind CSS', 'Firebase', 'Analytics'],
  },
  {
    id: 7,
    title: 'SBI Youth for India',
    description:
      'Fellowship application and alumni platform for the SBI Youth for India initiative, built with responsive Vue.js interfaces and story archives.',
    category: 'Fullstack',
    image: '/sbi.png',
    demo: 'https://youthforindia.org/',
    tech: ['Vue.js', 'Fullstack', 'Fellowship Platform', 'Responsive'],
  },
];

/**
 * DevOps Visual Previews rendered cleanly in CSS/SVG
 */
const DevOpsPreviewBanner = ({ type }: { type?: string }) => {
  switch (type) {
    case 'terraform':
      return (
        <div className="w-full h-full bg-slate-950 p-4 flex flex-col justify-between font-mono relative overflow-hidden border-b border-border/40 select-none">
          <div className="flex items-center justify-between text-xs z-10">
            <span className="text-muted-foreground flex items-center gap-1.5 text-[11px]">
              <span className="size-2 rounded-full bg-purple-400" />
              terraform/aws-vpc.tf
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] bg-purple-500/10 text-purple-300 border border-purple-500/20 font-medium">
              IaC &bull; AWS
            </span>
          </div>

          <div className="my-auto py-2 z-10">
            <div className="rounded-xl border border-purple-500/20 bg-purple-950/20 p-2.5 space-y-2">
              <div className="flex items-center justify-between text-[11px] text-purple-300 font-semibold border-b border-purple-500/20 pb-1">
                <span className="flex items-center gap-1.5">
                  <Cloud size={12} className="text-amber-400" /> VPC 10.0.0.0/16
                </span>
                <span className="text-[10px] text-emerald-400 font-medium">Multi-AZ</span>
              </div>
              <div className="grid grid-cols-3 gap-1.5 text-[10px]">
                <div className="p-1.5 rounded-lg bg-slate-900/80 border border-border/60 text-center">
                  <div className="text-[9px] text-muted-foreground uppercase">Public</div>
                  <div className="text-blue-300 font-medium">NAT & Bastion</div>
                </div>
                <div className="p-1.5 rounded-lg bg-slate-900/80 border border-border/60 text-center">
                  <div className="text-[9px] text-muted-foreground uppercase">Private App</div>
                  <div className="text-purple-300 font-medium">EC2 / ECS</div>
                </div>
                <div className="p-1.5 rounded-lg bg-slate-900/80 border border-border/60 text-center">
                  <div className="text-[9px] text-muted-foreground uppercase">Private DB</div>
                  <div className="text-amber-300 font-medium">RDS Cluster</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] z-10 text-emerald-400 font-medium">
            <div className="flex items-center gap-1">
              <CheckCircle2 size={12} />
              <span>Apply complete: 18 added</span>
            </div>
            <span className="text-[10px] text-muted-foreground font-mono">0 destroyed</span>
          </div>
        </div>
      );

    case 'cicd':
      return (
        <div className="w-full h-full bg-slate-950 p-4 flex flex-col justify-between font-mono relative overflow-hidden border-b border-border/40 select-none">
          <div className="flex items-center justify-between text-xs z-10">
            <div className="flex items-center gap-1.5 text-[11px] text-slate-300">
              <GitBranch size={12} className="text-cyan-400" />
              <span>pipeline #452 (main)</span>
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] bg-muted/60 text-muted-foreground border border-border font-medium flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-slate-400" />
              Automated
            </span>
          </div>

          <div className="my-auto py-2 z-10">
            <div className="grid grid-cols-4 gap-1.5">
              {[
                { name: 'Checkout', tool: 'GHA', ok: true },
                { name: 'Build', tool: 'Docker', ok: true },
                { name: 'Push', tool: 'ECR', ok: true },
                { name: 'Deploy', tool: 'ECS', ok: true },
              ].map((stage, i) => (
                <div
                  key={i}
                  className="p-1.5 rounded-lg bg-slate-900/80 border border-border/60 text-center space-y-0.5"
                >
                  <div className="flex items-center justify-center gap-0.5 text-emerald-400 text-[8px] font-bold">
                    <CheckCircle2 size={9} /> PASS
                  </div>
                  <div className="text-[11px] font-semibold text-slate-200">
                    {stage.name}
                  </div>
                  <div className="text-[8px] text-muted-foreground uppercase">{stage.tool}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] z-10 text-slate-400">
            <span className="text-cyan-400 flex items-center gap-1">
              <ShieldCheck size={12} /> Jenkins &bull; GitHub Actions
            </span>
            <span className="text-emerald-400 font-medium">Duration: 2m 18s</span>
          </div>
        </div>
      );

    case 'k8s':
      return (
        <div className="w-full h-full bg-slate-950 p-4 flex flex-col justify-between font-mono relative overflow-hidden border-b border-border/40 select-none">
          <div className="flex items-center justify-between text-xs z-10">
            <div className="flex items-center gap-1.5 text-[11px] text-slate-300">
              <Cpu size={12} className="text-blue-400" />
              <span>eks-cluster.us-east-1</span>
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] bg-blue-500/10 text-blue-300 border border-blue-500/20 font-medium">
              EKS &bull; Helm
            </span>
          </div>

          <div className="my-auto py-2 z-10">
            <div className="grid grid-cols-3 gap-1.5 text-center">
              <div className="p-2 rounded-lg bg-slate-900/80 border border-border/60">
                <div className="text-[9px] uppercase text-muted-foreground">Cluster</div>
                <div className="text-xs font-bold text-emerald-400">HEALTHY</div>
                <div className="text-[8px] text-slate-400">Multi-Node</div>
              </div>
              <div className="p-2 rounded-lg bg-slate-900/80 border border-border/60">
                <div className="text-[9px] uppercase text-muted-foreground">Pods</div>
                <div className="text-xs font-bold text-cyan-400">48 / 48</div>
                <div className="text-[8px] text-emerald-400">0 Restarts</div>
              </div>
              <div className="p-2 rounded-lg bg-slate-900/80 border border-border/60">
                <div className="text-[9px] uppercase text-muted-foreground">Deployments</div>
                <div className="text-xs font-bold text-amber-400">Helm v3</div>
                <div className="text-[8px] text-slate-400">HPA Active</div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] z-10 text-slate-400">
            <span className="flex items-center gap-1 text-emerald-400">
              <Activity size={12} /> Prometheus & Grafana
            </span>
            <span className="text-muted-foreground text-[10px]">Zero Downtime</span>
          </div>
        </div>
      );

    case 'image-pipeline':
      return (
        <div className="w-full h-full bg-slate-950 p-4 flex flex-col justify-between font-mono relative overflow-hidden border-b border-border/40 select-none">
          <div className="flex items-center justify-between text-xs z-10">
            <div className="flex items-center gap-1.5 text-[11px] text-slate-300">
              <Layers size={12} className="text-amber-400" />
              <span>s3-camera-ingestion</span>
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] bg-amber-500/10 text-amber-300 border border-amber-500/20 font-medium">
              S3 &bull; Lambda
            </span>
          </div>

          <div className="my-auto py-2 z-10">
            <div className="p-2.5 rounded-lg bg-slate-900/80 border border-border/60 space-y-1.5">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-slate-300 font-medium flex items-center gap-1">
                  <Database size={11} className="text-amber-400" /> Ingestion Throughput
                </span>
                <span className="text-emerald-400 font-semibold">200K+ / Day</span>
              </div>
              <div className="grid grid-cols-3 gap-1 text-[9px] text-center font-medium">
                <div className="p-1 rounded bg-muted/40 border border-border/50 text-slate-300">
                  Camera Capture
                </div>
                <div className="p-1 rounded bg-blue-950/40 border border-blue-500/20 text-blue-300">
                  S3 Storage
                </div>
                <div className="p-1 rounded bg-purple-950/40 border border-purple-500/20 text-purple-300">
                  PostgreSQL
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] z-10 text-slate-400">
            <span className="text-amber-400 flex items-center gap-1">
              <Activity size={12} /> CloudWatch Active
            </span>
            <span className="text-emerald-400 text-[10px]">Zero Drop Rate</span>
          </div>
        </div>
      );

    default:
      return null;
  }
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const isDevOps = project.category === 'DevOps & Cloud';

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ delay: index * 0.03, duration: 0.3 }}
      className="group relative h-full"
    >
      <Card className="h-full bg-card/95 border border-border rounded-2xl overflow-hidden hover:border-slate-400/50 dark:hover:border-slate-400/40 transition-all duration-200 flex flex-col justify-between shadow-md">
        {/* Media / Visual Banner */}
        <div className="relative aspect-video overflow-hidden bg-muted/20">
          {isDevOps ? (
            <DevOpsPreviewBanner type={project.devopsType} />
          ) : (
            <>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/20 to-transparent" />
            </>
          )}

          {/* Category Pill */}
          <div className="absolute top-3 left-3 z-10">
            <span
              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium tracking-wide bg-background/80 border border-border/80 text-foreground/80 shadow-xs"
            >
              {isDevOps ? (
                <Cloud size={11} className="text-muted-foreground" />
              ) : project.category === 'Fullstack' ? (
                <Server size={11} className="text-muted-foreground" />
              ) : (
                <Layout size={11} className="text-muted-foreground" />
              )}
              {project.category}
            </span>
          </div>
        </div>

        {/* Card Content */}
        <CardContent className="p-4 sm:p-5 flex flex-col grow justify-between space-y-4">
          <div className="space-y-2">
            <h3 className="text-base font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>

            <p className="text-xs text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="space-y-3 pt-2 border-t border-border/40">
            {/* Tech Tags */}
            {project.tech && (
              <div className="flex flex-wrap gap-1">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 text-[11px] rounded-md bg-muted/40 border border-border/50 text-muted-foreground font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}

            {/* Direct Action Link */}
            <div className="pt-1 flex items-center justify-between">
              {isDevOps ? (
                <a
                  href={project.github || 'https://github.com/Gaurv03'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-primary hover:underline flex items-center gap-1.5"
                >
                  <BrandGithub size={14} />
                  <span>Architecture &amp; Code</span>
                  <ExternalLink size={12} className="opacity-70" />
                </a>
              ) : (
                <a
                  href={project.demo || project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-primary hover:underline flex items-center gap-1.5"
                >
                  <ExternalLink size={13} />
                  <span>Live Preview</span>
                </a>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export const Projects = () => {
  const [filter, setFilter] = useState<'All' | 'DevOps & Cloud' | 'Fullstack' | 'Frontend'>('All');

  const filteredProjects = projects.filter((p) =>
    filter === 'All' ? true : p.category === filter
  );

  const filterTabs: Array<{ id: 'All' | 'DevOps & Cloud' | 'Fullstack' | 'Frontend'; label: string; count: number }> = [
    { id: 'All', label: 'All Projects', count: projects.length },
    { id: 'DevOps & Cloud', label: 'DevOps & Cloud', count: projects.filter(p => p.category === 'DevOps & Cloud').length },
    { id: 'Fullstack', label: 'Fullstack', count: projects.filter(p => p.category === 'Fullstack').length },
    { id: 'Frontend', label: 'Frontend', count: projects.filter(p => p.category === 'Frontend').length },
  ];

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-xs font-semibold text-cyan-400">
          <Terminal size={13} />
          Showcase &bull; {projects.length} Verified Projects
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
          Featured Projects &amp; Architectures
        </h2>
        <p className="text-sm text-muted-foreground max-w-2xl">
          Cloud-native infrastructure, automated CI/CD pipelines, and high-performance full-stack applications.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex overflow-x-auto no-scrollbar pb-1">
        <div className="flex p-1 bg-muted/40 rounded-xl border border-border/50 gap-1">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-3 sm:px-4 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${filter === tab.id
                ? 'bg-background text-foreground shadow-xs'
                : 'text-muted-foreground hover:text-foreground'
                }`}
            >
              <span>{tab.label}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-md ${filter === tab.id ? 'bg-muted text-foreground' : 'text-muted-foreground'
                }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Grid Layout */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Projects;
