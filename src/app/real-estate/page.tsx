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
      'Property, investor, financial, and operational information is often spread across multiple systems, making it difficult to access accurate data, maintain consistency, and support informed business decisions.',
  },
  {
    icon: FileBarChart,
    title: 'Time-Intensive Reporting',
    description:
      'Preparing investment updates, portfolio performance reports, operational summaries, and business insights can require significant manual effort, reducing the time available for higher-value activities.',
  },
  {
    icon: FileText,
    title: 'Growing Document Complexity',
    description:
      'From due diligence materials and investment documents to contracts, compliance records, and operational files, managing large volumes of business information becomes increasingly challenging as portfolios expand.',
  },
  {
    icon: Network,
    title: 'Disconnected Operational Workflows',
    description:
      'Business processes often span multiple applications, requiring teams to switch between systems, duplicate information, and manually coordinate tasks across departments.',
  },
  {
    icon: Eye,
    title: 'Limited Operational Visibility',
    description:
      'Without connected data and centralised reporting, leadership teams may lack timely visibility into business performance, operational activities, and key information needed to support strategic decision-making.',
  },
  {
    icon: TrendingUp,
    title: "Technology That Doesn't Scale",
    description:
      'As firms grow, legacy systems and manual processes can make it harder to manage increasing business complexity, support larger portfolios, and maintain operational efficiency.',
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
    title: 'Smarter Decisions Through Artificial Intelligence',
    description:
      'Artificial Intelligence helps transform business information into actionable insights while reducing manual effort. Our AI solutions are designed to streamline everyday operations, improve information accessibility, and support faster, more informed decision-making.',
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
      "Every business has unique processes and operational requirements. We design and develop custom software that supports the way your organization works, helping teams improve productivity, centralize information, and scale with confidence.",
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
    title: 'Automate Repetitive Business Processes',
    description:
      'Manual processes can slow operations and increase administrative workload. Business Automation helps streamline routine activities, improve consistency, and enable teams to focus on higher-value responsibilities.',
    items: [
      'Workflow Automation',
      'CRM Automation',
      'Newsletter Automation',
      'Email Campaign Automation',
      'Follow-Up Automation',
      'Lead Tagging Automation',
      'Task Tracking Automation',
      'Document Workflows',
      'Approval Processes',
    ],
  },
  {
    icon: Network,
    label: 'System Integration',
    title: 'Connect Your Business Systems',
    description:
      'Business applications deliver greater value when they work together. We integrate existing systems to improve data flow, reduce information silos, and create a connected technology environment that supports efficient business operations.',
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
      'Provide investors with a secure, centralized platform to access investment updates, documents, reports, and important business information.',
  },
  {
    icon: Building2,
    title: 'Asset Management Platforms',
    description:
      'Manage property portfolios, operational activities, asset performance, and business information through a unified digital platform.',
  },
  {
    icon: Briefcase,
    title: 'Deal Management Systems',
    description:
      'Organize acquisition opportunities, monitor deal progress, and manage investment activities throughout the transaction lifecycle.',
  },
  {
    icon: LineChart,
    title: 'Investment Analytics Dashboards',
    description:
      'Visualize key business metrics, portfolio performance, and operational insights through interactive dashboards that support informed decision-making.',
  },
  {
    icon: FileText,
    title: 'Document Management Platforms',
    description:
      'Store, organize, search, and manage business documents securely while improving accessibility across teams.',
  },
  {
    icon: FileBarChart,
    title: 'Reporting Solutions',
    description:
      'Generate structured business reports, portfolio updates, operational summaries, and performance insights more efficiently.',
  },
  {
    icon: BookOpen,
    title: 'Knowledge Management Systems',
    description:
      "Create a centralized repository for business knowledge, internal documentation, policies, and operational information that teams can easily access.",
  },
  {
    icon: Layers,
    title: 'Internal Business Applications',
    description:
      "Develop custom business applications tailored to your organization's workflows, helping teams improve productivity and operational efficiency.",
  },
];

const segments: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Building2,
    title: 'Multifamily Investment',
    description:
      'Support multifamily investment firms with technology solutions that streamline operations, improve information management, automate business processes, and enhance portfolio visibility.',
  },
  {
    icon: Briefcase,
    title: 'Commercial Real Estate',
    description:
      'Help commercial real estate organizations improve operational efficiency, centralize business information, and support data-informed decision-making through connected technology platforms.',
  },
  {
    icon: Boxes,
    title: 'Assisted Living & Senior Housing',
    description:
      'Build solutions that simplify operational workflows, improve information accessibility, and support the day-to-day management of assisted living and senior housing portfolios.',
  },
  {
    icon: HardHat,
    title: 'Real Estate Developers',
    description:
      'Enable real estate developers to streamline project coordination, centralize business information, improve operational visibility, and support more efficient development workflows through custom technology solutions.',
  },
  {
    icon: Landmark,
    title: 'Private Equity Real Estate',
    description:
      'Support private equity real estate firms with scalable technology for investment operations, portfolio management, reporting, and business processes.',
  },
  {
    icon: Layers,
    title: 'Real Estate Investment Firms',
    description:
      'Deliver integrated technology solutions that combine Artificial Intelligence, Custom Software Development, Business Automation, and connected business systems to support operational efficiency, business growth, and long-term scalability.',
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
      'Machine Learning • Generative AI • Large Language Models (LLMs) • AI Automation',
    value:
      'Develop intelligent solutions that automate repetitive work, analyze business information, extract insights from documents, improve knowledge accessibility, and support more informed business decisions.',
  },
  {
    icon: Code,
    label: 'Frontend Development',
    technologies: 'React • Next.js • JavaScript',
    value:
      'Build responsive, user-friendly business applications, investor portals, dashboards, and web platforms that deliver a modern digital experience across desktop and mobile devices.',
  },
  {
    icon: Server,
    label: 'Backend Development',
    technologies: 'Node.js • Python • REST APIs',
    value:
      'Power secure business logic, process complex workflows, integrate Artificial Intelligence capabilities, and support scalable enterprise applications.',
  },
  {
    icon: Database,
    label: 'Database & Cloud Infrastructure',
    technologies: 'PostgreSQL • AWS • Vercel',
    value:
      'Provide reliable data storage, secure cloud deployment, high availability, and scalable infrastructure that supports growing business operations.',
  },
  {
    icon: Network,
    label: 'System Integration',
    technologies:
      'REST APIs • Third-Party Integrations • CRM Integration • Cloud Connectivity',
    value:
      'Connect business applications, synchronize information across systems, reduce manual data movement, and create a unified technology ecosystem.',
  },
  {
    icon: Workflow,
    label: 'Business Automation',
    technologies:
      'Workflow Automation • CRM Automation • AI Workflows • Process Automation',
    value:
      'Automate repetitive business activities, streamline operational workflows, improve process consistency, and increase organizational efficiency.',
  },
];

const whyChooseUs: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Building2,
    title: 'Industry-Focused Approach',
    description:
      'We develop technology with the operational needs of Real Estate Investment businesses in mind, creating solutions that align with investment workflows, business processes, and organizational objectives.',
  },
  {
    icon: Briefcase,
    title: 'Business-First Thinking',
    description:
      'Technology should support business goals, not complicate them. Every solution is designed to improve efficiency, simplify operations, and deliver measurable value for your organization.',
  },
  {
    icon: Brain,
    title: 'AI + Software Expertise',
    description:
      'Our team combines Artificial Intelligence, Custom Software Development, Business Automation, and System Integration to create connected technology solutions tailored to your business requirements.',
  },
  {
    icon: Code,
    title: 'Built for Your Business',
    description:
      'Rather than adapting generic software, we design solutions around your existing processes, operational priorities, and long-term technology strategy.',
  },
  {
    icon: Layers,
    title: 'Scalable Technology',
    description:
      'As your portfolio and business grow, your technology should grow with you. We build secure, scalable solutions that support changing business needs without requiring complete system redesigns.',
  },
  {
    icon: Users,
    title: 'A Long-Term Technology Partner',
    description:
      'We believe successful technology extends beyond implementation. From planning and development to optimization and ongoing support, we work alongside your team to help your technology continue delivering value as your business evolves.',
  },
];

const processSteps: { number: string; title: string; description: string }[] = [
  {
    number: '01',
    title: 'Understand Your Business',
    description:
      'We start by learning about your business objectives, operational workflows, existing technology environment, and the challenges you want to solve.',
  },
  {
    number: '02',
    title: 'Evaluate the Right Solution',
    description:
      'We assess whether your requirements can be addressed through an existing DeepNeural solution, a customized implementation, or a new solution designed specifically for your business.',
  },
  {
    number: '03',
    title: 'Design & Plan',
    description:
      'If a custom solution is required, we define the solution architecture, technical approach, implementation roadmap, and delivery plan to ensure it aligns with your business requirements.',
  },
  {
    number: '04',
    title: 'Develop & Validate',
    description:
      'Our team develops, integrates, and thoroughly tests every component to ensure performance, security, reliability, and compatibility with your business environment.',
  },
  {
    number: '05',
    title: 'Deploy & Enable',
    description:
      'Once approved, we deploy the solution, support implementation, and help your team transition with minimal disruption to day-to-day operations.',
  },
  {
    number: '06',
    title: 'Continuous Optimization',
    description:
      'As your business evolves, we provide ongoing enhancements, technical support, and performance improvements to help your technology continue delivering long-term value.',
  },
];

const faqs = [
  {
    question: 'Can DeepNeural develop custom software for Real Estate Investment firms?',
    answer:
      'Yes. We design and develop custom software tailored to your business requirements, operational workflows, and long-term technology objectives. Every solution is built around your organization rather than adapting your processes to off-the-shelf software.',
  },
  {
    question: 'Can Artificial Intelligence be integrated into our existing systems?',
    answer:
      'Yes. Our AI solutions can integrate with your existing business applications, CRM platforms, databases, and operational systems to enhance workflows without requiring a complete technology replacement.',
  },
  {
    question: 'Do you work with US-based Real Estate Investment firms?',
    answer:
      'Yes. We work with Real Estate Investment firms, developers, and related businesses, with a primary focus on organizations operating in the United States.',
  },
  {
    question: 'Can solutions be customized for our business?',
    answer:
      'Absolutely. Every organization has unique operational priorities and technology requirements. We develop tailored solutions that align with your existing processes, business goals, and future growth plans.',
  },
  {
    question: 'Do you provide ongoing support after deployment?',
    answer:
      'Yes. Our engagement extends beyond implementation. We provide ongoing maintenance, enhancements, technical support, and continuous optimization to help your technology evolve alongside your business.',
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
            Intelligence, Custom Software Development, and Business
            Automation to streamline business operations, optimise
            workflows, improve decision-making, and build scalable
            technology solutions tailored to their business objectives.
          </p>
          <p className="text-base md:text-lg text-light-dark mb-10 max-w-3xl mx-auto">
            From investor platforms and business applications to AI-powered
            automation and system integration, we develop practical
            technology solutions that help Real Estate Investment firms
            modernise operations and support long-term business growth.
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

      {/* 2. Technology for Real Estate Investment */}
      <section className="py-20 px-4 md:px-15 bg-white dark:bg-black">
        <div className="container mx-auto relative z-10">
          <SectionIntro
            eyebrow="Technology for Real Estate Investment"
            heading="Helping Real Estate Investment Firms Operate More Efficiently"
            intro={[
              'Real Estate Investment firms manage a wide range of business functions, from acquisitions and asset management to investor relations, reporting, document management, compliance, and day-to-day operations. As portfolios grow, these processes often become more complex, requiring teams to work across multiple systems, and time-sensitive workflows.',
              'Modern technology enables firms to simplify these operations through Artificial Intelligence, Custom Software Development, Business Automation, and integrated digital platforms. By connecting systems, automating routine processes, and improving access to business information, technology can help organisations work more efficiently, strengthen operational visibility, and support informed decision-making.',
              'At DeepNeural, we develop technology solutions tailored to the operational needs of Real Estate Investment firms, helping businesses build scalable systems that support both current requirements and future growth.',
            ]}
          />
        </div>
      </section>

      {/* 3. Challenges Faced by Real Estate Investment Firms */}
      <section className="py-20 px-4 md:px-15 bg-blue-50 dark:bg-zinc-900">
        <div className="container mx-auto relative z-10">
          <SectionIntro
            eyebrow="Industry Challenges"
            heading="Technology Challenges That Can Limit Business Growth"
            intro="As Real Estate Investment firms grow, managing information, operations, and business processes becomes increasingly complex. Many organisations rely on multiple systems, manual workflows, and disconnected data, making it difficult to maintain operational efficiency and gain timely business insights."
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
            eyebrow="Our Solutions"
            heading="Technology Solutions Built for Real Estate Investment Firms"
            intro="Every Real Estate Investment firm operates differently, which is why technology should align with your business—not the other way around. DeepNeural combines Artificial Intelligence, Custom Software Development, Business Automation, and System Integration to help modernize operations, improve efficiency, and support long-term business growth."
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
      <section className="py-20 px-4 md:px-15 bg-blue-50 dark:bg-zinc-900">
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
      <section className="py-20 px-4 md:px-15 bg-white dark:bg-black">
        <div className="container mx-auto relative z-10">
          <SectionIntro
            eyebrow="Business Solutions"
            heading="Technology Solutions We Build"
            intro="Every Real Estate Investment firm has unique operational requirements. DeepNeural develops custom technology solutions that help streamline business processes, improve access to information, and support more efficient day-to-day operations. Below are examples of the types of solutions we can design and develop based on your business needs."
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
      <section className="py-20 px-4 md:px-15 bg-blue-50 dark:bg-zinc-900">
        <div className="container mx-auto relative z-10">
          <SectionIntro
            eyebrow="Industry Segments"
            heading="Supporting Diverse Real Estate Investment Businesses"
            intro="Different Real Estate Investment businesses face different operational challenges, investment strategies, and technology needs. DeepNeural develops Artificial Intelligence, Custom Software, Business Automation, and technology solutions tailored to the needs of different segments across the Real Estate Investment industry."
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
      <section className="py-20 px-4 md:px-15 bg-white dark:bg-black">
        <div className="container mx-auto relative z-10">
          <SectionIntro
            eyebrow="Technology Stack"
            heading="Modern Technology Built for Real Estate Investment Solutions"
            intro="DeepNeural combines Artificial Intelligence, modern software development, cloud infrastructure, and system integration technologies to build secure, scalable, and business-focused solutions for Real Estate Investment firms. Every technology we use is selected to improve performance, support operational efficiency, and create solutions that grow alongside your business."
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
      <section className="py-20 px-4 md:px-15 bg-zinc-950 text-white">
        <div className="container mx-auto relative z-10">
          <SectionIntro
            eyebrow="Why DeepNeural"
            heading="Technology and Services Built Around Real Estate Investment Businesses"
            intro="Choosing the right technology partner goes beyond technical expertise. It requires an understanding of how Real Estate Investment businesses operate, the challenges they face, and the outcomes they want to achieve. DeepNeural combines industry understanding with Artificial Intelligence, Custom Software Development, and Business Automation to deliver solutions that support long-term business success."
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
      <section className="py-20 px-4 md:px-15 bg-white dark:bg-black">
        <div className="container mx-auto relative z-10">
          <SectionIntro
            eyebrow="Our Process"
            heading="A Practical Approach to Delivering Technology Solutions"
            intro="Successful technology initiatives begin with a clear understanding of business objectives, operational priorities, and technical requirements. We begin by evaluating your needs, identifying the most effective approach, and recommending the solution that delivers the greatest value—whether that's an existing solution, a customized implementation, or a completely new build."
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

      {/* 11. Final CTA */}
      <section className="py-20 px-4 md:px-15 bg-zinc-950 text-white relative overflow-hidden">
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
