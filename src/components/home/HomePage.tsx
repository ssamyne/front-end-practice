import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={styles.home}>
      <div className={styles.animation}>
        <div className={styles.animation__smile}></div>
      </div>
      <div className={styles.home__intro}></div>
    </div>
  );
};

export default HomePage;
