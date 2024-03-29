import React from 'react'

export default function TimelineCardImg({post,setImgPopup,setImgPopupDetails,likeCount}) {
  return (
    <div className="timeline_pic" style={{cursor:'pointer'}} onClick={() => { setImgPopup(true); setImgPopupDetails(post);  }}>
      <img src={`http://127.0.0.1:8000/posts/${post.image}`} alt="" />
    </div>
  )
}
