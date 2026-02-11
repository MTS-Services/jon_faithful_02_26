import React from 'react'
import { Head, router } from '@inertiajs/react'
import AdminLayout from '@/layouts/admin-layout'
import { DataTable } from '@/components/ui/data-table'
import { useDataTable } from '@/hooks/use-data-table'
import { PaginationData, ColumnConfig, ActionConfig } from '@/types/data-table.types'
import { Badge } from '@/components/ui/badge'
import { Rental } from '@/types'
import { SquarePen } from 'lucide-react'

interface Props {
  rentals: Rental[]
  pagination: PaginationData
  offset: number
  filters: Record<string, string | number>
  search: string
  sortBy: string
  sortOrder: 'asc' | 'desc'
}

export default function Index({
  rentals,
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
  } = useDataTable()

  const columns: ColumnConfig<Rental>[] = [
    {
      key: 'listing_title',
      label: 'Title',
      sortable: true,
      render: (item) => (
        <div className="font-medium text-gray-900 dark:text-gray-100">
          {item.listing_title}
        </div>
      ),
    },
    {
      key: 'purchase_price',
      label: 'Rent Price',
      sortable: true,
      render: (item) => (
        <div className="text-gray-600">
          ${item.purchase_price}
        </div>
      ),
    },
    {
      key: 'security_deposit',
      label: 'Security Deposit',
      sortable: true,
      render: (item) => (
        <div className="text-gray-600">
          ${item.security_deposit}
        </div>
      ),
    },
    {
      key: 'lease_length',
      label: 'Lease (Months)',
      sortable: true,
    },
    {
      key: 'bedrooms',
      label: 'Beds',
      sortable: true,
    },
    {
      key: 'bathrooms',
      label: 'Baths',
      sortable: true,
    },
    {
      key: 'square_feet',
      label: 'Sq Ft',
      sortable: true,
    },
    {
      key: 'pet_friendly',
      label: 'Pet Friendly',
      sortable: true,
      render: (item) => (
        <Badge variant={item.pet_friendly ? 'default' : 'destructive'}>
          {item.pet_friendly ? 'Yes' : 'No'}
        </Badge>
      ),
    },
    {
      key: 'status',
      label: 'Status',
      sortable: true,
      render: (item) => (
        <Badge
          variant={item.status === 'active' ? 'default' : 'destructive'}
        >
          {item.status}
        </Badge>
      ),
    },
    {
      key: 'created_at',
      label: 'Created',
      sortable: true,
      render: (item) => (
        <div className="text-gray-600">
          {new Date(item.created_at).toLocaleString()}
        </div>
      ),
    },
  ]

  const actions: ActionConfig<Rental>[] = [
    {
      label: 'View',
      icon: <SquarePen />,
      onClick: (item) => {
        router.visit(route('admin.rentals.details', item?.id));
      },
    },
  ]

  return (
    <AdminLayout activeSlug="rentals">
      <Head title="Listing Rentals" />

      <h2 className="text-3xl font-bold text-slate-900 mb-6">
        Listing Rentals
      </h2>

      <div className="mx-auto">
        <DataTable
          data={rentals}
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
          emptyMessage="No rentals found"
          searchPlaceholder="Search rentals by title..."
        />
      </div>
    </AdminLayout>
  )
}
