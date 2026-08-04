import { motion } from 'framer-motion';

type propTypes = {
  subheading?: string;
  heading?: string;
  description?: string;
};

function SectionHeader(propTypes: propTypes) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-8 md:mb-10 max-w-2xl"
    >
      <p className="text-sm font-medium tracking-wide text-zinc-600 dark:text-zinc-400">
        {propTypes.subheading}
      </p>
      <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
        {propTypes.heading}
      </h2>
      <p className="mt-3 text-base md:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
        {propTypes.description}
      </p>
    </motion.div>
  );
}

export default SectionHeader;
