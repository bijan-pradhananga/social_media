import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faHeart, faComment } from '@fortawesome/free-regular-svg-icons'
export default function PostPopupContent({ post, setImgPopup }) {

    return (
        <div className="popup-txtPart">
            <Link to={`/profile/${post.user_id}`} onClick={() => { setImgPopup(false) }}>
                <div className='popup-content-header' style={{ color: 'white' }}>
                    <img src={`http://127.0.0.1:8000/images/${post.user_img}`} alt={post.user_img} />
                    <span>{post.username}</span>
                </div>
            </Link>


            <div className='popup-content-body'>
                <div className='popup-content-body-caption'>
                    <img src={`http://127.0.0.1:8000/images/${post.user_img}`} alt={post.user_img} />
                    <Link to={`/profile/${post.user_id}`} onClick={() => { setImgPopup(false) }}>
                        <span style={{ marginRight: '0.5rem', color: 'white' }}>{post.name}</span>
                    </Link>
                    <span style={{ color: 'lightgray' }}>{post.caption}</span>
                </div>
                <div className='popup-content-body-caption' id='comment-mobile'>
                    <h3>Comments</h3>
                </div>
                <div className='popup-content-body-comments'>
                    {/* <div className='popup-content-body-caption popup-comment'>
                        <img src={`http://127.0.0.1:8000/images/${post.user_img}`} alt={post.user_img} />
                        <span style={{ marginRight: '0.5rem', color: 'lightgray' }}>{post.name}</span>
                        <span style={{ color: 'white' }}>Nice pic</span>
                    </div> */}
                </div>
                <div className='popup-content-footer'>
                    <div className='popup-content-footer1'>
                        <div>
                            <span><FontAwesomeIcon icon={faHeart} size="xl" style={{ color: 'white' ,marginRight:'5px'}} /></span>
                            <span><FontAwesomeIcon icon={faComment} size="xl" style={{ color: 'white' }} /></span>
                            <div style={{marginTop:'5px'}} >
                                <span>500 likes</span>
                            </div>
                        </div>
                    </div>
                    <div className='popup-content-footer2'>
                        <input type="text" placeholder='Add a comment' />
                        <button><FontAwesomeIcon icon={faPaperPlane} size="lg" style={{ color: 'white' }} /></button>
                    </div>
                </div>
            </div>

        </div>
    )
}
