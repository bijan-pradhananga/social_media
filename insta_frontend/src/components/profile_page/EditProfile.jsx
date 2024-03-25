import React, { useState } from 'react'
import axios from 'axios';
import AuthUser from '../authentication/AuthUser';
export default function EditProfile() {
    const {user} = AuthUser()
    const [formData, setFormData] = useState({
        name: user.name,
        username: user.username,
        address: user.address,
        email: user.email,
        password: user.password,
        image: ''
    });

    const [updatedUser,setUpdatedUser] = useState();
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
            image: file
        });
    };

    const updateToken = async () => {
        try {
          const response = await axios.get(`http://127.0.0.1:8000/api/users/${user.id}`);
          if (response.status === 200) {
            sessionStorage.setItem('user', JSON.stringify(response.data.user));
          }
        } catch (error) {
          console.log(error);
        }
      }

    //to update
    const updateDetails = async () =>{
        try {
            let fn = new FormData();
            Object.keys(formData).forEach(key => {
              fn.append(key,formData[key]);
            });
            const response = await axios.put(`http://127.0.0.1:8000/api/users/${user.id}`, fn);
            if (response.status === 200) {
                updateToken();
                alert('Profile updated successfully:');
            }
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        updateDetails();
    }
  
    return (
        <div className='profile_contents edit_profile' style={{ color: 'white', backgroundColor: 'gray' }}>
            <h2>Edit Profile</h2>
            <form  onSubmit={handleSubmit}>
                <label htmlFor="image">Image</label><br />
                <input type="file" id='image' onChange={handleImageChange} /><br />
                <input type="file" style={{ display: 'none' }} />
                <label htmlFor="name">Name</label><br />
                <input type="text" id='name' value={formData.name} onChange={handleChange} required /><br />
                <label htmlFor="username">Username</label><br />
                <input type="text" id='username' value={formData.username} onChange={handleChange} required /><br />
                <label htmlFor="address">Address</label><br />
                <input type="text" id='address' value={formData.address} onChange={handleChange} required /><br />
                <label htmlFor="email">Email</label><br />
                <input type="email" id='email' value={formData.email} onChange={handleChange} required /><br />
                <label htmlFor="password">Password</label><br />
                <input type="password" id='password' value={formData.password} onChange={handleChange} required /><br />
                <button style={{ color: 'black' }}>Update</button>
            </form>

        </div>
    )
}
