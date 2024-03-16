import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import './profile.css'
import AuthUser from '../authentication/AuthUser';

export default function Profile() {
  const { id } = useParams();
  const [user,setUser] = useState([])
  const [userPosts, setUserPosts] = useState([]);

  const getUser = async () =>{
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/users/${id}`);
      if (response.status === 200) {
        setUser(response.data.user);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const getUserPosts = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/users/${id}/posts`);
      if (response.status === 200) {
        setUserPosts(response.data.posts);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUser();
    getUserPosts();
  }, [id])
  
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
        {userPosts.length > 0 && (
          userPosts.map((post, index) => (
            <div className="profile-body-img" key={index}>
              <img src={`http://127.0.0.1:8000/posts/${post.image}`} />
            </div>
          ))
        )}

      </div>

    </div>
  )
}
