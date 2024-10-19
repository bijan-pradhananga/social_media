import React, { useEffect, useState } from 'react'
import ProfileButton from './ProfileButton'
import axios from 'axios';
import LoadingProfileHeader from '../loading_component/LoadingProfileHeader';
import { API } from '../../api/config';

export default function ProfileHeader({ user, cUser, id, userPosts, isLoading }) {
  const [followerCount, setFollowerCount] = useState(0);
  const [followingCount, setFollowingCount] = useState(0);

  const fetchFollowDetails = async () => {
    try {
      const response = await axios.get(`${API.defaults.baseURL}/api/followers/followCount/${id}`);
      setFollowerCount(response.data.follower_count);
      setFollowingCount(response.data.following_count);
    } catch (error) {
      console.error('Error fetching follower count:', error);
    }
  };

  useEffect(() => {
    fetchFollowDetails();
  }, [id]);
  return (
    <>
      {isLoading ? (
        <LoadingProfileHeader />
      ) : (
        <div className='profile-header'>
          <div className="profile-img">
            <img src={`${API.defaults.baseURL}/images/${user.image}`} />
          </div>
          <div className='profile-info'>
            <div style={{ display: 'flex', marginBottom: '0.6rem' }}>
              <h3>{user.username}</h3>
              <ProfileButton fetchFollowDetails={fetchFollowDetails} cUser={cUser} id={id} />
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
