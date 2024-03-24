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
    

    public function getNotificationsByUserId($id)
    {
        $notifications = Notification::join('users', 'users.id', '=', 'notifications.notifier_id')
                    ->select('notifications.*', 'users.name', 'users.image')
                    ->where('notifications.user_id', $id)
                    ->orderBy('notifications.created_at', 'desc')
                    ->get();
        return response()->json(['notifications' => $notifications], 200);
    }


    public function toggleNotification(Request $request)
    {
        // Validate the request data
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'notifier_id' => 'required|exists:users,id',
            'type' => 'required',
            'post_id' => 'required|exists:posts,id',
        ]);
        // Check if the notification already exists
        $existingNotification = Notification::where('user_id', $request->user_id)
            ->where('notifier_id', $request->notifier_id)
            ->where('type', $request->type)
            ->where('post_id', $request->post_id)
            ->first();
        if ($existingNotification) {
            // Delete the existing notification
            $existingNotification->delete();
            return response()->json(['message' => 'Notification deleted successfully'], 200);
        } else {
            // Create a new notification
            $notification = Notification::create($request->all());
            return response()->json(['message' => 'Notification created successfully'], 200);
        }
    }

}
