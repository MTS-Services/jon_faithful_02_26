import { Head, router, Link } from '@inertiajs/react';
import { Eye, Trash2 } from 'lucide-react';
import React from 'react';

import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import { useDataTable } from '@/hooks/use-data-table';
import AdminLayout from '@/layouts/admin-layout';
import { PaginationData, ColumnConfig, ActionConfig } from '@/types/data-table.types';

interface Contact {
  id: number;
  name: string;
  email: string;
  phone?: string | null;
  message?: string | null;
  created_at: string;
}

interface Props {
  contacts: Contact[];
  pagination: PaginationData;
  offset: number;
  filters: Record<string, string | number>;
  search: string;
  sortBy: string;
  sortOrder: 'asc' | 'desc';
}

export default function Index({ contacts, pagination, offset, filters, search, sortBy, sortOrder }: Props) {
  const { isLoading, handleSearch, handleFilterChange, handleSort, handlePerPageChange, handlePageChange } = useDataTable();

  const columns: ColumnConfig<Contact>[] = [
    {
      key: 'name',
      label: 'Name',
      sortable: true,
      render: (c) => <div className="font-medium text-gray-900 dark:text-gray-100">{c.name}</div>,
    },
    {
      key: 'email',
      label: 'Email',
      sortable: true,
      render: (c) => <div className="text-gray-600 dark:text-gray-400">{c.email}</div>,
    },
    {
      key: 'phone',
      label: 'Phone',
      sortable: true,
      render: (c) => <div className="text-gray-600 dark:text-gray-400">{c.phone ?? 'N/A'}</div>,
    },
    {
      key: 'message',
      label: 'Message',
      render: (c) => <div className="text-gray-600 dark:text-gray-400 truncate max-w-xl">{c.message ?? '-'}</div>,
    },
    {
      key: 'created_at',
      label: 'Received',
      sortable: true,
      render: (c) => <div className="text-gray-600 dark:text-gray-400">{new Date(c.created_at).toLocaleDateString()}</div>,
    },
  ];

  const actions: ActionConfig<Contact>[] = [
    {
      label: 'View',
      icon: <Eye className="h-4 w-4" />,
      onClick: (c) => router.visit(route('admin.contact.view', c?.id)),
    },
    {
      label: 'Delete',
      icon: <Trash2 className="h-4 w-4" />,
      onClick: (c) => {
        if (confirm(`Are you sure you want to delete contact from ${c.name}?`)) {
          router.visit(route('admin.contact.destroy', c?.id));
        }
      },
      variant: 'destructive',
    },
  ];

  return (
    <AdminLayout activeSlug="contact-us">
      <Head title="Contact Submissions" />

      <div className="mx-auto">
        <DataTable
          data={contacts}
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

