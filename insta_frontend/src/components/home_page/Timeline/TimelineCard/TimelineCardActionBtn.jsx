import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComment } from '@fortawesome/free-regular-svg-icons'
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import AuthUser from '../../../authentication/AuthUser';
import axios from 'axios';
export default function TimelineActionBtn({ post, setImgPopup, setImgPopupDetails, countLikes }) {
  const { user } = AuthUser();
  const [like, setLike] = useState(faHeart);
  const [color,setColor] = useState('white');
  const changeLike = async () => {
    setLike(like === faHeart ? solidHeart : faHeart);
    setColor(color === 'white' ? 'red' : 'white');
  };

  const checkLikeDislike = async (user_id, post_id) => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/likedposts/${user_id}/${post_id}`);
      if (response.data.output) {
        setLike(solidHeart)
        setColor('red')
      } else {
        setLike(faHeart)
        setColor('white')
      }
    } catch (error) {
      console.log(error);
    }
  }

  const toggleLikeDislike = async (user_id, post_id) => {
    let ids = {
      user_id, post_id
    }
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/likedposts', ids)
      if (response.status == 200) {
        countLikes(post_id);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    checkLikeDislike(user.id,post.id);
  }, [])

  return (
    <div className="timeline_actions">
      <div>
        <span  >
          <FontAwesomeIcon icon={like} onClick={() => {changeLike(); toggleLikeDislike(user.id, post.id) }} style={{ cursor: 'pointer',color:color, transition:'ease-out 0.5s' }} />
        </span>
        <span>
          <FontAwesomeIcon icon={faComment} onClick={() => { setImgPopup(true); setImgPopupDetails(post) }} style={{ cursor: 'pointer', }} />
        </span>
      </div>
    </div>
  )
}
