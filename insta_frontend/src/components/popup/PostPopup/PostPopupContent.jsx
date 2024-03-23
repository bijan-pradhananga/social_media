import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PostPopupActionBtn from './PostPopupActionBtn'
import PostPopupComments from './PostPopupComments'
import PostPopupContentHeader from './PostPopupContentHeader'
import AuthUser from '../../authentication/AuthUser'

export default function PostPopupContent({ post, setImgPopup }) {
    const { user } = AuthUser();
    const [isLoading, setIsLoading] = useState(true);
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
                <PostPopupActionBtn user={user}  post={post} isLoading={isLoading} setIsLoading={setIsLoading}/>
            </div>

        </div>
    )
}
