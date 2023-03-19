import { NavLink } from 'react-router-dom';

import classes from './Header.module.css';

export default function Header() {
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
            to="/about-us"
            className={({ isActive }) => (isActive ? classes.active : undefined)}
          >
            About Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
