import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavItem = ({ path, name }) => {
  return (
    <li
      key={path}
      className="navigation__item"
    >
      <NavLink
        to={path}
        exact
        className="navigation__link"
        activeClassName="navigation__link--active"
      >{name}</NavLink>
    </li>
  );
};

export default NavItem;
