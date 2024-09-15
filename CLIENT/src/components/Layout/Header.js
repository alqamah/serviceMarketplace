import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/slices/authSlice';
import styles from '../../styles/Header.module.css';

const Header = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const user = useSelector(state => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">Your Logo</Link>
      </div>
      <nav className={styles.navMenu}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          {isAuthenticated && <li><Link to="/bookings">My Bookings</Link></li>}
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <div className={styles.authSection}>
        {isAuthenticated ? (
          <>
            <span>Welcome, {user.username}</span>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;