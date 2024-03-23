import React from 'react'
import { Link } from 'react-router-dom'
export default function PostPopupContentHeader({post,setImgPopup}) {
    return (
        <div className='popup-content-body-caption'>
            <img src={`http://127.0.0.1:8000/images/${post.user_img}`} alt={post.user_img} />
            <Link to={`/profile/${post.user_id}`} onClick={() => { setImgPopup(false) }}>
                <span style={{ marginRight: '0.5rem', color: 'white' }}>{post.name}</span>
            </Link>
            <span style={{ color: 'lightgray' }}>{post.caption}</span>
        </div>
    )
}
