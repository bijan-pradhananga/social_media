import React from 'react'

export default function LoadingSearch({count}) {
    return (
        <>
            {[...Array(count)].map((_, index) => (
            <div className="search_card" key={index}>
                <div className="search_info">
                    <div className="search_image img_loading"></div>
                    <div className="search_text">
                        <div className='search-info-loading' style={{ marginBottom: '0.6rem' }}></div>
                        <div className='search-info-loading search-info-username'></div>
                    </div>
                </div>
            </div>
        ))}
        </>

    )
}
