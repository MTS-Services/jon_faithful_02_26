import { PlatinumCard } from '@/components/ui/PlatinumCard';
import FrontendLayout from '@/layouts/frontend-layout';
import { useForm, usePage } from '@inertiajs/react';

export default function UserDetails({ listings }: any) {
    const { user } = usePage().props as any;

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        message: '',
        user_id: user.id,
    });

    const useContact = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('frontend.user-contact'), {
            onSuccess: () => {
                alert('Request sent successfully!');
                reset('name', 'email', 'message');
            },
            onError: (response) => {
                console.log(response);
            },
        });
    };

    return (
        <FrontendLayout>
            <div className="bg-[#ffffff]">
                <div className="container mx-auto px-4 py-8 md:py-16">
                    <div className="flex flex-col items-start gap-6 md:flex-row md:gap-8">
                        {/* Left Section - Agent Info */}
                        <div className="w-full md:flex-1">
                            <div className="mb-6 h-[300px] w-full overflow-hidden rounded-xl shadow-lg sm:h-[400px] md:mb-8 md:h-[620px]">
                                <img
                                    src={user.image_url}
                                    alt={user.name}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="space-y-4">
                                <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                                    Agent Name: {user.name}
                                </h1>
                                <div className="flex flex-col items-start gap-3 text-gray-700 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
                                    <div className="flex items-center gap-2">
                                        <svg
                                            aria-hidden="true"
                                            className="h-5 w-5"
                                            viewBox="0 0 512 512"
                                            fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M497.39 361.81l-112-48a24 24 0 0 0-28 6.91l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
                                        </svg>
                                        <span className="font-semibold">
                                            {user.phone}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg
                                            aria-hidden="true"
                                            className="h-5 w-5"
                                            viewBox="0 0 512 512"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                        >
                                            <path d="M512 464c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V200.724a48 48 0 0 1 18.387-37.776c24.913-19.529 45.501-35.365 164.2-121.511C199.412 29.17 232.797-.347 256 .003c23.198-.354 56.596 29.172 73.413 41.433 118.687 86.137 139.303 101.995 164.2 121.512A48 48 0 0 1 512 200.724V464zm-65.666-196.605c-2.563-3.728-7.7-4.595-11.339-1.907-22.845 16.873-55.462 40.705-105.582 77.079-16.825 12.266-50.21 41.781-73.413 41.43-23.211.344-56.559-29.143-73.413-41.43-50.114-36.37-82.734-60.204-105.582-77.079-3.639-2.688-8.776-1.821-11.339 1.907l-9.072 13.196a7.998 7.998 0 0 0 1.839 10.967c22.887 16.899 55.454 40.69 105.303 76.868 20.274 14.781 56.524 47.813 92.264 47.573 35.724.242 71.961-32.771 92.263-47.573 49.85-36.179 82.418-59.97 105.303-76.868a7.998 7.998 0 0 0 1.839-10.967l-9.071-13.196z"></path>
                                        </svg>
                                        <span className="cursor-pointer font-semibold break-all sm:break-normal">
                                            {user.email}
                                        </span>
                                    </div>
                                </div>
                                <div className="pt-4">
                                    <h3 className="mb-3 text-lg font-semibold sm:text-xl">
                                        About {user.name}
                                    </h3>
                                    <p className="text-justify leading-relaxed text-gray-600">
                                        {user.your_self}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Section - Contact Form */}
                        <div className="w-full md:w-[350px] md:flex-shrink-0">
                            <div className="rounded-lg border bg-white p-4 shadow-sm">
                                <div className="rounded-t-md bg-black py-3 text-center text-lg font-bold text-white">
                                    Contact: {user.name}
                                </div>
                                <form
                                    onSubmit={useContact}
                                    className="space-y-4"
                                >
                                    <div>
                                        <label className="mt-2 mb-1 block text-sm font-medium text-gray-700">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Name"
                                            className="w-full rounded border border-gray-300 p-2 outline-none focus:ring-1"
                                            value={data.name}
                                            onChange={(e) =>
                                                setData('name', e.target.value)
                                            }
                                        />
                                    </div>
                                    <div>
                                        <label className="mb-1 block text-sm font-medium text-gray-700">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            className="w-full rounded border border-gray-300 p-2 outline-none focus:ring-1"
                                            value={data.email}
                                            onChange={(e) =>
                                                setData('email', e.target.value)
                                            }
                                        />
                                    </div>
                                    <div>
                                        <label className="mb-1 block text-sm font-medium text-gray-700">
                                            Message
                                        </label>
                                        <textarea
                                            rows={4}
                                            placeholder="Message"
                                            className="w-full resize-none rounded border border-gray-300 p-2 outline-none focus:ring-1"
                                            value={data.message}
                                            onChange={(e) =>
                                                setData('message', e.target.value)
                                            }
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full rounded bg-[#1e3a5f] py-3 font-semibold text-white transition-colors hover:bg-[#152d47] cursor-pointer"
                                    >
                                        {processing ? 'Sending...' : 'Send'}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#e4e4e4] py-20">
                    <div className="container px-4">
                        <h3 className="mb-4 text-center font-montserrat text-3xl font-medium">
                            {user.name} Uploaded Listing
                        </h3>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {listings && listings.length > 0 ? (
                                listings.map((listing: any) => (
                                    <PlatinumCard
                                        key={listing.id}
                                        property={listing}
                                    />
                                ))
                            ) : (
                                <div className="col-span-full flex flex-col items-center justify-center text-center">
                                    <div className="rounded-2xl border border-[#1e3a5f] p-6">
                                        <h3 className="mb-2 text-2xl text-gray-800">
                                            No Properties Available
                                        </h3>
                                        <button
                                            onClick={() =>
                                                window.location.reload()
                                            }
                                            className="mt-8 cursor-pointer rounded-full bg-gray-900 px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-[#1e3a5f] hover:shadow-lg active:scale-95"
                                        >
                                            Refresh Listings
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </FrontendLayout>
    );
}
