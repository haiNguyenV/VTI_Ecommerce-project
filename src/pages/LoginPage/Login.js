import { NavLink, redirect, Navigate, useNavigate } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { AiFillLock } from "react-icons/ai";
import { useEffect, useState } from 'react';
import authService from '../../common/api/authService'
import './login.css'
import { BiRestaurant } from "react-icons/bi";



const Login = () => {

    const [userName, setUserName] = useState('');
    const [passWord, setPassWord] = useState('');

    const navigate =  useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token) {
            navigate('/adminpage')
        }
    }, [])

    const handleLogin = () => {
        const username = userName;
        const password = passWord;

        authService.login(username, password)
        .then((response) => {
            localStorage.setItem('token', response.data.accessToken);
            return navigate('/adminpage')
        })
        .catch((error) => {
            alert('tên đăng nhập hoặc mật khẩu không đúng!')
            console.log(error.message);
        })
    }

    // window.addEventListener("keydown", function(event) {
    //     if (event.key === "Enter") {
    //         handleLogin();
    //     }
    // });

    return (
        <div className="login-container">
            <div className="login">
                <div className="login__box">
                    <h1>Đăng nhập</h1>
                    <div className='input__box'>
                        <span>
                            <FaUserAlt/>
                        </span>
                        <input id='userName' type='text' placeholder="Tên đăng nhập..." value={userName} onChange={(e) => setUserName(e.target.value)}/>
                    </div>
                    <div className='input__box'>
                        <span>
                            <AiFillLock/>
                        </span>
                        <input id='passWord' type='password' placeholder="Mật khẩu..."  value={passWord} onChange={(e) => setPassWord(e.target.value)}/>
                    </div>
                    <button onClick={handleLogin}>Đăng nhập</button>
                </div>
            </div>
        </div>
    )
}

export default Login;
