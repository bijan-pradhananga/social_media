import { Route, Routes } from "react-router-dom"
import Home from "../components/home_page/Home"
import Search from "../components/search_page/Search"
import Profile from "../components/profile_page/Profile"
import Explore from "../components/explore_page/Explore"
import Notification from "../components/notification_page/Notification"
import AuthUser from "../components/authentication/AuthUser"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComment } from '@fortawesome/free-regular-svg-icons'
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { useState, createContext } from "react"
import axios from 'axios'

export const ImgPopupContext = createContext();

export default function Links() {
  const { user } = AuthUser();
  const [imgPopup, setImgPopup] = useState(false)
  const [imgPopupDetails, setImgPopupDetails] = useState()
  const countLikes = async (postId,setLikeCount) => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/likedposts/count/${postId}`);
      setLikeCount(response.data.likes)
    } catch (error) {
      console.log(error);
    }
  }

  const checkLikeDislike = async (user_id, post_id, setLike, setColor) => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/likedposts/${user_id}/${post_id}`);
      if (response.data.output) {
        setLike(solidHeart)
        setColor('red')
      } else {
        setLike(faHeart)
        setColor('white')
      }
    } catch (error) {
      console.log(error);
    }
  }

  const toggleLikeDislike = async (user_id, post_id,countLikes,setLikeCount) => {
    let ids = {
      user_id, post_id
    }
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/likedposts', ids)
      if (response.status == 200) {
        countLikes(post_id,setLikeCount);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ImgPopupContext.Provider value={{ imgPopup, setImgPopup, imgPopupDetails, setImgPopupDetails ,countLikes, checkLikeDislike,toggleLikeDislike}}>
      <Routes>
        <Route path="" element={<Home user={user} />} />
        <Route path="/search" index element={<Search />} />
        <Route path="/profile/:id" element={<Profile cUser={user} />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/notifications" element={<Notification />} />
      </Routes>
    </ImgPopupContext.Provider>

  )
}
