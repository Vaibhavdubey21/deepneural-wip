'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Quote, Star } from 'lucide-react';
import Link from 'next/link';
import Button from '../components/Button';
import HeaderSection from '../components/sections/HeaderSection';

const industries = [
  {
    title: 'Real Estate Investment',
    description:
      'Investment firms, asset managers, and developers modernizing operations with AI and custom software.',
  },
  {
    title: 'Financial Services',
    description:
      'Financial organizations automating reporting and building data intelligence systems.',
  },
  {
    title: 'Healthcare Operations',
    description:
      'Healthcare providers streamlining administrative workflows and reducing manual effort.',
  },
  {
    title: 'Enterprise & B2B Businesses',
    description:
      'Growing businesses modernizing their technology landscape and internal collaboration.',
  },
];

const testimonials = [
  {
    quote:
      'The AI agents developed by DeepNeural have transformed our recruitment process, saving us countless hours and helping us find better candidates faster.',
    author: 'Gaurav Gupta',
    position: 'Recruitment Industry Leader, NeoSource',
    rating: 5,
  },
  {
    quote:
      "DeepNeural Technologies transformed our vision of a Syadvada Logic AI Chatbot into a powerful and intelligent solution. Their technical expertise, innovative AI architecture, and dedicated development support made a highly complex project successful. The team's professionalism, collaboration, and commitment to excellence exceeded our expectations. I highly recommend DeepNeural Technologies for any advanced AI development project.",
    author: 'Dr. Pragati Jain',
    position: 'Head of Mathematics',
    rating: 5,
  },
  {
    quote:
      'DeepNeural Technologies delivered outstanding digital content and design services for my book publication project. Their team handled everything from creative cover design to technical optimization with exceptional quality and efficiency. Their responsiveness to feedback and attention to detail made the entire process seamless. I sincerely appreciate their professionalism and highly recommend their services.',
    author: 'Ranjana Sehgal',
    position:
      'POSH and CSR Consultant, Independent Director, former Professor and Principal, Author, Secretary – SATYA',
    rating: 5,
  },
];

const stats = [
  { value: 'xx+', label: 'Years of experience building technology for clients' },
  { value: 'xx+', label: 'Custom software and AI projects delivered' },
  { value: 'xx%', label: 'Of clients expand their engagement with us' },
  { value: 'xx', label: 'Countries where our clients operate' },
];

const cardWrapper =
  'rounded-2xl border border-gray-200 dark:border-slate-700 shadow-md hover:shadow-xl bg-white dark:bg-zinc-800 p-6 transition-shadow duration-300';

export default function ClientsPage() {
  return (
    <div>
      <HeaderSection
        title="Our Clients"
        subtitle="See who we work with and what they have to say about partnering with DeepNeural."
      />

      {/* Industries We Serve */}
      <section className="py-20 px-4 md:px-15 bg-white dark:bg-black">
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 md:mb-14 max-w-3xl"
          >
            <p className="text-sm font-medium tracking-wide text-zinc-600 dark:text-zinc-400 uppercase mb-3">
              Who We Work With
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
              Industries We Serve
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.08 * index }}
                className={cardWrapper}
              >
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">
                  {industry.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                  {industry.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
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
              Testimonials
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
              What Our Clients Say
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className={`${cardWrapper} flex flex-col`}
              >
                <Quote size={28} className="text-primary mb-4" />
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed italic mb-6 flex-1">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-zinc-900 dark:text-white text-sm">
                      {testimonial.author}
                    </h4>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">
                      {testimonial.position}
                    </p>
                  </div>
                  <div className="flex flex-shrink-0">
                    {[...Array(testimonial.rating)].map((_, i) => (
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
        </div>
      </section>

      {/* By the Numbers */}
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
              By the Numbers
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              We Let Our Results Do the Talking
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
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
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 md:px-15 bg-white dark:bg-black relative overflow-hidden">
        <div className="container mx-auto relative z-10 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            Ready to Transform Your Business With AI?
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
            Join the growing list of businesses leveraging our AI and software
            expertise to solve complex challenges.
          </p>
          <Link href="/contact-us">
            <Button
              variant="primary"
              size="lg"
              icon={<ArrowRight size={18} />}
              iconPosition="right"
              className="!text-white shadow-xl transition-all"
            >
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
