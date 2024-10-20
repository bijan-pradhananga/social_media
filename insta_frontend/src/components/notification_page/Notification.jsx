import React, { useState, useEffect } from 'react'
import './notification.css'
import NotificationBody from './NotificationBody'
import NotificationHeader from './NotificationHeader'
import axios from 'axios'
import AuthUser from '../authentication/AuthUser'
import { API } from '../../api/config'
const notify = async (user_id, notifier_id, type, post_id) => {
  try {
      const inputs = { user_id, notifier_id, type, post_id };
      const response = await axios.post(`${API.defaults.baseURL}/api/notifications`, inputs);
  } catch (error) {
      console.error(error);
  }
}
export { notify };

export default function Notification() {
  const { user } = AuthUser();
  const [notifications,setNotifications] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
const getUserNotifications = async (user_id, setNotifications) => {
  try {
      const response = await axios.get(`${API.defaults.baseURL}/api/notifications/${user_id}`);
      if (response.status === 200) {
          setNotifications(response.data.notifications);
          setIsLoading(false)
      }
  } catch (error) {
      console.error(error);
  }
}
  useEffect(()=>{
    getUserNotifications(user.id,setNotifications)
  },[])


  return (
    <div className='notification_contents'>
      <NotificationHeader/>
      <NotificationBody isLoading={isLoading} user={user} getUserNotifications={getUserNotifications} notifications={notifications} setNotifications={setNotifications}/>
    </div>
  )


}

