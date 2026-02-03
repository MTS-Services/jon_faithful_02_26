import { Hero } from '@/components/sections/frontend/hero'
import FrontendLayout from '@/layouts/frontend-layout'
import { Phone } from 'lucide-react'
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

        {/* The Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-500 hover:shadow-xl">
            <div className="relative h-72 overflow-hidden bg-gray-200">
              <img 
                src="assets/images/moving-checklist/engineer_team_full_skill.jpeg" 
                alt="Team Member" 
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
             <div className="absolute inset-0 flex items-end justify-center pt-4  bg-black/40 transition-transform duration-500 ease-in-out -translate-x-full group-hover:translate-x-0">
              {/* The Badge */}
              <div className="font-medium text-white bg-[#1f3a68] px-4 py-4 px-38  shadow-lg"> 
                Phone:5478745164
              </div>
            </div>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-gray-900">Name: Shuvo</h3>
              <p className="text-sm font-medium text-black mb-4">Email: Shuvo@gmail.com</p>
              <p className="text-sm font-medium leading-relaxed text-gray-600 line-clamp-2">
                Shuvo is a property owner committed to maintaining well-managed, high-quality residential and commercial properties.
              </p>
              <div className="mt-6">
                <button className="w-full py-3 px-4 border-2 border-gray-800 text-gray-800 font-medium rounded hover:bg-gray-800 hover:text-white transition-colors duration-300">
                  Read More
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-500 hover:shadow-xl">
            <div className="relative h-72 overflow-hidden bg-gray-200">
              <img 
                src="assets/images/moving-checklist/Doctor_and_hospital.jpeg" 
                alt="Team Member" 
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-end justify-center pt-4  bg-black/40 transition-transform duration-500 ease-in-out -translate-x-full group-hover:translate-x-0">
              {/* The Badge */}
              <div className="font-medium text-white bg-[#1f3a68] px-4 py-4 px-38  shadow-lg"> 
                Phone:5478745164
              </div>
            </div>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-gray-900">Name: Islam</h3>
              <p className="text-sm font-medium text-black mb-4">Email: Islam@gmail.com</p>
              <p className="text-sm font-medium leading-relaxed text-gray-600 line-clamp-2">
                Islam is a property owner committed to maintaining well-managed, high-quality residential and commercial properties.
              </p>
              <div className="mt-6">
                <button className="w-full py-3 px-4 border-2 border-gray-800 text-gray-800 font-medium rounded hover:bg-gray-800 hover:text-white transition-colors duration-300">
                  Read More
                </button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-500 hover:shadow-xl">
            <div className="relative h-72 overflow-hidden bg-gray-200">
              <img 
                src="assets/images/moving-checklist/gallery4.jpg" 
                alt="Team Member" 
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Side-Slide Overlay Container */}
            <div className="absolute inset-0 flex items-end justify-center pt-4  bg-black/40 transition-transform duration-500 ease-in-out -translate-x-full group-hover:translate-x-0">
              {/* The Badge */}
              <div className="font-medium text-white bg-[#1f3a68] px-4 py-4 px-38 shadow-lg"> 
                Phone:5478745164
              </div>
            </div>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-gray-900">Name: Joncina</h3>
              <p className="text-sm font-medium text-black mb-4">Email: Joncina@gmail.com</p>
              <p className="text-sm font-medium leading-relaxed text-gray-600 line-clamp-2">
                Joncina is a property owner committed to maintaining well-managed, high-quality residential and commercial properties.
              </p>
              <div className="mt-6">
                <button className="w-full py-3 px-4 border-2 border-gray-800 text-gray-800 font-medium rounded hover:bg-gray-800 hover:text-white transition-colors duration-300 ">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
     </section>


     <section className="bg-border py-16 px-4">
      <div className="container mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Our Realtor (Homes for Sale) Agents
        </h1>

        {/* The Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-500 hover:shadow-xl">
            <div className="relative h-72 overflow-hidden bg-gray-200">
              <img 
                src="/assets/images/moving-checklist/Biology_class_at_high.jpeg" 
                alt="Team Member" 
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
             <div className="absolute inset-0 flex items-end justify-center pt-4 bg-black/40 transition-transform duration-500 ease-in-out -translate-x-full group-hover:translate-x-0">
              {/* The Badge */}
              <div className="font-medium text-white bg-[#1f3a68] px-4 py-4 px-38  shadow-lg"> 
                Phone:5478745164
              </div>
            </div>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-gray-900">Name: SaraAli</h3>
              <p className="text-sm font-medium text-black mb-4">Email: SaraAli@gmail.com</p>
              <p className="text-sm font-medium leading-relaxed text-gray-600 line-clamp-2">
                SaraAli is a property owner committed to maintaining well-managed, high-quality residential and commercial properties.
              </p>
              <div className="mt-6">
                <button className="w-full py-3 px-4 border-2 border-gray-800 text-gray-800 font-medium rounded hover:bg-gray-800 hover:text-white transition-colors duration-300">
                  Read More
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-500 hover:shadow-xl">
            <div className="relative h-72 overflow-hidden bg-gray-200">
              <img 
                src="assets/images/moving-checklist/gallery2.jpg" 
                alt="Team Member" 
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-end justify-center pt-4 bg-black/40 transition-transform duration-500 ease-in-out -translate-x-full group-hover:translate-x-0">
              {/* The Badge */}
              <div className="font-medium text-white bg-[#1f3a68] px-4 py-4 px-38  shadow-lg"> 
                Phone:5478745164
              </div>
            </div>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-gray-900">Name: Munna</h3>
              <p className="text-sm font-medium text-black mb-4">Email: Munna@gmail.com</p>
              <p className="text-sm font-medium leading-relaxed text-gray-600 line-clamp-2">
                Munna is a property owner committed to maintaining well-managed, high-quality residential and commercial properties.
              </p>
              <div className="mt-6">
                <button className="w-full py-3 px-4 border-2 border-gray-800 text-gray-800 font-medium rounded hover:bg-gray-800 hover:text-white transition-colors duration-300">
                  Read More
                </button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-500 hover:shadow-xl">
            <div className="relative h-72 overflow-hidden bg-gray-200">
              <img 
                src="assets/images/moving-checklist/Man-movers-worker.jpeg" 
                alt="Team Member" 
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Side-Slide Overlay Container */}
            <div className="absolute inset-0 flex items-end justify-center pt-4 bg-black/40 transition-transform duration-500 ease-in-out -translate-x-full group-hover:translate-x-0">
              {/* The Badge */}
              <div className="font-medium text-white bg-[#1f3a68] px-4 py-4 px-38 shadow-lg"> 
                Phone:5478745164
              </div>
            </div>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-gray-900">Name: Mukles</h3>
              <p className="text-sm font-medium text-black mb-4">Email: Mukles@gmail.com</p>
              <p className="text-sm font-medium leading-relaxed text-gray-600 line-clamp-2">
                Mukles is a property owner committed to maintaining well-managed, high-quality residential and commercial properties.
              </p>
              <div className="mt-6">
                <button className="w-full py-3 px-4 border-2 border-gray-800 text-gray-800 font-medium rounded hover:bg-gray-800 hover:text-white transition-colors duration-300 ">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      
    </FrontendLayout>
  )
}
