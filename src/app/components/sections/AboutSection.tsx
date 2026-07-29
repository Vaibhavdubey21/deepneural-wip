'use client';

import { motion } from 'framer-motion';

const industries = [
  {
    title: 'Real Estate Investment',
    description:
      'We build deal management tools, AI-powered analytics platforms, and automation systems for investment firms, asset managers, property managers, and developers across multifamily, industrial, office, and mixed-use asset classes.',
  },
  {
    title: 'Financial Services',
    description:
      'We help financial teams automate reporting, build data intelligence systems, and integrate AI into their analysis workflows.',
  },
  {
    title: 'Healthcare Operations',
    description:
      'We work with healthcare organizations to streamline administrative processes, automate documentation workflows, and build data systems that improve operational visibility.',
  },
  {
    title: 'Enterprise and B2B Technology',
    description:
      'We build internal tools, data platforms, and custom software for enterprise teams that have outgrown off-the-shelf solutions.',
  },
];

const expertise = [
  'Artificial Intelligence and Machine Learning',
  'Custom Software Development',
  'Business Process Automation',
  'System Integration and Data Architecture',
];

function AboutSection() {
  return (
    <section className="py-20 px-4 md:px-15 bg-zinc-950 text-white">
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 md:mb-14 max-w-3xl"
        >
          <p className="text-sm font-medium tracking-wide text-zinc-400 uppercase mb-3">
            About Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            We Are DeepNeural. We Build Technology That Solves Real Business
            Problems.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              DeepNeural is a custom software and artificial intelligence company
              based in the United States. We work with businesses that are
              serious about using technology as a competitive advantage, not just
              as a cost center. Our team brings together engineers, AI
              specialists, and product thinkers who understand both the technical
              side and the business side of building software that actually gets
              used.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed">
              We are not a generalist agency that takes any project that comes
              through the door. We focus on industries where data complexity,
              process efficiency, and intelligent automation can make a
              meaningful difference. Real estate investment is one of our
              deepest areas of focus, and it is the industry where we have
              delivered some of our most impactful work.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="border-l-4 border-primary bg-zinc-900 p-6 rounded-r-xl">
              <p className="text-zinc-200 text-lg leading-relaxed italic">
                Our mission is to make advanced technology accessible and
                practical for businesses that need it most. We believe the gap
                between what AI and custom software can do and what most
                companies are actually using is enormous. We exist to close that
                gap.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-10"
        >
          <h3 className="text-2xl font-bold text-white mb-8">
            Industries Served
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="rounded-2xl border border-slate-700 shadow-md hover:shadow-xl bg-zinc-900 p-6 transition-shadow duration-300"
              >
                <h4 className="text-lg font-semibold text-white mb-3">
                  {industry.title}
                </h4>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  {industry.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-white mb-8">Core Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {expertise.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="flex items-center gap-3"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-primary flex-shrink-0" />
                <span className="text-zinc-300 text-base">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;
