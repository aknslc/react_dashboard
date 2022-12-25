
import HomeLayout from "./scenes/HomeLayout";
import AuthLayout from './scenes/AuthLayout';
import Orders from "./scenes/Orders";
import Products from "./scenes/Products";
import Users from "./scenes/Users";
import ProductDetail from "./scenes/ProductDetail";
import OrderDetail from "./scenes/OrderDetail";
import Dashboard from "./scenes/Dashboard";
import Login from './scenes/Login'
import { Routes, Route } from "react-router-dom";


function App() {

  return (
    <>

      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index={true} element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="orders" element={<Orders />} />
          <Route path="users" element={<Users />} />
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="orders/:id" element={<OrderDetail />} />
        </Route>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>

    </>
  );
}

export default App;
