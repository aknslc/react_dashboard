
import HomeLayout from "./scenes/HomeLayout";
import AuthLayout from './scenes/AuthLayout';
import Orders from "./scenes/Orders";
import Products from "./scenes/Products";
import Users from "./scenes/Users";
import ProductDetail from "./scenes/ProductDetail";
import Dashboard from "./scenes/Dashboard";
import Login from './scenes/Login'
import { Routes, Route } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import { Navigate } from "react-router-dom";
import Page404 from "./scenes/Page404";
import OrderDetail from "./scenes/OrderDetail";

function App() {

  const { user } = useAuth();


  const ProtectedRoute = ({ children }) => {

    if (!user) {

      return <Navigate to={'/auth/login'} />
    }

    return children;
  }
  const ProtectedLoginRoute = ({ children }) => {

    if (user) {
      return <Navigate to={'/'} />
    }

    return children;
  }

  return (
    <>

      <Routes>
        <Route path="/" element={<ProtectedRoute><HomeLayout /></ProtectedRoute>}>
          <Route index={true} element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="orders" element={<Orders />} />
          <Route path="users" element={<Users />} />
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="orders/:id" element={<OrderDetail />} />
          <Route path="*" element={<Page404 />} />
        </Route>
        <Route path="/auth" element={<ProtectedLoginRoute><AuthLayout /></ProtectedLoginRoute>}>
          <Route path="login" element={<Login />} />
        </Route>

      </Routes>

    </>
  );
}

export default App;
