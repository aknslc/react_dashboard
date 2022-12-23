import React from 'react'
import { Routes, Route } from "react-router-dom";

// pages
import Products from './scenes/Products'
import Orders from './scenes/Orders'
import Users from './scenes/Users'
import Dashboard from './scenes/Dashboard'
const MainRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/products" element={<Products />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/users" element={<Users />} />
            </Routes>
        </>
    )
}

export default MainRouter