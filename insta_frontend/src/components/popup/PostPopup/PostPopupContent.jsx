import React from 'react'
import { Link } from 'react-router-dom'
import PostPopupActionBtn from './PostPopupActionBtn'
import PostPopupComments from './PostPopupComments'
import PostPopupContentHeader from './PostPopupContentHeader'

export default function PostPopupContent({ post, setImgPopup }) {

    return (
        <div className="popup-txtPart">
            <Link to={`/profile/${post.user_id}`} onClick={() => { setImgPopup(false) }}>
                <div className='popup-content-header' style={{ color: 'white' }}>
                    <img src={`http://127.0.0.1:8000/images/${post.user_img}`} alt={post.user_img} />
                    <span>{post.username}</span>
                </div>
            </Link>

            <div className='popup-content-body'>
                <PostPopupContentHeader post={post} setImgPopup={setImgPopup}/>
                <PostPopupComments/>
                <PostPopupActionBtn/>
            </div>

        </div>
    )
}
