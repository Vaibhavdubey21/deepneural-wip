'use client';

import { Marquee } from '@/components/ui/marquee';
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
import Link from 'next/link';
import AnimatedCard from './components/AnimatedCard';
import BentoDemo from './components/BentoDemo';
import Button from './components/Button';
import SectionHeading from './components/SectionHeading';
import HeroSection from './components/sections/HeroSection';

export default function HomePage() {
  const topics = [
    {
      icon: <Brain size={40} />,
      title: 'Autonomous Reasoning',
      description:
        'Our agents can reason through complex problems, make decisions, and learn from outcomes without human intervention.',
      gradient: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-50 to-blue-100/50',
    },
    {
      icon: <Database size={40} />,
      title: 'Knowledge Integration',
      description:
        'Seamlessly connect to your existing data sources and knowledge bases to leverage institutional knowledge.',
      gradient: 'from-purple-500 to-purple-600',
      bgGradient: 'from-purple-50 to-purple-100/50',
    },
    {
      icon: <Zap size={40} />,
      title: 'Real-time Processing',
      description:
        'Process and respond to data streams in real-time, enabling immediate action and adaptation.',
      gradient: 'from-amber-500 to-amber-600',
      bgGradient: 'from-amber-50 to-amber-100/50',
    },
    {
      icon: <Users size={40} />,
      title: 'Human-like Interaction',
      description:
        'Natural language capabilities that make interaction with AI agents intuitive and productive for all users.',
      gradient: 'from-emerald-500 to-emerald-600',
      bgGradient: 'from-emerald-50 to-emerald-100/50',
    },
    {
      icon: <LineChart size={40} />,
      title: 'Predictive Analytics',
      description:
        'Forecast trends, identify opportunities, and mitigate risks before they impact your business.',
      gradient: 'from-rose-500 to-rose-600',
      bgGradient: 'from-rose-50 to-rose-100/50',
    },
    {
      icon: <Shield size={40} />,
      title: 'Enterprise Security',
      description:
        'Built with security-first architecture ensuring your data and operations remain protected.',
      gradient: 'from-cyan-500 to-cyan-600',
      bgGradient: 'from-cyan-50 to-cyan-100/50',
    },
  ];

  return (
    <div className="overflow-hidden">
      <HeroSection />

      <section className="py-20 dark:bg-linear-to-b from-black to-gray-700 relative">
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading
            title="Cutting-Edge AI Capabilities"
            subtitle="Our AI agents leverage the latest advancements in machine learning and neural networks to deliver intelligent solutions."
            centered
          />

          <Marquee pauseOnHover className="[--duration:40s]">
            {topics.map((feature, index) => (
              <AnimatedCard
                key={index}
                delay={0.1 * index}
                className={`w-md px-6 py-6 rounded-2xl border transition-all duration-300 group hover:-translate-y-2 bg-linear-to-br ${feature.bgGradient} dark:bg-linear-to-br dark:from-zinc-950 dark:to-zinc-900 border-gray-200 dark:border-slate-700 shadow-md hover:shadow-xl dark:shadow-lg dark:hover:shadow-2xl`}
              >
                <div
                  className={`mb-4 p-4 bg-linear-to-br ${feature.gradient} rounded-xl inline-block group-hover:scale-110 transition-transform duration-300 shadow-lg mt-2`}
                >
                  <div className="text-white">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </AnimatedCard>
            ))}
          </Marquee>

          <Marquee reverse pauseOnHover className="[--duration:40s]">
            {topics.map((feature, index) => (
              <AnimatedCard
                key={index}
                delay={0.1 * index}
                className={`w-md px-6 py-6 rounded-2xl border transition-all duration-300 group hover:-translate-y-2 bg-linear-to-br ${feature.bgGradient} dark:bg-linear-to-br dark:from-zinc-950 dark:to-zinc-900 border-gray-200 dark:border-slate-700 shadow-md hover:shadow-xl dark:shadow-lg dark:hover:shadow-2xl`}
              >
                <div
                  className={`mb-4 p-4 bg-linear-to-br ${feature.gradient} rounded-xl inline-block group-hover:scale-110 transition-transform duration-300 shadow-lg mt-2`}
                >
                  <div className="text-white">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </AnimatedCard>
            ))}
          </Marquee>
        </div>
      </section>

      <section className="py-20 dark:bg-linear-to-b from-gray-700 to-black relative">
        <div className="absolute bottom-0 right-0 w-50 h-50 bg-blue-600/30 rounded-full filter blur-3xl -mr-20 -mb-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading
            title="Success Stories"
            subtitle="See how our AI agents have transformed businesses across industries."
            centered
          />
          <BentoDemo />
          <div className="text-center mt-16">
            <Button
              variant="primary"
              size="lg"
              className="shadow-2xl shadow-white hover:shadow-white hover:-translate-y-1 transition-all duration-300 px-5 py-2 rounded-xl bg-linear-to-r from-primary to-primary/90 border border-primary/20 group dark:text-black text-white"
            >
              <Link
                href="/clients"
                className="flex items-center gap-3 font-medium"
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
      <section className="pt-32 pb-48 dark:bg-black bg-white text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] bg-center opacity-10"></div>
        <div className="absolute top-0 right-0 w-50 h-50 bg-blue-600/30 rounded-full filter blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/30 rounded-full filter blur-3xl -ml-20 -mb-20"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6 font-display text-black dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Ready to Transform Your Business with AI?
            </motion.h2>

            <motion.p
              className="text-xl mb-10 opacity-90 text-black dark:text-white"
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
                variant="primary"
                size="lg"
                icon={<ArrowRight size={18} />}
                iconPosition="right"
                className="shadow-xl shadow-dark/20 hover:shadow-dark/30 transition-all dark:text-black text-white"
              >
                <Link href="/contact-us">Schedule a Demo</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-black dark:border-white/60 dark:text-white/90 hover:bg-white/10 backdrop-blur-sm transition-all"
              >
                <Link href="/about-us">Learn More About Us</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
