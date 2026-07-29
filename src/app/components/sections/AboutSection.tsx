'use client';

import { motion } from 'framer-motion';

const industries = [
  {
    title: 'Real Estate Investment',
    description:
      'We help real estate investment firms strengthen their operations with technology that improves collaboration, streamlines investment workflows, centralises business information, and supports informed investment decisions.',
  },
  {
    title: 'Financial Services',
    description:
      'We support financial organisations with digital solutions that simplify reporting, improve operational accuracy, organise business data, and enhance day-to-day financial processes.',
  },
  {
    title: 'Healthcare Operations',
    description:
      'We help healthcare providers improve administrative efficiency by digitising workflows, reducing manual effort, and making operational information easier to manage.',
  },
  {
    title: 'Enterprise & B2B Businesses',
    description:
      'We partner with growing businesses to modernise their technology landscape, improve internal collaboration, and build scalable digital systems that support long-term business growth.',
  },
];

const expertise = [
  {
    title: 'Real Estate Investment Solutions',
    description:
      'We design and develop digital platforms, internal applications, and business tools tailored to the operational needs of real estate investment firms, helping teams work more efficiently and manage information effectively.',
  },
  {
    title: 'Artificial Intelligence',
    description:
      'We build AI-powered capabilities that assist with information analysis, workflow automation, intelligent search, document processing, and decision support for business teams.',
  },
  {
    title: 'Custom Software Development',
    description:
      "We create secure, scalable, and user-focused software applications that are built around each client's unique business processes, operational goals, and future growth plans.",
  },
  {
    title: 'Business Automation & System Integration',
    description:
      'We connect business systems, automate repetitive activities, improve data movement across platforms, and create integrated digital environments that reduce complexity and support efficient operations.',
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
              improve decision-making, and solve business challenges through
              practical, business-focused technology.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Our team combines software engineering, AI, and business
              expertise to develop solutions that fit the way businesses
              operate. Instead of offering one-size-fits-all products, we
              design and build solutions tailored to each client&apos;s goals,
              processes, and long-term growth.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed">
              Real Estate Investment is one of our key focus areas. We work
              with investment firms to improve operational efficiency,
              organize business information, automate workflows, and support
              smarter decision-making. We also help businesses across
              multiple industries adopt AI, build custom software, and
              modernize their operations with scalable digital solutions.
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {expertise.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="rounded-2xl border border-slate-700 shadow-md hover:shadow-xl bg-zinc-900 p-6 transition-shadow duration-300"
              >
                <h4 className="text-lg font-semibold text-white mb-3">
                  {item.title}
                </h4>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;
