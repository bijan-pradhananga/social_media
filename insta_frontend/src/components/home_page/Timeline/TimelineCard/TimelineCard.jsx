import React, { useContext } from 'react'
import { ImgPopupContext } from '../../../../routes/Links'
import TimelineCardHeader from './TimelineCardHeader'
import TimelineCardImg from './TimelineCardImg'
import TimelineActionBtn from '../TimelineActionBtn'
import TimelineCardDetails from './TimelineCardDetails'

export default function TimelineCard({ timelinePosts ,setImgPopup }) {
    const { setImgPopupDetails } = useContext(ImgPopupContext);

    return (
        <>
            {timelinePosts.map((post, index) => (
                <div className='timeline_card' key={index}>
                    <TimelineCardHeader post={post} />
                    <TimelineCardImg setImgPopup={setImgPopup} post={post} setImgPopupDetails={setImgPopupDetails}/>
                    <TimelineActionBtn />
                    <TimelineCardDetails post={post}/>
                </div>
            ))}
        </>
    )
}
