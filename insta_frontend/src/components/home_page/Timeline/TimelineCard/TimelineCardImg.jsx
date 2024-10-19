import React from 'react'
import { API } from '../../../../api/config';

export default function TimelineCardImg({post,setImgPopup,setImgPopupDetails,likeCount}) {
  return (
    <div className="timeline_pic" style={{cursor:'pointer'}} onClick={() => { setImgPopup(true); setImgPopupDetails(post);  }}>
      <img src={`${API.defaults.baseURL}/posts/${post.image}`} alt="" />
    </div>
  )
}
