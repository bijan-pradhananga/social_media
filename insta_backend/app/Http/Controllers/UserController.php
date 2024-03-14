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
            $image->move('images/',$imgName);
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
}
