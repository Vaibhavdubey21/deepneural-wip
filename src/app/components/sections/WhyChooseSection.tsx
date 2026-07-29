'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const reasons = [
  {
    title: 'Industry-Oriented Perspective',
    description:
      'We take time to understand how your organisation operates before recommending or developing any solution. This helps us create software and digital experiences that reflect the way your business actually works.',
  },
  {
    title: 'Business Before Technology',
    description:
      'Every recommendation starts with your goals, challenges, and priorities—not with a predefined product. The result is technology that supports your organisation instead of requiring your organisation to adapt to the technology.',
  },
  {
    title: 'Connected Thinking',
    description:
      'Web platforms, Artificial Intelligence, software applications, automation, and digital experiences deliver greater value when they work together. We design integrated solutions that connect these capabilities into a cohesive technology ecosystem rather than treating each project as a standalone implementation.',
  },
  {
    title: 'Quality Without Unnecessary Complexity',
    description:
      'We believe good technology should be intuitive, reliable, and easy to maintain. Our focus is on developing solutions that integrate seamlessly into business operations and support long-term adoption across the organisation.',
  },
  {
    title: 'Long-Term Collaboration',
    description:
      'We value lasting business relationships built on transparency, communication, and continuous improvement. As your business evolves, your technology should evolve with it.',
  },
  {
    title: 'A Foundation for Future Growth',
    description:
      'Our approach emphasises scalable architecture, adaptable systems, and thoughtful planning, helping organisations prepare for changing business requirements without frequent redevelopment.',
  },
];

function WhyChooseSection() {
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
            Why DeepNeural
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            A Different Approach to Building Business Technology
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-zinc-400">
            Technology projects are most successful when they begin with a
            clear understanding of the business behind them. At DeepNeural,
            we combine Real Estate Investment, Artificial Intelligence, and
            Custom Software Development to create solutions that are aligned
            with business objectives, practical to use, and designed for
            long-term value.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 * index }}
              className="rounded-2xl border border-slate-700 shadow-md hover:shadow-xl bg-zinc-900 p-6 transition-shadow duration-300"
            >
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle
                  size={20}
                  className="text-primary flex-shrink-0 mt-0.5"
                />
                <h3 className="text-base font-bold text-white">{reason.title}</h3>
              </div>
              <p className="text-zinc-400 leading-relaxed text-sm pl-8">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseSection;
