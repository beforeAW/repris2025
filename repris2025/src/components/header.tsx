import { useState } from 'react';
import { Link } from 'react-router-dom';
import markeRepris from '../assets/marke-repris.png';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
<header className="header">
  <div className="header-container">
    <div className="logo">
      <Link to="/">
        <img src={markeRepris} alt="Repris2025 logo" className="logo-img"   width="112" height="112"/>
      </Link>
    </div>

    <button
      className="menu-toggle"
      onClick={toggleMenu}
      aria-label="Toggle menu"
    >
      <div className="menu-icon">
        <span className={`bar ${isMenuOpen ? 'bar-open-1' : ''}`}></span>
        <span className={`bar ${isMenuOpen ? 'bar-open-2' : ''}`}></span>
        <span className={`bar ${isMenuOpen ? 'bar-open-3' : ''}`}></span>
      </div>
    </button>

    <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
      <ul className="nav-list">
        <li>
          <Link to="/" className="nav-link">Hem</Link>
        </li>
        <li>
          <Link to="/menu" className="nav-link">Meny</Link>
        </li>
        <li>
          <Link to="/schedule" className="nav-link">Schema</Link>
        </li>
        <li>
          <Link to="/map" className="nav-link">Karta</Link>
        </li>
      </ul>
    </nav>
  </div>
</header>
  );
};

export default Header;