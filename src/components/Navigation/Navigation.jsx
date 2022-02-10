import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/" exact="true" className={styles.link} >
        Home
      </NavLink>
      <NavLink to="/movies" className={styles.link} >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
