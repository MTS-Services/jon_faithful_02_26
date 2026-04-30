import { Head, Link, usePage } from '@inertiajs/react';
import AdminLayout from '@/layouts/admin-layout';

type EventTotal = {
    event_name: string;
    count: number;
};

type DailyEvent = {
    event_date: string;
    count: number;
};

type TopLandingPage = {
    page_url: string | null;
    visits: number;
};

type Props = {
    eventTotals: EventTotal[];
    dailyEvents: DailyEvent[];
    topLandingPages: TopLandingPage[];
};

const LOOKER_STUDIO_EMBED_URL = import.meta.env.VITE_LOOKER_STUDIO_EMBED_URL;

export default function AdminAnalyticsDashboard() {
    const { props } = usePage<Props>();
    const { eventTotals = [], dailyEvents = [], topLandingPages = [] } = props;

    const totalEvents = eventTotals.reduce(
        (carry, eventItem) => carry + Number(eventItem.count),
        0,
    );

    return (
        <AdminLayout activeSlug="analytics">
            <Head title="Admin Analytics Dashboard" />

            <div className="space-y-6">
                <div className="flex flex-col gap-2">
                    <h1 className="text-2xl font-semibold text-zinc-900">
                        Analytics Dashboard
                    </h1>
                    <p className="text-sm text-zinc-600">
                        GA4 event QA, blended reporting visibility, and landing-page activity
                        for the last 30 days.
                    </p>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                    <div className="rounded-xl border bg-white p-5 shadow-sm">
                        <p className="text-xs uppercase tracking-wide text-zinc-500">
                            Total Events (30d)
                        </p>
                        <p className="mt-2 text-3xl font-bold text-zinc-900">{totalEvents}</p>
                    </div>
                    <div className="rounded-xl border bg-white p-5 shadow-sm">
                        <p className="text-xs uppercase tracking-wide text-zinc-500">
                            Event Types
                        </p>
                        <p className="mt-2 text-3xl font-bold text-zinc-900">
                            {eventTotals.length}
                        </p>
                    </div>
                    <div className="rounded-xl border bg-white p-5 shadow-sm">
                        <p className="text-xs uppercase tracking-wide text-zinc-500">
                            Tracked Landing Pages
                        </p>
                        <p className="mt-2 text-3xl font-bold text-zinc-900">
                            {topLandingPages.length}
                        </p>
                    </div>
                </div>

                <div className="grid gap-6 xl:grid-cols-2">
                    <div className="rounded-xl border bg-white p-5 shadow-sm">
                        <h2 className="text-base font-semibold text-zinc-900">Top Events</h2>
                        <div className="mt-4 space-y-2">
                            {eventTotals.length === 0 ? (
                                <p className="text-sm text-zinc-500">
                                    No event data captured yet.
                                </p>
                            ) : (
                                eventTotals.map((eventItem) => (
                                    <div
                                        key={eventItem.event_name}
                                        className="flex items-center justify-between rounded-lg border p-3"
                                    >
                                        <span className="text-sm text-zinc-700">
                                            {eventItem.event_name}
                                        </span>
                                        <span className="text-sm font-semibold text-zinc-900">
                                            {eventItem.count}
                                        </span>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>

                    <div className="rounded-xl border bg-white p-5 shadow-sm">
                        <h2 className="text-base font-semibold text-zinc-900">
                            Daily Event Volume
                        </h2>
                        <div className="mt-4 space-y-2">
                            {dailyEvents.length === 0 ? (
                                <p className="text-sm text-zinc-500">
                                    No daily event trend available yet.
                                </p>
                            ) : (
                                dailyEvents.map((item) => (
                                    <div
                                        key={item.event_date}
                                        className="flex items-center justify-between rounded-lg border p-3"
                                    >
                                        <span className="text-sm text-zinc-700">
                                            {item.event_date}
                                        </span>
                                        <span className="text-sm font-semibold text-zinc-900">
                                            {item.count}
                                        </span>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>

                <div className="rounded-xl border bg-white p-5 shadow-sm">
                    <div className="mb-3 flex items-center justify-between">
                        <h2 className="text-base font-semibold text-zinc-900">
                            Landing Pages by Activity
                        </h2>
                        <Link
                            href={route('admin.dashboard')}
                            className="text-sm text-secondary hover:underline"
                        >
                            Back to admin overview
                        </Link>
                    </div>

                    <div className="space-y-2">
                        {topLandingPages.length === 0 ? (
                            <p className="text-sm text-zinc-500">
                                No landing-page activity captured yet.
                            </p>
                        ) : (
                            topLandingPages.map((item, index) => (
                                <div
                                    key={`${item.page_url}-${index}`}
                                    className="flex items-center justify-between rounded-lg border p-3"
                                >
                                    <span className="max-w-[80%] truncate text-sm text-zinc-700">
                                        {item.page_url}
                                    </span>
                                    <span className="text-sm font-semibold text-zinc-900">
                                        {item.visits}
                                    </span>
                                </div>
                            ))
                        )}
                    </div>
                </div>

                <div className="rounded-xl border bg-white p-5 shadow-sm">
                    <h2 className="text-base font-semibold text-zinc-900">
                        Looker Studio (Blended Reporting)
                    </h2>
                    <p className="mt-1 text-sm text-zinc-600">
                        Use this embed for landing pages by traffic source, medium, and
                        campaign combined with GSC query performance.
                    </p>

                    {LOOKER_STUDIO_EMBED_URL ? (
                        <iframe
                            title="Looker Studio Blended Reporting Dashboard"
                            src={LOOKER_STUDIO_EMBED_URL}
                            className="mt-4 h-[850px] w-full rounded-lg border"
                        />
                    ) : (
                        <p className="mt-4 rounded-lg border p-4 text-sm text-zinc-500">
                            Set <code>VITE_LOOKER_STUDIO_EMBED_URL</code> in your environment
                            to display the blended report.
                        </p>
                    )}
                </div>
            </div>
        </AdminLayout>
    );
}
