import {
  BookmarkIcon,
  FileTextIcon,
  GlobeIcon,
  HeartIcon,
  InputIcon,
  MixerHorizontalIcon,
} from '@radix-ui/react-icons';

import { BentoCard, BentoGrid } from '@/components/ui/bento-grid';
import { Globe } from '@/components/ui/globe';
import AnimatedListBg from './AnimatedListBg';

const features = [
  {
    Icon: FileTextIcon,
    name: 'Manufacturing Process Optimization',
    description:
      'Implementing AI agents to monitor production lines, resulting in 35% reduction in defects, 22% increase in throughput, and significant energy savings.',
    href: '/contact-us',
    cta: 'Learn more',
    badgeClass: 'bg-yellow-500 dark:bg-yellow-600',
    badgeLabel: 'Manufacturing',
    BadgeIcon: MixerHorizontalIcon,
    companyName: 'PrecisionTech Industries',
    background: (
      <AnimatedListBg className="absolute top-20 right-2 h-[300px] w-full scale-115 border-none mask-[linear-gradient(to_top,transparent_5%,#000_100%)] transition-all duration-400 ease-out group-hover:scale-90" />
    ),
    className: 'lg:row-start-1 lg:row-end-7 lg:col-start-2 lg:col-end-3',
  },
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
    <BentoGrid className="lg:grid-cols-2 px-24">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}
