import React from 'react'
import { Routes, Route } from "react-router-dom";

// pages
import Products from './scenes/Products'
import Orders from './scenes/Orders'
import Users from './scenes/Users'
import ProductDetail from './scenes/ProductDetail'
import OrderDetail from './scenes/OrderDetail'
import Dashboard from './scenes/Dashboard'
import Login from './scenes/Login';
const MainRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/products" element={<Products />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/users" element={<Users />} />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="/orders/:id" element={<OrderDetail />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </>
    )
}

export default MainRouter