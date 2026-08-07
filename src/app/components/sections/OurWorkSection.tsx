'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../Button';

const useCases = [
  'Build a predictable accredited investor acquisition funnel',
  'Automate investor nurture sequences and follow-up communications',
  'Create pitch decks, offering memorandums, and quarterly investor reports',
  'Establish a thought leadership presence on LinkedIn and other platforms',
  'Launch and distribute a video podcast to build investor authority',
  'Generate AI-powered investor newsletters with zero manual assembly',
];

const placeholderProjects: {
  category: string;
  categoryColor: string;
  title?: string;
  subtitle?: string;
  description?: string;
  highlights?: string[];
  image?: string;
}[] = [
  {
    category: 'Content Automation',
    categoryColor: 'bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300',
    title: 'NeuRal @rt — Autonomous Real Estate Content Engine',
    subtitle: 'AI Agents · Multitenant SaaS · Google Cloud',
    description:
      "A multitenant AI platform that autonomously researches, writes, validates, and publishes a fully-cited real estate market newsletter every day — delivered through each client's own branded email and CRM with zero manual operations and complete data isolation.",
    highlights: [
      'Autonomous 5-stage pipeline — decides, researches, writes, validates & delivers with zero human involvement',
      'Self-correcting — automatically rewrites itself when quality checks fail',
      'Researches 8+ live sources, including official U.S. government data APIs',
      'True multitenancy with complete data isolation per client',
      'Self-service dashboard — clients control topics, sources, schedules & branding',
    ],
    image: '/neuralart.png',
  },
  {
    category: 'Private Investment Platform',
    categoryColor: 'bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300',
    title: 'Global Investor Circle',
    subtitle: 'Confidential Real Estate Investment Marketplace',
    description:
      'An invitation-only digital platform connecting accredited investors with institutional developers — featuring role-based dashboards, admin-gated approvals, and secure property/document management, built end-to-end for confidential deal flow.',
    highlights: [
      'Role-based dashboards for Investors, Developers & Admins',
      'Admin-gated approval workflow for users & property listings',
      'Secure, private property & document management (Supabase Storage)',
      'Automated email notifications & CRM lead capture integration',
      'Full audit logging for compliance & transparency',
    ],
  },
  {
    category: 'Marketing Automation',
    categoryColor: 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300',
    title: 'GoldStone Campaign Engine — AI Email Automation',
    description:
      'An AI pipeline that converts raw content into branded, compliance-checked HTML emails and pushes them straight into GoHighLevel as ready-to-send templates — no manual formatting, no missed disclaimers. Built for a real estate investment client to eliminate the back-and-forth of manual email design — from raw idea to a live, on-brand GHL template in minutes instead of hours.',
    highlights: [
      'AI-generated copy & layout from raw client input',
      'Automated CAN-SPAM compliance check before every send',
      'Direct push into GoHighLevel as a ready-to-use template',
      'Consistent, on-brand design every single time',
    ],
  },
];

function OurWorkSection() {
  return (
    <section className="py-16 px-4 sm:px-6 md:px-12 bg-white dark:bg-black">
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 md:mb-10 max-w-3xl"
        >
          <p className="text-sm font-medium tracking-wide text-zinc-600 dark:text-zinc-400 uppercase mb-3">
            Our Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
            Real Projects. Real Results.
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            We have worked with real estate investment teams to build systems
            that changed how they operate.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {placeholderProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`rounded-2xl overflow-hidden bg-white dark:bg-zinc-900 ${
                project.title
                  ? 'border border-gray-200 dark:border-slate-700 shadow-md hover:shadow-xl transition-shadow duration-300'
                  : 'border-2 border-dashed border-gray-200 dark:border-slate-700'
              }`}
            >
              {project.image ? (
                <div className="relative h-40 bg-zinc-100 dark:bg-zinc-800">
                  <Image
                    src={project.image}
                    alt={project.title ?? project.category}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-contain"
                  />
                </div>
              ) : project.title ? (
                <div className="h-40 bg-gradient-to-br from-primary/20 to-primary/5 dark:from-primary/25 dark:to-primary/5 flex items-center justify-center">
                  <Sparkles size={32} className="text-primary" />
                </div>
              ) : (
                <div className="h-40 bg-gray-100 dark:bg-zinc-800 flex items-center justify-center">
                  <span className="text-zinc-400 dark:text-zinc-500 text-sm font-medium">
                    Coming Soon
                  </span>
                </div>
              )}
              <div className="p-5">
                <span
                  className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${project.categoryColor}`}
                >
                  {project.category}
                </span>
                <h3 className="text-base font-bold text-zinc-900 dark:text-white mb-1">
                  {project.title ?? 'TBD'}
                </h3>
                {project.subtitle && (
                  <p className="text-primary text-xs font-semibold mb-2">
                    {project.subtitle}
                  </p>
                )}
                <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                  {project.description ?? 'TBD'}
                </p>
                {project.highlights && (
                  <ul className="mt-3 space-y-1.5">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2">
                        <div className="mt-1.5 h-1 w-1 rounded-full bg-primary shrink-0" />
                        <span className="text-zinc-500 dark:text-zinc-400 text-xs leading-relaxed">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-8">
            Technology Use Cases for Real Estate Investment
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.08 * index }}
                className="flex items-start gap-3"
              >
                <CheckCircle
                  size={18}
                  className="text-primary flex-shrink-0 mt-0.5"
                />
                <span className="text-zinc-700 dark:text-zinc-300 text-base">
                  {useCase}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <Link href="/our-work">
            <Button variant="primary" size="lg" className="!text-white">
              View All Our Work
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default OurWorkSection;
