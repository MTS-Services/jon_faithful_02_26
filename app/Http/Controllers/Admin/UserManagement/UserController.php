<?php

namespace App\Http\Controllers\Admin\UserManagement;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class UserController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('admin/user-management/users/index');
    }
    public function create(): Response
    {
        return Inertia::render('user/create');
    }
    public function store(Request $request)
    {
        // Validate and store the user
    }
    public function edit($id): Response
    {
        return Inertia::render('user/edit', ['id' => $id]);
    }
    public function update(Request $request, $id)
    {
        // Validate and update the user
    }
    public function destroy($id)
    {
        $user = User::find($id);
        if (!$user) {
            abort(404);
        }
        $user->delete();

        return redirect()->route('admin.um.users.index');
    }
}
