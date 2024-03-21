import React from 'react'
import { Link } from 'react-router-dom'

export default function PostPopupContent({ post, setImgPopup }) {
    return (
        <div className="popup-txtPart">
            <Link to={`/profile/${post.user_id}`} onClick={() => { setImgPopup(false) }}>
                <div className='popup-content-header'>
                    <img src={`http://127.0.0.1:8000/images/${post.user_img}`} alt={post.user_img} />
                    <span>{post.username}</span>
                </div>
            </Link>


            <div className='popup-content-body'>
                <div className='popup-content-body-caption'>
                    <img src={`http://127.0.0.1:8000/images/${post.user_img}`} alt={post.user_img} />
                    <Link to={`/profile/${post.user_id}`} onClick={() => { setImgPopup(false) }}>
                        <span style={{ marginRight: '0.5rem' }}>{post.name}</span>
                    </Link>
                    <span>{post.caption}</span>
                </div>
                <div className='popup-content-body-comments'>

                </div>
            </div>
            <div className='popup-content-footer'>
                <div className='popup-content-footer1'>

                </div>
                <div className='popup-content-footer2'>

                </div>
            </div>
        </div>
    )
}
