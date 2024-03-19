import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComment, faBookmark } from '@fortawesome/free-regular-svg-icons'

export default function TimelineCard({ timelinePosts }) {
    return (
        <>
            {timelinePosts.map((post, index) => (
                <div className='timeline_card' key={index}>
                    <div className="timeline_info universal_info">
                        <div className="timeline_image universal_image">
                            <img src={`http://127.0.0.1:8000/images/${post.user_img}`} alt="" />
                        </div>
                        <div className="timeline_text universal_text">
                            <span>{post.name}</span> <br />
                            <span>{post.username}</span>
                        </div>
                    </div>
                    <div className="timeline_pic">
                        <img src={`http://127.0.0.1:8000/posts/${post.image}`} alt="" />
                    </div>
                    <div className="timeline_actions">
                        <div>
                            <span>
                                <FontAwesomeIcon icon={faHeart} />
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faComment} />
                            </span>
                        </div>
                    </div>
                    <div className="timeline_details">
                        <div className="timeline_likes">500 likes</div>
                        {post.caption !== null && (
                            <div>
                                <b>{post.name.split(' ')[0]}</b> {post.caption}
                            </div>
                        )}
                        <div className="timeline_comments">View Comments</div>
                    </div>
                </div>
            ))}
        </>
    )
}
