'use client';

import {
  Coverflow,
  CoverflowControls,
  CoverflowItem,
} from '@/components/motion-ui/coverflow';
import { DrawOutlineButton } from '@/components/ui/draw-outline-button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    number: '01',
    name: 'Campaign Strategy and Execution',
    description:
      'Build multi-channel investor acquisition campaigns designed to attract, engage, and convert accredited investors.',
    href: '/services',
  },
  {
    number: '02',
    name: 'Business Website Development',
    description:
      'Develop high-performance investor websites that build credibility and generate qualified inquiries.',
    href: '/services',
  },
  {
    number: '03',
    name: 'Drip Sequence Management',
    description:
      'Automate investor follow-up with personalized nurture sequences that strengthen engagement.',
    href: '/services',
  },
  {
    number: '04',
    name: 'AI-Powered Video Podcast Production',
    description:
      'Produce professional video podcasts that position your leadership as trusted industry voices.',
    href: '/services',
  },
  {
    number: '05',
    name: 'Social Media Marketing',
    description:
      'Build thought leadership through consistent, investor-focused content across social platforms.',
    href: '/services',
  },
  {
    number: '06',
    name: 'AI-Assisted Presentation Design',
    description:
      'Create investor-ready pitch decks, reports, presentations, and AI-generated newsletters.',
    href: '/services',
  },
  {
    number: '07',
    name: 'Lead Generation',
    description:
      'Generate qualified business opportunities through targeted lead generation strategies.',
    href: '/services',
  },
  {
    number: '08',
    name: 'CRM Automation',
    description:
      'Automate customer journeys, streamline workflows, and improve lead management.',
    href: '/services',
  },
  {
    number: '09',
    name: 'Custom Business & Technology Solutions',
    description:
      'We design tailored technology and operational solutions that address specific business challenges, improve efficiency, and support evolving business needs.',
    href: '/services',
  },
];

function ServicesSection() {
  return (
    <section className="pt-8 pb-8 px-4 sm:px-6 md:px-12 bg-white dark:bg-black">
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 md:mb-8 max-w-3xl"
        >
          <p className="text-sm font-medium tracking-wide text-zinc-600 dark:text-zinc-400 uppercase mb-3">
            Our Services
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
            Nine Solutions. One Goal. Business Growth.
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            We help Real Estate Investment firms strengthen their digital
            capabilities through Artificial Intelligence, Custom Software
            Development, Business Automation, and strategic digital solutions
            that improve operations, investor engagement, and business
            growth.
          </p>
        </motion.div>

        <Coverflow
          rotation={22}
          aria-label="Our services. Use the left and right arrow keys to navigate."
          items={services.map((service, index) => (
            <CoverflowItem
              key={service.number}
              label={`Service ${index + 1} of ${services.length}: ${service.name}`}
            >
              <figure className="flex h-[280px] flex-col rounded-2xl border border-gray-200 bg-white p-6 text-left shadow-2xl dark:border-slate-700 dark:bg-zinc-900 md:h-[250px]">
                <span className="mb-3 w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary dark:bg-primary/20">
                  {service.number}
                </span>
                <h3 className="mb-2 text-lg font-bold text-zinc-900 dark:text-white">
                  {service.name}
                </h3>
                <p className="mb-4 flex-1 overflow-hidden text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {service.description}
                </p>
                <DrawOutlineButton
                  as={Link}
                  href={service.href}
                  className="-ml-4 w-fit text-sm"
                >
                  Learn more
                  <ArrowRight size={14} />
                </DrawOutlineButton>
              </figure>
            </CoverflowItem>
          ))}
        >
          <CoverflowControls
            announce={(i, total) =>
              `Showing service ${i + 1} of ${total}: ${services[i].name}`
            }
            prevLabel="Previous service"
            nextLabel="Next service"
            dotsLabel="Choose a service"
          />
        </Coverflow>
      </div>
    </section>
  );
}

export default ServicesSection;
