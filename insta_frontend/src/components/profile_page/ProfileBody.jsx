import React from 'react'

export default function ProfileBody({userPosts,post}) {
  return (
    <div className="profile-body">
    {userPosts.length > 0 && (
      userPosts.map((post, index) => (
        <div className="profile-body-img" key={index}>
          <img src={`http://127.0.0.1:8000/posts/${post.image}`} />
        </div>
      ))
    )}
  </div>
  )
}
