import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass, faHome, faMagnifyingGlass, faUser,faSignOutAlt ,faHeart} from '@fortawesome/free-solid-svg-icons'
import './sidebar.css'

export default function Sidebar() {
  return (
 
      <nav>
        <header>
          <div className="image-text">
            <span className="image">
              <h1 className='logo'>LOGO</h1>
            </span>
          </div>
          <ul>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faHome} />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/search">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
              <span>Search</span>
            </Link>
          </li>
          <li>
            <Link to="/explore">
            <FontAwesomeIcon icon={faCompass} />
              <span>Explore</span>
            </Link>
          </li>
          <li>
            <Link to="/notifications">
            <FontAwesomeIcon icon={faHeart} />
              <span>Notifications</span>
            </Link>
          </li>
          <li>
            <Link to="/profile">
            <FontAwesomeIcon icon={faUser} />
              <span>Profile</span>
            </Link>
          </li>

        </ul>
        </header>

        <footer>
          <Link to="/login">
          <FontAwesomeIcon icon={faSignOutAlt} />
          <span>Logout</span>
          </Link>
        </footer>
      </nav>

  )
}
