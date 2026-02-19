import { Head } from '@inertiajs/react'

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
        <div className="bg-[#f2f4f7]">
            <Head title="Why Tennessee | Privacy Policy" />
            <section className="relative h-80 w-full overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1502673588042-a0dcd2403774?auto=format&fit=crop&w=1600&q=80"
                    alt="Tennessee home"
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/70" />
                <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
                    <p className="text-sm uppercase tracking-[0.3em]">Legal</p>
                    <h1 className="mt-4 font-montserrat text-4xl font-semibold">Privacy Policy</h1>
                    <p className="mt-2 text-base opacity-90">Learn how we collect, use, and protect your information.</p>
                </div>
            </section>

            <section className="container mx-auto grid gap-6 px-6 py-16 lg:grid-cols-1">
                <div className="space-y-6">
                    {sections.map((section) => (
                        <article key={section.title} className="">
                            <div className="border-b border-primary bg-primary px-6 py-4 text-white">
                                <h2 className="font-montserrat text-xl md:text-2xl lg:text-4xl font-semibold">{section.title}</h2>
                            </div>
                            <div className="space-y-3 px-6 py-5 text-gray-700">
                                <p className='text-lg'>{section.description}</p>
                                {section.items && (
                                    <ul className="list-disc space-y-1 pl-5 text-lg">
                                        {section.items.map((item) => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </article>
                    ))}
                </div>

                {/* <aside className="space-y-6 rounded-xl border border-primary/10 bg-white p-6 shadow-sm">
                    <div>
                        <h3 className="font-montserrat text-lg font-semibold text-primary">Need Help?</h3>
                        <p className="mt-2 text-sm text-gray-600">
                            Have questions about your data or need to update your preferences? Reach out to our relocation concierge team.
                        </p>
                        <a
                            href="mailto:hello@whytennessee.com"
                            className="mt-4 inline-flex items-center rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white transition hover:bg-secondary"
                        >
                            Email Us
                        </a>
                    </div>
                    <div className="rounded-lg bg-primary/10 p-4 text-sm text-gray-700">
                        <p className="font-semibold text-primary">Last updated</p>
                        <p>January 15, 2026</p>
                    </div>
                </aside> */}
            </section>
        </div>
    )
}
