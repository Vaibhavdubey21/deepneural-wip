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
  description?: string;
  image?: string;
}[] = [
  {
    category: 'Content Automation',
    categoryColor: 'bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300',
    title: 'NeuRal @rt — Autonomous Real Estate Content Engine',
    description:
      "A multitenant AI platform that autonomously researches, writes, validates, and publishes a fully-cited real estate market newsletter every day — delivered through each client's own branded email and CRM with zero manual operations and complete data isolation.",
    image: '/neuralart.png',
  },
  { category: 'Fund Management', categoryColor: 'bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300' },
  { category: 'Senior Housing', categoryColor: 'bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300' },
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
                <h3 className="text-base font-bold text-zinc-900 dark:text-white mb-2">
                  {project.title ?? 'TBD'}
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                  {project.description ?? 'TBD'}
                </p>
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
