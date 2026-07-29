'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const whoWeWorkWith = [
  {
    title: 'Multifamily Syndicators and Operators',
    description:
      'You are raising capital from accredited investors and you need a credible, consistent presence that makes people want to invest with you. We build the full system around that goal.',
  },
  {
    title: 'Real Estate Investment Firms',
    description:
      'Whether you are managing a fund, running a joint venture, or syndicating deals, we help you build the investor pipeline and the brand presence that serious capital allocators expect to see.',
  },
  {
    title: 'Assisted Living and Senior Housing Operators',
    description:
      'We help operators in this niche build investor confidence through professional content, clear communication, and a digital presence that reflects the quality of your portfolio.',
  },
  {
    title: 'Developers Seeking Capital Partners',
    description:
      'If you are actively raising equity for development projects, we build the materials, the outreach systems, and the content programs that get qualified partners to the table.',
  },
];

const problems = [
  {
    title: 'Inconsistent Outreach',
    description:
      'Investor communications are scattered across emails, social posts, and one-off conversations with no unified strategy and no way to track what is working. Serious investors notice.',
  },
  {
    title: 'Wasted Principal Time',
    description:
      'Your partners and principals are spending hours every week building decks, writing emails, and posting content instead of closing deals and managing assets.',
  },
  {
    title: 'No Qualified Investor Pipeline',
    description:
      'There is no system in place to consistently attract, qualify, and nurture accredited investors through a predictable funnel.',
  },
  {
    title: 'Outdated Brand Presence',
    description:
      'Your website, your decks, and your content look like they were put together in a hurry. To a sophisticated capital allocator, that signals risk before they even read the numbers.',
  },
];

const funnelSteps = ['Acquire', 'Engage', 'Nurture', 'Convert', 'Scale'];

function RealEstateSection() {
  return (
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
            Real Estate Investment
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
            Most Real Estate Investment Firms Are Leaving Capital on the Table.
            We Help Them Stop.
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            You have great deals. The problem is that serious capital allocators
            do not know enough about you to trust you with their money yet.
            DeepNeural builds the marketing, content, and investor engagement
            infrastructure that changes that.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-8">
            Who We Work With
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whoWeWorkWith.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="rounded-2xl border border-gray-200 dark:border-slate-700 shadow-md hover:shadow-xl bg-white dark:bg-zinc-800 p-6 transition-shadow duration-300"
              >
                <h4 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">
                  {item.title}
                </h4>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-8">
            The Real Reason Good Deals Do Not Get Fully Funded
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {problems.map((problem, index) => (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="rounded-2xl border border-orange-200 dark:border-orange-900/40 shadow-md hover:shadow-xl bg-white dark:bg-zinc-800 p-6 transition-shadow duration-300"
              >
                <div className="flex items-start gap-3 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-orange-500 flex-shrink-0 mt-1.5" />
                  <h4 className="text-lg font-semibold text-zinc-900 dark:text-white">
                    {problem.title}
                  </h4>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm pl-5">
                  {problem.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="rounded-2xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-zinc-800 p-8 md:p-10"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-4">
            One Partner. Six Systems. A Fully Integrated Operations and Investor
            Engagement Engine.
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8 max-w-3xl">
            We replace the patchwork of disconnected freelancers and generic
            tools with one integrated system built specifically for real estate
            investment firms. Our team combines trained offshore operations
            specialists with AI-powered automation to cover every stage of the
            investor journey.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {funnelSteps.map((step, index) => (
              <div key={step} className="flex items-center gap-2">
                <span className="px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 text-primary font-semibold text-sm border border-primary/20">
                  {step}
                </span>
                {index < funnelSteps.length - 1 && (
                  <ArrowRight
                    size={16}
                    className="text-primary flex-shrink-0"
                  />
                )}
              </div>
            ))}
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-200"
          >
            See How Our System Works
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default RealEstateSection;
