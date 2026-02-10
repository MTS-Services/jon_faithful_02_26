import React from 'react';
import { Head, router } from '@inertiajs/react';
import AdminLayout from '@/layouts/admin-layout';
import { DataTable } from '@/components/ui/data-table';
import { useDataTable } from '@/hooks/use-data-table';
import { PaginationData, ColumnConfig, ActionConfig } from '@/types/data-table.types';
import { Badge } from '@/components/ui/badge';
import { ExternalListingSubmission } from '@/types';


interface Props {
    externalLinks: ExternalListingSubmission[];
    pagination: PaginationData;
    offset: number;
    filters: Record<string, string | number>;
    search: string;
    sortBy: string;
    sortOrder: 'asc' | 'desc';
}

export default function ExternalLink({
    externalLinks,
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

    const columns: ColumnConfig<ExternalListingSubmission>[] = [
        // {
        //     key: 'user_id.user.name',
        //     label: 'User ID',
        //     sortable: true,
        //     render: (item) => <div className="text-gray-700">{item.user_id}</div>,
        // },
        {
            key: 'name',
            label: 'Name',
            sortable: true,
            render: (item) => <div className="font-medium text-gray-900 dark:text-gray-100">{item.name}</div>,
        },
        {
            key: 'email',
            label: 'Email',
            sortable: true,
            render: (item) => <div className="text-gray-600">{item.email}</div>,
        },
        {
            key: 'external_link',
            label: 'External Link',
            sortable: false,
            render: (item) => (
                <a href={item.external_link} target="_blank" rel="noreferrer" className="text-primary underline">
                    {item.external_link}
                </a>
            ),
        },
        {
            key: 'created_at',
            label: 'Created',
            sortable: true,
            render: (item) => <div className="text-gray-600">{new Date(item.created_at).toLocaleString()}</div>,
        },
        {
            key: 'updated_at',
            label: 'Updated',
            sortable: true,
            render: (item) => <div className="text-gray-600">{new Date(item.updated_at).toLocaleString()}</div>,
        },
    ];

    // No per-item actions for now (controller routes not implemented reliably).
    const actions: ActionConfig<ExternalListingSubmission>[] = [];

    return (
        <AdminLayout activeSlug="externalLinks">
            <Head title="externalLinks" />
            <h2 className="text-3xl font-bold text-slate-900 mb-6">External Links Listing</h2>

            <div className="mx-auto">
                <DataTable
                    data={externalLinks}
                    columns={columns}
                    pagination={pagination}
                    offset={offset}
                    showNumbering={true}
                    actions={actions}
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
                    emptyMessage="No externalLinks found"
                    searchPlaceholder="Search externalLinks by name, email..."
                />
            </div>
        </AdminLayout>
    );
}
