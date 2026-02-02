import React, { useState } from 'react';
// Import specific icons from react-icons
import { FaCheck, FaArrowAltCircleRight, FaMapMarkerAlt, FaHouseUser } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';

// --- Types ---
interface Neighborhood {
  name: string;
  features: string[];
}

interface TabContent {
  id: string;
  label: string;
  title: string;
  intro: string;
  items: string[];
  footer: string;
  imageUrl: string;
}

const BristolPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('tab1');

  // --- Data ---
  const neighborhoods: Neighborhood[] = [
    {
      name: "Downtown Bristol",
      features: ["Historic homes and buildings", "Walkable streets", "Restaurants, museums, and music venues"]
    },
    {
      name: "Fairmount",
      features: ["Established neighborhoods", "Quiet residential streets", "Close to schools and shopping"]
    },
    {
      name: "Avoca Area",
      features: ["Family-friendly atmosphere", "Easy access to major roads", "Parks and community spaces"]
    },
    {
      name: "Avoca Area (Suburbs)",
      features: ["Larger lots and privacy", "Mountain and countryside views", "Short drive to city amenities"]
    }
  ];

  const tabs: TabContent[] = [
    {
      id: 'tab1',
      label: 'Schools & Education',
      title: 'Schools & Education',
      intro: 'Bristol offers:',
      items: ['Public schools serving the city', 'Private school options nearby', 'Access to Northeast State Community College and ETSU'],
      footer: 'Education options support families relocating to the area.',
      imageUrl: 'https://whytennessee.com/wp-content/uploads/2026/01/Be_focus_and_patient_while_teaching_new_things1-scaled.jpeg'
    },
    {
      id: 'tab2',
      label: 'Healthcare & Employment',
      title: 'Healthcare & Employment',
      intro: 'Bristol residents benefit from regional healthcare and employment opportunities, including:',
      items: ['Medical centers throughout the Tri-Cities', 'Manufacturing and industrial employers', 'Tourism & speedway-related jobs'],
      footer: 'Healthcare and regional employers provide stable job options.',
      imageUrl: 'https://whytennessee.com/wp-content/uploads/2026/01/Cropped-shot-of-diverse-coworkers-working-together-in-boardroom_-brainstorming_-discussing-and-analyzing-and-planning-business-strategy-scaled.jpeg'
    },
    {
      id: 'tab3',
      label: 'Things to Do in Bristol',
      title: 'Things to Do in Bristol',
      intro: 'Bristol offers a variety of activities for residents:',
      items: ['Bristol Motor Speedway events', 'Birthplace of Country Music Museum', 'Local festivals & live music', 'Outdoor recreation & parks'],
      footer: 'Bristol combines culture, history, and outdoor access in a small-city setting.',
      imageUrl: 'https://whytennessee.com/wp-content/uploads/2026/01/Bristol_Motor_Speedway_Preparing_For_The_Speedway_Classic_2025_Between_The_Atlanta_Braves_and_the_Cincinnati_Reds1-scaled.jpeg'
    },
    {
      id: 'tab4',
      label: 'Homes for Sale in Bristol',
      title: 'Homes for Sale in Bristol',
      intro: 'Bristol’s housing market includes:',
      items: ['Affordable single-family homes', 'Historic properties', 'Newer subdivisions', 'Rural homes with acreage'],
      footer: 'Homes in Bristol are often priced lower than surrounding cities, making it a great option for first-time buyers and retirees.',
      imageUrl: 'https://whytennessee.com/wp-content/uploads/2025/12/pexels-lebele-11935244-scaled.jpg'
    }
  ];

  return (
    <div className="font-sans antialiased">
      {/* NEIGHBORHOODS SECTION */}
      <section className="bg-blue-900 py-20 text-white">
        <div className="container mx-auto px-4 lg:px-16">
          <h2 className="text-center text-3xl font-bold mb-10">Best Neighborhoods in Bristol</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {neighborhoods.map((n, idx) => (
              <div key={idx} className="bg-white text-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="font-bold mb-4 border-b pb-2">{n.name}</h3>
                {n.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-3 mb-2">
                    <FaCheck className="text-blue-900 mt-1 flex-shrink-0" size={14} />
                    <span className="text-sm">{feat}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TABS SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-5 font-bold rounded-full transition-all duration-300 flex items-center text-md ${activeTab === tab.id
                    ? 'bg-[#C9A249] text-white scale-105 shadow-md'
                    : 'bg-slate-800 text-white hover:bg-[#C9A249]'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {tabs.map((tab) => (
            <div key={tab.id} className={`${activeTab === tab.id ? 'grid opacity-100' : 'hidden opacity-0'} md:grid-cols-2 gap-12 items-center transition-opacity duration-500`}>
              <img src={tab.imageUrl} alt={tab.title} className="rounded-2xl shadow-2xl w-full object-cover h-96" />
              <div>
                <h2 className="text-4xl font-bold mb-6 text-slate-900">{tab.title}</h2>
                <p className="mb-6 text-gray-600 leading-relaxed">{tab.intro}</p>
                <ul className="space-y-4">
                  {tab.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-center gap-3">
                      <FaArrowAltCircleRight className="text-[#C9A249]" size={18} />
                      <span className="text-gray-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-8 text-gray-500 italic border-l-4 border-[#C9A249] pl-4">{tab.footer}</p>
                {tab.id === 'tab4' && (
                  <a href="/homes-for-sale" className="inline-flex items-center gap-2 mt-8 bg-slate-900 text-white px-8 py-4 rounded-full hover:bg-[#C9A249] transition-colors font-bold">
                    View Local Listings <HiArrowRight />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 lg:px-16 text-center">
          <h2 className="text-4xl font-bold mb-4">Work With a Bristol Realtor</h2>
          <p className="text-xl text-slate-300 mb-16">A local expert makes all the difference in the Tri-Cities market.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              "Navigate neighborhood differences",
              "Identify the best value homes",
              "Coordinate showings and inspections",
              "Assist with relocation details"
            ].map((text, idx) => (
              <div key={idx} className="bg-slate-800 p-8 rounded-2xl hover:bg-slate-700 transition-colors group">
                <div className="bg-[#C9A249] text-white rounded-2xl inline-flex items-center justify-center w-16 h-16 mb-6 group-hover:scale-110 transition-transform">
                  <FaHouseUser size={28} />
                </div>
                <h3 className="text-lg font-semibold">{text}</h3>
              </div>
            ))}
          </div>

          <a href="#" className="inline-flex items-center gap-3 px-10 py-4 bg-white text-slate-900 font-extrabold rounded-full hover:bg-[#C9A249] hover:text-white transition-all shadow-xl">
            Connect With a Bristol Realtor <HiArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* FINAL INFO SECTION */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Is Bristol Right for You?</h2>
            <p className="text-slate-600 leading-relaxed">
              Bristol may be the right fit if you’re looking for: Low cost of living, small-town charm, rich music and cultural history, affordable homeownership, and easy access to the Tri-Cities. For many relocating buyers, Bristol offers a unique blend of affordability and character.
            </p>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Explore Nearby Cities</h2>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {['Johnson City', 'Kingsport', 'Knoxville', 'Chattanooga'].map((city) => (
                <div key={city} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl text-slate-700 font-semibold">
                  <FaMapMarkerAlt className="text-[#C9A249]" />
                  <span>{city}</span>
                </div>
              ))}
            </div>
            <a href="#" className="flex items-center justify-center gap-2 w-full py-4 bg-slate-900 text-white rounded-xl hover:bg-[#C9A249] transition-colors font-bold">
              See Best Places in Tennessee <HiArrowRight />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BristolPage;