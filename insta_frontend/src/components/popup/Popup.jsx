import React from 'react'
import './popup.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faUpload } from '@fortawesome/free-solid-svg-icons'
export default function Popup({setPopup}) {
    return (
        <div className='modal'>
            <div className="overlay">
                <div className="popup">
                    <div className="popup-header">
                        <h3>Create Post</h3>
                        <FontAwesomeIcon className='cross-btn' icon={faXmark} style={{ color: "#ffffff", fontSize: "25px" }} 
                            onClick={()=>{setPopup(false)}}
                        />
                    </div>
                    <div className="popup-body">
                        <div className="popup-info">
                            <img src="" alt="" />
                            <span>Bijan Pradhananga</span>
                        </div>
                        <div className="popup-body-caption">
                            <input type="text" placeholder='Write a caption' />
                            <div className="popup-body-imgUpload">
                                <div style={{textAlign:"center"}}>
                                    <label htmlFor="imgUpload">Upload Your Image
                                    <div><FontAwesomeIcon icon={faUpload} /></div>
                                    </label>
                                </div>
                                <input type="file" id='imgUpload' style={{ display: "none" }} />
                            </div>
                        </div>
                    </div>
                    <div className="popup-footer">
                        <button>Share</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
