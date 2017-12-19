import React from 'react';
import { Link } from 'react-router-dom';

const NavLinks = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/search">Search</Link>
      </li>
      <li>
        <Link to="/my-tracks">My Tracks</Link>
      </li>
      <li>
        <Link to="/sign-out">Sign Out</Link>
      </li>
    </ul>
  </nav>
)

export default NavLinks
