import React, { useEffect, useState } from 'react'
import axios from 'axios'
const array = [1, 2, 3, 4, 5, 6]

export default function ExploreBody() {
  const [posts,setPosts] = useState([]);

  const getPosts = async () =>{
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/posts');
      if (response.status === 200) {
        // Reverse the posts array before setting the state
        const reversedPosts = response.data.posts.reverse();
        setPosts(reversedPosts);
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(()=>{
    getPosts();
  },[])

  return (
    <div className="explore-body">
    {posts.map((post,index)=>
      <div className='explore-body-img' key={index}>
          <img src={`http://127.0.0.1:8000/posts/${post.image}`} />
      </div>
    )}
  </div>
  )
}
