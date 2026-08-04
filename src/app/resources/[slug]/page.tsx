'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import Button from '../../components/Button';
import HeaderSection from '../../components/sections/HeaderSection';
import { getPostBySlug } from '../posts';

export default function BlogPostPage() {
  const params = useParams<{ slug: string }>();
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div>
      <HeaderSection title={post.title} subtitle={formattedDate} />

      <section className="py-16 px-4 sm:px-6 md:px-12 bg-white dark:bg-black">
        <div className="container mx-auto relative z-10 max-w-3xl">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline mb-10"
          >
            <ArrowLeft size={16} />
            Back to Resources
          </Link>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-medium tracking-wide text-zinc-600 dark:text-zinc-400 uppercase mb-8"
          >
            {post.category}
          </motion.p>

          <div className="space-y-6">
            {post.content.map((block, index) => {
              const lines = block.split('\n');
              const bulletPrefixes = ['✔️', '✅', '📌', '📋', '⌨️', '📧', '🔄', '📂'];
              const isChecklist =
                lines.length > 1 &&
                lines.every((line) =>
                  bulletPrefixes.some((prefix) => line.startsWith(prefix))
                );

              if (isChecklist) {
                return (
                  <motion.ul
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="space-y-2"
                  >
                    {lines.map((line, lineIndex) => {
                      const text = bulletPrefixes
                        .reduce((acc, prefix) => acc.replace(prefix, ''), line)
                        .trim();
                      return (
                        <li
                          key={lineIndex}
                          className="text-base md:text-lg leading-relaxed text-zinc-700 dark:text-zinc-300"
                        >
                          {text}
                        </li>
                      );
                    })}
                  </motion.ul>
                );
              }

              return (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-base md:text-lg leading-relaxed text-zinc-700 dark:text-zinc-300 whitespace-pre-line"
                >
                  {block}
                </motion.p>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 md:px-12 bg-zinc-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-24 -mt-24 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/20 rounded-full blur-3xl -ml-24 -mb-24 pointer-events-none" />
        <div className="container mx-auto relative z-10 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Have a Question or a Project in Mind?
          </h2>
          <p className="text-lg text-zinc-400 mb-10 leading-relaxed">
            Talk to our team about how AI and custom software can support
            your business.
          </p>
          <Link href="/contact-us">
            <Button
              variant="primary"
              size="lg"
              movingBorder
              icon={<ArrowRight size={18} />}
              iconPosition="right"
              className="!text-white shadow-xl transition-all"
            >
              Book a Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
