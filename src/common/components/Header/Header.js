import React from "react";
import './Header.css';
import { BiLogInCircle } from 'react-icons/bi';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">More</a></li>
                </ul>

                <ul>
                    <li><a href="#"><BiLogInCircle /> Login</a></li>
                    <li><a href="#">Signup</a></li>
                </ul>
            </div>
        )
    }
}

export default Header