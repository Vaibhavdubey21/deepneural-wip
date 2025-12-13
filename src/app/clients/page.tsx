'use client';
import { ArrowRight, Quote, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import AnimatedCard from '../components/AnimatedCard';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import HeaderSection from '../components/sections/HeaderSection';

const ClientsPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeaderSection
        title="Our Clients & Success Stories"
        subtitle="See how our AI agents are transforming businesses across industries"
      />

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
                title: 'HR Recruitment GenAI SaaS Platform',
                company: 'NeoSource',
                industry: 'Human Resources',
                description:
                  'Leveraging GenAI to streamline recruitment processes, reducing time-to-hire by 60% and improving candidate quality through intelligent matching algorithms.',
                image: '/AI.jpg',
              },
              {
                title: 'AI SaaS Dental Imaging Platform',
                company: '4EDental.com',
                industry: 'Healthcare',
                description:
                  'Revolutionizing dental imaging with AI-powered diagnostics that detect issues with 98% accuracy, helping dentists provide better care and reduce misdiagnosis.',
                image: '/meditech.jpg',
              },
              {
                title: 'Manufacturing Process Optimization',
                company: 'PrecisionTech Industries',
                industry: 'Manufacturing',
                description:
                  'Implementing AI agents to monitor production lines, resulting in 35% reduction in defects, 22% increase in throughput, and significant energy savings.',
                image: '/manufacturing.jpg',
              },
            ].map((study, index) => (
              <AnimatedCard
                key={index}
                delay={0.1 * index}
                className="overflow-hidden"
              >
                <div className="relative h-48 mb-4">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <span className="text-sm font-medium text-primary-dark">
                      {study.industry}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                  <p className="text-gray-600 mb-4">{study.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{study.company}</span>
                    <Link
                      href="/contact-us"
                      className="text-primary hover:text-primary-dark flex items-center text-sm font-medium"
                    >
                      Read more <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Client Testimonials"
            subtitle="What our clients say about working with DeepNeural"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                quote:
                  'The AI agents developed by DeepNeural have transformed our recruitment process, saving us countless hours and helping us find better candidates faster.',
                author: 'Gaurav Gupta',
                position: 'Recruitment Industry Leader, NeoSource',
                rating: 5,
              },
              {
                quote:
                  'Working with DeepNeural has been a game-changer for our dental practice. Their AI imaging platform has significantly improved our diagnostic accuracy.',
                author: 'Dr. Michael Chen',
                position: 'Founder, 4EDental.com',
                rating: 5,
              },
              {
                quote:
                  "The manufacturing optimization solution provided by DeepNeural exceeded our expectations. We've seen dramatic improvements in efficiency and quality.",
                author: 'Robert Patel',
                position: 'COO, PrecisionTech Industries',
                rating: 5,
              },
            ].map((testimonial, index) => (
              <AnimatedCard key={index} delay={0.1 * index} className="p-6">
                <div className="mb-4 text-primary">
                  <Quote size={32} />
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold">{testimonial.author}</h4>
                    <p className="text-sm text-gray-500">
                      {testimonial.position}
                    </p>
                  </div>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="text-yellow-500 fill-current"
                      />
                    ))}
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
            Ready to transform your business with AI?
          </h2>
          <p className="text-xl text-light-dark max-w-2xl mx-auto mb-8">
            Join the growing list of companies leveraging our AI agent
            technology to solve complex challenges
          </p>
          <Link href="/contact-us">
            <Button variant="primary" size="lg">
              Get in touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ClientsPage;
