'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import BentoDemo from '../components/BentoDemo';
import Button from '../components/Button';
import HeaderSection from '../components/sections/HeaderSection';

const useCases = [
  'Automate repetitive business workflows and reduce manual effort',
  'Build AI-powered tools for document processing, search, and decision support',
  'Design custom software platforms tailored to specific business processes',
  'Connect existing systems through integration and data synchronization',
  'Create scalable digital platforms that support long-term business growth',
  'Modernize operations for real estate investment, healthcare, financial services, and enterprise teams',
];

export default function OurWorkPage() {
  return (
    <div>
      <HeaderSection
        title="Our Work"
        subtitle="Real projects, real use cases, and real results across AI, software development, and business automation."
      />

      {/* Featured Projects */}
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
              Featured Projects
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
              Real Projects. Real Results.
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              A look at some of the platforms and AI solutions we have built
              for clients across different industries.
            </p>
          </motion.div>
          <BentoDemo />
        </div>
      </section>

      {/* Use Cases */}
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
              Use Cases
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
              What We Help Businesses Do
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.08 * index }}
                className="flex items-start gap-3"
              >
                <CheckCircle
                  size={18}
                  className="text-primary flex-shrink-0 mt-0.5"
                />
                <span className="text-zinc-700 dark:text-zinc-300 text-base">
                  {useCase}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 md:px-15 bg-zinc-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-24 -mt-24 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/20 rounded-full blur-3xl -ml-24 -mb-24 pointer-events-none" />
        <div className="container mx-auto relative z-10 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
            Ready to Build Something With Us?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact-us">
              <Button
                variant="primary"
                size="lg"
                icon={<ArrowRight size={18} />}
                iconPosition="right"
                className="!text-white shadow-xl transition-all"
              >
                Book a Consultation
              </Button>
            </Link>
            <Link href="/services">
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 transition-colors"
              >
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
