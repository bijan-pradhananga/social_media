import React from 'react'

export default function Login() {
  return (
    <div>
      <h2>Login</h2>
      <input type="text" placeholder='Enter your email' required/> <br />
      <input type="password" placeholder='Enter your password' required/> <br />
      <button style={{color:'black'}}>Login</button>
    </div>
  )
}
