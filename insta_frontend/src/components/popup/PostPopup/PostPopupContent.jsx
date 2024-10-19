import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PostPopupActionBtn from './PostPopupActionBtn'
import PostPopupComments from './PostPopupComments'
import PostPopupContentHeader from './PostPopupContentHeader'
import AuthUser from '../../authentication/AuthUser'
import axios from 'axios'
import { API } from '../../../api/config'

export default function PostPopupContent({ post, setImgPopup }) {
    const { user } = AuthUser();
    const [isLoading, setIsLoading] = useState(true);
    const [comments,setComments] = useState([]);

    const getComments = async (post_id) =>{
        try {
            setIsLoading(true)
            const response = await axios.get(`${API.defaults.baseURL}/api/comments/${post.id}`);
            setComments(response.data.comments);
            setIsLoading(false)
        } catch (error) {
            console.error(error)
        }
    }

    const postComment = async (user_id,post_id,content) =>{
        try {
            const response = await axios.post(`${API.defaults.baseURL}/api/comments`,{user_id,post_id,content});
            if (response.status==200) {
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
                    <img src={`${API.defaults.baseURL}/images/${post.user_img}`} alt={post.user_img} />
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
