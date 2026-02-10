import { useState } from 'react';

export default function Gallery({ listing }: any) {
    // const images = [
    //     '/assets/images/classic-house-with-flower-garden-2048x1365.jpeg',
    //     '/assets/images/pexels-kelly-34088068-1-scaled.jpg',
    //     '/assets/images/Apartments-in-2048x1365.jpeg',
    //     '/assets/images/Highbury-Homes-for-rent-cookeville-tn.webp',
    // ];

    const images = listing.galleries.map((image: any) => image.image_url);



    const [selectedImage, setSelectedImage] = useState(images[0]);

    return (
        <div className="container mx-auto mt-10 px-4 md:mt-20">
            <div className="mb-6">
                <h1 className="font-montserrat text-2xl font-semibold text-secondary-foreground md:text-3xl">
                    {listing.title}
                </h1>
                <div className="mt-1 flex">
                    {[...Array(5)].map((_, i) => (
                        <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="text-yellow-500 hover:text-yellow-600"
                            fill="currentColor"
                        >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                    ))}
                </div>
            </div>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                <div className="lg:col-span-2">
                    {/* Mobile Layout */}
                    <div className="mb-8 block md:hidden">
                        <div className="mb-4 h-[300px] overflow-hidden rounded-xl bg-muted">
                            <img
                                src={selectedImage}
                                alt="Oakwood Home"
                                className="h-full w-full object-cover transition-all duration-500"
                            />
                        </div>
                        <div className="flex gap-2 overflow-x-auto pb-2">
                            {images.map((img, index) => (
                                <div
                                    key={index}
                                    className={`h-20 w-24 flex-shrink-0 cursor-pointer rounded-lg border-4 transition-all duration-300 ${
                                        selectedImage === img
                                            ? 'scale-105 border-primary shadow-lg'
                                            : 'border-transparent hover:border-primary/30'
                                    }`}
                                    onClick={() => setSelectedImage(img)}
                                >
                                    <img
                                        src={img}
                                        alt={`Oakwood Home ${index + 1}`}
                                        className="h-full w-full rounded object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tablet & Desktop Layout */}
                    <div className="mb-8 hidden gap-4 md:flex">
                        <div className="scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent hover:scrollbar-thumb-primary/40 flex h-[400px] w-32 flex-col gap-2 overflow-y-auto p-1 pr-2 md:h-[500px]">
                            {images.map((img, index) => (
                                <div
                                    key={index}
                                    className={`h-20 flex-shrink-0 cursor-pointer rounded-lg border-4 transition-all duration-300 ${
                                        selectedImage === img
                                            ? 'scale-105 border-primary shadow-lg'
                                            : 'border-transparent hover:border-primary/30'
                                    }`}
                                    onClick={() => setSelectedImage(img)}
                                >
                                    <img
                                        src={img}
                                        alt={`Oakwood Home ${index + 1}`}
                                        className="h-full w-full rounded object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="h-[400px] flex-1 overflow-hidden rounded-xl bg-muted md:h-[500px]">
                            <img
                                src={selectedImage}
                                alt="Oakwood Home"
                                className="h-full w-full object-cover transition-all duration-500"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                <div className="space-y-8 lg:col-span-2">
                    <div className="px-4 md:pl-20">
                        <h2 className="mb-3 text-xl font-semibold text-text-primary md:mb-5 md:text-2xl">
                            Ericgarcia
                        </h2>
                        <p className="text-base font-medium text-text-primary md:text-lg">
                            Realsate Agents
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4 border-b px-4 pb-4 text-sm font-semibold text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <svg
                                aria-hidden="true"
                                className="e-font-icon-svg e-fas-map-marker-alt h-5 w-5 md:h-6 md:w-6"
                                viewBox="0 0 384 512"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                            </svg>
                            <span className="font-montserrat text-base font-semibold text-secondary-foreground md:text-lg">
                                Knoxville
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg
                                aria-hidden="true"
                                className="e-font-icon-svg e-fas-bed h-5 w-5 md:h-6 md:w-6"
                                viewBox="0 0 640 512"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M176 256c44.11 0 80-35.89 80-80s-35.89-80-80-80-80 35.89-80 80 35.89 80 80 80zm352-128H304c-8.84 0-16 7.16-16 16v144H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v352c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-48h512v48c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V240c0-61.86-50.14-112-112-112z"></path>
                            </svg>
                            <span className="font-montserrat text-base font-semibold text-secondary-foreground md:text-lg">
                                Bedroom: {listing.bedrooms}
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg
                                aria-hidden="true"
                                className="e-font-icon-svg e-fas-bath h-5 w-5 md:h-6 md:w-6"
                                viewBox="0 0 512 512"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M32,384a95.4,95.4,0,0,0,32,71.09V496a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V480H384v16a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V455.09A95.4,95.4,0,0,0,480,384V336H32ZM496,256H80V69.25a21.26,21.26,0,0,1,36.28-15l19.27,19.26c-13.13,29.88-7.61,59.11,8.62,79.73l-.17.17A16,16,0,0,0,144,176l11.31,11.31a16,16,0,0,0,22.63,0L283.31,81.94a16,16,0,0,0,0-22.63L272,48a16,16,0,0,0-22.62,0l-.17.17c-20.62-16.23-49.83-21.75-79.73-8.62L150.22,20.28A69.25,69.25,0,0,0,32,69.25V256H16A16,16,0,0,0,0,272v16a16,16,0,0,0,16,16H496a16,16,0,0,0,16-16V272A16,16,0,0,0,496,256Z"></path>
                            </svg>
                            <span className="font-montserrat text-base font-semibold text-secondary-foreground md:text-lg">
                                Bathroom: {listing.bathrooms}
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg
                                aria-hidden="true"
                                className="e-font-icon-svg e-far-clone h-5 w-5 md:h-6 md:w-6"
                                viewBox="0 0 512 512"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M464 0H144c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h320c26.51 0 48-21.49 48-48v-48h48c26.51 0 48-21.49 48-48V48c0-26.51-21.49-48-48-48zM362 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h42v224c0 26.51 21.49 48 48 48h224v42a6 6 0 0 1-6 6zm90-96H150a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h308a6 6 0 0 1 6 6v308a6 6 0 0 1-6 6z"></path>
                            </svg>
                            <span className="font-montserrat text-base font-semibold text-secondary-foreground md:text-lg">
                                {listing.square_feet} sqft
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 px-4 md:flex-row md:items-center md:gap-4">
                        <h2 className="font-montserrat text-xl font-semibold text-primary md:text-[25px]">
                            Description:
                        </h2>
                        <p className="font-montserrat font-normal text-primary">
                            {listing.description}
                        </p>
                    </div>
                    <div className="px-4">
                        <h3 className="mb-4 text-xl font-bold text-text-muted md:text-2xl">
                            Facilities
                        </h3>
                        <div className="grid grid-cols-1 gap-y-2 text-sm text-text-muted sm:grid-cols-2">
                            <div className="space-y-2">
                                <div className="flex items-center">
                                    <svg
                                        className="mr-2 inline-block h-4 w-4 flex-shrink-0 text-primary"
                                        viewBox="0 0 512 512"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                    >
                                        <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                                    </svg>
                                    <p className="font-montserrat text-sm font-semibold text-secondary-foreground md:text-base">
                                        Wi-Fi
                                    </p>
                                </div>
                                <div className="flex items-center">
                                    <svg
                                        className="mr-2 inline-block h-4 w-4 flex-shrink-0 text-primary"
                                        viewBox="0 0 512 512"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                    >
                                        <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                                    </svg>
                                    <p className="font-montserrat text-sm font-semibold text-secondary-foreground md:text-base">
                                        Dining Area
                                    </p>
                                </div>
                                <div className="flex items-center">
                                    <svg
                                        className="mr-2 inline-block h-4 w-4 flex-shrink-0 text-primary"
                                        viewBox="0 0 512 512"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                    >
                                        <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                                    </svg>
                                    <p className="font-montserrat text-sm font-semibold text-secondary-foreground md:text-base">
                                        Car rental
                                    </p>
                                </div>
                                <div className="flex items-center">
                                    <svg
                                        className="mr-2 inline-block h-4 w-4 flex-shrink-0 text-primary"
                                        viewBox="0 0 512 512"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                    >
                                        <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                                    </svg>
                                    <p className="font-montserrat text-sm font-semibold text-secondary-foreground md:text-base">
                                        Laundry service
                                    </p>
                                </div>
                                <div className="flex items-center">
                                    <svg
                                        className="mr-2 inline-block h-4 w-4 flex-shrink-0 text-primary"
                                        viewBox="0 0 512 512"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                    >
                                        <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                                    </svg>
                                    <p className="font-montserrat text-sm font-semibold text-secondary-foreground md:text-base">
                                        Car rental
                                    </p>
                                </div>
                                <div className="flex items-center">
                                    <svg
                                        className="mr-2 inline-block h-4 w-4 flex-shrink-0 text-primary"
                                        viewBox="0 0 512 512"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                    >
                                        <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                                    </svg>
                                    <p className="font-montserrat text-sm font-semibold text-secondary-foreground md:text-base">
                                        Laundry service
                                    </p>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center">
                                    <svg
                                        className="mr-2 inline-block h-4 w-4 flex-shrink-0 text-primary"
                                        viewBox="0 0 512 512"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                    >
                                        <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                                    </svg>
                                    <p className="font-montserrat text-sm font-semibold text-secondary-foreground md:text-base">
                                        Meeting facilities
                                    </p>
                                </div>
                                <div className="flex items-center">
                                    <svg
                                        className="mr-2 inline-block h-4 w-4 flex-shrink-0 text-primary"
                                        viewBox="0 0 512 512"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                    >
                                        <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                                    </svg>
                                    <p className="font-montserrat text-sm font-semibold text-secondary-foreground md:text-base">
                                        24-Hour doctor
                                    </p>
                                </div>
                                <div className="flex items-center">
                                    <svg
                                        className="mr-2 inline-block h-4 w-4 flex-shrink-0 text-primary"
                                        viewBox="0 0 512 512"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                    >
                                        <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                                    </svg>
                                    <p className="font-montserrat text-sm font-semibold text-secondary-foreground md:text-base">
                                        Airport transfers
                                    </p>
                                </div>
                                <div className="flex items-center">
                                    <svg
                                        className="mr-2 inline-block h-4 w-4 flex-shrink-0 text-primary"
                                        viewBox="0 0 512 512"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                    >
                                        <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                                    </svg>
                                    <p className="font-montserrat text-sm font-semibold text-secondary-foreground md:text-base">
                                        24-Hour security
                                    </p>
                                </div>
                                <div className="flex items-center">
                                    <svg
                                        className="mr-2 inline-block h-4 w-4 flex-shrink-0 text-primary"
                                        viewBox="0 0 512 512"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                    >
                                        <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                                    </svg>
                                    <p className="font-montserrat text-sm font-semibold text-secondary-foreground md:text-base">
                                        Catering service
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-4">
                        <h3 className="mb-4 font-montserrat text-xl font-semibold text-secondary-foreground md:text-[25px]">
                            More About Property
                        </h3>
                        <div className="group relative overflow-hidden rounded-xl shadow-lg">
                            <div className="relative overflow-hidden rounded-xl shadow-lg">
                                <iframe
                                    className="h-[250px] w-full sm:h-[300px] md:h-[400px]"
                                    src="https://www.youtube.com/embed/VAEC_N3zPVU?si=4LgkqzHJnkV2PhDZ"
                                    title="YouTube video"
                                    frameBorder={0}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>

                            {/* <div className="absolute inset-0 flex items-center justify-center bg-foreground/30">
                                <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-red-600 transition-transform hover:scale-110 md:h-16 md:w-16">
                                    <svg
                                        className="h-6 w-6 fill-current text-primary-foreground md:h-8 md:w-8"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </div> */}
                            <div className="absolute bottom-2 left-2 text-base font-bold text-primary-foreground drop-shadow-md md:bottom-4 md:left-4 md:text-xl">
                                THE DREAM LIFE
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-y-6">
                    <div className="rounded-xl border border-muted bg-background p-6 text-center shadow-sm">
                        <h3 className="text--muted-foreground mb-4 border-b pb-2 text-left text-lg font-bold">
                            About Property Agents
                        </h3>
                        <img
                            src="/assets/images/medium-shot-woman-working-as-real-estate-agent_23-2151065041-1.jpg"
                            alt="Agent"
                            className="mb-4 h-64 w-full rounded-lg object-cover"
                        />
                        <h4 className="text-xl leading-tight font-bold text-text-primary">
                            Maria Johnson
                        </h4>
                        <p className="text-sm text-primary">
                            Maria Johnson@gmail.com
                        </p>
                    </div>
                    <div className="rounded-xl border border-muted bg-background p-6 shadow-sm">
                        <h3 className="text--muted-foreground mb-4 text-lg font-bold">
                            Contact Realsate Agents
                        </h3>
                        <form className="space-y-4">
                            <div>
                                <label className="mb-1 block text-sm font-semibold text-primary">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter Name"
                                    className="w-full rounded-md border p-2.5 transition-all outline-none focus:ring-2"
                                />
                            </div>
                            <div>
                                <label className="mb-1 block text-sm font-semibold text-primary">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="Enter Email Address"
                                    className="w-full rounded-md border p-2.5 transition-all outline-none focus:ring-2"
                                />
                            </div>
                            <div>
                                <label className="mb-1 block text-sm font-semibold text-primary">
                                    Phone Number
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter Phone Number"
                                    className="w-full rounded-md border p-2.5 transition-all outline-none focus:ring-2"
                                />
                            </div>
                            <button className="w-full rounded-md bg-primary py-3 font-bold text-primary-foreground transition-colors hover:bg-primary/80">
                                Submit Request
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
