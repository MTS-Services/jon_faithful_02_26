import * as React from 'react';
import { AdminSidebar } from '@/layouts/partials/admin/sidebar';
import { AdminHeader } from '@/layouts/partials/admin/header';
import { AdminFooter } from './partials/admin/footer';
import { useAppearance } from '@/hooks/use-appearance';
import { useEffect } from 'react';

interface AdminLayoutProps {
    children: React.ReactNode;
    activeSlug?: string | null;
}

export default function AdminLayout({ children, activeSlug }: AdminLayoutProps) {
    const [isCollapsed, setIsCollapsed] = React.useState(() => {
        // Persist sidebar state in localStorage
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('admin-sidebar-collapsed');
            return saved ? JSON.parse(saved) : false;
        }
        return false;
    });
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    const { appearance, updateAppearance } = useAppearance();
    useEffect(() => {
        if (appearance !== 'light') {
            updateAppearance('light');
        }
    }, [appearance, updateAppearance]);

    // Save sidebar state to localStorage
    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('admin-sidebar-collapsed', JSON.stringify(isCollapsed));
        }
    }, [isCollapsed]);

    React.useEffect(() => {
        const onResize = () => {
            if (window.innerWidth >= 768) {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener('resize', onResize);

        return () => {
            window.removeEventListener('resize', onResize);
        };
    }, []);

    const handleMobileNavigate = React.useCallback(() => {
        if (typeof window !== 'undefined' && window.innerWidth < 768) {
            setIsMobileMenuOpen(false);
        }
    }, []);

    return (
        <div className="relative flex h-full max-h-screen min-h-screen bg-background">
            {isMobileMenuOpen && (
                <button
                    type="button"
                    aria-label="Close menu overlay"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="fixed inset-0 z-30 bg-black/40 md:hidden"
                />
            )}
            <AdminSidebar
                isCollapsed={isCollapsed}
                isMobileMenuOpen={isMobileMenuOpen}
                activeSlug={activeSlug}
                onNavigate={handleMobileNavigate}
            />
            <div className="flex flex-1 flex-col overflow-hidden">
                <AdminHeader
                    isCollapsed={isCollapsed}
                    isMobileMenuOpen={isMobileMenuOpen}
                    setIsMobileMenuOpen={setIsMobileMenuOpen}
                    setIsCollapsed={setIsCollapsed}
                />
                <main className="flex-1 overflow-y-auto overflow-x-hidden p-4 lg:p-6 space-y-6">
                    {children}
                </main>

                <AdminFooter />
            </div>
        </div>
    );
}