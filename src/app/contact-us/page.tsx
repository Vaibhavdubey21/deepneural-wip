'use client';

import { motion } from 'framer-motion';
import { Clock, Mail, MapPin, Phone, Send } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import Button from '../components/Button';
import ContactForm from '../components/ContactForm';
import SectionHeading from '../components/SectionHeading';
import HeaderSection from '../components/sections/HeaderSection';

const ContactPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeaderSection
        title="Contact Us"
        subtitle="Get in touch with our team to discuss how our AI agents can transform your business"
      />

      {/* Contact Information */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <SectionHeading
                title="Get In Touch"
                subtitle="We'd love to hear from you. Here's how you can reach us."
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <motion.div
                  className="bg-white p-6 rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-lg mr-4">
                      <MapPin size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Visit Us</h3>
                      <p className="text-gray-600 text-sm">
                        31, Goyal Nagar, Kanadia Road
                        <br />
                        Indore, India - 452018
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-white p-6 rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-lg mr-4">
                      <Phone size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Call Us</h3>
                      <p className="text-gray-600 text-sm">
                        +91 79999 91951
                        <br />
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-white p-6 rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-lg mr-4">
                      <Mail size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Email Us</h3>
                      <p className="text-gray-600 text-sm">
                        contact@deepneuraltechnologies.com
                        <br />
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-white p-6 rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-lg mr-4">
                      <Clock size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Working Hours</h3>
                      <p className="text-gray-600 text-sm">
                        Monday - Friday: 8:30 AM - 5:00 PM
                        <br />
                        (Indian Standard Time)
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              <motion.div
                className="mt-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <h3 className="text-xl font-bold mb-4">Our Locations</h3>
                <div className="bg-white p-1 rounded-lg shadow-md overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1394.5782125990129!2d75.90482231249158!3d22.71659085268426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962e2ce0f51466f%3A0x3f682054fc86d953!2s31%2C%20Goyal%20Nagar%20Ring%20Rd%2C%20Mahadeo%20Totla%20Nagar%2C%20Utkarsh%20Estate%2C%20Indore%2C%20Madhya%20Pradesh%20452016!5e0!3m2!1sen!2sin!4v1756289524314!5m2!1sen!2sin"
                    width="100%"
                    height="300"
                    className="border-0"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    title="DeepNeural Technologies Office Headquarter"
                  ></iframe>
                </div>
              </motion.div>
            </div>

            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <SectionHeading
                  title="Send Us a Message"
                  subtitle="Fill out the form below and we'll get back to you as soon as possible."
                />

                <ContactForm />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about our AI solutions"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
            {[
              {
                question: 'How quickly can you deploy an AI agent solution?',
                answer:
                  'Deployment timelines vary based on complexity, but most solutions can be implemented within 4-12 weeks. Simple integrations may be faster, while more complex enterprise-wide deployments may take longer.',
              },
              {
                question: 'Do your AI agents require extensive training?',
                answer:
                  'Our agents are pre-trained on general knowledge but require specific training on your business data and processes. The amount of training depends on the complexity of your use case, but we handle this process for you.',
              },
              {
                question: 'How do you ensure data security and privacy?',
                answer:
                  "We implement enterprise-grade security measures including encryption, secure access controls, and regular security audits. All solutions are designed to comply with relevant data protection regulations like GDPR and India's Personal Data Protection Bill.",
              },
              {
                question:
                  'Can your AI agents integrate with our existing systems?',
                answer:
                  'Yes, our AI agents are designed to integrate seamlessly with most common business systems and can be customized to work with proprietary systems through our API framework.',
              },
              {
                question:
                  'What kind of ROI can we expect from implementing your AI agents?',
                answer:
                  'ROI varies by industry and use case, but our clients typically see returns within 4-8 months. We work with you to establish clear KPIs and measure the impact of our solutions on your business.',
              },
              {
                question: 'Do you offer ongoing support and maintenance?',
                answer:
                  'Yes, we provide comprehensive support and maintenance packages for all our AI solutions. This includes regular updates, performance monitoring, and continuous improvement of your AI agents.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className="bg-light p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-lg font-bold mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6 font-display"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Ready to Start Your AI Journey?
            </motion.h2>

            <motion.p
              className="text-xl mb-8 opacity-90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Our team is ready to help you harness the power of AI agents for
              your business.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex justify-center"
            >
              <Link href="/#contact-form">
                <Button
                  variant="secondary"
                  size="lg"
                  icon={<Send size={18} />}
                  iconPosition="right"
                >
                  Contact Us Now
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
