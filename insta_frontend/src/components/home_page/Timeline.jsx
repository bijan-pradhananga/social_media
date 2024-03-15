import React, { useState } from 'react'
import bijan from'./bijan.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComment, faBookmark } from '@fortawesome/free-regular-svg-icons'
import Popup from '../popup/Popup';
const array = [1, 2, 3];

export default function timeline() {
  const [popup,setPopup] = useState(false);
  return (
      <div className='timeline_content'>
      <div className="timeline_upload">
          <img src={bijan} alt="" />
          <div onClick={()=>{setPopup(true)}} className="timeline_upload_input">
            Create a new post
          </div>
      </div>
        {array.map((arr, index) => (
          <div className='timeline_card' key={index}>
            <div className="timeline_info universal_info">
              <div className="timeline_image universal_image">
                <img src="" alt="" />
              </div>
              <div className="timeline_text universal_text">
                <span>Andrew Garfield</span> <br />
                <span>USA</span>
              </div>
            </div>
            <div className="timeline_pic ">
              <img src="" alt="" />
            </div>
            <div className="timeline_actions">
              <div>
                <span>
                  <FontAwesomeIcon icon={faHeart} />
                </span>
                <span>
                  <FontAwesomeIcon icon={faComment} />
                </span>
              </div>
              <span>
                <FontAwesomeIcon icon={faBookmark} />
              </span>
            </div>
            <div className="timeline_details">
              <div className="timeline_likes">500 likes</div>
              <div><b>Andrew</b> Here's my Pic</div>
              <div className="timeline_comments">View Comments</div>
            </div>
          </div>
        ))}
        {popup && <Popup setPopup={setPopup}/>}
      </div>
  )
}
