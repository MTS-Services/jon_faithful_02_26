<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTrackingEventRequest;
use App\Models\TrackingEvent;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class AnalyticsController extends Controller
{
    public function store(StoreTrackingEventRequest $request): JsonResponse
    {
        $validated = $request->validated();

        TrackingEvent::query()->create([
            'event_name' => $validated['event_name'],
            'params' => $validated['params'],
            'page_url' => $request->headers->get('referer'),
            'session_id' => $request->hasSession() ? $request->session()->getId() : null,
            'user_id' => auth()->id(),
            'ip_address' => $request->ip(),
            'user_agent' => $request->userAgent(),
        ]);

        return response()->json(['ok' => true]);
    }

    public function summary(Request $request): JsonResponse
    {
        $events = TrackingEvent::query()
            ->selectRaw('event_name, COUNT(*) as count, DATE(created_at) as date')
            ->whereBetween('created_at', [
                now()->subDays(30),
                now(),
            ])
            ->groupBy('event_name', 'date')
            ->orderBy('date', 'desc')
            ->get();

        return response()->json($events);
    }
}
