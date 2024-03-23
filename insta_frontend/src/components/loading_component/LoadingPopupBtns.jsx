import React from 'react'
import './loading.css'
export default function LoadingPopupBtns() {
    return (
        <div>
            <div className="timeline_details" >
                <div className="timeline_likes">
                    <div className='timeline_text_name info-loading' style={{ width: '4rem', height: '2.8vh', borderRadius:'2px'}}></div>
                </div>
                <div className='timeline_text_name info-loading' style={{ width: '3rem', height: '2vh', marginTop: '0.3rem', borderRadius:'2px' }}></div>
            </div>
        </div>
    )
}
