import React from 'react'
import './PostPopup.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faUpload } from '@fortawesome/free-solid-svg-icons'
export default function PostPopup({ setImgPopup }) {
    return (
        <div className='modal'>
            <div className="overlay">
                <FontAwesomeIcon className='cross-btn2' icon={faXmark} style={{ color: "#ffffff", fontSize: "25px" }}
                    onClick={() => { setImgPopup(false) }} />
                <div className="popup2">
                    <div className='popup-imgPart'>

                    </div>
                    <div className="popup-txtPart">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
