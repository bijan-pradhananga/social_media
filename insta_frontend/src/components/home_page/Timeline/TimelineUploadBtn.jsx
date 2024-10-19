import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import AuthUser from '../../authentication/AuthUser';
import { API } from '../../../api/config';
export default function TimelineUploadBtn({ setPopup }) {
  const {user,token,logout} = AuthUser();
  const logoutUser = () =>{
    if (token!=undefined) {
      logout();
    }
  }

  return (
    <div className="timeline_upload">
      <img src={`${API.defaults.baseURL}/images/${user.image}`} alt="" />
      <div onClick={() => { setPopup(true) }} className="timeline_upload_input">
        Create a new post
      </div>
      <div className='timeline-logout-btn'>
        <Link onClick={logoutUser} to="/login" >
          <FontAwesomeIcon icon={faSignOutAlt} size='lg' style={{color:'white'}} />
        </Link>
      </div>
    </div>
  )
}
