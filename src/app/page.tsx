'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  Brain,
  Database,
  LineChart,
  Shield,
  Users,
  Zap,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedCard from './components/AnimatedCard';
import Button from './components/Button';
import SectionHeading from './components/SectionHeading';
import HeroSection from './components/sections/HeroSection';

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <HeroSection />

      {/* Features Section with improved cards */}
      <section className="py-20 bg-light relative">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-[url('/dots-pattern.svg')] bg-repeat opacity-5"></div>

        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading
            title="Cutting-Edge AI Capabilities"
            subtitle="Our AI agents leverage the latest advancements in machine learning and neural networks to deliver intelligent solutions."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <Brain
                    size={40}
                    className=" flex justify-center mb-4 text-primary"
                  />
                ),
                title: 'Autonomous Reasoning',
                description:
                  'Our agents can reason through complex problems, make decisions, and learn from outcomes without human intervention.',
              },
              {
                icon: <Database size={40} className="text-primary" />,
                title: 'Knowledge Integration',
                description:
                  'Seamlessly connect to your existing data sources and knowledge bases to leverage institutional knowledge.',
              },
              {
                icon: <Zap size={40} className="text-primary" />,
                title: 'Real-time Processing',
                description:
                  'Process and respond to data streams in real-time, enabling immediate action and adaptation.',
              },
              {
                icon: <Users size={40} className="text-primary" />,
                title: 'Human-like Interaction',
                description:
                  'Natural language capabilities that make interaction with AI agents intuitive and productive for all users.',
              },
              {
                icon: <LineChart size={40} className="text-primary" />,
                title: 'Predictive Analytics',
                description:
                  'Forecast trends, identify opportunities, and mitigate risks before they impact your business.',
              },
              {
                icon: <Shield size={40} className="text-primary" />,
                title: 'Enterprise Security',
                description:
                  'Built with security-first architecture ensuring your data and operations remain protected.',
              },
            ].map((feature, index) => (
              <AnimatedCard
                key={index}
                delay={0.1 * index}
                className="p-8 rounded-2xl border border-gray-200 bg-white shadow-lg hover:shadow-xl transition-all hover:border-primary/20 group hover:-translate-y-1"
              >
                <div className="mb-5 p-4 bg-primary/10 inline-block rounded-xl group-hover:bg-primary/20 transition-all">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview with enhanced cards */}
      <section className="py-20 bg-light relative">
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-gray-100"></div>

        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading
            title="Success Stories"
            subtitle="See how our AI agents have transformed businesses across industries."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: 'Financial Services',
                company: 'Global Bank Corp',
                description:
                  'Reduced fraud detection time by 90% while improving accuracy to 99.7% using our autonomous monitoring agents.',
                image: '/agents.jpg',
                tag: 'Finance',
              },
              {
                title: 'Healthcare',
                company: 'MediTech Solutions',
                description:
                  'Diagnostic accuracy improved by 35% with our AI agents assisting medical professionals in image analysis and patient data interpretation.',
                image: '/meditech.jpg',
                tag: 'Healthcare',
              },
              {
                title: 'Manufacturing',
                company: 'IndusTech Manufacturing',
                description:
                  'Predictive maintenance agents reduced downtime by 78% and extended equipment lifespan by 40% across production facilities.',
                image: '/manufacturing.jpg',
                tag: 'Industry',
              },
            ].map((study, index) => (
              <AnimatedCard
                key={index}
                delay={0.1 * index}
                className="overflow-hidden rounded-2xl bg-white shadow-xl border border-gray-100 group hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={study.image}
                    alt={study.title}
                    height={500}
                    width={500}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-primary/80 text-black text-xs font-semibold py-1 px-3 rounded-full backdrop-blur-sm">
                    {study.tag}
                  </div>
                  <div className="absolute inset-0 bg-linear-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-6 border-t border-gray-100">
                  <div className="text-sm text-primary font-semibold mb-2">
                    {study.company}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{study.description}</p>
                  <Link
                    href="/clients"
                    className="text-primary font-medium inline-flex items-center hover:text-primary/80 transition-colors group-hover:gap-2"
                  >
                    Read Case Study{' '}
                    <ArrowRight size={16} className="ml-1 transition-all" />
                  </Link>
                </div>
              </AnimatedCard>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button
              variant="primary"
              size="lg"
              className="shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1 transition-all duration-300 px-10 py-5 rounded-xl bg-linear-to-r from-primary to-primary/90 border border-primary/20 group"
            >
              <Link
                href="/clients"
                className="flex items-center gap-3 font-medium text-black"
              >
                View All Case Studies
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] bg-center opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/20 rounded-full filter blur-3xl -ml-20 -mb-20"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6 font-display text-black"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Ready to Transform Your Business with AI?
            </motion.h2>

            <motion.p
              className="text-xl mb-10 opacity-90 text-black"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Join the AI revolution and stay ahead of the competition with our
              cutting-edge autonomous agents.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                variant="secondary"
                size="lg"
                icon={<ArrowRight size={18} />}
                iconPosition="right"
                className="shadow-xl shadow-dark/20 hover:shadow-dark/30 transition-all"
              >
                <Link href="/contact-us" className="text-black">
                  Schedule a Demo
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 hover:bg-white/10 backdrop-blur-sm transition-all"
              >
                <Link href="/about-us" className="text-black">
                  Learn More About Us
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
