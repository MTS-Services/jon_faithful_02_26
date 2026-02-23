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

interface FeatureCategory extends Record<string, unknown> {
    id: number;
    name: string;
    slug: string;
    features_count: number;
    created_at: string;
}

interface PageProps {
    categories: FeatureCategory[];
    pagination: PaginationData;
    offset: number;
    filters: Record<string, string | number>;
    search: string;
    sortBy: string;
    sortOrder: 'asc' | 'desc';
}

export default function FeatureCategoryIndex({
    categories,
    pagination,
    offset,
    filters,
    search,
    sortBy,
    sortOrder,
}: PageProps) {
    const {
        isLoading,
        handleSearch,
        handleFilterChange,
        handleSort,
        handlePerPageChange,
        handlePageChange,
    } = useDataTable();

    const [createOpen, setCreateOpen] = useState(false);
    const [editingCategory, setEditingCategory] = useState<FeatureCategory | null>(null);

    const createForm = useForm({ name: '' });
    const editForm = useForm({ name: '' });

    const columns: ColumnConfig<FeatureCategory>[] = [
        {
            key: 'name',
            label: 'Name',
            sortable: true,
            render: (item) => (
                <div>
                    <p className="font-medium text-gray-900">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.slug}</p>
                </div>
            ),
        },
        {
            key: 'features_count',
            label: 'Feature Count',
            sortable: true,
            render: (item) => <span>{item.features_count}</span>,
        },
        {
            key: 'created_at',
            label: 'Created',
            sortable: true,
            render: (item) => (
                <span className="text-sm text-muted-foreground">
                    {new Date(item.created_at).toLocaleDateString()}
                </span>
            ),
        },
    ];

    const actions: ActionConfig<FeatureCategory>[] = [
        {
            label: 'Edit',
            icon: <Pencil className="h-4 w-4" />,
            onClick: (category) => {
                setEditingCategory(category);
                editForm.setData('name', category.name);
            },
        },
        {
            label: 'Delete',
            icon: <Trash2 className="h-4 w-4" />,
            variant: 'destructive',
            onClick: (category) => {
                if (!confirm(`Delete category "${category.name}"?`)) {
                    return;
                }
                router.delete(route('admin.unit-feature-categories.destroy', category.id), {
                    preserveScroll: true,
                });
            },
        },
    ];

    const handleCreate = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        createForm.post(route('admin.unit-feature-categories.store'), {
            preserveScroll: true,
            onSuccess: () => {
                createForm.reset();
                setCreateOpen(false);
            },
        });
    };

    const handleUpdate = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!editingCategory) return;
        editForm.put(route('admin.unit-feature-categories.update', editingCategory.id), {
            preserveScroll: true,
            onSuccess: () => {
                editForm.reset();
                setEditingCategory(null);
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
            setEditingCategory(null);
            editForm.reset();
            editForm.clearErrors();
        }
    };

    return (
        <AdminLayout activeSlug="unit-feature-categories">
            <Head title="Unit Feature Categories" />

            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Unit Feature Categories</h1>
                    <p className="text-sm text-muted-foreground">
                        Manage how individual unit features are grouped in the rental forms.
                    </p>
                </div>
                <Button onClick={() => setCreateOpen(true)}>
                    <Plus className="mr-2 h-4 w-4" /> Add Category
                </Button>
            </div>

            <DataTable
                data={categories}
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
                emptyMessage="No feature categories found"
                searchPlaceholder="Search categories by name or slug..."
            />

            <Dialog open={createOpen} onOpenChange={handleCreateDialogChange}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Add Category</DialogTitle>
                    </DialogHeader>
                    <form className="space-y-3" onSubmit={handleCreate}>
                        <div className="space-y-1.5">
                            <Label htmlFor="name">Category name</Label>
                            <Input
                                id="name"
                                value={createForm.data.name}
                                onChange={(event) => createForm.setData('name', event.target.value)}
                                placeholder="e.g. Appliances"
                            />
                            <InputError message={createForm.errors.name} />
                        </div>
                        <div className="flex justify-end gap-2">
                            <Button type="button" variant="outline" onClick={() => handleCreateDialogChange(false)}>
                                Cancel
                            </Button>
                            <Button type="submit" disabled={createForm.processing}>
                                {createForm.processing ? 'Saving...' : 'Create Category'}
                            </Button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>

            <Dialog open={!!editingCategory} onOpenChange={handleEditDialogChange}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Edit Category</DialogTitle>
                    </DialogHeader>
                    <form className="space-y-3" onSubmit={handleUpdate}>
                        <div className="space-y-1.5">
                            <Label htmlFor="edit-name">Category name</Label>
                            <Input
                                id="edit-name"
                                value={editForm.data.name}
                                onChange={(event) => editForm.setData('name', event.target.value)}
                                autoFocus
                            />
                            <InputError message={editForm.errors.name} />
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
