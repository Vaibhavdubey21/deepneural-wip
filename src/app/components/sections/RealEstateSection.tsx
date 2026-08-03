'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const whoWeWorkWith = [
  {
    title: 'Multifamily Syndicators & Operators',
    description:
      'Technology solutions that improve operations, communication, and workflow efficiency.',
  },
  {
    title: 'Real Estate Investment Firms',
    description:
      'Solutions that streamline operations, centralize information, and strengthen digital capabilities.',
  },
  {
    title: 'Real Estate Developers',
    description:
      'Technology that improves project coordination, document management, and operational efficiency.',
  },
  {
    title: 'Asset Managers & Property Management Companies',
    description:
      'Solutions that improve visibility, automate workflows, and simplify day-to-day operations.',
  },
];

const valueAreas = [
  {
    title: 'Business Operations',
    description:
      'Improve efficiency through connected business processes.',
  },
  {
    title: 'Workflow Automation',
    description:
      'Automate repetitive tasks and improve productivity.',
  },
  {
    title: 'Information Management',
    description:
      'Centralize business information for faster access and better collaboration.',
  },
  {
    title: 'Digital Presence',
    description:
      'Build a professional digital presence that strengthens credibility.',
  },
  {
    title: 'Business Intelligence',
    description:
      'Turn business data into actionable insights.',
  },
  {
    title: 'Scalable Technology',
    description:
      'Build technology that grows with your business.',
  },
];

const approachSteps = [
  'Understand Your Business',
  'Plan the Right Solution',
  'Design & Develop',
  'Integrate & Automate',
  'Support Continuous Improvement',
];

function RealEstateSection() {
  return (
    <section className="pt-12 pb-20 px-4 md:px-15 bg-blue-50 dark:bg-zinc-900">
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch mb-12 md:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-medium tracking-wide text-zinc-600 dark:text-zinc-400 uppercase mb-3">
              Real Estate Investment
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
              Technology That Supports Modern Real Estate Investment Businesses
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 mb-4">
              Real Estate Investment is one of DeepNeural&apos;s core focus
              areas. We help investment firms modernize operations through
              Artificial Intelligence, Custom Software Development, Business
              Automation, and Digital Solutions tailored to the way Real
              Estate Investment businesses operate.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              From streamlining workflows and managing business information to
              strengthening digital capabilities, we develop technology that
              improves operational efficiency and supports long-term growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] lg:aspect-auto h-full min-h-[300px] w-full max-w-md mx-auto lg:max-w-none overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/sideimage.png"
                alt="Real estate investment technology and analytics"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mb-16 max-w-3xl"
        >
          <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
            Understanding Your Business
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Real Estate Investment firms have different investment strategies,
            operational priorities, and growth goals. We build technology that
            aligns with your business, helping teams simplify operations,
            improve collaboration, and make better use of business
            information.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-8">
            Who We Work With
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-primary/15 shadow-xl">
              <Image
                src="/Who%20We%20Work.png"
                alt="Real estate businesses we work with"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* The 4 elements as a clean list */}
            <div className="border-t border-gray-200 dark:border-white/10">
              {whoWeWorkWith.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex gap-4 py-5 border-b border-gray-200 dark:border-white/10"
                >
                  <span className="mt-2 h-2 w-2 rotate-45 bg-primary shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-zinc-900 dark:text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-8">
            Where Technology Creates Value
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {valueAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.08 * index }}
                className="rounded-2xl border border-gray-200 dark:border-slate-700 shadow-md hover:shadow-xl bg-white dark:bg-zinc-800 p-6 transition-shadow duration-300"
              >
                <h4 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">
                  {area.title}
                </h4>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mb-16 max-w-3xl"
        >
          <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
            Bringing Technology Together for Real Estate Investment
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            We combine Artificial Intelligence, Custom Software Development,
            Business Automation, and System Integration to build connected
            technology ecosystems that support efficient, scalable Real Estate
            Investment operations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="rounded-2xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-zinc-800 p-8 md:p-10"
        >
          <p className="text-sm font-medium tracking-wide text-zinc-500 dark:text-zinc-500 uppercase mb-3">
            Our Approach
          </p>
          <div className="flex flex-wrap items-center gap-2 mb-8">
            {approachSteps.map((step, index) => (
              <div key={step} className="flex items-center gap-2">
                <span className="px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 text-primary font-semibold text-sm border border-primary/20">
                  {step}
                </span>
                {index < approachSteps.length - 1 && (
                  <ArrowRight
                    size={16}
                    className="text-primary flex-shrink-0"
                  />
                )}
              </div>
            ))}
          </div>

          <h4 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
            Ready to Modernize Your Real Estate Investment Business?
          </h4>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 max-w-3xl">
            Discover how Artificial Intelligence, Custom Software Development,
            and Business Automation can help streamline operations and support
            long-term growth.
          </p>

          <Link
            href="/real-estate"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-200"
          >
            Explore Our Real Estate Investment Solutions
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default RealEstateSection;
