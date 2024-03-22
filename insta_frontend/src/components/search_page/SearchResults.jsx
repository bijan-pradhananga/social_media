import React from 'react'
import SearchCard from './SearchCard'

export default function ({searchResults,empty}) {
    return (
        <div className="searchResults">
            {(empty) ? (
                <h3 style={{color:'white', fontWeight:500}}>No results found</h3>
            ) : (
                searchResults.map((user, index) => (
                    <SearchCard key={index} user={user} index={index}/>
                ))
            )}
        </div>
    )
}
