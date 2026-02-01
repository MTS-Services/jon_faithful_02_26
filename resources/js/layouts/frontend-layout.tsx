import * as React from 'react';

import { FrontendFooter } from '@/layouts/partials/frontend/footer';
import { FrontendHeader } from '@/layouts/partials/frontend/header';

interface FrontendLayoutProps {
    children: React.ReactNode;
}

export default function FrontendLayout({ children }: FrontendLayoutProps) {
    return (
        <div className="flex min-h-screen flex-col">
            <FrontendHeader />
            <main className="flex flex-1 flex-col container px-4 md:lg-0">{children}</main>
            <FrontendFooter />
        </div>
    );
}
