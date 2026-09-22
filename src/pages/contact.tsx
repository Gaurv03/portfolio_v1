import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import {
  MessageSquare,
  ArrowUpRight,
  Send,
  Phone,
  Cloud,
  MapPin,
  Download,
  CheckCircle2,
  Clock,
  Sparkles,
} from 'lucide-react';
import {
  BrandGithub,
  BrandLinkedin,
  BrandTwitter,
  BrandInstagram,
  BrandMedium,
} from 'tabler-icons-react';
import { useState } from 'react';

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

export const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('gauravupadhyay786.gu@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactChannels = [
    {
      label: 'Email',
      value: 'gauravupadhyay786.gu@gmail.com',
      href: 'mailto:gauravupadhyay786.gu@gmail.com',
      icon: Send,
      action: 'Send Email',
      color: 'text-amber-400',
      bg: 'bg-amber-500/10 border-amber-500/20',
      hoverBorder: 'hover:border-amber-500/50',
    },
    {
      label: 'Direct Phone',
      value: '(+91) 9660-178191',
      href: 'tel:+919660178191',
      icon: Phone,
      action: 'Call Directly',
      color: 'text-cyan-400',
      bg: 'bg-cyan-500/10 border-cyan-500/20',
      hoverBorder: 'hover:border-cyan-500/50',
    },
    {
      label: 'Instant Messaging',
      value: 't.me/Gaurv_03',
      href: 'https://t.me/Gaurv_03',
      icon: MessageSquare,
      action: 'Open Telegram',
      color: 'text-purple-400',
      bg: 'bg-purple-500/10 border-purple-500/20',
      hoverBorder: 'hover:border-purple-500/50',
    },
    {
      label: 'Location & Hub',
      value: 'Jodhpur, Rajasthan, India',
      href: '#',
      icon: MapPin,
      action: 'Available Worldwide (Remote)',
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10 border-emerald-500/20',
      hoverBorder: 'hover:border-emerald-500/50',
    },
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      handle: 'gaurav-upadhyay-dev03',
      href: 'https://www.linkedin.com/in/gaurav-upadhyay-dev03/',
      icon: BrandLinkedin,
      color: 'hover:text-blue-400 hover:border-blue-500/40',
    },
    {
      name: 'GitHub',
      handle: 'Gaurv03',
      href: 'https://github.com/Gaurv03',
      icon: BrandGithub,
      color: 'hover:text-white hover:border-white/40',
    },
    {
      name: 'Medium',
      handle: '@gauravupadhyay786.gu',
      href: 'https://medium.com/@gauravupadhyay786.gu',
      icon: BrandMedium,
      color: 'hover:text-amber-400 hover:border-amber-500/40',
    },
    {
      name: 'Twitter / X',
      handle: '@GaurvUpadhyay',
      href: 'https://x.com/GaurvUpadhyay',
      icon: BrandTwitter,
      color: 'hover:text-sky-400 hover:border-sky-500/40',
    },
    {
      name: 'Instagram',
      handle: '@_.gaurv._',
      href: 'https://instagram.com/_.gaurv._',
      icon: BrandInstagram,
      color: 'hover:text-pink-400 hover:border-pink-500/40',
    },
  ];

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={staggerContainer}
      className="md:space-y-16 space-y-10 md:pb-12 pb-6 relative"
    >
      {/* Hero Header */}
      <div className="flex flex-col items-center text-center md:space-y-6 space-y-4 md:px-6">
        <motion.div
          variants={fadeInUp}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-[10px]  font-black uppercase tracking-[0.25em] text-amber-500 dark:text-amber-400 backdrop-blur-sm"
        >
          <Cloud size={12} fill="currentColor" />
          Get In Touch
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          className="text-3xl md:text-5xl font-black tracking-tighter leading-[0.9] text-foreground"
        >
          Let's Connect & <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 via-cyan-400 to-blue-500">
            Build Something Scalable.
          </span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-muted-foreground md:text-lg text-base max-w-2xl font-medium leading-relaxed"
        >
          Available for Software Engineering and Cloud & DevOps roles, infrastructure automation projects,
          and technical consultations. Reach out through any channel below.
        </motion.p>
      </div>

      {/* Main Contact Grid */}
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Direct Channels Cards */}
        <motion.div
          variants={fadeInUp}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
        >
          {contactChannels.map((item, idx) => (
            <motion.a
              key={idx}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.2 }}
              className={`p-6 rounded-3xl bg-card/40 border border-border/60 backdrop-blur-xl transition-all duration-300 ${item.hoverBorder} shadow-lg hover:shadow-primary/5 flex items-center justify-between group cursor-pointer`}
            >
              <div className="flex items-center gap-4">
                <div className={`p-4 rounded-2xl ${item.bg} ${item.color} group-hover:scale-105 transition-transform`}>
                  <item.icon size={24} />
                </div>
                <div>
                  <span className="text-[10px]  font-black uppercase tracking-wider text-muted-foreground block mb-0.5">
                    {item.label}
                  </span>
                  <span className="text-base md:text-lg font-bold text-foreground group-hover:text-primary transition-colors block">
                    {item.value}
                  </span>
                  <span className="text-xs text-muted-foreground/80 font-medium">
                    {item.action}
                  </span>
                </div>
              </div>
              <ArrowUpRight
                size={20}
                className="text-muted-foreground group-hover:text-primary transition-colors opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </motion.a>
          ))}
        </motion.div>

        {/* Quick Action & Resume Card */}
        <motion.div variants={fadeInUp}>
          <Card className="border-border/60 bg-linear-to-br from-card/60 via-card/30 to-amber-500/5 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
            <CardContent className="p-0 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
              <div className="space-y-2 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-mono font-bold text-emerald-400">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  Ready for Opportunities • Responding within 24 Hours
                </div>
                <h3 className="text-xl md:text-2xl font-black tracking-tight text-foreground">
                  Looking for a verified copy of my credentials?
                </h3>
                <p className="text-sm text-muted-foreground font-medium max-w-xl">
                  Download the latest resume featuring 3.5+ years of verified software engineering experience,
                  cloud architecture specifications, and complete technical toolchains.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
                <button
                  onClick={copyEmail}
                  className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-muted/60 border border-border hover:bg-muted text-foreground text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <CheckCircle2 size={16} className="text-emerald-400" />
                      Email Copied!
                    </>
                  ) : (
                    <>
                      <Sparkles size={16} className="text-amber-400" />
                      Copy Email
                    </>
                  )}
                </button>

                <a
                  href="/gaurav_upadhyay_resume_devops.pdf"
                  download
                  className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-primary text-primary-foreground text-xs font-black uppercase tracking-wider hover:opacity-90 hover:scale-105 transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <Download size={16} />
                  Download Resume
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Social & Technical Networks */}
        <motion.div variants={fadeInUp} className="space-y-4 pt-4">
          <div className="text-center space-y-1">
            <h4 className="text-xs font-black uppercase tracking-[0.25em] text-muted-foreground">
              Technical Networks & Writing
            </h4>
            <p className="text-xs text-muted-foreground">
              Follow my open-source work, cloud articles, and professional updates
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {socialLinks.map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className={`p-4 rounded-2xl bg-card/40 border border-border/60 backdrop-blur-md transition-all duration-300 ${social.color} hover:bg-muted/40 shadow-sm flex items-center justify-between group`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-muted/60 text-muted-foreground group-hover:text-inherit transition-colors">
                    <social.icon size={18} />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-foreground block">
                      {social.name}
                    </span>
                    <span className="text-[10px]  text-muted-foreground font-mono">
                      {social.handle}
                    </span>
                  </div>
                </div>
                <ArrowUpRight
                  size={14}
                  className="text-muted-foreground group-hover:text-inherit opacity-50 group-hover:opacity-100 transition-opacity"
                />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Bottom Timezone / Availability Note */}
        <motion.div
          variants={fadeInUp}
          className="flex items-center justify-center gap-2 text-xs text-muted-foreground pt-4"
        >
          <Clock size={13} className="text-amber-400" />
          <span>Standard Timezone: <strong>IST (UTC +5:30)</strong> • Flexible for overlap with US/EU/APAC teams</span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
