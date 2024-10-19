import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './search.css'
import SearchResults from './SearchResults'
import ExploreBody from '../explore_page/ExploreBody'
import SearchHeader from './SearchHeader'
import LoadingSearch from '../loading_component/LoadingSearch'
import { API } from '../../api/config'

export default function Search() {
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([]);
  const [empty, setEmpty] = useState(false)
  const [isLoading, setIsLoading] = useState(true);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  }

  const searchUser = async () => {
    try {
      const response = await axios.get(`${API.defaults.baseURL}/api/users/search/${search.trim()}`);
      setSearchResults(response.data.users);
      setEmpty(false)
      setIsLoading(false)
    } catch (error) {
      setEmpty(true)
      setIsLoading(false)
    }
  };

  useEffect(() => {
    const delaySearch = setTimeout(() => {
      if (search.trim() !== '') {
        searchUser();
      } else {
        setEmpty(false);
        setIsLoading(true)
        setSearchResults([]);
      }
    }, 500);
    return () => clearTimeout(delaySearch);
  }, [search])

  return (
    <div className='search_contents'>
      <SearchHeader handleSearch={handleSearch} />
      {search === '' ? (
        <ExploreBody />
      ) : (
        isLoading ? (
          <LoadingSearch count={3} />
        ) : (
          <SearchResults empty={empty} searchResults={searchResults} />
        )
      )}
    </div>
  )
}
