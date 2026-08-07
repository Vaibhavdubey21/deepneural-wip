'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  Award,
  Bot,
  Brain,
  Building2,
  Cloud,
  Code,
  Database,
  FileText,
  Gauge,
  Globe,
  Layers,
  LineChart,
  ListChecks,
  Mail,
  MessageSquare,
  Network,
  Repeat,
  Rocket,
  Send,
  Server,
  Smile,
  Tag,
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

const cardWrapper =
  'rounded-lg border border-gray-200 dark:border-slate-700 shadow-md hover:shadow-xl bg-white dark:bg-zinc-800 p-6 transition-shadow duration-300';

const iconBadge =
  'inline-flex p-3 rounded-lg bg-primary/10 dark:bg-primary/20 text-primary mb-4 w-fit';

const serviceCategories: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Brain,
    title: 'Artificial Intelligence',
    description:
      'Leverage AI to automate processes, extract insights from business data, and support faster, more informed decision-making.',
  },
  {
    icon: Code,
    title: 'Custom Software Development',
    description:
      'Design and develop secure, scalable software tailored to your business processes, operational needs, and long-term growth.',
  },
  {
    icon: Workflow,
    title: 'Business Automation',
    description:
      'Automate repetitive workflows, connect business systems, and streamline operations to improve productivity and efficiency.',
  },
];

const aiSolutions: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Bot,
    title: 'AI Agents',
    description:
      'Develop AI agents that automate business tasks, assist teams, and streamline day-to-day operations through intelligent, context-aware interactions.',
  },
  {
    icon: MessageSquare,
    title: 'AI Chatbots',
    description:
      'Build AI-powered chatbots that enhance customer engagement, provide instant support, and deliver consistent conversational experiences across digital channels.',
  },
  {
    icon: FileText,
    title: 'Document AI',
    description:
      'Create intelligent document processing solutions that extract, classify, and organize information from business documents with greater speed and accuracy.',
  },
  {
    icon: Zap,
    title: 'AI Workflow Automation',
    description:
      'Implement AI-powered workflow automation that streamlines repetitive processes, improves operational efficiency, and enables smarter business operations.',
  },
];

const customSoftware: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Globe,
    title: 'Web Applications',
    description:
      'Develop responsive web applications that improve business operations, enhance user experiences, and support digital transformation initiatives.',
  },
  {
    icon: Cloud,
    title: 'SaaS Platforms',
    description:
      'Design and develop scalable Software-as-a-Service (SaaS) platforms that support subscription-based products, business operations, and long-term growth.',
  },
  {
    icon: Building2,
    title: 'Enterprise Software',
    description:
      'Create enterprise-grade software that streamlines operations, centralizes business information, and improves collaboration across teams.',
  },
  {
    icon: Users,
    title: 'CRM Development',
    description:
      'Develop custom CRM solutions that help manage customer relationships, organize business data, and optimize sales and service processes.',
  },
];

const businessAutomation: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Users,
    title: 'CRM Automation',
    description:
      'Automate lead management, customer interactions, follow-ups, and sales processes to improve efficiency and strengthen customer relationships.',
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    description:
      'Eliminate repetitive manual tasks by automating business workflows across departments, applications, and operational processes.',
  },
  {
    icon: Mail,
    title: 'Newsletter Automation',
    description:
      'Automate the creation, scheduling, and distribution of newsletters to deliver consistent communication with customers, clients, and stakeholders.',
  },
  {
    icon: Send,
    title: 'Email Campaign Automation',
    description:
      'Build automated email campaigns that nurture leads, engage customers, and deliver timely communications throughout the customer journey.',
  },
  {
    icon: Repeat,
    title: 'Follow-Up Automation',
    description:
      'Automatically trigger follow-up communications based on customer actions, business events, or predefined workflows to improve engagement and response times.',
  },
  {
    icon: Tag,
    title: 'Lead Tagging Automation',
    description:
      'Automatically categorize, score, and organize leads based on behavior, source, or business-defined criteria for more effective sales and marketing.',
  },
  {
    icon: ListChecks,
    title: 'Task Tracking Automation',
    description:
      'Automate task creation, assignment, reminders, and progress tracking to improve team coordination and operational visibility.',
  },
  {
    icon: FileText,
    title: 'Document Workflow Automation',
    description:
      'Streamline document creation, routing, approvals, and management to improve accuracy, reduce delays, and maintain process consistency.',
  },
];

const solutionsWeBuild: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Bot,
    title: 'AI Assistants',
    description:
      'Develop intelligent AI assistants that automate business tasks, provide instant access to information, and support everyday operations.',
  },
  {
    icon: MessageSquare,
    title: 'AI Chatbots',
    description:
      'Build AI-powered chatbots that enhance customer engagement, automate support, and deliver seamless conversational experiences.',
  },
  {
    icon: Globe,
    title: 'Customer Portals',
    description:
      'Design secure customer portals that provide customers, partners, and stakeholders with centralized access to information, documents, and business services.',
  },
  {
    icon: LineChart,
    title: 'Business Dashboards',
    description:
      'Create interactive dashboards that visualize business data, monitor key metrics, and support informed decision-making.',
  },
  {
    icon: Users,
    title: 'CRM Systems',
    description:
      'Develop custom CRM systems that centralize customer information, streamline sales processes, and strengthen relationship management.',
  },
  {
    icon: Layers,
    title: 'Internal Business Applications',
    description:
      'Build custom business applications that simplify internal operations, improve collaboration, and support day-to-day business activities.',
  },
  {
    icon: Workflow,
    title: 'Workflow Management Systems',
    description:
      'Design workflow management systems that automate business processes, improve task coordination, and increase operational efficiency.',
  },
  {
    icon: Network,
    title: 'API Integrations',
    description:
      'Integrate business applications through secure APIs to enable seamless data exchange, improve connectivity, and create a unified technology ecosystem.',
  },
];

const growthServices: { number: string; title: string; description: string }[] = [
  {
    number: '01',
    title: 'Campaign Strategy & Execution',
    description:
      'Design and execute targeted campaigns that help businesses reach the right audience and generate qualified opportunities.',
  },
  {
    number: '02',
    title: 'Business Website Development',
    description:
      'Build professional websites that strengthen credibility, communicate your value, and support business growth.',
  },
  {
    number: '03',
    title: 'Drip Lead Generation Sequence Management',
    description:
      'Create automated lead nurturing sequences that engage prospects through timely and personalized communication.',
  },
  {
    number: '04',
    title: 'AI-Powered Video Podcast Production',
    description:
      'Manage the end-to-end production of AI-assisted video podcasts that help organizations build authority and increase visibility.',
  },
  {
    number: '05',
    title: 'Social Media Marketing',
    description:
      'Develop content strategies and manage social media presence to strengthen brand awareness and audience engagement.',
  },
  {
    number: '06',
    title: 'AI-Assisted Presentation Design',
    description:
      'Create professional presentations, pitch decks, reports, and business materials enhanced by AI-assisted design.',
  },
  {
    number: '07',
    title: 'Lead Generation',
    description:
      'Implement targeted lead generation strategies that help businesses identify and connect with qualified prospects.',
  },
  {
    number: '08',
    title: 'CRM Automation',
    description:
      'Automate customer relationship workflows, lead tracking, follow-ups, and sales processes to improve operational efficiency.',
  },
  {
    number: '09',
    title: 'Custom Business & Technology Solutions',
    description:
      "Deliver additional technology and operational solutions tailored to your organization's specific business requirements.",
  },
];

const businessValue: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: TrendingUp,
    title: 'Improve Operational Efficiency',
    description:
      'Streamline business operations by reducing manual effort, simplifying workflows, and enabling teams to work more effectively.',
  },
  {
    icon: Brain,
    title: 'AI Enablement',
    description:
      'Empower your business with practical AI solutions that enhance productivity, support smarter decision-making, and automate routine work—allowing teams to focus on higher-value activities.',
  },
  {
    icon: Zap,
    title: 'Automate Repetitive Processes',
    description:
      'Replace time-consuming manual tasks with intelligent automation that improves consistency, accuracy, and productivity.',
  },
  {
    icon: Gauge,
    title: 'Accelerate Decision-Making',
    description:
      'Provide faster access to business information and actionable insights that support confident, data-driven decisions.',
  },
  {
    icon: Network,
    title: 'Connect Business Systems',
    description:
      'Integrate applications and business data to eliminate information silos and create a more connected operational environment.',
  },
  {
    icon: Layers,
    title: 'Scale With Confidence',
    description:
      'Build secure, scalable technology that adapts to evolving business needs and supports sustainable growth.',
  },
  {
    icon: Smile,
    title: 'Enhance Customer Experiences',
    description:
      'Deliver seamless digital experiences through modern applications, intelligent automation, and responsive customer interactions.',
  },
];

const techCapabilities: {
  icon: LucideIcon;
  label: string;
  technologies: string;
  value: string;
}[] = [
  {
    icon: Brain,
    label: 'Artificial Intelligence',
    technologies: 'Machine Learning • Generative AI • Large Language Models (LLMs) • AI Automation',
    value:
      'Build intelligent solutions that automate business processes, generate insights, and support smarter decision-making.',
  },
  {
    icon: Code,
    label: 'Frontend Development',
    technologies: 'React • Next.js • JavaScript',
    value:
      'Develop responsive, user-friendly applications that deliver seamless digital experiences across web platforms.',
  },
  {
    icon: Server,
    label: 'Backend Development',
    technologies: 'Node.js • Python • REST APIs',
    value:
      'Power secure, scalable applications with reliable business logic, data processing, and system functionality.',
  },
  {
    icon: Database,
    label: 'Databases & Cloud Infrastructure',
    technologies: 'PostgreSQL • AWS • Vercel',
    value:
      'Ensure secure data management, reliable cloud deployment, and scalable infrastructure that supports business growth.',
  },
  {
    icon: Network,
    label: 'Integrations',
    technologies: 'REST APIs • CRM Integrations • Third-Party Integrations • Cloud Connectivity',
    value:
      'Connect business applications, synchronize data, and create unified technology ecosystems that improve operational efficiency.',
  },
  {
    icon: Cloud,
    label: 'Deployment',
    technologies:
      'Cloud Deployment • Performance Optimization • Application Monitoring • Security Best Practices',
    value:
      'Deploy applications securely, optimize performance, and ensure reliable operation across production environments.',
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

export default function ServicesPage() {
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
            AI, Software & Real Estate Investment Technology Services
          </h1>
          <p className="text-xl text-light-dark mb-10 max-w-4xl mx-auto">
            DeepNeural delivers Artificial Intelligence, Custom Software
            Development, and Business Automation services for modern
            businesses, with specialized expertise in Real Estate Investment
            technology. We build practical, scalable solutions that
            streamline operations, improve efficiency, and support long-term
            growth.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact-us">
              <Button
                variant="primary"
                size="lg"
                movingBorder
                icon={<ArrowRight size={18} />}
                iconPosition="right"
                className="!text-white"
              >
                Book a Consultation
              </Button>
            </Link>
            <Link href="/contact-us">
              <Button variant="outline" size="lg">
                Talk to Our Experts
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 2. Service Categories */}
      <section className="py-16 px-4 sm:px-6 md:px-12 bg-white dark:bg-black">
        <div className="container mx-auto relative z-10">
          <SectionIntro
            eyebrow="Our Services"
            heading="Technology Services That Drive Business Growth"
            intro="DeepNeural provides Artificial Intelligence, Custom Software Development, and Business Automation services that help organizations improve efficiency, simplify operations, and build scalable digital solutions."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {serviceCategories.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.08 * index }}
                className={cardWrapper}
              >
                <div className={iconBadge}>
                  <item.icon size={24} />
                </div>
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

      {/* 3. Artificial Intelligence Solutions */}
      <section className="py-16 px-4 sm:px-6 md:px-12 bg-blue-50 dark:bg-zinc-900">
        <div className="container mx-auto relative z-10">
          <SectionIntro
            eyebrow="Artificial Intelligence"
            heading="Artificial Intelligence Solutions for Modern Businesses"
            intro="DeepNeural develops Artificial Intelligence solutions that help organizations automate workflows, improve decision-making, and unlock greater value from business data. Our AI services are designed around your business requirements, enabling practical, scalable, and measurable outcomes."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {aiSolutions.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.08 * index }}
                className={cardWrapper}
              >
                <div className={iconBadge}>
                  <item.icon size={22} />
                </div>
                <h3 className="text-base font-semibold text-zinc-900 dark:text-white mb-2">
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

      {/* 4. Custom Software Development */}
      <section className="py-16 px-4 sm:px-6 md:px-12 bg-white dark:bg-black">
        <div className="container mx-auto relative z-10">
          <SectionIntro
            eyebrow="Custom Software Development"
            heading="Custom Software Built Around Your Business"
            intro="DeepNeural develops custom software solutions that align with your business processes, operational goals, and long-term growth. From customer-facing applications to enterprise platforms, we build secure, scalable software designed to solve real business challenges."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {customSoftware.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.08 * index }}
                className={cardWrapper}
              >
                <div className={iconBadge}>
                  <item.icon size={22} />
                </div>
                <h3 className="text-base font-semibold text-zinc-900 dark:text-white mb-2">
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

      {/* 5. Business Automation */}
      <section className="py-16 px-4 sm:px-6 md:px-12 bg-blue-50 dark:bg-zinc-900">
        <div className="container mx-auto relative z-10">
          <SectionIntro
            eyebrow="Business Automation"
            heading="Automate Business Processes. Improve Operational Efficiency."
            intro="DeepNeural develops business automation solutions that reduce manual effort, streamline workflows, and improve operational efficiency. By connecting systems, automating repetitive tasks, and standardizing business processes, we help organizations save time, increase productivity, and scale more effectively."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {businessAutomation.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.06 * index }}
                className={cardWrapper}
              >
                <div className={iconBadge}>
                  <item.icon size={20} />
                </div>
                <h3 className="text-base font-semibold text-zinc-900 dark:text-white mb-2">
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

      {/* 6. Solutions We Build */}
      <section className="py-16 px-4 sm:px-6 md:px-12 bg-white dark:bg-black">
        <div className="container mx-auto relative z-10">
          <SectionIntro
            eyebrow="Solutions We Build"
            heading="Technology Solutions Designed Around Your Business"
            intro="DeepNeural designs and develops technology solutions tailored to your business requirements, operational workflows, and growth objectives. By combining Artificial Intelligence, Custom Software Development, and Business Automation, we create practical solutions that streamline operations, improve efficiency, and support long-term business success."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {solutionsWeBuild.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.06 * index }}
                className={cardWrapper}
              >
                <div className={iconBadge}>
                  <item.icon size={20} />
                </div>
                <h3 className="text-base font-semibold text-zinc-900 dark:text-white mb-2">
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

      {/* 7. Business & Growth Services */}
      <section className="py-16 px-4 sm:px-6 md:px-12 bg-blue-50 dark:bg-zinc-900">
        <div className="container mx-auto relative z-10">
          <SectionIntro
            eyebrow="Growth & Marketing"
            heading="Business & Growth Services"
            intro="Beyond AI, software, and automation, DeepNeural also supports business growth through marketing, content, and campaign execution services."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {growthServices.map((service, index) => (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.06 * index }}
                className={cardWrapper}
              >
                <span className="inline-block text-sm font-bold text-primary bg-primary/10 dark:bg-primary/20 px-3 py-1 rounded-full mb-4 w-fit">
                  {service.number}
                </span>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Business Value We Deliver */}
      <section className="py-16 px-4 sm:px-6 md:px-12 bg-white dark:bg-black">
        <div className="container mx-auto relative z-10">
          <SectionIntro
            eyebrow="Business Value"
            heading="Technology That Creates Measurable Business Value"
            intro="The right technology should do more than digitize processes—it should improve the way your business operates. Our solutions are designed to increase efficiency, simplify operations, and deliver measurable outcomes that support long-term business growth."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {businessValue.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.08 * index }}
                className={cardWrapper}
              >
                <div className={iconBadge}>
                  <item.icon size={22} />
                </div>
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

      {/* 9. Technology Capabilities */}
      <section className="py-16 px-4 sm:px-6 md:px-12 bg-blue-50 dark:bg-zinc-900">
        <div className="container mx-auto relative z-10">
          <SectionIntro
            eyebrow="Technology Capabilities"
            heading="Modern Technologies Behind Every Solution"
            intro="DeepNeural leverages modern technologies, development frameworks, and cloud infrastructure to build secure, scalable, and high-performing business solutions. Our technology capabilities enable us to develop reliable applications, intelligent automation, and connected digital ecosystems."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {techCapabilities.map((group, index) => (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.08 * index }}
                className={cardWrapper}
              >
                <div className={iconBadge}>
                  <group.icon size={22} />
                </div>
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

      {/* 10. Service Packages */}
      <section className="py-16 px-4 sm:px-6 md:px-12 bg-white dark:bg-black">
        <div className="container mx-auto relative z-10">
          <SectionIntro
            eyebrow="Flexible Engagement Options"
            heading="Service Packages"
            intro="Whether you're exploring a single technology initiative or planning a broader digital transformation, DeepNeural offers flexible service packages designed to match your business objectives, operational priorities, and growth plans."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-10">
            {servicePackages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className={cardWrapper}
              >
                <div className={iconBadge}>
                  <pkg.icon size={22} />
                </div>
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

      {/* 11. Final CTA */}
      <section className="py-16 px-4 sm:px-6 md:px-12 bg-zinc-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-24 -mt-24 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/20 rounded-full blur-3xl -ml-24 -mb-24 pointer-events-none" />
        <div className="container mx-auto relative z-10 text-center max-w-3xl">
          <p className="text-sm font-medium tracking-wide text-zinc-400 uppercase mb-3">
            Let&apos;s Get Started
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let&apos;s Build Your Next Technology Solution
          </h2>
          <p className="text-lg text-zinc-400 mb-10 leading-relaxed">
            Whether you&apos;re exploring Artificial Intelligence, Custom
            Software Development, or Business Automation, DeepNeural is
            ready to help you identify the right solution for your business.
            Let&apos;s discuss your requirements and build technology that
            delivers measurable business value.
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
                Request a Proposal
              </Button>
            </Link>
            <Link href="/contact-us">
              <Button
                variant="ghost"
                size="lg"
                className="text-white hover:bg-white/10 transition-colors"
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
