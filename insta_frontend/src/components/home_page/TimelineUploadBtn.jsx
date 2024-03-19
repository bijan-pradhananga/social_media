import React from 'react'

export default function TimelineUploadBtn({user,setPopup}) {
  return (
    <div className="timeline_upload">
    <img src={`http://127.0.0.1:8000/images/${user.image}`} alt="" />
    <div onClick={()=>{setPopup(true)}} className="timeline_upload_input">
      Create a new post
    </div>
    </div>
  )
}
