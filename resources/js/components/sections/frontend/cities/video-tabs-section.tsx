import { useState } from 'react';

interface TabContent {
    id: string;
    label: string;
    title: string;
    intro: string;
    items: string[];
    footer: string;
    imageUrl: string;
    videoUrl?: string;
    cta?: {
        label: string;
        href: string;
        icon: React.ReactNode;
    };
}

export default function VideoTabsSection({ tabs }: { tabs: TabContent[] }) {
    const [activeTab, setActiveTab] = useState(tabs[0].id);

    return (
        <section className="">
            {/* Tab Buttons */}
            <div className="mb-12 flex flex-wrap justify-center gap-4">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`rounded-full px-6 py-3 font-medium transition ${
                            activeTab === tab.id
                                ? 'bg-[#2c4a6b] text-white'
                                : 'bg-white text-gray-700 hover:bg-gray-100'
                        }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="mx-auto max-w-7xl bg-white px-6 py-4">
                {/* Tab Content */}
                {tabs.map((tab) => (
                    <div
                        key={tab.id}
                        className={`${activeTab === tab.id ? 'grid' : 'hidden'} items-center gap-8 md:grid-cols-2`}
                    >
                        {/* MEDIA SECTION */}
                        {tab.videoUrl ? (
                            <video
                                src={tab.videoUrl}
                                controls
                                autoPlay
                                muted
                                loop
                                className="h-full w-full rounded-lg object-cover shadow-lg"
                            />
                        ) : tab.imageUrl ? (
                            <img
                                src={tab.imageUrl}
                                alt={tab.title}
                                className="h-96 w-full rounded-lg object-cover shadow-lg"
                            />
                        ) : null}

                        <div>
                            <h2 className="mb-4 text-3xl font-semibold text-gray-900">
                                {tab.title}
                            </h2>
                            <p className="mb-6 text-base text-gray-700">
                                {tab.intro}
                            </p>

                            <ul className="mb-6 space-y-3">
                                {tab.items.map((item, i) => (
                                    <li
                                        key={i}
                                        className="flex items-start gap-3 text-gray-700"
                                    >
                                        <span className="mt-1.5 flex-shrink-0">
                                            <svg
                                                width="10"
                                                height="10"
                                                viewBox="0 0 10 10"
                                                fill="currentColor"
                                            >
                                                <circle cx="5" cy="5" r="5" />
                                            </svg>
                                        </span>
                                        <span className="text-base">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <p className="text-base text-gray-700">
                                {tab.footer}
                            </p>

                            {tab.id === 'tab4' && tab.cta && (
                                <a
                                    href={tab.cta.href}
                                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-900 px-8 py-4 font-bold text-white transition hover:bg-slate-800"
                                >
                                    {tab.cta.label} {tab.cta.icon}
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
