<?php

use App\Models\TrackingEvent;
use App\Models\User;

it('stores tracking events from the analytics endpoint', function () {
    $response = $this->postJson('/api/analytics/event', [
        'event_name' => 'cta_click',
        'params' => [
            'cta_text' => 'Get Started',
            'cta_location' => '/contact',
        ],
    ]);

    $response->assertSuccessful();

    $this->assertDatabaseHas('tracking_events', [
        'event_name' => 'cta_click',
    ]);
});

it('returns grouped summary for authenticated users', function () {
    $user = User::factory()->create();

    TrackingEvent::query()->create([
        'event_name' => 'form_submit',
        'params' => ['form_id' => 'contact'],
        'user_id' => $user->id,
    ]);

    TrackingEvent::query()->create([
        'event_name' => 'form_submit',
        'params' => ['form_id' => 'contact'],
        'user_id' => $user->id,
    ]);

    $response = $this
        ->actingAs($user)
        ->getJson('/api/analytics/summary');

    $response
        ->assertSuccessful()
        ->assertJsonFragment([
            'event_name' => 'form_submit',
            'count' => 2,
        ]);
});
