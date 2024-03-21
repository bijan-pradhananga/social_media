import React from 'react'

export default function PostPopupImg({post}) {
    return (
        <div className='popup-imgPart'>
            <img src={`http://127.0.0.1:8000/posts/${post.image}`} alt={post.image} />
        </div>
    )
}
