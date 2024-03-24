import React from 'react'
import { Link } from 'react-router-dom'
import LoadingNotifications from '../loading_component/LoadingNotifications'

export default function NotificationBody({ user, notifications, isLoading }) {
    return (
        <div className="notification-body">
            {isLoading ? (
                <LoadingNotifications count={3} />
            ) : (
                notifications.length !== 0 ? (
                    notifications.map((notification, index) => (
                        <Link to={`/profile/${notification.notifier_id}`} style={{ color: 'white' }} key={index}>
                            <div className="notification-card">
                                <img src={`http://127.0.0.1:8000/images/${notification.image}`} alt="" srcSet="" />
                                <div className="notification-card-msg">
                                    {notification.name === user.name ? 'You' : notification.name} {notification.type === 'like' ? 'liked' : 'commented on'} your post
                                </div>
                            </div>
                        </Link>
                    ))
                ) : (
                    <div className="notification-empty_msg" style={{ fontWeight: 500 }}>
                        No Notifications Yet
                    </div>
                )
            )}

        </div>


    )
}
