import React from 'react'
import './loading.css'
export default function LoadingSuggestions({ count }) {
    return (
        <>
        {[...Array(count)].map((_, index) => (
            <div className="suggestion_card universal_card" key={index}>
                <div className="suggestion_info universal_info">
                    <div className="suggestion_image universal_image img_loading"></div>
                    <div className="suggestion_text universal_text">
                        <div className='search-info-loading info-loading' style={{ width: '6rem', height: '1.2vh', marginBottom: '0.5rem' }}></div>
                        <div className='search-info-loading info-loading' style={{ width: '4rem', height: '1.2vh' }}></div>
                    </div>
                </div>
            </div>
        ))}
        </>


    )
}
