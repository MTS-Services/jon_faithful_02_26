import { Link } from '@inertiajs/react';

import AppLogo from '@/components/app-logo';

export function FrontendFooter() {
    return (
        <footer className="mt-auto bg-black">
            <div className="container mx-auto px-4 lg:px-0">

                {/* Bottom Bar */}
                <div className="flex items-center justify-between py-4">
                    <p className="text-xs md:text-base text-white">
                        &copy; {new Date().getFullYear()} Team Artisan Inc. All rights reserved.
                    </p>
                    <div className="flex items-center space-x-4">
                      
                        <span className="text-xs md:text-base text-white">Version 2.4.0</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}