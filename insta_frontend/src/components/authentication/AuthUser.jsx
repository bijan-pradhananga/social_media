import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

export default function AuthUser() {
    const navigate = useNavigate();


    const getToken = () =>{
        const tokenString = sessionStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken;
    }

    const getUser = () =>{
        const tokenString = sessionStorage.getItem('user');
        const userDetails = JSON.parse(tokenString);
        return userDetails;
    }

    const [token,setToken] = useState(getToken());
    const [user,setUser] = useState(getUser());

    const saveToken = (user,token) =>{
        sessionStorage.setItem('token',JSON.stringify(token));
        sessionStorage.setItem('user',JSON.stringify(user));
        setToken(token);
        setUser(user);
        navigate('/')
    }

    const logout = () =>{
        sessionStorage.clear();
    }

    const http = axios.create({
        baseURL:"http://127.0.0.1:8000/api",
        headers:{
            "Content-Type" : "application/json"
        }
    })
    return {
        saveToken,
        getToken,
        logout,
        http,
        token,
        user
    }
}
