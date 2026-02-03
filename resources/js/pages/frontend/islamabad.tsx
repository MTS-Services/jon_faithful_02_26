import { Hero } from '@/components/sections/frontend/hero'
import FrontendLayout from '@/layouts/frontend-layout'
import { Phone, Mail, Bath, Bed, MapPin, Square } from 'lucide-react' // Use Lucide icons since you imported Phone
import React from 'react'

export default function RealEstateAgents() {
   // Add this data definition
  const listings = [
    {
      id: 1,
      status: "For Sale",
      image: "https://whytennessee.com/wp-content/uploads/2025/12/Modern-Farmhouse-Style-Home-Think-Architecture-06-1-Kindesign.jpg",
      title: "Modern Family Home",
      link: "/property/1",
      location: "Islamabad",
      sqft: "2,500 sq ft",
      bedrooms: 4,
      bathrooms: 3
    }
  ];
  
  return (
    <FrontendLayout>
      <Hero
        slides={[
          "https://whytennessee.com/wp-content/uploads/2026/01/Hay-bales-in-pasture-on-horse-farm-in-shadow-of-the-Blue-Ridge-Mountains-scaled.jpeg",
        ]}
        title={<>Islam</>}
      />

      <section className="bg-gray-50 py-18">
        <div className="container mx-auto overflow-hidden">
          <div className="flex flex-col md:flex-row gap-2">
            
            {/* Left Section: Image and Form */}
            <div className="md:w-1/1 flex flex-col rounded-lg gap-4">
              <div className="h-full rounded-xl">
                <img 
                  src="https://whytennessee.com/wp-content/uploads/2026/01/Doctor_and_hospital_administrators_talking_in_meeting1-1024x683.jpeg" 
                  alt="Doctor and administrators meeting" 
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              
              <div className="space-y-6 p-8">
                <div>
                  <h1 className="text-3xl font-semibold text-gray-900">Agent Name: Islam</h1>
                  
                  <div className="mt-4 flex flex-wrap gap-4 text-primary">
                    <a href="tel:5878334558" className="flex items-center space-x-2 hover:underline">
                      <Phone className="w-5 h-5 text-primary" />
                      <span className="font-semibold text-gray-700">5878334558</span>
                    </a>
                    <a href="mailto:Islam@gmail.com" className="flex items-center space-x-2 hover:underline">
                      <Mail className="w-5 h-5 text-primary" />
                      <span className="font-semibold text-gray-700">Islam@gmail.com</span>
                    </a>
                  </div>
                </div>

                <hr className="border-gray-200" />

                <div>
                  <h2 className="text-xl font-bold text-gray-800 mb-2">About Islam</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Islam is a property owner committed to maintaining well-managed, high-quality residential and commercial properties. With a focus on long-term value and tenant satisfaction, he ensures each property is cared for with attention to detail and responsibility.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Section: Agent Details */}
            <div className="md:w-1/2 p-2 flex flex-col rounded-lg">

            <div className="rounded-lg px-8 p-4 bg-gray-100 ">
                <h2 className="rounded-xl text-white text-2xl font-bold mb-6 text-gray-800 text-center bg-black p-4">Contact: Islam</h2>
                <form action="#" method="POST" className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input type="text" placeholder="Name" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 focus:ring-primary focus:border-primary border" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" placeholder="Email" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 focus:ring-primary focus:border-primary border" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea rows={4} placeholder="Message" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 focus:ring-primary focus:border-primary border"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-primary text-white font-bold py-2 px-4 rounded transition duration-300">
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Listings Section */}
      <section className="bg-border py-12 px-4 md:px-10">
        <div className="container mx-auto p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Islam Uploaded Listing</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {listings.map((item) => (
              <div key={item.id} className="group relative bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                {/* Image & Status Badge */}
                <div className="relative h-64 overflow-hidden">
                  <span className="absolute top-4 left-4 z-10 bg-[#D4A373] text-white px-3 py-1 rounded-full text-sm font-medium">
                    {item.status}
                  </span>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    <a href={item.link} className="hover:text-blue-600 transition-colors">
                      {item.title}
                    </a>
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-y-3 gap-x-2">
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                      {item.location}
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Square className="w-4 h-4 mr-2 text-gray-400" />
                      {item.sqft}
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Bed className="w-4 h-4 mr-2 text-gray-400" />
                      Bedroom: {item.bedrooms}
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Bath className="w-4 h-4 mr-2 text-gray-400" />
                      Bathroom: {item.bathrooms}
                    </div>
                  </div>
                </div>
                
                {/* Overlay Link */}
                <a href={item.link} className="absolute inset-0 z-0">
                  <span className="sr-only">View {item.title}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FrontendLayout>
  )
}