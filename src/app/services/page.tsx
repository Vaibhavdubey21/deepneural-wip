'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, Database, LineChart, MessageSquare, Eye, Zap, Server, Shield, Code } from 'lucide-react';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import AnimatedCard from '../components/AnimatedCard';
import Image from 'next/image';
export default function ServicesPage() {
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
              Our AI Services
            </motion.h1>
            
            <motion.p 
              className="text-xl text-light-dark mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Cutting-edge AI agent solutions tailored to your business needs
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Core AI Agent Solutions"
            subtitle="Our flagship services that are transforming industries"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: <Brain size={48} className="text-primary" />,
                title: "Autonomous AI Agents",
                description: "Custom-built AI agents that can perform complex tasks, make decisions, and learn from outcomes without human intervention.",
                features: [
                  "Task automation and workflow optimization",
                  "Decision support and recommendation systems",
                  "Continuous learning and improvement",
                  "Integration with existing business systems"
                ]
              },
              {
                icon: <MessageSquare size={48} className="text-primary" />,
                title: "Natural Language Processing",
                description: "Advanced NLP solutions that enable your systems to understand, interpret, and generate human language with remarkable accuracy.",
                features: [
                  "Conversational AI and chatbots",
                  "Document analysis and summarization",
                  "Sentiment analysis and opinion mining",
                  "Multilingual support and translation"
                ]
              },
              {
                icon: <Eye size={48} className="text-primary" />,
                title: "Computer Vision Solutions",
                description: "AI systems that can interpret and understand visual information from the world, enabling new capabilities for your business.",
                features: [
                  "Object detection and recognition",
                  "Image classification and segmentation",
                  "Visual inspection and quality control",
                  "Video analysis and surveillance"
                ]
              }
            ].map((service, index) => (
              <AnimatedCard key={index} delay={0.1 * index} className="p-8">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <h4 className="font-semibold mb-3">Key Features:</h4>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button variant="outline" className="mt-auto">
                  <Link href="/contact-us" className="flex items-center">
                    Learn More <ArrowRight size={16} className="ml-2" />
                  </Link>
                </Button>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Specialized AI Services"
            subtitle="Targeted solutions for specific business challenges"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              {
                icon: <LineChart size={36} className="text-primary" />,
                title: "Predictive Analytics",
                description: "Forecast trends, identify opportunities, and mitigate risks with advanced predictive models."
              },
              {
                icon: <Database size={36} className="text-primary" />,
                title: "Data Intelligence",
                description: "Extract actionable insights from your data with our AI-powered analytics solutions."
              },
              {
                icon: <Zap size={36} className="text-primary" />,
                title: "Process Automation",
                description: "Streamline operations with intelligent automation of repetitive and complex processes."
              },
              {
                icon: <Server size={36} className="text-primary" />,
                title: "AI Infrastructure",
                description: "Build and maintain the robust infrastructure needed to support advanced AI operations."
              },
              {
                icon: <Shield size={36} className="text-primary" />,
                title: "AI Security",
                description: "Protect your AI systems and data with our specialized security solutions."
              },
              {
                icon: <Code size={36} className="text-primary" />,
                title: "Custom AI Development",
                description: "Bespoke AI solutions tailored to your unique business requirements and challenges."
              },
              {
                icon: <Brain size={36} className="text-primary" />,
                title: "AI Consulting",
                description: "Strategic guidance on implementing AI to transform your business operations."
              },
              {
                icon: <MessageSquare size={36} className="text-primary" />,
                title: "Conversational AI",
                description: "Create natural, engaging interactions between your systems and users."
              }
            ].map((service, index) => (
              <AnimatedCard key={index} delay={0.05 * index} className="p-6">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-dark-light text-light">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Industry-Specific Solutions"
            subtitle="AI agents tailored to the unique challenges of your industry"
            centered
            className="text-light"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {[
              {
                title: "Financial Services",
                description: "AI agents for fraud detection, risk assessment, algorithmic trading, and personalized financial advice.",
                image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format&fit=crop"
              },
              {
                title: "Healthcare",
                description: "Diagnostic assistance, patient monitoring, treatment recommendation, and healthcare operations optimization.",
                image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&auto=format&fit=crop"
              },
              {
                title: "Manufacturing",
                description: "Predictive maintenance, quality control, supply chain optimization, and production planning.",
                image: "https://images.unsplash.com/photo-1581093458791-9d15482aae9e?q=80&w=600&auto=format&fit=crop"
              },
              {
                title: "Retail & E-commerce",
                description: "Inventory management, demand forecasting, personalized recommendations, and customer service automation.",
                image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=600&auto=format&fit=crop"
              }
            ].map((industry, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="flex flex-col md:flex-row bg-dark-lighter rounded-lg overflow-hidden shadow-lg"
              >
                <div className="md:w-2/5">
                  <Image 
                    src={industry.image} 
                    alt={industry.title} 
                    height = {500}
                    width = {500}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-3/5 p-6 md:p-8">
                  <h3 className="text-2xl font-bold mb-4">{industry.title}</h3>
                  <p className="text-light-dark mb-6">{industry.description}</p>
                  <Button variant="primary">
                    <Link href="/contact-us">Explore Solutions</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Implementation Process"
            subtitle="How we deliver exceptional AI solutions for your business"
            centered
          />
          
          <div className="relative mt-16">
            <div className="absolute top-0 bottom-0 left-1/2 w-px bg-primary/30 -translate-x-1/2 z-0 md:block hidden"></div>
            
            {[
              {
                title: "Discovery & Assessment",
                description: "We begin by understanding your business, challenges, and goals. Our team conducts a thorough assessment to identify opportunities where AI agents can create the most value.",
                icon: <Brain size={32} className="text-primary" />
              },
              {
                title: "Solution Design",
                description: "Our AI architects design a custom solution tailored to your specific needs, selecting the right technologies and approaches to address your unique challenges.",
                icon: <Code size={32} className="text-primary" />
              },
              {
                title: "Development & Training",
                description: "We develop your AI agents and train them using your data, continuously refining their capabilities to ensure they meet your performance requirements.",
                icon: <Database size={32} className="text-primary" />
              },
              {
                title: "Integration & Deployment",
                description: "We seamlessly integrate the AI solution with your existing systems and deploy it in your environment, ensuring minimal disruption to your operations.",
                icon: <Server size={32} className="text-primary" />
              },
              {
                title: "Monitoring & Optimization",
                description: "After deployment, we continuously monitor the performance of your AI agents, making adjustments and improvements to maximize their effectiveness.",
                icon: <LineChart size={32} className="text-primary" />
              }
            ].map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                className={`flex flex-col md:flex-row items-center md:items-start gap-6 mb-16 relative z-10 ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="md:w-1/2 flex justify-center">
                  <div className="bg-white p-6 rounded-full shadow-lg h-24 w-24 flex items-center justify-center relative">
                    {step.icon}
                    <div className="absolute -top-2 -right-2 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                  </div>
                </div>
                
                <div className="md:w-1/2 text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
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
              className="text-3xl md:text-4xl font-bold mb-6 font-display text-black"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Ready to Transform Your Business with AI?
            </motion.h2>
            
            <motion.p 
              className="text-xl mb-8 opacity-90 text-black"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Contact us today to discuss how our AI agents can help you achieve your business goals.
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
                <Link href="/contact-us" className="text-black">Schedule a Consultation</Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                <Link href="/clients" className="text-black">View Case Studies</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
