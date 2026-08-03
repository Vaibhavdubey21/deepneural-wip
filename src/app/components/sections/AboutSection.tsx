'use client';

import { motion } from 'framer-motion';
import {
  Brain,
  Briefcase,
  Building2,
  Code2,
  HeartPulse,
  Landmark,
  Workflow,
  type LucideIcon,
} from 'lucide-react';

const industries: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Building2,
    title: 'Real Estate Investment',
    description:
      'Technology that streamlines operations and supports smarter investment decisions.',
  },
  {
    icon: Landmark,
    title: 'Financial Services',
    description:
      'Digital solutions that improve efficiency, reporting, and operational accuracy.',
  },
  {
    icon: HeartPulse,
    title: 'Healthcare Operations',
    description:
      'Technology that simplifies workflows and improves operational efficiency.',
  },
  {
    icon: Briefcase,
    title: 'Enterprise & B2B Businesses',
    description:
      'Technology solutions that modernize operations and support business growth.',
  },
];

const expertise: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Building2,
    title: 'Real Estate Investment Solutions',
    description:
      'Technology solutions built for modern Real Estate Investment firms.',
  },
  {
    icon: Brain,
    title: 'Artificial Intelligence',
    description:
      'AI solutions that automate workflows and improve business decision-making.',
  },
  {
    icon: Code2,
    title: 'Custom Software Development',
    description:
      'Scalable software tailored to your business operations and growth.',
  },
  {
    icon: Workflow,
    title: 'Business Automation & System Integration',
    description:
      'Connected systems that automate workflows and simplify operations.',
  },
];

function ListRow({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ x: 4 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: 0.06 * index }}
      className="group relative flex cursor-default items-start gap-3 rounded-xl py-2.5 pl-4 pr-3 transition-colors duration-300 hover:bg-white/[0.05]"
    >
      {/* Left accent bar (animates in on hover) */}
      <span className="absolute left-0 top-1/2 h-7 w-[3px] -translate-y-1/2 origin-center scale-y-0 rounded-full bg-primary opacity-0 transition-all duration-300 ease-out group-hover:scale-y-100 group-hover:opacity-100" />

      {/* Icon with soft blue glow */}
      <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-zinc-400 transition-colors duration-300 group-hover:border-primary/40 group-hover:text-primary">
        <span className="absolute inset-0 rounded-lg bg-primary/40 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-100" />
        <Icon size={18} className="relative z-10" />
      </span>

      <div>
        <h4 className="text-base font-semibold text-white transition-colors duration-300 group-hover:text-primary">
          {title}
        </h4>
        <p className="mt-1 text-sm leading-relaxed text-zinc-400">
          {description}
        </p>
      </div>
    </motion.li>
  );
}

function AboutSection() {
  return (
    <>
      {/* About */}
      <section className="bg-[#0B0B0F] px-4 pt-10 pb-8 text-white md:px-15 md:pt-14">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left: heading + description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-xl"
            >
              <p className="mb-3 text-sm font-medium uppercase tracking-wide text-zinc-400">
                About Us
              </p>
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-white md:text-4xl">
                Helping Real Estate Investment Firms and Modern Businesses Grow
                Through Technology
              </h2>
              <p className="mb-4 text-base leading-relaxed text-zinc-300">
                DeepNeural is a technology company specializing in Real Estate
                Investment, Artificial Intelligence, and Custom Software
                Development. We help organizations streamline operations,
                automate business processes, and build scalable technology
                solutions tailored to their business objectives.
              </p>
              <p className="text-base leading-relaxed text-zinc-300">
                With a strong focus on Real Estate Investment, we develop
                AI-powered solutions, custom software, and business automation
                that improve operational efficiency, simplify complex
                workflows, and support long-term business growth.
              </p>
            </motion.div>

            {/* Right: mission card (fits content, vertically centered) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="w-full lg:max-w-xl lg:justify-self-end"
            >
              <div className="h-fit rounded-2xl border border-l-4 border-white/10 border-l-primary bg-white/[0.03] p-6 backdrop-blur-xl md:p-8">
                <p className="text-base italic leading-relaxed text-zinc-200">
                  Our mission is to help businesses leverage Real Estate
                  Investment technology, Artificial Intelligence, and Custom
                  Software Development to improve efficiency, simplify
                  operations, and support sustainable business growth.
                </p>
                <p className="mt-4 text-base italic leading-relaxed text-zinc-200">
                  We believe technology should deliver measurable business
                  value. Every solution we develop is designed to solve real
                  challenges, improve productivity, and help organizations make
                  more informed decisions.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries & Core Expertise — independent section */}
      <section className="bg-[#0B0B0F] px-4 pb-8 text-white md:px-15 md:pb-10">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Soft radial blue gradient — stays inside this container only */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-0 overflow-hidden rounded-3xl"
              style={{
                background:
                  'radial-gradient(55% 45% at 50% 0%, rgba(59,130,246,0.20) 0%, rgba(59,130,246,0.06) 45%, transparent 75%)',
              }}
            />

            <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] px-6 pt-6 pb-7 backdrop-blur-xl sm:px-8 sm:pt-8 md:px-10 md:pt-10 md:pb-8 lg:px-14 lg:pt-14">
              <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-0 md:divide-x md:divide-white/10">
                {/* Left column: Industries We Serve */}
                <div className="md:pr-8 lg:pr-14">
                  <h3 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
                    Industries We Serve
                  </h3>
                  <p className="mb-6 mt-2 text-sm text-zinc-400">
                    Sectors where our technology delivers measurable impact.
                  </p>
                  <ul className="space-y-4">
                    {industries.map((item, index) => (
                      <ListRow
                        key={item.title}
                        icon={item.icon}
                        title={item.title}
                        description={item.description}
                        index={index}
                      />
                    ))}
                  </ul>
                </div>

                {/* Right column: Core Expertise */}
                <div className="md:pl-8 lg:pl-14">
                  <h3 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
                    Core Expertise
                  </h3>
                  <p className="mb-6 mt-2 text-sm text-zinc-400">
                    The capabilities we bring to every engagement.
                  </p>
                  <ul className="space-y-4">
                    {expertise.map((item, index) => (
                      <ListRow
                        key={item.title}
                        icon={item.icon}
                        title={item.title}
                        description={item.description}
                        index={index}
                      />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default AboutSection;
