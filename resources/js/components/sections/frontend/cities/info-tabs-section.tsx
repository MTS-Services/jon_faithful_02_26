import { useState } from 'react';
import { FaArrowAltCircleRight } from 'react-icons/fa';

interface TabContent {
    id: string;
    label: string;
    title: string;
    intro: string;
    items: string[];
    footer: string;
    imageUrl: string;
    cta?: {
        label: string;
        href: string;
        icon: React.ReactNode;
    };
}

export default function InfoTabsSection({ tabs }: { tabs: TabContent[] }) {
    const [activeTab, setActiveTab] = useState(tabs[0].id);

    return (
        <section className="bg-white py-16">
            <div className="mx-auto max-w-7xl px-6">
                {/* Tab Buttons */}
                <div className="mb-12 flex flex-wrap justify-center gap-4">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`rounded-full px-3 py-2 font-medium sm:font-bold transition sm:px-4 sm:py-3 md:px-6 md:py-5 ${
                                activeTab === tab.id
                                    ? 'scale-105 bg-secondary text-white'
                                    : 'bg-slate-800 text-white hover:bg-secondary'
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                {tabs.map((tab) => (
                    <div
                        key={tab.id}
                        className={`${activeTab === tab.id ? 'grid' : 'hidden'} items-center gap-12 md:grid-cols-2`}
                    >
                        <img
                            src={tab.imageUrl}
                            alt={tab.title}
                            className="h-96 w-full rounded-2xl object-cover shadow-2xl"
                        />

                        <div>
                            <h2 className="mb-6 text-4xl font-bold">
                                {tab.title}
                            </h2>
                            <p className="mb-6 text-gray-600">{tab.intro}</p>

                            <ul className="space-y-4">
                                {tab.items.map((item, i) => (
                                    <li key={i} className="flex gap-3">
                                        <FaArrowAltCircleRight className="text-secondary" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <p className="mt-8 border-l-4 border-secondary pl-4 italic">
                                {tab.footer}
                            </p>

                            {tab.id === 'tab4' && (
                                <a
                                    href={tab.cta?.href}
                                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-900 px-8 py-4 font-bold text-white"
                                >
                                    {tab.cta?.label} {tab.cta?.icon}
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
