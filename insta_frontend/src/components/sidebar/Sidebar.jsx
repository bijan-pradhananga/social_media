import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass, faHome, faMagnifyingGlass, faUser,faSignOutAlt ,faHeart} from '@fortawesome/free-solid-svg-icons'
import './sidebar.css'
import AuthUser from '../authentication/AuthUser'

export default function Sidebar() {
  const {user,token,logout} = AuthUser();
  const logoutUser = () =>{
    if (token!=undefined) {
      logout();
    }
  }
  return (
 
      <nav>
        <header>
          <div className="image-text">
            <span className="image">
              <h1 className='logo'>Insta Clone</h1>
            </span>
          </div>
          <ul>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faHome} style={{color:'white'}} />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/search">
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{color:'white'}} />
              <span>Search</span>
            </Link>
          </li>
          <li>
            <Link to="/explore">
            <FontAwesomeIcon icon={faCompass} style={{color:'white'}}/>
              <span>Explore</span>
            </Link>
          </li>
          <li>
            <Link to="/notifications">
            <FontAwesomeIcon icon={faHeart} style={{color:'white'}}/>
              <span>Notifications</span>
            </Link>
          </li>
          <li>
            <Link to={`/profile/${user.id}`}>
            <FontAwesomeIcon icon={faUser} style={{color:'white'}}/>
              <span>Profile</span>
            </Link>
          </li>

        </ul>
        </header>

        <footer>
          <Link onClick={logoutUser} to="/login" >
          <FontAwesomeIcon icon={faSignOutAlt} style={{color:'white'}}/>
          <span>Logout</span>
          </Link>
        </footer>
      </nav>

  )
}
