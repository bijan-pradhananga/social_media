import React, { useContext } from 'react'
import { ImgPopupContext } from '../../routes/Links'
import PostPopup from '../popup/PostPopup/PostPopup'
import { API } from '../../api/config';

export default function ProfileBody({userPosts,post}) {
  const { imgPopup, setImgPopup, imgPopupDetails, setImgPopupDetails } = useContext(ImgPopupContext);
  return (
    <div className="profile-body">
    {userPosts.length > 0 && (
      userPosts.map((post, index) => (
        <div className="profile-body-img" style={{cursor:'pointer'}} key={index} onClick={() => { setImgPopup(true); setImgPopupDetails(post) }}>
          <img src={`${API.defaults.baseURL}/posts/${post.image}`} />
        </div>
      ))
    )}
     {imgPopup && <PostPopup  setImgPopup={setImgPopup} post={imgPopupDetails} />}
  </div>
  )
}
