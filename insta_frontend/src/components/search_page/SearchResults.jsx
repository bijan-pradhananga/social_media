import React from 'react'
import SearchCard from './SearchCard'

export default function ({searchResults,empty}) {
    return (
        <div className="searchResults">
            {(empty) ? (
                <h3>No results found</h3>
            ) : (
                searchResults.map((user, index) => (
                    <SearchCard user={user} index={index}/>
                ))
            )}
        </div>
    )
}
