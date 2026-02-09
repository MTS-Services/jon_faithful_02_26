import { router, usePage, Link } from '@inertiajs/react'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { SharedData } from '@/types'
import { set } from 'date-fns'

export default function Sidebar() {
    const { url } = usePage()
    const [isOpen, setIsOpen] = useState(false)
    const { auth } = usePage<SharedData>().props;
    const [userType, setUserType] = useState(auth.user.user_type);


    const logout = () => {
        router.post(route('user.logout'))
    }

    const NavItem = ({
        href,
        label,
        onClick,
    }: {
        href?: string
        label: string
        onClick?: () => void
    }) => (
        <Link
            href={href || '#'}
            onClick={onClick}
            className={cn(
                'flex items-center rounded-lg px-4 py-3 text-white font-semibold transition',
                url === href ? 'bg-secondary' : 'bg-primary hover:bg-secondary'
            )}
        >
            {label}
        </Link>
    )

    return (
        <div className="relative z-50">
            {/* Mobile toggle */}
            <div className="md:hidden flex items-center gap-4">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden rounded-lg bg-primary p-2 text-white shadow-lg"
                >
                    {isOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
                <h4 className="text-lg font-semibold text-primary">Dashboard</h4>
            </div>

            {/* Overlay */}
            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 bg-black/50 md:hidden"
                />
            )}

            <aside
                className={cn(
                    'fixed left-0 top-0 h-full w-72 transition-transform duration-300 md:relative md:translate-x-0 bg-white z-50 md:bg-transparent',
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                )}
            >
                {/* Mobile Close Button */}
                <div className="flex items-center justify-between p-4 md:hidden">
                    <span className="text-lg font-semibold text-primary">Menu</span>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="rounded-md p-2 text-primary hover:bg-gray-100"
                    >
                        <X size={22} />
                    </button>
                </div>

                <nav className="space-y-2 p-4 pt-0">
                    {/* Homes */}
                    <NavItem href='/user/listings-homes' label="Listings (Homes)" />
                    <NavItem href='/user/add-newlisting' label="Add New Listing (Homes)" />
                    <NavItem href='/user/edit-listing' label="Edit Listing (Homes)" />
                    {userType == 'both' || userType == 'property_owner' ? (
                        <>
                            <NavItem href='/user/rented-property' label="Listings (Rental)" />
                            <NavItem href='/user/add-newhome' label="Add New Listing " />
                            <NavItem href='/user/edit-home' label="Edit Listing" />
                        </>
                    ) : (
                        <></>
                    )}

                    {/* Rental */}


                    {/* Account */}
                    <NavItem
                        href='/user/account-settings'
                        label="Account Settings"
                    />

                    <NavItem href='/user/licence-verification-status' label="Licence Verification Status" />

                    {/* Logout */}
                    <button
                        onClick={() => {
                            logout()
                            setIsOpen(false)
                        }}
                        className="w-full text-left rounded-lg bg-primary px-4 py-3 font-semibold text-white hover:bg-secondary transition"
                    >
                        Log Out
                    </button>
                </nav>
            </aside>
        </div>
    )
}
