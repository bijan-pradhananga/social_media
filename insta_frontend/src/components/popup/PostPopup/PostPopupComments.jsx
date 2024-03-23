import React from 'react'
import { Link } from 'react-router-dom'

export default function PostPopupComments({ comments }) {

    return (
        <>
            <div className='popup-content-body-caption' id='comment-mobile'>
                <h3>Comments</h3>
            </div>
            <div className='popup-content-body-comments' >
                {comments.length > 0 && (
                    comments.map((comment, index) => (
                        <div className='popup-content-body-caption popup-comment' index={comment.id}>
                            <img src={`http://127.0.0.1:8000/images/${comment.image}`} alt={comment.image} />
                            <Link to={`/profile/${comment.user_id}`} onClick={() => { setImgPopup(false) }}>
                                <span style={{ marginRight: '0.5rem', color: 'lightgray' }}>{comment.name}</span>
                            </Link>

                            <span style={{ color: 'white' }}>{comment.content}</span>
                        </div>
                    ))
                )}
            </div>
        </>

    )
}
