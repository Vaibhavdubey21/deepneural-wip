'use client';

import { AnimatedHero } from '@/components/ui/animated-hero-section-1';
import { useRouter } from 'next/navigation';

function HeroSection() {
  const router = useRouter();

  return (
    <AnimatedHero
      backgroundImageUrl="/hero%20section%20image.jpg"
      logo={null}
      navLinks={[]}
      title="AI-powered Real Estate Investment Operations Company"
      description="We help US real estate investors close more deals by combining trained offshore operations specialists with AI automation."
      ctaButton={{
        text: 'Book a Consultation',
        onClick: () => router.push('/contact-us'),
      }}
      secondaryCta={{
        text: 'See Our Work',
        onClick: () => router.push('/our-work'),
      }}
    />
  );
}

export default HeroSection;
