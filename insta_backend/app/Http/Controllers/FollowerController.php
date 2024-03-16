<?php

namespace App\Http\Controllers;

use App\Models\Follower;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class FollowerController extends Controller
{
    public function getFollowerCount($id)
    {
        $followerCount = Follower::where('followed_id', $id)->count();
        return response()->json(['follower_count' => $followerCount], 200);
    }

    public function getFollowingCount($id)
    {
        $followingCount = Follower::where('follower_id', $id)->count();
        return response()->json(['following_count' => $followingCount], 200);
    }


    public function checkFollow(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'follower_id' => 'required|exists:users,id',
            'followed_id' => 'required|exists:users,id',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $followerId = $request->follower_id;
        $followedId = $request->followed_id;
        // Check if the follow relationship exists
        $existingFollow = Follower::where('follower_id', $followerId)
            ->where('followed_id', $followedId)
            ->exists();
        // Convert the existence of the follow relationship into 1 or 0
        $follows = $existingFollow ? 1 : 0;
        return response()->json(['follows' => $follows]);
    }

    public function followUser(Request $request)
    {
        Follower::create([
            'follower_id' => $request->follower_id,
            'followed_id' => $request->followed_id,
        ]);
        return response()->json(['follows' => true], 200);
    }

    public function unfollowUser(Request $request)
    {
        $followerId = $request->follower_id;
        $followedId = $request->followed_id;
        // Retrieve the follow relationship to delete
        $existingFollow = Follower::where('follower_id', $followerId)
            ->where('followed_id', $followedId)
            ->first();
        $existingFollow->delete();
        return response()->json(['follows' => false], 200);
    }

    public function toggleFollow(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'follower_id' => 'required|exists:users,id',
            'followed_id' => 'required|exists:users,id',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $followerId = $request->follower_id;
        $followedId = $request->followed_id;
        // Check if the follow relationship exists
        $existingFollow = Follower::where('follower_id', $followerId)
            ->where('followed_id', $followedId)
            ->exists();

        if ($existingFollow) {
            return $this->unfollowUser($request);
        } else {
            return $this->followUser($request);
        }
    }
}
