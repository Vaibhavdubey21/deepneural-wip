'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const stats = [
  {
    value: 'xx+',
    label: 'Years of experience building technology for real estate and enterprise clients',
  },
  {
    value: 'xx+',
    label: 'Custom software and AI projects delivered',
  },
  {
    value: 'xx%',
    label: 'Of our real estate investment clients expand their engagement',
  },
  {
    value: 'xx',
    label: 'Countries where our clients operate',
  },
];

function TestimonialsSection() {
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
            What Our Clients Say
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            We Let Our Results Do the Talking
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-2xl mb-16"
        >
          <div className="rounded-2xl border border-slate-700 shadow-md bg-zinc-900 p-8">
            <div className="mb-4 text-primary">
              <Quote size={32} />
            </div>
            <p className="text-zinc-300 text-lg leading-relaxed italic mb-6">
              &quot;The AI agents developed by DeepNeural have transformed our
              recruitment process, saving us countless hours and helping us find
              better candidates faster.&quot;
            </p>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-bold text-white">Gaurav Gupta</h4>
                <p className="text-sm text-zinc-400">
                  Recruitment Industry Leader, NeoSource
                </p>
              </div>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-yellow-500 fill-current"
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-white mb-8">By the Numbers</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.value + index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="rounded-2xl border border-slate-700 bg-zinc-900 p-6 text-center"
              >
                <p className="text-4xl font-bold text-primary mb-3">
                  {stat.value}
                </p>
                <p className="text-zinc-400 text-sm leading-snug">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
