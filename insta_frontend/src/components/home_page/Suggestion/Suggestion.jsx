import React, { useEffect, useState } from 'react'
import SuggestionCard from './SuggestionCard'
import axios from 'axios'
export default function suggestion({ user }) {
  const [suggestions, setSuggestions] = useState([]);

  const suggestUsers = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/users/address/${user.address}/${user.id}`);
      if (response.status == 200) {
        setSuggestions(response.data.users);
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(()=>{
    suggestUsers();
  },[])

  return (
    <>
      <div className='suggestion_content'>
        <h4>Suggested For You</h4>
        {suggestions.length > 0 && (
          suggestions.map((suggestion, index) => (
            <SuggestionCard key={index} suggestion={suggestion} />
          ))
        )}
      </div>

    </>

  )
}
