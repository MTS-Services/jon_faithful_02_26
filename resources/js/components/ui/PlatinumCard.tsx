import React from "react";
import { FaBath, FaBed, FaClone, FaMapMarkerAlt } from "react-icons/fa";

type Property = {
    title: string;
    location: string;
    sqft: string;
    beds: number;
    baths: number;
    price: string;
    img: string;
};

const PlatinumCard: React.FC<{ property: Property }> = ({ property }) => {
    const { title, location, sqft, beds, baths, price, img } = property;

    return (
        <div className="border border-gray-100 rounded-lg overflow-hidden shadow-xl transition duration-300 group bg-white">
            {/* Image */}
            <div className="relative overflow-hidden">
                <img
                    src={img}
                    alt={title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
                />

                <span className="absolute top-4 left-4 bg-[#C9A249] text-white text-xs uppercase font-bold px-3 py-2.5 rounded-full">
                    Platinum
                </span>

                <span className="absolute top-4 right-4 bg-[#1F3A68] text-white text-sm font-bold px-4 py-2.5 rounded-full shadow-sm">
                    ${price}k
                </span>
            </div>

            {/* Content */}
            <div className="p-5">
                <h3 className="text-lg text-brand-dark font-semibold mb-4">
                    {title}
                </h3>

                <div className="grid grid-cols-2 gap-y-3 text-sm text-gray-900">
                    <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-brand-dark" />
                        <span>{location}</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <FaClone className="text-brand-dark" />
                        <span>{sqft} sqft</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <FaBed className="text-brand-dark" />
                        <span>{beds} Bedroom</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <FaBath className="text-brand-dark" />
                        <span>{baths} Bathroom</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { PlatinumCard };
