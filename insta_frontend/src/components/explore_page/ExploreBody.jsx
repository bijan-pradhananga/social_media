import React from 'react'
const array = [1, 2, 3, 4, 5, 6]
export default function ExploreBody() {
  return (
    <div className="explore-body">
    {array.map((img,index)=>
      <div className='explore-body-img' key={index}>

      </div>
    )}
  </div>
  )
}
