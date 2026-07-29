'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Button from '../Button';

const articles = [
  {
    category: 'Investor Marketing',
    categoryColor: 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300',
    title:
      'Why Most Real Estate Syndicators Struggle to Raise Capital Even When Their Deals Are Solid',
    preview:
      'The problem is rarely the deal. It is almost always the investor pipeline. Firms that raise capital consistently have one thing in common: a system that runs reliably.',
    href: '/resources',
  },
  {
    category: 'AI in Real Estate',
    categoryColor: 'bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300',
    title:
      'How AI Is Changing the Way Real Estate Investment Firms Communicate With Investors',
    preview:
      'From automated newsletters to AI-generated video updates and personalized email sequences, the firms embracing AI are raising more capital with less manual effort.',
    href: '/resources',
  },
  {
    category: 'Brand and Credibility',
    categoryColor: 'bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300',
    title:
      'The First Thing Accredited Investors Evaluate Before They Ever Read Your Deck',
    preview:
      'It is not your returns. It is not your track record. The very first thing a sophisticated investor uses to judge your firm is your brand presence.',
    href: '/resources',
  },
];

function ResourcesSection() {
  return (
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
            Resources
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
            Insights for Real Estate Investment Leaders
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            We share what we know about investor marketing, AI-powered content,
            and what actually moves accredited investors to commit.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {articles.map((article, index) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="rounded-2xl border border-gray-200 dark:border-slate-700 shadow-md hover:shadow-xl bg-white dark:bg-zinc-900 p-6 flex flex-col transition-shadow duration-300 group"
            >
              <span
                className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-4 w-fit ${article.categoryColor}`}
              >
                {article.category}
              </span>
              <h3 className="text-base font-bold text-zinc-900 dark:text-white mb-3 leading-snug flex-1">
                {article.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-5">
                {article.preview}
              </p>
              <Link
                href={article.href}
                className="inline-flex items-center gap-1.5 text-primary font-medium text-sm group-hover:gap-2.5 transition-all duration-200"
              >
                Read the Article
                <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <Link href="/resources">
            <Button variant="primary" size="lg" className="!text-white">
              Browse All Resources
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default ResourcesSection;
