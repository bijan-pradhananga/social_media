import { Route,Routes } from "react-router-dom"
import Home from "../components/home_page/Home"
import Search from "../components/search_page/Search"
import Profile from "../components/profile_page/Profile"
import Explore from "../components/explore_page/Explore"
import Notification from "../components/notification_page/Notification"
import AuthUser from "../components/authentication/AuthUser"
import { useState , createContext} from "react"

export const ImgPopupContext = createContext();

export default function Links() {
  const {user} = AuthUser();
  const [imgPopup,setImgPopup] = useState(false)
  const [imgPopupDetails,setImgPopupDetails] = useState()
  return (
    <ImgPopupContext.Provider value={{imgPopup,setImgPopup, imgPopupDetails, setImgPopupDetails }}>
       <Routes>
        <Route path="" element={<Home user={user} />} />
        <Route path="/search" index element={<Search />} />
        <Route path="/profile/:id" element={<Profile cUser={user}/>} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/notifications" element={<Notification />} />
    </Routes>
  </ImgPopupContext.Provider>

  )
}
