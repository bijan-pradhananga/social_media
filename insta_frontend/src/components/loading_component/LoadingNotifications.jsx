import React from 'react'

export default function LoadingNotifications({count}) {
    return (
        <>
            {[...Array(count)].map((_, index) => (
                <div className="notification-card" key={index} style={{display:'flex', alignItems:'center'}}>
                    <img className='info-loading' />
                    <div className="notification-card-msg info-loading" style={{width:'20rem','height':'3vh'}}>
                    </div>
                </div>
            ))}
        </>

    )
}
