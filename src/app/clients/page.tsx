"use client";
import { Quote, Star } from "lucide-react";
import Link from "next/link";
import React from "react";
import AnimatedCard from "../components/AnimatedCard";
import BentoDemo from "../components/BentoDemo";
import Button from "../components/Button";
import SectionHeading from "../components/SectionHeading";
import HeaderSection from "../components/sections/HeaderSection";

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
                  "The AI agents developed by DeepNeural have transformed our recruitment process, saving us countless hours and helping us find better candidates faster.",
                author: "Gaurav Gupta",
                position: "Recruitment Industry Leader, NeoSource",
                rating: 5,
              },
              {
                quote:
                  "DeepNeural Technologies transformed our vision of a Syadvada Logic AI Chatbot into a powerful and intelligent solution. Their technical expertise, innovative AI architecture, and dedicated development support made a highly complex project successful. The team's professionalism, collaboration, and commitment to excellence exceeded our expectations. I highly recommend DeepNeural Technologies for any advanced AI development project.",
                author: "Dr. Pragati Jain",
                position: "Head of Mathematics",
                rating: 5,
              },
              {
                quote:
                  "DeepNeural Technologies delivered outstanding digital content and design services for my book publication project. Their team handled everything from creative cover design to technical optimization with exceptional quality and efficiency. Their responsiveness to feedback and attention to detail made the entire process seamless. I sincerely appreciate their professionalism and highly recommend their services.",
                author: "Ranjana Sehgal",
                position:
                  "POSH and CSR Consultant, Independent Director, former Professor and Principal, Author, Secretary – SATYA",
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
      <section className="py-20 bg-zinc-950 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 text-white">
            Ready to transform your business with AI?
          </h2>

          <p className="text-xl max-w-2xl mx-auto mb-8 text-zinc-400">
            Join the growing list of companies leveraging our AI agent
            technology to solve complex challenges
          </p>

          <Link href="/contact-us">
            <Button
              variant="secondary"
              size="lg"
              className="shadow-xl transition-all"
            >
              Get in touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ClientsPage;
