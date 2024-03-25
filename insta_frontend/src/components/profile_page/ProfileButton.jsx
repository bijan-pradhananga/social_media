import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProfileButton = ({ cUser, id , fetchFollowDetails }) => {
  const [follows, setFollows] = useState(false);
  
  const checkFollow = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/followers/?follower_id=${cUser.id}&followed_id=${id}`);
      if (response.data.follows==1) {
          setFollows(true)
      }else{
          setFollows(false)
      }
    } catch (error) {
      console.error('Something went Wrong');
    }
  };

  const toggleFollow = async () =>{
    try {
        const response = await axios.post(`http://127.0.0.1:8000/api/followers/?follower_id=${cUser.id}&followed_id=${id}`);
        if (response.status === 200) {
            if (response.data.follows) {
                setFollows(true)
            }else{
                setFollows(false)
            }
            fetchFollowDetails();
        }
      } catch (error) {
        console.error('Something went Wrong');
      }
  }

  useEffect(() => {
    if (cUser.id != id) {
      checkFollow();
    }
  }, [id]);

  return (
    <>
      {cUser.id == id ? (
        <Link to={`/profile/edit/${cUser.id}`}>
          <button>Edit Profile</button>
        </Link>
      ) : (
        <button onClick={toggleFollow}>{follows ? 'Unfollow' : 'Follow'}</button>
      )}
    </>
  );
};

export default ProfileButton;
