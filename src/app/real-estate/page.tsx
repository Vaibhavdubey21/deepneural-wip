'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  BarChart3,
  Briefcase,
  Brain,
  Building2,
  CheckCircle,
  Code,
  Database,
  Eye,
  FileBarChart,
  FileSearch,
  FileText,
  Handshake,
  Layers,
  LineChart,
  MessageSquare,
  Network,
  Search,
  Server,
  TrendingUp,
  Users,
  Workflow,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Spotlight } from '@/components/ui/spotlight-new';
import Button from '../components/Button';
import { useTheme } from '../components/ThemeProvider';

const challenges: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Database,
    title: 'Manual Data Management',
    description:
      'Managing property, investor, and operational data across multiple systems can reduce efficiency.',
  },
  {
    icon: BarChart3,
    title: 'Complex Reporting',
    description:
      'Generating investment reports, performance analysis, and updates requires significant time and effort.',
  },
  {
    icon: FileText,
    title: 'Document-Heavy Processes',
    description:
      'Investment firms handle large volumes of documents including agreements, reports, and financial records.',
  },
  {
    icon: Network,
    title: 'Disconnected Systems',
    description: 'Multiple tools and platforms can create fragmented workflows.',
  },
  {
    icon: Eye,
    title: 'Limited Business Visibility',
    description:
      'Without centralized dashboards, decision-makers lack real-time insights.',
  },
  {
    icon: TrendingUp,
    title: 'Scaling Operations',
    description:
      'Growing investment portfolios require technology that can scale with business needs.',
  },
];

const howWeHelp: {
  icon: LucideIcon;
  title: string;
  goal: string;
  examples: string[];
}[] = [
  {
    icon: Zap,
    title: 'AI-Powered Automation',
    goal: 'Automate repetitive tasks, extract valuable information, and improve operational efficiency.',
    examples: ['AI document processing', 'Intelligent workflows', 'AI assistants'],
  },
  {
    icon: Code,
    title: 'Custom Software Solutions',
    goal: 'Build platforms tailored to investment operations.',
    examples: [
      'Investor portals',
      'Internal management systems',
      'Custom dashboards',
      'Business applications',
    ],
  },
  {
    icon: Network,
    title: 'System Integration',
    goal: 'Connect existing business tools into a unified ecosystem.',
    examples: ['CRM integrations', 'Data synchronization', 'Workflow automation'],
  },
];

const aiSolutions: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: FileText,
    title: 'AI Document Intelligence',
    description:
      'Analyze and organize large volumes of investment-related documents.',
  },
  {
    icon: MessageSquare,
    title: 'AI Assistants',
    description:
      'Enable teams to quickly access information and automate routine tasks.',
  },
  {
    icon: Search,
    title: 'Intelligent Search',
    description: 'Quickly find relevant information across documents and systems.',
  },
];

const softwareSolutions: {
  icon: LucideIcon;
  title: string;
  bullets?: string[];
  description?: string;
}[] = [
  {
    icon: Users,
    title: 'Investor Portals',
    bullets: ['Investment updates', 'Reports', 'Documents', 'Portfolio information'],
  },
  {
    icon: Building2,
    title: 'Asset Management Platforms',
    bullets: ['Properties', 'Performance data', 'Operations'],
  },
  {
    icon: Briefcase,
    title: 'Deal Management Systems',
    bullets: ['Opportunities', 'Transactions', 'Investment pipelines'],
  },
  {
    icon: Layers,
    title: 'Custom Business Applications',
    description: 'Software designed around specific business workflows.',
  },
];

const useCases: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: FileSearch,
    title: 'AI Due Diligence Assistant',
    description:
      'Automate document review and extract important investment information.',
  },
  {
    icon: Users,
    title: 'Investor Relationship Platform',
    description:
      'Improve communication and provide investors with centralized access to information.',
  },
  {
    icon: LineChart,
    title: 'Investment Analytics Dashboard',
    description: 'Monitor portfolio performance and business metrics.',
  },
  {
    icon: FileBarChart,
    title: 'Automated Reporting System',
    description: 'Generate reports faster with reduced manual effort.',
  },
  {
    icon: Workflow,
    title: 'Deal Pipeline Management Platform',
    description: 'Track opportunities and investment activities.',
  },
  {
    icon: Brain,
    title: 'AI-Powered Knowledge Assistant',
    description: 'Help teams quickly access internal business information.',
  },
];

const techGroups: { icon: LucideIcon; title: string; items: string[] }[] = [
  {
    icon: Brain,
    title: 'AI Technologies',
    items: [
      'Machine Learning',
      'Generative AI',
      'Large Language Models',
      'AI Automation',
    ],
  },
  {
    icon: Server,
    title: 'Development Technologies',
    items: [
      'Frontend frameworks',
      'Backend technologies',
      'Databases',
      'Cloud platforms',
      'API integrations',
    ],
  },
];

const whyChooseUs: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Building2,
    title: 'Industry-Focused Approach',
    description:
      'We understand the operational needs of real estate investment businesses.',
  },
  {
    icon: Code,
    title: 'Custom-Built Solutions',
    description: 'We create technology based on specific business requirements.',
  },
  {
    icon: Brain,
    title: 'AI + Software Expertise',
    description:
      'We combine modern AI capabilities with strong software development practices.',
  },
  {
    icon: Layers,
    title: 'Scalable Technology',
    description: 'Solutions designed to support business growth.',
  },
  {
    icon: Handshake,
    title: 'Long-Term Partnership',
    description: 'We work with businesses beyond initial development.',
  },
];

const processSteps = [
  { number: '01', title: 'Understand Business Requirements' },
  { number: '02', title: 'Identify Technology Opportunities' },
  { number: '03', title: 'Design Solution Architecture' },
  { number: '04', title: 'Develop & Test' },
  { number: '05', title: 'Deploy Solution' },
  { number: '06', title: 'Provide Continuous Support' },
];

const faqs = [
  {
    question: 'Can DeepNeural build custom software for real estate investment firms?',
    answer:
      'Yes, we develop tailored software solutions based on specific operational requirements.',
  },
  {
    question: 'Can AI be integrated into existing business processes?',
    answer:
      'Yes, AI solutions can be integrated with existing workflows and systems.',
  },
  {
    question: 'Do you work with US-based companies?',
    answer:
      'Yes, DeepNeural works with businesses looking for AI and software development solutions.',
  },
];

const cardWrapper =
  'rounded-2xl border border-gray-200 dark:border-slate-700 shadow-md hover:shadow-xl bg-white dark:bg-zinc-800 p-6 transition-shadow duration-300';

function SectionIntro({
  eyebrow,
  heading,
  intro,
  dark,
}: {
  eyebrow: string;
  heading: string;
  intro: string;
  dark?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-12 md:mb-14 max-w-3xl"
    >
      <p
        className={`text-sm font-medium tracking-wide uppercase mb-3 ${
          dark ? 'text-zinc-400' : 'text-zinc-600 dark:text-zinc-400'
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`text-3xl md:text-4xl font-bold tracking-tight mb-4 ${
          dark ? 'text-white' : 'text-zinc-900 dark:text-zinc-100'
        }`}
      >
        {heading}
      </h2>
      <p
        className={`text-base md:text-lg leading-relaxed ${
          dark ? 'text-zinc-400' : 'text-zinc-600 dark:text-zinc-400'
        }`}
      >
        {intro}
      </p>
    </motion.div>
  );
}

export default function RealEstatePage() {
  const { theme } = useTheme();
  const [isDark, setIsDark] = useState(theme === 'dark');

  useEffect(() => {
    setIsDark(theme === 'dark');
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
    <div>
      {/* 1. Hero */}
      <section className="relative min-h-[70vh] w-full flex flex-col items-center justify-center bg-white dark:bg-black px-4 pt-32">
        <div className="hidden md:block">
          <Spotlight
            gradientFirst={spotlightGradients.gradientFirst}
            gradientSecond={spotlightGradients.gradientSecond}
            gradientThird={spotlightGradients.gradientThird}
            height={1100}
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center relative z-10"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display leading-tight mb-6 text-black dark:text-white">
            Technology Solutions for Modern Real Estate Investment Firms
          </h1>
          <p className="text-xl text-light-dark mb-10 max-w-4xl mx-auto">
            DeepNeural helps real estate investment companies leverage
            Artificial Intelligence and custom software solutions to
            automate operations, improve decision-making, and build
            scalable digital platforms.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact-us">
              <Button
                variant="primary"
                size="lg"
                icon={<ArrowRight size={18} />}
                iconPosition="right"
                className="!text-white"
              >
                Book a Consultation
              </Button>
            </Link>
            <Link href="/contact-us">
              <Button variant="outline" size="lg">
                Discuss Your Project
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 2. About Real Estate Investment Technology */}
      <section className="py-20 px-4 md:px-15 bg-white dark:bg-black">
        <div className="container mx-auto relative z-10">
          <SectionIntro
            eyebrow="Overview"
            heading="About Real Estate Investment Technology"
            intro="Real estate investment firms manage complex processes involving acquisitions, asset management, investor relations, reporting, and operational workflows. Traditional processes often involve disconnected systems, manual reporting, and time-consuming tasks. DeepNeural helps firms modernize these operations through AI-powered solutions, automation, and custom software platforms designed around their business needs."
          />
        </div>
      </section>

      {/* 3. Challenges Faced by Real Estate Investment Firms */}
      <section className="py-20 px-4 md:px-15 bg-blue-50 dark:bg-zinc-900">
        <div className="container mx-auto relative z-10">
          <SectionIntro
            eyebrow="Challenges"
            heading="Challenges Faced by Real Estate Investment Firms"
            intro="Investment firms navigate complex, data-heavy operations every day. Here is where technology gaps tend to show up most."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.08 * index }}
                className={cardWrapper}
              >
                <item.icon size={20} className="text-primary mb-3" />
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. How DeepNeural Helps */}
      <section className="py-20 px-4 md:px-15 bg-white dark:bg-black">
        <div className="container mx-auto relative z-10">
          <SectionIntro
            eyebrow="How We Help"
            heading="How DeepNeural Helps Real Estate Investment Firms"
            intro="We connect these challenges to practical, business-focused technology across three areas."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {howWeHelp.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.08 * index }}
                className={cardWrapper}
              >
                <category.icon size={20} className="text-primary mb-3" />
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
                  {category.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm mb-4">
                  {category.goal}
                </p>
                <ul className="space-y-2">
                  {category.examples.map((example) => (
                    <li key={example} className="flex items-start gap-2">
                      <CheckCircle
                        size={14}
                        className="text-primary flex-shrink-0 mt-1"
                      />
                      <span className="text-zinc-600 dark:text-zinc-400 text-sm">
                        {example}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. AI Solutions for Real Estate Investment */}
      <section className="py-20 px-4 md:px-15 bg-blue-50 dark:bg-zinc-900">
        <div className="container mx-auto relative z-10">
          <SectionIntro
            eyebrow="AI Solutions"
            heading="AI Solutions for Real Estate Investment"
            intro="Practical AI capabilities that help teams move faster and make better-informed decisions."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiSolutions.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.08 * index }}
                className={cardWrapper}
              >
                <item.icon size={20} className="text-primary mb-3" />
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Software Solutions for Real Estate Investment */}
      <section className="py-20 px-4 md:px-15 bg-white dark:bg-black">
        <div className="container mx-auto relative z-10">
          <SectionIntro
            eyebrow="Software Solutions"
            heading="Software Solutions for Real Estate Investment"
            intro="Custom-built platforms designed around how investment firms actually operate."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {softwareSolutions.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.08 * index }}
                className={cardWrapper}
              >
                <item.icon size={20} className="text-primary mb-3" />
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                {item.bullets ? (
                  <ul className="space-y-2">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <CheckCircle
                          size={14}
                          className="text-primary flex-shrink-0 mt-1"
                        />
                        <span className="text-zinc-600 dark:text-zinc-400 text-sm">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                    {item.description}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Solution Use Cases */}
      <section className="py-20 px-4 md:px-15 bg-blue-50 dark:bg-zinc-900">
        <div className="container mx-auto relative z-10">
          <SectionIntro
            eyebrow="Use Cases"
            heading="Solutions We Can Build for Real Estate Investment Firms"
            intro="The examples below illustrate the types of solutions we can build for real estate investment firms — they are illustrative capabilities, not necessarily completed projects."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.08 * index }}
                className={cardWrapper}
              >
                <item.icon size={20} className="text-primary mb-3" />
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Technology Stack */}
      <section className="py-20 px-4 md:px-15 bg-white dark:bg-black">
        <div className="container mx-auto relative z-10">
          <SectionIntro
            eyebrow="Technology"
            heading="Technology Stack"
            intro="The technologies behind the AI and software solutions we build for real estate investment firms."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {techGroups.map((group, index) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className={cardWrapper}
              >
                <group.icon size={20} className="text-primary mb-3" />
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-4">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 text-primary font-semibold text-sm border border-primary/20"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Why Real Estate Investment Firms Choose DeepNeural */}
      <section className="py-20 px-4 md:px-15 bg-zinc-950 text-white">
        <div className="container mx-auto relative z-10">
          <SectionIntro
            eyebrow="Why DeepNeural"
            heading="Why Real Estate Investment Firms Choose DeepNeural"
            intro="A business-first technology partner built around the way investment firms operate."
            dark
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.08 * index }}
                className="rounded-2xl border border-slate-700 shadow-md hover:shadow-xl bg-zinc-900 p-6 transition-shadow duration-300"
              >
                <item.icon size={20} className="text-primary mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Our Process */}
      <section className="py-20 px-4 md:px-15 bg-white dark:bg-black">
        <div className="container mx-auto relative z-10">
          <SectionIntro
            eyebrow="Our Process"
            heading="Our Process"
            intro="A clear, repeatable process for turning business requirements into working technology."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.08 * index }}
                className={cardWrapper}
              >
                <span className="inline-block text-sm font-bold text-primary bg-primary/10 dark:bg-primary/20 px-3 py-1 rounded-full mb-4 w-fit">
                  {step.number}
                </span>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                  {step.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FAQs */}
      <section className="py-20 px-4 md:px-15 bg-blue-50 dark:bg-zinc-900">
        <div className="container mx-auto relative z-10">
          <SectionIntro
            eyebrow="FAQs"
            heading="Frequently Asked Questions"
            intro="Answers to common questions about working with DeepNeural."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className={cardWrapper}
              >
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Final CTA */}
      <section className="py-20 px-4 md:px-15 bg-zinc-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-24 -mt-24 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/20 rounded-full blur-3xl -ml-24 -mb-24 pointer-events-none" />
        <div className="container mx-auto relative z-10 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
            Transform Your Real Estate Investment Operations with AI & Software
            Solutions
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact-us">
              <Button
                variant="primary"
                size="lg"
                icon={<ArrowRight size={18} />}
                iconPosition="right"
                className="!text-white shadow-xl transition-all"
              >
                Book a Consultation
              </Button>
            </Link>
            <Link href="/contact-us">
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 transition-colors"
              >
                Talk to Our Experts
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
