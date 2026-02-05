import { router, usePage } from '@inertiajs/react';
import { LogOut } from 'lucide-react';

export default function Sidebar() {
    const { url } = usePage();
    console.log('url', url);

    const logout = () => {
        router.post(route('user.logout'));
    };
    return (
        <div>
            <aside className="flex w-64 flex-col">
                <nav className="flex-1 space-y-2">
                    <a
                        href="#"
                        className="flex items-center space-x-3 rounded-lg bg-primary p-3 text-white shadow-sm hover:bg-secondary"
                    >
                        <span className="text-lg font-semibold">
                            Listings (Homes)
                        </span>
                    </a>
                    <a
                        href="#"
                        className="flex items-center space-x-3 rounded-lg bg-primary p-3 text-white transition hover:bg-secondary"
                    >
                        <span className="text-lg font-semibold">
                            Add New Listing
                        </span>
                    </a>
                    <a
                        href="account-settings"
                        className={`${url == '/user/account-settings' ? 'bg-secondary' : 'bg-primary'} flex items-center space-x-3 rounded-lg p-3 text-white transition hover:bg-secondary`}
                    >
                        <span className="text-lg font-semibold">
                            Account Settings
                        </span>
                    </a>
                    <a
                        href="#"
                        className="flex items-center space-x-3 rounded-lg bg-primary p-3 text-white transition hover:bg-secondary"
                    >
                        <span className="text-lg font-semibold">
                            License Status
                        </span>
                    </a>
                    <a  onClick={logout} className="flex items-center space-x-3 rounded-lg bg-primary p-3 text-white transition hover:bg-secondary cursor-pointer">
                        <span className="text-lg font-semibold">Log Out</span>
                    </a>

                </nav>
            </aside>
        </div>
    );
}
