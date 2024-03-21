import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComment, faBookmark } from '@fortawesome/free-regular-svg-icons'
export default function TimelineActionBtn() {
  return (
    <div className="timeline_actions">
    <div>
        <span>
            <FontAwesomeIcon icon={faHeart} />
        </span>
        <span>
            <FontAwesomeIcon icon={faComment} />
        </span>
    </div>
</div>
  )
}
