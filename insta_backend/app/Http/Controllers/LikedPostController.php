<?php

namespace App\Http\Controllers;

use App\Models\LikedPost;
use App\Models\Post;
use Illuminate\Http\Request;

class LikedPostController extends Controller
{

 public function like($userId, $postId)
    {
        // Create a new like record
        LikedPost::create(['user_id' => $userId, 'post_id' => $postId]);
        return response()->json(['message' => 'Post liked successfully.'], 200);
    }

    public function unlike($userId, $postId)
    {
        // Delete the like record
        LikedPost::where('user_id', $userId)->where('post_id', $postId)->delete();
        return response()->json(['message' => 'Post unliked successfully.'], 200);
    }

    public function toggleLikeDislike(Request $request)
    {
        $userId = $request->input('user_id');
        $postId = $request->input('post_id');
        if (LikedPost::where('user_id', $userId)->where('post_id', $postId)->exists()) {
            $this->unlike($userId, $postId);
        } else {
            $this->like($userId, $postId);
        }
    }
}
