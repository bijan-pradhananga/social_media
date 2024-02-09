import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
export default function suggestion() {
  return (
    <>
      <div className='suggestion_content'>
        <h4>Suggested For You</h4>
        <div className="suggestion_card universal_card">
          <div className="suggestion_info universal_info">
            <div className="suggestion_image universal_image">
              <img src="" alt="" />
            </div>
            <div className="suggestion_text universal_text">
              <span>Andrew Garfield</span> <br />
              <span>USA</span>
            </div>
          </div>
          <div className="suggestion_follow universal_follow">
            <FontAwesomeIcon icon={faPlus} />
          </div>
        </div>
      
      </div>

    </>

  )
}
