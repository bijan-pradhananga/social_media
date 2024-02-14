import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Login from '../components/login_page/Login'
import Register from '../components/register_page/Register'
import MainPage from '../components/main_page/MainPage'

export default function Outer_Links() {
  return (
    <Routes>
        <Route path="*" element={<MainPage/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
    </Routes>
  )
}
