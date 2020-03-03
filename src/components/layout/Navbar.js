import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const Navbar = ({ icon, title }) => {

  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>
        <li>

        </li>
      </ul>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,

};

export default Navbar;

