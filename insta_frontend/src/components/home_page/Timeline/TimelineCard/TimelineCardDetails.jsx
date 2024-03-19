import React from 'react'

export default function TimelineCardDetails({post}) {
    return (
        <div className="timeline_details">
            <div className="timeline_likes">500 likes</div>
            {post.caption !== null && (
                <div>
                    <b>{post.name.split(' ')[0]}</b> {post.caption}
                </div>
            )}
            <div className="timeline_comments">View Comments</div>
        </div>
    )
}
