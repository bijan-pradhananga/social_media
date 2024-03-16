import React from 'react'
import './notification.css'

export default function Notification() {
  return (
    <div className='notification_contents'>
      <div className='notification-header'>
        <h2>Notification</h2>
      </div>
      <div className="notification-body">
        <div className="notification-card">
          <img src="" alt="" srcset="" />
          <div className="notification-card-msg">
            Person liked your post
          </div>
        </div>
        <div className="notification-card">
          <img src="" alt="" srcset="" />
          <div className="notification-card-msg">
            Person liked your post
          </div>
        </div>
        
        {/* <div className="notification-empty_msg" style={"display:none;"}>
          No Notifications
        </div> */}
      </div>
    </div>
  )
}
