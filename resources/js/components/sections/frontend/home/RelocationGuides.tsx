"use client";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { FreeMode, Navigation, Pagination } from 'swiper/modules';

interface CardProps {
    title: string;
    image: string;
    description: string;
    link: string;
}

// const FlipCard: React.FC<CardProps> = ({ title, image, description, link }) => {
//     return (
//         <div className="group h-80 [perspective:1000px]">
//             <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
//                 {/* Front Side */}
//                 <div className="absolute inset-0">
//                     <img src={image} className="h-full w-full rounded-xl object-cover shadow-black/40" alt={title} />
//                     <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-black/50 p-6">
//                         <h3 className="text-center text-xl font-bold text-white">{title}</h3>
//                     </div>
//                 </div>

//                 {/* Back Side */}
//                 <div className="absolute inset-0 h-full w-full rounded-xl bg-primary p-6 text-white [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col justify-center">
//                     <h3 className="mb-3 text-xl font-bold">{title}</h3>
//                     <p className="text-sm leading-relaxed">{description}</p>
//                     <a
//                         href={link}
//                         className="mt-6 inline-block rounded-full bg-white px-6 py-2 text-center text-primary font-medium hover:bg-secondary hover:text-white transition-colors"
//                     >
//                         Read More
//                     </a>
//                 </div>
//             </div>
//         </div>
//     );
// };

const FlipCard: React.FC<CardProps> = ({ title, image, description, link }) => {
    return (
        <div className="group h-80 [perspective:1000px]">
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                {/* Front Side */}
                <div className="absolute inset-0">
                    <img
                        src={image}
                        className="h-full w-full rounded-xl object-cover"
                        alt={title}
                    />

                    {/* 🔥 IMPORTANT FIX */}
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-xl bg-black/50 p-6">
                        <h3 className="text-center text-xl font-bold text-white">
                            {title}
                        </h3>
                    </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 h-full w-full rounded-xl bg-primary p-6 text-white [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col justify-center">
                    <h3 className="mb-3 text-xl font-bold">{title}</h3>
                    <p className="text-sm leading-relaxed">{description}</p>

                    {/* clickable */}
                    <a
                        href={link}
                        className="mt-6 inline-block rounded-full bg-white px-6 py-2 text-center text-primary font-medium hover:bg-secondary hover:text-white transition-colors pointer-events-auto"
                    >
                        Read More
                    </a>
                </div>

            </div>
        </div>
    );
};

const RelocationGuides = () => {
    const guides = [
        {
            title: "Best Places to Live in Tennessee",
            image: "assets/images/home/1764027945756-524499646-Waterfront-Home.avif",
            description: "",
            link: "live-tennessee"
        },
        {
            title: "Pros and Cons of Living in Tennessee",
            image: "assets/images/riverfront_lg.jpg",
            description: "Tennessee offers affordable living, no state income tax, and beautiful scenery, but hot summers and limited public transport can be challenging.",
            link: "pros-cons-living-in-tennessee"
        },
        {
            title: "Tennessee Moving Checklist",
            image: "assets/images/home/27-PB10401-1.jpg",
            description: "Plan your move to Tennessee with ease: pack essentials, update your address, transfer utilities, and explore your new community.",
            link: "moving-checklist"
        },
        {
            title: "Cost of Living in Tennessee",
            image: "assets/images/home/Real-estate-concept-business.jpeg",
            description: "",
            link: "cost-of-living-in-tennessee"
        },

    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <Swiper
                    slidesPerView={1.1}
                    spaceBetween={20}
                    navigation
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Navigation, Pagination, FreeMode]}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 4 },
                    }}
                >
                {guides.map((guide, index) => (
                    <SwiperSlide key={index}>
                        <FlipCard {...guide} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
        </section >
    );
};

export default RelocationGuides;