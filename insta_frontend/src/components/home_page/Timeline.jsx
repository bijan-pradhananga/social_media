import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Popup from '../popup/Popup';
import TimelineUploadBtn from './TimelineUploadBtn';
import TimelineCard from './TimelineCard';

export default function timeline({ user }) {
  const [timelinePosts, setTimelinePosts] = useState([]);
  const [popup, setPopup] = useState(false);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/posts/follows/${user.id}`);
      setTimelinePosts(response.data.posts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts()
  }, [])
  return (
    <div className='timeline_content'>
      <TimelineUploadBtn user={user} setPopup={setPopup} />
      <TimelineCard timelinePosts={timelinePosts}/>
      {popup && <Popup user={user} fetchPosts={fetchPosts} setPopup={setPopup} />}
    </div>
  )
}
