import React from 'react'

export default function SearchHeader({handleSearch}) {
  return (
    <div className="search-header">
    <input type="text" onChange={handleSearch} placeholder='Search' />
    </div>
  )
}
