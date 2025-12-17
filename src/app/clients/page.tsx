'use client';
import { Quote, Star } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import AnimatedCard from '../components/AnimatedCard';
import BentoDemo from '../components/BentoDemo';
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
      <section className="py-20 px-4 dark:bg-black bg-white">
        <SectionHeading
          title="Case Studies"
          subtitle="Real-world examples of how our AI agents are creating value"
          centered
        />
        <BentoDemo />
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
              <AnimatedCard key={index} className="p-6 dark:bg-zinc-800">
                <div className="mb-4 text-primary">
                  <Quote size={32} />
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6 italic">
                  &quot;{testimonial.quote}&quot;
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
