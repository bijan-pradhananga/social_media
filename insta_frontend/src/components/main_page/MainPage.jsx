import React from 'react'
import Sidebar from "../sidebar/Sidebar"
import Links from '../../routes/Links'

export default function MainPage() {
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
