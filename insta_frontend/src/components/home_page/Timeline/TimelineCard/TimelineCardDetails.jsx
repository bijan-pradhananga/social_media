import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default function TimelineCardDetails({likeCount, post}) {


    return (
        <div className="timeline_details">
            <div className="timeline_likes">
            {likeCount !== 0 ? (
                <span>{likeCount} {likeCount === 1 ? 'like' : 'likes'}</span>
            ) : (
                <span style={{color:'gray'}} >Be the first to like this post</span>
            )} </div>
            {post.caption !== null && (
                <div>
                    <b>{post.name.split(' ')[0]}</b> {post.caption}
                </div>
            )}
        </div>
    )
}
