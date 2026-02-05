import { router, usePage } from '@inertiajs/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Sidebar() {
    const { url } = usePage();
    const [isOpen, setIsOpen] = useState(false);
    console.log('url', url);

    const logout = () => {
        router.post(route('user.logout'));
    };

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative z-10">
            <button
                onClick={toggleSidebar}
                className="top-4 left-4 z-50 rounded-lg bg-primary p-2 text-white shadow-lg md:hidden ml-3"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Overlay */}
            {isOpen && (
                <div
                    onClick={toggleSidebar}
                    className="bg-opacity-50 inset-0 z-30 bg-black md:hidden ml-3"
                />
            )}

            <aside
                className={`top-0 left-0 z-40 w-64  flex flex-col overflow-hidden bg-white shadow-lg transition-all duration-500 ease-in-out md:relative md:translate-x-0 ${
                    isOpen
                        ? 'max-h-screen translate-x-0 opacity-100'
                        : 'max-h-0 md:max-h-screen -translate-x-full opacity-0 md:opacity-100'
                } `}
            >
                <nav className="flex-1 space-y-2 p-4">
                    <a
                        href="#"
                        className="flex items-center space-x-3 rounded-lg bg-primary p-3 text-white shadow-sm hover:bg-secondary"
                        onClick={() => setIsOpen(false)}
                    >
                        <span className="text-lg font-semibold">
                            Listings (Homes)
                        </span>
                    </a>

                    <a
                        href="#"
                        className="flex items-center space-x-3 rounded-lg bg-primary p-3 text-white transition hover:bg-secondary"
                        onClick={() => setIsOpen(false)}
                    >
                        <span className="text-lg font-semibold">
                            Add New Listing
                        </span>
                    </a>

                    <a
                        href="account-settings"
                        className={`${url == '/user/account-settings' ? 'bg-secondary' : 'bg-primary'} flex items-center space-x-3 rounded-lg p-3 text-white transition hover:bg-secondary`}
                        onClick={() => setIsOpen(false)}
                    >
                        <span className="text-lg font-semibold">
                            Account Settings
                        </span>
                    </a>

                    <a
                        href="#"
                        className="flex items-center space-x-3 rounded-lg bg-primary p-3 text-white transition hover:bg-secondary"
                        onClick={() => setIsOpen(false)}
                    >
                        <span className="text-lg font-semibold">
                            License Status
                        </span>
                    </a>
                    <a
                        onClick={() => {
                            logout();
                            setIsOpen(false);
                        }}
                        className="flex cursor-pointer items-center space-x-3 rounded-lg bg-primary p-3 text-white transition hover:bg-secondary"
                    >
                        <span className="text-lg font-semibold">Log Out</span>
                    </a>
                </nav>
            </aside>
        </div>
    );
}
