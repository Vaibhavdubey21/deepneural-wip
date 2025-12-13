import { Spotlight } from '@/components/ui/spotlight-new';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTheme } from '../ThemeProvider';

function HeaderSection({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  const { theme } = useTheme();
  const [isDark, setIsDark] = useState(theme === 'dark');

  useEffect(() => {
    if (theme === 'dark') {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, [theme]);

  const spotlightGradients = isDark
    ? {
        gradientFirst:
          'radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(210, 100%, 70%, .15) 0, hsla(210, 100%, 50%, .06) 50%, hsla(210, 100%, 40%, 0) 80%)',
        gradientSecond:
          'radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 70%, .12) 0, hsla(210, 100%, 50%, .04) 80%, transparent 100%)',
        gradientThird:
          'radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 70%, .1) 0, hsla(210, 100%, 40%, .03) 80%, transparent 100%)',
      }
    : {
        gradientFirst:
          'radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(210, 100%, 40%, .18) 0, hsla(210, 100%, 30%, .08) 50%, hsla(210, 100%, 20%, 0) 80%)',
        gradientSecond:
          'radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 40%, .15) 0, hsla(210, 100%, 30%, .06) 80%, transparent 100%)',
        gradientThird:
          'radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 40%, .12) 0, hsla(210, 100%, 20%, .04) 80%, transparent 100%)',
      };
  return (
    <div className="relative min-h-[50vh] md:h-90 w-full rounded-md flex flex-col items-center justify-center bg-white dark:bg-black">
      <Spotlight
        gradientFirst={spotlightGradients.gradientFirst}
        gradientSecond={spotlightGradients.gradientSecond}
        gradientThird={spotlightGradients.gradientThird}
        height={1100}
      />
      <div className="mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display leading-tight mb-6 text-black dark:text-white text-center">
              {title}
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-light-dark mb-8 max-w-4xl text-center mx-auto"
          >
            {subtitle}
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export default HeaderSection;
