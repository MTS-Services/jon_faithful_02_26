import React from 'react'

interface WhyMoveProps {
    title: string
    description: string
    points: string[]
    conclusion: string
    imageUrl: string
    videoUrl: string
}


interface Props {
    whyMove: WhyMoveProps
}

export default function WhyMoveSection({ whyMove }: Props) {
    return (
        <>
            {/* WHY MOVE SECTION */}
            <section className="py-16">
                <div className="container mx-auto px-4 lg:px-16 grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">{whyMove.title}</h2>
                        <p className="mb-6 text-gray-600">{whyMove.description}</p>

                        <ul className="space-y-3">
                            {whyMove.points.map((text, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <span className="w-2 h-2 rounded-full bg-black flex-shrink-0" />
                                    <span>{text}</span>
                                </li>
                            ))}
                        </ul>

                        <p className="mt-6">{whyMove.conclusion}</p>
                    </div>

                    <div className="w-full grid grid-cols-2 gap-6">
                        <img
                            src={whyMove.imageUrl}
                            alt={whyMove.title}
                            className="rounded-xl h-[500px] mb-12 object-cover"
                        />

                        <video className="rounded h-full object-cover" controls>
                            <source src={whyMove.videoUrl} type="video/mp4" />
                        </video>
                    </div>
                </div>
            </section>
        </>
    )
}
