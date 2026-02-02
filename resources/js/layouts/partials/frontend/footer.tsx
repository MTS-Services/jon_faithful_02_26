import React from 'react';
import {
    FaArrowCircleRight,
    FaEnvelope,
    FaStopwatch,
    FaFacebookF,
    FaTwitter,
    FaInstagram
} from 'react-icons/fa';
import { FaAddressBook } from 'react-icons/fa6'; // For the address book variation

const FrontendFooter: React.FC = () => {
    return (
        <footer className="bg-white pt-16 pb-8 border-t border-gray-200">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Brand/About Section */}
                    <div>
                        <img
                            src="https://whytennessee.com/wp-content/uploads/2025/12/DFD32E71-47C0-41C6-86DE-4B5126B4E53A-e1765605051715.png"
                            alt="Why Tennessee"
                            className="h-16 mb-6"
                        />
                        <p className="text-gray-500 text-sm leading-relaxed">
                            WhyTennessee.com is a marketing and discovery platform and is not a real estate brokerage.
                            We do not represent buyers or sellers directly. All real estate services are provided by
                            independent, licensed professionals.
                        </p>
                    </div>

                    {/* Quick Links Section */}
                    <div>
                        <h3 className="font-bold text-lg mb-6 text-primary">Quick Links</h3>
                        <ul className="space-y-3 text-sm text-gray-600">
                            {[
                                "Moving to Tennessee",
                                "Relocation Guide",
                                "Cost of Living",
                                "Best Places to Live",
                                "Renting & Buying"
                            ].map((link) => (
                                <li key={link}>
                                    <a href="#" className="hover:text-black transition flex items-center group">
                                        <FaArrowCircleRight className="mr-2 text-gray-400 group-hover:text-primary transition-colors" />
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Information Section */}
                    <div>
                        <h3 className="font-bold text-lg mb-6 text-primary">Information</h3>
                        <ul className="space-y-4 text-sm text-gray-600">
                            <li className="flex items-center">
                                <FaEnvelope className="mr-3 text-gray-400 w-5 text-center" />
                                info@whytennessee.com
                            </li>
                            <li className="flex items-center">
                                <FaStopwatch className="mr-3 text-gray-400 w-5 text-center" />
                                Typically within 24 hours
                            </li>
                            <li className="flex items-center">
                                <FaAddressBook className="mr-3 text-gray-400 w-5 text-center" />
                                United States
                            </li>
                            <li className="flex items-center">
                                <a href="#" className="hover:text-black transition flex items-center">
                                    <FaAddressBook className="mr-3 text-gray-400 w-5 text-center" />
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter Section */}
                    <div>
                        <h3 className="font-bold text-lg mb-6 text-primary">Newsletter</h3>
                        <form className="flex flex-col space-y-3" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full bg-white border border-gray-300 px-4 py-2 text-sm rounded focus:outline-none focus:border-primary transition"
                            />
                            <button
                                className="bg-primary text-white px-4 py-2 rounded text-sm font-medium hover:bg-black transition"
                            >
                                Submit
                            </button>
                        </form>

                        {/* Social Icons */}
                        <div className="flex space-x-3 mt-4">
                            <SocialLink href="#" Icon={FaFacebookF} />
                            <SocialLink href="#" Icon={FaTwitter} />
                            <SocialLink href="#" Icon={FaInstagram} />
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-200 pt-8 flex flex-col md:row justify-between items-center text-sm text-gray-500 md:flex-row">
                    <p>&copy; {new Date().getFullYear()} WHY TENNESSEE. All rights reserved.</p>
                    <a href="#" className="hover:text-primary mt-2 md:mt-0 transition">
                        Privacy Policy
                    </a>
                </div>
            </div>
        </footer>
    );
};

// Sub-component for Social Links
const SocialLink: React.FC<{ href: string; Icon: React.ElementType }> = ({ href, Icon }) => (
    <a
        href={href}
        className="w-8 h-8 flex items-center justify-center bg-primary rounded-full shadow-sm hover:bg-secondary group transition-all duration-300"
    >
        <Icon className="w-4 h-4 text-white transition-all duration-300" />
    </a>
);

export { FrontendFooter };