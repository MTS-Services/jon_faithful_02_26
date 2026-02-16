import { Head, router } from '@inertiajs/react';
import { Trash2 } from 'lucide-react';

import { DataTable } from '@/components/ui/data-table';
import { useDataTable } from '@/hooks/use-data-table';
import AdminLayout from '@/layouts/admin-layout';
import {
    ActionConfig,
    ColumnConfig,
    PaginationData,
} from '@/types/data-table.types';

interface Newasletter {
    id: number;
    email: string;

    created_at: string;
}

interface Props {
    newsletters: Newasletter[];
    pagination: PaginationData;
    offset: number;
    filters: Record<string, string | number>;
    search: string;
    sortBy: string;
    sortOrder: 'asc' | 'desc';
}

export default function Index({
    newsletters,
    pagination,
    offset,
    filters,
    search,
    sortBy,
    sortOrder,
}: Props) {
    const {
        isLoading,
        handleSearch,
        handleFilterChange,
        handleSort,
        handlePerPageChange,
        handlePageChange,
    } = useDataTable();

    const columns: ColumnConfig<Newasletter>[] = [
        {
            key: 'email',
            label: 'Email',
            sortable: true,
            render: (c) => (
                <div className="text-gray-600 dark:text-gray-400">
                    {c.email}
                </div>
            ),
        },

        {
            key: 'created_at',
            label: 'Received',
            sortable: true,
            render: (c) => (
                <div className="text-gray-600 dark:text-gray-400">
                    {new Date(c.created_at).toLocaleDateString()}
                </div>
            ),
        },
    ];

    const actions: ActionConfig<Newasletter>[] = [
        // {
        //   label: 'View',
        //   icon: <Eye className="h-4 w-4" />,
        //   onClick: (c) => router.visit(route('admin.contact.view', c?.id)),
        // },
        {
            label: 'Delete',
            icon: <Trash2 className="h-4 w-4" />,
            onClick: (c) => {
                if (
                    confirm(
                        `Are you sure you want to delete contact from ${c.email}?`,
                    )
                ) {
                    router.visit(route('admin.newsletter.delete', c?.id));
                }
            },
            variant: 'destructive',
        },
    ];

    return (
        <AdminLayout activeSlug="newsletter">
            <Head title="Newsletter Submissions" />

            <div className="mx-auto">
                <DataTable
                    data={newsletters}
                    columns={columns}
                    pagination={pagination}
                    offset={offset}
                    showNumbering={true}
                    actions={actions}
                    filters={[]}
                    onSearch={handleSearch}
                    onFilterChange={handleFilterChange}
                    onSort={handleSort}
                    onPerPageChange={handlePerPageChange}
                    onPageChange={handlePageChange}
                    searchValue={search}
                    filterValues={filters}
                    sortBy={sortBy}
                    sortOrder={sortOrder}
                    isLoading={isLoading}
                    emptyMessage="No contact submissions found"
                    searchPlaceholder="Search contacts by name, email..."
                />
            </div>
        </AdminLayout>
    );
}
