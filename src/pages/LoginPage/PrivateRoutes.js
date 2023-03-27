import { Navigate, Outlet } from "react-router-dom"

const PrivateRoutes = () => {
    let isAuth;
    const token = localStorage.getItem('token');

    (token) ? isAuth = true : isAuth = false;

    return isAuth? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoutes;