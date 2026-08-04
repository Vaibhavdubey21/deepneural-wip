'use client';

import { motion } from 'framer-motion';

const techCategories = [
  {
    label: 'Workflow Automation',
    tools: 'n8n',
    description:
      'Automates workflows connecting every part of your investor operations system.',
  },
  {
    label: 'CRM and Investor Nurturing',
    tools: 'GoHighLevel (GHL)',
    description:
      'Manages your investor pipeline from first contact through funded commitment.',
  },
  {
    label: 'AI Content Creation',
    tools: 'Claude and DeepSeek',
    description:
      'Powers research, writing, and content generation for newsletters, campaigns, and investor communications.',
  },
  {
    label: 'AI Video and Voice',
    tools: 'HeyGen and ElevenLabs',
    description:
      'Professional AI-generated videos and natural-sounding voiceovers for your content and podcast.',
  },
  {
    label: 'Development and Infrastructure',
    tools: 'React, Next.js, Python, AWS',
    description:
      'The technology foundation behind your investor website and any custom platforms we build.',
  },
  {
    label: 'Integrations',
    tools: 'Zapier, Yardi, MRI, CoStar',
    description:
      'Connects your existing systems so investor data and marketing activity flow into one coherent picture.',
  },
];

function TechStackSection() {
  return (
    <section className="pt-16 pb-6 px-4 sm:px-6 md:px-12 bg-blue-50 dark:bg-zinc-900">
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 md:mb-10 max-w-3xl"
        >
          <p className="text-sm font-medium tracking-wide text-zinc-600 dark:text-zinc-400 uppercase mb-3">
            Technology
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
            The AI Tools and Operational Infrastructure Behind Our System
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            Our technology stack combines Artificial Intelligence, modern
            development frameworks, automation platforms, and cloud
            infrastructure to build secure, scalable, and connected solutions
            for Real Estate Investment firms and other businesses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {techCategories.map((category, index) => (
            <motion.div
              key={category.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 * index }}
              className="rounded-lg border border-gray-200 dark:border-slate-700 shadow-md hover:shadow-xl bg-white dark:bg-zinc-800 p-6 transition-shadow duration-300"
            >
              <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-2">
                {category.label}
              </p>
              <h3 className="text-lg font-bold text-primary mb-3">
                {category.tools}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                {category.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStackSection;
