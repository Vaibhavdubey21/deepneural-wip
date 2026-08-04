'use client';

import { motion } from 'framer-motion';
import {
  Award,
  Boxes,
  Brain,
  Briefcase,
  BookOpen,
  Building2,
  Code,
  Database,
  Eye,
  FileBarChart,
  FileText,
  HardHat,
  Landmark,
  Layers,
  LineChart,
  Network,
  Rocket,
  Server,
  TrendingUp,
  Users,
  Workflow,
  type LucideIcon,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Spotlight } from '@/components/ui/spotlight-new';
import Button from '../components/Button';
import { useTheme } from '../components/ThemeProvider';

const challenges: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Database,
    title: 'Fragmented Business Information',
    description:
      'Business data is often spread across multiple systems, making it difficult to access accurate information and maintain consistency.',
  },
  {
    icon: FileBarChart,
    title: 'Time-Intensive Reporting',
    description:
      'Investment updates, portfolio reporting, and business insights often require significant manual effort, reducing time for higher-value activities.',
  },
  {
    icon: FileText,
    title: 'Growing Document Complexity',
    description:
      'Managing due diligence, contracts, compliance records, and investment documents becomes increasingly challenging as portfolios expand.',
  },
  {
    icon: Network,
    title: 'Disconnected Operational Workflows',
    description:
      'Disconnected applications and manual processes create inefficiencies, duplicate work, and slow collaboration across teams.',
  },
  {
    icon: Eye,
    title: 'Limited Operational Visibility',
    description:
      'Without centralized data and reporting, leadership teams may lack the insights needed to make timely business decisions.',
  },
  {
    icon: TrendingUp,
    title: "Technology That Doesn't Scale",
    description:
      'Legacy systems and manual processes can limit growth, making it harder to support larger portfolios and evolving business needs.',
  },
];

const solutionAreas: {
  icon: LucideIcon;
  label: string;
  title: string;
  description: string;
  items: string[];
}[] = [
  {
    icon: Brain,
    label: 'Artificial Intelligence',
    title: 'Smarter Decisions with AI',
    description:
      'Leverage AI to automate routine work, improve information access, and support faster decision-making.',
    items: [
      'AI Document Processing',
      'AI Business Assistants',
      'Intelligent Search',
      'Information Extraction',
    ],
  },
  {
    icon: Code,
    label: 'Custom Software Development',
    title: 'Software Built Around Your Business',
    description:
      'Develop custom platforms that support your workflows, improve collaboration, and scale with your business.',
    items: [
      'Investor Portals',
      'Business Platforms',
      'Internal Management Systems',
      'Business Dashboards',
    ],
  },
  {
    icon: Workflow,
    label: 'Business Automation',
    title: 'Streamline Everyday Operations',
    description:
      'Automate repetitive processes to improve efficiency, consistency, and team productivity.',
    items: [
      'Workflow Automation',
      'CRM Automation',
      'Newsletter Automation',
      'Email Campaign Automation',
      'Follow-Up Automation',
      'Lead Tagging Automation',
      'Task Tracking Automation',
      'Document Workflows',
    ],
  },
  {
    icon: Network,
    label: 'System Integration',
    title: 'Connect Your Business Systems',
    description:
      'Integrate business applications to improve data flow, eliminate information silos, and create a connected technology ecosystem.',
    items: [
      'API Integrations',
      'CRM Integrations',
      'Data Synchronization',
      'Cloud Connectivity',
    ],
  },
];

const servicePackages: { icon: LucideIcon; name: string; description: string }[] = [
  {
    icon: Rocket,
    name: 'Starter',
    description:
      'Launch your syndication business professionally with a complete credibility foundation — brand, website, and CRM setup.',
  },
  {
    icon: TrendingUp,
    name: 'Growth',
    description:
      'Everything in Starter, plus monthly investor outreach, content, newsletters, acquisition support, lead magnets, webinars, and light operations. Includes a free CRM account.',
  },
  {
    icon: Award,
    name: 'Premium',
    description:
      'Everything in Growth, plus advanced capital-raise systems, automation, underwriting admin, asset management reporting, paid ads management, and priority execution. Includes a free CRM account.',
  },
];

const businessSolutions: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Users,
    title: 'Property Portals',
    description:
      'Secure portals that give investors easy access to updates, reports, and documents.',
  },
  {
    icon: Building2,
    title: 'Asset Management Platforms',
    description:
      'Centralize portfolio, asset, and operational management in one platform.',
  },
  {
    icon: Briefcase,
    title: 'Deal Management Systems',
    description:
      'Track acquisition opportunities from pipeline to closing.',
  },
  {
    icon: LineChart,
    title: 'Investment Analytics Dashboards',
    description:
      'Monitor portfolio performance and key business metrics in real time.',
  },
  {
    icon: FileText,
    title: 'Document Management Platforms',
    description:
      'Organize, search, and manage business documents securely.',
  },
  {
    icon: FileBarChart,
    title: 'Reporting Solutions',
    description:
      'Generate investment, portfolio, and operational reports more efficiently.',
  },
  {
    icon: BookOpen,
    title: 'Knowledge Management Systems',
    description:
      'Centralize internal knowledge, documentation, and business information.',
  },
  {
    icon: Layers,
    title: 'Internal Business Applications',
    description:
      'Custom applications designed around your workflows and operations.',
  },
];

const segments: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Building2,
    title: 'Multifamily Investment',
    description:
      'Technology that supports acquisitions, investor management, portfolio operations, and asset performance.',
  },
  {
    icon: Briefcase,
    title: 'Commercial Real Estate',
    description:
      'Solutions that streamline property operations, reporting, and business management across commercial portfolios.',
  },
  {
    icon: HardHat,
    title: 'Real Estate Developers',
    description:
      'Platforms that improve project coordination, document management, and development workflows.',
  },
  {
    icon: Landmark,
    title: 'Private Equity Real Estate',
    description:
      'Technology that supports investment operations, portfolio reporting, and investor communication.',
  },
  {
    icon: Boxes,
    title: 'Assisted Living & Senior Housing',
    description:
      'Solutions that simplify operations, improve information management, and support portfolio oversight.',
  },
];

const techCategories: {
  icon: LucideIcon;
  label: string;
  technologies: string;
  value: string;
}[] = [
  {
    icon: Brain,
    label: 'Artificial Intelligence',
    technologies:
      'Machine Learning • Generative AI • Large Language Models • AI Automation',
    value:
      'Develop intelligent solutions that automate workflows and support better business decisions.',
  },
  {
    icon: Code,
    label: 'Frontend Development',
    technologies: 'React • Next.js • JavaScript',
    value:
      'Build modern investor portals, dashboards, and business applications.',
  },
  {
    icon: Server,
    label: 'Backend Development',
    technologies: 'Node.js • Python • REST APIs',
    value: 'Power secure, scalable applications and business workflows.',
  },
  {
    icon: Database,
    label: 'Database & Cloud Infrastructure',
    technologies: 'PostgreSQL • AWS • Vercel',
    value: 'Deliver reliable, secure, and scalable cloud infrastructure.',
  },
  {
    icon: Network,
    label: 'System Integration',
    technologies:
      'REST APIs • Third-Party Integrations • CRM Integration • Cloud Connectivity',
    value: 'Connect business systems through seamless data integration.',
  },
  {
    icon: Workflow,
    label: 'Business Automation',
    technologies:
      'Workflow Automation • CRM Automation • AI Workflows • Process Automation',
    value:
      'Automate repetitive processes and improve operational efficiency.',
  },
];

const whyChooseUs: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Building2,
    title: 'Industry-Focused Expertise',
    description:
      'We understand the operational workflows, investment processes, and technology needs of Real Estate Investment businesses.',
  },
  {
    icon: Briefcase,
    title: 'Business-Driven Solutions',
    description:
      'Every solution is designed to solve business challenges, improve efficiency, and support measurable outcomes.',
  },
  {
    icon: Brain,
    title: 'Connected Technology',
    description:
      'We combine AI, custom software, automation, and system integration into connected business solutions.',
  },
  {
    icon: Code,
    title: 'Built Around Your Operations',
    description:
      'Our solutions are tailored to your workflows, operational priorities, and long-term objectives.',
  },
  {
    icon: Layers,
    title: 'Designed to Scale',
    description:
      'We build secure, scalable technology that grows alongside your business.',
  },
  {
    icon: Users,
    title: 'A Long-Term Partner',
    description:
      'From strategy and implementation to ongoing optimization, we support your business as technology and operational needs evolve.',
  },
];

const processSteps: { number: string; title: string; description: string }[] = [
  {
    number: '01',
    title: 'Understand Your Business',
    description:
      'We learn about your business objectives, operational workflows, existing technology, and the challenges you want to solve.',
  },
  {
    number: '02',
    title: 'Evaluate the Right Solution',
    description:
      'We determine whether your requirements are best addressed with an existing DeepNeural solution, a customized implementation, or a new solution built specifically for your business.',
  },
  {
    number: '03',
    title: 'Design & Plan',
    description:
      'When a custom solution is needed, we define the architecture, implementation roadmap, and delivery plan.',
  },
  {
    number: '04',
    title: 'Develop & Validate',
    description:
      'We develop, integrate, and thoroughly test every component to ensure security, performance, and reliability.',
  },
  {
    number: '05',
    title: 'Deploy & Enable',
    description:
      'We deploy the solution, support implementation, and help your team adopt it with minimal disruption.',
  },
  {
    number: '06',
    title: 'Continuous Optimization',
    description:
      'We provide ongoing enhancements, support, and performance improvements as your business evolves.',
  },
];

const faqs = [
  {
    question: 'Can DeepNeural develop custom software for Real Estate Investment firms?',
    answer:
      'Yes. Every solution is designed around your business workflows and technology requirements.',
  },
  {
    question: 'Can Artificial Intelligence integrate with our existing systems?',
    answer:
      'Yes. Our AI solutions integrate with existing business applications, CRM platforms, databases, and other operational systems.',
  },
  {
    question: 'Do you work with US-based Real Estate Investment firms?',
    answer:
      'Yes. We primarily work with Real Estate Investment firms, developers, and related businesses across the United States.',
  },
  {
    question: 'Can solutions be customized for our business?',
    answer:
      'Absolutely. Every solution is tailored to your operational priorities, business goals, and technology requirements.',
  },
  {
    question: 'Do you provide ongoing support after deployment?',
    answer:
      'Yes. We provide ongoing support, maintenance, enhancements, and continuous optimization.',
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
  intro: string | string[];
  dark?: boolean;
}) {
  const paragraphs = Array.isArray(intro) ? intro : [intro];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-8 md:mb-10 max-w-3xl"
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
      {paragraphs.map((paragraph, index) => (
        <p
          key={index}
          className={`text-base md:text-lg leading-relaxed ${
            index < paragraphs.length - 1 ? 'mb-4' : ''
          } ${dark ? 'text-zinc-400' : 'text-zinc-600 dark:text-zinc-400'}`}
        >
          {paragraph}
        </p>
      ))}
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
          <p className="text-xl text-light-dark mb-6 max-w-4xl mx-auto">
            DeepNeural helps Real Estate Investment firms leverage Artificial
            Intelligence, Custom Software Development, and Business Automation
            to streamline operations, improve decision-making, and build
            scalable technology tailored to their business goals.
          </p>
          <p className="text-base md:text-lg text-light-dark mb-10 max-w-3xl mx-auto">
            From investor platforms and business applications to AI-powered
            automation and system integration, we build practical solutions
            that simplify operations, improve efficiency, and support
            long-term growth.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
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
            <Link href="/contact-us">
              <Button variant="outline" size="lg">
                Discuss Your Project
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 2. Technology for Real Estate Investment */}
      <section className="py-16 px-4 sm:px-6 md:px-12 bg-white dark:bg-black">
        <div className="container mx-auto relative z-10">
          <SectionIntro
            eyebrow="Technology for Real Estate Investment"
            heading="Helping Real Estate Investment Firms Operate More Efficiently"
            intro={[
              'Real Estate Investment firms manage acquisitions, asset management, investor relations, reporting, compliance, documents, and other critical business functions. As portfolios grow, these activities become increasingly complex, often spanning multiple systems and workflows.',
              'Artificial Intelligence, Custom Software Development, Business Automation, and integrated digital platforms help simplify operations, connect business systems, and improve access to information for faster, more informed decision-making.',
              'At DeepNeural, we develop technology tailored to the operational needs of Real Estate Investment firms, helping organizations build efficient, scalable systems that support long-term growth.',
            ]}
          />
        </div>
      </section>

      {/* 3. Challenges Faced by Real Estate Investment Firms */}
      <section className="py-16 px-4 sm:px-6 md:px-12 bg-blue-50 dark:bg-zinc-900">
        <div className="container mx-auto relative z-10">
          <SectionIntro
            eyebrow="Industry Challenges"
            heading="Technology Challenges That Can Limit Business Growth"
            intro="As Real Estate Investment firms grow, managing information, processes, and technology becomes increasingly complex. Disconnected systems, manual workflows, and fragmented data can reduce efficiency, limit visibility, and slow informed decision-making."
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
      <section className="py-16 px-4 sm:px-6 md:px-12 bg-white dark:bg-black">
        <div className="container mx-auto relative z-10">
          <SectionIntro
            eyebrow="Our Solutions"
            heading="Technology Solutions Built for Real Estate Investment Firms"
            intro="Every Real Estate Investment firm has different operational priorities. DeepNeural combines Artificial Intelligence, Custom Software Development, Business Automation, and System Integration to deliver technology aligned with your business goals."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutionAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.08 * index }}
                className={cardWrapper}
              >
                <area.icon size={20} className="text-primary mb-3" />
                <p className="text-xs font-medium tracking-wide text-primary uppercase mb-2">
                  {area.label}
                </p>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">
                  {area.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm mb-4">
                  {area.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {area.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-full bg-primary/10 dark:bg-primary/20 text-primary font-medium text-xs border border-primary/20"
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

      {/* 4b. Service Packages */}
      <section className="py-16 px-4 sm:px-6 md:px-12 bg-blue-50 dark:bg-zinc-900">
        <div className="container mx-auto relative z-10">
          <SectionIntro
            eyebrow="Flexible Engagement Options"
            heading="Service Packages"
            intro="Whether you're exploring a single technology initiative or planning a broader digital transformation, DeepNeural offers flexible service packages designed to match your business objectives, operational priorities, and growth plans."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {servicePackages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className={cardWrapper}
              >
                <pkg.icon size={20} className="text-primary mb-3" />
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">
                  {pkg.name}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                  {pkg.description}
                </p>
              </motion.div>
            ))}
          </div>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-200"
          >
            Explore our packages
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* 5. Business Solutions */}
      <section className="py-16 px-4 sm:px-6 md:px-12 bg-white dark:bg-black">
        <div className="container mx-auto relative z-10">
          <SectionIntro
            eyebrow="Business Solutions"
            heading="Technology Solutions We Build"
            intro="We design and develop technology solutions tailored to the operational needs of Real Estate Investment firms. Here are examples of the platforms and applications we can build for your business."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessSolutions.map((item, index) => (
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

      {/* 6. Real Estate Investment Segments We Support */}
      <section className="py-16 px-4 sm:px-6 md:px-12 bg-blue-50 dark:bg-zinc-900">
        <div className="container mx-auto relative z-10">
          <SectionIntro
            eyebrow="Who We Support"
            heading="Technology Solutions for Every Stage of Real Estate Investment"
            intro="Every Real Estate Investment business operates differently. We develop technology solutions tailored to the operational priorities of each segment across the investment lifecycle."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {segments.map((item, index) => (
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

      {/* 7. Technology Stack */}
      <section className="py-16 px-4 sm:px-6 md:px-12 bg-white dark:bg-black">
        <div className="container mx-auto relative z-10">
          <SectionIntro
            eyebrow="Technology Expertise"
            heading="Modern Technology Built for Real Estate Investment"
            intro="We combine Artificial Intelligence, modern software development, cloud infrastructure, and system integration to build secure, scalable technology for Real Estate Investment firms."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {techCategories.map((group, index) => (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.08 * index }}
                className={cardWrapper}
              >
                <group.icon size={20} className="text-primary mb-3" />
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">
                  {group.label}
                </h3>
                <p className="text-primary font-medium text-sm mb-3">
                  {group.technologies}
                </p>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                  {group.value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Why Real Estate Investment Firms Choose DeepNeural */}
      <section className="py-16 px-4 sm:px-6 md:px-12 bg-zinc-950 text-white">
        <div className="container mx-auto relative z-10">
          <SectionIntro
            eyebrow="Why DeepNeural"
            heading="A Technology Partner That Understands Real Estate Investment"
            intro="Technology delivers the greatest value when it's built around the way Real Estate Investment businesses operate. DeepNeural combines industry understanding with Artificial Intelligence, Custom Software Development, and Business Automation to develop practical solutions that support long-term growth."
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

      {/* 9. Our Process */}
      <section className="py-16 px-4 sm:px-6 md:px-12 bg-white dark:bg-black">
        <div className="container mx-auto relative z-10">
          <SectionIntro
            eyebrow="Our Process"
            heading="A Practical Approach to Delivering Technology Solutions"
            intro="Every project begins with understanding your business, evaluating the right approach, and recommending the solution that delivers the greatest value—whether that's an existing solution, a customized implementation, or a completely new build."
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
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FAQs */}
      <section className="py-16 px-4 sm:px-6 md:px-12 bg-blue-50 dark:bg-zinc-900">
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

      {/* 11. Final CTA */}
      <section className="py-16 px-4 sm:px-6 md:px-12 bg-zinc-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-24 -mt-24 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/20 rounded-full blur-3xl -ml-24 -mb-24 pointer-events-none" />
        <div className="container mx-auto relative z-10 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let&apos;s Build Technology That Moves Your Real Estate Investment
            Business Forward
          </h2>
          <p className="text-lg text-zinc-400 mb-10 leading-relaxed">
            Whether you&apos;re planning to implement Artificial Intelligence,
            develop custom software, automate business operations, or
            modernize your existing technology, DeepNeural is ready to help
            you identify the right solution for your business objectives and
            long-term growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            <Link href="/contact-us">
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 transition-colors"
              >
                Discuss Your Project
              </Button>
            </Link>
            <Link href="/contact-us">
              <Button
                variant="ghost"
                size="lg"
                className="text-white hover:bg-white/10 transition-colors"
              >
                Send Us Inquiry
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
