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
    name: 'HR Recruitment GenAI SaaS Platform',
    description:
      'Leveraging GenAI to streamline recruitment processes, reducing time-to-hire by 60% and improving candidate quality through intelligent matching algorithms.',
    href: '/contact-us',
    cta: 'Learn more',
    badgeClass: 'bg-blue-500 dark:bg-blue-600',
    badgeLabel: 'Human Resources',
    BadgeIcon: BookmarkIcon,
    companyName: 'NeoSource',
    background: <img className="absolute -top-20 -right-20 opacity-60" />,
    className: 'lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-4',
  },
  {
    Icon: GlobeIcon,
    name: 'AI SaaS Dental Imaging Platform',
    description:
      'Revolutionizing dental imaging with AI-powered diagnostics that detect issues with 98% accuracy, helping dentists provide better care and reduce misdiagnosis.',
    href: '/contact-us',
    cta: 'Learn more',
    badgeClass: 'bg-red-500 dark:bg-red-600',
    badgeLabel: 'Healthcare',
    BadgeIcon: HeartIcon,
    companyName: '4EDental.com',
    background: <Globe className="top-10 left-48" />,
    className: 'lg:col-start-1 lg:col-end-2 lg:row-start-4 lg:row-end-7',
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
