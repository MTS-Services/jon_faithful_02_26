import AdminLayout from '@/layouts/admin-layout'
import { Head } from '@inertiajs/react'
import React from 'react'

export default function Rentals() {
    return (
        <AdminLayout activeSlug="externalLinks">
            <Head title="externalLinks" />
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Listing Rentals</h2>

            {/* <div className="mx-auto">
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
      </div> */}
        </AdminLayout>
    )
}
