import React from 'react'

export default function Register() {
  return (
    <div>
      <h2>Register</h2>
        <form action="" method="post">
        <label htmlFor="name">Name</label><br />
        <input type="text" id='name' /><br />
        <label htmlFor="username">Username</label><br />
        <input type="text" id='username' /><br />
        <label htmlFor="emai;">Email</label><br />
        <input type="email" id='emai;' /><br />
        <label htmlFor="password">Password</label><br />
        <input type="password" id='password' /><br />
        <label htmlFor="image">Image</label><br />
        <input type="file" id='image' /><br />
        <button style={{color:'black'}}>Register</button>
      </form>

    </div>
  )
}
