import React from 'react'
import { ActionButton } from '@/components/ui/action-button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import AdminLayout from '@/layouts/admin-layout'
import { Listing } from '@/types'
import { Head } from '@inertiajs/react'
import { ArrowLeft, SquarePen, Youtube, CheckCircle2 } from 'lucide-react'
import { edit, index } from '@/actions/App/Http/Controllers/Admin/ListingController'
import { Badge } from '@/components/ui/badge'

interface Props {
    listing: Listing & {
        facilities?: { id: number; name: string }[]
        youtube_video_url?: string
    }
}

export default function View({ listing }: Props) {
    // Helper to extract YouTube ID and create embed URL
    const getEmbedUrl = (url: string | undefined) => {
        if (!url) return null;
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11)
            ? `https://www.youtube.com/embed/${match[2]}`
            : null;
    };

    const embedUrl = getEmbedUrl(listing.youtube_video_url);

    return (
        <AdminLayout activeSlug={'listings'}>
            <Head title={`Listing Details - ${listing.title}`} />

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

                    {/* LEFT SIDE: MAIN CONTENT */}
                    <div className="space-y-6 lg:col-span-2">

                        {/* Title & Description */}
                        <Card>
                            <CardHeader>
                                <CardTitle>{listing.title ?? 'N/A'}</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <h4 className="text-sm font-semibold mb-1">Description</h4>
                                    <p className="text-muted-foreground whitespace-pre-line text-sm leading-relaxed">
                                        {listing.description ?? 'No description provided.'}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Facilities */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                                    Facilities & Amenities
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {listing.facilities && listing.facilities.length > 0 ? (
                                        listing.facilities.map((facility) => {
                                            console.log(listing.facilities);
                                            return (
                                                <Badge key={facility.id} variant="secondary" className="px-3 py-1">
                                                    {facility.name}
                                                </Badge>
                                            );
                                        })

                                    ) : (
                                        <p className="text-sm text-muted-foreground">No facilities listed.</p>
                                    )}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Property Details Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <Card>
                                <CardHeader className="pb-2"><CardTitle className="text-sm font-medium">Price</CardTitle></CardHeader>
                                <CardContent><p className="text-xl font-bold text-primary">${Number(listing.purchase_price).toLocaleString()}</p></CardContent>
                            </Card>
                            <Card>
                                <CardHeader className="pb-2"><CardTitle className="text-sm font-medium">Property Type</CardTitle></CardHeader>
                                <CardContent><p className="capitalize font-medium">{listing.property_type?.replace('_', ' ')}</p></CardContent>
                            </Card>
                            <Card>
                                <CardHeader className="pb-2"><CardTitle className="text-sm font-medium">Square Feet</CardTitle></CardHeader>
                                <CardContent><p className="font-medium">{listing.square_feet} sqft</p></CardContent>
                            </Card>
                            <Card>
                                <CardHeader className="pb-2"><CardTitle className="text-sm font-medium">Bedrooms</CardTitle></CardHeader>
                                <CardContent><p className="font-medium">{listing.bedrooms}</p></CardContent>
                            </Card>
                            <Card>
                                <CardHeader className="pb-2"><CardTitle className="text-sm font-medium">Bathrooms</CardTitle></CardHeader>
                                <CardContent><p className="font-medium">{listing.bathrooms}</p></CardContent>
                            </Card>
                            <Card>
                                <CardHeader className="pb-2"><CardTitle className="text-sm font-medium">City</CardTitle></CardHeader>
                                <CardContent><p className="font-medium">{(listing as any).city?.name ?? 'N/A'}</p></CardContent>
                            </Card>
                        </div>

                        {/* YouTube Video Section */}
                        {listing.youtube_video_url && (
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg flex items-center gap-2">
                                        <Youtube className="w-5 h-5 text-red-600" />
                                        Video Walkthrough
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    {embedUrl ? (
                                        <div className="aspect-video w-full">
                                            <iframe
                                                className="w-full h-full rounded-md shadow-sm"
                                                src={embedUrl}
                                                title="YouTube video player"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            ></iframe>
                                        </div>
                                    ) : (
                                        <a href={listing.youtube_video_url} target="_blank" className="text-blue-600 underline">
                                            Watch Video on YouTube
                                        </a>
                                    )}
                                </CardContent>
                            </Card>
                        )}
                    </div>

                    {/* RIGHT SIDE: STATUS & IMAGES */}
                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Listing Status</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex justify-between items-center border-b pb-2">
                                    <span className="text-sm text-muted-foreground">Admin Status</span>
                                    <Badge variant={listing.status === 'active' ? 'default' : 'destructive'}>
                                        {listing.status}
                                    </Badge>
                                </div>
                                <div className="flex justify-between items-center border-b pb-2">
                                    <span className="text-sm text-muted-foreground">Market Status</span>
                                    <Badge variant="outline" className="capitalize">{listing.listing_status}</Badge>
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground">Created: {listing.created_at ? new Date(listing.created_at).toLocaleDateString() : 'N/A'}</p>
                                    <p className="text-xs text-muted-foreground">Updated: {listing.updated_at ? new Date(listing.updated_at).toLocaleDateString() : 'N/A'}</p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Images */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Primary Image</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <img
                                    src={listing.image_url}
                                    alt="primary"
                                    className="w-full h-48 object-cover rounded-md border"
                                />
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Full Width Gallery */}
                {listing.galleries && listing.galleries.length > 0 && (
                    <Card className="mt-6">
                        <CardHeader>
                            <CardTitle>Photo Gallery</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                {listing.galleries.map((image: any) => (
                                    <img
                                        key={image.id}
                                        src={image.image_url}
                                        alt="gallery"
                                        className="w-full h-32 object-cover rounded-lg hover:opacity-90 transition cursor-pointer border"
                                    />
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                )}
            </div>
        </AdminLayout>
    )
}