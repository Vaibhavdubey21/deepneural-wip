'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Star, Quote } from 'lucide-react';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import AnimatedCard from '../components/AnimatedCard';

const ClientsPage: React.FC = () => {
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
              Our Clients & Success Stories
            </motion.h1>
            
            <motion.p 
              className="text-xl text-light-dark mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              See how our AI agents are transforming businesses across industries
            </motion.p>
          </div>
        </div>
      </section>

      {/* Featured Clients */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Trusted by Industry Leaders"
            subtitle="Companies that rely on DeepNeural's AI agent technology"
            centered
          />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-12">
            {[
              "https://images.unsplash.com/photo-1614680376739-414d95ff43df?q=80&w=200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?q=80&w=200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1614680376408-16afefe3f873?q=80&w=200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=200&auto=format&fit=crop"
            ].map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.05 * index }}
                className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center h-24"
              >
                <Image 
                  src={logo} 
                  alt={`Client Logo ${index + 1}`} 
                  width={200}
                  height={100}
                  className="max-h-12 max-w-full grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Case Studies"
            subtitle="Real-world examples of how our AI agents are creating value"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Revolutionizing Fraud Detection",
                company: "Global Bank Corp",
                description: "How our AI agents reduced fraud detection time by 90% while improving accuracy to 99.7%.",
                image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=600&auto=format&fit=crop",
                results: [
                  "90% reduction in detection time",
                  "99.7% accuracy rate",
                  "₹120 million in prevented fraud annually",
                  "85% decrease in false positives"
                ]
              },
              {
                title: "Enhancing Medical Diagnostics",
                company: "MediTech Solutions",
                description: "AI agents assisting medical professionals in image analysis and patient data interpretation.",
                image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&auto=format&fit=crop",
                results: [
                  "35% improvement in diagnostic accuracy",
                  "60% reduction in analysis time",
                  "28% decrease in unnecessary tests",
                  "94% physician satisfaction rate"
                ]
              },
              {
                title: "Optimizing Manufacturing Operations",
                company: "IndusTech Manufacturing",
                description: "Predictive maintenance agents that reduced downtime and extended equipment lifespan.",
                image: "https://images.unsplash.com/photo-1581093458791-9d15482aae9e?q=80&w=600&auto=format&fit=crop",
                results: [
                  "78% reduction in unplanned downtime",
                  "40% increase in equipment lifespan",
                  "₹45 million annual maintenance savings",
                  "23% improvement in production efficiency"
                ]
              },
              {
                title: "Transforming Customer Service",
                company: "RetailGiant India",
                description: "AI agents that revolutionized customer support with personalized, 24/7 assistance.",
                image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&auto=format&fit=crop",
                results: [
                  "92% customer satisfaction rate",
                  "3.5 minute average resolution time",
                  "65% reduction in support costs",
                  "24/7 support coverage with no additional staff"
                ]
              },
              {
                title: "Optimizing Supply Chain",
                company: "LogiTech Solutions",
                description: "AI-powered supply chain optimization that improved efficiency and reduced costs.",
                image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop",
                results: [
                  "32% reduction in inventory costs",
                  "28% improvement in delivery times",
                  "45% better demand forecasting accuracy",
                  "₹78 million annual logistics savings"
                ]
              },
              {
                title: "Personalizing E-commerce",
                company: "ShopSmart Online",
                description: "How AI agents created hyper-personalized shopping experiences that boosted sales.",
                image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop",
                results: [
                  "42% increase in conversion rate",
                  "35% higher average order value",
                  "68% improvement in customer retention",
                  "3.2x ROI on AI implementation"
                ]
              }
            ].map((study, index) => (
              <AnimatedCard key={index} delay={0.1 * index} className="overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <Image 
                    src={study.image} 
                    alt={study.title} 
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-primary font-semibold mb-2">{study.company}</div>
                  <h3 className="text-xl font-bold mb-3">{study.title}</h3>
                  <p className="text-gray-600 mb-4">{study.description}</p>
                  
                  <h4 className="font-semibold mb-3 text-sm">Key Results:</h4>
                  <ul className="space-y-1 mb-6">
                    {study.results.map((result, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-gray-600">{result}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button variant="outline" size="sm">
                    <span className="flex items-center">
                      Read Full Case Study <ArrowRight size={14} className="ml-1" />
                    </span>
                  </Button>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-dark-light text-light">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Client Testimonials"
            subtitle="What our clients say about working with DeepNeural"
            centered
            className="text-light"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                quote: "DeepNeural's AI agents have completely transformed how we approach fraud detection. The system catches issues we would have missed and has saved us millions.",
                author: "Rajesh Kumar",
                position: "CTO, Global Bank Corp",
                rating: 5
              },
              {
                quote: "The diagnostic assistance provided by DeepNeural's AI has been invaluable. Our physicians can make faster, more accurate diagnoses while focusing more time on patient care.",
                author: "Dr. Priya Sharma",
                position: "Medical Director, MediTech Solutions",
                rating: 5
              },
              {
                quote: "Implementing DeepNeural's predictive maintenance solution was one of the best decisions we've made. Equipment downtime has plummeted, and our maintenance costs are down significantly.",
                author: "Vikram Mehta",
                position: "Operations Director, IndusTech Manufacturing",
                rating: 5
              },
              {
                quote: "The personalization capabilities of DeepNeural's AI agents have revolutionized our e-commerce platform. Our customers are finding products they love faster than ever.",
                author: "Ananya Patel",
                position: "Digital Strategy Head, ShopSmart Online",
                rating: 5
              },
              {
                quote: "DeepNeural's supply chain optimization solution has given us visibility and efficiency we never thought possible. The ROI has been exceptional.",
                author: "Sanjay Gupta",
                position: "Supply Chain Director, LogiTech Solutions",
                rating: 5
              },
              {
                quote: "Working with DeepNeural has been a game-changer for our customer service operations. Their AI agents handle routine inquiries flawlessly, allowing our team to focus on complex issues.",
                author: "Neha Singh",
                position: "Customer Experience Lead, RetailGiant India",
                rating: 5
              }
            ].map((testimonial, index) => (
              <AnimatedCard key={index} delay={0.1 * index} className="p-6 bg-dark-lighter">
                <div className="mb-4 text-primary">
                  <Quote size={32} />
                </div>
                
                <p className="text-light-dark mb-6 italic">&quot;{testimonial.quote}&quot;</p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-light">{testimonial.author}</p>
                    <p className="text-sm text-light-dark">{testimonial.position}</p>
                  </div>
                  
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-secondary fill-secondary" />
                    ))}
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Industries We Serve"
            subtitle="Our AI agents are creating value across diverse sectors"
            centered
          />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
            {[
              { name: "Financial Services", count: 35 },
              { name: "Healthcare", count: 28 },
              { name: "Manufacturing", count: 42 },
              { name: "Retail & E-commerce", count: 31 },
              { name: "Logistics & Supply Chain", count: 24 },
              { name: "Technology", count: 19 },
              { name: "Telecommunications", count: 15 },
              { name: "Energy & Utilities", count: 12 }
            ].map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.05 * index }}
                className="bg-white p-6 rounded-lg shadow-md text-center"
                whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
              >
                <h3 className="text-lg font-bold mb-2">{industry.name}</h3>
                <p className="text-primary font-semibold">{industry.count} Clients</p>
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
              Ready to Become Our Next Success Story?
            </motion.h2>
            
            <motion.p 
              className="text-xl mb-8 opacity-90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Join the growing list of companies transforming their operations with DeepNeural&apos;s AI agents.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button 
                variant="secondary" 
                size="lg"
                icon={<ArrowRight size={18} />}
                iconPosition="right"
              >
                <Link href="/contact">Get Started Today</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientsPage;