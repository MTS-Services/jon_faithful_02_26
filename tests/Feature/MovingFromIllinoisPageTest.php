<?php

use Inertia\Testing\AssertableInertia as Assert;

test('moving from illinois page renders successfully', function () {
    $response = $this->get(route('frontend.moving-from-illinois'));

    $response->assertSuccessful();

    $response->assertInertia(fn (Assert $page) => $page
        ->component('frontend/moving-from-illinois')
    );
});
