<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Notification extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'notifier_id',
        'type',
        'post_id',
    ];

    public function notifier()
    {
        return $this->belongsTo(User::class, 'notifier_id');
    }
}
