import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import {
  MessageSquare,
  ArrowUpRight,
  Send,
  Phone,
  MapPin,
  Download,
  CheckCircle2,
  Clock,
  Sparkles,
  Mail,
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
  initial: { y: 16, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
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
      action: 'Send direct message',
      color: 'text-amber-400',
    },
    {
      label: 'Direct Phone',
      value: '(+91) 9660-178191',
      href: 'tel:+919660178191',
      icon: Phone,
      action: 'Call or WhatsApp',
      color: 'text-cyan-400',
    },
    {
      label: 'Telegram',
      value: 't.me/Gaurv_03',
      href: 'https://t.me/Gaurv_03',
      icon: MessageSquare,
      action: 'Instant chat',
      color: 'text-sky-400',
    },
    {
      label: 'Location',
      value: 'Jodhpur, Rajasthan, India',
      href: '#',
      icon: MapPin,
      action: 'Open to Remote / Relocation',
      color: 'text-emerald-400',
    },
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      handle: 'gaurav-upadhyay-dev03',
      href: 'https://www.linkedin.com/in/gaurav-upadhyay-dev03/',
      icon: BrandLinkedin,
      color: 'hover:text-blue-400',
    },
    {
      name: 'GitHub',
      handle: 'Gaurv03',
      href: 'https://github.com/Gaurv03',
      icon: BrandGithub,
      color: 'hover:text-white',
    },
    {
      name: 'Medium',
      handle: '@gauravupadhyay786.gu',
      href: 'https://medium.com/@gauravupadhyay786.gu',
      icon: BrandMedium,
      color: 'hover:text-amber-400',
    },
    {
      name: 'Twitter / X',
      handle: '@GaurvUpadhyay',
      href: 'https://x.com/GaurvUpadhyay',
      icon: BrandTwitter,
      color: 'hover:text-sky-400',
    },
    {
      name: 'Instagram',
      handle: '@_.gaurv._',
      href: 'https://instagram.com/_.gaurv._',
      icon: BrandInstagram,
      color: 'hover:text-pink-400',
    },
  ];

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={staggerContainer}
      className="space-y-8 pb-6"
    >
      {/* Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted/60 border border-border text-xs font-medium text-foreground/80">
          <Mail size={13} />
          Contact &bull; Availability
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
          Let's Connect
        </h2>
        <p className="text-sm text-muted-foreground max-w-2xl">
          Available for Cloud &amp; DevOps engineering roles, infrastructure automation, and full-stack development discussions.
        </p>
      </div>

      {/* Main Grid */}
      <div className="space-y-6">
        {/* Direct Channels */}
        <motion.div
          variants={fadeInUp}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {contactChannels.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="p-5 rounded-2xl bg-card/95 border border-border transition-all duration-200 hover:border-slate-400/50 shadow-md flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-muted/60 text-foreground/80 group-hover:text-primary transition-colors">
                  <item.icon size={20} className={item.color} />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground font-medium">
                    {item.label}
                  </div>
                  <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                    {item.value}
                  </div>
                  <div className="text-xs text-muted-foreground/80">
                    {item.action}
                  </div>
                </div>
              </div>
              <ArrowUpRight
                size={16}
                className="text-muted-foreground group-hover:text-primary transition-colors opacity-60 group-hover:opacity-100"
              />
            </a>
          ))}
        </motion.div>

        {/* Resume & Email Action Banner */}
        <motion.div variants={fadeInUp}>
          <Card className="border border-border bg-card/95 rounded-2xl p-5 sm:p-6 shadow-md">
            <CardContent className="p-0 flex flex-col sm:flex-row items-center justify-between gap-5">
              <div className="space-y-1 text-center sm:text-left">
                <div className="inline-flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                  <span className="size-1.5 rounded-full bg-slate-400" />
                  Actively Open to Opportunities
                </div>
                <h3 className="text-base sm:text-lg font-bold text-foreground">
                  Gaurav Upadhyay — Resume &amp; Profile Credentials
                </h3>
                <p className="text-xs text-muted-foreground">
                  3.5+ years of verified software engineering, cloud architecture, and DevOps tooling experience.
                </p>
              </div>

              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <button
                  onClick={copyEmail}
                  className="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-muted/50 border border-border hover:bg-muted text-foreground text-xs font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <CheckCircle2 size={14} className="text-emerald-400" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Sparkles size={14} className="text-amber-400" />
                      Copy Email
                    </>
                  )}
                </button>

                <a
                  href="/gaurav_upadhyay_resume_devops.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-foreground text-background text-xs font-semibold tracking-wide hover:opacity-90 transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Download size={14} />
                  Download Resume
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={fadeInUp} className="space-y-3 pt-2">
          <div className="text-xs font-medium text-muted-foreground">
            Professional &amp; Technical Profiles
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3.5 rounded-xl bg-card/30 border border-border/60 backdrop-blur-md transition-all duration-200 ${social.color} hover:bg-muted/40 shadow-xs flex items-center justify-between group cursor-pointer`}
              >
                <div className="flex items-center gap-2.5">
                  <social.icon size={16} className="text-muted-foreground group-hover:text-inherit transition-colors" />
                  <span className="text-xs font-medium text-foreground">
                    {social.name}
                  </span>
                </div>
                <ArrowUpRight
                  size={13}
                  className="text-muted-foreground group-hover:text-inherit opacity-40 group-hover:opacity-100 transition-opacity"
                />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Timezone Note */}
        <motion.div
          variants={fadeInUp}
          className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground pt-2"
        >
          <Clock size={13} className="text-cyan-400" />
          <span>Primary Timezone: <strong>IST (UTC +5:30)</strong> &bull; Flexible for global collaboration</span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
