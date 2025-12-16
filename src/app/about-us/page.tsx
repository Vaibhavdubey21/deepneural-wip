'use client';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Award,
  Globe,
  Lightbulb,
  Rocket,
  Target,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import AnimatedCard from '../components/AnimatedCard';
import Button from '../components/Button';
import SectionHeader from '../components/SectionHeader';
import SectionHeading from '../components/SectionHeading';
import HeaderSection from '../components/sections/HeaderSection';

const AboutPage: React.FC = () => {
  return (
    <div>
      <HeaderSection
        title="About DeepNeural"
        subtitle="Pioneering the future of AI agents to solve complex business
            challenges"
      />

      {/* Mission and Vision */}
      <section className="py-20 pt-18 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <SectionHeader
            subheading="What drives us"
            heading="Mission & Vision"
            description="The principles that guide how we build autonomous AI
              agents—responsibly, reliably, and at scale."
          />
          {/* Section header */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="
                group relative overflow-hidden rounded-2xl
                bg-zinc-50 dark:bg-zinc-950/60
                border border-zinc-200/70 dark:border-zinc-800/70
                shadow-sm hover:shadow-md transition-shadow
                p-7 md:p-8
              "
            >
              {/* subtle glow */}
              <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-primary/10 blur-3xl group-hover:bg-primary/15 transition-colors" />

              <div className="flex items-start gap-4">
                <div className="relative">
                  <div className="absolute inset-0 rounded-xl bg-primary/20 blur-md" />
                  <div className="relative rounded-xl p-3 bg-white/70 dark:bg-zinc-900/60 border border-zinc-200/60 dark:border-zinc-800/60">
                    <Target size={28} className="text-primary" />
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold tracking-widest text-zinc-500 dark:text-zinc-400">
                    OUR MISSION
                  </p>
                  <h3 className="mt-1 text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                    Build agents that amplify people.
                  </h3>
                </div>
              </div>

              <p className="mt-5 text-base md:text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                To create autonomous AI agents that enhance human capabilities,
                solve complex problems, and drive business transformation across
                industries.
              </p>

              <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
                We build AI that works alongside humans—taking on repetitive and
                complex tasks so teams can focus on creative and strategic work.
              </p>
            </motion.div>

            {/* Card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="
                group relative overflow-hidden rounded-2xl
                bg-zinc-50 dark:bg-zinc-950/60
                border border-zinc-200/70 dark:border-zinc-800/70
                shadow-sm hover:shadow-md transition-shadow
                p-7 md:p-8
              "
            >
              <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-primary/10 blur-3xl group-hover:bg-primary/15 transition-colors" />

              <div className="flex items-start gap-4">
                <div className="relative">
                  <div className="absolute inset-0 rounded-xl bg-primary/20 blur-md" />
                  <div className="relative rounded-xl p-3 bg-white/70 dark:bg-zinc-900/60 border border-zinc-200/60 dark:border-zinc-800/60">
                    <Rocket size={28} className="text-primary" />
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold tracking-widest text-zinc-500 dark:text-zinc-400">
                    OUR VISION
                  </p>
                  <h3 className="mt-1 text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                    Set the standard for autonomous AI.
                  </h3>
                </div>
              </div>

              <p className="mt-5 text-base md:text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                To be the global leader in autonomous AI agent technology,
                setting new standards for intelligence, reliability, and ethical
                AI implementation.
              </p>

              <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
                We envision AI agents as trusted partners in every
                organization—autonomous when appropriate, transparent always,
                and guided by human oversight.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Core Values"
            subtitle="The principles that guide everything we do at DeepNeural"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: <Lightbulb size={40} className="text-primary" />,
                title: 'Innovation',
                description:
                  "We constantly push the boundaries of what's possible in AI, investing heavily in R&D to create breakthrough technologies.",
              },
              {
                icon: <Users size={40} className="text-primary" />,
                title: 'Human-Centered',
                description:
                  'We design our AI agents to augment human capabilities, not replace them, prioritizing collaboration between humans and machines.',
              },
              {
                icon: <Award size={40} className="text-primary" />,
                title: 'Excellence',
                description:
                  'We hold ourselves to the highest standards in every aspect of our work, from code quality to client relationships.',
              },
              {
                icon: <Globe size={40} className="text-primary" />,
                title: 'Responsibility',
                description:
                  'We develop AI with strong ethical principles, ensuring our technology is safe, fair, transparent, and respects privacy.',
              },
              {
                icon: <TrendingUp size={40} className="text-primary" />,
                title: 'Impact',
                description:
                  'We measure our success by the tangible value our solutions create for clients and society as a whole.',
              },
              {
                icon: <Zap size={40} className="text-primary" />,
                title: 'Agility',
                description:
                  'We move quickly, adapt to changing circumstances, and continuously evolve our approach based on new learnings.',
              },
            ].map((value, index) => (
              <AnimatedCard
                key={index}
                delay={0.1 * index}
                className="p-8 dark:bg-zinc-800 text-gray-600 dark:text-gray-400"
              >
                <div className="mb-4 p-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3 dark:text-white">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Leadership Team"
            subtitle="Meet the experts behind DeepNeural's innovative AI solutions. Founded by industry veterans with decades of experience in technology, consulting, and AI innovation, our leadership team brings together unmatched expertise and vision."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              {
                name: 'Vivek Saraf',
                role: 'Founder & CEO',
                bio: 'With over 23 years of experience in consulting, designing, and delivering technology solutions...',
                image: 'https://picsum.photos/400/400',
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <div className="h-64 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <div className="text-primary font-medium text-sm mb-4">
                    {member.role}
                  </div>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats and Achievements */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="DeepNeural by the Numbers"
            subtitle="Our growth and impact since 2018"
            centered
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                label: 'AI Agents Deployed',
                value: '16+',
                icon: <Zap size={32} className="text-primary" />,
              },
              {
                label: 'Team Members',
                value: '14+',
                icon: <Users size={32} className="text-primary" />,
              },
              {
                label: 'Enterprise Clients',
                value: '3+',
                icon: <Globe size={32} className="text-primary" />,
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className="bg-light rounded-lg p-6 text-center shadow-md"
                whileHover={{
                  y: -5,
                  boxShadow:
                    '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                }}
              >
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Approach */}
      <section className="py-20 bg-dark-light text-light">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Technology Approach"
            subtitle="How we build autonomous AI agents that deliver real business value"
            centered
            className="text-light"
          />

          <div className="max-w-4xl mx-auto mt-12">
            <div className="relative">
              <div className="absolute top-0 bottom-0 left-16 w-px bg-primary/30 -translate-x-1/2 z-0 md:block hidden"></div>

              {[
                {
                  title: 'Deep Learning Foundation',
                  description:
                    'Our agents are built on advanced neural network architectures, trained on vast datasets to recognize patterns and make intelligent decisions.',
                },
                {
                  title: 'Reinforcement Learning',
                  description:
                    'We use reinforcement learning techniques to enable our agents to learn from experiences and continuously improve their performance over time.',
                },
                {
                  title: 'Knowledge Integration',
                  description:
                    'Our systems integrate with your existing knowledge bases and data sources, leveraging your institutional knowledge to make better decisions.',
                },
                {
                  title: 'Human-in-the-Loop Design',
                  description:
                    'We design our AI agents to work collaboratively with humans, providing transparency into decision-making and allowing for oversight.',
                },
                {
                  title: 'Continuous Improvement',
                  description:
                    'Our agents are constantly learning and evolving, adapting to new data and changing business conditions to deliver ever-improving results.',
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                  className="flex items-start gap-8 mb-12 relative z-10"
                >
                  <div className="bg-dark-lighter h-12 w-12 rounded-full flex items-center justify-center text-lg font-bold border-4 border-primary shrink-0 ml-10 md:ml-0">
                    {index + 1}
                  </div>

                  <div className="bg-dark-lighter p-6 rounded-lg shadow-lg grow">
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-light-dark">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
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
              Join Us on Our Mission
            </motion.h2>

            <motion.p
              className="text-xl mb-8 opacity-90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Partner with DeepNeural to transform your business with
              cutting-edge AI agent technology.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link href="/contact">
                <Button
                  variant="secondary"
                  size="lg"
                  icon={<ArrowRight size={18} />}
                  iconPosition="right"
                >
                  Contact Our Team
                </Button>
              </Link>

              <Link href="/services">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                >
                  Explore Our Solutions
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
