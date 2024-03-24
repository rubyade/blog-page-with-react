import './navbar.css';
import logo_light from '../../assets/logo-dark.png';
import logo_dark from '../../assets/logo_light.png';
import search_icon_light from '../../assets/search-w.png';
import search_icon_dark from '../../assets/search-b.png';
import toggle_light from '../../assets/night.png';
import toggle_dark from '../../assets/day.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = ({ theme, setTheme }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const toggleTheme = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light');
  };
  return (
    <nav className='navbar'>
      <img
        src={theme == 'light' ? logo_light : logo_dark}
        alt='logo'
        className='logo'
      />
      <ul
        id='navbar-link'
        className={clicked ? '#navbar-link active' : '#navbar-link'}
      >
        <li>
          <Link className='active' to='/login'>
            HOME
          </Link>
        </li>
        <li>
          <Link to='/login'>LOGIN</Link>
        </li>
        <li>
          <Link to='/blog-post'>SUBMIT BLOG</Link>
        </li>
        <li>
          <Link to='/sign-up'>SIGNUP</Link>
        </li>
      </ul>
      <div className='search-box'>
        <input type='text' placeholder='Search' />
        <img
          src={theme == 'light' ? search_icon_light : search_icon_dark}
          alt=''
        />
      </div>

      <img
        onClick={() => {
          toggleTheme();
        }}
        src={theme == 'light' ? toggle_light : toggle_dark}
        alt='toggle-icon'
        className='toggle-icon'
      />
      <div id='mobile'>
        <i
          id='bar'
          onClick={handleClick}
          className={clicked ? 'fas fa-times' : 'fas  fa-bars'}
        ></i>
      </div>
    </nav>
  );
};

export default Navbar;
