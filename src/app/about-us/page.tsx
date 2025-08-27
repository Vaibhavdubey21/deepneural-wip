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

      {/* Our Story */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <SectionHeading
                title="Our Story"
                subtitle="From a small startup to a leader in autonomous AI agents"
              />
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-white-600 mb-6">
                  Founded in 2018 by a team of AI researchers from the Indian Institute of Technology, DeepNeural began with a simple mission: to build AI agents that could work alongside humans, augmenting their capabilities and taking on complex tasks autonomously.
                </p>
                
                <p className="text-white-600 mb-6">
                  What started as a research project in a small Bangalore apartment has grown into a leading AI solutions provider with offices across India and partnerships with global enterprises. Our founding team&apos;s background in machine learning, neural networks, and cognitive science gave us a unique perspective on building AI systems that could truly understand and adapt to human needs.
                </p>
                
                <p className="text-white-600">
                  Today, DeepNeural is at the forefront of developing autonomous AI agents that are transforming how businesses operate across industries. Our solutions have helped enterprises improve efficiency, reduce costs, and create entirely new capabilities through the power of artificial intelligence.
                </p>
              </motion.div>
            </div>
            
            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <div className="relative z-10">
                  <Image 
                    src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=800&auto=format&fit=crop" 
                    alt="DeepNeural Team" 
                    width={800}
                    height={600}
                    className="rounded-lg shadow-2xl"

                  />
                </div>
                <div className="absolute -top-4 -right-4 -bottom-4 -left-4 bg-primary/20 rounded-lg -z-10 blur-xl"></div>
                
                {/* Timeline */}
                <div className="mt-12 grid grid-cols-2 gap-4">
                  {[
                    { year: "2018", event: "Company founded by AI researchers" },
                    { year: "2019", event: "First enterprise client partnership" },
                    { year: "2020", event: "Series A funding round completed" },
                    { year: "2022", event: "Expanded to 100+ enterprise clients" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                      className="bg-white p-4 rounded-lg shadow-md"
                    >
                      <div className="text-black font-bold">{item.year}</div>
                      <div className="text-gray-600 text-sm">{item.event}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

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
                description: "We constantly push the boundaries of what's possible in AI, investing heavily in R&D to create breakthrough technologies."
              },
              {
                icon: <Users size={40} className="text-primary" />,
                title: "Human-Centered",
                description: "We design our AI agents to augment human capabilities, not replace them, prioritizing collaboration between humans and machines."
              },
              {
                icon: <Award size={40} className="text-primary" />,
                title: "Excellence",
                description: "We hold ourselves to the highest standards in every aspect of our work, from code quality to client relationships."
              },
              {
                icon: <Globe size={40} className="text-primary" />,
                title: "Responsibility",
                description: "We develop AI with strong ethical principles, ensuring our technology is safe, fair, transparent, and respects privacy."
              },
              {
                icon: <TrendingUp size={40} className="text-primary" />,
                title: "Impact",
                description: "We measure our success by the tangible value our solutions create for clients and society as a whole."
              },
              {
                icon: <Zap size={40} className="text-primary" />,
                title: "Agility",
                description: "We move quickly, adapt to changing circumstances, and continuously evolve our approach based on new learnings."
              }
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
            subtitle="Meet the experts behind DeepNeural's innovative AI solutions"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              {
                name: "Dr. Anil Sharma",
                role: "Founder & CEO",
                bio: "Former AI research lead at IIT with 15+ years of experience in neural networks and machine learning.",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop"
              },
              {
                name: "Priya Mehta",
                role: "Chief Technology Officer",
                bio: "AI systems architect specializing in autonomous agents and distributed computing systems.",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop"
              },
              {
                name: "Vikram Patel",
                role: "Chief Operating Officer",
                bio: "Former McKinsey consultant with expertise in scaling technology businesses across global markets.",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop"
              },
              {
                name: "Dr. Meera Nair",
                role: "Head of Research",
                bio: "Published researcher in deep learning with focus on reinforcement learning and knowledge systems.",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop"
              }
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
                    width = {500}
                    height = {500}
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
          <SectionHeading
            title="DeepNeural by the Numbers"
            subtitle="Our growth and impact since 2018"
            centered
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {[
              { label: "AI Agents Deployed", value: "500+", icon: <Zap size={32} className="text-primary" /> },
              { label: "Team Members", value: "120+", icon: <Users size={32} className="text-primary" /> },
              { label: "Enterprise Clients", value: "100+", icon: <Globe size={32} className="text-primary" /> },
              { label: "Research Papers", value: "45+", icon: <Award size={32} className="text-primary" /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className="bg-light rounded-lg p-6 text-center shadow-md"
                whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
              >
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { title: "Series B Funding", description: "Raised $45M in Series B funding led by top venture capital firms in 2023", year: "2023" },
              { title: "Tech Innovation Award", description: "Received the National AI Innovation Award for our autonomous agent architecture", year: "2022" },
              { title: "Global Expansion", description: "Opened offices in Singapore and Dubai to serve our growing international client base", year: "2021" }
            ].map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className="bg-light rounded-lg p-6 shadow-md relative"
              >
                <div className="absolute top-6 right-6 bg-primary text-white text-sm py-1 px-3 rounded-full">
                  {achievement.year}
                </div>
                <h3 className="text-xl font-bold mb-3">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
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
                  title: "Deep Learning Foundation",
                  description: "Our agents are built on advanced neural network architectures, trained on vast datasets to recognize patterns and make intelligent decisions."
                },
                {
                  title: "Reinforcement Learning",
                  description: "We use reinforcement learning techniques to enable our agents to learn from experiences and continuously improve their performance over time."
                },
                {
                  title: "Knowledge Integration",
                  description: "Our systems integrate with your existing knowledge bases and data sources, leveraging your institutional knowledge to make better decisions."
                },
                {
                  title: "Human-in-the-Loop Design",
                  description: "We design our AI agents to work collaboratively with humans, providing transparency into decision-making and allowing for oversight."
                },
                {
                  title: "Continuous Improvement",
                  description: "Our agents are constantly learning and evolving, adapting to new data and changing business conditions to deliver ever-improving results."
                }
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
              <Button 
                variant="secondary" 
                size="lg"
                icon={<ArrowRight size={18} />}
                iconPosition="right"
              >
                <Link href="/contact">Contact Our Team</Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                <Link href="/services">Explore Our Solutions</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;