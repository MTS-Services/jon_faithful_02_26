import React from 'react'

type AgentCardProps = {
    name: string;
    email: string;
    image: string;
    description: string;
};
export default function AgentCard({ name, email, image, description }: AgentCardProps) {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="aspect-[4/3] overflow-hidden">
                <img
                    src={image}
                    alt={`${name} - Property Owner`}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="p-6 text-center">
                <h2 className="text-xl font-bold text-gray-900 mb-1">
                    Name: {name}
                </h2>
                <p className="text-sm text-gray-600 mb-4">
                    Email: {email}
                </p>

                <p className="text-sm text-gray-700 mb-6 leading-relaxed">
                    {description}
                </p>

                <button className="w-full py-3 px-4 border-2 border-gray-800 text-gray-800 font-medium rounded hover:bg-primary hover:text-white transition-colors duration-300">
                    Read More
                </button>
            </div>
        </div>
    )
}
