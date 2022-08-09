import styles from './Navbar.module.scss';

import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <NavLink to='/' className={styles.nav__brand}>
        unSmile &#58;&#41;
      </NavLink>
      <NavLink to='about' className={styles.nav__link}>
        About
      </NavLink>
      <NavLink to='contact' className={styles.nav__link}>
        Contact
      </NavLink>
    </div>
  );
};

export default Navbar;