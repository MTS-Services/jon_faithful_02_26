<?php

namespace App\Services;

use App\Models\Listing;
use App\Models\Rental;
use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\Tags\Url;
use Carbon\Carbon;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Log;

class SitemapService
{

    protected string $sitemapPath;

    public function __construct()
    {
        $this->sitemapPath = public_path('sitemap.xml');
    }
    public function generate(): Sitemap
    {
        $sitemap = Sitemap::create();

        // Static public pages from config/seo.php
        foreach (config('seo.public_pages', []) as $page) {
            if (empty($page['route_name']) || str_contains($page['route_name'], 'single-product')) {
                continue;
            }

            try {
                $url = route($page['route_name']);
            } catch (\Throwable $exception) {
                continue;
            }

            $priority = $page['route_name'] === 'frontend.home' ? 1.0 : 0.8;
            $frequency = $page['route_name'] === 'frontend.home'
                ? Url::CHANGE_FREQUENCY_DAILY
                : Url::CHANGE_FREQUENCY_WEEKLY;

            $sitemap->add(
                Url::create($url)
                    ->setLastModificationDate(Carbon::now())
                    ->setChangeFrequency($frequency)
                    ->setPriority($priority)
            );
        }

        // Dynamic listing details
        $listings = Listing::where('status', 1)->get(['id', 'updated_at']);
        foreach ($listings as $listing) {
            $sitemap->add(
                Url::create(route('frontend.single-product.listing', $listing->id))
                    ->setLastModificationDate($listing->updated_at)
                    ->setChangeFrequency(Url::CHANGE_FREQUENCY_DAILY)
                    ->setPriority(0.9)
            );
        }

        // Dynamic rental details
        $rentals = Rental::where('status', 1)->get(['id', 'updated_at']);
        foreach ($rentals as $rental) {
            $sitemap->add(
                Url::create(route('frontend.single-product.rental', $rental->id))
                    ->setLastModificationDate($rental->updated_at)
                    ->setChangeFrequency(Url::CHANGE_FREQUENCY_DAILY)
                    ->setPriority(0.9)
            );
        }

        $sitemap->writeToFile($this->sitemapPath);

        return $sitemap;
    }

    public function addNew($route, $updated_at): void
    {
        try {
            $sitemap = File::exists($this->sitemapPath)
                ? Sitemap::load($this->sitemapPath)
                : Sitemap::create();

            $sitemap->add(
                Url::create($route)
                    ->setLastModificationDate(Carbon::parse($updated_at))
                    ->setChangeFrequency(Url::CHANGE_FREQUENCY_WEEKLY)
                    ->setPriority(0.8)
            );

            $sitemap->writeToFile($this->sitemapPath);
        } catch (\Exception $e) {
            Log::info("Sitemap Add Error: " . $e->getMessage());
        }
    }
}
