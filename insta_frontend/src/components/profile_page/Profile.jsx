import React from 'react'
import './profile.css'
import AuthUser from '../authentication/AuthUser';
const array = [1,2,3,4,5,1]

export default function Profile() {
  const {user} = AuthUser();
  return (
    <div className='profile_contents'>
      <div className='profile-header'>
        <div className="profile-img">
        </div>
        <div className='profile-info'>
          <h3>{user.username}</h3>
          <span>6 posts</span> &nbsp;&nbsp;
          <span>100 followers</span> &nbsp;&nbsp;
          <span>100 following</span>
        </div>
      </div>
      <div className="profile-nav">
        <div className="profile-nav-btn">Posts</div>
        <div className="profile-nav-btn">Saved</div>
      </div>
      <div className="profile-body">
        {array.map((item, index) => (
          <div className="profile-body-img" key={index}>
            {/* Your content here */}
          </div>
        ))}
      </div>

    </div>
  )
}
