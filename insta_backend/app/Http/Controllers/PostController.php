<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $posts = Post::all();
        if ($posts->isEmpty()) {
            return response()->json(['message' => 'No posts found'], 404);
        } else {
            return response()->json(['posts' => $posts], 200);
        }
    }

    // function to get post of users you follow 
    public function getPostsForFollower($followerId)
    {
        $posts = Post::select('posts.*', 'users.name', 'users.username', 'users.image as user_img')
            ->leftJoin('users', 'posts.user_id', '=', 'users.id')
            ->leftJoin('followers', function ($join) use ($followerId) {
                $join->on('users.id', '=', 'followers.followed_id')
                    ->where('followers.follower_id', $followerId);
            })
            ->where(function ($query) use ($followerId) {
                $query->where('followers.follower_id', $followerId)
                    ->orWhere('users.id', $followerId);
            })
            ->orderBy('posts.created_at', 'desc')
            ->get();

        return response()->json(['posts' => $posts], 200);
    }

    // function to get posts and its user details
    public function getPostsAndUsers()
    {
        $posts = Post::select('posts.*', 'users.name', 'users.username', 'users.image AS user_img')
            ->join('users', 'posts.user_id', '=', 'users.id')->orderBy('posts.created_at', 'desc')
            ->get();

        return response()->json(['posts' => $posts], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'user_id'  => 'exists:users,id',
            'caption'   => 'nullable|max:255',
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
            $post = Post::create([
                'user_id'  => $request->user_id,
                'caption'   => $request->caption,
                'image'         => $imgName
            ]);
            $image->move('posts/', $imgName);
        }
        if ($post) {
            return response()->json([
                'status' => 200,
                'message' => 'Uploaded'
            ], 200);
        } else {
            return response()->json([
                'status' => 500,
                'message' => 'Something went wrong'
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
