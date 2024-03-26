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
            'address'   => 'required|max:100',
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
                'address'   => $request->address,
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

    public function update(Request $request, $id)
    {
        $user = User::find($id);
        if (!$user) {
            return response()->json([
                'status'  => 404,
                'message' => 'User not found',
            ], 404);
        }
        // Check if the provided password matches the current password
        $currentPassword = $user->password;
        $providedPassword = $request->password;
        if ($currentPassword==$providedPassword) {
            // Passwords match, keep the current password
            $hashedPassword = $currentPassword;
        } else {
            // Passwords don't match, hash the new password
            $hashedPassword = Hash::make($providedPassword);
        }
        // Handle image upload if provided
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imgName = $image->getClientOriginalName();
            $image->move('images/', $imgName);
        } else {
            $imgName = $user->image; // Keep the existing image if not provided
        }
    
        // Update user data
        $user->update([
            'name'      => $request->name,
            'username'  => $request->username,
            'address'   => $request->address,
            'email'     => $request->email,
            'password'  => $hashedPassword,
            'image'     => $imgName,
        ]);

        return response()->json([
            'status'  => 200,
            'message' => 'User updated successfully',
        ], 200);
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

    public function getUsersByAddress($address, $id) {
        $users = User::where('address', $address)
                     ->where('id', '!=', $id) // Exclude the user with the specified ID
                     ->get();
    
        if ($users->isNotEmpty()) {
            return response()->json(['users' => $users], 200);
        } else {
            return response()->json(['message' => 'No users found with the given address'], 404);
        }
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
