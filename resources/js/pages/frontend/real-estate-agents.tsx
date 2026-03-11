"use client";

import { Hero } from '@/components/sections/frontend/hero';
import AgentCard from '@/components/ui/agent-card';
import FrontendLayout from '@/layouts/frontend-layout';
import { router } from '@inertiajs/react';
import { useState } from 'react';

interface City {
    id: number;
    name: string;
}

type User = {
    [key: string]: string;
};

type RealEstateAgentsProps = {
    owners: User[];
    realtors: User[];
    boths: User[];
    cities: City[];
    selectedCityIds?: string[];
};

export default function RealEstateAgents({
    owners,
    realtors,
    boths,
    cities,
    selectedCityIds = [],
}: RealEstateAgentsProps) {
    const [isLoading, setIsLoading] = useState(false);

    const handleCityChange = (cityId: number) => {
        setIsLoading(true);
        const idStr = cityId.toString();
        const updatedIds = selectedCityIds.includes(idStr)
            ? selectedCityIds.filter((id) => id !== idStr)
            : [...selectedCityIds, idStr];

        router.get(route('frontend.realEstateAgents'), { cities: updatedIds.join(',') }, {
            preserveState: true,
            preserveScroll: true,
            only: ['owners', 'realtors', 'boths', 'selectedCityIds'],
            onFinish: () => setIsLoading(false),
        });
    };

    return (
        <FrontendLayout activePage="moving-to-tennessee" subPage="Real Estate Agents">
            <Hero
                slides={[
                    'assets/images/herros/Hay-bales-in-pasture-on-horse-farm-in-shadow-of-the-Blue-Ridge-Mountains-scaled.jpeg',
                ]}
                title={<>Real Estate Agent</>}
                className="text-2xl md:text-3xl lg:text-5xl font-semibold mb-6 leading-tight text-center"
            />

            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
                    {/* Left filter sidebar */}
                    <aside className="lg:col-span-1">
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-24">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-lg font-bold text-gray-800 tracking-tight">
                                    Filter by City
                                </h2>
                                {selectedCityIds.length > 0 && (
                                    <button
                                        onClick={() => router.get(route('frontend.realEstateAgents'))}
                                        className="text-xs font-medium text-primary/90 hover:underline"
                                    >
                                        Clear All
                                    </button>
                                )}
                            </div>
                            <div className="space-y-1 overflow-y-auto max-h-[60vh] pr-2 custom-scrollbar">
                                {cities.map((city) => (
                                    <label
                                        key={city.id}
                                        className={`flex items-center p-2.5 rounded-lg cursor-pointer transition-all duration-200 group ${
                                            selectedCityIds.includes(city.id.toString())
                                                ? 'bg-blue-50'
                                                : 'hover:bg-gray-50'
                                        }`}
                                    >
                                        <div className="relative flex items-center">
                                            <input
                                                type="checkbox"
                                                checked={selectedCityIds.includes(city.id.toString())}
                                                onChange={() => handleCityChange(city.id)}
                                                className="peer h-5 w-5 cursor-pointer appearance-none rounded border-2 border-gray-300 transition-all checked:border-primary/90 checked:bg-primary/90 focus:ring-2 focus:ring-blue-200"
                                            />
                                            <svg
                                                className="absolute h-3.5 w-3.5 mt-0.5 ml-0.5 text-white opacity-0 transition-opacity peer-checked:opacity-100"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </div>
                                        <span
                                            className={`ml-3 text-sm transition-colors ${
                                                selectedCityIds.includes(city.id.toString())
                                                    ? 'text-primary font-semibold'
                                                    : 'text-gray-600 group-hover:text-gray-900'
                                            }`}
                                        >
                                            {city.name}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </aside>

                    {/* Main content: three sections */}
                    <main className="lg:col-span-3 space-y-0">
                        <div
                            className={`transition-opacity duration-300 ${
                                isLoading ? 'opacity-50 pointer-events-none' : 'opacity-100'
                            }`}
                        >
                            {/* Section One */}
                            <section className="bg-gray-50 px-4 py-16 rounded-2xl mb-6">
                                <h1 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
                                    Our Property Owner / Manager Agent
                                </h1>
                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                                    {owners.map((owner, index) => (
                                        <AgentCard key={owner.id || index} data={owner} />
                                    ))}
                                </div>
                                {owners.length === 0 && !isLoading && (
                                    <p className="text-center text-gray-500 py-8">
                                        No property owner agents in selected cities.
                                    </p>
                                )}
                            </section>

                            {/* Section Two */}
                            <section className="bg-primary-background px-4 py-16 rounded-2xl mb-6">
                                <h1 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
                                    Our Realtor (Homes for Sale) Agents
                                </h1>
                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                                    {realtors.map((realtor, index) => (
                                        <AgentCard
                                            key={realtor.id || index}
                                            data={realtor}
                                        />
                                    ))}
                                </div>
                                {realtors.length === 0 && !isLoading && (
                                    <p className="text-center text-gray-500 py-8">
                                        No realtor agents in selected cities.
                                    </p>
                                )}
                            </section>

                            {/* Section Three */}
                            <section className="bg-gray-50 px-4 py-16 rounded-2xl">
                                <h1 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
                                    Our Realtor & Rentals
                                </h1>
                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                                    {boths.map((both, index) => (
                                        <AgentCard key={both.id || index} data={both} />
                                    ))}
                                </div>
                                {boths.length === 0 && !isLoading && (
                                    <p className="text-center text-gray-500 py-8">
                                        No realtor & rental agents in selected cities.
                                    </p>
                                )}
                            </section>
                        </div>
                    </main>
                </div>
            </div>
        </FrontendLayout>
    );
}
