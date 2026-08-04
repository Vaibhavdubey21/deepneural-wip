'use client';

import {
  CardTransformed,
  CardsContainer,
  ContainerScroll,
  ReviewStars,
} from '@/components/blocks/animated-cards-stack';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 'gaurav-gupta',
    quote:
      'The AI agents developed by DeepNeural have transformed our recruitment process, saving us countless hours and helping us find better candidates faster.',
    author: 'Gaurav Gupta',
    position: 'Recruitment Industry Leader, NeoSource',
    rating: 5,
  },
  {
    id: 'pragati-jain',
    quote:
      'DeepNeural Technologies transformed our vision of a Syadvada Logic AI Chatbot into a powerful and intelligent solution. Their technical expertise, innovative AI architecture, and dedicated development support made a highly complex project successful.',
    author: 'Dr. Pragati Jain',
    position: 'Head of Mathematics',
    rating: 5,
  },
  {
    id: 'ranjana-sehgal',
    quote:
      'DeepNeural Technologies delivered outstanding digital content and design services for my book publication project. Their responsiveness to feedback and attention to detail made the entire process seamless.',
    author: 'Ranjana Sehgal',
    position: 'POSH & CSR Consultant, Independent Director',
    rating: 5,
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

function getInitials(name: string) {
  return name
    .replace(/^Dr\.\s*/i, '')
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

function TestimonialsSection() {
  return (
    <section className="pt-0 pb-16 px-4 sm:px-6 md:px-12 bg-zinc-950 text-white">
      <ContainerScroll className="h-[180vh]">
        <div className="sticky left-0 top-0 flex h-svh w-full items-center">
          <div className="container mx-auto grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-xl"
            >
              <p className="text-sm font-medium tracking-wide text-zinc-400 uppercase mb-3">
                What Our Clients Say
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                We Let Our Results Do the Talking
              </h2>
            </motion.div>

            <CardsContainer className="mx-auto h-[360px] w-full max-w-[380px] sm:h-[340px]">
              {testimonials.map((testimonial, index) => (
                <CardTransformed
                  key={testimonial.id}
                  arrayLength={testimonials.length}
                  index={index + 2}
                  variant="dark"
                  role="article"
                  aria-label={`Testimonial from ${testimonial.author}`}
                  className="gap-4 p-5"
                >
                  <Quote size={24} className="text-primary" />

                  <div className="flex flex-col items-center space-y-3 text-center">
                    <ReviewStars
                      className="text-yellow-500"
                      rating={testimonial.rating}
                    />
                    <blockquote className="text-sm leading-relaxed text-zinc-300 italic">
                      &quot;{testimonial.quote}&quot;
                    </blockquote>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-slate-700 bg-primary/15 text-xs font-bold text-primary">
                      {getInitials(testimonial.author)}
                    </span>
                    <div>
                      <span className="block text-sm font-semibold tracking-tight text-white">
                        {testimonial.author}
                      </span>
                      <span className="block text-xs text-zinc-400">
                        {testimonial.position}
                      </span>
                    </div>
                  </div>
                </CardTransformed>
              ))}
            </CardsContainer>
          </div>
        </div>
      </ContainerScroll>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-white mb-8">
            DeepNeural at a Glance
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.value + index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="rounded-lg border border-slate-700 bg-zinc-900 p-6 text-center"
              >
                <p className="text-4xl font-bold text-primary mb-3">
                  {stat.value}
                </p>
                <p className="text-zinc-400 text-sm leading-snug">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
