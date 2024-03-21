import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { ImgPopupContext } from '../../routes/Links'
import PostPopup from '../popup/PostPopup/PostPopup';
import Loading from '../loading_component/Loading-Post';

export default function ExploreBody() {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const { imgPopup, setImgPopup, imgPopupDetails, setImgPopupDetails } = useContext(ImgPopupContext);
  const getPosts = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/posts/users');
      if (response.status === 200) {
        setPosts(response.data.posts);
        setIsLoading(false)
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPosts();
  }, [])

  return (
    <>
      {isLoading ? (
        <Loading count={6} />
      ) : (
        <div className="explore-body">
          {posts.map((post, index) =>
            <div className='explore-body-img' key={index} onClick={() => { setImgPopup(true); setImgPopupDetails(post) }}>
              <img src={`http://127.0.0.1:8000/posts/${post.image}`} />
            </div>
          )}
        </div>
      )}

      {imgPopup && <PostPopup setImgPopup={setImgPopup} post={imgPopupDetails} />}
    </>


  )
}
