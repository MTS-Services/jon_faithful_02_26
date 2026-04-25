import {
    edit,
    index,
} from '@/actions/App/Http/Controllers/Admin/UserManagement/UserController';
import { ActionButton } from '@/components/ui/action-button';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlatinumCard } from '@/components/ui/PlatinumCard';
import { UserVerificationModal } from '@/components/ui/user-verification-modal';
import AdminLayout from '@/layouts/admin-layout';
import { Rental, User } from '@/types';
import { Listing } from '@/types/model';
import { Head, Link, router } from '@inertiajs/react';
import { ArrowLeft, SquarePen, ShieldCheck } from 'lucide-react';
import React from 'react';

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
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    return (
        <AdminLayout activeSlug={'users'}>
            <Head title="User Details" />

            <div className="">
                <div className="mb-6 flex items-center justify-between">
                    <h1 className="text-2xl font-bold">User Details</h1>
                    <div className="flex gap-2">
                        <ActionButton IconNode={ArrowLeft} href={index.url()}>
                            Back to Users
                        </ActionButton>
                        <ActionButton
                            IconNode={SquarePen}
                            href={edit.url(user.id)}
                        >
                            Edit
                        </ActionButton>
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
                                <img
                                    src={(user as any).image_url}
                                    alt="user-image"
                                    className="h-full w-full rounded object-cover"
                                />
                            )}
                        </CardContent>
                    </Card>
                   
                        {!user.is_verified && (
                            <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
                                <h3 className="text-sm font-medium text-gray-500">
                                    User Verification Status
                                </h3>
                                <div className="mt-2 flex items-center justify-between">
                                    <span className="rounded-full bg-[#d02738] px-2 py-1 text-xs text-white uppercase">
                                        Pending
                                    </span>

                                    <button 
                                        onClick={() => {
                                            if (confirm(`Are you sure you want to verify ${user.name}?`)) {
                                                router.visit(route('admin.um.user.verify', user.id));
                                            }
                                        }}
                                        className="cursor-pointer rounded bg-[#121711] px-4 py-2 text-xs font-semibold text-white transition-all hover:bg-[#b8912a]"
                                    >
                                        Verify Now
                                    </button>
                                </div>
                            </div>
                        )}
                   
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        <Card>
                            <CardHeader>
                                <CardTitle>Name</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg text-muted-foreground">
                                    {user.name ?? 'N/A'}
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Username</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    {(user as any).username ?? 'N/A'}
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Email</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    {user.email ?? 'N/A'}
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Phone</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    {(user as any).phone ?? 'N/A'}
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Brokerage</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    {(user as any).brokerage_name ?? 'N/A'}
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>License Number</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    {(user as any).license_number ?? 'N/A'}
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>
                                    License Verification Status
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center justify-between">
                                    <Badge
                                        variant={
                                            user.license_verification_status ===
                                            'approved'
                                                ? 'default'
                                                : 'destructive'
                                        }
                                    >
                                        {user.license_verification_status}
                                    </Badge>
                                    <Button
                                        size="sm"
                                        onClick={() => setIsModalOpen(true)}
                                        className="flex gap-2"
                                    >
                                        <ShieldCheck className="h-4 w-4" />
                                        Verify License
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Created At</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    {user.created_at
                                        ? new Date(
                                              user.created_at,
                                          ).toLocaleString()
                                        : 'N/A'}
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Updated At</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    {user.updated_at
                                        ? new Date(
                                              user.updated_at,
                                          ).toLocaleString()
                                        : 'N/A'}
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Email Verified At</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    {user.email_verified_at
                                        ? new Date(
                                              user.email_verified_at,
                                          ).toLocaleString()
                                        : 'N/A'}
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
            {listings?.data && listings.data.length > 0 && (
                <section className="mt-12">
                    {/* Active Listings */}
                    <h2 className="mb-6 text-2xl font-bold">Active Listings</h2>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {listings?.data?.map((listing: Listing) => (
                            <PlatinumCard
                                key={listing.id}
                                property={listing}
                                type="admin-listing"
                            />
                        ))}
                    </div>
                    {listings?.links &&
                        listings.links.length > 0 &&
                        listings?.total > 10 && (
                            <div className="mt-6 flex flex-wrap items-center gap-2">
                                {listings.links.map(
                                    (link: any, index: number) => {
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
                                                className={`rounded px-4 py-2 text-sm font-medium transition-colors ${
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
                                    },
                                )}
                            </div>
                        )}
                </section>
            )}

            {rentals?.data && rentals?.data?.length > 0 && (
                <section className="mt-12">
                    <h2 className="mb-6 text-2xl font-bold">Active Rentals</h2>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {rentals?.data?.map((rental: Rental) => (
                            <PlatinumCard
                                key={rental.id}
                                property={rental}
                                type="admin-rental"
                            />
                        ))}
                    </div>
                    {rentals?.links &&
                        rentals.links.length > 0 &&
                        rentals?.total > 10 && (
                            <div className="mt-6 flex flex-wrap items-center gap-2">
                                {rentals.links.map(
                                    (link: any, index: number) => {
                                        return (
                                            <Link
                                                key={index}
                                                href={link.url || '#'}
                                                preserveScroll
                                                className={`rounded px-4 py-2 text-sm font-medium transition-colors ${link.active ? 'bg-secondary text-primary-foreground' : 'bg-primary text-primary-foreground hover:bg-secondary'} ${!link.url ? 'cursor-not-allowed opacity-50' : ''}`}
                                            >
                                                {link.label}
                                            </Link>
                                        );
                                    },
                                )}
                            </div>
                        )}
                </section>
            )}

        <UserVerificationModal
            user={user}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
        />
        </AdminLayout>
    );
}
