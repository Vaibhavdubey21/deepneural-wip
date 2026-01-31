'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedCard from './components/AnimatedCard';
import BentoDemo from './components/BentoDemo';
import Button from './components/Button';
import SectionHeader from './components/SectionHeader';
import HeroSection from './components/sections/HeroSection';

export default function HomePage() {
  // Test commit for vercel deployment
  const topics = [
    {
      title: 'Autonomous Reasoning',
      description:
        'Our agents can reason through complex problems, make decisions, and learn from outcomes without human intervention.',
      url: 'https://images.pexels.com/photos/2085832/pexels-photo-2085832.jpeg',
    },
    {
      title: 'Knowledge Integration',
      description:
        'Seamlessly connect to your existing data sources and knowledge bases to leverage institutional knowledge.',
      url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Real-time Processing',
      description:
        'Process and respond to data streams in real-time, enabling immediate action and adaptation.',
      url: 'https://images.unsplash.com/photo-1633451238042-85d93d267866?q=80&w=2352&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Human-like Interaction',
      description:
        'Natural language capabilities that make interaction with AI agents intuitive and productive for all users.',
      url: 'https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Predictive Analytics',
      description:
        'Forecast trends, identify opportunities, and mitigate risks before they impact your business.',
      url: 'https://images.pexels.com/photos/6770611/pexels-photo-6770611.jpeg',
    },
    {
      title: 'Enterprise Security',
      description:
        'Built with security-first architecture ensuring your data and operations remain protected.',
      url: 'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg',
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Landing page intro */}
      <HeroSection />

      <section className="py-20 px-15 bg-blue-100 dark:bg-linear-to-b from-[#0a0a0a] to-gray-700 relative">
        <div className="container mx-auto relative z-10">
          <SectionHeader
            subheading="Engineering intelligent autonomy"
            heading="Cutting-Edge AI"
            description="Our AI agents leverage the latest advancements in GenAI and neural networks to deliver intelligent solutions."
          />
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            plugins={[Autoplay({ delay: 4000 })]}
            className="w-full"
          >
            <CarouselContent className="px-4 py-8">
              {topics.map((feature, index) => (
                <CarouselItem
                  key={index}
                  className="flex items-center justify-center md:basis-1/2 lg:basis-1/3"
                >
                  <AnimatedCard
                    key={index}
                    className={`w-md h-80 rounded-2xl border transition-all duration-300 group hover:scale-105 border-gray-200 dark:border-slate-700 shadow-md hover:shadow-xl dark:shadow-lg dark:hover:shadow-2xl flex flex-col relative overflow-hidden`}
                  >
                    <Image
                      src={feature.url}
                      alt="Image"
                      loading="lazy"
                      priority={false}
                      width={900}
                      height={900}
                      objectFit="cover"
                      className="absolute top-0 left-0 w-full h-full"
                    />

                    {/* Content wrapper at the bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 backdrop-blur-lg rounded-t-2xl">
                      <h3 className="text-xl font-bold mb-3 text-white transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-200 leading-relaxed text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </AnimatedCard>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      <section className="py-20 px-15 dark:bg-linear-to-b from-gray-700 to-black relative">
        <div className="absolute bottom-0 right-0 w-50 h-50 bg-blue-600/30 rounded-full filter blur-3xl -mr-20 -mb-20"></div>
        <div className="container mx-auto relative z-10">
          <SectionHeader
            subheading="From vision to value"
            heading="Success Stories"
            description="Discover how DeepNeural AI agents have transformed businesses across various industries, driving innovation and efficiency."
          />
          <BentoDemo />
          <div className="text-center mt-16">
            <Link href="/clients">
              <Button
                variant="primary"
                size="lg"
                className="shadow-2xl shadow-white hover:shadow-white hover:-translate-y-1 transition-all duration-300 px-5 py-2 rounded-xl bg-linear-to-r from-primary to-primary/90 border border-primary/20 group !text-white"
              >
                <div className="flex items-center gap-3 font-medium">
                  View All Case Studies
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </div>
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* Enhanced CTA Section */}
      <section
        className="
    pt-32 pb-48 px-6
    bg-zinc-950
    relative overflow-hidden
    text-white
  "
      >
        {/* Background */}
        <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] bg-center opacity-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-24 -mt-24"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/20 rounded-full blur-3xl -ml-24 -mb-24"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              className="
          text-3xl md:text-4xl
          font-bold mb-6 font-display
          text-white
        "
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Ready to transform your business with AI?
            </motion.h2>

            <motion.p
              className="
          text-lg md:text-xl mb-10
          text-zinc-400
        "
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Join the growing list of companies leveraging our AI agent
              technology to solve complex challenges.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/contact-us">
                <Button
                  variant="secondary"
                  size="lg"
                  icon={<ArrowRight size={18} />}
                  iconPosition="right"
                  className="shadow-xl transition-all"
                >
                  Get in touch
                </Button>
              </Link>

              <Link href="/about-us">
                <Button
                  variant="outline"
                  size="lg"
                  className="
              border-white/20 text-white
              hover:bg-white/10
              transition-colors
            "
                >
                  Learn More About Us
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
