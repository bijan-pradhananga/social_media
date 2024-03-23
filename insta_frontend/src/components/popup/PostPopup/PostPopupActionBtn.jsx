import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faHeart, faComment } from '@fortawesome/free-regular-svg-icons'
export default function PostPopupActionBtn() {
    return (
        <div className='popup-content-footer'>
            <div className='popup-content-footer1'>
                <div>
                    <span><FontAwesomeIcon icon={faHeart} size="xl" style={{ color: 'white', marginRight: '5px' }} /></span>
                    <span><FontAwesomeIcon icon={faComment} size="xl" style={{ color: 'white' }} /></span>
                    <div style={{ marginTop: '5px' }} >
                        <span>500 likes</span>
                    </div>
                </div>
            </div>
            <div className='popup-content-footer2'>
                <input type="text" placeholder='Add a comment' />
                <button><FontAwesomeIcon icon={faPaperPlane} size="lg" style={{ color: 'white' }} /></button>
            </div>
        </div>

    )
}
