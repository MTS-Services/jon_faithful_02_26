"use client";

import AgentCard from "@/components/ui/agent-card";
import FrontendLayout from "@/layouts/frontend-layout";
import { User } from "@/types";
import { router } from "@inertiajs/react";
import { useState } from "react";

interface City {
  id: number;
  name: string;
}

export default function RealtorsPage({
  realtors,
  cities,
  selectedCityIds = []
}: {
  realtors: User[],
  cities: City[],
  selectedCityIds: string[]
}) {
  // Loading state for UI feedback
  const [isLoading, setIsLoading] = useState(false);

  const handleCityChange = (cityId: number) => {
    setIsLoading(true); // Start loading animation
    const idStr = cityId.toString();

    const updatedIds = selectedCityIds.includes(idStr)
      ? selectedCityIds.filter((id) => id !== idStr)
      : [...selectedCityIds, idStr];

    router.get(route('frontend.realtor'), { cities: updatedIds.join(',') }, {
      preserveState: true,
      preserveScroll: true,
      only: ['realtors', 'selectedCityIds'],
      onFinish: () => setIsLoading(false), // Stop loading animation
    });
  };

  return (
    <FrontendLayout>
      <div className="bg-[#f8f6f2] min-h-screen py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-gray-900">Professional Realtors</h1>
            <p className="text-gray-600 mt-2">Find the perfect expert to guide your move in Tennessee.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            {/* LEFT FILTER SIDEBAR */}
            <aside className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-24">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-bold text-gray-800 tracking-tight">
                    Filter by City
                  </h2>
                  {selectedCityIds.length > 0 && (
                    <button
                      onClick={() => router.get(route('frontend.realtor'))}
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
                      className={`flex items-center p-2.5 rounded-lg cursor-pointer transition-all duration-200 group ${selectedCityIds.includes(city.id.toString())
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
                        <svg className="absolute h-3.5 w-3.5 mt-0.5 ml-0.5 text-white opacity-0 transition-opacity peer-checked:opacity-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      <span className={`ml-3 text-sm transition-colors ${selectedCityIds.includes(city.id.toString())
                          ? 'text-primary font-semibold'
                          : 'text-gray-600 group-hover:text-gray-900'
                        }`}>
                        {city.name}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </aside>

            {/* REALTORS GRID */}
            <main className="lg:col-span-3">
              <div className={`grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 transition-opacity duration-300 ${isLoading ? 'opacity-50 pointer-events-none' : 'opacity-100'}`}>
                {realtors.map((realtor) => (
                  <div key={realtor.id} className="transform transition-all duration-300 hover:-translate-y-1">
                    <AgentCard data={realtor} />
                  </div>
                ))}
              </div>

              {/* Empty State */}
              {realtors.length === 0 && !isLoading && (
                <div className="text-center py-32 bg-white rounded-3xl border-2 border-dashed border-gray-200">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4 text-gray-400">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">No Realtors Found</h3>
                  <p className="text-gray-500 max-w-xs mx-auto mt-2">Try selecting a different city or clear your filters to see all available agents.</p>
                </div>
              )}
            </main>
          </div>
        </div>
      </div>
    </FrontendLayout>
  );
}