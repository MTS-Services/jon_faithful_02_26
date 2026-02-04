import React from 'react'

type ExploreCity = {
    icon?: React.ComponentType<{ size?: number | string; className?: string }>
    city?: string
    desc: string
    button: string
}

interface Props {
    exploreCities: ExploreCity[]
}

export default function ExploreRentalCities({ exploreCities }: Props) {
    return (
        <>
            {exploreCities.map((item, i) => {
                const Icon = item.icon

                return (
                    <div key={i}
                        className="text-center p-6 border rounded-lg hover:shadow-lg transition"
                    >
                        {Icon && (
                            <Icon
                                size={40}
                                className="text-blue-900 mx-auto mb-4"
                            />
                        )}

                        <h3 className="font-bold text-lg mb-2">{item.city}</h3>

                        <p className="text-gray-600 text-md mb-4 w-52 mx-auto">
                            {item.desc}
                        </p>

                        <button className="w-full bg-primary text-white py-2 rounded font-semibold">
                            {item.button}
                        </button>
                    </div>
                )
            })}
        </>
    )
}
