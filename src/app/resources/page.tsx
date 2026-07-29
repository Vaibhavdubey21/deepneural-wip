'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Brain, Building2, Code } from 'lucide-react';
import Link from 'next/link';
import Button from '../components/Button';
import HeaderSection from '../components/sections/HeaderSection';

const categories = [
  {
    icon: Brain,
    title: 'AI Insights',
    description:
      'Practical perspectives on applying AI to real business problems — automation, document intelligence, and decision support.',
  },
  {
    icon: Building2,
    title: 'Real Estate Investment',
    description:
      'Articles on technology, operations, and automation for real estate investment firms and asset managers.',
  },
  {
    icon: Code,
    title: 'Software Development',
    description:
      'Guides on custom software, system integration, and building scalable digital platforms.',
  },
];

export default function ResourcesPage() {
  return (
    <div>
      <HeaderSection
        title="Resources"
        subtitle="Insights, articles, and guides on AI, real estate investment technology, and software development."
      />

      <section className="py-20 px-4 md:px-15 bg-white dark:bg-black">
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 md:mb-14 max-w-3xl"
          >
            <p className="text-sm font-medium tracking-wide text-zinc-600 dark:text-zinc-400 uppercase mb-3">
              What to Expect
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
              Insights Across AI, Real Estate, and Software
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              We are building out our library of articles across three areas.
              New content is on its way — check back soon.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="rounded-2xl border border-gray-200 dark:border-slate-700 shadow-md hover:shadow-xl bg-white dark:bg-zinc-800 p-6 transition-shadow duration-300"
              >
                <category.icon size={20} className="text-primary mb-3" />
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
                  {category.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                  {category.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border-2 border-dashed border-gray-200 dark:border-slate-700 bg-white dark:bg-zinc-900 p-12 text-center"
          >
            <p className="text-zinc-400 dark:text-zinc-500 text-sm font-medium">
              New articles coming soon
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-15 bg-zinc-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-24 -mt-24 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/20 rounded-full blur-3xl -ml-24 -mb-24 pointer-events-none" />
        <div className="container mx-auto relative z-10 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Have a Question or a Project in Mind?
          </h2>
          <p className="text-lg text-zinc-400 mb-10 leading-relaxed">
            Talk to our team about how AI and custom software can support
            your business.
          </p>
          <Link href="/contact-us">
            <Button
              variant="primary"
              size="lg"
              icon={<ArrowRight size={18} />}
              iconPosition="right"
              className="!text-white shadow-xl transition-all"
            >
              Book a Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
