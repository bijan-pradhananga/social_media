<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\FollowerController;
use App\Http\Controllers\LikedPostController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//for user details
Route::prefix('users')->group(function () {
    Route::post('/', [UserController::class, 'store']);
    Route::post('/{id}', [UserController::class, 'update']);
    Route::get('/{id}', [UserController::class, 'getUserById']);
    Route::get('address/{address}/{id}', [UserController::class, 'getUsersByAddress']);
    Route::get('/search/{searchValue}', [UserController::class, 'searchUser']);
    Route::get('/{id}/posts', [UserController::class, 'getUserPosts']);
});

//for post details
Route::prefix('posts')->group(function () {
    Route::get('/', [PostController::class, 'index']);
    Route::get('/follows/{followerId}', [PostController::class, 'getPostsForFollower']);
    Route::post('/', [PostController::class,'store']);
    Route::get('/users', [PostController::class,'getPostsAndUsers']);
    Route::get('/users/{id}', [PostController::class,'getPostsAndUsersById']);
});

//for authentication
Route::group([
    'middleware' => 'api',
], function ($router) {

    Route::post('login', [AuthController::class,'login']);
    Route::post('logout', [AuthController::class,'logout']);
    Route::post('refresh', [AuthController::class,'refresh']);
    Route::post('me', [AuthController::class,'me']);

});

//for follow details
Route::get('/followers', [FollowerController::class, 'checkFollow']);
Route::post('/followers', [FollowerController::class, 'toggleFollow']);
Route::get('/followers/followCount/{id}', [FollowerController::class, 'getFollowDetails']);

//for liked posts
Route::post('/likedposts', [LikedPostController::class, 'toggleLikeDislike']);
Route::get('/likedposts/count/{postId}', [LikedPostController::class, 'countLikes']);
Route::get('/likedposts/{userId}/{postId}', [LikedPostController::class, 'checkLike']);

//for comments
Route::post('/comments', [CommentController::class, 'store']);
Route::get('/comments/{postId}', [CommentController::class, 'getCommentsByPostId']);

//for notification
Route::post('/notifications', [NotificationController::class, 'toggleNotification']);
Route::get('/notifications/{id}', [NotificationController::class, 'getNotificationsByUserId']);

