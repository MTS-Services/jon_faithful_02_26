import { FaCheck } from 'react-icons/fa'

interface Neighborhood {
    name: string
    features: string[]
}

export default function NeighborhoodsSection({
    neighborhoods,
}: {
    neighborhoods: Neighborhood[]
}) {
    return (
        <section className="bg-blue-900 py-20 text-white">
            <div className="container mx-auto px-4 lg:px-16">
                <h2 className="text-center text-3xl font-bold mb-10">
                    Best Neighborhoods in Bristol
                </h2>

                <div className="grid md:grid-cols-4 gap-6">
                    {neighborhoods.map((n, idx) => (
                        <div
                            key={idx}
                            className="bg-white text-gray-800 rounded-xl p-6 shadow-lg"
                        >
                            <h3 className="font-bold mb-4 border-b pb-2">{n.name}</h3>

                            {n.features.map((feat, fIdx) => (
                                <div key={fIdx} className="flex gap-3 mb-2">
                                    <FaCheck className="text-blue-900 mt-1" size={14} />
                                    <span className="text-sm">{feat}</span>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
