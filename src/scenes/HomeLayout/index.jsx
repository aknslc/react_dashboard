import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/Sidebar'
import Topbar from '../../components/Topbar'
const HomeLayout = () => {
    return (
        <>
            <div className="page-wrapper">
                <Sidebar />
                <main className="content">
                    <Topbar />
                    <Outlet />
                </main>
            </div>
        </>
    )
}

export default HomeLayout