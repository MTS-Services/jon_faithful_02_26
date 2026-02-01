import React from 'react';

interface CardProps {
    title: string;
    frontImg: string;
    backText: string;
    link: string;
}

const FlipCard: React.FC<CardProps> = ({ title, frontImg, backText, link }) => {
    return (
        <div className="group h-80 [perspective:1000px]">
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front Side */}
                <div className="absolute inset-0">
                    <img src={frontImg} className="h-full w-full rounded-xl object-cover shadow-black/40" alt={title} />
                    <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-black/50 p-6">
                        <h3 className="text-center text-xl font-bold text-white">{title}</h3>
                    </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 h-full w-full rounded-xl bg-[#1F3A68] p-6 text-white [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col justify-center">
                    <h3 className="mb-3 text-xl font-bold">{title}</h3>
                    <p className="text-sm leading-relaxed">{backText}</p>
                    <a
                        href={link}
                        className="mt-6 inline-block rounded-full bg-white px-6 py-2 text-center text-[#1F3A68] font-medium hover:bg-[#C9A249] hover:text-white transition-colors"
                    >
                        Read More
                    </a>
                </div>
            </div>
        </div>
    );
};

const RelocationGuides: React.FC = () => {
    const guides = [
        {
            title: "Cost of Living in Tennessee",
            frontImg: "https://whytennessee.com/wp-content/uploads/2025/12/Real-estate-concept-business_-home-insurance-and-real-estate-protection.-Buy-and-sell-houses-and-real-estate-online-on-a-virtual-screen.jpeg",
            backText: "Tennessee offers affordable housing, low taxes, and a cost of living that makes relocation easier.",
            link: "https://whytennessee.com/cost-of-living-in-tennessee/"
        },
        {
            title: "Best Places to Live",
            frontImg: "https://whytennessee.com/wp-content/uploads/2025/12/1764027945756-524499646-Waterfront-Home.avif",
            backText: "Discover vibrant cities and peaceful towns with great schools, jobs, and communities.",
            link: "https://whytennessee.com/best-places-to-live-in-tennessee/"
        },
        {
            title: "Pros & Cons",
            frontImg: "https://whytennessee.com/wp-content/uploads/2025/12/riverfront_lg.jpg",
            backText: "Affordable living and no state income tax, balanced with hot summers and limited transport.",
            link: "https://whytennessee.com/pros-and-cons-of-living-in-tennessee/"
        },
        {
            title: "Moving Checklist",
            frontImg: "https://whytennessee.com/wp-content/uploads/2025/12/27-PB10401-1.jpg",
            backText: "Plan your move step-by-step: packing, utilities, address change, and settling in.",
            link: "https://whytennessee.com/moving-to-tennessee-checklist/"
        }
    ];

    return (
        <section className="py-20 bg-gray-100">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-14">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Moving to Tennessee?</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        We provide honest, easy-to-understand relocation guides to help you decide if Tennessee is right for you.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {guides.map((guide, index) => (
                        <FlipCard key={index} {...guide} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RelocationGuides;