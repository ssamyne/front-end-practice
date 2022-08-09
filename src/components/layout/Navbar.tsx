import styles from './Navbar.module.scss';

import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <NavLink to='/' className={styles.nav__brand}>
        unSmile
      </NavLink>
      <NavLink to='about' className={styles.nav__link}>
        about
      </NavLink>
      <NavLink to='contact' className={styles.nav__link}>
        contact
      </NavLink>
    </div>
  );
};

export default Navbar;
