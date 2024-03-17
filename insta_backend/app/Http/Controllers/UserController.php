<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name'  => 'required|max:100',
            'username'   => 'required|max:100',
            'email' => 'required|email|max:100',
            'password' => 'required|string',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:5120',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'message' => $validator->messages()
            ], 422);
        } else {
            $image = $request->file('image');
            $imgName = $image->getClientOriginalName();
            $user = User::create([
                'name'  => $request->name,
                'username'   => $request->username,
                'email' => $request->email,
                'password'        => Hash::make($request->password),
                'image'         => $imgName
            ]);
            $image->move('images/', $imgName);
        }
        if ($user) {
            return response()->json([
                'status' => 200,
                'message' => 'User added successfully'
            ], 200);
        } else {
            return response()->json([
                'status' => 500,
                'message' => 'Something went wrong'
            ], 500);
        }
    }

    public function getUserById($id)
    {
        // Retrieve the user by ID
        $user = User::find($id);
        // Check if user exists
        if (!$user) {
            return response()->json(['status' => 404, 'message' => 'User not found'], 404);
        }
        // Return the user's information as JSON response
        return response()->json(['status' => 200, 'user' => $user], 200);
    }

    public function getUserPosts($id)
    {
        // Retrieve the user by ID
        $user = User::find($id);
        // Check if user exists
        if (!$user) {
            return response()->json(['status' => 404, 'message' => 'User not found'], 404);
        }
        // Retrieve all posts of the user
        $posts = $user->posts;
        // Return the posts as JSON response
        return response()->json(['status' => 200, 'posts' => $posts], 200);
    }


    public function searchUser($searchValue)
    {
        $users = User::where(function ($query) use ($searchValue) {
            $query->where('username', 'like', '%' . $searchValue . '%')
                  ->orWhere('name', 'like', '%' . $searchValue . '%');
        })->get();
    
        if ($users->isNotEmpty()) {
            return response()->json(['status' => 200, 'users' => $users], 200);
        } else {
            return response()->json(['status' => 404, 'message' => 'No users found'], 404);
        }
    }
    
}
