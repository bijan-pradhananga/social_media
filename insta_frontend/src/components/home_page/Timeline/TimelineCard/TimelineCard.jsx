import React from 'react'

import TimelineCardHeader from './TimelineCardHeader'
import TimelineCardImg from './TimelineCardImg'
import TimelineActionBtn from '../TimelineActionBtn'
import TimelineCardDetails from './TimelineCardDetails'

export default function TimelineCard({ timelinePosts ,setImgPopup}) {
    return (
        <>
            {timelinePosts.map((post, index) => (
                <div className='timeline_card' key={index}>
                    <TimelineCardHeader post={post} />
                    <TimelineCardImg setImgPopup={setImgPopup} post={post}/>
                    <TimelineActionBtn/>
                    <TimelineCardDetails post={post}/>
                </div>
            ))}
        </>
    )
}
