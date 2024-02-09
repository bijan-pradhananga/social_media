import React from 'react'
import './search.css'
const array = [1, 2, 3, 4, 5, 6]
export default function Search() {
  return (
    <div className='search_contents'>
      <div className="search-header">
        <input type="text" placeholder='Enter something to search'/>
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
