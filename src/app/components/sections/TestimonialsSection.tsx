'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote:
      'The AI agents developed by DeepNeural have transformed our recruitment process, saving us countless hours and helping us find better candidates faster.',
    author: 'Gaurav Gupta',
    position: 'Recruitment Industry Leader, NeoSource',
  },
  {
    quote:
      "DeepNeural Technologies transformed our vision of a Syadvada Logic AI Chatbot into a powerful and intelligent solution. Their technical expertise, innovative AI architecture, and dedicated development support made a highly complex project successful.",
    author: 'Dr. Pragati Jain',
    position: 'Head of Mathematics',
  },
  {
    quote:
      'DeepNeural Technologies delivered outstanding digital content and design services for my book publication project. Their responsiveness to feedback and attention to detail made the entire process seamless.',
    author: 'Ranjana Sehgal',
    position: 'POSH & CSR Consultant, Independent Director',
  },
];

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="rounded-2xl border border-slate-700 shadow-md bg-zinc-900 p-8 flex flex-col"
            >
              <div className="mb-4 text-primary">
                <Quote size={32} />
              </div>
              <p className="text-zinc-300 text-base leading-relaxed italic mb-6 flex-1">
                &quot;{testimonial.quote}&quot;
              </p>
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h4 className="font-bold text-white">{testimonial.author}</h4>
                  <p className="text-sm text-zinc-400">{testimonial.position}</p>
                </div>
                <div className="flex shrink-0">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="text-yellow-500 fill-current"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-white mb-8">DeepNeural at a Glance</h3>
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
