import { PlatinumCard } from '@/components/ui/PlatinumCard';
import { Link } from '@inertiajs/react';
import React from 'react';

const PlatinumProperties: React.FC<{ listings: any }> = ({ listings }) => {
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-4">
                <h2 className="mb-3 text-3xl font-bold text-primary text-center">
                    Our Platinum Property For Sale
                </h2>

                <p className="mb-4 max-w-xl text-gray-600 mx-auto text-center">An exclusive collection of luxury homes in Tennessee’s most prestigious and desirable communities.</p>

                <div className="mb-10 h-0.5 w-xs bg-gray-800 mx-auto"></div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {listings?.data?.map((listing: any) => (
                        <PlatinumCard key={listing.id} property={listing} />
                    ))}
                </div>

                {/* Pagination Links */}
                {listings?.links && listings.links.length > 0 && (
                    <div className="mt-10 flex items-center justify-center space-x-1">
                        {listings.links.map((link: any, index: number) => {
                           
                            const isPrevious =
                                link.label.includes('Previous') ||
                                link.label.includes('&laquo;');
                            const isNext =
                                link.label.includes('Next') ||
                                link.label.includes('&raquo;');

                            
                            let displayLabel = link.label;
                            if (isPrevious) displayLabel = 'Previous';
                            if (isNext) displayLabel = 'Next';

                            return (
                                <Link
                                    key={index}
                                    href={link.url || '#'}
                                    preserveScroll
                                    disabled={!link.url}
                                    className={`rounded px-4 py-2 transition-colors ${
                                        link.active
                                            ? 'bg-secondary text-primary-foreground'
                                            : 'bg-primary text-primary-foreground hover:bg-secondary'
                                    } ${!link.url ? 'cursor-not-allowed opacity-50' : ''}`}
                                >
                                    {isPrevious || isNext
                                        ? displayLabel
                                        : link.label.replace(
                                              /&laquo;|&raquo;/g,
                                              '',
                                          )}
                                </Link>
                            );
                        })}
                    </div>
                )}
            </div>
        </section>
    );
};

export default PlatinumProperties;
