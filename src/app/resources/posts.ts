export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string[];
}

export const posts: BlogPost[] = [
  {
    slug: 'technology-aligned-with-business-strategy',
    title: 'Why the Right Technology Must Align With the Right Business Strategy',
    date: '2026-07-29',
    category: 'Real Estate Investment',
    excerpt:
      "Technology alone doesn't create business value. The right technology, aligned with the right business strategy, does.",
    content: [
      "💡 Technology alone doesn't create business value. The right technology, aligned with the right business strategy, does.",
      "At DeepNeural, we're focused on helping Real Estate Investment firms leverage Artificial Intelligence, Custom Software Development, and Business Automation to support more efficient operations, connected workflows, and informed decision-making.",
      "Every business has unique processes, goals, and challenges. That's why we believe technology should be built around the business—not the other way around.",
      '📈 As the Real Estate Investment industry continues to evolve, practical and scalable technology can help organisations strengthen operations and prepare for future growth.',
      '💬 How is your organisation using technology to support its next stage of growth?',
    ],
  },
  {
    slug: 'competitive-advantage-is-execution-speed',
    title: "Your Next Competitive Advantage Isn't a Better Deal—It's Faster Execution",
    date: '2026-07-30',
    category: 'Real Estate Investment',
    excerpt:
      "What if your next competitive advantage isn't finding a better deal... but operating faster than everyone else?",
    content: [
      "What if your next competitive advantage isn't finding a better deal... but operating faster than everyone else?",
      'Think about it.',
      'Two firms identify the same investment opportunity.\nBoth have experienced teams.\nBoth have access to capital.\nBoth understand the market.\nYet one consistently moves faster.',
      'Why?',
      "Because their operations don't slow them down.",
      '✔️ Leads are followed up automatically.\n✔️ Investor communication stays consistent.\n✔️ CRM workflows run efficiently.\n✔️ Marketing keeps moving without delays.',
      'The multifamily industry is rapidly embracing AI, but the firms creating the most value are using it to improve execution—not just automate tasks.',
      "Technology isn't the competitive advantage.\nExecution is.",
      "What's the biggest operational bottleneck your team is solving in 2026?",
    ],
  },
  {
    slug: 'ai-powered-automation-transforming-capital-raising',
    title: 'How AI-Powered Automation Is Transforming Capital Raising',
    date: '2026-07-31',
    category: 'Real Estate Investment',
    excerpt:
      'Capital raising has always been built on relationships. As firms grow, AI-powered automation is helping manage those relationships at scale.',
    content: [
      '🤖 Capital raising has always been built on relationships.',
      'But as firms grow, managing those relationships at scale becomes more challenging.',
      'Investment firms often face common hurdles:',
      '📌 Slow investor follow-ups\n📌 Manual data tracking and reporting\n📌 Inconsistent communication\n📌 Difficulty identifying investor interests and engagement patterns\n📌 Time-consuming administrative processes',
      'AI-powered automation is helping solve these challenges by creating smarter, more efficient workflows.',
      'With AI-driven systems, firms can:',
      '✅ Automate routine investor communications\n✅ Organize and analyze investor data faster\n✅ Personalize outreach based on investor behavior and preferences\n✅ Improve response times and engagement\n✅ Give teams more time to focus on relationship-building and strategic decisions',
      'AI does not replace the trust and human connection that drive investment decisions.',
      '🤝 People build relationships.',
      'But AI-powered automation helps firms manage those relationships more effectively, creating a smoother experience for both investors and teams.',
      'The future of capital raising will not be about replacing human interaction with technology.\nIt will be about using technology to make every interaction more valuable.',
      '🚀 Firms that adopt AI-powered automation today will be better positioned to scale investor relationships, improve efficiency, and build stronger foundations for growth.',
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}
