'use client';

import { AnimatePresence, motion } from 'framer-motion';
import {
  ChevronDown,
  Clock,
  Mail,
  MapPin,
  Phone,
  Send,
  type LucideIcon,
} from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import { Spotlight } from '@/components/ui/spotlight-new';
import Button from '../components/Button';
import ContactForm from '../components/ContactForm';
import HeaderSection from '../components/sections/HeaderSection';

const contactInfo: { icon: LucideIcon; title: string; lines: string[] }[] = [
  {
    icon: MapPin,
    title: 'Visit Us',
    lines: ['31, Goyal Nagar, Kanadia Road', 'Indore, India - 452018'],
  },
  {
    icon: Phone,
    title: 'Call Us',
    lines: ['+91 79999 91951'],
  },
  {
    icon: Mail,
    title: 'Email Us',
    lines: ['contact@deepneuraltechnologies.com'],
  },
  {
    icon: Clock,
    title: 'Working Hours',
    lines: ['Monday - Friday: 8:30 AM - 5:00 PM', '(Indian Standard Time)'],
  },
];

const faqs = [
  {
    question: 'How quickly can you deploy an AI or software solution?',
    answer:
      'Deployment timelines vary based on complexity, but most solutions can be implemented within 4-12 weeks. Simple integrations may be faster, while more complex enterprise-wide deployments may take longer.',
  },
  {
    question: 'Do your AI solutions require extensive configuration?',
    answer:
      'Our AI solutions are built on strong foundations but require specific configuration on your business data and processes. The amount of setup depends on the complexity of your use case, but we handle this process for you.',
  },
  {
    question: 'How do you ensure data security and privacy?',
    answer:
      "We implement enterprise-grade security measures including encryption, secure access controls, and regular security audits. All solutions are designed to comply with relevant data protection regulations like GDPR and India's Personal Data Protection Bill.",
  },
  {
    question: 'Can your AI and software solutions integrate with our existing systems?',
    answer:
      'Yes, our solutions are designed to integrate seamlessly with most common business systems and can be customized to work with proprietary systems through our API framework.',
  },
  {
    question: 'What kind of ROI can we expect from implementing your solutions?',
    answer:
      'ROI varies by industry and use case, but our clients typically see returns within 4-8 months. We work with you to establish clear KPIs and measure the impact of our solutions on your business.',
  },
  {
    question: 'Do you offer ongoing support and maintenance?',
    answer:
      'Yes, we provide comprehensive support and maintenance packages for all our AI solutions. This includes regular updates, performance monitoring, and continuous improvement of your AI agents.',
  },
];

const ContactPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div>
      {/* Hero Section */}
      <HeaderSection
        title="Contact Us"
        subtitle="Get in touch with our team to discuss how AI, custom software, and automation can transform your business"
      />

      {/* Contact Panel */}
      <section className="relative py-8 px-4 sm:px-6 md:px-12 bg-zinc-950 overflow-hidden">
        <div className="hidden md:block">
          <Spotlight height={700} />
        </div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary/20 rounded-full blur-3xl -mr-24 -mt-24 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -ml-24 -mb-24 pointer-events-none" />

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-6"
          >
            <p className="text-xs font-medium tracking-wide text-zinc-400 uppercase mb-2">
              Get In Touch
            </p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-2">
              We&apos;d Love to Hear From You
            </h2>
            <p className="text-sm text-zinc-400">
              Reach out directly, or send us a message and we&apos;ll get
              back to you shortly.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-5 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-2xl overflow-hidden max-w-5xl mx-auto"
          >
            {/* Info column */}
            <div className="lg:col-span-2 p-5 md:p-6 border-b lg:border-b-0 lg:border-r border-white/10">
              <div className="divide-y divide-white/10">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex items-start gap-3 py-2.5 first:pt-0 last:pb-0">
                    <div className="inline-flex p-2 rounded-lg bg-primary/15 text-primary shrink-0">
                      <item.icon size={16} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-xs mb-0.5">
                        {item.title}
                      </h3>
                      {item.lines.map((line) => (
                        <p key={line} className="text-zinc-400 text-xs leading-relaxed">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <div className="rounded-lg border border-white/10 overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1394.5782125990129!2d75.90482231249158!3d22.71659085268426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962e2ce0f51466f%3A0x3f682054fc86d953!2s31%2C%20Goyal%20Nagar%20Ring%20Rd%2C%20Mahadeo%20Totla%20Nagar%2C%20Utkarsh%20Estate%2C%20Indore%2C%20Madhya%20Pradesh%20452016!5e0!3m2!1sen!2sin!4v1756289524314!5m2!1sen!2sin"
                    width="100%"
                    height="110"
                    className="border-0 grayscale opacity-80"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    title="DeepNeural Technologies Office Headquarter"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Form column */}
            <div className="lg:col-span-3 p-5 md:p-6" id="contact-form">
              <h3 className="text-lg font-bold text-white mb-1">Send Us a Message</h3>
              <p className="text-zinc-400 text-xs mb-3">
                Fill out the form below and we&apos;ll get back to you as
                soon as possible.
              </p>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 md:px-12 bg-white dark:bg-black">
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8 md:mb-10 max-w-3xl mx-auto text-center"
          >
            <p className="text-sm font-medium tracking-wide text-zinc-600 dark:text-zinc-400 uppercase mb-3">
              FAQs
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              Find answers to common questions about our AI solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-3xl mx-auto rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-zinc-900 shadow-md divide-y divide-gray-200 dark:divide-slate-700 overflow-hidden"
          >
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={faq.question}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 hover:bg-blue-50/60 dark:hover:bg-zinc-800/60 transition-colors"
                  >
                    <span className="font-semibold text-zinc-900 dark:text-white">
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`text-primary shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-5 text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 md:px-12 bg-zinc-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-24 -mt-24 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/20 rounded-full blur-3xl -ml-24 -mb-24 pointer-events-none" />
        <div className="container mx-auto relative z-10 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Technology Journey?
          </h2>
          <p className="text-lg text-zinc-400 mb-10 leading-relaxed">
            Our team is ready to help you harness the power of AI, custom
            software, and automation for your business.
          </p>
          <div className="flex justify-center">
            <Link href="#contact-form">
              <Button
                variant="primary"
                size="lg"
                icon={<Send size={18} />}
                iconPosition="right"
                className="!text-white shadow-xl transition-all"
              >
                Contact Us Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
