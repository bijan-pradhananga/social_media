import React, { useEffect } from 'react'
import './loading.css'
export default function Loading({count}) {
    useEffect(()=>{
        console.log(count);
    })
    return (
        <div className="loader-container">
        {[...Array(count)].map((_, index) => (
          <div className="card is-loading" key={index}>
            <div className="loading-image"></div>
          </div>
        ))}
        </div>
     
    )
}
