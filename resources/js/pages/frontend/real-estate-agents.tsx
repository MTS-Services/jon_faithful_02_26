import { Hero } from '@/components/sections/frontend/hero'
import AgentCard from '@/components/ui/agent-card'
import FrontendLayout from '@/layouts/frontend-layout'
import React from 'react'

const agents = [
  {
    name: 'Shuvo',
    email: 'shuvo@gmail.com',
    image: 'assets/images/moving-checklist/engineer_team_full_skill_quality_for_maintenance.jpeg',
    description:
      'Shuvo is a property owner committed to maintaining well-managed, high-quality residential and commercial properties.',
  },
  {
    name: 'Islam',
    email: 'islam@gmail.com',
    image: 'assets/images/moving-checklist/Doctor_and_hospital_administrators_talking_in_meeting1-scaled.jpeg',
    description:
      'Islam is a property owner committed to maintaining well-managed, high-quality residential and commercial properties.',
  },
  {
    name: 'Joncina',
    email: 'joncina@gmail.com',
    image: 'assets/images/moving-checklist/gallery4.jpg',
    description:
      'Joncina is a property owner committed to maintaining well-managed, high-quality residential and commercial properties.',
  },
]

const moreAgents = [
  {
    name: 'Shuvo',
    email: 'shuvo@gmail.com',
    image: 'assets/images/moving-checklist/Man-movers-worker-in-blue-uniform-unloading-cardboard-boxes-from-truck.Professional-delivery-and-moving-service-scaled.jpeg',
    description:
      'Shuvo is a property owner committed to maintaining well-managed, high-quality residential and commercial properties.',
  },
  {
    name: 'Islam',
    email: 'islam@gmail.com',
    image: 'assets/images/moving-checklist/gallery2.jpg',
    description:
      'Islam is a property owner committed to maintaining well-managed, high-quality residential and commercial properties.',
  },
  {
    name: 'Joncina',
    email: 'joncina@gmail.com',
    image: 'assets/images/moving-checklist/Biology_class_at_high_school_lab1-scaled.jpeg',
    description:
      'Joncina is a property owner committed to maintaining well-managed, high-quality residential and commercial properties.',
  },
]


export default function RealEstateAgents() {
  return (
    <FrontendLayout>
      <Hero
        slides={[
          'https://whytennessee.com/wp-content/uploads/2026/01/Hay-bales-in-pasture-on-horse-farm-in-shadow-of-the-Blue-Ridge-Mountains-scaled.jpeg',
        ]}
        title={<>Real Estate Agent</>}
      />

      {/* Section One */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Our Property Owner / Manager Agent
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agents.map((agent, index) => (

              <AgentCard
                name={agent.name}
                email={agent.email}
                image={agent.image}
                description={agent.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section Two */}
      <section className="bg-primary-background py-16 px-4">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Our Property Owner / Manager Agent
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {moreAgents.map((agent, index) => (
              <AgentCard
                name={agent.name}
                email={agent.email}
                image={agent.image}
                description={agent.description}
              />
            ))}
          </div>
        </div>
      </section>
    </FrontendLayout>
  )
}
