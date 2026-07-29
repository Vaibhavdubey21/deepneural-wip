'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    number: '01',
    name: 'Campaign Management',
    description:
      'We build multi-channel investor acquisition campaigns designed around your specific investor economics, not generic tactics. Every campaign is built to attract accredited investors and guide them through a structured journey from first click to funded commitment.',
    href: '/services',
  },
  {
    number: '02',
    name: 'Investor Website Creation',
    description:
      'Your website is the first thing a serious capital allocator evaluates. We build editorial-quality investor platforms that communicate your investment thesis with precision, establish trust from the first click, and convert interest into qualified inquiries.',
    href: '/services',
  },
  {
    number: '03',
    name: 'Drip Sequence Management',
    description:
      'Most investors do not commit on the first interaction. We build smart automated nurture sequences that guide potential investors from initial curiosity to confident decision making through timely, personalized communication.',
    href: '/services',
  },
  {
    number: '04',
    name: 'Video Podcast Production',
    description:
      'We manage the full production workflow so your principals become trusted voices in the real estate investment space without spending their own time on the logistics.',
    href: '/services',
  },
  {
    number: '05',
    name: 'Social Media Management',
    description:
      'We build and manage content programs on LinkedIn and other platforms designed specifically for institutional-minded investors, establishing thought leadership and keeping your firm top of mind.',
    href: '/services',
  },
  {
    number: '06',
    name: 'AI Assisted Presentations',
    description:
      'We transform complex investment data into investor-ready narratives. Pitch decks, offering memorandums, investor updates, quarterly reports, and fully automated AI-generated newsletters.',
    href: '/services',
  },
];

function ServicesSection() {
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
            Our Services
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
            Six Systems. One Goal. More Capital Raised.
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            Every service we offer is built around a single objective: turning
            your firm into a capital-raising machine that runs without consuming
            your principals' time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 * index }}
              className="rounded-2xl border border-gray-200 dark:border-slate-700 shadow-md hover:shadow-xl bg-white dark:bg-zinc-900 p-6 flex flex-col transition-shadow duration-300 group"
            >
              <span className="inline-block text-sm font-bold text-primary bg-primary/10 dark:bg-primary/20 px-3 py-1 rounded-full mb-4 w-fit">
                {service.number}
              </span>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-3">
                {service.name}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm flex-1 mb-5">
                {service.description}
              </p>
              <Link
                href={service.href}
                className="inline-flex items-center gap-1.5 text-primary font-medium text-sm group-hover:gap-2.5 transition-all duration-200"
              >
                Learn more
                <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
