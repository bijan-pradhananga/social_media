import React from 'react'
import { Link } from 'react-router-dom'

export default function SearchCard({user,index}) {
  return (
    <Link to={`/profile/${user.id}`}>
    <div className="search_card" >
        <div className="search_info">
            <div className="search_image">
                <img src={`http://127.0.0.1:8000/images/${user.image}`} alt="" />
            </div>
            <div className="search_text">
                <h3>{user.name}</h3>
                <span>{user.username}</span>
            </div>
        </div>
    </div>
    </Link>
  )
}
