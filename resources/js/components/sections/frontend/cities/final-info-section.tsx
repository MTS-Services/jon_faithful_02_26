import { FaMapMarkerAlt } from 'react-icons/fa'
import { HiArrowRight } from 'react-icons/hi'

type property = {
    title ?: string;
    description ?: string;
    cities ?: string[];
}

export default function FinalInfoSection({property}: {property: property}) {
    const { title, description, cities } = property;
    const citiesList = cities || [
        'Johnson City, TN',
        'Kingsport, TN',
        'Memphis, TN',
        'Nashville, TN',
        'Chattanooga, TN',
    ]

    return (
        <section className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
                <div className="bg-white p-10 rounded-3xl">
                    <h2 className="text-3xl font-bold mb-6">{title}</h2>
                    <p className="text-slate-600">
                        {description}
                    </p>
                </div>

                <div className="bg-white p-10 rounded-3xl">
                    <h2 className="text-3xl font-bold mb-6">Explore Nearby Cities</h2>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                        {citiesList.map(city => (
                            <div key={city} className="flex gap-3 bg-slate-50 p-3 rounded-xl">
                                <FaMapMarkerAlt className="text-secondary" />
                                {city}
                            </div>
                        ))}
                    </div>

                    <a className="flex justify-center gap-2 bg-slate-900 text-white py-4 rounded-xl">
                        See Best Places in Tennessee <HiArrowRight />
                    </a>
                </div>
            </div>
        </section>
    )
}
