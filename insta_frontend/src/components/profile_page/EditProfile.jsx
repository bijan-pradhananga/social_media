import React, { useState } from 'react'
import axios from 'axios';
import AuthUser from '../authentication/AuthUser';
export default function EditProfile() {
    const { user } = AuthUser()
    const [imgUrl, setImgUrl] = useState(`http://127.0.0.1:8000/images/${user.image}`)
    const [formData, setFormData] = useState({
        name: user.name,
        username: user.username,
        address: user.address,
        email: user.email,
        password: '', 
        image: null, 
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
            image: file
        });
        const reader = new FileReader();
        reader.onloadend = () => {
            setImgUrl(reader.result);
        };
        if (file) {
            reader.readAsDataURL(file);
        }
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
    const updateDetails = async (formData) => {
        const fn = new FormData();
        for (let key in formData) {
            fn.append(key, formData[key]);
          }
        try {
          const response = await axios.post(`http://127.0.0.1:8000/api/users/${user.id}`,fn);
          if (response.status === 200) {
            updateToken();
            alert('Profile updated successfully')
          }
        } catch (error) {
          console.error('Error updating profile:', error);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        updateDetails(formData);
    }

    return (
        <div className='profile_contents edit_profile' style={{ color: 'white' }}>
            <h2>Edit Profile</h2>
            <form onSubmit={handleSubmit}>
                <div className="imageHolder">
                    <div>
                        <img src={imgUrl} />
                    </div>
                    <label htmlFor="image">
                        <div className='imgBtn' style={{ width: '8rem' }}>
                            Change Photo
                        </div>
                    </label>
                </div>
                <br />
                <label htmlFor="name">Name</label><br />
                <input type="text" id='name' value={formData.name} onChange={handleChange} required /><br />
                <label htmlFor="username">Username</label><br />
                <input type="text" id='username' value={formData.username} onChange={handleChange} required /><br />
                <label htmlFor="address">Address</label><br />
                <input type="text" id='address' value={formData.address} onChange={handleChange} required /><br />
                <label htmlFor="email">Email</label><br />
                <input type="email" id='email' value={formData.email} onChange={handleChange} required /><br />
                <label htmlFor="password">Password</label><br />
                <input type="password" id='password' value={formData.password} onChange={handleChange} /><br />
                <input type="file" id='image' style={{ display: 'none' }} onChange={handleImageChange} /><br />
                <button style={{ marginTop: '-1rem' }}>Update</button>
            </form>

        </div>
    )
}
