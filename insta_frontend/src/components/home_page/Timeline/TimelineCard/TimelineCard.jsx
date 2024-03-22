import React, { useContext, useEffect, useState } from 'react'
import { ImgPopupContext } from '../../../../routes/Links'
import TimelineCardHeader from './TimelineCardHeader'
import TimelineCardImg from './TimelineCardImg'
import TimelineCardActionBtn from './TimelineCardActionBtn'
import TimelineCardDetails from './TimelineCardDetails'
import axios from 'axios'

export default function TimelineCard({ post , setImgPopup }) {
    const { setImgPopupDetails } = useContext(ImgPopupContext);
    const [likeCount, setLikeCount] = useState();
    
    const countLikes = async (postId) => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/likedposts/count/${postId}`);
            setLikeCount(response.data.likes)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        countLikes(post.id);
    }, [])
    return (
        <>
                <div className='timeline_card'>
                    <TimelineCardHeader post={post} />
                    <TimelineCardImg setImgPopup={setImgPopup} likeCount={likeCount} post={post} setImgPopupDetails={setImgPopupDetails} /> 
                    <TimelineCardActionBtn setImgPopup={setImgPopup} post={post} setImgPopupDetails={setImgPopupDetails} 
                      likeCount={likeCount}  countLikes={countLikes}/>
                    <TimelineCardDetails likeCount={likeCount}  post={post}/>
                </div>
           
        </>
    )
}
