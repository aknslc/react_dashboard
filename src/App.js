import { Routes, Route } from "react-router-dom";
import { useState } from 'react';

// components
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

// pages
import Products from './scenes/Products'
import Orders from './scenes/Orders'
import Users from './scenes/Users'
import Dashboard from './scenes/Dashboard'
function App() {
  const [openSideBar, setOpenSideBar] = useState(true);

  return (
    <>
      <div className="d-flex">
        <Sidebar openSideBar={openSideBar} />
        <main className="content">
          <Topbar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
