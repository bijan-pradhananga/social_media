import React from 'react'
import { Link } from 'react-router-dom'
import { API } from '../../../../api/config'

export default function TimelineCardHeader({post}) {
    return (
        <div className="timeline_info universal_info">
            <div className="timeline_image universal_image">
                <img src={`${API.defaults.baseURL}/images/${post.user_img}`} alt="" />
            </div>
            <Link to={`/profile/${post.user_id}`}>
                <div className="timeline_text universal_text" style={{color:'white'}}>
                    <span>{post.name}</span> <br />
                    <span style={{color:'lightgray'}}>{post.username}</span>
                </div>
            </Link>
        </div>
    )
}
