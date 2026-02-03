import React from 'react'

type AgentCardProps = {
    name: string;
    email: string;
    image: string;
    description: string;
};
export default function AgentCard({ name, email, image, description }: AgentCardProps) {
    return (
        <div className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-500 hover:shadow-xl">
            <div className="relative h-72 overflow-hidden bg-gray-200">
                <img
                    src={image}
                    alt={`${name} - Property Owner`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Side-Slide Overlay Container */}
                <div className="absolute inset-0 flex items-end justify-center pt-4 bg-black/40 transition-transform duration-500 ease-in-out -translate-x-full group-hover:translate-x-0">
                    {/* The Badge */}
                    <div className="font-medium text-white bg-primary px-4 py-4 px-38 shadow-lg">
                        Phone:5478745164
                    </div>
                </div>
            </div>
            <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900">Name: {name}</h3>
                <p className="text-sm font-medium text-black mb-4">Email: {email}</p>
                <p className="text-sm font-medium leading-relaxed text-gray-600 line-clamp-2">
                    {description}
                </p>
                <div className="mt-6">
                    <button className="w-full py-3 px-4 border-2 border-gray-800 text-gray-800 font-medium rounded hover:bg-gray-800 hover:text-white transition-colors duration-300 ">
                        Read More
                    </button>
                </div>
            </div>
        </div>
    )
}
