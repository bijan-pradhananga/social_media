import { Route,Routes } from "react-router-dom"
import Home from "../components/home_page/Home"
import Search from "../components/search_page/Search"
import Profile from "../components/profile_page/Profile"
import Explore from "../components/explore_page/Explore"

export default function Links({}) {
  return (
    <Routes>
        <Route path="/" index element={<Home />}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/profile" element={<Profile/>} />
        <Route path="/explore" element={<Explore/>}/>
    </Routes>
  )
}
