import FrontendLayout from '@/layouts/frontend-layout';
import { usePage } from '@inertiajs/react';
import { Mail, Phone } from 'lucide-react';

export default function UserDetails() {
    const { user } = usePage().props as any;

    return (
        <FrontendLayout>
            <div className="mx-auto container bg-gray-50 px-4 py-16">
                <div className="flex flex-col gap-8 md:flex-row">
                    {/* Left Side */}
                    <div className="flex-1">
                        <div className="mb-8 overflow-hidden rounded-xl shadow-lg">
                            <img
                                src={user.image_url}
                                alt={user.name}
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="space-y-4">
                            <h1 className="text-3xl font-bold text-gray-900">
                                Agent Name: {user.name}
                            </h1>
                            <div className="flex flex-wrap items-center gap-6 text-gray-700">
                                <div className="flex items-center gap-2">
                                    <Phone
                                        size={20}
                                        className="text-blue-900"
                                    />
                                    <span className="font-semibold">
                                        {user.phone}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Mail size={20} className="text-blue-900" />
                                    <span className="cursor-pointer font-semibold text-blue-600 hover:underline">
                                        {user.email}
                                    </span>
                                </div>
                            </div>
                            <div className="pt-4">
                                <h3 className="mb-3 text-xl font-semibold">
                                    About {user.name}
                                </h3>
                                <p className="text-justify leading-relaxed text-gray-600">
                                    {user.your_self}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Contact Form */}
                    <div className="w-full md:w-[350px]">
                        <div className="rounded-lg border p-1 shadow-sm">
                            <div className="rounded-t-md bg-black py-3 text-center text-lg font-bold text-white">
                                Contact: {user.name}
                            </div>
                            <form className="space-y-4 p-4">
                                <div>
                                    <label className="mb-1 block text-sm font-medium text-gray-700">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        className="w-full rounded border border-gray-300 p-2 outline-none focus:ring-1 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="mb-1 block text-sm font-medium text-gray-700">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="w-full rounded border border-gray-300 p-2 outline-none focus:ring-1 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="mb-1 block text-sm font-medium text-gray-700">
                                        Message
                                    </label>
                                    <textarea
                                        rows={4}
                                        placeholder="Message"
                                        className="w-full resize-none rounded border border-gray-300 p-2 outline-none focus:ring-1 focus:ring-blue-500"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full rounded bg-[#1e3a5f] py-3 font-semibold text-white transition-colors hover:bg-blue-900"
                                >
                                    Send
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </FrontendLayout>
    );
}
