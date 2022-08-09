import styles from './Card.module.scss';
import React from 'react';
import Navbar from '../layout/Navbar';

const Card: React.FC<{ children: JSX.Element }> = React.memo(({ children }) => {
  return (
    <div className={styles.container}>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer></footer>
    </div>
  );
});

export default Card;
