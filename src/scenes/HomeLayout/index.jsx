import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/Sidebar'
import Topbar from '../../components/Topbar'
const HomeLayout = () => {
    const [activeSide, setActiveSide] = useState(false);
    return (
        <>
            <div className="page-wrapper">
                <Sidebar activeSide={activeSide} setActiveSide={setActiveSide} />
                <main
                    className={`content ${activeSide && 'content-full'}`}

                >
                    <Topbar activeSide={activeSide} setActiveSide={setActiveSide} />
                    <Outlet />
                </main>
            </div>
        </>
    )
}

export default HomeLayout