'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const reasons = [
  {
    title: 'Industry-Oriented Perspective',
    description:
      'We take time to understand your business before recommending or developing technology solutions.',
  },
  {
    title: 'Business Before Technology',
    description:
      'Every solution is designed around your goals, operational priorities, and business requirements.',
  },
  {
    title: 'Connected Thinking',
    description:
      'We integrate AI, software, automation, and digital platforms into connected technology ecosystems.',
  },
  {
    title: 'Practical & Scalable Solutions',
    description:
      'Our solutions are designed to be reliable, easy to maintain, and built for long-term growth.',
  },
  {
    title: 'Long-Term Partnership',
    description:
      'We work alongside your team, providing ongoing support as your business and technology evolve.',
  },
  {
    title: 'Built for the Future',
    description:
      'Scalable architecture and thoughtful planning help your technology adapt to changing business needs.',
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
            Technology Built Around Your Business
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-zinc-400">
            DeepNeural combines Real Estate Investment expertise, Artificial
            Intelligence, and Custom Software Development to deliver
            technology solutions aligned with your business objectives. Our
            focus is on building practical, scalable solutions that create
            long-term business value.
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
