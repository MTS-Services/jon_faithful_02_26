import InputError from '@/components/input-error';
import { Hero } from '@/components/sections/frontend/hero';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import FrontendLayout from '@/layouts/frontend-layout';
import { Head, useForm } from '@inertiajs/react';
import { toast } from 'sonner';


interface City {
    id: number;
    name: string;
}
interface InterestedInOption {
    value: string;
    label: string;
}
interface Props {
    cities: City[];
    interested_in_options: InterestedInOption[];
}
export default function GetInTouch({ cities, interested_in_options }: Props) {

    const { data, setData, post, processing, errors, reset } = useForm({
        full_name: '',
        phone_number: '',
        email: '',
        interested_in: '',
        city_id: '',
        message: '',
        is_confirmed: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('frontend.contact.submit'), {
            onSuccess: () => {
                reset();
                toast.success('Listing created successfully.');
            },
        });
    };

    return (
        <FrontendLayout>
            <Hero
                slides={[
                    '/assets/images/Brilliant-Sunset-on-Cumberland-River-in-Tennessee-scaled.jpeg',
                ]}
                height="h-[240px]"
                title={'Get In Touch'}
                className="text-center text-4xl font-bold tracking-tight md:text-5xl"
            />

            <div className="min-h-screen bg-[#333c44] flex items-center justify-center p-6 font-sans">
                <div className="container mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

                    {/* Left Side: Content */}
                    <div className="text-white space-y-6">
                        <p className="text-secondary font-medium tracking-wide">Get in Touch</p>
                        <h1 className="text-4xl md:text-5xl font-medium leading-tight">
                            We're Here to Help You Move to Tennessee
                        </h1>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Whether you're exploring the best cities to live in, looking for homes or rentals,
                            or you're a realtor/business interested in partnering with WhyTennessee – reach out anytime.
                        </p>

                        {/* Info Cards */}
                        <div className="space-y-4 pt-4">
                            <div className="bg-white p-5 rounded-lg flex items-center gap-4 shadow-lg text-gray-800">
                                <div className="bg-secondary p-3 rounded-full text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-bold text-lg">Email</p>
                                    <p className="text-gray-600">info@whytennessee.com</p>
                                </div>
                            </div>

                            <div className="bg-white p-5 rounded-lg flex items-center gap-4 shadow-lg text-gray-800">
                                <div className="bg-secondary p-3 rounded-full text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-bold text-lg">Response Time</p>
                                    <p className="text-gray-600">Typically within 24 hours (Mon–Fri)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="bg-white rounded-xl shadow-2xl p-8 md:p-10 text-gray-800">
                        <h2 className="text-2xl font-medium mb-6 border-b-2 border-secondary inline-block pb-1">
                            Send us a Message
                        </h2>

                        <form onSubmit={submit} className="space-y-4">

                            {/* Full Name & Phone */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="full_name">Full Name *</Label>
                                    <input
                                        id="full_name"
                                        type="text"
                                        value={data.full_name}
                                        onChange={(e) => setData('full_name', e.target.value)}
                                        className="border rounded p-2 bg-gray-50 focus:outline-secondary"
                                        placeholder="Your Name"
                                    />
                                    <InputError message={errors.full_name} />
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="phone_number">Phone Number *</Label>
                                    <input
                                        id="phone_number"
                                        type="text"
                                        value={data.phone_number}
                                        onChange={(e) => setData('phone_number', e.target.value)}
                                        className="border rounded p-2 bg-gray-50 focus:outline-secondary"
                                        placeholder="Your Number"
                                    />
                                    <InputError message={errors.phone_number} />
                                </div>
                            </div>

                            {/* Email & Interested In */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email *</Label>
                                    <input
                                        id="email"
                                        type="email"
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                        className="border rounded p-2 bg-gray-50 focus:outline-secondary"
                                        placeholder="Email"
                                    />
                                    <InputError message={errors.email} />
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="interested_in">I'm interested in *</Label>
                                    <Select
                                        value={data.interested_in}
                                        onValueChange={(value) => setData('interested_in', value)}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select interest" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {interested_in_options.map((option) => (
                                                <SelectItem key={option.value} value={String(option.value)}>
                                                    {option.label}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <InputError message={errors.interested_in} />
                                </div>
                            </div>

                            {/* City */}
                            <div className="grid gap-2">
                                <Label htmlFor="city_id">City *</Label>
                                <Select
                                    value={data.city_id}
                                    onValueChange={(value) => setData('city_id', value)}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select city" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {cities.map((city) => (
                                            <SelectItem key={city.id} value={String(city.id)}>
                                                {city.name}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <InputError message={errors.city_id} />
                            </div>

                            {/* Message */}
                            <div className="grid gap-2">
                                <Label htmlFor="message">Message *</Label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    value={data.message}
                                    onChange={(e) => setData('message', e.target.value)}
                                    className="border rounded p-2 bg-gray-50 focus:outline-secondary"
                                    placeholder="Type here..."
                                />
                                <InputError message={errors.message} />
                            </div>

                            {/* Confirmation */}
                            <div className="flex gap-3 items-center text-sm text-gray-600">
                                <input
                                    type="checkbox"
                                    checked={data.is_confirmed}
                                    onChange={(e) => setData('is_confirmed', e.target.checked)}
                                />
                                <p>
                                    By submitting this form, you confirm that the information provided is accurate.
                                </p>
                            </div>
                            <InputError message={errors.is_confirmed} />

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={processing}
                                className="w-full bg-secondary hover:bg-[#b08d40] text-white font-bold py-3 rounded transition duration-300 shadow-md"
                            >
                                {processing ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>

                </div>
            </div>

        </FrontendLayout>
    );
}
