import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const location = useLocation();

    return (
        <nav className='home-container-nav'>
            <Link to="/" className={`home-container-nav-button ${location.pathname === '/' ? 'active-link' : ''}`}>Home</Link>
            <Link to="/imagemX" className={`home-container-nav-button ${location.pathname === '/imagemX' ? 'active-link' : ''}`}>imagemX</Link>
            <Link to="/imagemY" className={`home-container-nav-button ${location.pathname === '/imagemY' ? 'active-link' : ''}`}>imagemY</Link>
            <Link to="/imagemZ" className={`home-container-nav-button ${location.pathname === '/imagemZ' ? 'active-link' : ''}`}>imagemZ</Link>
        </nav>
    );
}

export default Navbar;