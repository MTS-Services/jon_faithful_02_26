interface WhyMoveProps {
    title: string;
    description: string;
    points: string[];
    conclusion: string;
    imageUrl: string;
    videoUrl?: string;
    imageUrl2?: string;
}

interface Props {
    whyMove: WhyMoveProps;
}

export default function WhyMoveSection({ whyMove }: Props) {
    return (
        <>
            {/* WHY MOVE SECTION */}
            <section className="py-16">
                <div className="container mx-auto grid items-center gap-10 px-4 md:grid-cols-2 lg:px-16">
                    <div>
                        <h2 className="mb-4 text-3xl font-bold md:text-[42px]">
                            {whyMove.title}
                        </h2>
                        <p className="mb-6 text-gray-600">
                            {whyMove.description}
                        </p>

                        <ul className="space-y-3">
                            {whyMove.points.map((text, index) => (
                                <li
                                    key={index}
                                    className="flex items-center gap-3"
                                >
                                    <span className="h-2 w-2 flex-shrink-0 rounded-full bg-black" />
                                    <span>{text}</span>
                                </li>
                            ))}
                        </ul>

                        <p className="mt-6">{whyMove.conclusion}</p>
                    </div>

                    <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
                        {whyMove.imageUrl && (
                            <img
                                src={whyMove.imageUrl}
                                alt={whyMove.title}
                                className="h-[500px] rounded-xl object-cover"
                            />
                        )}

                        {whyMove.imageUrl2 && (
                            <img
                                src={whyMove.imageUrl2}
                                alt={whyMove.title}
                                className="h-[500px] rounded-xl object-cover mt-10"
                            />
                        )}

                        {whyMove.videoUrl && (
                            <video
                                className="h-[500px] rounded-xl object-cover"
                                controls
                            >
                                <source
                                    src={whyMove.videoUrl}
                                    type="video/mp4"
                                />
                            </video>
                        )}

                        {/* <img
                            src={whyMove.imageUrl}
                            alt={whyMove.title}
                            className="mb-12 h-[500px] rounded-xl object-cover"
                        />

                        <img
                            src={whyMove.imageUrl2}
                            alt={whyMove.title}
                            className="mb-12 h-[500px] rounded-xl object-cover"
                        />
                        <video className="h-full rounded object-cover" controls>
                            <source src={whyMove.videoUrl} type="video/mp4" />
                        </video> */}
                    </div>
                </div>
            </section>
        </>
    );
}
