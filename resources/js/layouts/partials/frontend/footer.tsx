import React from 'react';
import {
    FaArrowCircleRight,
    FaEnvelope,
    FaFacebookF,
    FaInstagram,
    FaStopwatch,
    FaTwitter,
} from 'react-icons/fa';
import { FaAddressBook } from 'react-icons/fa6'; // For the address book variation

const FrontendFooter: React.FC = () => {
    const quickLinks = [
        {
            name: 'Moving to Tennessee',
            href: route('frontend.movingChecklist'),
        },
        {
            name: 'Relocation Guide',
            href: route('frontend.tennessee-relocation'),
        },
        {
            name: 'Cost of Living',
            href: route('frontend.cost-of-renting-tennessee'),
        },
        { name: 'Best Places to Live', href: route('frontend.livetennessee') },
        { name: 'Renting & Buying', href: route('frontend.rentingTennessee') },
    ];

    return (
        <footer className="border-t border-gray-200 bg-white pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
                    {/* Brand/About Section */}
                    <div>
                        <img
                            src="https://whytennessee.com/wp-content/uploads/2025/12/DFD32E71-47C0-41C6-86DE-4B5126B4E53A-e1765605051715.png"
                            alt="Why Tennessee"
                            className="mb-6 h-16"
                        />
                        <p className="text-sm leading-relaxed text-gray-500">
                            WhyTennessee.com is a marketing and discovery
                            platform and is not a real estate brokerage. We do
                            not represent buyers or sellers directly. All real
                            estate services are provided by independent,
                            licensed professionals.
                        </p>
                    </div>

                    {/* Quick Links Section */}
                    <div>
                        <h3 className="mb-6 text-lg font-bold text-primary">
                            Quick Links
                        </h3>

                        <ul className="space-y-3 text-sm text-gray-600">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="group flex items-center transition hover:text-black"
                                    >
                                        <FaArrowCircleRight className="mr-2 text-gray-400 transition-colors group-hover:text-primary" />
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Information Section */}
                    <div>
                        <h3 className="mb-6 text-lg font-bold text-primary">
                            Information
                        </h3>
                        <ul className="space-y-4 text-sm text-gray-600">
                            <li className="flex items-center">
                                <FaEnvelope className="mr-3 w-5 text-center text-gray-400" />
                                info@whytennessee.com
                            </li>
                            <li className="flex items-center">
                                <FaStopwatch className="mr-3 w-5 text-center text-gray-400" />
                                Typically within 24 hours
                            </li>
                            <li className="flex items-center">
                                <FaAddressBook className="mr-3 w-5 text-center text-gray-400" />
                                United States
                            </li>
                            <li className="flex items-center">
                                <a
                                    href={route('frontend.get-in-touch')}
                                    className="flex items-center transition hover:text-black"
                                >
                                    <FaAddressBook className="mr-3 w-5 text-center text-gray-400" />
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter Section */}
                    <div>
                        <h3 className="mb-6 text-lg font-bold text-primary">
                            Newsletter
                        </h3>
                        <form
                            className="flex flex-col space-y-3"
                            onSubmit={(e) => e.preventDefault()}
                        >
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full rounded border border-gray-300 bg-white px-4 py-2 text-sm transition focus:border-primary focus:outline-none"
                            />
                            <button className="rounded bg-primary px-4 py-2 text-sm font-medium text-white transition hover:bg-black">
                                Submit
                            </button>
                        </form>

                        {/* Social Icons */}
                        <div className="mt-4 flex space-x-3">
                            <SocialLink href="https://www.facebook.com/share/1AFnVNHKu9/?mibextid=wwXIfr%20%20" Icon={FaFacebookF} />
                            <SocialLink href="https://x.com/whytennessee" Icon={FaTwitter} />
                            <SocialLink href="https://www.instagram.com/whytennessee" Icon={FaInstagram} />
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="md:row flex flex-col items-center justify-between border-t border-gray-200 pt-8 text-sm text-gray-500 md:flex-row">
                    <p>
                        &copy; {new Date().getFullYear()} WHY TENNESSEE. All
                        rights reserved.
                    </p>
                    <a
                        href="#"
                        className="mt-2 transition hover:text-primary md:mt-0"
                    >
                        Privacy Policy
                    </a>
                </div>
            </div>
        </footer>
    );
};

// Sub-component for Social Links
const SocialLink: React.FC<{ href: string; Icon: React.ElementType }> = ({
    href,
    Icon,
}) => (
    <a
        href={href}
        className="group flex h-8 w-8 items-center justify-center rounded-full bg-primary shadow-sm transition-all duration-300 hover:bg-secondary" target="_blank"
    >
        <Icon className="h-4 w-4 text-white transition-all duration-300" />
    </a>
);

export { FrontendFooter };
