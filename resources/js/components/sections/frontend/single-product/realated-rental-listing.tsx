import React from 'react'
import { PlatinumCard } from '@/components/ui/PlatinumCard'


const properties = [
    {
        id: 1,
        title: "New Construction Dream Home",
        location: "Chattanooga, TN",
        sqft: "3,900",
        beds: 5,
        baths: 4,
        price: "999",
        img: "https://whytennessee.com/wp-content/uploads/2025/12/dream-homes-hero.jpg",
    },
    {
        id: 2,
        title: "Gated Community Luxury",
        location: "Cookeville, TN",
        sqft: "4,800",
        beds: 6,
        baths: 5,
        price: "999",
        img: "https://whytennessee.com/wp-content/uploads/2025/12/Custom-Built-Homes.webp",
    },
    {
        id: 3,
        title: "Historic Renovated Estate",
        location: "Memphis, TN",
        sqft: "3,600",
        beds: 5,
        baths: 4,
        price: "999",
        img: "https://whytennessee.com/wp-content/uploads/2025/12/LymanEstate-scaled-2.jpg",
    },
    {
        id: 4,
        title: "Waterfront Home on the Lake",
        location: "Kingsport, TN",
        sqft: "4,500",
        beds: 5,
        baths: 4,
        price: "999",
        img: "https://whytennessee.com/wp-content/uploads/2025/12/1764027945756-524499646-Waterfront-Home.avif",
    },
]

const RealatedRentalListing: React.FC = () => {
    return (
        <section className="bg-primary-background py-28 px-4 md:px-16 mt-20 rounded-t-[40px] sm:rounded-t-[60px] md:rounded-t-[80px] lg:rounded-t-[100px]">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-primary mb-3 text-center">
                   Realated Rental Listing
                </h2>

                <div className="max-w-[20%] mt-6 mx-auto border border-[#000000] mb-5"></div>



                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {properties.map((property) => (
                        <PlatinumCard key={property.id} property={property} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RealatedRentalListing;