import React from 'react'
import SearchCard from './SearchCard'

export default function ({searchResults}) {
    return (
        <div className="searchResults">
            {(searchResults.length === 0) ? (
                <h3>No results found</h3>
            ) : (
                searchResults.map((user, index) => (
                    <SearchCard user={user} index={index}/>
                ))
            )}
        </div>
    )
}
