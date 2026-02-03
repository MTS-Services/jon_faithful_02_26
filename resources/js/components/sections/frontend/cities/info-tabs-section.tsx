import { useState } from 'react'
import { FaArrowAltCircleRight } from 'react-icons/fa'
import { HiArrowRight } from 'react-icons/hi'

interface TabContent {
    id: string
    label: string
    title: string
    intro: string
    items: string[]
    footer: string
    imageUrl: string
}

export default function InfoTabsSection({ tabs }: { tabs: TabContent[] }) {
    const [activeTab, setActiveTab] = useState(tabs[0].id)

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Tab Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-6 py-5 font-bold rounded-full transition ${activeTab === tab.id
                                    ? 'bg-secondary text-white scale-105'
                                    : 'bg-slate-800 text-white hover:bg-secondary'
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                {tabs.map(tab => (
                    <div
                        key={tab.id}
                        className={`${activeTab === tab.id ? 'grid' : 'hidden'}
              md:grid-cols-2 gap-12 items-center`}
                    >
                        <img
                            src={tab.imageUrl}
                            alt={tab.title}
                            className="rounded-2xl shadow-2xl h-96 w-full object-cover"
                        />

                        <div>
                            <h2 className="text-4xl font-bold mb-6">{tab.title}</h2>
                            <p className="mb-6 text-gray-600">{tab.intro}</p>

                            <ul className="space-y-4">
                                {tab.items.map((item, i) => (
                                    <li key={i} className="flex gap-3">
                                        <FaArrowAltCircleRight className="text-secondary" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <p className="mt-8 italic border-l-4 pl-4 border-secondary">
                                {tab.footer}
                            </p>

                            {tab.id === 'tab4' && (
                                <a
                                    href="/homes-for-sale"
                                    className="inline-flex gap-2 mt-8 bg-slate-900 text-white px-8 py-4 rounded-full font-bold"
                                >
                                    View Local Listings <HiArrowRight />
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
