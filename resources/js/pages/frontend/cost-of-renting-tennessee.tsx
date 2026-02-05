import React from 'react';
import { MapPin, Home, TrendingUp, DollarSign, Key, PawPrint } from 'lucide-react';
import FrontendLayout from '@/layouts/frontend-layout';
import { Hero } from '@/components/sections/frontend/hero';

const TennesseeRentPage = () => {
  return (
    <FrontendLayout>
      <Hero
        slides={[
          '	https://whytennessee.com/wp-content/uploads/2025/12/pexels-chaitaastic-3722911-scaled.jpg',
        ]}
        title={<>Cost of Renting in Tennessee</>}
        description={<>
          Average Rent, Utilities, Deposits & What Renters Should Expect The cost of renting in Tennessee remains more affordable than much of the U.S., which is why the state continues to attract renters relocating from higher-cost areas like California, New York, Illinois, Florida, and the Northeast. This guide breaks down the real cost of renting in Tennessee, including average rent prices, utilities, deposits, regional differences, and what renters should budget for each month.</>}
      />
      <div className="bg-white font-sans text-gray-800">

        {/* 1. Is Renting in Tennessee Affordable? */}
        <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Is Renting in Tennessee Affordable?</h2>
            <p className="text-lg leading-relaxed text-gray-600 mb-4">
              The Tennessee rental market offers a variety of price ranges, making it accessible to many budgets.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Variety of housing options</li>
              <li>Cost of living below national average</li>
            </ul>
          </div>
          <div className="relative h-64 md:h-80">
            <img
              src="https://whytennessee.com/wp-content/uploads/2025/12/Aerial-View-over-the-Buildings-and-Infrastructure-in-Clarksville-Tennessee-2048x1151.jpeg"
              alt="Tennessee Cityscape"
              className="rounded-lg shadow-xl object-cover w-full h-full"
            />
            <div className="absolute -bottom-6 -right-6 w-1/2 h-1/2 hidden md:block">
              <img src="https://whytennessee.com/wp-content/uploads/2025/12/pexels-kelly-2833713-2048x1150.jpg" alt="Suburban TN" className="rounded-lg border-4 border-white shadow-lg object-cover" />
            </div>
          </div>
        </section>

        {/* 2. Average Rent (Blue Banner) */}
        <section className="bg-slate-900 text-white py-20 px-6">
          <div className="max-w-4xl mx-auto bg-white text-slate-900 p-10 rounded-sm shadow-2xl">
            <h2 className="text-3xl font-bold mb-6 text-center">Average Rent in Tennessee (Statewide)</h2>
            <p className="mb-6 text-center text-gray-600">The average rent in Tennessee varies significantly based on city and apartment size.</p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="border-l-4 border-blue-600 pl-4">
                <p className="text-sm uppercase text-gray-500 font-semibold">1-Bedroom</p>
                <p className="text-2xl font-bold">$1,200 - $1,500</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <p className="text-sm uppercase text-gray-500 font-semibold">2-Bedroom</p>
                <p className="text-2xl font-bold">$1,500 - $2,000</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <p className="text-sm uppercase text-gray-500 font-semibold">3-Bedroom</p>
                <p className="text-2xl font-bold">$2,000+</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-blue-900 text-white px-6 py-3 rounded font-medium hover:bg-blue-800 transition">View Best Rental Areas</button>
              <button className="border-2 border-blue-900 text-blue-900 px-6 py-3 rounded font-medium hover:bg-gray-50 transition">Detailed Rent Reports</button>
            </div>
          </div>
        </section>

        {/* 3. Cost of Renting by Region */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-center text-3xl font-bold mb-12 uppercase tracking-widest">Cost of Renting by Region</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8 border border-gray-100 shadow-sm rounded-lg">
              <h3 className="text-xl font-bold mb-4">East Tennessee</h3>
              <p className="text-gray-600 text-sm italic">Knoxville, Chattanooga, Tri-Cities</p>
              <p className="mt-4 font-semibold">$1,100 - $1,700 avg.</p>
            </div>
            <div className="p-8 border border-gray-100 shadow-sm rounded-lg bg-gray-50">
              <h3 className="text-xl font-bold mb-4">Middle Tennessee</h3>
              <p className="text-gray-600 text-sm italic">Nashville, Franklin, Murfreesboro</p>
              <p className="mt-4 font-semibold font-bold">$1,600 - $2,500+ avg.</p>
            </div>
            <div className="p-8 border border-gray-100 shadow-sm rounded-lg">
              <h3 className="text-xl font-bold mb-4">West Tennessee</h3>
              <p className="text-gray-600 text-sm italic">Memphis, Jackson</p>
              <p className="mt-4 font-semibold font-bold">$1,000 - $1,500 avg.</p>
            </div>
          </div>
        </section>

        {/* 4. Security Deposits & Upfront Costs */}
        <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center border-t border-gray-100">
          <div>
            <h2 className="text-3xl font-bold mb-6">Security Deposits & Upfront Costs</h2>
            <p className="text-gray-600 mb-6">When signing a lease, prepare for the following typical upfront expenses:</p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3"><Key size={20} className="text-blue-600" /> Security Deposit (1 month's rent)</li>
              <li className="flex items-center gap-3"><Key size={20} className="text-blue-600" /> Application Fees ($50-$100)</li>
              <li className="flex items-center gap-3"><Key size={20} className="text-blue-600" /> First & Last Month's Rent</li>
            </ul>
          </div>
          <img src="https://whytennessee.com/wp-content/uploads/2025/12/pexels-mineiamartins-32775636-2048x1365.jpg" alt="Apartment Building" className="rounded shadow-lg" />
        </section>

        {/* 5. Additional Costs Grid */}
        <section className="bg-stone-100 py-20 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
            <div className="space-y-4">
              <Home className="text-blue-900" size={32} />
              <h3 className="text-xl font-bold">Utilities & Bills</h3>
              <p className="text-gray-600">Electricity, Water, and Internet typically add $150-$300 to your monthly budget.</p>
            </div>
            <div className="space-y-4">
              <PawPrint className="text-blue-900" size={32} />
              <h3 className="text-xl font-bold">Pet Fees</h3>
              <p className="text-gray-600">Expect a one-time pet deposit ($200-$500) and monthly "pet rent" ($25-$50).</p>
            </div>
            <div className="space-y-4">
              <DollarSign className="text-blue-900" size={32} />
              <h3 className="text-xl font-bold">Transportation</h3>
              <p className="text-gray-600">Tennessee is car-dependent. Factor in gas, insurance, and parking fees.</p>
            </div>
          </div>
        </section>

        {/* 6. Comparison Section */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-center text-3xl font-bold mb-12">Apartments vs. Homes for Rent</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-10 border border-gray-200 rounded text-center">
              <h3 className="text-2xl font-bold mb-4">Apartments</h3>
              <p className="text-gray-600">Easier maintenance, often includes amenities like gyms or pools.</p>
            </div>
            <div className="p-10 border border-gray-200 rounded text-center">
              <h3 className="text-2xl font-bold mb-4">Houses for Rent</h3>
              <p className="text-gray-600">More space, yards for pets, and privacy for families.</p>
            </div>
          </div>
        </section>

        {/* 7. Rent Trends (Reversed Layout) */}
        <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
          <img src="https://whytennessee.com/wp-content/uploads/2025/12/pexels-caleb-clark-6462955-32767698-scaled.jpg" alt="Neighborhood Street" className="rounded shadow-lg order-2 md:order-1" />
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-6">Is Rent Increasing in Tennessee?</h2>
            <div className="space-y-4 text-gray-600">
              <p className="flex gap-3"><TrendingUp className="text-red-500" /> Major cities are seeing a 3-5% annual increase.</p>
              <p>While prices are rising, they remain competitive compared to coastal states.</p>
            </div>
          </div>
        </section>

        {/* 8. Call to Action */}
        <section className="bg-slate-50 py-20 px-6 border-t border-gray-200">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Find Your Home in Tennessee?</h2>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <img src="https://whytennessee.com/wp-content/uploads/2025/12/pexels-kelly-4109661-2048x1151.jpg" alt="Aerial View" className="rounded-lg shadow-md w-64" />
              <div className="text-left">
                <p className="text-gray-600 mb-6 max-w-sm">Browse our curated list of rental properties across the Volunteer State today.</p>
                <button className="bg-blue-900 text-white px-8 py-4 rounded font-bold uppercase tracking-wide hover:bg-blue-800">Search Rentals</button>
              </div>
            </div>
          </div>
        </section>

        {/* Final Thoughts (Small Banner) */}
        <div className="bg-white py-12 px-6 border-t border-gray-100 italic text-center text-gray-500">
          "Finding the right rental in Tennessee is about balancing location, budget, and lifestyle."
        </div>

        {/* Disclaimer */}
        <div className="bg-slate-900 text-gray-400 py-8 px-6 text-xs text-center">
          <div className="max-w-4xl mx-auto">
            <h4 className="uppercase font-bold mb-2 tracking-widest text-white">Disclaimer</h4>
            <p>Rental rates and availability are subject to change. Prices are estimates based on market data as of February 2026.</p>
          </div>
        </div>

      </div>
    </FrontendLayout>
  );
};

export default TennesseeRentPage;