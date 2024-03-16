import React, { useState } from 'react'
import axios from 'axios'
import './popup.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faUpload } from '@fortawesome/free-solid-svg-icons'

export default function Popup({ user, setPopup }) {
    const [formData, setFormData] = useState({
        user_id: user.id,
        caption: '',
        image: ''
    });
    const [imageUrl, setImageUrl] = useState(null);

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
            setImageUrl(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
       
    };

    //to remove image
    const removeImage = () =>{
        setFormData({
            ...formData,
            image: ''
        });
        setImageUrl(null);

    }

    const addData = async (formData) => {
        try {
            let fn = new FormData();
            Object.keys(formData).forEach(key => {
                fn.append(key, formData[key]);
            });
            const response = await axios.post('http://127.0.0.1:8000/api/posts', fn);
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
            user_id: user.id,
            caption: '',
            image: ''
        });
    }

    return (
        <div className='modal'>
            <div className="overlay">
                <div className="popup">
                    <div className="popup-header">
                        <h3>Create Post</h3>
                        <FontAwesomeIcon className='cross-btn' icon={faXmark} style={{ color: "#ffffff", fontSize: "25px" }}
                            onClick={() => { setPopup(false) }}
                        />
                    </div>
                    <form action="" method="post" onSubmit={handleSubmit}>
                        <div className="popup-body">
                            <div className="popup-info">
                                <img src={`http://127.0.0.1:8000/images/${user.image}`} alt="" />
                                <span>{user.name}</span>
                            </div>
                            <div className="popup-body-caption">
                                <input type="text" id='caption' value={formData.caption} onChange={handleChange} placeholder='Write a caption' />

                                {imageUrl ? (
                                    <div className="popup-body-imgUpload">
                                        <div className="cross-btn" style={{ color: "#ffffff", fontSize: "25px" }}>
                                            <FontAwesomeIcon icon={faXmark} onClick={removeImage} />
                                        </div>
                                        <img src={imageUrl} alt="Uploaded" />
                                    </div>
                                ) : (
                                    <div className="popup-body-imgUpload">
                                        <div style={{ textAlign: "center" }}>
                                            <label htmlFor="image">
                                                Upload Your Image
                                                <div><FontAwesomeIcon icon={faUpload} /></div>
                                            </label>
                                        </div>
                                        <input type="file" id="image" onChange={handleImageChange} name="image" style={{ display: "none" }} />
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="popup-footer">
                            <button>Share</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
