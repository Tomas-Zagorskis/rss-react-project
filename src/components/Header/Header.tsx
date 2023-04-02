import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Header.module.css';

const Header: FC = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? classes.active : undefined)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/music-form"
            className={({ isActive }) => (isActive ? classes.active : undefined)}
          >
            Music Form
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about-us"
            className={({ isActive }) => (isActive ? classes.active : undefined)}
          >
            About Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
