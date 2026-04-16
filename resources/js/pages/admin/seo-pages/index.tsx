import { useState } from 'react';
import { Head, router, useForm } from '@inertiajs/react';
import { Pencil } from 'lucide-react';
import { toast } from 'sonner';

import AdminLayout from '@/layouts/admin-layout';
import { Button } from '@/components/ui/button';
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
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface SeoPage extends Record<string, unknown> {
    id: number;
    route_name: string;
    page_name: string;
    path: string | null;
    meta_title: string | null;
    meta_description: string | null;
    meta_keywords: string | null;
}

interface PageProps {
    pages: SeoPage[];
    pagination: PaginationData;
    offset: number;
    filters: Record<string, string | number>;
    search: string;
    sortBy: string;
    sortOrder: 'asc' | 'desc';
}

export default function SeoPagesIndex({
    pages,
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
    } = useDataTable({
        only: ['pages', 'pagination', 'offset', 'filters', 'search', 'sortBy', 'sortOrder'],
    });

    const [editingItem, setEditingItem] = useState<SeoPage | null>(null);

    const editForm = useForm({
        meta_title: '',
        meta_description: '',
        meta_keywords: '',
    });

    const columns: ColumnConfig<SeoPage>[] = [
        {
            key: 'page_name',
            label: 'Page',
            sortable: true,
            render: (item) => <span className="font-medium text-gray-900">{item.page_name}</span>,
        },
        {
            key: 'route_name',
            label: 'Route Name',
            sortable: true,
            render: (item) => <span>{item.route_name}</span>,
        },
        {
            key: 'path',
            label: 'Path',
            sortable: false,
            render: (item) => <span>{item.path || '—'}</span>,
        },
        {
            key: 'meta_title',
            label: 'Meta Title',
            sortable: false,
            render: (item) => <span>{item.meta_title || '—'}</span>,
        },
    ];

    const actions: ActionConfig<SeoPage>[] = [
        {
            label: 'Edit',
            icon: <Pencil className="h-4 w-4" />,
            onClick: (item) => {
                setEditingItem(item);
                editForm.setData({
                    meta_title: item.meta_title ?? '',
                    meta_description: item.meta_description ?? '',
                    meta_keywords: item.meta_keywords ?? '',
                });
            },
        },
    ];

    const handleUpdate = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!editingItem) {
            return;
        }

        editForm.put(route('admin.seo-pages.update', editingItem.id), {
            preserveScroll: true,
            onSuccess: () => {
                setEditingItem(null);
                editForm.reset();
            },
        });
    };

    const handleEditDialogChange = (open: boolean) => {
        if (!open) {
            setEditingItem(null);
            editForm.reset();
            editForm.clearErrors();
        }
    };

    return (
        <AdminLayout activeSlug="seo-pages">
            <Head title="SEO Pages" />

            <div className="mb-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">SEO Pages</h1>
                        <p className="text-sm text-muted-foreground">
                            Manage meta title, description, and keywords for public pages.
                        </p>
                    </div>
                    <Button
                        onClick={() => {
                            router.post(route('admin.seo-pages.generate-sitemap'), {}, {
                                preserveScroll: true,
                                onSuccess: () => {
                                    toast.success('Sitemap generated successfully.');
                                },
                                onError: () => {
                                    toast.error('Failed to generate sitemap. Please try again.');
                                },
                            });
                        }}
                    >
                        Generate Sitemap
                    </Button>
                </div>
            </div>

            <DataTable
                data={pages}
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
                emptyMessage="No SEO pages found"
                searchPlaceholder="Search by page name, route, path..."
            />

            <Dialog open={!!editingItem} onOpenChange={handleEditDialogChange}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Edit SEO Meta</DialogTitle>
                    </DialogHeader>

                    <form className="space-y-4" onSubmit={handleUpdate}>
                        <div className="space-y-1.5">
                            <Label htmlFor="meta_title">Meta Title</Label>
                            <Input
                                id="meta_title"
                                value={editForm.data.meta_title}
                                onChange={(event) => editForm.setData('meta_title', event.target.value)}
                                maxLength={255}
                            />
                            <InputError message={editForm.errors.meta_title} />
                        </div>

                        <div className="space-y-1.5">
                            <Label htmlFor="meta_description">Meta Description</Label>
                            <Textarea
                                id="meta_description"
                                value={editForm.data.meta_description}
                                onChange={(event) => editForm.setData('meta_description', event.target.value)}
                                rows={4}
                            />
                            <InputError message={editForm.errors.meta_description} />
                        </div>

                        <div className="space-y-1.5">
                            <Label htmlFor="meta_keywords">Meta Keywords</Label>
                            <Textarea
                                id="meta_keywords"
                                value={editForm.data.meta_keywords}
                                onChange={(event) => editForm.setData('meta_keywords', event.target.value)}
                                rows={3}
                                placeholder="keyword1, keyword2, keyword3"
                            />
                            <InputError message={editForm.errors.meta_keywords} />
                        </div>

                        <div className="flex justify-end gap-2">
                            <Button type="button" variant="outline" onClick={() => handleEditDialogChange(false)}>
                                Cancel
                            </Button>
                            <Button type="submit" disabled={editForm.processing}>
                                {editForm.processing ? 'Saving...' : 'Save'}
                            </Button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </AdminLayout>
    );
}

