<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use App\Services\DataTableService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class AdminController extends Controller
{
    //

    public function __construct(protected DataTableService $dataTableService){}

    public function index(): Response
    {
        return Inertia::render('admin/index');
    }

    public function allAdmin(): Response
    {
        $queryBody = Admin::query();


        $result = $this->dataTableService->process($queryBody, request(), [
            'searchable' => ['name', 'email'],
            'sortable' => ['id', 'name', 'email', 'created_at'],
        ]);


        return Inertia::render('admin/all', [
            'admins' => $result['data'],
            'pagination' => $result['pagination'],
            'offset' => $result['offset'],
            'filters' => $result['filters'],
            'search' => $result['search'],
            'sortBy' => $result['sort_by'],
            'sortOrder' => $result['sort_order']
        ]);
    }

    public function viewAdmin($id){

        $admin = Admin::find($id);
        if(!$admin) {
            abort(404);
        }
        return Inertia::render('admin/view', [
            'admin' => $admin
        ]);
    }
    public function editAdmin($id){

        $admin = Admin::find($id);
        if(!$admin) {
            abort(404);
        }
        return Inertia::render('admin/edit', [
            'admin' => $admin
        ]);
    }
    public function updateAdmin(Request $request){

     $data = $request->validate([
        'name' => ['required', 'string', 'max:255'],
     ]);

      $admin = Admin::find($request->id);
      $admin->update($data);

      return back()->with('success', 'Admin updated successfully.');
    }
    public function deleteAdmin($id){
        $admin = Admin::find($id);
        if(!$admin) {
            abort(404);
        }
        $admin->forceDelete();
        return back()->with('success', 'Admin deleted successfully.');
    }
}
