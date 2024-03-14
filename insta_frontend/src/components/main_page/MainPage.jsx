import React from 'react'
import Sidebar from "../sidebar/Sidebar"
import Links from '../../routes/Links'
import AuthUser from '../authentication/AuthUser'
import Login from '../login_page/Login';

export default function MainPage() {
    const {getToken} = AuthUser();
    if (!getToken()) {
        return <Login/>
    }
    return (
        <>
            <div className="container">
                <div className="sidebar">
                    <Sidebar></Sidebar>
                </div>
                <div className="contents">
                    <Links />
                </div>
            </div>
        </>
    )
}
