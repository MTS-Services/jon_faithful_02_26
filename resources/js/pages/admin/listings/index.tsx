import React from 'react'
import { Head, Link, router } from '@inertiajs/react'
import AdminLayout from '@/layouts/admin-layout'
import { DataTable } from '@/components/ui/data-table'
import { useDataTable } from '@/hooks/use-data-table';
import { PaginationData, ColumnConfig, ActionConfig } from '@/types/data-table.types'
import { Badge } from '@/components/ui/badge'
import { Listing } from '@/types/model'
import { Eye, Pencil, Plus, Trash2 } from 'lucide-react'
import { ActionButton } from '@/components/ui/action-button'
import { Button } from '@/components/ui/button'

interface Props {
  listings: Listing[]
  pagination: PaginationData
  offset: number
  filters: Record<string, string | number>
  search: string
  sortBy: string
  sortOrder: 'asc' | 'desc'
  users: { id: number; name: string }[]
}

export default function index({
  listings,
  pagination,
  offset,
  filters,
  search,
  sortBy,
  sortOrder,
  users,
}: Props) {

  const {
    isLoading,
    handleSearch,
    handleFilterChange,
    handleSort,
    handlePerPageChange,
    handlePageChange,
  } = useDataTable();

  const columns: ColumnConfig<Listing>[] = [
    {
      key: 'title',
      label: 'Title',
      sortable: true,
      render: (item) => (
        <div className="font-medium text-gray-900 dark:text-gray-100">
          {item.title}
        </div>
      ),
    },
    {
      key: 'purchase_price',
      label: 'Price',
      sortable: true,
      render: (item) => (
        <div className="text-gray-600">
          ${item.purchase_price}
        </div>
      ),
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
      key: 'listing_status',
      label: 'Listing Status',
      sortable: true,
      render: (item) => (
        <Badge variant="outline">
          {item.listing_status}
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

  const actions: ActionConfig<Listing>[] = [
    {
      label: 'View',
      icon: <Eye className="h-4 w-4" />,
      onClick: (item) => {
        router.visit(route('admin.listing.details', item?.id));
      },
    },
    {
      label: 'Edit',
      icon: <Pencil className="h-4 w-4" />,
      onClick: (item) => {
        router.visit(route('admin.listing.edit', item?.id));
      },
    },
    {
      label: 'Delete',
      icon: <Trash2 className="h-4 w-4" />,
      onClick: (item) => {
        if (confirm(`Are you sure you want to delete ${item.title}?`)) {
          router.visit(route('admin.listing.delete', item?.id));
        }
      },
    },
  ]

  return (
    <AdminLayout activeSlug="listings">
      <Head title="Listing Homes" />

      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">
          Listing Homes
        </h2>
        <ActionButton href={route('admin.listing.create')} IconNode={Plus} >Create</ActionButton>
      </div>

      <div className="mx-auto">
        <DataTable
          data={listings}
          columns={columns}
          pagination={pagination}
          offset={offset}
          showNumbering={true}
          actions={actions}
          // filters={[
          //   {
          //     key: 'user_id',
          //     label: 'User',
          //     options: users.map(u => ({
          //       label: u.name,
          //       value: u.id,
          //     })),
          //   },
          //   {
          //     key: 'listing_status',
          //     label: 'Listing Status',
          //     options: [
          //       { label: 'Sale', value: 'sale' },
          //       { label: 'Rent', value: 'rent' },
          //     ],
          //   },
          //   {
          //     key: 'property_type',
          //     label: 'Property Type',
          //     options: [
          //       { label: 'House', value: 'house' },
          //       { label: 'Apartment', value: 'apartment' },
          //       { label: 'Villa', value: 'villa' },
          //     ],
          //   },
          // ]}

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
          emptyMessage="No listings found"
          searchPlaceholder="Search listings by title..."
        />
      </div>
    </AdminLayout>
  )
}
