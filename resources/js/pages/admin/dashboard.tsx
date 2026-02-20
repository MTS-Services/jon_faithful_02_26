import { CardContent } from "@/components/ui/card";
import { PlaceholderPattern } from "@/components/ui/placeholder-pattern";
import AdminLayout from "@/layouts/admin-layout";
import { Head, Link, usePage } from "@inertiajs/react";
import { ArrowRight, Users, Home, Key } from "lucide-react";

type Props = {
  stats: {
    users: number;
    listings: number;
    rentals: number;
    users_last_7_days: number;
  };
  recentListings: Array<{ id: number; title: string; created_at: string }>;
  userTypeCounts?: Record<string, { label: string; count: number }>;
  recentRentals?: Array<{ id: number; title: string; created_at: string; user?: { id: number; name: string } }>;
};

const StatCard = ({ title, value, subtext, icon: Icon, colorClass }: any) => (
  <div className={`flex flex-col justify-center gap-2 rounded-xl border bg-white p-6 shadow-sm transition-all hover:shadow-md dark:bg-zinc-900`}>
    <div className="flex items-center justify-between">
      <div className="text-sm font-medium text-muted-foreground">{title}</div>
      <Icon className={`size-5 ${colorClass}`} />
    </div>
    <div className="text-3xl font-bold">{value}</div>
    <div className="text-xs text-muted-foreground">{subtext}</div>
  </div>
);

export default function Index() {
  const { props } = usePage();
  const { stats = {
    users: 0,
    listings: 0,
    rentals: 0,
    users_last_7_days: 0
  }, recentListings = [], userTypeCounts = {}, recentRentals = [] } = props as unknown as Props;


  return (
    <AdminLayout activeSlug={'dashboard'}>
      <Head title="Admin Dashboard" />
      <div className="flex flex-col gap-6 p-6">
        <div className="grid gap-4 md:grid-cols-3">
          <StatCard
            title="Total Users"
            value={stats.users}
            subtext={`${stats.users_last_7_days} new recently`}
            icon={Users}
            colorClass="text-secondary"
          />
          <StatCard
            title="Total Listings"
            value={stats.listings}
            subtext={`Active: ${recentListings.length}`}
            icon={Home}
            colorClass="text-green-500"
          />
          <StatCard
            title="Rentals"
            value={stats.rentals}
            subtext="Currently active"
            icon={Key}
            colorClass="text-orange-500"
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-xl border bg-white p-6 shadow-sm dark:bg-zinc-900">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Recent Listings</h3>
                <Link href={route('admin.listing.index')}>
                  <button className="text-sm text-secondary hover:underline flex items-center">
                    View All <ArrowRight className="ml-1 size-4" />
                  </button></Link>
              </div>
              {recentListings.length === 0 ? (
                <div className="flex items-center justify-center p-8">
                  <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/10 dark:stroke-neutral-100/10" />
                  <div className="relative">No recent listings</div>
                </div>
              ) : (
                <ul className="space-y-3">
                  {recentListings.map((listing) => (
                    <li key={listing.id} className="flex items-center justify-between rounded-md border border-sidebar-border p-3">
                      <div>
                        <div className="font-medium">{listing.title}</div>
                        <div className="text-xs text-muted-foreground">{new Date(listing.created_at).toLocaleString()}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className="rounded-xl border bg-white p-6 shadow-sm dark:bg-zinc-900">
            <h3 className="text-lg font-semibold mb-4">User Analytics</h3>
            <div className="space-y-3">
              {Object.entries(userTypeCounts).map(([key, item]) => (
                <div key={key} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-zinc-800">
                  <span className="text-sm font-medium">{item.label}</span>
                  <span className="px-2 py-1 bg-white rounded border text-xs font-bold">{item.count}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-xl border bg-white p-6 shadow-sm dark:bg-zinc-900">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Recent Rentals</h3>
                <Link href={route('admin.rentals.index')}>
                  <button className="text-sm text-secondary hover:underline flex items-center">
                    View All <ArrowRight className="ml-1 size-4" />
                  </button></Link>
              </div>
              {recentRentals.length === 0 ? (
                <div className="flex items-center justify-center p-8">
                  <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/10 dark:stroke-neutral-100/10" />
                  <div className="relative">No recent rentals</div>
                </div>
              ) : (
                <ul className="space-y-3">
                  {recentRentals.map((r) => (
                    <li key={r.id} className="flex items-center justify-between rounded-md border border-sidebar-border p-3">
                      <div>
                        <div className="font-medium">{r.title}</div>
                        <div className="text-xs text-muted-foreground">{r.user?.name ?? '—'} · {new Date(r.created_at).toLocaleString()}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

        </div>


      </div>
    </AdminLayout >
  );
}