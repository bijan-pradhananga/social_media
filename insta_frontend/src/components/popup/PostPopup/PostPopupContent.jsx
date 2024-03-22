import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'
export default function PostPopupContent({ post, setImgPopup }) {
    return (
        <div className="popup-txtPart">
            <Link to={`/profile/${post.user_id}`} onClick={() => { setImgPopup(false) }}>
                <div className='popup-content-header' style={{color:'white'}}>
                    <img src={`http://127.0.0.1:8000/images/${post.user_img}`} alt={post.user_img} />
                    <span>{post.username}</span>
                </div>
            </Link>


            <div className='popup-content-body'>
                <div className='popup-content-body-caption'>
                    <img src={`http://127.0.0.1:8000/images/${post.user_img}`} alt={post.user_img} />
                    <Link to={`/profile/${post.user_id}`} onClick={() => { setImgPopup(false) }}>
                        <span style={{ marginRight: '0.5rem',color:'white' }}>{post.name}</span>
                    </Link>
                    <span style={{color:'lightgray'}}>{post.caption}</span>
                </div>
                <div className='popup-content-body-caption' id='comment-mobile'>
                    <h3>Comments</h3>
                </div>
                <div className='popup-content-body-comments'>

                </div>
                <div className='popup-content-footer'>
                <div className='popup-content-footer1'>

                </div>
                <div className='popup-content-footer2'>
                    <input type="text" placeholder='Add a comment' />
                    <button><FontAwesomeIcon icon={faPaperPlane} size="lg" style={{color:'white'}} /></button>
                </div>
            </div>
            </div>

        </div>
    )
}
