import React, { useState } from 'react'
import axios from 'axios'
import './register.css'
import { Link } from 'react-router-dom';
import { API } from '../../api/config';

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
      const response = await axios.post(`${API.defaults.baseURL}/api/users`,fn);
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
    <div className='registerContainer'>
      <div className='registerForm'>
      <h2>Insta Clone</h2>
      <form id='registerForm' method="post" onSubmit={handleSubmit}>
        <input type="text" id='name' value={formData.name} onChange={handleChange}
        placeholder='Enter your full name'
        required/><br />
        <input type="text" id='username' value={formData.username} onChange={handleChange} 
         placeholder='Enter your username'
        required/><br />
        <input type="text" id='address' value={formData.address} onChange={handleChange}
        placeholder='Enter your address'
        required/><br />
        <input type="email" id='email' value={formData.email} onChange={handleChange} 
        placeholder='Enter your email'
        required/><br />
        <input type="password" id='password' value={formData.password} onChange={handleChange} 
        placeholder='Enter your password'
        required/><br />
        <input type="file" id='image' onChange={handleImageChange} required/><br />
        <button >Register</button>
      </form>
      <div style={{marginTop:'2vh'}}>
          <p>Already Have an Account?</p>
          <p style={{fontWeight:'600'}}><Link to='/login'>Sign In</Link></p>
        </div>
      </div>
    </div>
  )
}
