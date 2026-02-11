import React from 'react'
import { ActionButton } from '@/components/ui/action-button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import AdminLayout from '@/layouts/admin-layout'
import { Listing } from '@/types'
import { Head } from '@inertiajs/react'
import { ArrowLeft, SquarePen } from 'lucide-react'
import { edit, index } from '@/actions/App/Http/Controllers/Admin/ListingController'
import { Badge } from '@/components/ui/badge'

interface Props {
    listing: Listing
}

export default function View({ listing }: Props) {
    return (
        <AdminLayout activeSlug={'listings'}>
            <Head title="Listing Details" />

            <div className="container mx-auto py-6">
                <div className="mb-6 flex items-center justify-between">
                    <h1 className="text-2xl font-bold">Listing Detail</h1>

                    <div className="flex gap-2">
                        <ActionButton IconNode={ArrowLeft} href={index.url()}>
                            Back to Listings
                        </ActionButton>

                        <ActionButton IconNode={SquarePen} href={edit.url(listing.id)}>
                            Edit
                        </ActionButton>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

                    {/* LEFT SIDE */}
                    <div className="space-y-6 lg:col-span-2">

                        {/* Title */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Title</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg text-muted-foreground">
                                    {listing.title ?? 'N/A'}
                                </p>
                            </CardContent>
                        </Card>

                        {/* Description */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Description</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground whitespace-pre-line">
                                    {listing.description ?? 'N/A'}
                                </p>
                            </CardContent>
                        </Card>

                        {/* Property Info Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            <Card>
                                <CardHeader>
                                    <CardTitle>Price</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">
                                        ${listing.purchase_price ?? 'N/A'}
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Property Type</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">
                                        {listing.property_type}
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Listing Status</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <Badge variant="outline">
                                        {listing.listing_status}
                                    </Badge>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Bedrooms</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">
                                        {listing.bedrooms}
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Bathrooms</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">
                                        {listing.bathrooms}
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Square Feet</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">
                                        {listing.square_feet}
                                    </p>
                                </CardContent>
                            </Card>

                        </div>

                    </div>

                    {/* RIGHT SIDE */}
                    <div className="space-y-6">

                        <Card>
                            <CardHeader>
                                <CardTitle>Status & Insights</CardTitle>
                            </CardHeader>

                            <CardContent className="space-y-4">

                                <div>
                                    <p className="text-sm text-muted-foreground">Status</p>
                                    <Badge
                                        variant={
                                            listing.status === 'active'
                                                ? 'default'
                                                : 'destructive'
                                        }
                                    >
                                        {listing.status}
                                    </Badge>
                                </div>

                                <div>
                                    <p className="text-sm text-muted-foreground">Created At</p>
                                    <p className="font-medium">
                                        {listing.created_at
                                            ? new Date(listing.created_at).toLocaleString()
                                            : 'N/A'}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-sm text-muted-foreground">Updated At</p>
                                    <p className="font-medium">
                                        {listing.updated_at
                                            ? new Date(listing.updated_at).toLocaleString()
                                            : 'N/A'}
                                    </p>
                                </div>

                            </CardContent>
                        </Card>

                    </div>
                </div>

                {/* Images Section */}
                <Card className="mt-6">
                    <CardHeader>
                        <CardTitle>Listing Images</CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-4">

                        {/* Primary Image */}
                        {listing.primary_image_url && (
                            <div>
                                <p className="text-sm text-muted-foreground mb-2">
                                    Primary Image
                                </p>
                                <img
                                    src={listing.image_url}
                                    alt="primary-image"
                                    className="w-full max-w-md rounded object-cover"
                                />
                            </div>
                        )}

                        {/* Gallery Images */}
                        {listing.galleries && listing.galleries.length > 0 ? (
                            <div>
                                <p className="text-sm text-muted-foreground mb-3">
                                    Gallery Images
                                </p>

                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                    {listing.galleries.map((image: any) => (
                                        <img
                                            key={image.id}
                                            src={image.image_url}
                                            alt="gallery-image"
                                            className="w-full h-40 object-cover rounded shadow"
                                        />
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <p className="text-muted-foreground">
                                No gallery images available
                            </p>
                        )}

                    </CardContent>
                </Card>
            </div>
        </AdminLayout>
    )
}
