import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './profile.css'
import AuthUser from '../authentication/AuthUser';

export default function Profile() {
  const { user } = AuthUser();
  const [userPosts, setUserPosts] = useState([]);
  const getUserPosts = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/users/${user.id}/posts`);
      if (response.status === 200) {
        setUserPosts(response.data.posts);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUserPosts();
  }, [])
  return (
    <div className='profile_contents'>
      <div className='profile-header'>
        <div className="profile-img">
          <img src={`http://127.0.0.1:8000/images/${user.image}`} />
        </div>
        <div className='profile-info'>
          <h3>{user.username}</h3>
          <span>{userPosts.length} posts</span> &nbsp;&nbsp;
          <span>100 followers</span> &nbsp;&nbsp;
          <span>100 following</span>
        </div>
      </div>
      <div className="profile-nav">
        <div className="profile-nav-btn">Posts</div>
        <div className="profile-nav-btn">Saved</div>
      </div>
      <div className="profile-body">
        {userPosts.map((post, index) => (
          <div className="profile-body-img" key={index}>
            <img src={`http://127.0.0.1:8000/posts/${post.image}`} />
          </div>
        ))}
      </div>

    </div>
  )
}
