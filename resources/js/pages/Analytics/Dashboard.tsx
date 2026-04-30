import { useEffect, useMemo, useState } from 'react';
import AppLayout from '@/layouts/app-layout';

interface AnalyticsSummaryRow {
    event_name: string;
    count: number;
    date: string;
}

const LOOKER_STUDIO_EMBED_URL = import.meta.env.VITE_LOOKER_STUDIO_EMBED_URL;

export default function AnalyticsDashboard() {
    const [rows, setRows] = useState<AnalyticsSummaryRow[]>([]);

    useEffect(() => {
        let isMounted = true;

        fetch('/api/analytics/summary', {
            credentials: 'same-origin',
        })
            .then((response) => response.json())
            .then((data: AnalyticsSummaryRow[]) => {
                if (isMounted) {
                    setRows(data);
                }
            })
            .catch(() => {
                // Dashboard still renders even if summary endpoint is not available.
            });

        return () => {
            isMounted = false;
        };
    }, []);

    const totals = useMemo(() => {
        return rows.reduce<Record<string, number>>((carry, item) => {
            carry[item.event_name] = (carry[item.event_name] ?? 0) + Number(item.count);
            return carry;
        }, {});
    }, [rows]);

    return (
        <AppLayout>
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 p-6">
                <div className="space-y-2">
                    <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
                        Analytics Dashboard
                    </h1>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                        Blended reporting uses GA4 acquisition dimensions and landing pages
                        from Looker Studio. Event totals below are sourced from internal event
                        logs for QA and reconciliation.
                    </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {Object.entries(totals).map(([eventName, total]) => (
                        <div
                            key={eventName}
                            className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900"
                        >
                            <p className="text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                                {eventName}
                            </p>
                            <p className="mt-2 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
                                {total}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
                    {LOOKER_STUDIO_EMBED_URL ? (
                        <iframe
                            title="Looker Studio Analytics Dashboard"
                            src={LOOKER_STUDIO_EMBED_URL}
                            className="h-[900px] w-full"
                        />
                    ) : (
                        <div className="p-6 text-sm text-zinc-600 dark:text-zinc-400">
                            Set <code>VITE_LOOKER_STUDIO_EMBED_URL</code> to render the Looker
                            Studio report embed.
                        </div>
                    )}
                </div>
            </div>
        </AppLayout>
    );
}
