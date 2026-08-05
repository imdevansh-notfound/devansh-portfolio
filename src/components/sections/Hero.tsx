import { motion } from 'framer-motion';
import { ArrowDownRight, BriefcaseBusiness, Code2, Mail } from 'lucide-react';
import type { ReactNode } from 'react';
import portrait480 from '../../assets/devansh-portrait-480.webp';
import portrait720 from '../../assets/devansh-portrait-720.webp';
import { links } from '../../data/portfolio';

const Action = ({ href, children }: { href: string; children: ReactNode }) => (
  <a
    className="focus-ring inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
    href={href}
  >
    {children}
  </a>
);

export function Hero() {
  return (
    <section className="container-page flex min-h-[calc(100vh-4rem)] items-center py-20">
      <div className="grid w-full items-center gap-14 lg:grid-cols-[1.2fr_.8fr]">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="eyebrow">Based in India</p>
          <h1 className="font-['Poppins'] text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl">
            Devansh<br /><span className="text-accent">Tiwari.</span>
          </h1>
          <p className="mt-6 text-xl font-medium text-gray-700 dark:text-slate-200">Aspiring Software Engineer</p>
          <p className="mt-3 max-w-xl text-lg leading-8 text-muted dark:text-slate-400">B.Tech Computer Science Engineering student focused on building thoughtful software and learning the foundations behind it.</p>
          <p className="mt-4 text-sm font-medium text-muted dark:text-slate-400">Python <span aria-hidden>•</span> DSA in C++ <span aria-hidden>•</span> AI <span aria-hidden>•</span> Full Stack Development</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Action href="#projects">View projects <ArrowDownRight size={17} /></Action>
            <Action href={links.email}>Contact <Mail size={16} /></Action>
            <a aria-label="GitHub" className="focus-ring rounded-lg border border-gray-200 p-2.5 transition hover:bg-gray-50 dark:border-slate-700 dark:hover:bg-slate-900" href={links.github}><Code2 size={20} /></a>
            <a aria-label="LinkedIn" className="focus-ring rounded-lg border border-gray-200 p-2.5 transition hover:bg-gray-50 dark:border-slate-700 dark:hover:bg-slate-900" href={links.linkedin}><BriefcaseBusiness size={20} /></a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative mx-auto w-full max-w-sm">
          <div aria-hidden className="absolute inset-8 -z-10 rounded-full bg-blue-200/45 blur-3xl dark:bg-blue-950/45" />
          <div className="aspect-square rounded-full border border-gray-200 bg-white p-2 shadow-card dark:border-slate-700 dark:bg-slate-900">
            <picture>
              <source media="(max-width: 640px)" srcSet={portrait480} />
              <img
                src={portrait720}
                srcSet={`${portrait480} 480w, ${portrait720} 720w`}
                sizes="(max-width: 640px) 80vw, (max-width: 1024px) 55vw, 384px"
                width={720}
                height={720}
                fetchPriority="high"
                decoding="async"
                alt="Devansh Tiwari, aspiring software engineer"
                className="h-full w-full rounded-full object-cover object-center"
              />
            </picture>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
