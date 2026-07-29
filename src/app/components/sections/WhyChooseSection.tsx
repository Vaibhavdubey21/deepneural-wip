'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const reasons = [
  {
    title: 'One Integrated Partner Instead of Five Disconnected Ones',
    description:
      'You get a single team that owns your entire investor operations infrastructure. Campaign strategy, website, email sequences, podcast, social media, and presentations all work together because they were built together.',
  },
  {
    title: 'A Predictable Investor Acquisition Funnel',
    description:
      'Instead of relying on referrals and sporadic outreach, you get a structured system that consistently brings new accredited investors into your pipeline, qualifies them, and nurtures them toward a commitment.',
  },
  {
    title: 'Strategy Built for Real Estate Investment',
    description:
      'We do not take a generic marketing playbook and dress it up for real estate. Everything we do is built from the ground up for the way accredited investors think and the trust signals they look for before they commit capital.',
  },
  {
    title: 'Your Principals Stay Focused on Deals',
    description:
      'The biggest cost of doing investor marketing in-house is not the money. It is the hours your best people spend writing emails, building slides, and posting on LinkedIn instead of sourcing deals.',
  },
  {
    title: 'A Premium Brand Presence That Signals Credibility',
    description:
      'Sophisticated investors decide whether to take you seriously before they ever read your numbers. We make sure your website, content, and presentations all communicate: this is a firm that knows what it is doing.',
  },
  {
    title: 'Built Exclusively for Real Estate',
    description:
      'Real estate investment is the only industry we serve with this system. That focus means we understand the compliance nuances, the investor psychology, and the asset-class-specific messaging that generalists always get wrong.',
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
            What Working With Us Actually Looks Like Compared to the Alternative
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-zinc-400">
            Most firms trying to solve their investor marketing problem end up
            with three to five disconnected freelancers, a pile of one-off
            content, and still no real system. Here is the difference when you
            work with us.
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
