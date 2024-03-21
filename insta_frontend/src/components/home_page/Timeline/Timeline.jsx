import React, { useContext, useEffect, useState   } from 'react'
import axios from 'axios';
import Popup from '../../popup/Popup';
import TimelineUploadBtn from './TimelineUploadBtn';
import TimelineCard from './TimelineCard/TimelineCard';
import PostPopup from '../../popup/PostPopup/PostPopup';
import { ImgPopupContext } from '../../../routes/Links'

export default function timeline({ user }) {
  const [timelinePosts, setTimelinePosts] = useState([]);
  const [popup, setPopup] = useState(false);
  const { imgPopup, setImgPopup, imgPopupDetails } = useContext(ImgPopupContext);

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
      <TimelineCard setImgPopup={setImgPopup}  timelinePosts={timelinePosts} />
      {popup && <Popup user={user} fetchPosts={fetchPosts} setPopup={setPopup} />}
      {imgPopup && <PostPopup  setImgPopup={setImgPopup} post={imgPopupDetails} />}
    </div>
  )
}
