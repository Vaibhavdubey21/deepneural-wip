import { Highlight } from '@/components/ui/hero-highlight';
import { WavyBackground } from '@/components/ui/wavy-background';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
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
                  Innovating Tomorrow’s
                  <br />
                  <Highlight className="text-black dark:text-white">
                    AI Solutions
                  </Highlight>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-light-dark mb-8 max-w-lg text-center mx-auto"
              >
                DeepNeural is pioneering autonomous AI agents that transform how
                businesses operate. Our cutting-edge solutions deliver
                unprecedented efficiency and intelligence.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap justify-center"
              >
                <Link href="/services">
                  <Button
                    variant="primary"
                    size="lg"
                    icon={<ArrowRight size={18} />}
                    iconPosition="right"
                    className="shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all !text-white bg-black dark:bg-white"
                  >
                    Explore Our Solutions
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
