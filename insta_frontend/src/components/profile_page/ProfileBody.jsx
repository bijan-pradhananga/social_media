import React, { useContext } from 'react'
import { ImgPopupContext } from '../../routes/Links'
import PostPopup from '../popup/PostPopup/PostPopup'

export default function ProfileBody({userPosts,post}) {
  const { imgPopup, setImgPopup, imgPopupDetails, setImgPopupDetails } = useContext(ImgPopupContext);
  return (
    <div className="profile-body">
    {userPosts.length > 0 && (
      userPosts.map((post, index) => (
        <div className="profile-body-img" key={index} onClick={() => { setImgPopup(true); setImgPopupDetails(post) }}>
          <img src={`http://127.0.0.1:8000/posts/${post.image}`} />
        </div>
      ))
    )}
     {imgPopup && <PostPopup  setImgPopup={setImgPopup} post={imgPopupDetails} />}
  </div>
  )
}
