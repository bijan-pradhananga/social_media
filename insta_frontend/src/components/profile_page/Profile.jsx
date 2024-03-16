import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import './profile.css'
import ProfileButton from './ProfileButton';
import ProfileBody from './ProfileBody';
import ProfileHeader from './ProfileHeader';

export default function Profile({cUser}) {
  const { id } = useParams();
  const [user, setUser] = useState([])
  const [userPosts, setUserPosts] = useState([]);

  const getUser = async () => {
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
      <ProfileHeader user={user} cUser={cUser} id={id} userPosts={user}/>
      <ProfileBody userPosts={userPosts}/>

    </div>
  )
}
