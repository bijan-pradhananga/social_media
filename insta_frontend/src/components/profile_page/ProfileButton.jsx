import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProfileButton = ({ cUser, id , fetchFollowDetails }) => {
  const [follows, setFollows] = useState(false);

  useEffect(() => {
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

    checkFollow();
  }, [id]);

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

  return (
    <>
      {cUser.id == id ? (
        <button>Edit Profile</button>
      ) : (
        <button onClick={toggleFollow}>{follows ? 'Unfollow' : 'Follow'}</button>
      )}
    </>
  );
};

export default ProfileButton;
