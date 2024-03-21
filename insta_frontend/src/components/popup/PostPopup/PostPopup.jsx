import React, { useEffect } from 'react'
import './PostPopup.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faUpload } from '@fortawesome/free-solid-svg-icons'
import PostPopupImg from './PostPopupImg'
import PostPopupContent from './PostPopupContent'
export default function PostPopup({ setImgPopup , post}) {

    // useEffect(()=>{
    //     console.log(post);
    // },[post])
    return (
        <div className='modal'>
            <div className="overlay">
                <FontAwesomeIcon className='cross-btn2' icon={faXmark} style={{ color: "#ffffff", fontSize: "25px" }}
                    onClick={() => { setImgPopup(false) }} />
                <div className="popup2">
                    <PostPopupImg post={post}/>
                    <PostPopupContent setImgPopup={setImgPopup} post={post}/>
                </div>
            </div>
        </div>
    )
}
