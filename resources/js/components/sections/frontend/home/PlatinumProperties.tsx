import { PlatinumCard } from "@/components/ui/PlatinumCard";
import React from "react";

const properties = [
    {
        id: 1,
        title: "New Construction Dream Home",
        location: "Chattanooga, TN",
        sqft: "3,900",
        beds: 5,
        baths: 4,
        price: "999",
        img: "assets/images/home/dream-homes-hero.jpg",
    },
    {
        id: 2,
        title: "Gated Community Luxury",
        location: "Cookeville, TN",
        sqft: "4,800",
        beds: 6,
        baths: 5,
        price: "999",
        img: "assets/images/home/Custom-Built-Homes.webp",
    },
    {
        id: 3,
        title: "Historic Renovated Estate",
        location: "Memphis, TN",
        sqft: "3,600",
        beds: 5,
        baths: 4,
        price: "999",
        img: "assets/images/home/LymanEstate-scaled-2.jpg",
    },
    {
        id: 4,
        title: "Waterfront Home on the Lake",
        location: "Kingsport, TN",
        sqft: "4,500",
        beds: 5,
        baths: 4,
        price: "999",
        img: "assets/images/home/1764027945756-524499646-Waterfront-Home.avif",
    },
];

const PlatinumProperties: React.FC = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-primary mb-3">
                    Our Platinum Property For Sale
                </h2>

                <p className="text-gray-600 mb-8 max-w-2xl">
                    An exclusive collection of luxury homes in Tennessee.
                </p>

                <div className="w-20 h-1 bg-gray-200 mb-10"></div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {properties.map((property) => (
                        <PlatinumCard key={property.id} property={property} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PlatinumProperties;
