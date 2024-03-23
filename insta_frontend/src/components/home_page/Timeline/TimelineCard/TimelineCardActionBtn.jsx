import React, { useEffect, useState ,useContext} from 'react'
import { ImgPopupContext } from '../../../../routes/Links'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComment } from '@fortawesome/free-regular-svg-icons'
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import AuthUser from '../../../authentication/AuthUser';
import axios from 'axios';
export default function TimelineActionBtn({ post, setImgPopup, setImgPopupDetails, countLikes,setLikeCount }) {
  const { user } = AuthUser();
  const {checkLikeDislike,toggleLikeDislike } = useContext(ImgPopupContext);
  const [like, setLike] = useState(faHeart);
  const [color,setColor] = useState('white');
  const changeLike = async () => {
    setLike(like === faHeart ? solidHeart : faHeart);
    setColor(color === 'white' ? 'red' : 'white');
  };

  useEffect(() => {
    checkLikeDislike(user.id,post.id, setLike, setColor);
  }, [])

  return (
    <div className="timeline_actions">
      <div>
        <span  >
          <FontAwesomeIcon icon={like} onClick={() => {changeLike(); toggleLikeDislike(user.id, post.id, countLikes, setLikeCount) }}
          style={{ cursor: 'pointer',color:color, transition:'ease-out 0.5s' }} />
        </span>
        <span>
          <FontAwesomeIcon icon={faComment} onClick={() => { setImgPopup(true); setImgPopupDetails(post) }} style={{ cursor: 'pointer', }} />
        </span>
      </div>
    </div>
  )
}
