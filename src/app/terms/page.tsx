'use client';

import HeaderSection from '../components/sections/HeaderSection';

const sections: { title: string; body: string[] }[] = [
  {
    title: 'Acceptance of Terms',
    body: [
      'By accessing or using this website, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please do not use our website.',
    ],
  },
  {
    title: 'Services',
    body: [
      'DeepNeural Technologies provides custom software development, artificial intelligence solutions, and business automation services. Details of any specific engagement, including scope, timelines, and pricing, are governed by a separate agreement between DeepNeural Technologies and the client.',
    ],
  },
  {
    title: 'Use of Website',
    body: [
      'You agree to use this website only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else\'s use of the site.',
      'All content on this website, including text, graphics, logos, and images, is the property of DeepNeural Technologies Pvt Ltd unless otherwise stated, and may not be reproduced without prior written permission.',
    ],
  },
  {
    title: 'No Warranty',
    body: [
      'This website and its content are provided on an "as is" basis without warranties of any kind, either express or implied. We do not guarantee that the website will be error-free or uninterrupted.',
    ],
  },
  {
    title: 'Limitation of Liability',
    body: [
      'DeepNeural Technologies Pvt Ltd shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website or reliance on any information provided on it.',
    ],
  },
  {
    title: 'Changes to These Terms',
    body: [
      'We may update these Terms & Conditions from time to time. Continued use of the website after changes are posted constitutes acceptance of the revised terms.',
    ],
  },
  {
    title: 'Contact Us',
    body: [
      'If you have questions about these Terms & Conditions, please contact us at contact@deepneuraltechnologies.com or write to us at 31, Goyal Nagar, Kanadia Road, Indore, 452018, India.',
    ],
  },
];

export default function TermsPage() {
  return (
    <div>
      <HeaderSection
        title="Terms & Conditions"
        subtitle="The terms that govern your use of the DeepNeural Technologies website."
      />

      <section className="py-20 px-4 md:px-15 bg-white dark:bg-black">
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
