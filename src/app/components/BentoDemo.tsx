import {
  BookmarkIcon,
  GlobeIcon,
  HeartIcon,
  InputIcon,
} from '@radix-ui/react-icons';

import { BentoCard, BentoGrid } from '@/components/ui/bento-grid';
import { Globe } from '@/components/ui/globe';


const features = [
  {
    Icon: InputIcon,
    name: 'Recrugence – Smart AI-Powered HR Platform',
    description:
      'An AI-powered hiring platform that understands resumes, matches candidates to roles, and automates recruitment workflows. Designed to simplify hiring while improving the quality and clarity of candidate selection.',
    href: '/contact-us',
    cta: 'Learn more',
    badgeClass: 'bg-blue-500 dark:bg-blue-600',
    badgeLabel: 'Human Resources',
    BadgeIcon: BookmarkIcon,
    companyName: 'NeoSource',
    background: (
      <>
        <img src="/hr .png" alt="Recrugence HR Platform" className="absolute inset-0 w-full h-[65%] object-cover object-left-top z-0" />
        <div className="absolute inset-x-0 bottom-0 h-[45%] z-[1]" style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(248,250,252,0.7) 30%, rgb(248,250,252) 55%)' }} />
      </>
    ),
    className: 'lg:col-span-1 lg:row-span-4',
  },
  {
    Icon: GlobeIcon,
    name: 'AI Dental Imaging SaaS Platform',
    description:
      'A cloud-based AI platform that analyzes dental X-ray images to detect cavities and early-stage dental issues. Supports faster diagnosis and more informed clinical decisions.',
    href: '/contact-us',
    cta: 'Learn more',
    badgeClass: 'bg-red-500 dark:bg-red-600',
    badgeLabel: 'Healthcare',
    BadgeIcon: HeartIcon,
    companyName: '4EDental.com',
    background: <Globe className="absolute right-0 bottom-0 opacity-30" />,
    className: 'lg:col-span-1 lg:row-span-4',
  },
  {
    Icon: InputIcon,
    name: 'AI-Driven Digital Marketing Platform',
    description:
      'Leverages AI to manage content creation, validation, publishing, and lead handling across marketing campaigns. Helps teams run consistent digital marketing efforts with less manual coordination.',
    href: '/contact-us',
    cta: 'Learn more',
    badgeClass: 'bg-purple-500 dark:bg-purple-600',
    badgeLabel: 'Digital Marketing',
    BadgeIcon: BookmarkIcon,
    companyName: 'Goldstone',
    background: (
      <>
        <img src="/digital marketing.png" alt="AI-Driven Digital Marketing" className="absolute inset-0 w-full h-full object-contain object-top z-0" />
        <div className="absolute inset-x-0 bottom-0 h-[55%] z-[1]" style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(248,250,252,0.5) 20%, rgba(248,250,252,0.85) 40%, rgb(248,250,252) 60%)' }} />
      </>
    ),
    className: 'lg:col-span-1 lg:row-span-4',
  },
  {
    Icon: InputIcon,
    name: 'AI-Powered E-Commerce Recommendation Engine',
    description:
      'A sophisticated AI agent that analyzes customer behavior in real-time to provide highly personalized product recommendations, increasing conversion rates and customer satisfaction.',
    href: '/contact-us',
    cta: 'Learn more',
    badgeClass: 'bg-green-500 dark:bg-green-600',
    badgeLabel: 'E-Commerce',
    BadgeIcon: BookmarkIcon,
    companyName: '',
    background: (
      <>
        <img src="/E-commerce.png" alt="AI-Powered E-Commerce" className="absolute inset-0 w-full h-full object-cover z-0" />
        <div className="absolute inset-x-0 bottom-0 h-[55%] z-[1]" style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(248,250,252,0.5) 20%, rgba(248,250,252,0.85) 40%, rgb(248,250,252) 60%)' }} />
      </>
    ),
    className: 'lg:col-span-1 lg:row-span-4',
  },
  {
    Icon: InputIcon,
    name: 'Syādvāda Logic Custom GPT',
    description:
      'A custom GPT-based conversational system designed to explain AI responses using multi-perspective Syādvāda logic. Helps users understand different viewpoints and contexts.',
    href: '/contact-us',
    cta: 'Learn more',
    badgeClass: 'bg-orange-500 dark:bg-orange-600',
    badgeLabel: 'Explainable AI',
    BadgeIcon: BookmarkIcon,
    companyName: 'Dr. Pragati Jain',
    background: (
      <div className="absolute inset-0 overflow-hidden bg-[#0f111a]">
        <img src="/chatgpt1.png" alt="" className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-50 z-0" />
        <img src="/chatgpt1.png" alt="Syādvāda Logic" className="absolute inset-x-0 top-0 w-full h-[65%] object-contain object-top z-[1]" />
        <div className="absolute inset-x-0 bottom-0 h-[45%] z-[2]" style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(248,250,252,0.7) 30%, rgb(248,250,252) 55%)' }} />
      </div>
    ),
    className: 'lg:col-span-1 lg:row-span-4',
  },
  {
    Icon: InputIcon,
    name: 'AI Investment Advisor Platform',
    description:
      'An AI-based investment analysis platform that reviews financial documents, earnings data, and market information to provide structured insights for balanced investment decisions.',
    href: '/contact-us',
    cta: 'Learn more',
    badgeClass: 'bg-indigo-500 dark:bg-indigo-600',
    badgeLabel: 'Finance',
    BadgeIcon: BookmarkIcon,
    companyName: '',
    background: (
      <div className="absolute inset-0 overflow-hidden bg-[#0f111a]">
        <img src="/investment 1.png" alt="" className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-50 z-0" />
        <img src="/investment 1.png" alt="AI Investment Advisor" className="absolute inset-x-0 top-0 w-full h-[65%] object-contain object-top z-[1]" />
        <div className="absolute inset-x-0 bottom-0 h-[45%] z-[2]" style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(248,250,252,0.7) 30%, rgb(248,250,252) 55%)' }} />
      </div>
    ),
    className: 'lg:col-span-1 lg:row-span-4',
  },
];

export default function BentoDemo() {
  return (
    <BentoGrid className="lg:grid-cols-2 md:px-24">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}

