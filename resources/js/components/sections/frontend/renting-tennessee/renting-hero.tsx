import React from 'react';
import { FaHome, FaGavel, FaMapMarkedAlt } from 'react-icons/fa';
import { Hero } from '../hero';

const RentingSections: React.FC = () => {
    const steps = [
        {
            icon: <FaMapMarkedAlt />,
            title: "Explore Neighborhoods",
            desc: "From the bright lights of Nashville to the quiet peaks of the Smokies."
        },
        {
            icon: <FaGavel />,
            title: "Renter's Rights",
            desc: "Stay informed about Tennessee landlord-tenant laws and security deposits."
        },
        {
            icon: <FaHome />,
            title: "Find Your Home",
            desc: "Tools and resources to help you secure the best rental deals in the state."
        }
    ];

    return (
        <>
            <Hero
                slides={[
                    "https://whytennessee.com/wp-content/uploads/2025/12/Aerial-View-Map-Eastern-Tennessee-Stunning-Drone-Photography-of-Mountains_-Rivers-_-Towns-1-scaled.jpeg",
                ]}
                title={
                    <>
                        Renting in Tennessee
                    </>
                }
                description={
                    <>
                        Renting in Tennessee has become increasingly popular as home prices rise nationwide. Whether you’re relocating for work, lifestyle, or affordability, Tennessee offers a wide range of rental options, from apartments and condos to single-family homes across both urban and small-town markets. <br></br>
                        <br></br>
                        This guide explains everything you need to know about renting in Tennessee, including costs, lease terms, best cities to rent in, and tips for renters moving from out of state.
                    </>
                }
            />
            {/* <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {steps.map((step, i) => (
                            <div key={i} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-6 text-2xl">
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}
        </>
    );
};

export default RentingSections;