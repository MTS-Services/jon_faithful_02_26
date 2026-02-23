import { useMemo, useState } from 'react';
import { Head, router, useForm } from '@inertiajs/react';
import AdminLayout from '@/layouts/admin-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import InputError from '@/components/input-error';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface FeatureCategoryOption {
    id: number;
    name: string;
}

interface FeatureItem {
    id: number;
    name: string;
    slug: string;
    feature_category_id: number;
    feature_category?: FeatureCategoryOption;
}

interface PageProps {
    features: FeatureItem[];
    categories: FeatureCategoryOption[];
}

const mapCategoryOptions = (categories: FeatureCategoryOption[]) =>
    categories.map((category) => ({ value: category.id.toString(), label: category.name }));

export default function FeatureIndex({ features, categories }: PageProps) {
    const [editingFeature, setEditingFeature] = useState<FeatureItem | null>(null);
    const categoryOptions = useMemo(() => mapCategoryOptions(categories), [categories]);

    const createForm = useForm({ name: '', feature_category_id: '' });
    const editForm = useForm({ name: '', feature_category_id: '' });

    const orderedFeatures = useMemo(
        () =>
            [...features].sort((a, b) => {
                if (a.feature_category?.name && b.feature_category?.name) {
                    const cmp = a.feature_category.name.localeCompare(b.feature_category.name);
                    if (cmp !== 0) return cmp;
                }
                    return a.name.localeCompare(b.name);
            }),
        [features],
    );

    const handleCreate = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        createForm.post(route('admin.unit-features.store'), {
            preserveScroll: true,
            onSuccess: () => createForm.reset(),
        });
    };

    const handleDelete = (feature: FeatureItem) => {
        if (!confirm(`Delete feature "${feature.name}"?`)) {
            return;
        }
        router.delete(route('admin.unit-features.destroy', feature.id), {
            preserveScroll: true,
        });
    };

    const openEdit = (feature: FeatureItem) => {
        setEditingFeature(feature);
        editForm.setData({
            name: feature.name,
            feature_category_id: feature.feature_category_id.toString(),
        });
    };

    const closeEdit = () => {
        setEditingFeature(null);
        editForm.reset();
        editForm.clearErrors();
    };

    const handleUpdate = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!editingFeature) return;
        editForm.put(route('admin.unit-features.update', editingFeature.id), {
            preserveScroll: true,
            onSuccess: closeEdit,
        });
    };

    const renderCategorySelect = (form: typeof createForm) => (
        <Select value={form.data.feature_category_id} onValueChange={(value) => form.setData('feature_category_id', value)}>
            <SelectTrigger>
                <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
                {categoryOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                        {option.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );

    return (
        <AdminLayout activeSlug="unit-features">
            <Head title="Unit Features" />
            <div className="flex flex-col gap-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Unit Features</h1>
                        <p className="text-sm text-muted-foreground">Manage the specific amenities available inside each category.</p>
                    </div>
                </div>

                <div className="grid gap-6 lg:grid-cols-[320px,1fr]">
                    <Card>
                        <CardHeader>
                            <CardTitle>Add Feature</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form className="space-y-4" onSubmit={handleCreate}>
                                <div className="space-y-1.5">
                                    <Label htmlFor="feature-name">Feature name</Label>
                                    <Input
                                        id="feature-name"
                                        value={createForm.data.name}
                                        onChange={(event) => createForm.setData('name', event.target.value)}
                                        placeholder="e.g. Washer/Dryer"
                                    />
                                    <InputError message={createForm.errors.name} />
                                </div>
                                <div className="space-y-1.5">
                                    <Label>Category</Label>
                                    {renderCategorySelect(createForm)}
                                    <InputError message={createForm.errors.feature_category_id} />
                                </div>
                                <Button type="submit" className="w-full" disabled={createForm.processing}>
                                    {createForm.processing ? 'Saving...' : 'Create Feature'}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Existing Features</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Name</TableHead>
                                        <TableHead>Category</TableHead>
                                        <TableHead>Slug</TableHead>
                                        <TableHead className="text-right">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {orderedFeatures.length === 0 && (
                                        <TableRow>
                                            <TableCell colSpan={5} className="text-center text-sm text-muted-foreground">
                                                No features found.
                                            </TableCell>
                                        </TableRow>
                                    )}
                                    {orderedFeatures.map((feature) => (
                                        <TableRow key={feature.id}>
                                            <TableCell className="font-medium">{feature.name}</TableCell>
                                            <TableCell>{feature.feature_category?.name ?? '—'}</TableCell>
                                            <TableCell className="text-sm text-muted-foreground">{feature.slug}</TableCell>
                                            <TableCell className="space-x-2 text-right">
                                                <Button variant="secondary" size="sm" onClick={() => openEdit(feature)}>
                                                    Edit
                                                </Button>
                                                <Button variant="destructive" size="sm" onClick={() => handleDelete(feature)}>
                                                    Delete
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                                <TableCaption>Features can be attached to both listings and rentals.</TableCaption>
                            </Table>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <Dialog open={!!editingFeature} onOpenChange={(open) => (open ? undefined : closeEdit())}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Edit Feature</DialogTitle>
                    </DialogHeader>
                    <form className="space-y-4" onSubmit={handleUpdate}>
                        <div className="space-y-1.5">
                            <Label htmlFor="edit-feature-name">Feature name</Label>
                            <Input
                                id="edit-feature-name"
                                value={editForm.data.name}
                                onChange={(event) => editForm.setData('name', event.target.value)}
                            />
                            <InputError message={editForm.errors.name} />
                        </div>
                        <div className="space-y-1.5">
                            <Label>Category</Label>
                            <Select
                                value={editForm.data.feature_category_id}
                                onValueChange={(value) => editForm.setData('feature_category_id', value)}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select category" />
                                </SelectTrigger>
                                <SelectContent>
                                    {categoryOptions.map((option) => (
                                        <SelectItem key={option.value} value={option.value}>
                                            {option.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <InputError message={editForm.errors.feature_category_id} />
                        </div>
                        <div className="flex justify-end gap-2">
                            <Button type="button" variant="outline" onClick={closeEdit}>
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
