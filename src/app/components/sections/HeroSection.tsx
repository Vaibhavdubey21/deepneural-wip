'use client';

import { Highlight } from '@/components/ui/hero-highlight';
import { WavyBackground } from '@/components/ui/wavy-background';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from '../Button';

function HeroSection() {
  return (
    <div className="relative min-h-screen md:h-90 w-full rounded-md flex flex-col items-center justify-center bg-white dark:bg-black">
      <WavyBackground>
        <div className="mx-auto relative z-10 bg-transparent">
          <div className="flex flex-col items-center">
            <div className="mb-12 md:mb-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight mb-6 text-black dark:text-white text-center">
                  AI-enabled Real Estate Investment
                  <br />
                  <Highlight className="text-black dark:text-white">
                    Operations Company
                  </Highlight>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-light-dark mb-8 max-w-2xl text-center mx-auto"
              >
                We help US real estate investors close more deals by combining
                trained offshore operations specialists with AI automation.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap justify-center gap-4"
              >
                <Link href="/contact-us">
                  <Button
                    variant="primary"
                    size="lg"
                    className="shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all !text-white bg-black dark:bg-white dark:!text-black"
                  >
                    Book a Consultation
                  </Button>
                </Link>
                <Link href="/clients">
                  <Button
                    variant="outline"
                    size="lg"
                    className="transition-all"
                  >
                    See Our Work
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </WavyBackground>
    </div>
  );
}

export default HeroSection;
