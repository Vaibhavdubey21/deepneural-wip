'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Button from '../components/Button';
import HeaderSection from '../components/sections/HeaderSection';
import { NewsCards } from '@/components/ui/news-cards';

const projects = [
  {
    id: '1',
    title: 'Recrugence – Smart AI-Powered HR Platform',
    category: 'Human Resources',
    subcategory: 'NeoSource',
    timeAgo: 'Case Study',
    location: 'Client Project',
    image: '/hr%20.png',
    gradientColors: ['from-red-500/20', 'to-orange-500/20'],
    content: [
      'An AI-powered hiring platform that understands resumes, matches candidates to roles, and automates recruitment workflows. Designed to simplify hiring while improving the quality and clarity of candidate selection.',
    ],
  },
  {
    id: '2',
    title: 'AI Dental Imaging SaaS Platform',
    category: 'Healthcare',
    subcategory: '4EDental.com',
    timeAgo: 'Case Study',
    location: 'Client Project',
    image: '/meditech.jpg',
    gradientColors: ['from-blue-500/20', 'to-purple-500/20'],
    content: [
      'A cloud-based AI platform that analyzes dental X-ray images to detect cavities and early-stage dental issues. Supports faster diagnosis and more informed clinical decisions.',
    ],
  },
  {
    id: '3',
    title: 'AI-Driven Digital Marketing Platform',
    category: 'Digital Marketing',
    subcategory: 'Goldstone',
    timeAgo: 'Case Study',
    location: 'Client Project',
    image: '/digital%20marketing.png',
    gradientColors: ['from-purple-500/20', 'to-pink-500/20'],
    content: [
      'Leverages AI to manage content creation, validation, publishing, and lead handling across marketing campaigns. Helps teams run consistent digital marketing efforts with less manual coordination.',
    ],
  },
  {
    id: '4',
    title: 'AI-Powered E-Commerce Recommendation Engine',
    category: 'E-Commerce',
    subcategory: 'Retail Platform',
    timeAgo: 'Case Study',
    location: 'Client Project',
    image: '/E-commerce.png',
    gradientColors: ['from-green-500/20', 'to-emerald-500/20'],
    content: [
      'A sophisticated AI agent that analyzes customer behavior in real-time to provide highly personalized product recommendations, increasing conversion rates and customer satisfaction.',
    ],
  },
  {
    id: '5',
    title: 'Syādvāda Logic Custom GPT',
    category: 'Explainable AI',
    subcategory: 'Dr. Pragati Jain',
    timeAgo: 'Case Study',
    location: 'Client Project',
    image: '/chatgpt1.png',
    gradientColors: ['from-orange-500/20', 'to-amber-500/20'],
    content: [
      'A custom GPT-based conversational system designed to explain AI responses using multi-perspective Syādvāda logic. Helps users understand different viewpoints and contexts.',
    ],
  },
  {
    id: '6',
    title: 'AI Investment Advisor Platform',
    category: 'Finance',
    subcategory: 'Investment Analysis',
    timeAgo: 'Case Study',
    location: 'Client Project',
    image: '/investment%201.png',
    gradientColors: ['from-indigo-500/20', 'to-blue-500/20'],
    content: [
      'An AI-based investment analysis platform that reviews financial documents, earnings data, and market information to provide structured insights for balanced investment decisions.',
    ],
  },
];

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
      <section className="py-16 px-4 sm:px-6 md:px-12 bg-white dark:bg-black">
        <div className="container mx-auto relative z-10">
          <NewsCards
            title="Real Projects. Real Results."
            subtitle="A look at some of the platforms and AI solutions we have built for clients across different industries."
            newsCards={projects}
          />
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 px-4 sm:px-6 md:px-12 bg-blue-50 dark:bg-zinc-900">
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8 md:mb-10 max-w-3xl"
          >
            <p className="text-sm font-medium tracking-wide text-zinc-600 dark:text-zinc-400 uppercase mb-3">
              Use Cases
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
              What We Help Businesses Do
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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
      <section className="py-16 px-4 sm:px-6 md:px-12 bg-zinc-950 text-white relative overflow-hidden">
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
                movingBorder
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
