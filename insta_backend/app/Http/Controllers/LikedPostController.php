<?php

namespace App\Http\Controllers;

use App\Models\LikedPost;
use App\Models\Post;
use Illuminate\Http\Request;

class LikedPostController extends Controller
{
    public function countLikes($postId)
    {
        $likesCount = LikedPost::where('post_id', $postId)->count();
        return response()->json(['likes' => $likesCount], 200);
    }

    public function checkLike($userId, $postId)
    {
        if (LikedPost::where('user_id', $userId)->where('post_id', $postId)->exists()) {
            return response()->json(['message' => 'Post liked already', 'output' => true], 200);
        } else {
            return response()->json(['message' => 'Post not liked', 'output' => false], 200);
        }
    }

    public function toggleLikeDislike(Request $request)
    {
        $userId = $request->input('user_id');
        $postId = $request->input('post_id');
        if (LikedPost::where('user_id', $userId)->where('post_id', $postId)->exists()) {
            // Delete the like record
            LikedPost::where('user_id', $userId)->where('post_id', $postId)->delete();
            return response()->json(['message' => 'Post unliked successfully.', 'output' => false], 200);
        } else {
            // Create a new like record
            LikedPost::create(['user_id' => $userId, 'post_id' => $postId]);
            return response()->json(['message' => 'Post liked successfully.', 'output' => true], 200);
        }
    }
}
