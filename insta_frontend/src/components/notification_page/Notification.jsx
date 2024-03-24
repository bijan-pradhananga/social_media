import React, { useState, useEffect } from 'react'
import './notification.css'
import NotificationBody from './NotificationBody'
import NotificationHeader from './NotificationHeader'
import axios from 'axios'
import AuthUser from '../authentication/AuthUser'
const notify = async (user_id, notifier_id, type, post_id) => {
  try {
      const inputs = { user_id, notifier_id, type, post_id };
      const response = await axios.post('http://127.0.0.1:8000/api/notifications', inputs);
      if (response.data.message=='Notification deleted successfully') {
        console.log('removed notification');
      }else{
        console.log('notified');
      }
  } catch (error) {
      console.error(error);
  }
}

const getUserNotifications = async (user_id, setNotifications) => {
  try {
      const response = await axios.get(`http://127.0.0.1:8000/api/notifications/${user_id}`);
      if (response.status === 200 && response.data.notifications.length !== 0) {
          setNotifications(response.data.notifications);
      }
  } catch (error) {
      console.error(error);
  }
}
export { notify };

export default function Notification() {
  const { user } = AuthUser();
  const [notifications,setNotifications] = useState([]);
  useEffect(()=>{
    getUserNotifications(user.id,setNotifications)
  },[])
  return (
    <div className='notification_contents'>
      <NotificationHeader/>
      <NotificationBody user={user} getUserNotifications={getUserNotifications} notifications={notifications} setNotifications={setNotifications}/>
    </div>
  )


}

