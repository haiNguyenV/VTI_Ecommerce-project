import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = ({userName}) => {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    }

    return (
        <div className="header">
            <ul className="header__menu">
                <li><Link to='/'>Home</Link></li>
                <li style={{display: 'flex', alignItems: 'center'}}>
                    <p style={{display: 'inlineBlock', margin: 0}}>Xin chào, hainv!</p>
                    <button onClick={handleLogout}>Logout</button>
                </li>
            </ul>
        </div>
    )
}

export default Header;