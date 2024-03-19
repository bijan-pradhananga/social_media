import React from 'react'

export default function TimelineCardHeader({post}) {
    return (
        <div className="timeline_info universal_info">
            <div className="timeline_image universal_image">
                <img src={`http://127.0.0.1:8000/images/${post.user_img}`} alt="" />
            </div>
            <div className="timeline_text universal_text">
                <span>{post.name}</span> <br />
                <span>{post.username}</span>
            </div>
        </div>
    )
}
