import { useState } from 'react';
import { Head, router, useForm } from '@inertiajs/react';
import { Pencil, Trash2, Plus } from 'lucide-react';

import AdminLayout from '@/layouts/admin-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import InputError from '@/components/input-error';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { DataTable } from '@/components/ui/data-table';
import { useDataTable } from '@/hooks/use-data-table';
import { ActionConfig, ColumnConfig, PaginationData } from '@/types/data-table.types';
import { Select } from '@/components/ui/select';

interface City {
    id: number;
    name: string;
}

interface MortgageSetting extends Record<string, unknown> {
    id: number;
    city_id: number;
    base_price: number;
    down_payment: number;
    annual_tax: number;
    annual_insurance: number;
    is_active: boolean;
    created_at: string;
    city?: City;
}

interface PageProps {
    settings: MortgageSetting[];
    pagination: PaginationData;
    offset: number;
    filters: Record<string, string | number>;
    search: string;
    sortBy: string;
    sortOrder: 'asc' | 'desc';
    cities: City[];
}

export default function MortgageSettingsIndex({
    settings,
    pagination,
    offset,
    filters,
    search,
    sortBy,
    sortOrder,
    cities,
}: PageProps) {
    const {
        isLoading,
        handleSearch,
        handleFilterChange,
        handleSort,
        handlePerPageChange,
        handlePageChange,
    } = useDataTable({
        only: ['settings', 'pagination', 'offset', 'filters', 'search', 'sortBy', 'sortOrder'],
    });

    const [createOpen, setCreateOpen] = useState(false);
    const [editingItem, setEditingItem] = useState<MortgageSetting | null>(null);

    const createForm = useForm({
        city_id: '',
        base_price: '',
        down_payment: '',
        annual_tax: '',
        annual_insurance: '',
        is_active: true,
    });

    const editForm = useForm({
        city_id: '',
        base_price: '',
        down_payment: '',
        annual_tax: '',
        annual_insurance: '',
        is_active: true,
    });

    const columns: ColumnConfig<MortgageSetting>[] = [
        {
            key: 'city',
            label: 'City',
            sortable: false,
            render: (item) => (
                <div>
                    <p className="font-medium text-gray-900">{item.city?.name ?? '—'}</p>
                </div>
            ),
        },
        {
            key: 'base_price',
            label: 'Base Price ($)',
            sortable: true,
            render: (item) => <span>${Number(item.base_price).toLocaleString()}</span>,
        },
        {
            key: 'down_payment',
            label: 'Down Payment ($)',
            sortable: true,
            render: (item) => <span>${Number(item.down_payment).toLocaleString()}</span>,
        },
        {
            key: 'annual_tax',
            label: 'Annual Tax ($)',
            sortable: true,
            render: (item) => <span>${Number(item.annual_tax).toLocaleString()}</span>,
        },
        {
            key: 'annual_insurance',
            label: 'Annual Insurance ($)',
            sortable: true,
            render: (item) => <span>${Number(item.annual_insurance).toLocaleString()}</span>,
        },
        {
            key: 'is_active',
            label: 'Active',
            sortable: true,
            render: (item) => (
                <span className={item.is_active ? 'bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold' : 'bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold'}>
                    {item.is_active ? 'Yes' : 'No'}
                </span>
            ),
        }
    ];

    const actions: ActionConfig<MortgageSetting>[] = [
        {
            label: 'Edit',
            icon: <Pencil className="h-4 w-4" />,
            onClick: (item) => {
                setEditingItem(item);
                editForm.setData({
                    city_id: String(item.city_id),
                    base_price: String(item.base_price),
                    down_payment: String(item.down_payment ?? ''),
                    annual_tax: String(item.annual_tax),
                    annual_insurance: String(item.annual_insurance),
                    is_active: item.is_active,
                });
            },
        },
        {
            label: 'Delete',
            icon: <Trash2 className="h-4 w-4" />,
            variant: 'destructive',
            onClick: (item) => {
                if (!confirm(`Delete mortgage setting for "${item.city?.name}"?`)) {
                    return;
                }
                router.delete(route('admin.mortgage-settings.destroy', item.id), {
                    preserveScroll: true,
                });
            },
        },
    ];

    const handleCreate = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        createForm.post(route('admin.mortgage-settings.store'), {
            preserveScroll: true,
            onSuccess: () => {
                createForm.reset();
                setCreateOpen(false);
            },
        });
    };

    const handleUpdate = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!editingItem) return;
        editForm.put(route('admin.mortgage-settings.update', editingItem.id), {
            preserveScroll: true,
            onSuccess: () => {
                editForm.reset();
                setEditingItem(null);
            },
        });
    };

    const handleCreateDialogChange = (open: boolean) => {
        setCreateOpen(open);
        if (!open) {
            createForm.reset();
            createForm.clearErrors();
        }
    };

    const handleEditDialogChange = (open: boolean) => {
        if (!open) {
            setEditingItem(null);
            editForm.reset();
            editForm.clearErrors();
        }
    };

    return (
        <AdminLayout activeSlug="mortgage-settings">
            <Head title="Mortgage Settings" />

            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Mortgage Settings</h1>
                    <p className="text-sm text-muted-foreground">
                        Manage city-specific mortgage presets used by the public mortgage calculator.
                    </p>
                </div>
                <Button onClick={() => setCreateOpen(true)}>
                    <Plus className="mr-2 h-4 w-4" /> Add City Setting
                </Button>
            </div>

            <DataTable
                data={settings}
                columns={columns}
                pagination={pagination}
                offset={offset}
                actions={actions}
                showNumbering
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
                emptyMessage="No mortgage settings found"
                searchPlaceholder="Search by city name..."
            />

            <Dialog open={createOpen} onOpenChange={handleCreateDialogChange}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Add Mortgage Setting</DialogTitle>
                    </DialogHeader>
                    <form className="space-y-3" onSubmit={handleCreate}>
                        <div className="space-y-1.5">
                            <Label htmlFor="city_id">City</Label>
                            <select
                                id="city_id"
                                className="w-full border rounded-md px-3 py-2 border-gray-300 focus:ring-2 focus:ring-secondary focus:outline-none"
                                value={createForm.data.city_id}
                                onChange={(event) => createForm.setData('city_id', event.target.value)}
                            >
                                <option value="">Select city...</option>
                                {cities.map((city) => (
                                    <option key={city.id} value={city.id}>
                                        {city.name}
                                    </option>
                                ))}
                            </select>
                            <InputError message={createForm.errors.city_id} />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div className="space-y-1.5">
                                <Label htmlFor="base_price">Base Price ($)</Label>
                                <Input
                                    id="base_price"
                                    type="number"
                                    value={createForm.data.base_price}
                                    onChange={(event) => createForm.setData('base_price', event.target.value)}
                                    min={0}
                                    className='border-gray-300'
                                />
                                <InputError message={createForm.errors.base_price} />
                            </div>
                            <div className="space-y-1.5">
                                <Label htmlFor="down_payment">Down Payment ($)</Label>
                                <Input
                                    id="down_payment"
                                    type="number"
                                    value={createForm.data.down_payment}
                                    onChange={(event) => createForm.setData('down_payment', event.target.value)}
                                    min={0}
                                    className="border-gray-300"
                                />
                                <InputError message={createForm.errors.down_payment} />
                            </div>
                            <div className="space-y-1.5">
                                <Label htmlFor="annual_tax">Annual Tax ($)</Label>
                                <Input
                                    id="annual_tax"
                                    type="number"
                                    value={createForm.data.annual_tax}
                                    onChange={(event) => createForm.setData('annual_tax', event.target.value)}
                                    min={0}
                                    className='border-gray-300'
                                />
                                <InputError message={createForm.errors.annual_tax} />
                            </div>
                            <div className="space-y-1.5">
                                <Label htmlFor="annual_insurance">Annual Insurance ($)</Label>
                                <Input
                                    id="annual_insurance"
                                    type="number"
                                    value={createForm.data.annual_insurance}
                                    onChange={(event) =>
                                        createForm.setData('annual_insurance', event.target.value)
                                    }
                                    min={0}
                                    className='border-gray-300'
                                />
                                <InputError message={createForm.errors.annual_insurance} />
                            </div>
                        </div>
                        <div className="space-y-1.5">
                            <Label htmlFor="is_active">Active</Label>
                            <input
                                id="is_active"
                                type="checkbox"
                                checked={Boolean(createForm.data.is_active)}
                                onChange={(event) => createForm.setData('is_active', event.target.checked)}
                                className="h-4 w-4 border-gray-300"

                            />
                            <InputError message={createForm.errors.is_active} />
                        </div>
                        <div className="flex justify-end gap-2">
                            <Button type="button" variant="outline" onClick={() => handleCreateDialogChange(false)}>
                                Cancel
                            </Button>
                            <Button type="submit" disabled={createForm.processing}>
                                {createForm.processing ? 'Saving...' : 'Create Setting'}
                            </Button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>

            <Dialog open={!!editingItem} onOpenChange={handleEditDialogChange}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Edit Mortgage Setting</DialogTitle>
                    </DialogHeader>
                    <form className="space-y-3" onSubmit={handleUpdate}>
                        <div className="space-y-1.5">
                            <Label htmlFor="edit_city_id">City</Label>
                            <select
                                id="edit_city_id"
                                className="w-full border rounded-md px-3 py-2"
                                value={editForm.data.city_id}
                                onChange={(event) => editForm.setData('city_id', event.target.value)}
                            >
                                <option value="">Select city...</option>
                                {cities.map((city) => (
                                    <option key={city.id} value={city.id}>
                                        {city.name}
                                    </option>
                                ))}
                            </select>
                            <InputError message={editForm.errors.city_id} />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div className="space-y-1.5">
                                <Label htmlFor="edit_base_price">Base Price ($)</Label>
                                <Input
                                    id="edit_base_price"
                                    type="number"
                                    value={editForm.data.base_price}
                                    onChange={(event) => editForm.setData('base_price', event.target.value)}
                                    min={0}
                                />
                                <InputError message={editForm.errors.base_price} />
                            </div>
                            <div className="space-y-1.5">
                                <Label htmlFor="edit_down_payment">Down Payment ($)</Label>
                                <Input
                                    id="edit_down_payment"
                                    type="number"
                                    value={editForm.data.down_payment}
                                    onChange={(event) => editForm.setData('down_payment', event.target.value)}
                                    min={0}
                                />
                                <InputError message={editForm.errors.down_payment} />
                            </div>
                            <div className="space-y-1.5">
                                <Label htmlFor="edit_annual_tax">Annual Tax ($)</Label>
                                <Input
                                    id="edit_annual_tax"
                                    type="number"
                                    value={editForm.data.annual_tax}
                                    onChange={(event) => editForm.setData('annual_tax', event.target.value)}
                                    min={0}
                                />
                                <InputError message={editForm.errors.annual_tax} />
                            </div>
                            <div className="space-y-1.5">
                                <Label htmlFor="edit_annual_insurance">Annual Insurance ($)</Label>
                                <Input
                                    id="edit_annual_insurance"
                                    type="number"
                                    value={editForm.data.annual_insurance}
                                    onChange={(event) =>
                                        editForm.setData('annual_insurance', event.target.value)
                                    }
                                    min={0}
                                />
                                <InputError message={editForm.errors.annual_insurance} />
                            </div>
                        </div>
                        <div className="space-y-1.5">
                            <Label htmlFor="edit_is_active">Active</Label>
                            <input
                                id="edit_is_active"
                                type="checkbox"
                                checked={Boolean(editForm.data.is_active)}
                                onChange={(event) => editForm.setData('is_active', event.target.checked)}
                                className="h-4 w-4"
                            />
                            <InputError message={editForm.errors.is_active} />
                        </div>
                        <div className="flex justify-end gap-2">
                            <Button type="button" variant="outline" onClick={() => handleEditDialogChange(false)}>
                                Cancel
                            </Button>
                            <Button type="submit" disabled={editForm.processing}>
                                {editForm.processing ? 'Saving...' : 'Save Changes'}
                            </Button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </AdminLayout>
    );
}

