import React from 'react'

export default function PostPopupComments() {
    return (
        <>
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
        </>

    )
}
