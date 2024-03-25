import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
export default function SuggestionCard({suggestion}) {
    return (
        <div className="suggestion_card universal_card">
            <Link to={`/profile/${suggestion.id}`}>
            <div className="suggestion_info universal_info">
                <div className="suggestion_image universal_image">
                    <img src={`http://127.0.0.1:8000/images/${suggestion.image}`} />
                </div>
                <div className="suggestion_text universal_text">
                    <span style={{fontSize:'16px',color:'white'}}>{suggestion.name}</span> <br />
                    <span style={{color:'gray'}}>{suggestion.address}</span>
                </div>
            </div>
            </Link>
        </div>
    )
}
