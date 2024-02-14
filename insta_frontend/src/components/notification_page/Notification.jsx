import React from 'react'
import './notification.css'
import bijan from'../home_page/bijan.jpg'

export default function Notification() {
  return (
    <div className='notification_contents'>
      <div className='notification-header'>
        <h2>Notification</h2>
      </div>
      <div className="notification-body">
        <div className="notification-card">
          <img src={bijan} alt="" srcset="" />
          <div className="notification-card-msg">
            Person liked your post
          </div>
        </div>
        <div className="notification-card">
          <img src={bijan} alt="" srcset="" />
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
