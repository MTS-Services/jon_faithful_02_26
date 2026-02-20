import React from 'react';
import { Head } from '@inertiajs/react';

const sections = [
    {
        title: 'Privacy Policy',
        description:
            'Last Updated: 12/18/2025. Welcome to WhyTennessee.com ("we", "our", or "us"). Your privacy is important to us. This Privacy Policy explains how we collect, use, protect, and disclose information when you visit or interact with our website. By using WhyTennessee.com, you agree to the practices described in this policy.',
    },
    {
        title: 'Information We Collect',
        description:
            'We may collect personal information that you voluntarily provide, including but not limited to:',
        items: [
            'Name',
            'Email address',
            'Phone number',
            'Message content',
            'Realtor or business details (if submitting a listing or inquiry)',
            'Information collected when you fill out a contact form',
            'Information provided when submitting a property listing',
            'Requests for information',
            'Communications with us via email',
        ],
    },
    {
        title: 'Automatically Collected Information',
        description:
            'When you visit our website, we may automatically collect certain information such as:',
        items: [
            'IP address',
            'Browser type',
            'Device type',
            'Pages visited',
            'Time spent on the site',
            'Referring URLs',
        ],
    },
    {
        title: 'How We Use Your Information',
        description:
            'We may use the information we collect to:',
        items: [
            'Respond to inquiries and messages',
            'Review and publish property listings',
            'Communicate with realtors and partners',
            'Improve website functionality and user experience',
            'Send transactional or informational emails',
            'Monitor website usage and trends',
            'We do not sell your personal information',
        ],
    },
    {
        title: 'Sharing of Information',
        description:
            'We may share information only in the following circumstances:',
        items: [
            'With realtors when buyers submit inquiries on listings',
            'With service providers who help operate the website (hosting, email, analytics, payments)',
            'If required by law or to protect our legal rights',
            'All third parties are expected to keep information secure and confidential',
        ],
    },
    {
        title: 'Cookies & Tracking Technologies',
        description:
            'WhyTennessee.com may use cookies and similar technologies to:',
        items: [
            'Analyze traffic and site performance',
            'Remember user preferences',
            'Improve content relevance',
            'You can disable cookies through your browser settings, though some features may not function properly',
        ],
    },
    {
        title: 'Third-Party Services',
        description:
            'Our website may include links to third-party websites or services, including:',
        items: [
            'Real estate professionals',
            'Payment processors (such as Stripe)',
            'Analytics providers (such as Google Analytics)',
            'We are not responsible for the privacy practices of third-party websites',
        ],
    },
    {
        title: 'Data Security',
        description:
            'We take reasonable measures to protect your information from unauthorized access, disclosure, or misuse. However, no internet transmission is 100% secure, and we cannot guarantee absolute security.',
    },
    {
        title: 'Your Rights',
        description:
            'You may:',
        items: [
            'Request access to personal information we have about you',
            'Request corrections or deletion of your information',
            'Opt out of non-essential communications',
            'To make a request, contact us at info@whytennessee.com',
        ],
    },
    {
        title: "Children’s Privacy",
        description:
            'WhyTennessee.com is not intended for children under the age of 13. We do not knowingly collect personal information from children.',
    },
    {
        title: 'Changes to This Privacy Policy',
        description:
            'We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.',
    },
    {
        title: 'Contact Us',
        description:
            'If you have any questions about this Privacy Policy or how your information is handled, please contact us:',
        items: [
            'Email: info@whytennessee.com',
            'Website: https://whytennessee.com',
        ],
    },
];

export default function PrivacyPolicyContent() {
    return (
        <div className="min-h-screen bg-white">
            <Head title="Why Tennessee | Privacy Policy" />
            
            <section className="mx-auto max-w-5xl px-6 py-12 md:py-20">
                <div className="space-y-12">
                    {sections.map((section, index) => (
                        <article key={index} className="group">
                            {/* Blue Header Bar */}
                            <div className="mb-6 bg-[#1e3a5f] px-6 py-3 shadow-md">
                                <h2 className="font-montserrat text-lg font-bold text-white md:text-2xl">
                                    {section.title}
                                </h2>
                            </div>

                            {/* Section Body */}
                            <div className="space-y-4 px-2 text-gray-700">
                                <p className="leading-relaxed text-gray-600">
                                    {section.description}
                                </p>

                                {section.items && (
                                    <ul className="grid grid-cols-1 gap-2 pl-5 md:grid-cols-1">
                                        {section.items.map((item, idx) => (
                                            <li key={idx} className="relative list-disc pl-2 text-gray-600 transition-colors hover:text-gray-900">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
}