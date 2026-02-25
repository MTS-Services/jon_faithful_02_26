import { Card, CardContent } from '@/components/ui/card';
import { useForm } from '@inertiajs/react';
import { useState } from 'react';
import { toast } from 'sonner';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { FreeMode, Navigation, Pagination } from 'swiper/modules';
import UnitFeatures from './unit-features';

// ── Pet icon helpers ──────────────────────────────────────────────
const PetIcons: Record<string, React.ReactNode> = {
    'small dogs': (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-9 w-9">
            <path d="M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 2.115M14.5 6.5c1-.8 3.5-1.5 5 0 .667 1 1.4 4.167 0 6" />
            <path d="M8 14v.5M16 14v.5M11.25 16.25h1.5L12 17l-.75-.75z" />
            <path d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309m-9.243-6.082A8.801 8.801 0 0 1 12 5c.78 0 1.5.108 2.1.306" />
        </svg>
    ),
    'large dogs': (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-9 w-9">
            <path d="M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 2.115M14.5 6.5c1-.8 3.5-1.5 5 0 .667 1 1.4 4.167 0 6" />
            <path d="M8 14v.5M16 14v.5M11.25 16.25h1.5L12 17l-.75-.75z" />
            <path d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309m-9.243-6.082A8.801 8.801 0 0 1 12 5c.78 0 1.5.108 2.1.306" />
        </svg>
    ),
    'cats': (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-9 w-9">
            <path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5z" />
            <path d="M8 14v.5M16 14v.5M11.25 16.25h1.5L12 17l-.75-.75z" />
        </svg>
    ),
    'birds': (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-9 w-9">
            <path d="M16 7h.01" />
            <path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20" />
            <path d="m20 7 2 .5-2 .5" />
            <path d="M10 18v3M14 17.75V21" />
            <path d="M7 18a6 6 0 0 0 3.84-10.61" />
        </svg>
    ),
    'fish': (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-9 w-9">
            <path d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.46-3.44 6-7 6s-7.56-2.54-8.5-6z" />
            <path d="M18 12v.5" />
            <path d="M16 17.93a9.77 9.77 0 0 1 0-11.86" />
            <path d="M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 3.5-.23 7.5 2.27 9S7 13 7 13.33" />
            <path d="M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4" />
            <path d="m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H8c1.55-1.5 2.53-3.55 2.54-5.53" />
        </svg>
    ),
    'rabbits': (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-9 w-9">
            <path d="M18 11.5c.6-1 1-2.5 1-4 0-3-2-5-4-5s-4 2-4 5c0 1.5.4 3 1 4" />
            <path d="M8.5 11.5c-.6-1-1-2.5-1-4 0-3 2-5 4-5" />
            <path d="M6 20c0-3.5 2.5-6 6-6 2 0 3.5.5 4.5 1.5" />
            <path d="M6 20c0 1 1 2 3 2h6c2 0 3-1 3-2 0-2-2-3.5-4-4" />
            <path d="M12 14v2" />
            <circle cx="10.5" cy="19.5" r=".5" fill="currentColor" />
            <circle cx="13.5" cy="19.5" r=".5" fill="currentColor" />
        </svg>
    ),
};

const DefaultPetIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-9 w-9">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><path d="M12 17h.01" />
    </svg>
);

function getPetIcon(petType: string): React.ReactNode {
    const key = petType.toLowerCase();
    for (const k of Object.keys(PetIcons)) {
        if (key.includes(k)) return PetIcons[k];
    }
    return <DefaultPetIcon />;
}

// ── Pet Card ─────────────────────────────────────────────────────
function PetCard({ pet }: { pet: any }) {
    const isAllowed = pet.allowed === 'yes' || pet.allowed === true || pet.allowed === 1;
    return (
        <Card className="w-full rounded-2xl border border-gray-200 bg-white shadow-sm !py-0">
            <CardContent className="p-4 sm:p-5">
                <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        {/* <span className="text-slate-600">{getPetIcon(pet.pet_type)}</span> */}
                        {pet.icon_url ?
                            <img src={pet.icon_url} alt={pet.pet_type} className="h-9 w-9 rounded-full" />
                            :
                            <DefaultPetIcon />
                        }
                        <h3 className="text-lg font-semibold text-gray-900">{pet.pet_type}</h3>
                    </div>
                    <span
                        className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold ${isAllowed
                            ? 'bg-green-100 text-green-700'
                            : 'bg-red-100 text-red-600'
                            }`}
                    >
                        {isAllowed ? 'Allowed' : 'Not Allowed'}
                    </span>
                </div>
                <div className="flex justify-between border-t border-gray-200 pt-3">
                    <span className="text-base text-gray-500">Number allowed</span>
                    <span className="text-lg font-bold text-gray-900">
                        {isAllowed ? (pet.number_allowed ?? '—') : '—'}
                    </span>
                </div>
            </CardContent>
        </Card>
    );
}

// ── Main Component ────────────────────────────────────────────────
export default function Gallery({ listing }: any) {
    const { data, setData, post, processing, reset } = useForm({
        name: '',
        email: '',
        phone: '',
        listing_id: listing.id,
    });

    const submitRequest = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('frontend.submit-request'), {
            onSuccess: () => {
                reset('name', 'email', 'phone');
                toast.success('Request sent successfully!');
            },
            onError: () => {
                toast.error('Failed to send request.');
            },
        });
    };

    const primaryImage = listing.image_url;
    const images = [
        primaryImage,
        ...listing.galleries.map((image: any) => image.image_url),
    ];

    const [selectedImage, setSelectedImage] = useState(images[0]);

    const getEmbedUrl = (url: string | undefined) => {
        if (!url) return null;
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        const match = url.match(regExp);
        return match && match[2].length === 11
            ? `https://www.youtube.com/embed/${match[2]}`
            : null;
    };

    const embedUrl = getEmbedUrl(listing.youtube_video_url);

    // Dynamic pet essentials from backend
    const petEssentials: any[] = listing.pet_essentials ?? [];

    return (
        <div className="container mx-auto mt-6 px-4 md:mt-12">
            {/* Title */}
            <div className="mb-6">
                <h1 className="font-montserrat text-2xl font-semibold text-secondary-foreground md:text-3xl">
                    {listing.title}
                </h1>
                <div className="mt-1 flex">
                    {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-yellow-500 hover:text-yellow-600" fill="currentColor">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                    ))}
                </div>
            </div>

            {/* Gallery */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                <div className="lg:col-span-2">
                    {/* Mobile Layout */}
                    <div className="mb-8 block md:hidden">
                        <div className="mb-4 h-[300px] overflow-hidden rounded-xl bg-muted">
                            <img src={selectedImage} alt="listing" className="h-full w-full object-cover transition-all duration-500" />
                        </div>
                        <div className="flex gap-2 overflow-x-auto pb-2">
                            {images.map((img, index) => (
                                <div
                                    key={index}
                                    className={`h-20 w-24 flex-shrink-0 cursor-pointer rounded-lg border-4 transition-all duration-300 ${selectedImage === img ? 'scale-105 border-primary shadow-lg' : 'border-transparent hover:border-primary/30'}`}
                                    onClick={() => setSelectedImage(img)}
                                >
                                    <img src={img} alt={`listing ${index + 1}`} className="h-full w-full rounded object-cover" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Desktop Layout */}
                    <div className="mb-8 hidden gap-4 md:flex">
                        <div className="scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent hover:scrollbar-thumb-primary/40 flex h-[400px] w-32 flex-col gap-2 overflow-y-auto p-1 pr-2 md:h-[500px]">
                            {images.map((img, index) => (
                                <div
                                    key={index}
                                    className={`h-20 flex-shrink-0 cursor-pointer rounded-lg border-4 transition-all duration-300 ${selectedImage === img ? 'scale-105 border-primary shadow-lg' : 'border-transparent hover:border-primary/30'}`}
                                    onClick={() => setSelectedImage(img)}
                                >
                                    <img src={img} alt={`listing ${index + 1}`} className="h-full w-full rounded object-cover" />
                                </div>
                            ))}
                        </div>
                        <div className="h-[400px] flex-1 overflow-hidden rounded-xl bg-muted md:h-[500px]">
                            <img src={selectedImage} alt="listing" className="h-full w-full object-cover transition-all duration-500" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                <div className="space-y-8 lg:col-span-2">
                    {/* Meta info bar */}
                    <div className="flex flex-wrap items-center justify-between gap-4 border-b px-4 pb-4 text-sm font-semibold text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <svg aria-hidden="true" className="h-5 w-5 md:h-6 md:w-6" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
                                <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
                            </svg>
                            <span className="font-montserrat text-base font-semibold text-secondary-foreground md:text-lg">{listing.city?.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg aria-hidden="true" className="h-5 w-5 md:h-6 md:w-6" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
                                <path d="M176 256c44.11 0 80-35.89 80-80s-35.89-80-80-80-80 35.89-80 80 35.89 80 80 80zm352-128H304c-8.84 0-16 7.16-16 16v144H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v352c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-48h512v48c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V240c0-61.86-50.14-112-112-112z" />
                            </svg>
                            <span className="font-montserrat text-base font-semibold text-secondary-foreground md:text-lg">Bedroom: {listing.bedrooms}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg aria-hidden="true" className="h-5 w-5 md:h-6 md:w-6" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                <path d="M32,384a95.4,95.4,0,0,0,32,71.09V496a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V480H384v16a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V455.09A95.4,95.4,0,0,0,480,384V336H32ZM496,256H80V69.25a21.26,21.26,0,0,1,36.28-15l19.27,19.26c-13.13,29.88-7.61,59.11,8.62,79.73l-.17.17A16,16,0,0,0,144,176l11.31,11.31a16,16,0,0,0,22.63,0L283.31,81.94a16,16,0,0,0,0-22.63L272,48a16,16,0,0,0-22.62,0l-.17.17c-20.62-16.23-49.83-21.75-79.73-8.62L150.22,20.28A69.25,69.25,0,0,0,32,69.25V256H16A16,16,0,0,0,0,272v16a16,16,0,0,0,16,16H496a16,16,0,0,0,16-16V272A16,16,0,0,0,496,256Z" />
                            </svg>
                            <span className="font-montserrat text-base font-semibold text-secondary-foreground md:text-lg">Bathroom: {listing.bathrooms}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg aria-hidden="true" className="h-5 w-5 md:h-6 md:w-6" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                <path d="M464 0H144c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h320c26.51 0 48-21.49 48-48v-48h48c26.51 0 48-21.49 48-48V48c0-26.51-21.49-48-48-48zM362 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h42v224c0 26.51 21.49 48 48 48h224v42a6 6 0 0 1-6 6zm90-96H150a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h308a6 6 0 0 1 6 6v308a6 6 0 0 1-6 6z" />
                            </svg>
                            <span className="font-montserrat text-base font-semibold text-secondary-foreground md:text-lg">{listing.square_feet} sqft</span>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="flex flex-col gap-2 px-4 md:flex-row md:items-center md:gap-4">
                        <h2 className="font-montserrat text-xl font-semibold text-primary md:text-[25px]">Description:</h2>
                        <p className="font-montserrat font-normal text-primary">{listing.description}</p>
                    </div>

                    <UnitFeatures features={listing.features ?? []} />

                    {/* YouTube */}
                    {listing.youtube_video_url && <div className="px-4">

                        <h3 className="mb-4 font-montserrat text-xl font-semibold text-secondary-foreground md:text-[25px]">
                            More About Property
                        </h3>
                        <CardContent>
                            {embedUrl ? (
                                <div className="aspect-video w-full">
                                    <iframe
                                        className="h-full w-full rounded-md shadow-sm"
                                        src={embedUrl}
                                        title="YouTube video player"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                            ) : listing.youtube_video_url ? (
                                <a href={listing.youtube_video_url} target="_blank" className="text-blue-600 underline">
                                    Watch Video on YouTube
                                </a>
                            ) : null}
                        </CardContent>
                    </div>}
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    <div className="rounded-xl border border-muted bg-background p-6 text-center shadow-sm">
                        <h3 className="text--muted-foreground mb-4 border-b pb-2 text-left text-lg font-bold">About Property Agents</h3>
                        <img src={listing.user?.image_url} alt={listing.user?.name} className="mb-4 h-64 w-full rounded-lg object-cover" />
                        <h4 className="text-xl leading-tight font-bold text-text-primary">{listing.user?.name}</h4>
                        <p className="text-sm text-primary">{listing.user?.email}</p>
                    </div>
                    <div className="rounded-xl border border-muted bg-background p-6 shadow-sm">
                        <h3 className="text--muted-foreground mb-4 text-lg font-bold">Contact Realsate Agents</h3>
                        <form className="space-y-4" onSubmit={submitRequest}>
                            <div>
                                <label className="mb-1 block text-sm font-semibold text-primary">Name</label>
                                <input type="text" placeholder="Enter Name" className="w-full rounded-md border p-2.5 transition-all outline-none focus:ring-2" value={data.name} onChange={(e) => setData('name', e.target.value)} />
                            </div>
                            <div>
                                <label className="mb-1 block text-sm font-semibold text-primary">Email</label>
                                <input type="email" placeholder="Enter Email Address" className="w-full rounded-md border p-2.5 transition-all outline-none focus:ring-2" value={data.email} onChange={(e) => setData('email', e.target.value)} />
                            </div>
                            <div>
                                <label className="mb-1 block text-sm font-semibold text-primary">Phone Number</label>
                                <input type="tel" placeholder="Enter Phone Number" className="w-full rounded-md border p-2.5 transition-all outline-none focus:ring-2" value={data.phone} onChange={(e) => setData('phone', e.target.value)} />
                            </div>
                            <button type="submit" disabled={processing} className="w-full cursor-pointer rounded-md bg-primary py-3 font-bold text-primary-foreground transition-colors hover:bg-primary/80">
                                {processing ? 'Submitting...' : 'Submit Request'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* ✅ Dynamic Pet Essentials */}
            {petEssentials.length > 0 && (
                <div className="mt-8">
                    <h3 className="mb-4 font-montserrat text-xl font-semibold text-secondary-foreground md:text-[25px]">
                        Pet Essentials
                    </h3>
                    {petEssentials.length <= 2 ? (
                        <div className={`grid gap-3 ${petEssentials.length === 1 ? 'grid-cols-1 max-w-sm' : 'grid-cols-1 md:grid-cols-2'}`}>
                            {petEssentials.map((pet: any, index: number) => (
                                <PetCard key={index} pet={pet} />
                            ))}
                        </div>
                    ) : (
                        <Swiper
                            spaceBetween={16}
                            navigation
                            pagination={{ clickable: true }}
                            modules={[Navigation, Pagination, FreeMode]}
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                640: { slidesPerView: 1 },
                                1024: { slidesPerView: 2 },
                            }}
                        >
                            {petEssentials.map((pet: any, index: number) => (
                                <SwiperSlide key={index}>
                                    <PetCard pet={pet} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )}
                </div>
            )}
        </div>
    );
}