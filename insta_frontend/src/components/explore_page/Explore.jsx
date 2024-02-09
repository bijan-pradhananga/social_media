import React from 'react'
import './explore.css'
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12]
export default function Explore() {
  return (
    <div className='explore_contents'>
      <div className='explore-header'>
          <h2>Explore</h2>
      </div>
      <div className="explore-body">
        {array.map((img,index)=>
          <div className='explore-body-img' key={index}>

          </div>
        )}
      </div>
    </div>
  )
}
