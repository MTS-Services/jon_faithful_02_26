import AppLogo from '@/components/app-logo';
import { NavItem } from '@/components/ui/nav-item';
import { cn } from '@/lib/utils';
import { type NavItemType, type SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import {
    Building2,
    Calculator,
    ClipboardList,
    ExternalLink,
    Search,
    Home,
    Layers,
    LayoutGrid,
    ListChecks,
    Mail,
    MessageSquare,
    User,
    UserCheck,
    Users,
} from 'lucide-react';
import * as React from 'react';

// Navigation configuration
const adminNavItems: NavItemType[] = [
    {
        title: 'Dashboard',
        href: route('admin.dashboard'),
        icon: LayoutGrid,
        slug: 'dashboard',
    },
    {
        title: 'User Management',
        href: '#',
        icon: Users,
        badge: 2,
        slug: 'user-management',
        children: [
            {
                title: 'Users',
                href: route('admin.um.users.index'),
                icon: User,
                permission: 'manage users',
                slug: 'users',
            },
            {
                title: 'Pending Verification',
                href: route('admin.um.user.pending-verification'),
                icon: User,
                permission: 'manage users',
                slug: 'pending-verification',
            },
        ],
    },
    {
        title: 'Listings (Homes)',
        href: route('admin.listing.index'),
        icon: Home,
        permission: 'view analytics',
        slug: 'listings',
    },
    {
        title: 'Rental Management',
        href: '#',
        icon: Building2,
        permission: 'view analytics',
        slug: 'rental-management',
        children: [
            {
                title: 'Listings (Rentals)',
                href: route('admin.rentals.index'),
                icon: ClipboardList,
                permission: 'view analytics',
                slug: 'rentals',
            },
            {
                title: 'Unit Feature Categories',
                href: route('admin.unit-feature-categories.index'),
                icon: Layers,
                permission: 'view analytics',
                slug: 'unit-feature-categories',
            },
            {
                title: 'Unit Features',
                href: route('admin.unit-features.index'),
                icon: ListChecks,
                permission: 'view analytics',
                slug: 'unit-features',
            }

        ]
    },
    {
        title: 'External Link Submissions',
        href: route('admin.external-link'),
        icon: ExternalLink,
        permission: 'view analytics',
        slug: 'externa-links',
    },
    {
        title: 'Mortgage Settings',
        href: route('admin.mortgage-settings.index'),
        icon: Calculator,
        permission: 'view analytics',
        slug: 'mortgage-settings',
    },
    {
        title: 'SEO',
        href: route('admin.seo-pages.index'),
        icon: Search,
        permission: 'view analytics',
        slug: 'seo-pages',
    },
    {
        title: 'Mortgage Leads',
        href: route('admin.mortgage-leads.index'),
        icon: ClipboardList,
        permission: 'view analytics',
        slug: 'mortgage-leads',
    },
    {
        title: 'Contact Us',
        href: route('admin.contact.index'),
        icon: MessageSquare,
        permission: 'view analytics',
        slug: 'contact-us',
    },
    {
        title: 'Newsletter',
        href: route('admin.newsletter.index'),
        icon: Mail,
        permission: 'view analytics',
        slug: 'newsletter',
    },
];

interface AdminSidebarProps {
    isCollapsed: boolean;
    activeSlug?: string | null;
}

export const AdminSidebar = React.memo<AdminSidebarProps>(
    ({ isCollapsed, activeSlug }) => {
        const { props } = usePage();

        // Extract permissions safely
        const userPermissions = React.useMemo(() => {
            const auth = props.auth as SharedData['auth'];

            return (
                auth?.user?.permissions ||
                auth?.user?.all_permissions
            );
        }, [props.auth]);

        return (
            <aside
                className={cn(
                    'relative hidden h-screen border-r bg-background',
                    'transition-all duration-300 ease-in-out',
                    'flex-col md:flex',
                    isCollapsed ? 'w-16' : 'w-64',
                )}
            >
                {/* Logo Section */}
                <div
                    className={cn(
                        'flex h-16 items-center border-b',
                        isCollapsed ? 'justify-center px-2' : 'px-6',
                    )}
                >
                    <Link
                        href="/"
                        className="flex items-center gap-2 transition-opacity hover:opacity-80"
                    >
                        {isCollapsed ? (
                            <LayoutGrid className="h-6 w-6 text-primary" />
                        ) : (
                            <AppLogo className="text-base!" />
                        )}
                    </Link>
                </div>

                {/* Navigation */}
                <div className="custom-scrollbar flex-1 overflow-y-auto px-3 py-4">
                    <nav className="space-y-1">
                        {adminNavItems.map((item, index) => {
                            const isParentActive =
                                activeSlug === item.slug;

                            const isChildActive = item.children?.some(
                                (child) => child.slug === activeSlug
                            );

                            return (
                                <NavItem
                                    key={`${item.title}-${index}`}
                                    item={item}
                                    isCollapsed={isCollapsed}
                                    activeSlug={activeSlug}
                                    isActive={isParentActive || isChildActive}
                                    permissions={userPermissions}
                                />
                            );
                        })}
                    </nav>
                </div>

                {/* Footer */}
                {!isCollapsed && (
                    <div className="border-t p-4">
                        <div className="text-center text-xs text-muted-foreground">
                            v1.0.0
                        </div>
                    </div>
                )}
            </aside>
        );
    },
);

AdminSidebar.displayName = 'AdminSidebar';
