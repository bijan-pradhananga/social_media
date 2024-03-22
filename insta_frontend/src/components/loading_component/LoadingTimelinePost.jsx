import React from 'react'
import './loading.css'
export default function LoadingTimelinePost({ count }) {
    return (
        <>
            {[...Array(count)].map((_, index) => (
                <div className='timeline_card' key={index}>
                    {/* timeline header  */}
                    <div className="timeline_info universal_info">
                        <div className="timeline_image universal_image img_loading"></div>
                        <div className="timeline_text universal_text">
                            <div className='timeline_text_name info-loading' style={{ marginBottom: '0.6rem' }}></div>
                            <div className='timeline_text_name info-loading'></div>
                        </div>
                    </div>
                    {/* timeline header  */}
                    {/* timeline img  */}
                    <div className="timeline_pic img_loading" style={{ height: '55vh' }}></div>
                    {/* timeline img  */}
                    {/* timeline details */}
                    <div className="timeline_details" style={{ marginTop: '0.5rem' }}>
                        <div className="timeline_likes">
                            <div className='timeline_text_name info-loading' style={{ width: '4rem' }}></div>
                            <div className='timeline_text_name info-loading' style={{ width: '6rem', marginTop: '0.5rem' }}></div>
                        </div>
                        <div className='timeline_text_name info-loading' style={{ width: '5rem', marginTop: '0.5rem' }}></div>
                    </div>
                    {/* timeline details */}
                </div>
            ))}
        </>
    )
}
