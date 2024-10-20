import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import './profile.css'
import ProfileBody from './ProfileBody';
import ProfileHeader from './ProfileHeader';
import Loading from '../loading_component/Loading-Post';
import { API } from '../../api/config';

export default function Profile({ cUser }) {
  const { id } = useParams();
  const [user, setUser] = useState([])
  const [userPosts, setUserPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getUser = async () => {
    try {
      const response = await axios.get(`${API.defaults.baseURL}/api/users/${id}`);
      if (response.status === 200) {
        setUser(response.data.user);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const getUserPosts = async () => {
    try {
      const response = await axios.get(`${API.defaults.baseURL}/api/posts/users/${id}`);
      if (response.status === 200) {
        setUserPosts(response.data.posts);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    setIsLoading(true)
    getUser();
    getUserPosts();
  }, [id])

  return (
    <div className='profile_contents'>
      <ProfileHeader isLoading={isLoading} user={user} cUser={cUser} id={id} userPosts={userPosts} />
      {isLoading ? (
        <Loading count={3} />
      ) : (
        <ProfileBody userPosts={userPosts} />
      )}
    </div>
  );
}
