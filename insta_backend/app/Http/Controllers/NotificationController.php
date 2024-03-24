<?php

namespace App\Http\Controllers;

use App\Models\Notification;
use Illuminate\Http\Request;

class NotificationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
         // Validate the request data
         $request->validate([
            'user_id' => 'required|exists:users,id',
            'notifier_id' => 'required|exists:users,id',
            'type' => 'required',
            'post_id' => 'required|exists:posts,id',
        ]);
        // Create a new notification
        $notification = Notification::create($request->all());
        if ($notification) {
            return response()->json(['message' => 'Notification created successfully'], 200);
        }else{
            return response()->json(['message' => 'Error Occured'], 500);
        }
    }
    

    public function getNotificationsByNotifierId($id)
    {
        $notifications = Notification::where('notifier_id', $id)->get();
        return response()->json(['notifications' => $notifications], 200);
    }



}
