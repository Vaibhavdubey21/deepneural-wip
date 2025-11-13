'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Target, Users, Lightbulb, Zap, Award, Globe, Rocket, TrendingUp } from 'lucide-react';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import AnimatedCard from '../components/AnimatedCard';
import Image from 'next/image';

const AboutPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-dark pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 mix-blend-multiply"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-white font-display mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              About DeepNeural
            </motion.h1>

            <motion.p
              className="text-xl text-light-dark mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Pioneering the future of AI agents to solve complex business challenges
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story (commented out for now) */}
      {/*
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <SectionHeading title="About Us" subtitle="Our Journey" />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-white-600 mb-6">
                  At DeepNeural Technologies, we believe AI isn’t just the future—it’s the present...
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* Mission and Vision */}
      <section className="py-20 bg-dark-light text-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-dark-lighter p-8 rounded-lg"
            >
              <div className="flex items-center mb-6">
                <div className="bg-primary/20 p-3 rounded-full mr-4">
                  <Target size={32} className="text-primary" />
                </div>
                <h2 className="text-2xl font-bold font-display">Our Mission</h2>
              </div>

              <p className="text-light-dark text-lg mb-4">
                To create autonomous AI agents that enhance human capabilities, solve complex problems, and drive business transformation across industries.
              </p>

              <p className="text-light-dark">
                We believe in building AI systems that work alongside humans, taking on repetitive and complex tasks while allowing people to focus on creative and strategic work where they excel.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-dark-lighter p-8 rounded-lg"
            >
              <div className="flex items-center mb-6">
                <div className="bg-primary/20 p-3 rounded-full mr-4">
                  <Rocket size={32} className="text-primary" />
                </div>
                <h2 className="text-2xl font-bold font-display">Our Vision</h2>
              </div>

              <p className="text-light-dark text-lg mb-4">
                To be the global leader in autonomous AI agent technology, setting new standards for intelligence, reliability, and ethical AI implementation.
              </p>

              <p className="text-light-dark">
                We envision a future where AI agents become trusted partners in every organization, handling complex tasks autonomously while adhering to the highest standards of ethics, transparency, and human oversight.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
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
                title: "Innovation",
                description: "We constantly push the boundaries of what's possible in AI, investing heavily in R&D to create breakthrough technologies.",
              },
              {
                icon: <Users size={40} className="text-primary" />,
                title: "Human-Centered",
                description: "We design our AI agents to augment human capabilities, not replace them, prioritizing collaboration between humans and machines.",
              },
              {
                icon: <Award size={40} className="text-primary" />,
                title: "Excellence",
                description: "We hold ourselves to the highest standards in every aspect of our work, from code quality to client relationships.",
              },
              {
                icon: <Globe size={40} className="text-primary" />,
                title: "Responsibility",
                description: "We develop AI with strong ethical principles, ensuring our technology is safe, fair, transparent, and respects privacy.",
              },
              {
                icon: <TrendingUp size={40} className="text-primary" />,
                title: "Impact",
                description: "We measure our success by the tangible value our solutions create for clients and society as a whole.",
              },
              {
                icon: <Zap size={40} className="text-primary" />,
                title: "Agility",
                description: "We move quickly, adapt to changing circumstances, and continuously evolve our approach based on new learnings.",
              },
            ].map((value, index) => (
              <AnimatedCard key={index} delay={0.1 * index} className="p-6">
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
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
                name: "Vivek Saraf",
                role: "Founder & CEO",
                bio: "With over 23 years of experience in consulting, designing, and delivering technology solutions...",
                image: "https://picsum.photos/400/400",
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
                  <div className="text-primary font-medium text-sm mb-4">{member.role}</div>
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
          <SectionHeading title="DeepNeural by the Numbers" subtitle="Our growth and impact since 2018" centered />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

            {[
              { label: "AI Agents Deployed", value: "16+", icon: <Zap size={32} className="text-primary" /> },
              { label: "Team Members", value: "14+", icon: <Users size={32} className="text-primary" /> },
              { label: "Enterprise Clients", value: "3+", icon: <Globe size={32} className="text-primary" /> },
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
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Achievements (commented out for now) */}
          {/*
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { title: "Series B Funding", description: "Raised $45M in Series B funding...", year: "2023" },
              { title: "Tech Innovation Award", description: "Received the National AI Innovation Award...", year: "2022" },
              { title: "Global Expansion", description: "Opened offices in Singapore and Dubai...", year: "2021" }
            ].map((achievement, index) => (
              <motion.div key={index} className="bg-light rounded-lg p-6 shadow-md relative">
                <div className="absolute top-6 right-6 bg-primary text-white text-sm py-1 px-3 rounded-full">
                  {achievement.year}
                </div>
                <h3 className="text-xl font-bold mb-3">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
          */}
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
                  title: "Deep Learning Foundation",
                  description:
                    "Our agents are built on advanced neural network architectures, trained on vast datasets to recognize patterns and make intelligent decisions.",
                },
                {
                  title: "Reinforcement Learning",
                  description:
                    "We use reinforcement learning techniques to enable our agents to learn from experiences and continuously improve their performance over time.",
                },
                {
                  title: "Knowledge Integration",
                  description:
                    "Our systems integrate with your existing knowledge bases and data sources, leveraging your institutional knowledge to make better decisions.",
                },
                {
                  title: "Human-in-the-Loop Design",
                  description:
                    "We design our AI agents to work collaboratively with humans, providing transparency into decision-making and allowing for oversight.",
                },
                {
                  title: "Continuous Improvement",
                  description:
                    "Our agents are constantly learning and evolving, adapting to new data and changing business conditions to deliver ever-improving results.",
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
                  <div className="bg-dark-lighter h-12 w-12 rounded-full flex items-center justify-center text-lg font-bold border-4 border-primary flex-shrink-0 ml-10 md:ml-0">
                    {index + 1}
                  </div>

                  <div className="bg-dark-lighter p-6 rounded-lg shadow-lg flex-grow">
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
              Partner with DeepNeural to transform your business with cutting-edge AI agent technology.
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
