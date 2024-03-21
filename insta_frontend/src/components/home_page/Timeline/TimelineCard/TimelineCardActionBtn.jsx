import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComment } from '@fortawesome/free-regular-svg-icons'
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';

export default function TimelineActionBtn({ post, setImgPopup, setImgPopupDetails }) {
  const [like, setLike] = useState(faHeart);
  const changeLike = () => {
    setLike(like === faHeart ? solidHeart : faHeart);
  };

  return (
    <div className="timeline_actions">
      <div>
        <span  >
          <FontAwesomeIcon icon={like} onClick={changeLike} style={{ cursor: 'pointer' }} />
        </span>
        <span>
          <FontAwesomeIcon icon={faComment} onClick={() => { setImgPopup(true); setImgPopupDetails(post) }} style={{ cursor: 'pointer' }} />
        </span>
      </div>
    </div>
  )
}
