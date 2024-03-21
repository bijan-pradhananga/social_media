import React, { useEffect, useState } from 'react'
import ProfileButton from './ProfileButton'
import axios from 'axios';
import LoadingProfileHeader from '../loading_component/LoadingProfileHeader';

export default function ProfileHeader({ user, cUser, id, userPosts, isLoading }) {
  const [followerCount, setFollowerCount] = useState(0);
  const [followingCount, setFollowingCount] = useState(0);
  const fetchFollowerCount = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/followers/follower-count/${id}`);
      setFollowerCount(response.data.follower_count);
    } catch (error) {
      console.error('Error fetching follower count:', error);
    }
  };

  const fetchFollowingCount = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/followers/following-count/${id}`);
      setFollowingCount(response.data.following_count);
    } catch (error) {
      console.error('Error fetching following count:', error);
    }
  };


  useEffect(() => {
    fetchFollowerCount();
    fetchFollowingCount();
  }, [id]);
  return (
    <>
      {isLoading ? (
        <LoadingProfileHeader />
      ) : (
        <div className='profile-header'>
          <div className="profile-img">
            <img src={`http://127.0.0.1:8000/images/${user.image}`} />
          </div>
          <div className='profile-info'>
            <div style={{ display: 'flex', marginBottom: '0.6rem' }}>
              <h3>{user.username}</h3>
              <ProfileButton fetchFollowerCount={fetchFollowerCount} cUser={cUser} id={id} />
            </div>
            <span>{userPosts.length} posts</span> &nbsp;&nbsp;
            <span>{followerCount} followers</span> &nbsp;&nbsp;
            <span>{followingCount} following</span>
          </div>
        </div>
      )}
      <div className="profile-nav"></div>
    </>
  )
}
