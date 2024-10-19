import React from 'react'
import { Link } from 'react-router-dom'
import LoadingComments from '../../loading_component/LoadingComments'
import { API } from '../../../api/config'

export default function PostPopupComments({ comments, isLoading }) {

    return (
        <>
            <div className='popup-content-body-caption' id='comment-mobile'>
                <h3>Comments</h3>
            </div>
            {isLoading ? (
                <LoadingComments count={3} />
            ) : (
                <div className='popup-content-body-comments'>
                    {comments.length > 0 && (
                        comments.map((comment, index) => (
                            <div className='popup-content-body-caption popup-comment' key={index}>
                                <img src={`${API.defaults.baseURL}/images/${comment.image}`} alt={comment.image} />
                                <Link to={`/profile/${comment.user_id}`} onClick={() => { setImgPopup(false) }}>
                                    <span style={{ marginRight: '0.5rem', color: 'lightgray' }}>{comment.name}</span>
                                </Link>
                                <span style={{ color: 'white' }}>{comment.content}</span>
                            </div>
                        ))
                    )}
                </div>
            )}
        </>

    )
}
