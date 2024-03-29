import React, { useState } from 'react'
import axios from 'axios'

export default function Register() {
    const [formData, setFormData] = useState({
      name: '',
      username: '',
      address:'',
      email: '',
      password: '',
      image: ''
  });

  //to change the value of the form inputs
  const handleChange = (e) => {
      setFormData({
          ...formData,
          [e.target.id]: e.target.value
      });
  };

  //to handle image change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({
        ...formData,
        image:file
    });
  };

  const addData = async  (formData) =>{
    try {
      let fn = new FormData();
      Object.keys(formData).forEach(key => {
        fn.append(key,formData[key]);
      });
      const response = await axios.post('http://127.0.0.1:8000/api/users',fn);
      if (response.status === 200) {
        alert(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      //adding the data on submit
      addData(formData);
      // clearing the inputs in the form
      setFormData({
        name: '',
        username: '',
        email: '',
        address:'',
        password: '',
        image: ''
      });
  }
  return (
    <div>
      <h2 style={{color:'white'}}>Register</h2>
      <form id='registerForm' method="post" onSubmit={handleSubmit} style={{color:'white'}}>
        <label htmlFor="name">Name</label><br />
        <input type="text" id='name' value={formData.name} onChange={handleChange} required/><br />
        <label htmlFor="username">Username</label><br />
        <input type="text" id='username' value={formData.username} onChange={handleChange} required/><br />
        <label htmlFor="address">Address</label><br />
        <input type="text" id='address' value={formData.address} onChange={handleChange} required/><br />
        <label htmlFor="email">Email</label><br />
        <input type="email" id='email' value={formData.email} onChange={handleChange} required/><br />
        <label htmlFor="password">Password</label><br />
        <input type="password" id='password' value={formData.password} onChange={handleChange} required/><br />
        <label htmlFor="image">Image</label><br />
        <input type="file" id='image' onChange={handleImageChange} required/><br />
        <button style={{color:'black'}}>Register</button>
      </form>
    </div>
  )
}
