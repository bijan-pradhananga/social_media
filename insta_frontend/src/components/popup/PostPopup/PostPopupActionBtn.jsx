import React, { useContext, useEffect, useState } from 'react'
import { ImgPopupContext } from '../../../routes/Links'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faHeart, faComment } from '@fortawesome/free-regular-svg-icons'
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'
import LoadingPopupBtns from '../../loading_component/LoadingPopupBtns';
import PostPopupCommentBtn from './PostPopupCommentBtn';
export default function PostPopupActionBtn({ user, post, isLoading, setIsLoading, postComment }) {
    const isMobile = () => {
        const width = window.innerWidth;
        return width <= 768; // Adjust this threshold as needed
    };
    const { countLikes, checkLikeDislike, toggleLikeDislike } = useContext(ImgPopupContext);
    const [likeCount, setLikeCount] = useState();
    const [like, setLike] = useState(faHeart);
    const [color, setColor] = useState('white');
    const changeLike = async () => {
        setLike(like === faHeart ? solidHeart : faHeart);
        setColor(color === 'white' ? 'red' : 'white');
    };

    useEffect(() => {
        if (!isMobile()) {
            Promise.all([
                checkLikeDislike(user.id, post.id, setLike, setColor),
                countLikes(post.id, setLikeCount)
            ]).then(() => {
                setIsLoading(false);
            }).catch(error => {
                console.error("Error:", error);
                setIsLoading(false); // In case of an error, still set isLoading to false
            });
        }
    }, [])
    return (
        <div className='popup-content-footer'>
            <div className='popup-content-footer1'>

                {isLoading ? (
                    <LoadingPopupBtns />
                ) : (
                    <div>
                        <span>
                            <FontAwesomeIcon icon={like} onClick={() => { changeLike(); toggleLikeDislike(user.id, post.id, countLikes, setLikeCount) }}
                                style={{ cursor: 'pointer', color: color, transition: 'ease-out 0.5s' }} size="xl" />
                        </span>
                        <span><FontAwesomeIcon icon={faComment} size="xl" style={{ color: 'white', marginLeft: '0.5rem' }} /></span>
                        <div style={{ marginTop: '5px' }} >
                            {likeCount !== 0 ? (
                                <span>{likeCount} {likeCount === 1 ? 'like' : 'likes'}</span>
                            ) : (
                                <span style={{ color: 'gray' }} >Be the first to like this post</span>
                            )}
                        </div>
                    </div>
                )}
            </div>
            <PostPopupCommentBtn user={user} post={post} postComment={postComment}/>

        </div>

    )
}
