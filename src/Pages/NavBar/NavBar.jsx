import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';

function Navbar() {
    const location = useLocation();

    //armazena o estado atual do dark-mode
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    return (
        <nav className='home-container-nav'>
            <Link to="/" className={`home-container-nav-button ${location.pathname === '/' ? 'active-link' : ''}`}>Home</Link>
            <Link to="/imagemX" className={`home-container-nav-button ${location.pathname === '/imagemX' ? 'active-link' : ''}`}>imagemX</Link>
            <Link to="/imagemY" className={`home-container-nav-button ${location.pathname === '/imagemY' ? 'active-link' : ''}`}>imagemY</Link>
            <Link to="/imagemZ" className={`home-container-nav-button ${location.pathname === '/imagemZ' ? 'active-link' : ''}`}>imagemZ</Link>

            <div className="dark-mode-container">
                <label className="switch">
                    <input
                        type="checkbox"
                        checked={isDarkMode}
                        onChange={() => setIsDarkMode(!isDarkMode)}
                    />
                    <span className="slider">
                        <span className="icon">{isDarkMode ? '🌙' : '☀️'}</span>
                    </span>
                </label>
            </div>
        </nav>
    );
}

export default Navbar;