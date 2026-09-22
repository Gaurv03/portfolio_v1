import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Layout,
  Server,
  Cloud,
  ExternalLink,
  Terminal,
  Activity,
  Layers,
  Cpu,
  CheckCircle2,
  GitBranch,
  ShieldCheck,
  Database,
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
  highlights?: string[];
  tech?: string[];
  devopsType?: 'terraform' | 'cicd' | 'k8s' | 'image-pipeline';
}

export const projects: Project[] = [
  // --- DevOps & Cloud Projects (from Resume) ---
  {
    id: 101,
    title: 'Production-Style AWS Infrastructure with Terraform',
    description:
      'Designed and provisioned a secure, highly available AWS cloud environment using Terraform (Infrastructure as Code) following least-privilege networking and environment isolation practices.',
    category: 'DevOps & Cloud',
    demo: 'https://github.com/Gaurv03',
    github: 'https://github.com/Gaurv03',
    devopsType: 'terraform',
    tech: [
      'Terraform',
      'AWS VPC',
      'Subnets',
      'NAT Gateway',
      'Bastion Host',
      'Security Groups',
      'Three-Tier Architecture',
      'IaC',
    ],
  },
  {
    id: 102,
    title: 'Containerized Application CI/CD Platform',
    description:
      'Automated end-to-end containerized build, test, and deployment workflows with reproducible multi-stage Docker builds and continuous deployment to AWS container services.',
    category: 'DevOps & Cloud',
    demo: 'https://github.com/Gaurv03',
    github: 'https://github.com/Gaurv03',
    devopsType: 'cicd',
    tech: [
      'Docker',
      'Docker Compose',
      'Jenkins',
      'GitHub Actions',
      'AWS ECR',
      'AWS ECS',
      'Multi-Stage Builds',
      'CI/CD',
    ],
  },
  {
    id: 103,
    title: 'Amazon EKS Deployment & Observability Platform (Personal)',
    description:
      'Deployed and operated containerized applications on Amazon EKS using Kubernetes and Helm, implementing Kubernetes-native deployment, rolling releases, and an observability stack with Prometheus & Grafana.',
    category: 'DevOps & Cloud',
    demo: 'https://github.com/Gaurv03',
    github: 'https://github.com/Gaurv03',
    devopsType: 'k8s',
    tech: [
      'Amazon EKS',
      'Kubernetes',
      'Helm',
      'Prometheus',
      'Grafana',
      'ConfigMaps & Secrets',
      'HPA Autoscaling',
      'Observability',
    ],
  },
  {
    id: 104,
    title: 'Cloud-Native Image Processing Platform',
    description:
      'Engineered a scalable cloud architecture for a high-volume surveillance vehicle detection workload, processing and storing 200K+ camera images per day with event-driven automation and centralized monitoring.',
    category: 'DevOps & Cloud',
    demo: 'https://github.com/Gaurv03',
    github: 'https://github.com/Gaurv03',
    devopsType: 'image-pipeline',
    tech: [
      'AWS S3',
      'AWS Lambda',
      'CloudWatch',
      'Docker',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Route 53',
      'IAM',
    ],
  },

  // --- Featured Next.js Project ---
  {
    id: 12,
    title: 'SEEQ – AI-Powered Video Analytics & Surveillance',
    description:
      'Engineered an enterprise AI-powered video analytics and surveillance platform built with Next.js, transforming CCTV infrastructure into intelligent security systems. Delivers real-time ANPR, facial recognition, zonal intrusion alerts, and live camera monitoring feeds through modern high-performance interfaces.',
    category: 'Frontend',
    image: '/seeq.png',
    demo: 'https://seeq.co.in',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'AI Surveillance', 'ANPR', 'Video Analytics'],
  },

  // --- Existing Fullstack & Frontend Projects ---
  {
    id: 1,
    title: 'Alphatopia – Trading Analysis Platform',
    description:
      'Built an interactive stock market analytics dashboard using React.js and Node.js to visualize large volumes of trading and market data through charts, filters, and insights. Enhanced data interpretation with AI-assisted processing and analysis, optimized chart rendering using memoization and caching, and maintained smooth performance with heavy datasets.',
    category: 'Frontend',
    image: '/alphatopia.png',
    demo: 'https://alphatopia.net/',
    tech: ['React.js', 'Node.js', 'Data Visualization', 'Memoization', 'Analytics'],
  },
  {
    id: 10,
    title: 'ElastecTrade',
    description:
      'ElastecTrade is a modern trading platform that enables users to explore and invest in financial markets including crypto and forex through a secure and intuitive interface. It offers real-time insights, seamless transactions, and powerful tools designed for both beginners and experienced traders.',
    category: 'Frontend',
    image: '/elastecTrade.png',
    demo: 'https://elastectrade.com/',
    tech: ['React.js', 'Tailwind CSS', 'Crypto/Forex', 'Real-time Feeds'],
  },
  {
    id: 11,
    title: 'IJOS',
    description:
      'Indian Jewellery Online Store is a comprehensive e-commerce and sourcing platform offering a wide range of traditional and modern Indian jewellery, including Kundan, Polki, and gemstone collections. It also empowers users and businesses with marketplace access, drop-shipping solutions, and jewellery business support tools.',
    category: 'Fullstack',
    image: '/ijos.png',
    demo: 'https://indianjewelleryonlinestore.com/',
    tech: ['Fullstack', 'E-commerce', 'Payment Gateway', 'Catalog Search'],
  },
  {
    id: 3,
    title: 'HRX Brand Platform',
    description:
      'Contributed to frontend and backend development for HRX, improving UI responsiveness and optimizing page load performance by ~25%. Used AI-assisted debugging and optimization to identify performance bottlenecks and refactor components for improved scalability and maintainability.',
    category: 'Fullstack',
    image: '/hrx.png',
    demo: 'https://www.hrxbrand.com/home',
    tech: ['React.js', 'Performance Optimization', 'Fullstack', 'Responsive UI'],
  },
  {
    id: 9,
    title: 'Emotion Unlocked',
    description:
      'Emotion Unlocked is a cutting-edge emotional wellness platform that empowers individuals to understand, track, and improve their mental well-being through AI-powered insights and guided self-care programs.',
    category: 'Fullstack',
    image: '/eu.png',
    demo: 'https://emotion-unlocked-prod.web.app/',
    tech: ['Firebase', 'React.js', 'AI Insights', 'Self-care Engine'],
  },
  {
    id: 6,
    title: 'Courselo – Learning Platform',
    description:
      'Built a comprehensive learning platform using Next.js for the web and a dedicated desktop application using React and Electron. Developed the complete frontend and backend architecture from scratch, leveraging Firebase for seamless data synchronization, authentication, and a robust backend infrastructure.',
    category: 'Fullstack',
    image: '/courselo.png',
    demo: 'https://courselo.co/',
    tech: ['Next.js', 'Electron', 'Firebase', 'Fullstack', 'Authentication'],
  },
  {
    id: 4,
    title: 'NHRDN Platform – Member Management System',
    description:
      'Built a large-scale member management platform with secure data handling, role-based access control, and performance optimizations. Used AI tools for code analysis and refactoring to improve code quality, reduce edge-case bugs, and accelerate development cycles.',
    category: 'Fullstack',
    image: '/nhrdn.png',
    demo: 'https://www.nationalhrd.org/home',
    tech: ['Node.js', 'React.js', 'RBAC', 'Enterprise Systems'],
  },
  {
    id: 5,
    title: 'CaregiverSaathi – Support Platform',
    description:
      'Developed and maintained a caregiver support platform with a focus on accessibility, intuitive UI design, and streamlined admin workflows. Leveraged AI-driven tools to enhance UX flows, validate edge cases, and improve component reusability throughout the application.',
    category: 'Fullstack',
    image: '/caregiver.png',
    demo: 'https://www.caregiversaathi.co.in/home',
    tech: ['React.js', 'UI/UX', 'Admin Workflow', 'Accessibility'],
  },
  {
    id: 8,
    title: 'Borders and Threads',
    description:
      'A modern e-commerce platform built to seamlessly showcase products and drive conversions. Focused on delivering a premium shopping experience with intuitive navigation, engaging visual presentation, and highly optimized frontend performance.',
    category: 'Fullstack',
    image: '/bnt.png',
    demo: 'https://bordersnthreads.com/',
    tech: ['E-commerce', 'React.js', 'Storefront', 'Product Discovery'],
  },
  {
    id: 2,
    title: 'Amora Dashboard – Analytics Platform',
    description:
      'Built an admin analytics dashboard to monitor user activity, engagement metrics, and reports using React.js, Tailwind CSS, and Firebase. Used AI tools to accelerate feature development, refactor components, and enhance UI logic while maintaining clean state management and responsive design.',
    category: 'Frontend',
    image: '/amora.png',
    demo: 'https://www.findamora.com/',
    tech: ['React.js', 'Tailwind CSS', 'Firebase', 'Analytics'],
  },
  {
    id: 7,
    title: 'SBI Youth for India',
    description:
      'A web platform for the SBI Youth for India fellowship program built using Vue.js. The platform is designed to provide a seamless user experience for prospective applicants and alumni, featuring responsive design, interactive elements, and optimized performance.',
    category: 'Fullstack',
    image: '/sbi.png',
    demo: 'https://youthforindia.org/',
    tech: ['Vue.js', 'Fullstack', 'Fellowship Platform', 'Responsive'],
  },
];

const fadeInUp = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

/**
 * DevOps Visual Previews rendered cleanly in CSS/SVG without static image dependencies
 */
const DevOpsPreviewBanner = ({ type }: { type?: string }) => {
  switch (type) {
    case 'terraform':
      return (
        <div className="w-full h-full bg-linear-to-br from-slate-950 via-[#0f172a] to-purple-950/40 p-4 sm:p-5 flex flex-col justify-between font-mono relative overflow-hidden border-b border-border/40">
          {/* Top CLI Header */}
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center gap-1.5">
              <div className="size-2 rounded-full bg-red-500/80" />
              <div className="size-2 rounded-full bg-yellow-500/80" />
              <div className="size-2 rounded-full bg-green-500/80" />
              <span className="text-[10px]  text-muted-foreground ml-2">aws-vpc.tf</span>
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">
              Terraform IaC
            </span>
          </div>

          {/* VPC 3-Tier Architecture Diagram */}
          <div className="my-auto py-2 z-10">
            <div className="rounded-lg border border-purple-500/30 bg-purple-950/20 p-2.5 space-y-2">
              <div className="flex items-center justify-between text-[10px]  text-purple-300 font-bold border-b border-purple-500/20 pb-1">
                <span className="flex items-center gap-1">
                  <Cloud size={11} className="text-amber-400" /> AWS VPC (10.0.0.0/16)
                </span>
                <span className="text-[10px] text-emerald-400">Multi-AZ</span>
              </div>
              <div className="grid grid-cols-3 gap-1.5 text-[10px] ">
                <div className="p-1.5 rounded bg-blue-950/40 border border-blue-500/30 text-blue-300 text-center">
                  <div className="font-bold text-[8px] text-muted-foreground uppercase">Public</div>
                  <div>Bastion & NAT</div>
                </div>
                <div className="p-1.5 rounded bg-purple-950/40 border border-purple-500/30 text-purple-300 text-center">
                  <div className="font-bold text-[8px] text-muted-foreground uppercase">Private App</div>
                  <div>3-Tier EC2 Cluster</div>
                </div>
                <div className="p-1.5 rounded bg-amber-950/40 border border-amber-500/30 text-amber-300 text-center">
                  <div className="font-bold text-[8px] text-muted-foreground uppercase">Private DB</div>
                  <div>RDS Multi-AZ</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Execution Status */}
          <div className="flex items-center justify-between text-[10px]  z-10 text-emerald-400 font-medium">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={11} />
              <span>Apply complete! Resources: 18 added</span>
            </div>
            <span className="text-[10px] text-muted-foreground">0 destroyed</span>
          </div>

          <div className="absolute inset-0 cloud-grid opacity-30 pointer-events-none" />
          <div className="absolute -right-8 -bottom-8 size-28 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />
        </div>
      );

    case 'cicd':
      return (
        <div className="w-full h-full bg-linear-to-br from-slate-950 via-[#091522] to-cyan-950/40 p-4 sm:p-5 flex flex-col justify-between font-mono relative overflow-hidden border-b border-border/40">
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center gap-2">
              <GitBranch size={13} className="text-cyan-400" />
              <span className="text-[10px]  font-bold text-slate-300">CI/CD Pipeline #452</span>
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 flex items-center gap-1">
              <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Automated
            </span>
          </div>

          {/* Pipeline Flow Stages */}
          <div className="my-auto py-2 z-10">
            <div className="grid grid-cols-4 gap-1 relative">
              {[
                { name: 'Checkout', tool: 'Git/GHA', ok: true },
                { name: 'Docker Build', tool: 'Multi-Stage', ok: true },
                { name: 'ECR Push', tool: 'Registry', ok: true },
                { name: 'ECS Deploy', tool: 'Cloud Run', ok: true },
              ].map((stage, i) => (
                <div
                  key={i}
                  className="p-1.5 rounded bg-slate-900/80 border border-cyan-500/30 text-center space-y-0.5"
                >
                  <div className="flex items-center justify-center gap-0.5 text-emerald-400 text-[8px] font-bold">
                    <CheckCircle2 size={9} /> PASS
                  </div>
                  <div className="text-[10px] font-bold text-slate-200 leading-tight">
                    {stage.name}
                  </div>
                  <div className="text-[7px] text-muted-foreground uppercase">{stage.tool}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px]  z-10 text-slate-400">
            <span className="text-cyan-400 font-medium flex items-center gap-1">
              <ShieldCheck size={11} /> Jenkins & GitHub Actions
            </span>
            <span className="text-[10px] text-emerald-400 font-bold">Duration: 2m 18s</span>
          </div>

          <div className="absolute inset-0 cloud-grid opacity-30 pointer-events-none" />
          <div className="absolute -right-6 -bottom-6 size-28 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
        </div>
      );

    case 'k8s':
      return (
        <div className="w-full h-full bg-linear-to-br from-slate-950 via-[#0c1322] to-blue-950/40 p-4 sm:p-5 flex flex-col justify-between font-mono relative overflow-hidden border-b border-border/40">
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center gap-1.5">
              <Cpu size={13} className="text-blue-400" />
              <span className="text-[10px]  font-bold text-slate-300">EKS Cluster Observability</span>
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30">
              Prometheus & Grafana
            </span>
          </div>

          {/* Cluster Telemetry Stats */}
          <div className="my-auto py-2 z-10">
            <div className="grid grid-cols-3 gap-1.5">
              <div className="p-2 rounded bg-slate-900/80 border border-blue-500/30 text-center">
                <div className="text-[8px] uppercase text-muted-foreground font-bold">Cluster</div>
                <div className="text-xs font-black text-emerald-400">HEALTHY</div>
                <div className="text-[7px] text-slate-400">us-east-1</div>
              </div>
              <div className="p-2 rounded bg-slate-900/80 border border-cyan-500/30 text-center">
                <div className="text-[8px] uppercase text-muted-foreground font-bold">Pods</div>
                <div className="text-xs font-black text-cyan-400">48 / 48</div>
                <div className="text-[7px] text-emerald-400">0 Restarts</div>
              </div>
              <div className="p-2 rounded bg-slate-900/80 border border-amber-500/30 text-center">
                <div className="text-[8px] uppercase text-muted-foreground font-bold">Deployments</div>
                <div className="text-xs font-black text-amber-400">Helm v3</div>
                <div className="text-[7px] text-slate-400">HPA Enabled</div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px]  z-10 text-slate-400">
            <span className="flex items-center gap-1 text-emerald-400">
              <Activity size={11} /> Metrics 100% Active
            </span>
            <span className="text-[10px] text-muted-foreground">Rolling Update: 0 Downtime</span>
          </div>

          <div className="absolute inset-0 cloud-grid opacity-30 pointer-events-none" />
          <div className="absolute -left-6 -bottom-6 size-28 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
        </div>
      );

    case 'image-pipeline':
      return (
        <div className="w-full h-full bg-linear-to-br from-slate-950 via-[#1a1105] to-amber-950/40 p-4 sm:p-5 flex flex-col justify-between font-mono relative overflow-hidden border-b border-border/40">
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center gap-1.5">
              <Layers size={13} className="text-amber-400" />
              <span className="text-[10px]  font-bold text-slate-300">Cloud Storage & Ingestion</span>
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
              AWS S3 + Lambda
            </span>
          </div>

          {/* Ingestion Stream Visualization */}
          <div className="my-auto py-2 z-10">
            <div className="p-2 rounded bg-slate-900/80 border border-amber-500/30 space-y-1.5">
              <div className="flex items-center justify-between text-[10px] ">
                <span className="text-slate-300 font-bold flex items-center gap-1">
                  <Database size={10} className="text-amber-400" /> High-Throughput Stream
                </span>
                <span className="text-emerald-400 font-bold">200K+ Images/Day</span>
              </div>
              <div className="grid grid-cols-3 gap-1 text-[8px] text-center">
                <div className="p-1 rounded bg-amber-950/30 border border-amber-500/20 text-amber-200">
                  Camera Capture
                </div>
                <div className="p-1 rounded bg-blue-950/30 border border-blue-500/20 text-blue-200">
                  S3 Object Store
                </div>
                <div className="p-1 rounded bg-purple-950/30 border border-purple-500/20 text-purple-200">
                  Docker + Postgres
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px]  z-10 text-slate-400">
            <span className="flex items-center gap-1 text-amber-400">
              <Activity size={11} /> CloudWatch Telemetry
            </span>
            <span className="text-[10px] text-emerald-400 font-bold">0 Drop Rate</span>
          </div>

          <div className="absolute inset-0 cloud-grid opacity-30 pointer-events-none" />
          <div className="absolute -right-6 -bottom-6 size-28 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
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
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ delay: index * 0.04, duration: 0.4 }}
      className="group relative"
    >
      <div className="block h-full">
        <Card className="h-full bg-card/30 border-border/50 backdrop-blur-xl overflow-hidden hover:border-primary/50 transition-all duration-500 rounded-2xl py-0 flex flex-col justify-between shadow-lg hover:shadow-primary/10">
          {/* Card Media Area */}
          <div className="relative aspect-16/10 overflow-hidden bg-muted/20">
            {isDevOps ? (
              <DevOpsPreviewBanner type={project.devopsType} />
            ) : (
              <>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent opacity-80" />
              </>
            )}

            {/* Category Badge */}
            <div className="absolute top-3.5 left-3.5 flex gap-2 z-20">
              <div
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full backdrop-blur-md border text-[10px] font-black uppercase tracking-wider text-white shadow-md ${isDevOps
                  ? 'bg-amber-500/30 border-amber-400/40 text-amber-200'
                  : project.category === 'Fullstack'
                    ? 'bg-purple-500/30 border-purple-400/40 text-purple-200'
                    : 'bg-blue-500/30 border-blue-400/40 text-blue-200'
                  }`}
              >
                {isDevOps ? (
                  <Cloud size={10} className="text-amber-400" />
                ) : project.category === 'Fullstack' ? (
                  <Server size={10} className="text-purple-400" />
                ) : (
                  <Layout size={10} className="text-blue-400" />
                )}
                {project.category}
              </div>
            </div>

            {/* Hover Action Overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 bg-background/40 backdrop-blur-xs">
              <a
                href={project.demo || project.github || 'https://github.com/Gaurv03'}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 px-5 rounded-full bg-foreground text-background shadow-2xl flex items-center gap-2 hover:scale-105 transition-transform"
              >
                {isDevOps ? (
                  <>
                    <BrandGithub size={18} />
                    <span className="text-xs font-black uppercase tracking-wider">
                      View Architecture / Code
                    </span>
                  </>
                ) : (
                  <>
                    <ExternalLink size={16} />
                    <span className="text-xs font-black uppercase tracking-wider">
                      Live Preview
                    </span>
                  </>
                )}
              </a>
            </div>
          </div>

          {/* Card Content */}
          <CardContent className="p-5 md:p-6 flex flex-col grow space-y-4">
            <div className="space-y-2.5 grow">
              <h3 className="text-lg md:text-xl font-black tracking-tight group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground font-medium leading-relaxed">
                {project.description}
              </p>

              {/* Specific highlights for DevOps projects */}
              {project.highlights && project.highlights.length > 0 && (
                <div className="pt-2 space-y-1.5 border-t border-border/40">
                  <span className="text-[10px]  font-black uppercase tracking-wider text-muted-foreground flex items-center gap-1">
                    <Terminal size={11} className="text-primary" /> Key Infrastructure Deliverables:
                  </span>
                  <ul className="space-y-1">
                    {project.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="text-xs text-foreground/80 flex items-start gap-1.5 leading-snug"
                      >
                        <span className="text-primary mt-0.5">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Tech Stack Chips */}
            {project.tech && (
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/40">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 text-[10px]  font-bold rounded-lg bg-muted/40 border border-border/60 text-muted-foreground group-hover:text-foreground transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </CardContent>

          {/* Bottom Accent Glow */}
          <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        </Card>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  const [filter, setFilter] = useState<'All' | 'DevOps & Cloud' | 'Fullstack' | 'Frontend'>('All');

  const filteredProjects = projects.filter((p) =>
    filter === 'All' ? true : p.category === filter,
  );

  const filterTabs: Array<'All' | 'DevOps & Cloud' | 'Fullstack' | 'Frontend'> = [
    'All',
    'DevOps & Cloud',
    'Fullstack',
    'Frontend',
  ];

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex flex-col items-center text-center md:space-y-8 space-y-4 md:px-6 px-3">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-[10px]  font-black uppercase tracking-[0.3em] text-amber-600 dark:text-amber-400 backdrop-blur-sm"
        >
          <Cloud size={12} fill="currentColor" /> Engineering Showcase
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="text-3xl md:text-5xl font-black tracking-tighter leading-[0.9] mb-2"
        >
          Architected for Scale. <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 via-cyan-400 to-blue-500">
            Engineered for Resilience.
          </span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="text-muted-foreground md:text-lg text-base max-w-2xl font-medium leading-relaxed"
        >
          Explore production-grade cloud architectures, automated CI/CD deployment pipelines,
          observability stacks, and high-performance full-stack web applications.
        </motion.p>
      </div>

      {/* Filter Tabs */}
      <div className="flex justify-center md:mb-14 mb-8 px-4 md:px-6">
        <div className="flex p-1.5 bg-card/60 backdrop-blur-2xl rounded-2xl border border-border/60 shadow-xl overflow-x-auto no-scrollbar max-w-full gap-1">
          {filterTabs.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`relative px-4 md:px-6 py-2 md:py-2.5 text-xs md:text-xs font-black uppercase tracking-wider transition-all rounded-xl whitespace-nowrap cursor-pointer ${filter === f
                ? 'text-foreground'
                : 'text-muted-foreground hover:text-foreground'
                }`}
            >
              <span className="relative z-10 flex items-center gap-1.5">
                {f === 'DevOps & Cloud' && <Cloud size={12} className="text-amber-400" />}
                {f === 'Fullstack' && <Server size={12} className="text-purple-400" />}
                {f === 'Frontend' && <Layout size={12} className="text-blue-400" />}
                {f}
              </span>
              {filter === f && (
                <motion.div
                  layoutId="filter-active"
                  className="absolute inset-0 bg-background border border-border/80 shadow-md"
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
