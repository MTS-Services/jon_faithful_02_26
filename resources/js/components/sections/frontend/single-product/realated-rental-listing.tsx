import React from 'react'
import { PlatinumCard } from '@/components/ui/PlatinumCard'



const RealatedRentalListing: React.FC<{ listings: any; listingType: string }> = ({ listings, listingType }) => {
    // Handle paginated data or array data
    const listingsData = listings?.data || listings;
    const listingsArray = Array.isArray(listingsData) ? listingsData : [];
    
    // Don't render if no listings
    if (listingsArray.length === 0) {
        return null;
    }
    
    return (
        <section className="bg-primary-background py-28 px-4 md:px-16 mt-20 rounded-t-[40px] sm:rounded-t-[60px] md:rounded-t-[80px] lg:rounded-t-[100px]">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-primary mb-3 text-center">
                   Related {listingType === 'rental' ? 'Rental' : 'Home'} Listings
                </h2>

                <div className="max-w-[20%] mt-6 mx-auto border border-[#000000] mb-5"></div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {listingsArray.map((listing: any) => (
                        <PlatinumCard key={listing.id} property={listing} type={listingType} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RealatedRentalListing;