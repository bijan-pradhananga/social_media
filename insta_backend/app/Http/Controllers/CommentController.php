<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Retrieve all comments
        $comments = Comment::all();
        return response()->json(['comments' => $comments], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validate the request data
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'post_id' => 'required|exists:posts,id',
            'content' => 'required|string',
        ]);
        // Create a new comment
        $comment = Comment::create($request->all());
        return response()->json(['message' => 'Comment created successfully', 'comment' => $comment], 200);
    }

    //to get comments of a specific post
    public function getCommentsByPostId($postId)
    {
        $comments = Comment::select('comments.*', 'users.name', 'users.image')
            ->join('users', 'comments.user_id', '=', 'users.id')
            ->where('comments.post_id', $postId) ->orderBy('comments.created_at', 'desc')
            ->get();
        return response()->json(['comments' => $comments], 200);
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
