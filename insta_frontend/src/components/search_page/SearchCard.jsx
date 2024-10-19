import React from 'react'
import { Link } from 'react-router-dom'
import { API } from '../../api/config'

export default function SearchCard({user,index}) {
  return (
    <Link to={`/profile/${user.id}`}>
    <div className="search_card" >
        <div className="search_info">
            <div className="search_image">
                <img src={`${API.defaults.baseURL}/images/${user.image}`} alt="" />
            </div>
            <div className="search_text">
                <h3 style={{fontWeight:500}}>{user.name}</h3>
                <span style={{color:'lightgray'}}>{user.username}</span>
            </div>
        </div>
    </div>
    </Link>
  )
}
