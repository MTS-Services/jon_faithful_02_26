
import React from 'react';
import { ActionButton } from '@/components/ui/action-button';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AdminLayout from '@/layouts/admin-layout';
import { Rental, User } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { ArrowLeft, SquarePen } from 'lucide-react';
import { edit, index } from '@/actions/App/Http/Controllers/Admin/UserManagement/UserController';
import { Listing } from '@/types/model';
import { Badge } from '@/components/ui/badge';
import { PlatinumCard } from '@/components/ui/PlatinumCard';

type ListingsPagination = {
    data: Listing[];
    links?: {
        url: string | null;
        label: string;
        active: boolean;
    }[];
};

type RentalsPagination = {
    data: Rental[];
    links?: {
        url: string | null;
        label: string;
        active: boolean;
    }[];
};
interface Props {
    user: User & { listings?: Listing[] };
    listings: ListingsPagination;
    rentals: RentalsPagination;
}

export default function View({ user, listings, rentals }: Props | any) {

    return (
        <AdminLayout activeSlug={'users'}>
            <Head title="User Details" />

            <div className="">
                <div className="mb-6 flex items-center justify-between">
                    <h1 className="text-2xl font-bold">User Details</h1>
                    <div className="flex gap-2">
                        <ActionButton IconNode={ArrowLeft} href={index.url()}>Back to Users</ActionButton>
                        <ActionButton IconNode={SquarePen} href={edit.url(user.id)}>Edit</ActionButton>
                    </div>
                </div>

                {/* Left Column */}
                <div className="space-y-6">
                    <Card className="w-full max-w-64">
                        <CardHeader>
                            <CardTitle>Image</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {(user as any).image_url && (
                                <img src={(user as any).image_url} alt="user-image" className="w-full h-full object-cover rounded" />
                            )}
                        </CardContent>
                    </Card>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Name</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg text-muted-foreground">{user.name ?? 'N/A'}</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Username</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{(user as any).username ?? 'N/A'}</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Email</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{user.email ?? 'N/A'}</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Phone</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{(user as any).phone ?? 'N/A'}</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Brokerage</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{(user as any).brokerage_name ?? 'N/A'}</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>License Number</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{(user as any).license_number ?? 'N/A'}</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>License Verification Status</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Badge variant={user.license_verification_status === 'approved' ? 'default' : 'destructive'}>{user.license_verification_status}</Badge>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Created At</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{user.created_at ? new Date(user.created_at).toLocaleString() : 'N/A'}</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Updated At</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{user.updated_at ? new Date(user.updated_at).toLocaleString() : 'N/A'}</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Email Verified At</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{user.email_verified_at ? new Date(user.email_verified_at).toLocaleString() : 'N/A'}</p>
                            </CardContent>
                        </Card>
                    </div>

                </div>
            </div>
            {listings?.data && listings.data.length > 0 && (
                <section className="mt-12">
                    {/* Active Listings */}
                    <h2 className="text-2xl font-bold mb-6">Active Listings</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {listings?.data?.map((listing: Listing) => (
                            <PlatinumCard key={listing.id} property={listing} type="admin-listing" />
                        ))}
                    </div>
                    {listings?.links && listings.links.length > 0 && listings?.total > 10 && (
                        <div className="mt-6 flex flex-wrap items-center gap-2">
                            {listings.links.map((link: any, index: number) => {
                                const isPrevious =
                                    link.label.includes('Previous') ||
                                    link.label.includes('&laquo;');
                                const isNext =
                                    link.label.includes('Next') ||
                                    link.label.includes('&raquo;');

                                let displayLabel = link.label;
                                if (isPrevious) {
                                    displayLabel = 'Previous';
                                }
                                if (isNext) {
                                    displayLabel = 'Next';
                                }

                                return (
                                    <Link
                                        key={index}
                                        href={link.url || '#'}
                                        preserveScroll
                                        className={`rounded px-4 py-2 text-sm font-medium transition-colors ${link.active
                                            ? 'bg-secondary text-primary-foreground'
                                            : 'bg-primary text-primary-foreground hover:bg-secondary'
                                            } ${!link.url ? 'cursor-not-allowed opacity-50' : ''}`}
                                    >
                                        {isPrevious || isNext
                                            ? displayLabel
                                            : link.label.replace(/&laquo;|&raquo;/g, '')}
                                    </Link>
                                );
                            })}
                        </div>
                    )}
                </section>
            )}

            {rentals?.data && rentals?.data?.length > 0 && (
                <section className="mt-12">
                    <h2 className="text-2xl font-bold mb-6">Active Rentals</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {rentals?.data?.map((rental: Rental) => (
                            <PlatinumCard key={rental.id} property={rental} type="admin-rental" />
                        ))}
                    </div>
                    {rentals?.links && rentals.links.length > 0 && rentals?.total > 10 && (
                        <div className="mt-6 flex flex-wrap items-center gap-2">
                            {rentals.links.map((link: any, index: number) => {
                                return <Link key={index} href={link.url || '#'} preserveScroll className={`rounded px-4 py-2 text-sm font-medium transition-colors ${link.active ? 'bg-secondary text-primary-foreground' : 'bg-primary text-primary-foreground hover:bg-secondary'} ${!link.url ? 'cursor-not-allowed opacity-50' : ''}`}>{link.label}</Link>
                            })}
                        </div>
                    )}
                </section>
            )}
        </AdminLayout>
    );
}