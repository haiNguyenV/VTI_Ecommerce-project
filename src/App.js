import { Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import ProductPage from './pages/ProductPage/ProductPage'
import AdminPage from './pages/AdminPage/AdminPage'
import Login from './pages/LoginPage/Login'
import NoPage from "./pages/NoPage/NoPage";
import PrivateRoutes from './pages/LoginPage/PrivateRoutes'
import { useRef } from "react";

function App() {


  return (
    <div>
      <Routes>
          <Route path='/' element={<ProductPage />}/>
          <Route path='/login' element={<Login />}/>
          <Route element={<PrivateRoutes />}>
            <Route path='/adminpage' element={<AdminPage />}/>
          </Route>
          <Route path='*' element={<NoPage />}/>
      </Routes>
    </div>
  )
}

export default App;
