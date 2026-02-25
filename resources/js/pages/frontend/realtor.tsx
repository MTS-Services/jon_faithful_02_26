"use client";

import AgentCard from "@/components/ui/agent-card";
import FrontendLayout from "@/layouts/frontend-layout";
import { User } from "@/types";
import { useState } from "react";

interface Realtor {
  id: number;
  name: string;
  email: string;
  city: string;
}

const cities = [
  "Bristol",
  "Chattanooga",
  "Cookeville",
  "Nashville",
  "Knoxville",
  "Johnson City",
  "Franklin",
  "Memphis",
  "Clarksville",
  "Murfreesboro",
  "Kingsport",
  "Jackson",
];

const allRealtors: Realtor[] = [
  { id: 1, name: "John Faithful", email: "john@dev.com", city: "Knoxville" },
  { id: 2, name: "Sarah Lee", email: "sarah@dev.com", city: "Nashville" },
  { id: 3, name: "Michael Brown", email: "michael@dev.com", city: "Memphis" },
  { id: 4, name: "David Wilson", email: "david@dev.com", city: "Knoxville" },
];

export default function RealtorsPage({realtors}: {realtors: User[]}) {
  const [selectedCities, setSelectedCities] = useState<string[]>([]);

  const handleCityChange = (city: string) => {
    setSelectedCities((prev) =>
      prev.includes(city)
        ? prev.filter((c) => c !== city)
        : [...prev, city]
    );
  };

  const filteredRealtors =
    selectedCities.length === 0
      ? allRealtors
      : allRealtors.filter((realtor) =>
        selectedCities.includes(realtor.city)
      );

  return (
    <FrontendLayout>
      <div className="bg-[#f5f1ea] min-h-screen py-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">

          {/* LEFT FILTER SIDEBAR */}
          <div className="bg-white rounded-xl shadow-md p-6 h-fit">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">
              Rental City
            </h2>

            <div className="space-y-3">
              {cities.map((city) => (
                <label key={city} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={selectedCities.includes(city)}
                    onChange={() => handleCityChange(city)}
                    className="w-4 h-4"
                  />
                  <span className="text-gray-700">{city}</span>
                </label>
              ))}
            </div>
          </div>

          {/* REALTORS GRID */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {realtors.map((realtor) => (
              <AgentCard key={realtor.id} data={realtor} />
            ))}

            {realtors.length === 0 && (
              <p className="col-span-full text-center text-gray-500">
                No realtors found for selected city.
              </p>
            )}
          </div>
        </div>
      </div>
    </FrontendLayout>
  );
}