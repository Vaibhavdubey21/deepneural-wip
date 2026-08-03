'use client';

import { motion } from 'framer-motion';

const industries = [
  {
    title: 'Real Estate Investment',
    description:
      'Technology that streamlines operations and supports smarter investment decisions.',
  },
  {
    title: 'Financial Services',
    description:
      'Digital solutions that improve efficiency, reporting, and operational accuracy.',
  },
  {
    title: 'Healthcare Operations',
    description:
      'Technology that simplifies workflows and improves operational efficiency.',
  },
  {
    title: 'Enterprise & B2B Businesses',
    description:
      'Technology solutions that modernize operations and support business growth.',
  },
];

const expertise = [
  {
    title: 'Real Estate Investment Solutions',
    description:
      'Technology solutions built for modern Real Estate Investment firms.',
  },
  {
    title: 'Artificial Intelligence',
    description:
      'AI solutions that automate workflows and improve business decision-making.',
  },
  {
    title: 'Custom Software Development',
    description:
      'Scalable software tailored to your business operations and growth.',
  },
  {
    title: 'Business Automation & System Integration',
    description:
      'Connected systems that automate workflows and simplify operations.',
  },
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
            Helping Real Estate Investment Firms and Modern Businesses Grow
            Through Technology
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
              DeepNeural is a technology company specializing in Real Estate
              Investment, Artificial Intelligence, and Custom Software
              Development. We help organizations streamline operations,
              automate business processes, and build scalable technology
              solutions tailored to their business objectives.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed">
              With a strong focus on Real Estate Investment, we develop
              AI-powered solutions, custom software, and business automation
              that improve operational efficiency, simplify complex
              workflows, and support long-term business growth.
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
                Our mission is to help businesses leverage Real Estate
                Investment technology, Artificial Intelligence, and Custom
                Software Development to improve efficiency, simplify
                operations, and support sustainable business growth.
              </p>
              <p className="text-zinc-200 text-lg leading-relaxed italic mt-4">
                We believe technology should deliver measurable business
                value. Every solution we develop is designed to solve real
                challenges, improve productivity, and help organizations make
                more informed decisions.
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
            Industries We Serve
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 border-t border-white/10">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="flex gap-4 py-6 border-b border-white/10"
              >
                <span className="mt-2 h-2 w-2 rotate-45 bg-primary shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">
                    {industry.title}
                  </h4>
                  <p className="text-zinc-400 leading-relaxed text-sm">
                    {industry.description}
                  </p>
                </div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 border-t border-white/10">
            {expertise.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="flex gap-4 py-6 border-b border-white/10"
              >
                <span className="mt-2 h-2 w-2 rotate-45 bg-primary shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="text-zinc-400 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;
