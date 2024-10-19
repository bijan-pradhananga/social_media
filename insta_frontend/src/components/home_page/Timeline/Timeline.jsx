import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import Popup from '../../popup/Popup';
import TimelineUploadBtn from './TimelineUploadBtn';
import TimelineCard from './TimelineCard/TimelineCard';
import PostPopup from '../../popup/PostPopup/PostPopup';
import { ImgPopupContext } from '../../../routes/Links'
import LoadingTimelinePost from '../../loading_component/LoadingTimelinePost';
import { API } from '../../../api/config';

export default function timeline({ user }) {
  const [timelinePosts, setTimelinePosts] = useState([]);
  const [popup, setPopup] = useState(false);
  const { imgPopup, setImgPopup, imgPopupDetails } = useContext(ImgPopupContext);
  const [isLoading, setIsLoading] = useState(true);
  const [visiblePosts, setVisiblePosts] = useState(3);

  const loadMorePosts = () => {
    // Set isLoading to true to show loading indicator
    setIsLoading(true);

    // Simulate fetching more posts from API
    setTimeout(() => {
      // Increase the number of visible posts by 3
      setVisiblePosts(prevVisiblePosts => prevVisiblePosts + 3);
      setIsLoading(false);
    }, 1000); // Simulated loading delay
  };
  const fetchPosts = async () => {
    try {
      const response = await axios.get(`${API.defaults.baseURL}/api/posts/follows/${user.id}`);
      setTimelinePosts(response.data.posts);
      setIsLoading(false)
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
      {timelinePosts.slice(0, visiblePosts).map((post, index) => (
        <TimelineCard setImgPopup={setImgPopup}
          key={index}
          post={post}
        />
      ))}
      {isLoading && <LoadingTimelinePost />}
      {visiblePosts < timelinePosts.length && !isLoading && (
        <div style={{width:'100%',height:'5vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
          <button onClick={loadMorePosts} style={{ backgroundColor: 'inherit', color: 'white', fontWeight:'500',outline:'none',border:'none',alignSelf:'flex-start' }}>
            See More Posts
          </button>
        </div>

      )}


      {popup && <Popup user={user} fetchPosts={fetchPosts} setPopup={setPopup} />}
      {imgPopup && <PostPopup setImgPopup={setImgPopup} post={imgPopupDetails} />}
    </div>
  )
}
