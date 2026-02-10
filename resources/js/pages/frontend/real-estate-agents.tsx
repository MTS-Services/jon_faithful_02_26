import { Hero } from '@/components/sections/frontend/hero';
import AgentCard from '@/components/ui/agent-card';
import FrontendLayout from '@/layouts/frontend-layout';

type User = {
    [key: string]: string;
};

type RealEstateAgentsProps = {
    owners: User[];
    realtors: User[];
    boths: User[];
};

export default function RealEstateAgents({
    owners,
    realtors,
    boths,
}: RealEstateAgentsProps) {
    return (
        <FrontendLayout>
            <Hero
                slides={[
                    'https://whytennessee.com/wp-content/uploads/2026/01/Hay-bales-in-pasture-on-horse-farm-in-shadow-of-the-Blue-Ridge-Mountains-scaled.jpeg',
                ]}
                title={<>Real Estate Agent</>}
            />

            {/* Section One */}
            <section className="bg-gray-50 px-4 py-16">
                <div className="container mx-auto">
                    <h1 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
                        Our Property Owner / Manager Agent
                    </h1>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {owners.map((owner, index) => (
                            <AgentCard key={owner.id || index} data={owner} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Section Two */}
            <section className="bg-primary-background px-4 py-16">
                <div className="container mx-auto">
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
                </div>
            </section>
            <section className="bg-gray-50 px-4 py-16">
                <div className="container mx-auto">
                    <h1 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
                        Our Both (Realtor & Rentals)
                    </h1>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {boths.map((both, index) => (
                            <AgentCard key={both.id || index} data={both} />
                        ))}
                    </div>
                </div>
            </section>
        </FrontendLayout>
    );
}
