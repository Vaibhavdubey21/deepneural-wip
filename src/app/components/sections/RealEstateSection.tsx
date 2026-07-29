'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const whoWeWorkWith = [
  {
    title: 'Multifamily Syndicators & Operators',
    description:
      'Supporting businesses with software, AI, automation, and digital solutions that improve operations, communication, and workflow management.',
  },
  {
    title: 'Real Estate Investment Firms',
    description:
      'Helping investment firms streamline business processes, centralise information, improve collaboration, and strengthen their digital capabilities.',
  },
  {
    title: 'Real Estate Developers',
    description:
      'Building technology that supports project coordination, document management, operational workflows, and business growth.',
  },
  {
    title: 'Asset Managers & Property Management Companies',
    description:
      'Developing solutions that improve operational visibility, organise business information, automate repetitive activities, and support efficient day-to-day management.',
  },
];

const valueAreas = [
  {
    title: 'Business Operations',
    description:
      'Simplify internal processes, reduce manual work, and improve collaboration across teams.',
  },
  {
    title: 'Workflow Automation',
    description:
      'Automate repetitive business activities to save time, improve consistency, and increase productivity.',
  },
  {
    title: 'Information Management',
    description:
      'Organise business information through connected systems that make data easier to access, manage, and use.',
  },
  {
    title: 'Digital Presence',
    description:
      "Strengthen your online presence with a professional website, business content, and digital experiences that reflect your organisation's capabilities.",
  },
  {
    title: 'Business Intelligence',
    description:
      'Transform business data into meaningful insights that support planning, reporting, and informed decision-making.',
  },
  {
    title: 'Scalable Technology',
    description:
      'Build software and digital infrastructure that grows alongside your business and supports future expansion.',
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
    <section className="py-20 px-4 md:px-15 bg-blue-50 dark:bg-zinc-900">
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 md:mb-14 max-w-3xl"
        >
          <p className="text-sm font-medium tracking-wide text-zinc-600 dark:text-zinc-400 uppercase mb-3">
            Real Estate Investment
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
            Technology That Supports Modern Real Estate Investment Businesses
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 mb-4">
            Real Estate Investment is one of DeepNeural&apos;s primary focus
            areas. We help investment firms modernise their operations
            through Artificial Intelligence, Custom Software Development,
            Business Automation, and Digital Solutions designed to support
            the way real estate businesses operate.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            From managing business information and streamlining internal
            workflows to improving digital presence and automating routine
            processes, we develop practical technology that helps investment
            teams work more efficiently, make informed decisions, and support
            long-term business growth.
          </p>
        </motion.div>

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
            Every Real Estate Investment business has its own investment
            strategy, operational processes, and growth objectives. Whether
            you&apos;re acquiring properties, managing assets, working with
            investors, overseeing developments, or expanding your portfolio,
            technology plays an important role in keeping your business
            organised, connected, and scalable. At DeepNeural, we focus on
            building solutions that align with the way Real Estate Investment
            firms operate, helping teams simplify complex processes, improve
            collaboration, and make better use of their business data.
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whoWeWorkWith.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="rounded-2xl border border-gray-200 dark:border-slate-700 shadow-md hover:shadow-xl bg-white dark:bg-zinc-800 p-6 transition-shadow duration-300"
              >
                <h4 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">
                  {item.title}
                </h4>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
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
            Business Automation, System Integration, and Digital Solutions to
            help Real Estate Investment firms build connected, efficient, and
            future-ready businesses. Rather than implementing isolated tools,
            we focus on creating technology ecosystems where software, data,
            automation, and digital platforms work together to support
            everyday business operations.
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
            Ready to Modernise Your Real Estate Investment Business?
          </h4>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 max-w-3xl">
            Let&apos;s discuss how Artificial Intelligence, Custom Software
            Development, and Business Automation can help your business
            operate more efficiently and prepare for future growth.
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
