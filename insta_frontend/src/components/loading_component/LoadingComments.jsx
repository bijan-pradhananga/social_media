import React from 'react'
import './loading.css'
export default function LoadingComments({ count }) {
    return (
        <div className='popup-content-body-comments' >
            {[...Array(count)].map((_, index) => (
                <div className='popup-content-body-caption popup-comment' key={index}>
                    <img className='img_loading' style={{width: '2.8rem',height: '2.8rem'}}/>
                    <div>
                        <div className='search-info-loading info-loading' style={{ width:'10rem',height:'1.5vh'}}></div>
                        <div className='search-info-loading info-loading' style={{ width:'8.5rem',height:'1.2vh',marginTop:'5px'}}></div>
                    </div>
                    
                </div>
            ))}
        </div>
    )
}
