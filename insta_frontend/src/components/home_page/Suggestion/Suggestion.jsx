import React, { useEffect, useState } from 'react'
import SuggestionCard from './SuggestionCard'
import axios from 'axios'
import LoadingSuggestions from '../../loading_component/LoadingSuggestions';
import { API } from '../../../api/config';
export default function suggestion({ user }) {
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const suggestUsers = async () => {
    try {
      const response = await axios.get(`${API.defaults.baseURL}/api/users/address/${user.address}/${user.id}`);
      if (response.status == 200) {
        setSuggestions(response.data.users);
        setIsLoading(false)
      }
    } catch (error) {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    suggestUsers();
  }, [])

  return (
    <>
      <div className='suggestion_content'>
        <h4>Suggested For You</h4>
        {isLoading ? (
          <LoadingSuggestions count={2} />
        ) : (
          suggestions.length > 0 && (
            suggestions.map((suggestion, index) => (
              <SuggestionCard key={index} suggestion={suggestion} />
            ))
          )
        )}
      </div>
    </>

  )
}
