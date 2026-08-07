'use client';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Award,
  Globe,
  Lightbulb,
  Rocket,
  Target,
  Users,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import AnimatedCounter from '../components/AnimatedCounter';
import Button from '../components/Button';
import SectionHeader from '../components/SectionHeader';
import HeaderSection from '../components/sections/HeaderSection';

const cardWrapper =
  'rounded-lg border border-gray-200 dark:border-slate-700 shadow-md hover:shadow-xl bg-white dark:bg-zinc-800 p-6 transition-shadow duration-300';

const iconBadge =
  'inline-flex p-3 rounded-lg bg-primary/10 dark:bg-primary/20 text-primary mb-4 w-fit';

const values: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description:
      'We design agentic AI systems that break down complexity into intelligent, self-driven workflows. Continuous experimentation and learning shape how we build scalable automation that adapts and evolves.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description:
      'We hold our autonomous systems to the same standards we hold ourselves—precision, reliability, and performance. Every solution is engineered, tested, and delivered with a focus on measurable impact and long-term value.',
  },
  {
    icon: Globe,
    title: 'Responsibility',
    description:
      'We develop and deploy agentic AI with accountability, ethics, and trust at the core. Our responsibility extends beyond technology—driving positive impact for communities, businesses, and society.',
  },
  {
    icon: Zap,
    title: 'Collaboration',
    description:
      'We work as one ecosystem—teams, partners, and clients—aligned toward shared outcomes. Co-creation and transparency are embedded in how our AI agents integrate seamlessly into real business workflows.',
  },
];

const stats: { icon: LucideIcon; label: string; value: number }[] = [
  { icon: Zap, label: 'AI Agents Deployed', value: 16 },
  { icon: Users, label: 'Team Members', value: 7 },
  { icon: Globe, label: 'Enterprise Clients', value: 8 },
];

const techApproach = [
  {
    title: 'Deep Learning Foundation',
    description:
      'Our agents are built on advanced neural network architectures, trained on vast datasets to recognize patterns and make intelligent decisions.',
  },
  {
    title: 'Reinforcement Learning',
    description:
      'We use reinforcement learning techniques to enable our agents to learn from experiences and continuously improve their performance over time.',
  },
  {
    title: 'Knowledge Integration',
    description:
      'Our systems integrate with your existing knowledge bases and data sources, leveraging your institutional knowledge to make better decisions.',
  },
  {
    title: 'Human-in-the-Loop Design',
    description:
      'We design our AI agents to work collaboratively with humans, providing transparency into decision-making and allowing for oversight.',
  },
  {
    title: 'Continuous Improvement',
    description:
      'Our agents are constantly learning and evolving, adapting to new data and changing business conditions to deliver ever-improving results.',
  },
];

const AboutPage: React.FC = () => {
  return (
    <div>
      <HeaderSection
        title="About DeepNeural"
        subtitle="Helping real estate investment firms and modern businesses
            grow through Artificial Intelligence and Custom Software Development"
      />

      {/* Vision & Mission */}
      <section className="py-16 px-4 sm:px-6 md:px-12 bg-white dark:bg-black">
        <div className="container mx-auto relative z-10">
          <SectionHeader
            subheading="What drives us"
            heading="Vision & Mission"
            description="The principles that guide how we build autonomous AI agents—responsibly, reliably, and at scale."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={cardWrapper}
            >
              <div className={iconBadge}>
                <Rocket size={24} />
              </div>
              <p className="text-xs font-bold tracking-wide text-primary uppercase mb-2">
                Our Vision
              </p>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">
                Defining the Future of Intelligent Automation.
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm mb-4">
                To become a leading technology partner for real estate
                investment firms and modern businesses, helping them
                modernize operations, elevate decision-making, and achieve
                breakthrough performance through AI, custom software, and
                automation.
              </p>
              <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-500 italic border-t border-gray-200 dark:border-slate-700 pt-4">
                &quot;We envision technology as a trusted partner in every
                organization—practical when applied, transparent always, and
                guided by real business needs.&quot;
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className={cardWrapper}
            >
              <div className={iconBadge}>
                <Target size={24} />
              </div>
              <p className="text-xs font-bold tracking-wide text-primary uppercase mb-2">
                Our Mission
              </p>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">
                Turning AI Innovation into Everyday Impact.
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm mb-4">
                Our mission is to help businesses leverage Real Estate
                Investment technology, Artificial Intelligence, and Custom
                Software Development to improve efficiency, simplify
                operations, and support sustainable growth. By building
                scalable solutions across real estate, healthcare, financial
                services, and enterprise teams, we help businesses operate
                smarter, faster, and more efficiently.
              </p>
              <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-500 italic border-t border-gray-200 dark:border-slate-700 pt-4">
                &quot;We build technology that works alongside teams—taking on
                repetitive and complex tasks so people can focus on creative
                and strategic work.&quot;
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4 sm:px-6 md:px-12 bg-blue-50 dark:bg-zinc-900">
        <div className="container mx-auto relative z-10">
          <SectionHeader
            subheading="What guides everything we do"
            heading="Our Core Values"
            description="The principles that guide everything we do at DeepNeural."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.08 * index }}
                className={cardWrapper}
              >
                <div className={iconBadge}>
                  <value.icon size={22} />
                </div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 px-4 sm:px-6 md:px-12 bg-white dark:bg-black">
        <div className="container mx-auto relative z-10">
          <SectionHeader
            subheading="Meet the team"
            heading="Our Leadership Team"
            description="Founded by industry veterans with decades of experience in technology, consulting, and AI innovation, our leadership team brings together unmatched expertise and vision."
          />

          <div className="max-w-5xl mx-auto mt-4">
            <div className="flex flex-col md:flex-row gap-10 md:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="w-full md:w-[300px] shrink-0 mx-auto md:mx-0"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-slate-700">
                  <Image
                    src="/img.jpeg"
                    alt="Vivek Saraf"
                    width={500}
                    height={500}
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="w-full grow flex gap-6"
              >
                <div className="w-1 bg-primary rounded-full shrink-0" />

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white leading-tight">
                      <span className="text-primary">Vivek Saraf</span> –
                      Founder & CEO
                    </h3>
                    <p className="mt-4 text-base md:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      AI entrepreneur and technology leader and an{' '}
                      <span className="text-zinc-900 dark:text-white font-semibold">
                        IIT Kanpur
                      </span>{' '}
                      alumnus with{' '}
                      <span className="text-zinc-900 dark:text-white font-semibold">
                        23+ years
                      </span>{' '}
                      of experience in enterprise tech, AI automation, and
                      consulting—shaping DeepNeural&apos;s product and
                      innovation roadmap.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-zinc-900 dark:text-white">
                      Our Leadership & Team
                    </h3>
                    <p className="mt-3 text-base md:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      Backed by talented{' '}
                      <span className="text-zinc-900 dark:text-white font-semibold">
                        IITian&apos;s
                      </span>{' '}
                      and seasoned technologists driving AI innovation,
                      product engineering, and enterprise-grade delivery. We
                      are a fast-growing AI start up with{' '}
                      <span className="text-zinc-900 dark:text-white font-semibold">
                        7+ members
                      </span>{' '}
                      strong team.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats and Achievements */}
      <section className="py-16 px-4 sm:px-6 md:px-12 bg-blue-50 dark:bg-zinc-900">
        <div className="container mx-auto relative z-10">
          <SectionHeader
            subheading="Our impact"
            heading="DeepNeural by the Numbers"
            description="Our growth and impact since 2018."
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.08 * index }}
                className={`${cardWrapper} text-center`}
              >
                <div className={`${iconBadge} mx-auto`}>
                  <stat.icon size={22} />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  <AnimatedCounter value={stat.value} />+
                </div>
                <div className="text-zinc-500 dark:text-zinc-400 font-medium uppercase tracking-wide text-xs">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Technology Approach */}
      <section className="py-16 px-4 sm:px-6 md:px-12 bg-white dark:bg-black">
        <div className="container mx-auto relative z-10">
          <SectionHeader
            subheading="How we build"
            heading="Our Technology Approach"
            description="How we build practical AI and software solutions that deliver real business value."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {techApproach.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.08 * index }}
                className={cardWrapper}
              >
                <span className="inline-block text-sm font-bold text-primary bg-primary/10 dark:bg-primary/20 px-3 py-1 rounded-full mb-4 w-fit">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 md:px-12 bg-zinc-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-24 -mt-24 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/20 rounded-full blur-3xl -ml-24 -mb-24 pointer-events-none" />
        <div className="container mx-auto relative z-10 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Us on Our Mission
          </h2>
          <p className="text-lg text-zinc-400 mb-10 leading-relaxed">
            Partner with DeepNeural to transform your business with AI,
            custom software, and automation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact-us">
              <Button
                variant="primary"
                size="lg"
                icon={<ArrowRight size={18} />}
                iconPosition="right"
                className="!text-white shadow-xl transition-all"
              >
                Contact Our Team
              </Button>
            </Link>
            <Link href="/services">
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 transition-colors"
              >
                Explore Our Solutions
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
