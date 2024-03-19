<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\FollowerController;
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

Route::prefix('users')->group(function () {
    Route::post('/', [UserController::class, 'store']);
    Route::get('/{id}', [UserController::class, 'getUserById']);
    Route::get('/search/{searchValue}', [UserController::class, 'searchUser']);
    Route::get('/{id}/posts', [UserController::class, 'getUserPosts']);
});


Route::prefix('posts')->group(function () {
    Route::get('/', [PostController::class, 'index']);
    Route::get('/follows/{followerId}', [PostController::class, 'getPostsForFollower']);
    Route::post('/', [PostController::class,'store']);
});
Route::group([
    'middleware' => 'api',
], function ($router) {

    Route::post('login', [AuthController::class,'login']);
    Route::post('logout', [AuthController::class,'logout']);
    Route::post('refresh', [AuthController::class,'refresh']);
    Route::post('me', [AuthController::class,'me']);

});

Route::get('/followers', [FollowerController::class, 'checkFollow']);
Route::post('/followers', [FollowerController::class, 'toggleFollow']);
Route::get('/followers/follower-count/{id}', [FollowerController::class, 'getFollowerCount']);
Route::get('/followers/following-count/{id}', [FollowerController::class, 'getFollowingCount']);
