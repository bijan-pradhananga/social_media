import React from 'react'

export default function TimelineCardImg({post,setImgPopup}) {
  return (
    <div className="timeline_pic" onClick={() => { setImgPopup(true) }}>
    <img src={`http://127.0.0.1:8000/posts/${post.image}`} alt="" />
</div>
  )
}
