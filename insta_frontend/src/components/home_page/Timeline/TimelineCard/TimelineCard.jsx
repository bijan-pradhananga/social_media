import React, { useContext, useEffect, useState } from 'react'
import { ImgPopupContext } from '../../../../routes/Links'
import TimelineCardHeader from './TimelineCardHeader'
import TimelineCardImg from './TimelineCardImg'
import TimelineCardActionBtn from './TimelineCardActionBtn'
import TimelineCardDetails from './TimelineCardDetails'

export default function TimelineCard({ post , setImgPopup }) {
    const { setImgPopupDetails ,countLikes} = useContext(ImgPopupContext);
    const [likeCount, setLikeCount] = useState();
    
    useEffect(() => {
        countLikes(post.id,setLikeCount);
    }, [])
    return (
        <>
                <div className='timeline_card'>
                    <TimelineCardHeader post={post} />
                    <TimelineCardImg setImgPopup={setImgPopup} likeCount={likeCount} post={post} setImgPopupDetails={setImgPopupDetails} /> 
                    <TimelineCardActionBtn setImgPopup={setImgPopup} post={post} setImgPopupDetails={setImgPopupDetails} setLikeCount={setLikeCount}
                      likeCount={likeCount}  countLikes={countLikes}/>
                    <TimelineCardDetails likeCount={likeCount}  post={post}/>
                </div>
           
        </>
    )
}
