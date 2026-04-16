<?php

namespace Database\Seeders;

use App\Models\SeoPage;
use Illuminate\Database\Seeder;

class SeoPageSeeder extends Seeder
{
    public function run(): void
    {
        $pages = collect(config('seo.public_pages', []))
            ->map(function (array $page) {
                return [
                    'route_name' => $page['route_name'],
                    'page_name' => $page['page_name'],
                    'path' => $page['path'] ?? null,
                    'created_at' => now(),
                    'updated_at' => now(),
                ];
            })
            ->all();

        SeoPage::upsert(
            $pages,
            ['route_name'],
            ['page_name', 'path', 'updated_at']
        );
    }
}

