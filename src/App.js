import { Routes, Route } from "react-router-dom";

// components
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

// pages
import Products from './scenes/Products'
import Orders from './scenes/Orders'
import Users from './scenes/Users'
import Dashboard from './scenes/Dashboard'
function App() {


  return (
    <>
      <div className="d-flex">
        <Sidebar/>
        <main className="content">
          <Topbar/>
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
