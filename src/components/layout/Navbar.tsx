import styles from './Navbar.module.scss';

import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <NavLink reloadDocument to='/' className={styles.nav__brand}>
        unSmile &#58;&#41;
      </NavLink>
      <NavLink
        to='about'
        className={({ isActive }) => {
          return isActive ? styles.nav__active : styles.nav__link;
        }}
      >
        About
      </NavLink>
      <NavLink
        to='contact'
        className={({ isActive }) => {
          return isActive ? styles.nav__active : styles.nav__link;
        }}
      >
        Contact
      </NavLink>
    </div>
  );
};

export default Navbar;
