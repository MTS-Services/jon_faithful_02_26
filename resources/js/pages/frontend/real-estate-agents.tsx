import { Hero } from '@/components/sections/frontend/hero'
import FrontendLayout from '@/layouts/frontend-layout'
import React from 'react'

export default function RealEstateAgents() {
  return (
    <FrontendLayout>
      <Hero
        slides={[
          "https://whytennessee.com/wp-content/uploads/2026/01/Hay-bales-in-pasture-on-horse-farm-in-shadow-of-the-Blue-Ridge-Mountains-scaled.jpeg",
        ]}
        title={
          <>
            Real Estate Agent
          </>
        }
      />

      <section className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Our Property Owner / Manager Agent
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="assets/images/moving-checklist/ engineer_team_full_skill_quality_for_maintenance_and_training_in_industry_factory_worker___warehouse_Workshop_for_factory_operators__mechanical_.jpeg"
                  alt="Shuvo - Property Owner"
                  className="w-full h-full object-cover"
                 />
              </div>
              <div className="p-6 text-center">
                <h2 className="text-xl font-bold text-gray-900 mb-1">Name: Shuvo</h2>
                <p className="text-sm text-gray-600 mb-4">Email: Shuvo@gmail.com</p>
                <p className="text-sm text-gray-700 mb-6 leading-relaxed">
                  Shuvo is a property owner committed to maintaining well-managed, high-quality residential and commercial properties.
                </p>
                <button className="w-full py-3 px-4 border-2 border-gray-800 text-gray-800 font-medium rounded hover:bg-gray-800 hover:text-white transition-colors duration-300">
                  Read More
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="assets/images/moving-checklist/Doctor_and_hospital_administrators_talking_in_meeting1-scaled.jpeg"
                  alt="Islam - Property Owner"
                  className="w-full h-full object-cover"
                 />
              </div>
              <div className="p-6 text-center">
                <h2 className="text-xl font-bold text-gray-900 mb-1">Name: Islam</h2>
                <p className="text-sm text-gray-600 mb-4">Email: Islam@gmail.com</p>
                <p className="text-sm text-gray-700 mb-6 leading-relaxed">
                  Islam Islam is a property owner committed to maintaining well-managed, high-quality residential and commercial properties.
                </p>
                <button className="w-full py-3 px-4 border-2 border-gray-800 text-gray-800 font-medium rounded hover:bg-gray-800 hover:text-white transition-colors duration-300">
                  Read More
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="assets/images/moving-checklist/gallery4.jpg"
                  alt="Joncina - Property Owner"
                  className="w-full h-full object-cover"
                 />
              </div>
              <div className="p-6 text-center">
                <h2 className="text-xl font-bold text-gray-900 mb-1">Name: Joncina</h2>
                <p className="text-sm text-gray-600 mb-4">Email: Joncina@gmail.com</p>
                <p className="text-sm text-gray-700 mb-6 leading-relaxed">
                  Joncina is a property owner committed to maintaining well-managed, high-quality residential and commercial properties.
                </p>
                <button className="w-full py-3 px-4 border-2 border-gray-800 text-gray-800 font-medium rounded hover:bg-gray-800 hover:text-white transition-colors duration-300">
                  Read More
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-[#EEEEEE] py-16 px-4">
        <div className="container mx-auto">=
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Our Property Owner / Manager Agent
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="assets/images/moving-checklist/Man-movers-worker-in-blue-uniform-unloading-cardboard-boxes-from-truck.Professional-delivery-and-moving-service-scaled.jpeg"
                  alt="Shuvo - Property Owner"
                  className="w-full h-full object-cover"
                 />
              </div>
              <div className="p-6 text-center">
                <h2 className="text-xl font-bold text-gray-900 mb-1">Name: Shuvo</h2>
                <p className="text-sm text-gray-600 mb-4">Email: Shuvo@gmail.com</p>
                <p className="text-sm text-gray-700 mb-6 leading-relaxed">
                  Shuvo is a property owner committed to maintaining well-managed, high-quality residential and commercial properties.
                </p>
                <button className="w-full py-3 px-4 border-2 border-gray-800 text-gray-800 font-medium rounded hover:bg-gray-800 hover:text-white transition-colors duration-300">
                  Read More
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="assets/images/moving-checklist/gallery2.jpg"
                  alt="Islam - Property Owner"
                  className="w-full h-full object-cover"
                 />
              </div>
              <div className="p-6 text-center">
                <h2 className="text-xl font-bold text-gray-900 mb-1">Name: Islam</h2>
                <p className="text-sm text-gray-600 mb-4">Email: Islam@gmail.com</p>
                <p className="text-sm text-gray-700 mb-6 leading-relaxed">
                  Islam Islam is a property owner committed to maintaining well-managed, high-quality residential and commercial properties.
                </p>
                <button className="w-full py-3 px-4 border-2 border-gray-800 text-gray-800 font-medium rounded hover:bg-gray-800 hover:text-white transition-colors duration-300">
                  Read More
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="assets/images/moving-checklist/Biology_class_at_high_school_lab1-scaled.jpeg"
                  alt="Joncina - Property Owner"
                  className="w-full h-full object-cover"
                 />
              </div>
              <div className="p-6 text-center">
                <h2 className="text-xl font-bold text-gray-900 mb-1">Name: Joncina</h2>
                <p className="text-sm text-gray-600 mb-4">Email: Joncina@gmail.com</p>
                <p className="text-sm text-gray-700 mb-6 leading-relaxed">
                  Joncina is a property owner committed to maintaining well-managed, high-quality residential and commercial properties.
                </p>
                <button className="w-full py-3 px-4 border-2 border-gray-800 text-gray-800 font-medium rounded hover:bg-gray-800 hover:text-white transition-colors duration-300">
                  Read More
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </FrontendLayout>
  )
}
