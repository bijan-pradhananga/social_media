import React from 'react'
import { API } from '../../../api/config'

export default function PostPopupImg({post}) {
    return (
        <div className='popup-imgPart'>
            <img src={`${API.defaults.baseURL}/posts/${post.image}`} alt={post.image} />
        </div>
    )
}
