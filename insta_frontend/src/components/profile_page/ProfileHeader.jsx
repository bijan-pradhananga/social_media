import React from 'react'
import ProfileButton from './ProfileButton'

export default function ProfileHeader({user,cUser,id,userPosts}) {
    return (
        <>
            <div className='profile-header'>
                <div className="profile-img">
                    <img src={`http://127.0.0.1:8000/images/${user.image}`} />
                </div>
                <div className='profile-info'>
                    <div style={{ display: 'flex', marginBottom: '0.6rem' }}>
                        <h3>{user.username}</h3>
                        <ProfileButton cUser={cUser} id={id} />
                    </div>
                    <span>{userPosts.length} posts</span> &nbsp;&nbsp;
                    <span>100 followers</span> &nbsp;&nbsp;
                    <span>100 following</span>
                </div>
            </div>
            <div className="profile-nav"></div>
        </>
    )
}
