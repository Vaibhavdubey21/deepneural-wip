'use client';

import HeaderSection from '../components/sections/HeaderSection';

const sections: { title: string; body: string[] }[] = [
  {
    title: 'Information We Collect',
    body: [
      'When you use our website or contact us through a form, we may collect information such as your name, email address, phone number, company name, and any details you choose to share about your project or business needs.',
      'We also collect limited technical information automatically, such as browser type, device type, and pages visited, to help us understand how our website is used and to improve it over time.',
    ],
  },
  {
    title: 'How We Use Your Information',
    body: [
      'We use the information you provide to respond to inquiries, schedule consultations, deliver the services you request, and communicate with you about your project.',
      'We do not sell your personal information to third parties. We may share information with trusted service providers who help us operate our business, such as email or scheduling tools, and only to the extent necessary to provide our services.',
    ],
  },
  {
    title: 'Cookies and Analytics',
    body: [
      'Our website may use cookies and similar technologies to understand site traffic and improve the browsing experience. You can control or disable cookies through your browser settings at any time.',
    ],
  },
  {
    title: 'Data Security',
    body: [
      'We take reasonable technical and organizational measures to protect the information you share with us. No method of transmission or storage over the internet is completely secure, so we cannot guarantee absolute security.',
    ],
  },
  {
    title: 'Your Rights',
    body: [
      'You may request access to, correction of, or deletion of the personal information we hold about you by contacting us at the email address below.',
    ],
  },
  {
    title: 'Contact Us',
    body: [
      'If you have questions about this Privacy Policy, please contact us at contact@deepneuraltechnologies.com or write to us at 31, Goyal Nagar, Kanadia Road, Indore, 452018, India.',
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div>
      <HeaderSection
        title="Privacy Policy"
        subtitle="How DeepNeural Technologies collects, uses, and protects your information."
      />

      <section className="py-16 px-4 sm:px-6 md:px-12 bg-white dark:bg-black">
        <div className="container mx-auto max-w-3xl">
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-12">
            Last updated: July 2026
          </p>
          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">
                  {section.title}
                </h2>
                {section.body.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-3 text-sm md:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
