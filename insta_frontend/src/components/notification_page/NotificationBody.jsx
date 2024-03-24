import React from 'react'
import { Link } from 'react-router-dom'

export default function NotificationBody({user, notifications, setNotifications, getUserNotifications }) {
    return (
        <div className="notification-body">
            {notifications.length !== 0 ? (
                notifications.map((notification, index) => (
                    <Link to={`/profile/${notification.notifier_id}`} style={{color:'white'}}>
                        <div className="notification-card" key={index}>
                            <img src={`http://127.0.0.1:8000/images/${notification.image}`} alt="" srcSet="" />
                            <div className="notification-card-msg">
                                {notification.name ==user.name ? 'You' : `${notification.name}` } {notification.type === 'like' ? 'liked' : 'commented on'} your post
                            </div>
                        </div>
                    </Link>
                ))
            ) : (
                <div className="notification-empty_msg" style={{fontWeight:500}}>
                    No Notifications Yet
                </div>
            )}
        </div>

    )
}
