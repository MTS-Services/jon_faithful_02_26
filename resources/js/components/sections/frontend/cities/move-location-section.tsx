import React from 'react'

interface LocationProps {
    title: string
    description: React.ReactNode;
    distances: string[]
    mapUrl: string
    conclusion: string
}

interface Props {
    location: LocationProps
}

export default function MoveLocationSection({ location }: Props) {
    return (
        <section className="bg-[#f8f5ef] py-16 rounded-[40px] lg:rounded-t-[80px]">
            <div className="container mx-auto px-4 lg:px-16 grid md:grid-cols-2 gap-16 items-center">
                <div className="rounded-md overflow-hidden shadow-lg h-[400px]">
                    <iframe
                        title="Location Map"
                        className="w-full h-full border-0"
                        src={location.mapUrl}
                        loading="lazy"
                    />
                </div>

                <div>
                    <h2 className="text-3xl font-bold mb-4">{location.title}</h2>
                    <p className="text-gray-600 mb-6">{location.description}</p>

                    <ul className="space-y-3">
                        {location.distances.map((item, index) => (
                            <li key={index} className="flex items-center gap-3">
                                <span className="flex-shrink-0">
                                    <svg
                                        aria-hidden="true"
                                        className="w-5 h-5 fill-black"
                                        viewBox="0 0 384 512"
                                    >
                                        <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
                                    </svg>
                                </span>
                                {item}
                            </li>
                        ))}
                    </ul>

                    <p className="mt-6 text-gray-600">{location.conclusion}</p>
                </div>
            </div>
        </section>
    )
}
