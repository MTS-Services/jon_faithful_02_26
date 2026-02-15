import { Hero } from '@/components/sections/frontend/hero';
import FrontendLayout from '@/layouts/frontend-layout';
import { Head, useForm } from '@inertiajs/react';

export default function GetInTouch() {

    const { data, setData, post, processing, errors } = useForm({
        full_name: '',
        phone_number: '',
        email: '',
        interest: '',
        city: '',
        message: '',
        terms: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post('/contact-submit'); 
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
                        <p className="text-[#c9a24d] font-medium tracking-wide">Get in Touch</p>
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
                                <div className="bg-[#c9a24d] p-3 rounded-full text-white">
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
                                <div className="bg-[#c9a24d] p-3 rounded-full text-white">
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
                        <h2 className="text-2xl font-medium mb-6 border-b-2 border-[#c9a24d] inline-block pb-1">
                            Send us a Message
                        </h2>
                        
                        <form onSubmit={submit} className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex flex-col">
                                    <label className="text-sm font-normal mb-1">Full Name</label>
                                    <input type="text" placeholder="Your Name" className="border rounded p-2 bg-gray-50 focus:outline-[#c9a24d]" 
                                        onChange={e => setData('full_name', e.target.value)} />
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-sm font-normal mb-1">Phone Number</label>
                                    <input type="text" placeholder="Your Number" className="border rounded p-2 bg-gray-50 focus:outline-[#c9a24d]"
                                        onChange={e => setData('phone_number', e.target.value)} />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex flex-col">
                                    <label className="text-sm font-normal mb-1">Email</label>
                                    <input type="email" placeholder="Email" className="border rounded p-2 bg-gray-50 focus:outline-[#c9a24d]"
                                        onChange={e => setData('email', e.target.value)} />
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-sm font-normal mb-1">I'm interested in</label>
                                    <select className="border rounded p-2 bg-gray-50 focus:outline-[#c9a24d]"
                                        onChange={e => setData('interest', e.target.value)}>
                                        <option>Options</option>
                                        <option>Buying a Home</option>
                                        <option>Renting</option>
                                    </select>
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <label className="text-sm font-normal mb-1">City I'm interested in</label>
                                <select className="border rounded p-2 bg-gray-50 focus:outline-[#c9a24d]"
                                    onChange={e => setData('city', e.target.value)}>
                                    <option>Options</option>
                                    <option>Nashville</option>
                                    <option>Memphis</option>
                                </select>
                            </div>

                            <div className="flex flex-col">
                                <label className="text-sm font-normal mb-1">Message</label>
                                <textarea rows="4" placeholder="Type Here..." className="border rounded p-2 bg-gray-50 focus:outline-[#c9a24d]"
                                    onChange={e => setData('message', e.target.value)}></textarea>
                            </div>

                            <div className="flex gap-3 items-start text-xs text-gray-500">
                                <input type="checkbox" className="mt-1" onChange={e => setData('terms', e.target.checked)} />
                                <p>By submitting this form, you confirm that the information provided is accurate and that you are authorized to submit it.</p>
                            </div>

                            <button 
                                type="submit" 
                                disabled={processing}
                                className="w-full bg-[#c9a24d] hover:bg-[#b08d40] text-white font-bold py-3 rounded transition duration-300 shadow-md">
                                {processing ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>

                </div>
            </div>

        </FrontendLayout>
    );
}
