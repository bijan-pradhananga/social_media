import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './search.css'
import SearchResults from './SearchResults'
import ExploreBody from '../explore_page/ExploreBody'
import SearchHeader from './SearchHeader'

const array = [1, 2, 3, 4, 5, 6]
export default function Search() {
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([]);
  const [empty,setEmpty] = useState(false)

  const handleSearch = (e) => {
    setSearch(e.target.value);
  }

  const searchUser = async () => {
    try {
        const response = await axios.get(`http://127.0.0.1:8000/api/users/search/${search.trim()}`);
        setSearchResults(response.data.users);
        setEmpty(false)
    } catch (error) {
        setEmpty(true)
    }
  };

  useEffect(() => {
    const delaySearch = setTimeout(() => {
      if (search.trim() !== '') {
        searchUser();
      } else {
        setEmpty(false);
        setSearchResults([]);
      }
    }, 500);
    return () => clearTimeout(delaySearch);
  }, [search])

  return (
    <div className='search_contents'>
      <SearchHeader handleSearch={handleSearch} />
      {search === '' ? (
          <ExploreBody/>
      ) : (
          <SearchResults empty={empty} searchResults={searchResults}/>
      )}
    </div>
  )
}
