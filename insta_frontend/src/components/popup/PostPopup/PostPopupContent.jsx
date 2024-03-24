import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PostPopupActionBtn from './PostPopupActionBtn'
import PostPopupComments from './PostPopupComments'
import PostPopupContentHeader from './PostPopupContentHeader'
import AuthUser from '../../authentication/AuthUser'
import axios from 'axios'

export default function PostPopupContent({ post, setImgPopup }) {
    const { user } = AuthUser();
    const [isLoading, setIsLoading] = useState(true);
    const [comments,setComments] = useState([]);

    const getComments = async (post_id) =>{
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/comments/${post.id}`);
            setComments(response.data.comments);
            setIsLoading(false)
        } catch (error) {
            console.error(error)
        }
    }

    const postComment = async (user_id,post_id,content) =>{
        try {
            const response = await axios.post(`http://127.0.0.1:8000/api/comments`,{user_id,post_id,content});
            if (response.status==200) {
                alert('Comment Posted')
                getComments(post_id);
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(()=>{
        getComments()
    },[])

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
                <PostPopupComments comments={comments} setImgPopup={setImgPopup} isLoading={isLoading} />
                <PostPopupActionBtn user={user} post={post} isLoading={isLoading} setIsLoading={setIsLoading} postComment={postComment}/>
            </div>

        </div>
    )
}
