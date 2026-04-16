import { Head, router } from '@inertiajs/react';
import { Trash2 } from 'lucide-react';
import React from 'react';

import { DataTable } from '@/components/ui/data-table';
import { useDataTable } from '@/hooks/use-data-table';
import AdminLayout from '@/layouts/admin-layout';
import { ActionConfig, ColumnConfig, PaginationData } from '@/types/data-table.types';

interface MortgageLead {
  id: number;
  first_name: string;
  email: string;
  phone_number: string;
  timeline: string;
  purchase_price_range: string;
  down_payment_range: string;
  location: string;
  created_at: string;
}

interface Props {
  leads: MortgageLead[];
  pagination: PaginationData;
  offset: number;
  filters: Record<string, string | number>;
  search: string;
  sortBy: string;
  sortOrder: 'asc' | 'desc';
}

export default function Index({ leads, pagination, offset, filters, search, sortBy, sortOrder }: Props) {
  const { isLoading, handleSearch, handleFilterChange, handleSort, handlePerPageChange, handlePageChange } = useDataTable({
    only: ['leads', 'pagination', 'offset', 'filters', 'search', 'sortBy', 'sortOrder'],
  });

  const columns: ColumnConfig<MortgageLead>[] = [
    {
      key: 'first_name',
      label: 'Name',
      sortable: true,
      render: (lead) => <div className="font-medium text-gray-900">{lead.first_name}</div>,
    },
    {
      key: 'email',
      label: 'Email',
      sortable: true,
      render: (lead) => <div className="text-gray-600">{lead.email}</div>,
    },
    {
      key: 'location',
      label: 'Location',
      sortable: true,
      render: (lead) => <div className="text-gray-600">{lead.location}</div>,
    },
    {
      key: 'phone_number',
      label: 'Phone',
      sortable: true,
      render: (lead) => <div className="text-gray-600">{lead.phone_number}</div>,
    },
    {
      key: 'timeline',
      label: 'Timeline',
      sortable: true,
      render: (lead) => <div className="text-gray-600">{lead.timeline}</div>,
    },
    {
      key: 'purchase_price_range',
      label: 'Purchase Range',
      render: (lead) => <div className="text-gray-600">{lead.purchase_price_range}</div>,
    },
    {
      key: 'down_payment_range',
      label: 'Down Payment',
      render: (lead) => <div className="text-gray-600">{lead.down_payment_range}</div>,
    },
    {
      key: 'created_at',
      label: 'Submitted',
      sortable: true,
      render: (lead) => <div className="text-gray-600">{new Date(lead.created_at).toLocaleString()}</div>,
    },
  ];

  const actions: ActionConfig<MortgageLead>[] = [
    {
      label: 'Delete',
      icon: <Trash2 className="h-4 w-4" />,
      onClick: (lead) => {
        if (confirm(`Delete mortgage lead from ${lead.first_name}?`)) {
          router.visit(route('admin.mortgage-leads.delete', lead.id));
        }
      },
      variant: 'destructive',
    },
  ];

  return (
    <AdminLayout activeSlug="mortgage-leads">
      <Head title="Mortgage Leads" />

      <div className="mx-auto">
        <DataTable
          data={leads}
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
          emptyMessage="No mortgage leads found"
          searchPlaceholder="Search by name, email, phone, location..."
        />
      </div>
    </AdminLayout>
  );
}
