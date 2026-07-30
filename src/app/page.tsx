import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Button from './components/Button';
import AboutSection from './components/sections/AboutSection';
import HeroSection from './components/sections/HeroSection';
import OurWorkSection from './components/sections/OurWorkSection';
import RealEstateSection from './components/sections/RealEstateSection';
import ResourcesSection from './components/sections/ResourcesSection';
import ServicesSection from './components/sections/ServicesSection';
import TechStackSection from './components/sections/TechStackSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import WhyChooseSection from './components/sections/WhyChooseSection';

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <AboutSection />
      <RealEstateSection />
      <ServicesSection />
      <WhyChooseSection />
      <OurWorkSection />
      <TechStackSection />
      <TestimonialsSection />
      <ResourcesSection />

      <section className="py-20 px-4 md:px-15 bg-zinc-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-24 -mt-24 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/20 rounded-full blur-3xl -ml-24 -mb-24 pointer-events-none" />
        <div className="container mx-auto relative z-10 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Transform the Way Your Real Estate Investment Business Operates
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed">
            Whether you&apos;re looking to modernise operations, strengthen
            your digital presence, implement Artificial Intelligence, or build
            custom software for your Real Estate Investment business, we&apos;re
            here to help you find the right technology solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/contact-us">
              <Button
                variant="primary"
                size="lg"
                icon={<ArrowRight size={18} />}
                iconPosition="right"
                className="!text-white shadow-xl transition-all"
              >
                Book a Free Strategy Call
              </Button>
            </Link>
            <Link href="/contact-us">
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 transition-colors"
              >
                Get in Touch
              </Button>
            </Link>
          </div>
          <p className="text-zinc-500 text-sm">
            Partnering with Real Estate Investment firms in the United States
            to build AI-powered and custom technology solutions.
          </p>
        </div>
      </section>
    </div>
  );
}
